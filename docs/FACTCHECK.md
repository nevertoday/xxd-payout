# Fact-check brief (xxd-payout)

The site at /Volumes/T7-usb/js/xxd-payout is an unofficial learning site for people in mainland China who get paid from abroad, Chinese at the root and English under /en/. Its rule: every fact comes from an official source recorded in `docs/sources/README.md` (SAFE and PBoC rules, bank pages, provider agreements, fee pages and help articles), and posts from X appear only as clearly labelled user experience. You are checking that, independently of the writers.

## Sources (local copies; read the ones your pages cite in full)
- Notes with links: `docs/sources/README.md`. Section 3 gives the article numbers of each FX rule; section 5 lists known contradictions; section 6 lists what isn't confirmed.
- Originals: `docs/sources/raw/official/<source>/*.md`, each headed with its URL and fetch time. A link on the site maps to the file with that URL in its header.
- Community: `docs/sources/raw/community/x-*.md` (X posts).

## What to check, sentence by sentence
1. **Supported.** Each claim about a rule, fee, limit, eligibility, step or what a provider or bank does is stated or clearly implied by the source it links. Plain-language explanation and the writer's own clearly marked examples are fine; invented numbers, rules or behavior are not.
2. **Not distorted.** The quota (a facilitation quota, not a ceiling), document requirements, holds and reserves, who can open which account, and every fee say exactly what the source says, no stronger, no weaker.
3. **Dated and specific.** Every fee and limit has an "as of" date and its page link. Promotions have their dates and the standard price. The PayPal account system (贝宝支付 new accounts or c2 accounts) is named wherever the fact differs between them.
4. **Unconfirmed stays unconfirmed.** Items from README section 6 are written as unconfirmed and send the reader to the provider or the bank. No page picks an income category for the reader or gives tax advice.
5. **Forbidden content absent.** No steps or hints for foreign accounts opened with an address or identity the reader doesn't have, splitting amounts, borrowing quota, IDs or accounts, misstated transfer purposes, crypto cash-outs or underground banks. No referral codes or invite links. Explaining why these are off-limits, with the rule linked, is fine.
6. **Community claims labelled.** Anything from X is marked as one user's experience with a link and isn't the source of a rule, fee or step. None of the posts the README marks as crossing the lines is linked, and neither is @noahduck283's "Wise 全网最全使用指南" article.
7. **Links.** Each external link points to a page whose local copy supports the sentence. Run `node scripts/check-doc-links.mjs` and list broken links, missing anchors and blocked pages.
8. **zh and en agree** on every fact, number and date.
9. **No copying** of source paragraphs; at most one short quote per page.

## What to do
- Fix problems directly in your files only, with the smallest edit: correct, soften to what the source says, or delete. Keep the voice and the rules in `docs/MAINTAINING.md`. Edit zh and en together.
- Don't start any server. Don't commit. Don't touch files outside your list.
- Report: each change (file:line, old claim, what the source says with file and a few words, new text), borderline claims you kept, and counts (claims checked, changed, deleted).
