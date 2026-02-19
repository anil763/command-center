export function injectWikiLinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_m, name) => {
    const target = String(name).trim();
    return `[${target}](brain://${encodeURIComponent(target)})`;
  });
}
