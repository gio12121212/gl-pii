/** Agrega la base configurada en Astro a una ruta interna del sitio. */
export function withBase(path: string | undefined): string | undefined {
  if (path === undefined) return undefined;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`;
}
