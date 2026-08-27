/**
 * Monta caminhos absolutos respeitando o `base` do site.
 *
 * Quando o site é servido num subdiretório (GitHub Pages em
 * `user.github.io/repo`), `base` está configurado em `astro.config.mjs`.
 * Caminhos absolutos escritos à mão (`/favicon.svg`, `/`) apontariam para a
 * raiz do domínio e dariam 404 — precisam do prefixo.
 *
 * `import.meta.env.BASE_URL` pode vir com ou sem barra final dependendo da
 * configuração; esta função normaliza para exatamente uma barra de separação:
 *
 *   BASE_URL "/"          + "favicon.svg"  -> "/favicon.svg"
 *   BASE_URL "/repo"      + "favicon.svg"  -> "/repo/favicon.svg"
 *   BASE_URL "/repo/"     + "/favicon.svg" -> "/repo/favicon.svg"
 *   BASE_URL "/repo"      + ""             -> "/repo/"   (home do site)
 */
export function withBase(path: string = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
