export const site = {
  name: '遊結倶楽部',
  reading: 'ゆうゆうくらぶ',
  english: 'YUYU CLUB',
  tagline: 'クラフトバンド教室と PP バンド・販売のお店',
  emailDisplay: 'yuyukurabu26@gmail.com',
  emailHref: 'mailto:yuyukurabu26@gmail.com',
  phoneDisplay: '0299-90-9080',
  phoneHref: 'tel:+81299909080',
  address: '茨城県鹿嶋市棚木2819-7',
  station: '鹿島臨海鉄道大洗鹿島線 長者ヶ浜潮騒はまなす公園前駅より徒歩7分',
  mapEmbedHref:
    'https://maps.google.com/maps?q=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E9%B9%BF%E5%B6%8B%E5%B8%82%E6%A3%9A%E6%9C%A82819-7&z=15&output=embed',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E9%B9%BF%E5%B6%8B%E5%B8%82%E6%A3%9A%E6%9C%A82819-7',
  businessDays: '月曜日・金曜日・日曜日（第1・3・5）',
  businessHours: '10:00〜17:30',
  lessons: [
    { number: '01', time: '10:00〜12:00' },
    { number: '02', time: '13:00〜15:00' },
    { number: '03', time: '15:30〜17:30' },
  ],
  services: [
    'クラフトバンド教室と PP バンド',
    'クラフトバンド・紙バンド販売',
    '手芸用品販売',
    '雑貨・猫雑貨販売',
  ],
  qualifications: [
    ['一般社団法人', 'クラフトバンドエコロジー協会', '(KEA)認定講師'],
    ['PPバンド講師(KEA)'],
  ],
  trialLesson: {
    title: '体験教室',
    name: 'はじめてのカゴ 体験',
    price: '2,000円',
    priceNote: '材料込み',
    note: '要予約',
  },
  visitingLesson: {
    title: '出張・出前講座',
    lead: '学校、施設、サークルなどへ伺い、講座を開きます。',
    body: '遊結倶楽部オリジナルのレシピで、わかりやすくお教えします。',
    note: 'キッズ向け・高齢者向けにも対応しています。',
  },
  originalDesign: {
    title: ['キッズ向け', '創作デザイン'],
    lead: 'くまのかごなど、お子さまが楽しめるオリジナルデザインをご提案します。',
    items: [
      'クラフトバンド、紙バンド、PPバンドのデザイン提案',
      '創作デザインレシピの販売',
    ],
  },
  instagram: {
    label: '@yuyukurabu',
    href: 'https://www.instagram.com/yuyukurabu',
  },
} as const;

export const topics = [
  { tag: '募集', text: 'クラフトバンド教室と PP バンド、生徒募集中です。', href: '#menu' },
  { tag: '体験', text: 'はじめてのカゴ体験 2,000円（材料込み・要予約）。', href: '#trial' },
  { tag: '講座', text: '出張・出前講座をお受けします。キッズ向け・高齢者向けにも対応。', href: '#menu' },
  { tag: '作品', text: 'オリジナルデザイン 干支シリーズなどの作品を、作品紹介でご覧いただけます。', href: '#gallery' },
] as const;

export const features = [
  {
    number: '01',
    english: 'CERTIFIED',
    title: '認定講師が教える教室',
    body: '一般社団法人クラフトバンドエコロジー協会（KEA）認定講師、PPバンド講師（KEA）の資格を持つ講師が、基礎からていねいにお教えします。',
  },
  {
    number: '02',
    english: 'MATERIALS',
    title: '材料がそろう店内',
    body: 'クラフトバンド・紙バンドをはじめ、手芸用品、雑貨、猫雑貨を販売。色とりどりのバンドから、作りたいものに合わせてお選びいただけます。',
  },
  {
    number: '03',
    english: 'SCHEDULE',
    title: '通いやすい3つの時間帯',
    body: '午前・午後・夕方の3つの時間帯で教室を開いています。ご都合に合わせて、無理なく続けられます。',
  },
] as const;

export const flow = [
  {
    number: '01',
    title: 'ご予約',
    body: 'メールまたはお電話で、ご希望の日時をお知らせください。体験教室は要予約です。',
  },
  {
    number: '02',
    title: 'ご来店',
    body: '茨城県鹿嶋市棚木の店舗へお越しください。長者ヶ浜潮騒はまなす公園前駅より徒歩7分です。',
  },
  {
    number: '03',
    title: '体験',
    body: '「はじめてのカゴ」をお作りいただきます。材料はこちらでご用意します。',
  },
] as const;

export const navigation = [
  { label: 'コンセプト', english: 'CONCEPT', href: '#concept' },
  { label: '特長', english: 'FEATURES', href: '#features' },
  { label: '教室・講座', english: 'MENU & PRICE', href: '#menu' },
  { label: '作品紹介', english: 'GALLERY', href: '#gallery' },
  { label: '体験の流れ', english: 'FLOW', href: '#flow' },
  { label: '営業案内', english: 'INFORMATION', href: '#information' },
  { label: 'お問い合わせ', english: 'CONTACT', href: '#contact' },
] as const;
