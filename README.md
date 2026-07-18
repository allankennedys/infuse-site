# infuse-site

Site institucional da Infuse Software — https://www.infusesoftware.com

## Stack

React 19 + TypeScript + Vite + Tailwind CSS 4.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build para conferência
```

## Estrutura

- `src/` — componentes da landing page
- `public/` — arquivos servidos como estão na raiz do site:
  - `crm/` e `agenda/` — landing pages próprias, HTML estático
  - `robots.txt`, `sitemap.xml`, `llms.txt`, `404.html`, favicons
  - `images/`, `video/` — mídia da página

## Deploy

Automático pela Vercel a cada push na branch `main`.
O build é definido em `vercel.json` (`npm run build` → `dist/`).
