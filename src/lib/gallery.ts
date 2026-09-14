import { getCollection } from 'astro:content';
import rich from '../assets/gallery/scroll-rich.png';
import river from '../assets/gallery/scroll-landscape.png';
import mountains from '../assets/gallery/landscape.png';
import ragx from '../assets/projects/ragx-eval-dashboard.png';
import learning from '../assets/projects/learn-to-ship-ranked.png';
import type { Lang } from '../i18n/ui';

export const art = {
  'work-board': { image:rich, mount:'#e5decf', alt:{en:'Blue-green mountains and a riverside village',zh:'青绿群山与沿河村落'}, generated:true },
  'speaking-worlds': { image:mountains, mount:'#e4e9e4', alt:{en:'Misty mountains and a pavilion',zh:'云山与亭阁'}, generated:true },
  ragx: { image:ragx, mount:'#e9edf2', alt:{en:'RAGX evaluation history',zh:'RAGX 评估历史界面'}, generated:false },
  'learn-to-ship': { image:learning, mount:'#e6eeeb', alt:{en:'Ranked study recommendations',zh:'学习建议排序界面'}, generated:false },
  'field-notes': { image:river, mount:'#efe6d5', alt:{en:'A quiet river between mountains',zh:'山间静水'}, generated:true },
};
export const labels = {
  active: {en:'In focus',zh:'专 · 正在投入'}, exploring:{en:'Exploring',zh:'探 · 探索中'},
  paused:{en:'Paused',zh:'歇 · 暂时搁置'}, archived:{en:'Archived',zh:'藏 · 已归档'}, unknown:{en:'Status unconfirmed',zh:'近况待记'},
};
export const topics:Record<string,{en:string;zh:string}> = {
  tools:{en:'AI tools',zh:'AI 工具'}, learning:{en:'Learning',zh:'学习'},
  design:{en:'Design',zh:'设计'}, language:{en:'Language',zh:'语言'}, writing:{en:'Writing',zh:'写作'},
};
export const prefix = (lang:Lang) => lang === 'zh' ? '/zh' : '';
export const tokenLabel = (n:number|null,lang:Lang) => n === null ? '—' : new Intl.NumberFormat(lang === 'zh' ? 'zh-CN':'en-US',{notation:'compact',maximumFractionDigits:1}).format(n);
export const activitySpace = (n:number|null) => n === null || n === 0 ? 0 : n < 100000 ? 40 : n < 500000 ? 80 : n < 1000000 ? 120 : 160;
export async function galleryWorks() {
  const works = (await getCollection('projects')).filter(p => p.data.gallery).sort((a,b) => a.data.order-b.data.order);
  const posts = await getCollection('blog');
  for(const p of works) {
    if(!(p.id in art)) throw new Error(`Missing artwork for ${p.id}`);
    for(const slug of p.data.gallery!.relatedSlugs) for(const lang of ['en','zh']) {
      if(!posts.some(post=>post.id===`${lang}/${slug}`)) throw new Error(`Missing translated related post: ${lang}/${slug}`);
    }
  }
  return works;
}
