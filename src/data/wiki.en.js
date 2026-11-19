// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows how this works, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
// Site links point at /en/…; every fact links its official source from docs/sources/README.md.
// 待写 TBD: only titles so far; one, like, here and myths are empty until each entry is written.
export const WIKI_GROUPS_EN = {
  "钱怎么回来": "How money gets home",
  "外汇规矩": "China's FX rules",
  "账户出问题": "When an account has trouble",
};

const stub = (title) => ({ title, one: "", like: "", here: [], myths: [] });

export const WIKI_EN = {
  "receiving-account": stub("Receiving account"),
  "swift": stub("Swift wire"),
  "fx-fee": stub("Conversion fee"),
  "payment-institution": stub("Payment institution"),
  "settlement": stub("Settling and buying foreign currency"),
  "quota": stub("The annual quota"),
  "current-account": stub("Current account"),
  "watch-list": stub("The watch list"),
  "holds": stub("Account limitations and reserves"),
};
