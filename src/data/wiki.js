// Wiki 条目：每条同样的结构，一句话（one）、打个比方（like）、放到你身上（here，一两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、++粗墨线++（只给照做会出错的坑）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「怎么写」：像懂行的朋友讲给你听。like 是读者认得出的一个画面；here 写成连着的话；myths 先引读者心里的那句话，再直接回答。
// 每条事实都要出自 docs/sources/README.md 里的官方来源，附原文链接；费用和限额写明查看日期。step: 对应的主线步骤；howto: 对应的 How-to。
// nav.js 的 GLOSSARY 用 wiki: 指向这里的 slug。
// 待写：骨架阶段每一条只有标题，one、like、here、myths 都空着；写完一条就把内容填上，全部写完删掉这一行（npm run release 看到它会停下）。

export const WIKI_GROUPS = ["钱怎么回来", "外汇规矩", "账户出问题"];

const stub = (slug, title, group) => ({ slug, title, group, one: "", like: "", here: [], myths: [] });

export const WIKI = [
  // ---------- 钱怎么回来 ----------
  stub("receiving-account", "收款账户", "钱怎么回来"),
  stub("swift", "Swift 电汇", "钱怎么回来"),
  stub("fx-fee", "换汇费", "钱怎么回来"),
  stub("payment-institution", "支付机构", "钱怎么回来"),
  // ---------- 外汇规矩 ----------
  stub("settlement", "结汇和购汇", "外汇规矩"),
  stub("quota", "年度便利化额度", "外汇规矩"),
  stub("current-account", "经常项目", "外汇规矩"),
  stub("watch-list", "关注名单", "外汇规矩"),
  // ---------- 账户出问题 ----------
  stub("holds", "账户限制和保证金", "账户出问题"),
];
