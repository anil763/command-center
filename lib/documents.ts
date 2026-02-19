import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, relative } from 'node:path';
import matter from 'gray-matter';
import { inferDomain, normalizeDomain } from './domains';
import { Document, DocumentTreeNode, DocumentType } from './types';

export const BRAIN_DIR = process.env.BRAIN_DIR || '/Users/anilgunjal/.openclaw/workspace/brain';

const VALID_TYPES: DocumentType[] = ['journal', 'concept', 'decision', 'braindump'];

function walk(dir: string, files: string[] = []): string[] {
  let entries: Array<{ isDirectory: () => boolean; isFile: () => boolean; name: string }>;

  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (error) {
    console.error(`[documents] Unable to read directory: ${dir}`, error);
    return files;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractWikiLinks(content: string): string[] {
  return [...content.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1].trim());
}

function parseType(value: unknown): DocumentType {
  if (typeof value === 'string' && VALID_TYPES.includes(value as DocumentType)) return value as DocumentType;
  return 'concept';
}

function parseDocument(filePath: string): Document | null {
  try {
    const raw = readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const relativePath = relative(BRAIN_DIR, filePath);
    const title = parsed.data.title || basename(filePath, '.md');
    const now = new Date().toISOString();
    const tags = Array.isArray(parsed.data.tags) ? parsed.data.tags.map(String) : [];
    const explicitDomain = normalizeDomain(parsed.data.domain);

    return {
      id: relativePath.replace(/\\/g, '/').replace(/\.md$/, ''),
      slug: slugify(String(title)),
      title: String(title),
      tags,
      created: parsed.data.created || now,
      updated: parsed.data.updated || now,
      type: parseType(parsed.data.type),
      domain: explicitDomain || inferDomain({ title: String(title), tags, relativePath }),
      content: parsed.content || '',
      path: filePath,
      relativePath,
      category: dirname(relativePath) === '.' ? 'root' : dirname(relativePath),
      wikilinks: extractWikiLinks(parsed.content || ''),
    };
  } catch (error) {
    console.error(`[documents] Failed to parse markdown file: ${filePath}`, error);
    return null;
  }
}

export function getAllDocuments(): Document[] {
  try {
    if (!existsSync(BRAIN_DIR)) {
      console.warn(`[documents] BRAIN_DIR does not exist: ${BRAIN_DIR}`);
      return [];
    }

    const filePaths = walk(BRAIN_DIR);

    return filePaths
      .map(parseDocument)
      .filter((doc): doc is Document => !!doc)
      .sort((a, b) => +new Date(b.updated) - +new Date(a.updated));
  } catch (error) {
    console.error('[documents] Failed to load documents', error);
    return [];
  }
}

export function buildTree(documents: Document[]): DocumentTreeNode[] {
  const roots: DocumentTreeNode[] = [];

  const ensureNode = (nodes: DocumentTreeNode[], name: string, path: string): DocumentTreeNode => {
    let node = nodes.find((n) => n.name === name && n.path === path);
    if (!node) {
      node = { name, path, children: [], docs: [] };
      nodes.push(node);
    }
    return node;
  };

  for (const doc of documents) {
    const parts = doc.relativePath.split('/').slice(0, -1);

    if (parts.length === 0) {
      const rootNode = ensureNode(roots, 'root', 'root');
      rootNode.docs.push({
        id: doc.id,
        title: doc.title,
        relativePath: doc.relativePath,
        updated: doc.updated,
        domain: doc.domain,
      });
      continue;
    }

    let currentNodes = roots;
    let currentPath = '';
    let currentNode: DocumentTreeNode | null = null;

    for (const part of parts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      currentNode = ensureNode(currentNodes, part, currentPath);
      currentNodes = currentNode.children;
    }

    currentNode?.docs.push({
      id: doc.id,
      title: doc.title,
      relativePath: doc.relativePath,
      updated: doc.updated,
      domain: doc.domain,
    });
  }

  return roots;
}

export function getDocumentById(id: string): Document | null {
  if (!id) return null;
  return getAllDocuments().find((d) => d.id === id) || null;
}

export function searchDocuments(query: string): Document[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllDocuments();

  return getAllDocuments().filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.content.toLowerCase().includes(q) ||
      d.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
