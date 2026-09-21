import { getCollection } from 'astro:content';
import wishTree from '../assets/gallery/wish-tree.png';
import rich from '../assets/gallery/scroll-rich.png';
import river from '../assets/gallery/scroll-landscape.png';
import mountains from '../assets/gallery/landscape.png';
import ragx from '../assets/projects/ragx-eval-dashboard.png';
import learning from '../assets/projects/learn-to-ship-ranked.png';
import kitsune from '../assets/gallery/portrait-kitsune.png';
import tengu from '../assets/gallery/portrait-tengu.png';
import kasa from '../assets/gallery/portrait-kasa.png';
import chochin from '../assets/gallery/portrait-chochin.png';
import kappa from '../assets/gallery/portrait-kappa.png';
import type { Lang } from '../i18n/ui';

export const art = {
  'writing-notebook': {image:river,mount:'#efe6d5',alt:{en:'Illustrative river landscape',zh:'山水意象配图'},generated:true},
  'programming-experiments': {image:mountains,mount:'#e4e9e4',alt:{en:'Illustrative mountain landscape',zh:'山水意象配图'},generated:true},
  'wish-studio': { image:wishTree, mount:'#eef0df', alt:{en:'Wish Studio wish tree illustration',zh:'脑洞实现局愿望树插画'}, generated:true },
  'agent-kit': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'ai-chief-of-staff': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'evmissing-replication': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'ai-beginner-lab': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'job-search-template': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'logx': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'ragr': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'gaokao-advisor': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'hairlab': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'relay-worlds': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'wechat-reply-agent': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'recruiter-agent': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'grounded-research-agent': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'slack-ai-workplace': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'creative-desk-object': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'english-practice-device': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'ai-desk-companion': { image:mountains, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'home-server': { image:rich, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'ai-services': { image:river, mount:'#e5e5df', alt:{en:'Illustrative Chinese landscape',zh:'山水意象配图'}, generated:true },
  'work-board': { image:rich, mount:'#e5decf', alt:{en:'Blue-green mountains and a riverside village',zh:'青绿群山与沿河村落'}, generated:true },
  'speaking-worlds': { image:mountains, mount:'#e4e9e4', alt:{en:'Misty mountains and a pavilion',zh:'云山与亭阁'}, generated:true },
  ragx: { image:ragx, mount:'#e9edf2', alt:{en:'RAGX evaluation history',zh:'RAGX 评估历史界面'}, generated:false },
  'learn-to-ship': { image:learning, mount:'#e6eeeb', alt:{en:'Ranked study recommendations',zh:'学习建议排序界面'}, generated:false },
  'field-notes': { image:river, mount:'#efe6d5', alt:{en:'A quiet river between mountains',zh:'山间静水'}, generated:true },
};
export const nightArt = {
  'writing-notebook':{image:chochin,alt:{en:'Illustrative lantern spirit',zh:'灯笼妖意象配图'}},
  'programming-experiments':{image:kappa,alt:{en:'Illustrative kappa',zh:'河童意象配图'}},
  'wish-studio':{image:kitsune,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'agent-kit':{image:tengu,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'ai-chief-of-staff':{image:kasa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'evmissing-replication':{image:chochin,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'ai-beginner-lab':{image:kappa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'job-search-template':{image:kitsune,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'logx':{image:tengu,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'ragr':{image:kasa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'gaokao-advisor':{image:chochin,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'hairlab':{image:kappa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'relay-worlds':{image:kitsune,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'wechat-reply-agent':{image:tengu,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'recruiter-agent':{image:kasa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'grounded-research-agent':{image:chochin,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'slack-ai-workplace':{image:kappa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'creative-desk-object':{image:kitsune,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'english-practice-device':{image:tengu,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'ai-desk-companion':{image:kasa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'home-server':{image:chochin,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'ai-services':{image:kappa,alt:{en:'Illustrative yokai portrait',zh:'鬼神意象配图'}},
  'work-board':{image:kitsune,alt:{en:'A fox spirit carrying a lantern',zh:'提灯的狐灵'}},
  'speaking-worlds':{image:tengu,alt:{en:'A tengu with a feather fan beneath cedar trees',zh:'杉树下手执羽扇的天狗'}},
  'field-notes':{image:chochin,alt:{en:'A glowing lantern spirit beside a shrine',zh:'神社旁发光的灯笼妖'}},
};
// Portraits identify works in the yokai gallery. Detail pages retain real project evidence.
export const cardNightArt = {
  ...nightArt,
  ragx:{image:kappa,alt:{en:'A kappa beside a moonlit stream',zh:'月下溪边的河童'}},
  'learn-to-ship':{image:kasa,alt:{en:'A one-eyed umbrella yokai on shrine steps',zh:'神社石阶上的独眼伞妖'}},
};
export const labels = {
  active: {en:'In focus',zh:'专 · 正在投入'}, exploring:{en:'Exploring',zh:'探 · 探索中'},
  paused:{en:'Paused',zh:'歇 · 暂时搁置'}, archived:{en:'Archived',zh:'藏 · 已归档'}, unknown:{en:'Status unconfirmed',zh:'近况待记'},
};
// Canonical public topic IDs match existing blog/Logseq vocabulary.
export const topics:Record<string,{en:string;zh:string}> = Object.fromEntries(
  ["agents", "ai", "career", "edu", "english", "learning", "machine-learning", "rag", "reflection", "science", "tools", "wish-studio", "workflow"].map(tag=>[tag,{en:tag,zh:tag}])
);
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
