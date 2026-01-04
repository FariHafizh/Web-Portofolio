/**
 * Build URL ke asset di folder `public/`.
 *
 * Penting: Vite bisa deploy di subfolder (BASE_URL), jadi jangan hardcode `/assets/...`.
 */
export function assetUrl(relativePath) {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath.slice(1)
    : relativePath;

  return `${normalizedBase}${normalizedPath}`;
}
