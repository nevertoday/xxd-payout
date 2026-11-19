# Shared brief for content writers (xxd-payout)

## The user's goal
An independent, open-source, unofficial learning site at payout.xiaoxiaodong.ai for people who really live in mainland China and get paid from abroad: freelance work, creator income, online selling. It helps them pick a legitimate way to receive the money, understand the fees and the USD 50,000 annual quota, and get the money onto their own Chinese bank card. Chinese at the root, English under /en/, no other languages. The sister site https://saily.xiaoxiaodong.ai (source: /Volumes/T7-usb/js/xxd-saily, read-only for you) is the model for tone, page shapes and voice: a friend who knows the subject explaining it, Kevin Kelly style (one core idea per page, a picture or small story first, connected sentences).

## Read before writing
1. `docs/MAINTAINING.md` in your worktree: the hard rules (硬规矩), the sources rules (资料来源) and the 「怎么写」 voice section. Follow them exactly.
2. `docs/sources/README.md`: every fact the site may use, each with its official link. Section 1 is the provider table, 2 the provider notes, 3 China's FX rules, 4 the X posts with a verdict on each, 5 contradictions, 6 things not confirmed, 7 pages only a browser can check, 8 a suggested outline per page.
3. The originals in `/Volumes/T7-usb/js/xxd-payout/docs/sources/raw/` (local only, not in git): `official/<source>/*.md` (SAFE and PBoC rules, bank pages, provider agreements, fee pages and help articles; each file starts with its URL and fetch time) and `community/x-*.md` (X posts, user experience only). Read the ones your page relies on in full.
4. For page shape, 2 or 3 matching xxd-saily pages (`src/pages/start/*.mdx`, `src/pages/guide/3-abroad.mdx`, `src/pages/howto/refund.mdx`, `src/data/wiki.js`) and the components they import. Copy the shape, not the content.

## Facts and sources
- Every factual statement (rules, fees, limits, who can open what, steps, what a provider or bank does) comes from an official source listed in `docs/sources/README.md`. Write it in your own words, quote at most one sentence, and link the page the fact came from.
- Every fee and limit carries its "as of" date and the page link: 「截至 2026-11-19，……（[PayPal 费用页](…)）」 / "As of 2026-11-19, PayPal's fee page lists … ([fee page](…))". If the page shows its own "last updated" date, give that too. Promotions carry their start and end dates and the standard price.
- Show money as a formula, leg by leg (receiving fee, conversion fee, withdrawal fee, the bank's charges). Never a single "total %" and never "cheapest".
- Say which PayPal account system you mean: the new 贝宝支付 accounts (paypal.cn) or the older c2 accounts (PayPal Pte. Ltd., paypal.com/c2). Plain "PayPal" only when the fact holds for both.
- The USD 50,000 is a facilitation quota, not a ceiling. Say so whenever the quota comes up, with the SAFE source.
- Things the README lists as not confirmed (section 6) are written as not confirmed, with "ask the provider or your bank": 「这一点官方页面没有写明，办之前先问 PayPal 中国或你的开户银行。」 Never resolve them yourself.
- Which income category a reader falls into is the bank's call (指引 第六十八条). Don't pick one for them. Tax is out of scope: one line pointing to the tax authority or a professional, nothing more.
- X posts: only as clearly labelled user experience (「有网友在 X 上分享……」 / "One user on X reports …") with a link, never as the source of a rule, fee or step. Where they disagree with an official source, the official source wins. Never link the posts the README marks as crossing the lines (@TaoRay, @DtDt666, @moranweb3, @aladdin_im, @victorhan2012), nor @noahduck283's long "Wise 全网最全使用指南" article, which carries splitting and borrowed-address advice.
- Never teach, describe step by step, or hint at: opening a foreign account (US PayPal, HK PayPal, HK Stripe) with an address or identity you don't have, mail-forwarding or borrowed addresses, splitting amounts, borrowing someone's quota, ID or account, misstating a transfer's purpose, crypto cash-outs (exchanges, C2C, OTC), underground banks. No referral codes or invite links. When a page explains why not, cite the rule and link it (办法 第七条, 指引 第五十七/六十一/六十二条, 银发〔2021〕237号, the provider's agreement).
- The site is unofficial and not legal or tax advice. Don't speak for PayPal, Wise, Payoneer, WorldFirst, any bank or SAFE.
- UI labels: bold, as the provider's own page writes them. On zh pages use the provider's Chinese wording where it has a Chinese page (paypal.cn, Payoneer zh-hans, worldfirst.com.cn); for English-only providers (Wise, Stripe) keep the English in bold with a Chinese gloss.
- Examples never show real account numbers, card numbers, ID numbers, emails, balances or names.

## Files
- Write only the files your brief lists, zh and /en/ twin together, same facts and structure. When a page is done, set its `ready: true` in `src/data/nav.js` only if your brief says you own that line; otherwise list it in your report. Don't edit `src/data/figs.js` or files another writer owns; list needed changes in your report.

## Checks before you report
- `npm run build`, `node scripts/check-i18n.mjs` and `node scripts/check-site.mjs` pass in your worktree. Run `node scripts/check-doc-links.mjs` and report every broken link, missing anchor and blocked page among the links you added.
- No bare `<`, `{`, `}` in MDX prose; one `<mark>` per page at most; Reply blocks titled 示意 / "Illustration".
- Commit on your branch in your worktree (`git add -A && git commit -m "<short message>"`). Don't push.
- Don't start a dev server. If you must look at a page, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1`, kill what you started when you're done, and confirm with `lsof -i :<port>` that the port is free. Before you report, `pgrep -fl 'wrangler|workerd|esbuild|vite|http.server|astro'` must show nothing of yours.

## Report
Files written; for each page its one core idea (zh/en); the sources each fact relies on (README section and URL); every fee or limit with its "as of" date; any statement you couldn't source (and left out); unconfirmed items you wrote as unconfirmed; community posts you cited; requested glossary terms or nav changes; your commit hash.
