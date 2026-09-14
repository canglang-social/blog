import {readFile,writeFile} from 'node:fs/promises';
// Atlas facts remain in the owner-generated public HTML. Compose only site chrome
// into dist after Astro renders the shared components, so later regeneration is safe.
for(const locale of ['', 'zh/']){
  const atlasPath=`dist/${locale}atlas/index.html`;
  const original=await readFile(`public/${locale}atlas/index.html`,'utf8');
  const reference=await readFile(`dist/${locale}blog/index.html`,'utf8');
  const sharedHead=reference.match(/<head[^>]*>([\s\S]*?)<\/head>/)[1];
  const behavior=[...reference.matchAll(/<script type="module"[^>]*>[\s\S]*?<\/script>/g)].map(m=>m[0]).join('\n');
  const assets=[...sharedHead.matchAll(/<link\b[^>]*rel="(?:stylesheet|icon)"[^>]*>|<script\b[^>]*>[\s\S]*?<\/script>/g)].map(m=>m[0]).join('\n');
  let header=reference.match(/<header class="gallery-header[\s\S]*?<\/header>/)[0];
  header=header.replace(/ aria-current="page"/g,'').replace(new RegExp(`href="/${locale}atlas/"`),`href="/${locale}atlas/" aria-current="page"`);
  header=header.replace(/<a\b[^>]*data-gallery-language[^>]*>/,tag=>tag.replace(/href="[^"]*"/,`href="/${locale?'':'zh/'}atlas/"`));
  const footer=reference.match(/<footer class="gallery-footer[\s\S]*?<\/footer>/)[0];
  let html=original.replace(/<script>\(\(\)=>\{const s=localStorage[\s\S]*?<\/script>/,'');
  html=html.replace('</head>',`${assets}${behavior}</head>`).replace('<body>','<body class="gallery-site atlas-site">');
  // Remove obsolete return/language controls; the shared header owns navigation.
  html=html.replace(/<p style="margin:0 0 1\.2rem;[^>]*>[\s\S]*?<\/p>/,'');
  const overrides=`<style>.atlas-site{padding:0;background:var(--bg);color:var(--text);--page:var(--bg);--panel:var(--surface);--ink:var(--heading);--ink-2:var(--muted);--hairline:var(--border)}.atlas-document{width:100%;max-width:none;padding:0 20px 48px;margin:0}.atlas-document .col{max-width:44rem}.atlas-site>.gallery-footer{padding-top:32px}.atlas-site>.gallery-header{font-family:Charter,"Songti SC",serif}.atlas-document:focus{outline:none}.atlas-document .step{white-space:normal;max-width:100%;overflow-wrap:anywhere}.atlas-document table{display:block;max-width:100%;overflow-x:auto}</style>`;
  html=html.replace('</style>',`</style>${overrides}${header}<main class="atlas-document" id="main" tabindex="-1">`);
  html=html.replace('</body>',`</main>${footer}</body>`);
  await writeFile(atlasPath,html);
}
console.log('Atlas: shared navigation, footer and theme integrated; source content retained.');
