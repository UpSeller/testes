# testes

Repositório de teste para validar o slice **GitHub Content Publishing** do BRAEL (zHolding).

Este é um site satélite Astro mínimo, gerado a partir de `shared/templates/astro-satellite`
no monorepo zHolding, usado exclusivamente para provar o fluxo:

```
Article (BRAEL) -> Astro Markdown -> astro build local -> GitHub commit/push -> GitHub Actions -> GitHub Pages
```

Artigos publicados pelo BRAEL aparecem em `src/pages/blog/{slug}.md`.
