import BLOG from "../blog.config";

const lang = {
  en: {
    NAV: {
      INDEX: "Blog",
      PROJECT: "Project",
      MUSIC: "Music",
      RSS: "RSS",
      SEARCH: "Search",
      ABOUT: "About",
    },
    MUSIC: {
      FREE: "Free",
    },
    PAGINATION: {
      PREV: "Prev",
      NEXT: "Next",
    },
    POST: {
      BACK: "Back",
      TOP: "Top",
    },
    SEARCH: {
      ALL: "Search Articles",
      IN: (tag) => `Search in #${tag}`,
    },
  },
  "zh-CN": {
    NAV: {
      INDEX: "博客",
      PROJECT: "项目",
      MUSIC: "音乐",
      RSS: "订阅",
      SEARCH: "搜索",
      ABOUT: "关于",
    },
    MUSIC: {
      FREE: "免费",
    },
    PAGINATION: {
      PREV: "上一页",
      NEXT: "下一页",
    },
    POST: {
      BACK: "返回",
      TOP: "回到顶部",
    },
    SEARCH: {
      ALL: "搜索文章",
      IN: (tag) => `在 #${tag} 中搜索`,
    },
  },
  "zh-HK": {
    NAV: {
      INDEX: "網誌",
      PROJECT: "項目",
      MUSIC: "音樂",
      RSS: "訂閱",
      SEARCH: "搜尋",
      ABOUT: "關於",
    },
    MUSIC: {
      FREE: "免費",
    },
    PAGINATION: {
      PREV: "上一頁",
      NEXT: "下一頁",
    },
    POST: {
      BACK: "返回",
      TOP: "回到頂端",
    },
    SEARCH: {
      ALL: "搜索文章",
      IN: (tag) => `在 #${tag} 中搜索`,
    },
  },
  "zh-TW": {
    NAV: {
      INDEX: "部落格",
      PROJECT: "項目",
      MUSIC: "音樂",
      RSS: "訂閱",
      SEARCH: "搜尋",
      ABOUT: "關於",
    },
    MUSIC: {
      FREE: "免費",
    },
    PAGINATION: {
      PREV: "上一頁",
      NEXT: "下一頁",
    },
    POST: {
      BACK: "返回",
      TOP: "回到頂端",
    },
  },
  ja: {
    NAV: {
      INDEX: "ブログ",
      PROJECT: "プロジェクト",
      MUSIC: "音楽",
      RSS: "購読",
      SEARCH: "検索",
      ABOUT: "このサイトについて",
    },
    MUSIC: {
      FREE: "無料",
    },
    PAGINATION: {
      PREV: "前ページ",
      NEXT: "次ページ",
    },
    POST: {
      BACK: "戻る",
      TOP: "トップに戻る",
    },
    SEARCH: {
      ALL: "検索記事",
      IN: (tag) => `#${tag} で検索`,
    },
  },
  es: {
    NAV: {
      INDEX: "Blog",
      PROJECT: "Proyecto",
      MUSIC: "Música",
      RSS: "RSS",
      SEARCH: "Buscar",
      ABOUT: "Acerca de mí",
    },
    MUSIC: {
      FREE: "Gratis",
    },
    PAGINATION: {
      PREV: "Anterior",
      NEXT: "Siguiente",
    },
    POST: {
      BACK: "Atrás",
      TOP: "Arriba",
    },
    SEARCH: {
      ALL: "Buscar artículos",
      IN: (tag) => `Buscar en #${tag}`,
    },
  },
};

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case "zh-cn":
    case "zh-sg":
      return lang["zh-CN"];
    case "zh-hk":
      return lang["zh-HK"];
    case "zh-tw":
      return lang["zh-TW"];
    case "ja":
    case "ja-jp":
      return lang.ja;
    case "es":
    case "es-es":
      return lang.es;
    case "en":
    case "en-us":
    default:
      return lang.en;
  }
};
