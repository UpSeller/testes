# testes

Repositório de teste para validar o slice **GitHub Content Publishing** do BRAEL (zHolding).

Este é um site satélite Astro mínimo, gerado a partir de `shared/templates/astro-satellite`
no monorepo zHolding, usado exclusivamente para provar o fluxo:

```
Article (BRAEL) -> Astro Markdown -> astro build local -> GitHub commit/push -> GitHub Actions -> GitHub Pages
```

Artigos publicados pelo BRAEL aparecem em `src/pages/blog/{slug}.md`.

## Status do pipeline

- `package-lock.json` commitado (exigido pelo `withastro/action@v3` para detectar o npm).
- `lightningcss` declarado como dependência explícita (o `astro.config.mjs` usa
  `vite.build.cssMinify: "lightningcss"`, mas o pacote não é instalado automaticamente
  como dependência transitiva — mesmo problema deve ser corrigido no template
  compartilhado do zHolding para sites satélite reais).
- `src/pages/index.astro` usa `import.meta.glob` (em vez do `Astro.glob` depreciado,
  que lança erro quando não há nenhum post ainda).
- GitHub Pages habilitado em Settings → Pages → Source: GitHub Actions.
