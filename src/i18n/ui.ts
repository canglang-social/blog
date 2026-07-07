// Locale plumbing for the en/zh split (pattern from the Astro i18n recipe).
// Posts live in src/content/blog/<locale>/; a file without a locale folder
// is treated as English so a stray root-level post still builds.

export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.blog': 'Blog',
    'nav.atlas': 'Atlas',
    'nav.about': 'About',
    'blog.heading': 'Writing',
    'blog.filterLabel': 'Filter posts by tag',
    'blog.all': 'All',
    'blog.empty': 'No posts with this tag yet.',
    'post.back': '← Back to writing',
    'post.updated': 'Last updated on',
    'switch.label': '中文',
    'switch.aria': 'Switch to Chinese',
  },
  zh: {
    'nav.blog': '文章',
    'nav.atlas': 'Atlas',
    'nav.about': 'About',
    'blog.heading': '文章',
    'blog.filterLabel': '按标签筛选文章',
    'blog.all': '全部',
    'blog.empty': '这个标签下还没有文章。',
    'post.back': '← 返回文章列表',
    'post.updated': '最后更新于',
    'switch.label': 'EN',
    'switch.aria': 'Switch to English',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Locale of a collection entry, from its id ('zh/slug' → 'zh', else 'en'). */
export function localeFromId(id: string): Lang {
  return id.startsWith('zh/') ? 'zh' : 'en';
}

/** Language-independent slug of a collection entry ('en/foo' → 'foo'). */
export function slugFromId(id: string): string {
  return id.replace(/^(en|zh)\//, '');
}

/** Prefix a site-absolute path with the locale ('/blog/x' → '/zh/blog/x'). */
export function localeUrl(lang: Lang, path: string): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
