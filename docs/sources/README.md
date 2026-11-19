# Payout sources for a mainland China "getting paid from abroad" site

Research pack for an unofficial, open-source zh + en learning site (same family as saily.xiaoxiaodong.ai). The site helps people who live in mainland China pick a legitimate way to receive money from abroad and understand fees, limits and how the money reaches a Chinese bank account. It never teaches false addresses, identities or residency, never helps get around China's FX rules or a provider's terms, and carries no referral codes.

This folder holds facts only. Nothing here is a draft of site copy.

- Every fact below carries the official URL it came from. All pages were fetched on **2026-11-19** (UTC) with curl, no login, no forms. A raw copy of each page sits under `raw/`, with the URL and fetch time at the top of the file.
- `raw/official/<provider>/` holds official pages. `raw/community/` holds X posts, each labelled USER EXPERIENCE at the top.
- Fees change. Every fee row names the page's own "last updated" date when the page shows one.
- Pages that blocked scripts are listed under "Needs a browser check". Their content is not guessed anywhere in this file.
- `tools/` holds the scripts that produced `raw/` (`fetch.py`, `nextdata.py`, `pdf2md.py`, `fxtweet.py`, `sentences.py`), so anyone can refetch a page and diff it.

## Contents

1. Provider table
2. Provider notes (PayPal China, PayPal Hong Kong, Wise, Payoneer, WorldFirst, PingPong, Stripe)
3. China's rules for individuals receiving foreign currency
4. Community posts on X
5. Contradictions between sources
6. Things not confirmed
7. Needs a browser check
8. Suggested outline for a beginner site

## 1. Provider table

"Open from mainland" means a person who really lives in mainland China, using their own mainland ID and real address.

| Provider | Who can open it from mainland China | What you can receive | How money reaches a Chinese bank | Fees (official page, page date) | Limits | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| PayPal China, new accounts at 贝宝支付（北京）有限公司 | Only "企业账户" type is offered. A "个人类别的企业用户" must be a Chinese resident aged 18+; companies must be set up or operating in China. Holders must be China tax residents only, never US tax persons. [cross-border UA, 2026-05-28](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh) | Payments for goods and services from buyers abroad (checkout, invoices, payment links). [paypal.cn home](https://www.paypal.cn/) | "PayPal跨境收款" settles the balance in RMB to your own linked domestic bank card. Requests before 13:00 Beijing time on a working day usually arrive the same day. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh) | Receiving international commercial payments 4.40% + fixed fee (USD 0.30) [c2 merchant fees, updated 2025-06-18](https://www.paypal.com/c2/business/paypal-business-fees?locale.x=zh_C2). RMB settlement fee standard 1.0%, promo "0.5%封顶" 2026-01-15 to 2026-12-31 for USD balances, plus 6% VAT on the fee. USD/HKD to CNY conversion 0% promo (standard 0.2%), other currencies 2.5%. [fee centre](https://www.paypal.cn/portal/fees?locale.x=zh) | Minimum 20 USD per settlement request. The amount you can settle ("可收款额度") is computed from your transaction records and updated daily. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh) | Real-name KYC. Individual sellers need an email, a mainland 11-digit mobile number, a valid mainland ID card (both sides) and face verification. [personal seller guide PDF](https://objects.paypal.cn/ppcn-martech-infostore/assets/PayPal%E4%B8%AD%E5%9B%BD%E4%B8%AA%E4%BA%BA%E5%8D%96%E5%AE%B6%E6%B3%A8%E5%86%8C%E6%8C%87%E5%8D%97.pdf). KYC review usually within 2 working days. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh) |
| PayPal China, older accounts with PayPal Pte. Ltd. (c2) | Personal and business accounts exist under the c2 agreement. Personal accounts registered after 2026-06-30 can no longer accept goods-and-services payments (friends-and-family only) and cannot convert to business. Business account holders must also open an account at 贝宝支付. [c2 UA, 2026-06-30, section 中国大陆](https://www.paypal.com/c2/legalhub/paypal/useragreement-full?locale.x=zh_C2) | Friends-and-family payments; selling only on accounts registered before that date | USD wire to a mainland bank (then you settle at the bank), or a Hong Kong or US bank account. [help394](https://www.paypal.com/c2/cshelp/article/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%88%91%E7%9A%84paypal%E8%B4%A6%E6%88%B7%E6%8F%90%E5%8F%96%E8%B5%84%E9%87%91%EF%BC%9F-help394) | Mainland wire 35.00 USD per withdrawal; HK bank free at 1,000 HKD or more, 3.50 HKD below; US bank 35.00 USD; cheque 5.00 USD; failed wire return 15.00 USD. [consumer fees, updated 2021-07-30](https://www.paypal.com/c2/webapps/mpp/paypal-fees?locale.x=zh_C2) | Wire minimum 150 USD (3 to 7 working days); HK minimum 80 HKD; US minimum 36 USD. [help394](https://www.paypal.com/c2/cshelp/article/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%88%91%E7%9A%84paypal%E8%B4%A6%E6%88%B7%E6%8F%90%E5%8F%96%E8%B5%84%E9%87%91%EF%BC%9F-help394) | Withdrawal limits until verified; see account | 
| PayPal Hong Kong | Not open to mainland residents. Individuals must be Hong Kong SAR residents aged 18+; businesses must be located and operating in Hong Kong. [HK UA, 2026-05-28](https://www.paypal.com/hk/legalhub/paypal/useragreement-full?locale.x=zh_HK) | n/a for this audience | HKD to a Hong Kong bank, USD to a US bank. [HK UA](https://www.paypal.com/hk/legalhub/paypal/useragreement-full?locale.x=zh_HK) | [HK fees page](https://www.paypal.com/hk/webapps/mpp/paypal-fees?locale.x=zh_HK) | n/a | Biometric check with a Hong Kong ID card and selfie. [help606](https://www.paypal.com/hk/cshelp/article/how-do-i-confirm-my-identitycip-help606) |
| Wise | China is on the list of places where you can hold money, with no extra restriction listed. [help 2813542](https://wise.com/help/articles/2813542/where-do-i-need-to-live-to-hold-money-with-wise). China is not on the personal "can't get USD details" list (it is on the business-account list). [help 2810318](https://wise.com/help/articles/2810318/can-i-get-usd-account-details) | Bank transfers in AUD, CAD, EUR, GBP, HKD, HUF, NZD, SGD, USD and others via account details. You cannot receive CNY into Wise. [help 2897238](https://wise.com/help/articles/2897238/which-currencies-can-i-add-keep-and-receive-in-my-wise-account), [CNY guide](https://wise.com/help/articles/2955298/guide-to-cny-transfers) | USD by Swift to a bank account in China (China is on the Swift USD list). [help 2974947](https://wise.com/help/articles/2974947/what-countries-and-regions-can-i-send-usd-to-via-swift). Alipay is not available to personal senders in China; WeChat and UnionPay sender lists do not include China. [Alipay](https://wise.com/help/articles/2kTApouGnjRj6JM1yduMIL/sending-cny-via-alipay), [WeChat](https://wise.com/help/articles/1bd1dHKW4uB8p0lnFbzgoZ/how-to-send-and-receive-cny-via-wechat), [UnionPay](https://wise.com/help/articles/5rpQjZ2pueSOeIh5s2mh7w/how-to-send-and-receive-cny-via-unionpay) | Receiving USD: ACH free, domestic wire 6.11 USD, Swift 6.11 USD. [help 2827506](https://wise.com/help/articles/2827506/how-do-i-receive-money-with-my-usd-account-details). Sending USD to China by Swift, worked example for 4,000 USD: 7.28 USD (6.15 Swift payout + 1.13 Wise fee), or 8.78 USD when correspondent fees are predicted. [help 2946451](https://wise.com/help/articles/2946451/how-much-does-it-cost-to-send-usd-to-countries-outside-the-us). No page date shown. | Per-channel CNY limits apply to senders in supported countries (see Wise notes) | ID verification; Wise may ask for updated identity info. [help 2810318](https://wise.com/help/articles/2810318/can-i-get-usd-account-details) |
| Payoneer (派安盈) | Mainland individual accounts exist, meant for people who hold only a personal bank account and do not own a business; otherwise a company account. [individual guide, modified 2025-04-01](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/how-to-register-an-individual-account/) | Marketplace payouts, client payments, receiving accounts in several currencies. [pricing](https://www.payoneer.com/pricing/) | Withdraw to your own mainland bank account in CNY. Payoneer says CNY withdrawals use "标杆银行实时牌价，或更优汇率". [FX page](https://www.payoneer.com/zh-hans/marketplace/fx-foreign-exchange/) | From a local-currency receiving account free; non-local-currency receiving account 1% (min 1.00 USD); card payer up to 3.99% + 0.49 USD; withdrawal with currency conversion 1.2% to 4%; annual fee 29.95 USD if under 6,000 USD received in 12 months; moving between balances 0.50%. The fees that apply to you are shown in your account. [pricing, updated 2026-01-01](https://www.payoneer.com/pricing/) | Not published for China on fetched pages. An old zh article (about 2013) lists 500 to 30,000 USD per withdrawal and 2% fee; treat as outdated. [old article](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/withdraw-payoneer-funds/) | Name, DOB, pinyin address, phone, ID number, bank details in your own name, store URL; photo of the original ID card; proof of address (utility bill or bank document within 3 months) if asked. [individual guide](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/how-to-register-an-individual-account/) |
| WorldFirst 万里汇 (Ant Group) | Cross-border e-commerce accounts offer "个人电商账号" and "公司电商账号" for mainland users. [register guide, 2026-10-29](https://www.worldfirst.com.cn/content/articles/b2c_portal/vyrbjs5f). The B2B trade account is enterprise-only (个体工商户 included). [B2B](https://www.worldfirst.com.cn/content/articles/b2b_gbl_portal/tcyhibif) | Payouts from 130+ marketplaces; B2B trade receipts for companies. [home](https://www.worldfirst.com.cn/) | RMB withdrawal to your own bank card or Alipay. [recipient guide, 2026-04-10](https://www.worldfirst.com.cn/content/articles/b2c_portal/ug_es5jx). RMB settlement needs a "人民币结汇额度" backed by uploaded transaction details. [pricing FAQ](https://www.worldfirst.com.cn/cn/pricing/) | New users 0.3%; "对标市场汇率". No page date shown. [pricing](https://www.worldfirst.com.cn/cn/pricing/) | RMB settlement capped by the approved trade-backed quota. [pricing FAQ](https://www.worldfirst.com.cn/cn/pricing/) | Individual: mainland ID card plus face scan, review 1 to 2 working days. [personal authentication](https://www.worldfirst.com.cn/content/articles/app-developer-user-guides/personal-authentication) |
| PingPong | Organisations or individuals doing business with platforms PingPong approves; consumer use is banned. [terms](https://www.pingpongx.com/zh/termsandConditions?cb=true) | Cross-border e-commerce and trade receipts. [product page](https://www.pingpongx.com/zh/products/crossBorderPayment?cb=true) | "人民币提现" to domestic accounts; mainland funds handled by licensed payment institutions and domestic banks. [safety page](https://www.pingpongx.com/zh/safety?cb=true) | No fee table found on public pages; help centre blocked. | Not found | KYC with identity, address and control documents. [terms](https://www.pingpongx.com/zh/termsandConditions?cb=true) |
| Stripe | Not available. Mainland China is not on Stripe's supported-country list; Hong Kong is. [stripe.com/global](https://stripe.com/global) | Only indirectly: platforms in the US or UK can pay recipients in China in USD by wire through Global Payouts (private preview). [recipient requirements](https://docs.stripe.com/global-payouts/recipient-requirements.md) | Wire in USD to your Chinese bank, then settle at the bank | Set by the paying platform. [Connect payout pricing link in docs](https://docs.stripe.com/connect/cross-border-payouts) | n/a | Individual recipient in China: email, name, address (not a PO box), date of birth, phone. [recipient requirements](https://docs.stripe.com/global-payouts/recipient-requirements.md) |

> **Browser check, 2026-11-19 (maintainer).** The conversion tab on https://www.paypal.cn/portal/fees?locale.x=zh is rendered by script, so the curl copies miss it. In a browser it reads: USD and HKD to RMB **0%** as a limited-time offer (standard 0.2%) from 2026-01-15 to 2026-12-31 Beijing time; other currencies 2.5%. The fee is charged by PayPal's service partner when the conversion happens outside China and is built into the exchange rate shown on each settlement request. Verbatim copy: `raw/official/paypal-cn/paypalcn-fees-browser-2026-11-19.md`. PayPal's own word for a reserve is 准备金 (worldwide terms).

## 2. Provider notes

### PayPal China (paypal.com/c2 and paypal.cn)

PayPal now runs two account systems for mainland users. Writers need to name which one they mean.

- **New accounts at 贝宝支付.** 贝宝支付（北京）有限公司 is a PBoC-licensed non-bank payment institution (licence Z2005011000015). [fee centre footer](https://www.paypal.cn/portal/fees?locale.x=zh). Its agreements say it currently offers only the "企业账户" type, and an individual seller signs up as "个人类别的企业用户". [cross-border UA](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh), [domestic UA, 2026-06-30](https://www.paypal.cn/portal/user-agreement?locale.x=zh). PayPal Pte. Ltd. in Singapore provides the balance and multi-currency part under separate terms. [worldwide terms, 2026-05-28](https://www.paypal.cn/portal/paypal-worldwide-services-terms-and-conditions?locale.x=zh)
- **The c2 agreement** (PayPal Pte. Ltd., last updated 2026-06-30) still describes personal and business accounts. Its 中国大陆 section restricts personal accounts registered after 2026-06-30 to friends-and-family payments and requires business holders to open a 贝宝支付 account, or risk suspension after 2026-06-30. [c2 UA](https://www.paypal.com/c2/legalhub/paypal/useragreement-full?locale.x=zh_C2)
- **Cross-border transactions need real trade content.** If the buyer is outside China, "交易需要具备交易内容", and PayPal may report it to PBoC and SAFE. [cross-border UA](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh). The settle-able amount is based on "完整交易信息且有真实合法的跨境交易背景"; adding product names and shipping info raises it. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh)
- **Store link.** The FAQ accepts an independent site, company site, marketplace store, social media page, video channel (YouTube, TikTok) or app link. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh)
- **Bank card.** Individuals bind a personal bank card; companies bind a company account or the legal representative's card. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh)
- **Old withdrawal methods stay.** Registering for 跨境收款 does not remove the existing withdrawal options. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh)
- **Hong Kong holidays delay settlement.** PayPal China announcements delay 跨境收款 settlements over Hong Kong holidays as well as mainland ones. [announcements](https://www.paypal.cn/portal/announcements?locale.x=zh). That suggests part of the processing runs in Hong Kong (inference, not stated by PayPal).
- **Holds and limitations.** Risk-based holds usually last up to 30 days. Disputes can hold funds longer. Under a court order or regulatory requirement a freeze can exceed 180 days. PayPal may set a reserve. After 12 months without transactions PayPal may suspend service; after 2 years without login it may close the account. [cross-border UA](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh), [worldwide terms](https://www.paypal.cn/portal/paypal-worldwide-services-terms-and-conditions?locale.x=zh)
- **Opening accounts with someone else's details is banned.** Restricted activities include opening accounts "使用非本人的信息（例如姓名、地址、邮箱地址等）" and using another person's PayPal account. [cross-border UA](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh)
- **Micropayments, chargebacks, disputes.** Micropayment rate 6.00% + micro fixed fee; chargeback 10.00 USD; standard dispute fee 8.00 USD, high-volume 16.00 USD. [c2 merchant fees](https://www.paypal.com/c2/business/paypal-business-fees?locale.x=zh_C2)
- **Currency conversion inside the balance (c2).** 3.50% above base rate for USD and CAD when sending or refunding, 4.00% for most other currencies, 2.5% in all other cases. [c2 merchant fees](https://www.paypal.com/c2/business/paypal-business-fees?locale.x=zh_C2)

### PayPal Hong Kong

The site can state plainly that a mainland resident cannot open one. The agreement with PayPal Hong Kong Limited (a licensed SVF issuer, SVF0008) requires an individual to be a Hong Kong SAR resident aged 18+, and a business to be located and operating in Hong Kong. [HK UA zh](https://www.paypal.com/hk/legalhub/paypal/useragreement-full?locale.x=zh_HK), [HK UA en](https://www.paypal.com/hk/legalhub/paypal/useragreement-full?locale.x=en_HK). Identity checks use a Hong Kong ID card and a selfie in the PayPal app; manual review can take up to 7 days. [help606](https://www.paypal.com/hk/cshelp/article/how-do-i-confirm-my-identitycip-help606)

### Wise

- **Holding and receiving.** China is on the "where you can hold money" list. [help 2813542](https://wise.com/help/articles/2813542/where-do-i-need-to-live-to-hold-money-with-wise). Personal USD account details are not blocked for China addresses; Wise Business USD details are. [help 2810318](https://wise.com/help/articles/2810318/can-i-get-usd-account-details)
- **No CNY in.** "You can't receive CNY into your Wise account." [CNY guide](https://wise.com/help/articles/2955298/guide-to-cny-transfers)
- **Sending to Alipay, WeChat, UnionPay.** Wise sends CNY from a personal account to individuals by UnionPay, Alipay or WeChat. [CNY guide](https://wise.com/help/articles/2955298/guide-to-cny-transfers). But "Personal senders can send to Alipay from all supported countries except: China". [Alipay](https://wise.com/help/articles/2kTApouGnjRj6JM1yduMIL/sending-cny-via-alipay). The WeChat and UnionPay pages list the sender countries, and China is not on either list. [WeChat](https://wise.com/help/articles/1bd1dHKW4uB8p0lnFbzgoZ/how-to-send-and-receive-cny-via-wechat), [UnionPay](https://wise.com/help/articles/5rpQjZ2pueSOeIh5s2mh7w/how-to-send-and-receive-cny-via-unionpay). So a Wise account registered with a mainland address should not plan on these routes. Confirm in the app (see "Things not confirmed").
- **Channel limits, for senders in supported countries.** Alipay 50,000 CNY per transfer; per recipient per year 800,000 (family or salary), 600,000 (savings or goods), 300,000 (services); 15 payments per month for family, salary and savings; recipient must be a mainland citizen (or HK/Macao resident with a travel permit) aged 18+ and must link a bank card within 72 hours. [Alipay](https://wise.com/help/articles/2kTApouGnjRj6JM1yduMIL/sending-cny-via-alipay). WeChat 50,000 CNY per transfer, 800,000 CNY per recipient per year, 15 per month, 48 hours to collect. [WeChat](https://wise.com/help/articles/1bd1dHKW4uB8p0lnFbzgoZ/how-to-send-and-receive-cny-via-wechat). UnionPay 33,000 CNY per transfer, 10,000 USD per recipient per day, 50,000 USD per recipient per year, not for buying goods; CMB, Minsheng, Industrial Bank, SPDB and Bank of Nanjing do not accept these payments. [UnionPay](https://wise.com/help/articles/5rpQjZ2pueSOeIh5s2mh7w/how-to-send-and-receive-cny-via-unionpay). These limits include payments from other services.
- **USD to your own Chinese bank account.** China is on the Swift USD list. [help 2974947](https://wise.com/help/articles/2974947/what-countries-and-regions-can-i-send-usd-to-via-swift). You then settle USD to RMB at your bank under the rules in section 3.
- **Sending from CNY is not for mainland citizens.** Paying Wise from a Chinese bank or Alipay requires that you are not a mainland Chinese citizen, work or have worked in China, and hold a Chinese tax record from the last 3 years. The service runs through Lakala under PBoC licence. [CNY guide](https://wise.com/help/articles/2955298/guide-to-cny-transfers), [Wise China customer agreement](https://wise.com/cn/legal/terms-of-use-en)

### Payoneer

- The mainland individual-account guide asks for a bank account type "法人个人银行账户", country China, currency CNY, the ID number, and Chinese and pinyin names that match. [individual guide](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/how-to-register-an-individual-account/)
- It also asks for a store URL and lists e-commerce platforms' account-type requirements, so it is written for online sellers. It says individual and company accounts usually have the same functions and fees on marketplaces. [individual guide](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/how-to-register-an-individual-account/)
- The global pricing page is an estimate; "different prices and fees may be applied in different territories", and the binding numbers are in your account's Fees page. [pricing](https://www.payoneer.com/pricing/)
- Hotline in the guide: 400-841-6666. [individual guide](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/how-to-register-an-individual-account/)

### WorldFirst 万里汇

- Operated in China by 蚂蚁国际商业（上海）有限公司 (ICP footer). [pricing](https://www.worldfirst.com.cn/cn/pricing/)
- Built for sellers and businesses: e-commerce, B2B trade, AI and digital entertainment, overseas entities, platforms. [home](https://www.worldfirst.com.cn/)
- Individuals can open a 个人电商账号; the B2B account needs a business licence (个体工商户 counts). [register guide](https://www.worldfirst.com.cn/content/articles/b2c_portal/vyrbjs5f), [B2B materials](https://www.worldfirst.com.cn/content/articles/b2b_gbl_portal/3konnrxk)
- Each RMB settlement must be tied to a settlement order; without one you create an order first. [结汇订单](https://www.worldfirst.com.cn/content/articles/b2b_gbl_portal/am3kofip)
- One phone number or email can register only one account. [pricing FAQ](https://www.worldfirst.com.cn/cn/pricing/)
- The personal "跨境汇款" account on worldfirst.com is described as sending money from the UK, Europe and Singapore. Nothing on it is aimed at mainland users. [UK personal page](https://www.worldfirst.com/uk/personal-zh/)

### PingPong

- Terms: the service is for commercial activity; "您禁止为了个人或家庭目的或作为消费者使用PingPong服务". [terms](https://www.pingpongx.com/zh/termsandConditions?cb=true)
- For mainland individuals or entities, outgoing payments are limited to overseas warehousing, logistics, tax and other permitted costs of selling. [terms](https://www.pingpongx.com/zh/termsandConditions?cb=true)
- Says it holds a PBoC payment licence among 82 licences. [safety](https://www.pingpongx.com/zh/safety?cb=true)

### Stripe and similar

- Mainland China is not a supported Stripe country; Hong Kong is. [stripe.com/global](https://stripe.com/global)
- For Hong Kong accounts, "we can’t accept non-HK ID numbers for merchants signing up as individuals." Checked in a browser on 2026-11-19; verbatim copy in `raw/official/stripe/hk-requirements-browser-2026-11-19.md`. [Stripe support](https://support.stripe.com/questions/requirements-for-hong-kong-based-businesses)
- Stripe Global Payouts lets US and UK platforms pay individuals in China in USD by wire (private preview). [recipient requirements](https://docs.stripe.com/global-payouts/recipient-requirements.md)
- Stripe Atlas (forming a US company) appears on the same page. [stripe.com/global](https://stripe.com/global). A real US company brings its own legal and tax duties and is out of scope for a beginner site; this pack has no sources on it.
- Merchant-of-record platforms named in community posts (Paddle, Lemon Squeezy, Creem, Dodo Payments, Polar) were not checked against official pages.

### PayPal United States (added by the maintainer, 2026-11-19)

- Who can open a US account: "If you are an individual, you must be a resident of the United States or one of its territories and at least 18 years old … to open a U.S. PayPal account". A business must be organized in, operating in, or a resident of the US. [US UA, last updated 2026-11-04](https://www.paypal.com/us/legalhub/paypal/useragreement-full), excerpts in raw/official/paypal-us/ua-us-en-excerpts.md (read in a browser; curl gets 403).
- Restricted activities include providing "false, inaccurate or misleading information regarding your identity, account or business". PayPal may hold a balance "for up to 180 days" if needed against liability or after an Acceptable Use Policy breach, longer under a court order. Same source.
- So for this audience a "US PayPal account" is not an option to teach: a mainland resident is not eligible, and registering with a US address you don't live at is false information under the agreement.

## 3. China's rules for individuals receiving foreign currency

The SAFE and PBoC FX rules below (办法, 实施细则, 指引, 汇发〔2021〕13号) are all listed as in force in SAFE's "现行有效外汇管理主要法规目录（截至2026年6月30日）". The PBoC crypto notice (银发〔2021〕237号) is a separate document and is not on that list. [SAFE list PDF](https://www.safe.gov.cn/safe/file/file/20260805/d2d0d6ce1441436eadc8bc600eb79c43.pdf), raw text in `raw/official/china-fx-rules/safe-effective-regulations-list-2026-06-30.md`.

### Annual convenience quota (年度便利化额度)

- 《个人外汇管理办法》(中国人民银行令2006年第3号) 第九条: individual 结汇 and domestic individual 购汇 are under annual total management. Within the total, your own valid ID is enough; above it, current-account items need your ID plus "有交易额的相关证明等材料". 第四十条: SAFE sets the amount. [SAFE Tianjin copy](https://www.safe.gov.cn/tianjin/2024/0430/2465.html)
- 《个人外汇管理办法实施细则》(汇发〔2007〕1号) 第二条: "年度总额分别为每人每年等值5万美元". [SAFE](http://m.safe.gov.cn/safe/2007/0105/5320.html)
- 《经常项目外汇业务指引（2020年版）》(汇发〔2020〕14号) 第五十四条: current-account FX must have a real, lawful transaction background; 结汇 and 购汇 each have a facilitation quota of 5万 USD per person per year. 第五十五条: within the quota, your own ID at the counter or in e-banking. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- The quota is not a ceiling. SAFE Xiamen: "等值 5 万美元是年度便利化额度,不是个人每年结汇、购汇的限额" and real, lawful current-account settlements have no amount limit. [SAFE Xiamen tips PDF, 2021](https://www.safe.gov.cn/xiamen/file/file/20211022/f4794075e84e40dd9394be523a52731b.pdf). SAFE Tianjin repeats the 5万 rule in July 2026. [SAFE Tianjin Q&A 2026-07](https://www.safe.gov.cn/tianjin/2026/0706/3085.html)

### Settling more than the quota, or without using it

- 指引 第五十六条: a domestic individual can settle current-account income without using the quota by showing ID plus "有交易额的结汇资金来源材料". [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 实施细则 第十条 lists documents for non-operating settlement above the quota. The lines that fit freelancers and creators: (五) 专有权利使用和特许收入: 付款证明、协议或合同; (六) 法律、会计、咨询和公共关系服务收入: 付款证明、协议或合同; (七) 职工报酬: 雇佣合同及收入证明; (九) 其它: 相关证明及支付凭证. [SAFE](http://m.safe.gov.cn/safe/2007/0105/5320.html)
- Bank of China's 个人结汇 page reproduces the same document table and lists settlement types including 咨询服务、其他服务、专有权利使用费和特许费、职工报酬. [BOC](https://www.boc.cn/pbservice/pb4/200806/t20080626_758.html). BOC's 2019 explainer gives the salary-from-abroad example (employment contract plus income proof). [BOC 2019](https://www.boc.cn/custserv/cs7/cs72/201909/t20190902_17043693.html)
- 指引 第六十八条: the bank checks documents, chooses which documents it needs based on risk, and may refuse; it must tell you why. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 汇发〔2021〕13号: for repeat salary settlements at the same bank by people working abroad, the bank can skip repeat documents; banks must have a "特殊外汇业务处置制度" and apply "实质重于形式" to real transactions. [SAFE](https://www.safe.gov.cn/safe/2021/0402/18672.html)

### What "经常项目" means for a freelancer

- 办法 第二条 splits personal FX into 经常项目 and 资本项目; 第三条 says current-account items follow convertibility. [SAFE Tianjin copy](https://www.safe.gov.cn/tianjin/2024/0430/2465.html)
- 实施细则 第八条 splits current-account receipts into 经营性 and 非经营性. 第九条 covers 经营性 cases: registered foreign-trade operators and 个体工商户 exporting through agents. [SAFE](http://m.safe.gov.cn/safe/2007/0105/5320.html)
- Service fees, royalties and wages from abroad are current-account income; 第十条 names their document types. Which line a bank uses for a given freelancer is the bank's call under 指引 第六十八条. The site should say that, not pick a category for the reader.

### Selling online

- 指引 第六十六条(二): a domestic individual doing cross-border e-commerce can settle through their own FX account; with "有交易额的材料或交易电子信息" it does not use the annual quota. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)

### Payment institutions (how PayPal-China-style RMB settlement fits)

- 指引 第一百二十条: payment institutions provide small, fast current-account e-payment services, including agency 结售汇, for e-commerce operators and consumers; nobody may use fake transactions or splitting. 第一百二十九条 and 第一百三十条: they must verify identity and collect transaction data (goods or service, quantity, currency, amount, parties, order time). 第一百三十二条: single transactions in principle up to 5万 USD. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 第一百三十七条: "支付机构外汇业务项下的个人结售汇不计入个人年度便利化额度". [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf). Whether a given provider's RMB payout is this kind of business is not stated on the provider pages fetched (see "Things not confirmed").

### Hard lines the site must state

- 办法 第七条: banks and individuals "不得以分拆等方式逃避限额监管，也不得使用虚假商业单据或者凭证逃避真实性管理". [SAFE Tianjin copy](https://www.safe.gov.cn/tianjin/2024/0430/2465.html)
- 指引 第六十二条: no splitting to dodge the quota or authenticity checks. People who lend their quota get a warning, then the "关注名单"; people who borrow someone else's quota go straight onto it, for the listing year plus 2 more years, during which every settlement needs transaction documents. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf). ICBC's Q&A answers "可否...分拆后分别由多人进行结售汇" the same way. [ICBC](https://www.icbc.com.cn/page/721852384438681618.html)
- 指引 第六十一条: only close relatives (spouse, parents, children, siblings, grandparents, grandchildren) may act for you within the quota, with ID, a written authorisation and proof of relationship. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 指引 第六十七条: domestic moves of FX between individuals are limited to your own accounts and close relatives' accounts. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 指引 第五十七条: the 《个人购汇申请书》 must be filled in truthfully, accurately and completely. [SAFE PDF](http://m.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf)
- 银发〔2021〕237号: fiat-to-crypto exchange and crypto trading services are illegal financial activity in China; offshore exchanges serving mainland residents are too. [PBoC](https://www.pbc.gov.cn/tiaofasi/144941/3581332/4348658/index.html)

## 4. Community posts on X

All fetched through `https://api.fxtwitter.com/status/<id>` on 2026-11-19. Counts are as of that fetch. These are user experience, not sources of fact. "Verdict" compares each claim with sections 1 to 3.

| Post | Posted | Views / likes | What it says | Verdict for writers | Raw file |
| --- | --- | --- | --- | --- | --- |
| [@noahduck283 article "Wise 全网最全使用指南"](https://x.com/noahduck283/status/2064860443454423341) | 2026-06-11 | 219,999 / 833 | Open Wise with a mainland ID and real domestic address; use it to receive platform payouts; DBS HK virtual account for ID users; "单笔超限就拆分多笔分批转"; mentions HK/UK mail-forwarding address tricks but advises against them | Real-address advice agrees with providers. Splitting advice and the address tricks must stay out. DBS claim not checked. | `raw/community/x-noahduck283-2064860443454423341.md` |
| [@TaoRay](https://x.com/TaoRay/status/1996135178239082815) | 2025-12-03 | 135,002 / 758 | Outbound remittance; claims "潜规则" of at most 3 transfers a year; suggests sending 49,800 to avoid flags; warns that underground "对敲" is illegal and risky | Structuring tip crosses the line (办法 第七条, 指引 第六十二条). Count limits are unverified and conflict with SAFE Xiamen. Underground-bank warning agrees with law; leave details out. | `raw/community/x-TaoRay-1996135178239082815.md` |
| [@DtDt666](https://x.com/DtDt666/status/2041504549874356294) | 2026-04-07 | 79,163 / 441 | Same-name BOC mainland to BOC HK transfers; "转账用途建议填「旅游、亲友往来」，避免敏感词"; "香港转回结汇不占用额度" | Advising a purpose to avoid review crosses the line (指引 第五十七条). The quota claim conflicts with 指引 第五十四/五十六条. Assumes a HK account the reader may not legitimately hold. | `raw/community/x-DtDt666-2041504549874356294.md` |
| [@moranweb3](https://x.com/moranweb3/status/2080442839142392210) | 2026-07-24 | 46,536 / 342 | Cashing out crypto through Binance C2C merchants to Alipay or bank cards, noting "收的不是你本人的账户"; Kraken to Wise to WeChat/Alipay; Backpack to ZA Bank | Crosses every line: crypto exchange (银发〔2021〕237号), funds from third-party accounts, routes built to avoid FX checks. Leave out entirely. | `raw/community/x-moranweb3-2080442839142392210.md` |
| [@leaf_sanren article](https://x.com/leaf_sanren/status/2115065593107800136) | 2026-10-27 | 32,288 / 168 | Activating Wise for X creator payouts: own mainland ID, own bank to own iFAST UK account to own Wise, "全程本人同名", "用途如实填" | Stays inside the lines. Uses outbound 购汇, which counts toward the quota. iFAST not checked against official pages. | `raw/community/x-leaf_sanren-2115065593107800136.md` |
| [@EvanWritesX](https://x.com/EvanWritesX/status/1997711826474373425) | 2025-12-07 | 20,836 / 121 | Withdrew c2 PayPal USD to his Wise USD details as a "US bank account": 210 USD sent, 35 USD fee; says Wise money can then go to Alipay/WeChat | 35 USD matches the c2 fee table. The onward Alipay/WeChat step conflicts with Wise's sender-country rules for China. | `raw/community/x-EvanWritesX-1997711826474373425.md` |
| [@kevinma_dev_zh](https://x.com/kevinma_dev_zh/status/2012323595385807002) | 2026-01-17 | 14,318 / 95 | PayPal 个人卖家 account launched; ID, mobile, email; 1.0% / 0.5% + 6% VAT; min 20 USD; links the official guide | Matches paypal.cn pages, except review time ("7个工作日" vs FAQ "2个工作日"). | `raw/community/x-kevinma_dev_zh-2012323595385807002.md` |
| [@noahduck283](https://x.com/noahduck283/status/2063983483903689128) | 2026-06-08 | 9,533 / 29 | Wise to Alipay/WeChat about 1%; Swift to a domestic bank for larger sums; keep contracts and invoices ready | Document advice agrees with 实施细则 第十条. Alipay/WeChat route conflicts with Wise rules for China-registered senders. | `raw/community/x-noahduck283-2063983483903689128.md` |
| [@bearliu](https://x.com/bearliu/status/2013899419272286631) | 2026-01-21 | 5,640 / 12 | PayPal to Wise works, "手续费3%" | Fee figure unexplained by official pages (c2 lists 35 USD per US-bank withdrawal plus conversion). | `raw/community/x-bearliu-2013899419272286631.md` |
| [@EricBlock2100 article](https://x.com/EricBlock2100/status/2105673519300542758) | 2026-10-01 | 2,366 / 2 (low reach, kept for its Payoneer detail) | Paddle to Payoneer to domestic card, "约1.2%", "不占个人每年5万美元购汇额度", "低于$400会额外收$4" | 1.2% sits inside the official 1.2% to 4% range. The quota and 4 USD claims are unconfirmed. Truthful registration. | `raw/community/x-EricBlock2100-2105673519300542758.md` |
| [@aladdin_im](https://x.com/aladdin_im/status/2026606154827075683) | 2026-02-25 | 1,751 / 29 (low reach, kept because the claim is common) | "用中国护照注册香港区个人账号，搭配港卡" for Stripe and Lemon Squeezy; PayPal 跨境收款宝 "仅限货物贸易" | Registering a HK account as a mainland resident misstates location; Stripe says it can't accept non-HK ID numbers for HK individuals. Leave out. Goods-only claim is unconfirmed. | `raw/community/x-aladdin_im-2026606154827075683.md` |
| [@victorhan2012](https://x.com/victorhan2012/status/2063173655258165355) | 2026-06-06 | 1,537 / 1 (low reach, kept because its limits are wrong) | Wise to Alipay/WeChat/UnionPay; limits of 50,000 CNY a year, 5 a month on Alipay, 1 a month on WeChat, 18,000 per UnionPay transfer; "一个收款人的年度额度用完后，可以选择其他符合条件的收款人收款" | Limits conflict with Wise's pages. Using other recipients after one hits a limit crosses the line (指引 第六十二条), despite the post's own disclaimer. | `raw/community/x-victorhan2012-2063173655258165355.md` |

## 5. Contradictions between sources

1. **Does PayPal China still offer personal accounts?** The c2 consumer fee page (last updated 2021-07-30) and the c2 UA (2026-06-30) describe personal accounts. The paypal.cn agreements (2026) say only "企业账户" is offered, and sellers sign up as "个人类别的企业用户". The c2 UA's 中国大陆 section reconciles this for new accounts after 2026-06-30. Sources: [c2 fees](https://www.paypal.com/c2/webapps/mpp/paypal-fees?locale.x=zh_C2), [c2 UA](https://www.paypal.com/c2/legalhub/paypal/useragreement-full?locale.x=zh_C2), [cross-border UA](https://www.paypal.cn/portal/paypal-unified-account-ua?locale.x=zh).
2. **PayPal receiving fee, fixed part.** c2 merchant fees say 4.40% + 0.30 USD. The paypal.cn page data has a "商业付款费用" block with 4.4% + 2.2 RMB and an expired promo (3.95% + 2.2 RMB, 2023-04-01 to 2024-09-30). That block may be hidden legacy content. [c2 merchant fees](https://www.paypal.com/c2/business/paypal-business-fees?locale.x=zh_C2), `raw/official/paypal-cn/paypalcn-fees-full.md`.
3. **PayPal RMB settlement promo dates.** The fee centre and the product banner say 0.5% from 2026-01-15 to 2026-12-31. The same product page still carries a "0费率 ... 至2024年3月31日" block, and a hidden "场景 B" promo "至2025年12月31日". [product page](https://www.paypal.cn/portal/merchant/rmb-transfer?locale.x=zh), [fee centre](https://www.paypal.cn/portal/fees?locale.x=zh).
4. **"0.5%封顶".** The fee card renders "0.5" with the unit "%封顶". It could mean a flat 0.5% or a tiered fee capped at 0.5%. The tier page needs a login.
5. **Payoneer CNY withdrawal fee.** Old zh article says 2% and 500 to 30,000 USD per withdrawal. The 2026 pricing page says 1.2% to 4% with conversion. The China FX page gives no number. Community says about 1.2%. [old article](https://www.payoneer.com/zh-hans/resources/how-to-use-payoneer/withdraw-payoneer-funds/), [pricing](https://www.payoneer.com/pricing/), [FX page](https://www.payoneer.com/zh-hans/marketplace/fx-foreign-exchange/).
6. **Wise to Alipay/WeChat from China.** Community guides describe it as the normal way home. Wise excludes China as a personal sender country for Alipay and leaves China off the WeChat and UnionPay sender lists.
7. **Wise channel limits.** @victorhan2012's numbers differ from Wise's pages on every channel (see section 2, Wise).
8. **Is 5万 USD a cap?** @TaoRay describes a hidden count and amount cap. SAFE Xiamen says it is a facilitation quota, not a limit, for real transactions with documents.
9. **Does settling money brought back from your own HK account use the quota?** @DtDt666 says no. 指引 第五十四/五十六条 say 结汇 uses the quota unless you show "有交易额的结汇资金来源材料".
10. **PayPal 跨境收款 for services.** @aladdin_im says goods only. The official FAQ accepts social-media, video-channel and app links as the store link and says individual and enterprise users can apply, but never says "services" outright. [FAQ](https://www.paypal.cn/portal/merchant/rmb-transfer/faq?locale.x=zh).
11. **PayPal 个人卖家 review time.** Community says up to 7 working days; the FAQ says KYC usually within 2 working days.
12. **Stripe HK for mainland residents.** Community says a Chinese passport works for an HK individual account. Stripe support (WebFetch extract) says non-HK ID numbers aren't accepted for individuals.

## 6. Things not confirmed

- Whether PayPal 贝宝支付 RMB settlements count toward the 5万 USD quota. 指引 第一百三十七条 says payment-institution settlements don't, but PayPal's pages say conversion is done by "PayPal服务合作方在中国境外" or by "中国境内合作银行", and never name the regulatory category. Ask PayPal China in writing.
- Whether PayPal 个人卖家 accounts can receive service income (freelance work, SaaS, creator income) and settle it in RMB.
- What "0.5%封顶" means, and the tier table behind the login page.
- The PayPal notice that 连连 "快捷人民币提现" ended on 2018-07-01. Known only from a search-result snippet; the page returned 403.
- Payoneer's current fee for CNY withdrawals to mainland banks, its mainland licensing or partner, and whether those settlements count toward the quota.
- Whether Payoneer's mainland individual accounts accept freelancers with no store (the guide asks for a store URL).
- PingPong's fees, its individual-account rules and any service-income support (help centre blocked; no public fee page found).
- WorldFirst's full fee table beyond "0.3% for new users", and whether individual e-commerce accounts accept service income.
- In-app confirmation that a mainland-registered Wise personal account cannot send CNY to Alipay, WeChat or UnionPay; and whether Wise lets personal accounts receive business income.
- Stripe HK rules as a byte copy (only a WebFetch extract so far) and Stripe's "account in another country" page.
- How individual income tax applies to foreign freelance income. Not researched; outside this pack.
- How banks classify a given freelancer's income in practice (指引 第六十八条 leaves it to the bank).
- Wise's DBS virtual account and iFAST claims from community posts.

## 7. Needs a browser check

These returned a block, a login wall or an empty JS shell to curl. Their content is not used above. Full list with status codes in `tools/blocked.txt`.

- https://www.paypal.com/c2/webapps/mpp/cny-withdrawal-disclaimer (403)
- https://www.paypal.com/c2/webapps/mpp/kyc?locale.x=zh_C2 (403)
- https://www.paypal.com/c2/webapps/mpp/country-worldwide?locale.x=zh_C2 (empty JS shell)
- https://www.paypal.cn/portal/landing/tier-rmb-settlement-fee (login page)
- The 个人账户 / 企业账户申请指南 links on https://www.paypal.cn/portal/merchant/rmb-transfer?locale.x=zh (added by JS)
- https://www.payoneer.com/fees/ (redirect loop)
- https://helpcenter.pingpongx.com and https://help.pingpongx.com/hc/kb/article/1518545 (412)
- https://www.worldfirst.com.cn/content/helpcenter (empty JS shell)
- https://www.cmbchina.com/personal/saving/savingInfo?guid=57ff012b-6982-4a63-af27-e980d66d5b68 (empty JS shell)
- https://support.stripe.com/questions/requirements-for-hong-kong-based-businesses (empty to curl; WebFetch extract only)
- https://support.stripe.com/questions/requirements-to-open-a-stripe-account-in-another-country (empty to curl; WebFetch refused)

## 8. Suggested outline for a beginner site

Every claim below points to its source in this README. Keep each fee claim dated ("as of 2026-11-19") and link the provider page.

### Lesson 1. The three legs of the trip

Who pays you, where the money lands first, and how it becomes RMB in your bank.

- Leg 1, the payer. A buyer pays by PayPal, a marketplace pays out, a client wires money, or a platform pays through Stripe Global Payouts. Sources: [paypal.cn](https://www.paypal.cn/), [Payoneer pricing](https://www.payoneer.com/pricing/), [Stripe recipient requirements](https://docs.stripe.com/global-payouts/recipient-requirements.md).
- Leg 2, the receiving account in your own name. PayPal 个人卖家, Payoneer, WorldFirst 个人电商账号, Wise account details. Sources: section 1 table.
- Leg 3, into RMB. Either the provider settles RMB to your card (PayPal 跨境收款, Payoneer, WorldFirst), or you receive USD by wire and settle at your bank (PayPal c2 wire 35 USD; Wise Swift to China). Sources: [PayPal fee centre](https://www.paypal.cn/portal/fees?locale.x=zh), [c2 fees](https://www.paypal.com/c2/webapps/mpp/paypal-fees?locale.x=zh_C2), [Wise help 2974947](https://wise.com/help/articles/2974947/what-countries-and-regions-can-i-send-usd-to-via-swift).
- Each leg has its own fee. Show the formula, not a single "total %". Sources: section 1 fee column.

### Lesson 2. The 5万 USD quota: what it is and what it isn't

- It is a per-person, per-year facilitation quota for 结汇 and for 购汇 (实施细则 第二条; 指引 第五十四条).
- It is not a ceiling. Real current-account income can be settled above it with documents (指引 第五十六条; SAFE Xiamen).
- Documents by income type (实施细则 第十条; BOC 个人结汇 table).
- E-commerce with transaction data (指引 第六十六条(二)) and payment-institution settlements (第一百三十七条) don't use it. Say clearly that whether a specific provider's payout counts is unconfirmed.
- The bank decides which documents it needs and can refuse (指引 第六十八条).

### Lesson 3. Your real identity is the account's foundation

- Providers decide eligibility by where you really live: PayPal HK needs HK residency; Stripe does not serve mainland China; PayPal China needs China tax residency; WorldFirst B2B needs a business licence; PingPong is for business use. Sources: section 1 and 2.
- Using someone else's name, address or account breaks provider terms (PayPal cross-border UA restricted activities) and, for FX, puts both people on SAFE's 关注名单 (指引 第六十二条).
- A frozen account is a real risk even when you do everything right: 30-day risk holds, reserves, longer freezes under court or regulatory orders (PayPal cross-border UA).

### Guide steps (one path, start to finish)

1. Write down what you are paid for (goods, services, royalties, platform revenue) and how your payer can pay. Sources: 实施细则 第十条 categories; provider "what you can receive" column.
2. Pick the receiving account that matches the payer. PayPal buyers lead to a PayPal 个人卖家 account; marketplaces lead to Payoneer or WorldFirst; bank-transfer clients lead to Wise or Payoneer receiving accounts. Sources: section 1.
3. Register with your own mainland ID, real address and own bank card. List each provider's documents. Sources: PayPal personal seller guide, Payoneer individual guide, WorldFirst personal authentication.
4. Keep the paper trail from day one: contract or order, invoice, delivery proof, platform statement. PayPal's settle-able amount depends on it; WorldFirst needs a settlement order; banks ask for it above the quota. Sources: PayPal FAQ, WorldFirst 结汇订单, 实施细则 第十条.
5. Bring the money home. Compare provider RMB settlement (fee plus VAT) with a USD wire plus bank settlement (35 USD per PayPal wire, bank fees, documents). Sources: PayPal fee centre, c2 fees.
6. Check the fee pages again before you write down a number; record the date. Sources: every fee row.

### How-tos

- **How to estimate what lands from a 100 USD PayPal payment.** Inputs: 4.40% + 0.30 USD receiving fee; RMB settlement 1.0% (0.5% promo to 2026-12-31) plus 6% VAT on that fee; 0% USD to CNY conversion promo. Sources: c2 merchant fees, paypal.cn fee centre. Mark the "封顶" ambiguity.
- **How to settle more than 5万 USD of freelance income at a bank.** Bring ID plus the 第十条 documents for your income type; expect the bank to choose what it needs. Sources: 实施细则 第十条, BOC 个人结汇, 指引 第五十六条 and 第六十八条.
- **How to move Wise USD to your Chinese bank account.** Swift USD to your own account in China, then settle at the bank. State that Alipay, WeChat and UnionPay routes are not listed for China-registered senders. Sources: Wise help 2974947, 2946451, Alipay, WeChat and UnionPay pages.
- **What to do if PayPal limits or holds your account.** Read the notice, provide the requested information, expect holds of up to 30 days; withdraw unrestricted funds if the account is closed. Sources: PayPal cross-border UA, worldwide terms.
- **How to spot a tutorial you shouldn't follow.** Red flags, each with its rule: a foreign or forwarding address you don't live at (PayPal HK UA residency; Stripe HK ID rule); someone else's ID, card or quota (指引 第六十二条, 第六十七条; PayPal UA); splitting amounts to stay under a line (办法 第七条, 指引 第六十二条); writing a purpose that isn't true (指引 第五十七条); crypto OTC cash-outs (银发〔2021〕237号). Use the section 4 posts as anonymised examples, never as links to copy.
