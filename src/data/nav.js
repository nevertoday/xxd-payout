// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，左侧导航里显示「编写中」，不给链接；写完一页改成 ready: true（check-i18n 会拦住还空着却标了 true 的页）。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站只有两种语言：读者住在中国大陆，中文是主站，英文给想对照原文的人。 */
export const LANGS = [
  { code: "zh", name: "中文", html: "zh-CN" },
  { code: "en", name: "English", html: "en" },
];
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
/** 当前页面的语言：路径以 /en/ 开头是英文，其余是中文 */
export const langOf = (pathname = "") => (/^\/en(?=\/|$)/.test(pathname.slice(BASE.length)) ? "en" : "zh");
/** 站内链接：部署在子路径时自动加前缀；英文加 /en */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/** 同一页在另一种语言里的地址（两种语言的页面一一对应；404 回首页） */
export const langHref = (pathname, target) => {
  const rel = (pathname.slice(BASE.length) || "/").replace(/^\/en(?=\/|$)/, "") || "/";
  return link(/\/404\/?$/.test(rel) ? "/" : rel, target);
};
/** 取某个对象在当前语言下的字段：英文先找 x.en[key]，没有就用中文 */
export const t = (x, key, lang) => (lang === "zh" ? x[key] : x.en?.[key] ?? x[key]);

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-payout";
/** 国家外汇管理局：结汇、购汇和额度的规定以它为准。各家的费用和规则看它们自己的页面，具体链接写在正文里。 */
export const SAFE = "https://www.safe.gov.cn/";

// 新手入门：给第一次从海外收钱的人。三课讲三件最要紧的事，讲完再去走完整教程。
export const LESSONS = [
  { n: 1, slug: "1-three-legs", title: "一笔钱回国，要走三段路", minutes: "8 分钟", ready: false, sum: "谁付钱给你、钱先落在哪个账户、再怎么变成人民币到你卡上，每一段各有各的费用", en: { title: "A payment home takes three legs", minutes: "8 minutes", sum: "Who pays you, which account the money lands in first, and how it becomes RMB on your card, with a fee at each leg" } },
  { n: 2, slug: "2-quota", title: "5 万美元额度：是什么，不是什么", minutes: "10 分钟", ready: false, sum: "这 5 万美元管的是什么、不管什么，超过了要准备哪些材料", en: { title: "The USD 50,000 quota: what it is and isn't", minutes: "10 minutes", sum: "What the USD 50,000 covers and what it doesn't, and what to bring when you go over it" } },
  { n: 3, slug: "3-own-name", title: "账户只能用你自己的真实身份", minutes: "8 分钟", ready: false, sum: "海外的收款账户认的是你是谁、真正住在哪；用别人的地址、身份或账户会出什么事", en: { title: "Accounts only work in your own real name", minutes: "8 minutes", sum: "Providers go by who you are and where you really live, and what happens if you use someone else's address, ID or account" } },
];
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-map", title: "先看清钱从哪来", minutes: "读 5 分钟", ready: false, sum: "你收的是货款、服务费、版权收入还是平台分成，付钱的人能用哪种方式付", en: { title: "Where your money comes from", minutes: "5-minute read", sum: "Whether you're paid for goods, services, royalties or platform revenue, and how your payer can pay" } },
  { n: 1, slug: "1-choose", title: "选一个收款账户", minutes: "10 分钟", ready: false, sum: "让付钱的人来定：PayPal 的买家、电商平台、银行转账的客户，各有合适的账户", en: { title: "Pick a receiving account", minutes: "10 minutes", sum: "Let your payer decide: PayPal buyers, marketplaces and clients who wire money each fit a different account" } },
  { n: 2, slug: "2-open", title: "用自己的身份开户", minutes: "15 分钟", ready: false, sum: "用你自己的身份证、真实地址和自己名下的银行卡注册，各家要哪些材料", en: { title: "Open it in your own name", minutes: "15 minutes", sum: "Sign up with your own ID, your real address and a bank card in your name, and what each provider asks for" } },
  { n: 3, slug: "3-paper-trail", title: "从第一天起留好凭证", minutes: "10 分钟", ready: false, sum: "合同、订单、发票、交付记录、平台账单，结汇和账户审核都会用到", en: { title: "Keep the paper trail from day one", minutes: "10 minutes", sum: "Contracts, orders, invoices, proof of delivery and platform statements, which settlement and account reviews both ask for" } },
  { n: 4, slug: "4-bring-home", title: "把钱换成人民币到卡上", minutes: "15 分钟", ready: false, sum: "让收款平台直接换成人民币打到卡上，或者先把美元电汇回国、再到银行结汇", en: { title: "Bring it home in RMB", minutes: "15 minutes", sum: "Let the provider pay RMB to your card, or wire USD home and settle it at your bank" } },
  { n: 5, slug: "5-fees", title: "算清每一段的费用", minutes: "10 分钟", ready: false, sum: "收款费、换汇费、提现费分开算，每个数字记下你查的是哪一天的费用页", en: { title: "Add up each leg's fees", minutes: "10 minutes", sum: "Count the receiving, conversion and withdrawal fees separately, and note the date of the fee page each number came from" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "算钱", en: { group: "Money math" }, items: [
    { slug: "paypal-100", title: "100 美元的 PayPal 付款，最后到手多少", ready: false, en: { title: "What a USD 100 PayPal payment leaves you with" } },
  ]},
  { group: "回国", en: { group: "Getting it home" }, items: [
    { slug: "wise-to-bank", title: "Wise 里的美元怎么回到国内银行卡", ready: false, en: { title: "Move USD from Wise to your Chinese bank card" } },
    { slug: "over-quota", title: "一年超过 5 万美元，怎么结汇", ready: false, en: { title: "Settling more than USD 50,000 in a year" } },
  ]},
  { group: "出问题了", en: { group: "When things go wrong" }, items: [
    { slug: "paypal-limited", title: "PayPal 账户被限制或冻结怎么办", ready: false, en: { title: "When PayPal limits or freezes your account" } },
  ]},
  { group: "避坑", en: { group: "Avoiding traps" }, items: [
    { slug: "us-paypal", title: "想开美区 PayPal？先看这一页", ready: false, en: { title: "Thinking of a US PayPal account? Read this first" } },
    { slug: "bad-tutorials", title: "哪些教程不该照做", ready: false, en: { title: "Tutorials you shouldn't follow" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 每句话都出自 docs/sources/README.md 里的官方来源（外汇局的办法、实施细则、指引，PayPal 的协议和费用页，Wise 的帮助页），出处跟着各自的 Wiki 条目走。
export const GLOSSARY = {
  结汇: { tip: "把收到的外币换成人民币，比如把美元卖给银行。个人结汇每年有 5 万美元的便利化额度。", wiki: "settlement", en: { label: "settlement", tip: "Turning foreign currency you received into RMB, for example selling USD to your bank. Individuals get a USD 50,000 annual quota for it." } },
  购汇: { tip: "用人民币买外币。它和结汇一样，有一份自己的每人每年 5 万美元便利化额度。", wiki: "settlement", en: { label: "buying foreign currency", tip: "Using RMB to buy foreign currency. Like settlement, it has a USD 50,000 per-person annual quota of its own." } },
  年度便利化额度: { tip: "每人每年结汇、购汇各 5 万美元，凭身份证就能办。它不是上限：真实的收入超过了，带上交易材料照样能办。", wiki: "quota", en: { label: "annual quota", tip: "USD 50,000 a year each for settling and buying foreign currency, with just your ID. It isn't a ceiling: for real income above it, you bring the transaction documents." } },
  经常项目: { tip: "外汇里和真实交易有关的那一类，服务费、版权收入、工资都在里面。办这一类外汇，要有真实、合法的交易背景。", wiki: "current-account", en: { label: "current account", tip: "The FX category for real transactions; service fees, royalties and wages all fall in it, and each needs a real, lawful transaction behind it." } },
  支付机构: { tip: "有人民银行支付牌照、但不是银行的公司，比如贝宝支付（北京）。外汇局规定，支付机构外汇业务里的个人结售汇不占年度额度；某一家算不算，要问它自己。", wiki: "payment-institution", en: { label: "payment institution", tip: "A non-bank company with a PBoC payment licence, such as 贝宝支付 (Beijing). SAFE's rules say personal FX through a payment institution's FX business doesn't use the annual quota; whether a given provider's payout counts, ask the provider." } },
  "Swift 电汇": { tip: "银行之间的跨境转账。比如 Wise 能把美元用 Swift 汇到你在国内的银行账户，到账以后你再在银行结汇。", wiki: "swift", en: { label: "Swift wire", tip: "A bank-to-bank international transfer. Wise, for one, can send USD by Swift to your bank account in China, and you then settle it at your bank." } },
  中间行: { tip: "Swift 电汇从一家银行到另一家，途中转手的银行。它们有时会从汇款里扣一笔钱，所以 Wise 预计有中间行收费时，报的费用会高一些。", wiki: "swift", en: { label: "correspondent bank", tip: "A bank a Swift wire passes through on its way. Some take a fee out of the transfer, which is why Wise quotes a higher fee when it predicts correspondent fees." } },
  收款账户: { tip: "海外的钱先落脚的那个账户，开在你自己名下，比如 PayPal、Wise、Payoneer、万里汇。", wiki: "receiving-account", en: { label: "receiving account", tip: "The account in your own name where money from abroad lands first, such as PayPal, Wise, Payoneer or WorldFirst." } },
  贝宝支付: { tip: "贝宝支付（北京）有限公司，PayPal 在中国的全资子公司，持人民银行支付牌照的非银行支付机构。人在大陆要用 PayPal 收货款，新账户开在它这里（paypal.cn）。", wiki: "paypal-accounts", en: { label: "贝宝支付 (PayPal's China company)", tip: "贝宝支付（北京）有限公司, PayPal's wholly owned company in China and a non-bank payment institution licensed by the People's Bank of China. From mainland China, new PayPal accounts for getting paid for sales are opened with it (paypal.cn)." } },
  个人类别的企业用户: { tip: "贝宝支付给个人卖家的注册身份。它目前只开企业账户，个人以这个身份注册，要年满 18 岁的中国居民。", wiki: "paypal-accounts", en: { label: "individual-type business user", tip: "How an individual seller signs up with 贝宝支付. It only offers business accounts for now, so individuals register this way; you must be a Chinese resident aged 18 or over." } },
  "c2 老账户": { tip: "PayPal Pte. Ltd. 按 paypal.com/c2 用户协议开的老账户。2026-06-30 以后注册的个人账户，只能收家人和朋友的付款。", wiki: "paypal-accounts", en: { label: "older c2 account", tip: "An older account with PayPal Pte. Ltd. under the paypal.com/c2 user agreement. Personal accounts registered after 2026-06-30 can only receive money from friends and family." } },
  可收款额度: { tip: "PayPal 跨境收款按你的交易记录估出来的、能结成人民币的金额。一般每天更新一次，不会高于可用余额。", wiki: "paypal-accounts", en: { label: "amount you can settle", tip: "What PayPal's cross-border settlement estimates you can turn into RMB, based on your transaction records. It usually updates once a day and never exceeds your available balance." } },
  换汇费: { tip: "把一种货币换成另一种时收的钱。费用页把它和收款费分开列，比如 PayPal 写的是在基础汇率之上加几个百分点。", wiki: "fx-fee", en: { label: "conversion fee", tip: "What you pay to change one currency into another. Fee pages list it apart from the receiving fee; PayPal, for one, states it as a percentage above its base rate." } },
  冻结: { tip: "平台暂时扣住收到的付款，谁都用不了这笔钱。贝宝支付新账户的协议里，基于风险的冻结一般最多 30 天。", wiki: "holds", en: { label: "hold", tip: "When a provider sets a payment you received aside for now, so nobody can use it. In the agreement for new 贝宝支付 accounts, risk-based holds usually last up to 30 days." } },
  准备金: { tip: "平台觉得风险高时，从你的余额里留出一部分，显示为待处理、暂时不能提现，有人也叫它保证金。PayPal 的条款写明它可以给账户设准备金。", wiki: "holds", en: { label: "reserve", tip: "Part of your balance a provider holds back when it sees a high risk; it shows as pending and can't be withdrawn for now. Some people call it a 保证金 (deposit). PayPal's terms say it can set one on your account." } },
  账户限制: { tip: "平台觉得有风险时，暂时不让你收款、提现或动用余额。贝宝支付新账户的协议里，按风险暂扣的钱一般最长扣 30 天。", wiki: "holds", en: { label: "account limitation", tip: "When a provider sees a risk and stops you receiving, withdrawing or using your balance for now. In the agreement for new 贝宝支付 accounts, risk-based holds usually last up to 30 days." } },
  近亲属: { tip: "外汇规定里的近亲属：配偶、父母、子女、兄弟姐妹、祖父母、外祖父母、孙子女、外孙子女。额度以内的结汇、购汇，只有他们能替你办。", wiki: "settlement", en: { label: "close relative", tip: "In China's FX rules: spouse, parents, children, siblings, grandparents on either side and grandchildren on either side. Only they can handle settling or buying within your quota for you." } },
  关注名单: { tip: "外汇局给规避额度管理的人列的名单。借用别人额度的人直接被列进去，当年和之后两年，办结汇、购汇都要拿有交易额的材料。", wiki: "watch-list", en: { label: "watch list", tip: "SAFE's list for people who get around the quota rules. Using someone else's quota puts you straight on it, and for that year and the next two, every settlement or purchase needs transaction documents." } },
};
