export const site = {
  name: '遊結倶楽部',
  reading: 'ゆうゆうくらぶ',
  phoneDisplay: '090-3547-3989',
  phoneHref: 'tel:+819035473989',
  address: '茨城県鹿嶋市棚木2819-7',
  station: '鹿島臨海鉄道大洗鹿島線 長者ヶ浜潮騒はまなす公園前駅より徒歩7分',
  businessDays: '月曜日・金曜日・日曜日（第1・3・5）',
  businessHours: '10:00〜17:30',
  lessons: [
    { number: '01', time: '10:00〜12:00' },
    { number: '02', time: '13:00〜15:00' },
    { number: '03', time: '15:30〜17:30' },
  ],
  services: [
    'クラフトバンド教室',
    'クラフトバンド・紙バンド販売',
    '手芸用品販売',
    '雑貨・猫雑貨販売',
  ],
  instagram: {
    label: '@yuyukurabu',
    href: '#',
  },
} as const;

export const navigation = [
  { label: '遊結倶楽部について', href: '#about' },
  { label: '教室と販売', href: '#service' },
  { label: '作品紹介', href: '#gallery' },
  { label: '営業案内', href: '#information' },
] as const;
