export function assetUrl(relativePath) {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${normalizedBase}${normalizedPath}`;
}
