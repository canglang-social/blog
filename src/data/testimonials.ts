// Display copy for the "how my friends describe me" block on the About
// pages. Source of truth for raw quotes and permission status is the
// Logseq page [[AboutMe/Testimonials]] — only entries marked
// `permission:: ok` there may appear here. English quotes are curated
// translations of the Chinese originals.
export interface Testimonial {
  /** Display name on the English page (chosen by the friend). */
  name: string;
  /** Display name on the Chinese page. */
  nameZh: string;
  /** How we know each other, English page. */
  relation: string;
  /** How we know each other, Chinese page. */
  relationZh: string;
  /** Quote, translated to English. */
  quote: string;
  /** Quote, original Chinese. */
  quoteZh: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'the Anonymous Big Shot',
    nameZh: '匿名大佬',
    relation: 'coworker, met over board games; stock trading keeps us in touch now',
    relationZh: '同事，桌游认识，如今靠股市交易维系',
    quote: 'Moves as his heart wills, goes where the blade leads.',
    quoteZh: '随心而动，随刃而行',
  },
  {
    name: 'Tudou ("Potato")',
    nameZh: '土豆',
    relation: 'student-union friend from college; we went to Tibet together',
    relationZh: '大学学生会认识，一起去过西藏',
    quote: "You're the real deal — whatever you set out to do, you'll pull it off.",
    quoteZh: '你真牛逼，你做什么都会成功的',
  },
  {
    name: 'Larry',
    nameZh: 'Larry',
    relation: 'coworker, met over board games',
    relationZh: '同事，桌游认识',
    quote: 'Sincere, and goes with the flow.',
    quoteZh: '真诚随性',
  },
  {
    name: 'Fred',
    nameZh: 'Fred',
    relation: 'coworker and board-game friend; I lodged at his place for a year and a half',
    relationZh: '同事，桌游认识，磁场相吸——我在他家寄宿过一年半',
    quote: 'Knows his own mind.',
    quoteZh: '主意正',
  },
  {
    name: 'XinMinh',
    nameZh: 'XinMinh',
    relation: 'coworker; board games, code, and the gym keep us close',
    relationZh: '同事，桌游认识；桌游、代码、健身是纽带',
    quote: 'Tao is stubborn — but effective.',
    quoteZh: '涛哥是个固执但有效的人',
  },
  {
    name: 'kyra',
    nameZh: 'kyra',
    relation: 'coworker, met over board games',
    relationZh: '同事，桌游认识',
    quote: 'Has his own ideas and stands his ground.',
    quoteZh: '有想法，立场坚定',
  },
  {
    name: 'Veronica',
    nameZh: 'Veronica',
    relation: 'coworker and kindred spirit — we share a birthday',
    relationZh: '同事，磁场相吸，还是同一天生日',
    quote: 'Funny, empathetic, and takes real care of his friends.',
    quoteZh: '幽默，有同理心，很照顾朋友',
  },
];
