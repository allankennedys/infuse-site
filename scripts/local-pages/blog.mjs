/**
 * Artigos do blog (`/blog/<slug>/`). Cada arquivo `blog-*.mjs` exporta um array;
 * este módulo junta todos. O formato está documentado em `blog-01.mjs`.
 */
import { BLOG_01 } from './blog-01.mjs';
import { BLOG_02 } from './blog-02.mjs';
import { BLOG_03 } from './blog-03.mjs';
import { BLOG_04 } from './blog-04.mjs';
import { BLOG_05 } from './blog-05.mjs';
import { BLOG_06 } from './blog-06.mjs';
import { BLOG_07 } from './blog-07.mjs';
import { BLOG_08 } from './blog-08.mjs';
import { BLOG_09 } from './blog-09.mjs';
import { BLOG_10 } from './blog-10.mjs';
import { BLOG_11 } from './blog-11.mjs';
import { BLOG_12 } from './blog-12.mjs';
import { BLOG_13 } from './blog-13.mjs';
import { BLOG_14 } from './blog-14.mjs';
import { BLOG_15 } from './blog-15.mjs';
import { BLOG_16 } from './blog-16.mjs';
import { BLOG_17 } from './blog-17.mjs';
import { BLOG_18 } from './blog-18.mjs';
import { BLOG_19 } from './blog-19.mjs';
import { BLOG_20 } from './blog-20.mjs';
import { BLOG_21 } from './blog-21.mjs';
import { BLOG_22 } from './blog-22.mjs';

const TODOS = [...BLOG_01, ...BLOG_02, ...BLOG_03, ...BLOG_04, ...BLOG_05, ...BLOG_06, ...BLOG_07, ...BLOG_08, ...BLOG_09, ...BLOG_10, ...BLOG_11, ...BLOG_12, ...BLOG_13, ...BLOG_14, ...BLOG_15, ...BLOG_16, ...BLOG_17, ...BLOG_18, ...BLOG_19, ...BLOG_20, ...BLOG_21, ...BLOG_22];

/** Allan: sites, sistemas, SEO local e marketing local. Breno: CRM, IA, automação, tráfego e placas. */
const CATEGORIAS_ALLAN = new Set([
  'Sites e presença digital',
  'Sistemas sob medida',
  'SEO local por cidade',
  'Negócios locais',
  'Marketing para negócios locais',
]);
const autorDe = (b) =>
  b.autor ??
  (CATEGORIAS_ALLAN.has(b.categoria) || /^(criacao-de-sites|loja-virtual-e-ecommerce)-em-/.test(b.slug) ? 'allan' : 'breno');

export const BLOG = TODOS.map((b) => ({ ...b, autor: autorDe(b) }));
