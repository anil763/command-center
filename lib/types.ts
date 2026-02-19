export type Domain = 'revenue' | 'spiritual' | 'ugc' | 'presidio' | 'ashram';

export type DocumentType = 'journal' | 'concept' | 'decision' | 'braindump';

export interface Document {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  created: string;
  updated: string;
  type: DocumentType;
  domain: Domain;
  content: string;
  path: string;
  relativePath: string;
  category: string;
  wikilinks: string[];
}

export interface DocumentTreeNode {
  name: string;
  path: string;
  children: DocumentTreeNode[];
  docs: Pick<Document, 'id' | 'title' | 'relativePath' | 'updated' | 'domain'>[];
}

export interface DocumentsResponse {
  version: number;
  documents: Document[];
  tree: DocumentTreeNode[];
}
