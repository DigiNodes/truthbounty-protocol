import { mkdirSync, writeFileSync } from 'node:fs';

const out = new URL('./boards/', import.meta.url);
mkdirSync(out, { recursive: true });

const C = {
  canvas: '#070A12', surface: '#101522', raised: '#151C2B', border: '#273149',
  text: '#F7F9FC', muted: '#9AA7BD', cyan: '#22D3EE', blue: '#4F7CFF',
  gold: '#F5B942', green: '#41D39A', amber: '#F4B860', red: '#FF6B7A', info: '#74A7FF'
};

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rect = (x,y,w,h,fill=C.surface,rx=16,stroke=C.border,sw=1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const line = (x1,y1,x2,y2,stroke=C.border,sw=1,dash='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const txt = (x,y,value,size=16,fill=C.text,weight=500,anchor='start',family='Geist, Inter, Arial, sans-serif') => `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(value)}</text>`;
const pill = (x,y,label,color=C.blue,w=Math.max(72,label.length*7+24)) => `${rect(x,y,w,28,`${color}1F`,14,`${color}55`)}${txt(x+w/2,y+19,label,11,color,700,'middle')}`;
const button = (x,y,label,kind='primary',w=140) => {
  const fill = kind==='primary' ? C.blue : kind==='danger' ? C.red : kind==='ghost' ? 'transparent' : C.raised;
  const stroke = kind==='primary'||kind==='danger' ? fill : C.border;
  return `${rect(x,y,w,44,fill,10,stroke)}${txt(x+w/2,y+28,label,13,kind==='primary'||kind==='danger'?C.text:C.text,700,'middle')}`;
};
const check = (x,y,color=C.cyan) => `<circle cx="${x}" cy="${y}" r="11" fill="${color}20" stroke="${color}"/><path d="m${x-5} ${y} 3 4 7-8" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
const icon = (x,y,label,color=C.cyan) => `${rect(x,y,36,36,`${color}18`,10,`${color}44`)}${txt(x+18,y+23,label,12,color,800,'middle')}`;
const titleBlock = (kicker,title,subtitle) => `${txt(64,54,kicker.toUpperCase(),12,C.cyan,800)}${txt(64,96,title,34,C.text,800)}${txt(64,126,subtitle,15,C.muted,450)}`;
const brand = () => `<g transform="translate(1422 46)"><path fill="url(#signal)" d="M24 2 8 7c-2 1-3 2-3 4v13c0 13 6 23 19 29V32l-9-9 9-9V2Zm4 0 16 5c2 1 3 2 3 4v13c0 13-6 23-19 29V32l9-9-9-9V2Z"/><path fill="${C.cyan}" d="m26 19 4 4-4 4-4-4 4-4Z"/>${txt(55,34,'TruthBounty',18,C.text,800)}</g>`;
const frame = (kicker,title,subtitle,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-label="${esc(title)}">
<defs><linearGradient id="signal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.blue}"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000" flood-opacity=".22"/></filter></defs>
<rect width="1600" height="1000" fill="${C.canvas}"/><circle cx="150" cy="-40" r="280" fill="${C.cyan}" opacity=".035"/><circle cx="1550" cy="980" r="340" fill="${C.blue}" opacity=".045"/>${titleBlock(kicker,title,subtitle)}${brand()}${body}</svg>`;

function write(name, value){ writeFileSync(new URL(name, out), value); }

// 01 — tokens
{
  const colors = [
    ['Signal Cyan',C.cyan,'Evidence · focus'],['Proof Blue',C.blue,'Action · resolved'],['Ink Navy',C.canvas,'Dark canvas'],['Deep Slate',C.surface,'Surface'],
    ['Frost White',C.text,'Text · light canvas'],['Bounty Gold',C.gold,'Rewards only'],['Finalized',C.green,'Canonical success'],['Attention',C.amber,'Pending · lag'],['Failure',C.red,'Failed · destructive']
  ];
  let b = txt(64,176,'COLOUR TOKENS',12,C.muted,800);
  colors.forEach(([n,c,p],i)=>{const col=i%5,row=Math.floor(i/5),x=64+col*295,y=198+row*122;b+=`${rect(x,y,270,94,C.surface,14,C.border)}<rect x="${x+14}" y="${y+14}" width="66" height="66" rx="12" fill="${c}"/>${txt(x+94,y+38,n,14,C.text,700)}${txt(x+94,y+60,c,12,C.muted,600,'start','Geist Mono, monospace')}${txt(x+94,y+79,p,10,C.muted,500)}`});
  b+=txt(64,466,'SPACING · SIZE · SHAPE',12,C.muted,800);
  [4,8,12,16,24,32,48,64].forEach((v,i)=>{let x=64+i*118;b+=`${txt(x,500,`${v}px`,11,C.muted,650)}<rect x="${x}" y="516" width="${Math.min(v*1.1,72)}" height="18" rx="4" fill="${C.cyan}" opacity=".8"/>`});
  b+=`${rect(64,568,700,168,C.surface,16,C.border)}${txt(88,602,'Control heights',14,C.text,700)}${button(88,624,'Compact · 36', 'secondary',128)}${button(232,620,'Default · 44','secondary',132)}${button(380,616,'Large · 52','secondary',128)}${txt(540,646,'44 px minimum touch target',12,C.muted,600)}`;
  b+=`${rect(788,568,748,168,C.surface,16,C.border)}${txt(812,602,'Radius · border · elevation',14,C.text,700)}`;
  [8,12,16,20].forEach((r,i)=>b+=`${rect(812+i*112,624,82,58,C.raised,r,C.border)}${txt(853+i*112,706,`${r}px`,11,C.muted,600,'middle')}`);
  b+=`${rect(1280,624,210,70,C.raised,16,C.border)}${txt(1385,666,'Raised · shadow 02',12,C.text,650,'middle')}`;
  b+=txt(64,784,'MOTION',12,C.muted,800);
  [['120 ms','feedback'],['180 ms','component'],['240 ms','drawer']].forEach(([a,d],i)=>{const x=64+i*240;b+=`${rect(x,808,214,92,C.surface,14,C.border)}${txt(x+20,842,a,19,C.text,750)}${txt(x+20,867,d,11,C.muted,600)}<rect x="${x+20}" y="880" width="${48+i*42}" height="4" rx="2" fill="${C.blue}"/>`});
  b+=`${rect(812,808,724,92,C.surface,14,C.border)}${txt(836,842,'Reduced motion',16,C.text,750)}${txt(836,869,'Remove non-essential transforms; preserve state change and focus.',12,C.muted,500)}${pill(1372,830,'Required',C.cyan,126)}`;
  write('01-design-tokens.svg', frame('Foundation 01','Design tokens','A dark-first system with semantic colour separation and accessible interaction dimensions.',b));
}

// 02 — shells
{
  const miniShell=(x,y,w,h,type,light=false)=>{const bg=light?'#F7F9FC':C.canvas,surf=light?'#FFFFFF':C.surface,text=light?C.canvas:C.text,muted=light?'#58647A':C.muted,border=light?'#DCE2EB':C.border;let s=`${rect(x,y,w,h,bg,18,border)}${txt(x+20,y+30,type,11,light?C.blue:C.cyan,800)}`;
    if(type==='MARKETING SHELL'){s+=`${line(x+18,y+48,x+w-18,y+48,border)}${txt(x+20,y+78,'TruthBounty',15,text,800)}${txt(x+w-220,y+78,'Explore   Docs   Status',10,muted,600)}${rect(x+20,y+104,w-40,150,surf,14,border)}${txt(x+42,y+146,'Evidence becomes accountable truth.',20,text,800)}${txt(x+42,y+174,'Public explanation and safe journey entry.',11,muted,500)}${button(x+42,y+194,'Explore claims','primary',118)}`;}
    if(type==='PUBLIC APP SHELL'){s+=`${line(x+18,y+48,x+w-18,y+48,border)}${txt(x+20,y+78,'TruthBounty',15,text,800)}${txt(x+w-182,y+78,'Connect wallet',10,light?C.blue:C.cyan,700)}${rect(x+20,y+104,w-40,52,surf,12,border)}${txt(x+38,y+136,'Claims  /  Search  /  Filters',11,muted,600)}${rect(x+20,y+172,w-40,84,surf,12,border)}${txt(x+38,y+204,'Public claim row',12,text,700)}${pill(x+w-132,y+188,'Verifying',C.amber,92)}`;}
    if(type==='AUTHENTICATED APP SHELL'){s+=`${rect(x+16,y+48,118,h-64,surf,12,border)}${txt(x+32,y+78,'Overview',10,text,700)}${txt(x+32,y+104,'My claims',10,muted,600)}${txt(x+32,y+130,'Rewards',10,muted,600)}${txt(x+32,y+156,'Transactions',10,muted,600)}${rect(x+148,y+48,w-164,42,surf,10,border)}${txt(x+164,y+74,'Claimant context',10,muted,650)}${pill(x+w-122,y+55,'0x71…c2',C.cyan,90)}${rect(x+148,y+104,w-164,152,surf,12,border)}${txt(x+168,y+140,'Next permitted action',13,text,750)}${txt(x+168,y+166,'Authority and freshness before analytics.',10,muted,500)}${button(x+168,y+190,'Create claim','primary',110)}`;}
    return s;};
  let b=miniShell(64,184,468,330,'MARKETING SHELL',false)+miniShell(566,184,468,330,'PUBLIC APP SHELL',true)+miniShell(1068,184,468,330,'AUTHENTICATED APP SHELL',false);
  b+=`${rect(64,552,1472,336,C.surface,18,C.border)}${txt(92,592,'SHELL CONTRACT',14,C.text,800)}`;
  const rules=[['Marketing','Product value, public proof and safe entry. No wallet requirement.'],['Public application','Canonical public reads. Actions explain eligibility before connection.'],['Authenticated application','256 px sidebar, 64 px topbar, 1440 px content maximum.'],['Privileged contexts','Operations, governance and guardian are separate; default read-only.']];
  rules.forEach(([h,d],i)=>{let x=92+(i%2)*700,y=628+Math.floor(i/2)*108;b+=`${icon(x,y,String(i+1).padStart(2,'0'),i===3?C.amber:C.cyan)}${txt(x+52,y+16,h,14,C.text,750)}${txt(x+52,y+40,d,11,C.muted,500)}${check(x+640,y+18,i===3?C.amber:C.cyan)}`});
  write('02-application-shells.svg',frame('Foundation 02','Application shells','Three coherent shells, one identity, and no accidental privilege escalation.',b));
}

// 03 — navigation
{
  let b=`${rect(64,174,920,736,C.surface,18,C.border)}${txt(90,210,'DESKTOP · 256 PX SIDEBAR + 64 PX TOPBAR',12,C.muted,800)}`;
  b+=`${rect(90,234,252,640,C.canvas,14,C.border)}${txt(114,270,'TruthBounty',17,C.text,800)}${pill(114,288,'Claimant context',C.cyan,142)}`;
  const groups=[['PUBLIC',['Explore claims','Documentation','Service status']],['PERSONAL',['Overview','My claims','Rewards','Transactions','Settings']],['VERIFIER',['Verification queue','My verifications']]];
  let yy=350;groups.forEach(([g,items])=>{b+=txt(114,yy,g,9,C.muted,800);yy+=24;items.forEach((it,j)=>{if(it==='Overview')b+=rect(106,yy-18,218,34,`${C.blue}18`,9,`${C.blue}33`);b+=txt(122,yy+4,it,11,it==='Overview'?C.cyan:C.muted,it==='Overview'?700:550);yy+=38});yy+=12});
  b+=`${rect(366,234,592,58,C.canvas,12,C.border)}${txt(390,269,'Overview',12,C.text,700)}${pill(754,249,'Optimism Sepolia',C.info,150)}${pill(910,249,'0x71…c2',C.cyan,90)}`;
  b+=`${rect(366,316,592,242,C.canvas,14,C.border)}${txt(390,352,'Capability-aware navigation',16,C.text,800)}${txt(390,380,'Visible context is presentation only; authority is revalidated.',11,C.muted,500)}${pill(390,406,'Claimant',C.cyan,98)}${pill(498,406,'Verifier eligible',C.green,128)}${pill(636,406,'Admin denied',C.red,108)}${txt(390,474,'Direct privileged URL',11,C.muted,650)}${rect(390,490,536,46,`${C.red}12`,10,`${C.red}55`)}${txt(408,518,'Access denied · capability absent from pinned release manifest',11,C.red,650)}`;
  b+=`${rect(366,582,592,292,C.canvas,14,C.border)}${txt(390,618,'Navigation invariants',14,C.text,750)}`;
  ['Real links except disclosure controls','Active route exposed programmatically','Account, chain or release change invalidates context','Claim creation always resolves to /claims/new','No “All Chains” mutation context'].forEach((v,i)=>{b+=`${check(402,650+i*40,i===4?C.amber:C.cyan)}${txt(426,655+i*40,v,11,C.muted,550)}`});
  b+=`${rect(1016,174,520,736,C.surface,18,C.border)}${txt(1042,210,'MOBILE · 390 PX',12,C.muted,800)}${rect(1080,238,390,624,C.canvas,28,C.border)}${rect(1098,256,354,58,C.surface,14,C.border)}${txt(1116,292,'☰',18,C.text,700)}${txt(1152,291,'TruthBounty',14,C.text,800)}${pill(1346,272,'2 pending',C.amber,90)}${rect(1098,330,286,514,C.surface,14,C.border)}${txt(1118,364,'NAVIGATION DRAWER',9,C.muted,800)}${pill(1118,382,'Verifier context',C.green,136)}`;
  ['Explore claims','Overview','My claims','Verification queue','Rewards','Transactions','Settings'].forEach((v,i)=>b+=`${i===3?rect(1108,414+i*48,258,38,`${C.blue}18`,9,`${C.blue}44`):''}${txt(1122,440+i*48,v,11,i===3?C.cyan:C.muted,i===3?700:550)}`);
  b+=`${txt(1118,788,'Focus trapped while open',10,C.cyan,650)}${txt(1118,810,'Esc closes · focus returns to menu',10,C.muted,500)}`;
  write('03-navigation.svg',frame('Foundation 03','Navigation and capability context','Stable routes, explicit active context, and a focus-safe mobile drawer.',b));
}

// 04 — components
{
  let b=`${rect(64,174,1472,736,C.surface,18,C.border)}`;
  b+=`${txt(92,210,'ACTIONS',12,C.muted,800)}${button(92,232,'Primary action','primary',142)}${button(246,232,'Secondary','secondary',126)}${button(384,232,'Ghost','ghost',96)}${button(492,232,'Destructive','danger',126)}${button(630,232,'Disabled','secondary',106)}<rect x="630" y="232" width="106" height="44" rx="10" fill="${C.canvas}" opacity=".62"/>`;
  b+=`${txt(92,318,'FORM CONTROLS',12,C.muted,800)}${txt(92,350,'Evidence title',11,C.text,650)}${rect(92,364,318,46,C.canvas,10,C.border)}${txt(108,393,'Enter a clear, verifiable claim',11,C.muted,500)}${txt(438,350,'Source type',11,C.text,650)}${rect(438,364,220,46,C.canvas,10,C.border)}${txt(454,393,'Primary source',11,C.text,550)}${txt(632,393,'⌄',14,C.muted,700)}${rect(686,348,374,96,`${C.cyan}08`,12,`${C.cyan}66`,1)}${txt(873,380,'Upload evidence',12,C.cyan,700,'middle')}${txt(873,404,'PDF, image or URL · integrity checked',10,C.muted,500,'middle')}`;
  b+=`${txt(92,480,'CARDS · TABLES',12,C.muted,800)}${rect(92,502,312,158,C.canvas,14,C.border)}${txt(112,532,'Claim status',11,C.muted,650)}${txt(112,564,'Evidence review',18,C.text,800)}${pill(112,586,'Action needed',C.amber,116)}${txt(112,636,'Fresh 2 min ago',10,C.muted,500)}`;
  b+=`${rect(428,502,632,158,C.canvas,14,C.border)}${txt(448,532,'CLAIM',9,C.muted,800)}${txt(760,532,'PHASE',9,C.muted,800)}${txt(910,532,'DEADLINE',9,C.muted,800)}${line(448,548,1040,548,C.border)}${txt(448,579,'Municipal air-quality report',11,C.text,650)}${pill(752,559,'Verification',C.info,104)}${txt(910,579,'18 h',11,C.amber,700)}${line(448,596,1040,596,C.border)}${txt(448,628,'Public procurement claim',11,C.text,650)}${pill(752,608,'Finalized',C.green,88)}${txt(910,628,'—',11,C.muted,600)}`;
  b+=`${txt(1092,210,'FILTERS · TABS · BADGES',12,C.muted,800)}${pill(1092,232,'All claims',C.blue,92)}${pill(1194,232,'Active',C.muted,76)}${pill(1280,232,'Finalized',C.green,88)}${rect(1092,286,416,46,C.canvas,10,C.border)}${txt(1110,315,'Search claims or evidence…',11,C.muted,500)}${pill(1092,350,'Submitted',C.info,98)}${pill(1200,350,'Pending',C.amber,82)}${pill(1292,350,'Finalized',C.green,92)}${pill(1394,350,'Failed',C.red,76)}`;
  b+=`${txt(1092,480,'CONFIRMATION DIALOG',12,C.muted,800)}${rect(1092,502,416,326,C.raised,18,C.border)}${txt(1118,540,'Review before authorization',16,C.text,800)}${txt(1118,568,'Exact action, chain, contract and risk.',11,C.muted,500)}${rect(1118,592,364,106,C.canvas,12,C.border)}${txt(1136,622,'Network',10,C.muted,650)}${txt(1458,622,'Optimism Sepolia',10,C.text,650,'end')}${txt(1136,650,'Contract',10,C.muted,650)}${txt(1458,650,'0x42…91a',10,C.text,650,'end','Geist Mono, monospace')}${txt(1136,678,'Estimated fee',10,C.muted,650)}${txt(1458,678,'0.00014 ETH',10,C.text,650,'end')}${rect(1118,718,364,48,`${C.amber}10`,10,`${C.amber}55`)}${txt(1136,747,'Authorization does not imply finality.',10,C.amber,650)}${button(1118,782,'Cancel','secondary',100)}${button(1312,782,'Authorize','primary',170)}`;
  write('04-component-primitives.svg',frame('Foundation 04','Component primitives','Consistent controls, evidence-first density, and explicit confirmation boundaries.',b));
}

// 05 — wallet, network, identity
{
  let b='';
  const card=(x,y,title,accent=C.cyan)=>`${rect(x,y,456,300,C.surface,18,C.border)}${icon(x+24,y+24,title.slice(0,2).toUpperCase(),accent)}${txt(x+76,y+48,title,15,C.text,800)}`;
  b+=card(64,176,'Wallet account')+`${pill(88,244,'Connected',C.green,96)}${txt(88,292,'0x71f3…c2A9',18,C.text,750,'start','Geist Mono, monospace')}${txt(88,322,'Claimant · Verifier eligible',11,C.muted,550)}${line(88,346,496,346,C.border)}${button(88,368,'View account','secondary',124)}${button(224,368,'Disconnect','ghost',112)}`;
  b+=card(548,176,'Network boundary',C.amber)+`${pill(572,244,'Wrong network',C.amber,118)}${txt(572,292,'Mutations are unavailable.',17,C.text,750)}${txt(572,322,'Switch to the pinned Optimism release.',11,C.muted,550)}${rect(572,350,408,44,`${C.amber}10`,10,`${C.amber}55`)}${txt(590,378,'Public reads remain available where safe.',10,C.amber,650)}${button(572,410,'Switch network','primary',142)}`;
  b+=card(1032,176,'Identity and trust',C.info)+`${pill(1056,244,'Evidence available',C.info,138)}${txt(1056,292,'Humanity evidence',17,C.text,750)}${txt(1056,322,'Verified source · freshness labelled',11,C.muted,550)}${line(1056,346,1464,346,C.border)}${txt(1056,378,'Identity does not create protocol authority.',10,C.amber,650)}${button(1056,410,'Review evidence','secondary',138)}`;
  b+=`${rect(64,510,1472,378,C.surface,18,C.border)}${txt(90,548,'SESSION AND AUTHORITY INVALIDATION',12,C.muted,800)}`;
  const steps=[['Account changed','Discard stale protected context'],['Chain changed','Revalidate pinned release'],['Manifest changed','Refresh ABI, roles and addresses'],['Role revoked','Remove action and show denied state']];
  steps.forEach(([h,d],i)=>{const x=90+i*356;b+=`${rect(x,580,330,132,C.canvas,14,C.border)}${txt(x+18,612,`0${i+1}`,10,C.cyan,800)}${txt(x+18,642,h,14,C.text,750)}${txt(x+18,668,d,10,C.muted,500)}`;if(i<3)b+=txt(x+340,648,'→',18,C.muted,600)});
  b+=`${rect(90,744,1400,104,`${C.red}0D`,14,`${C.red}44`)}${txt(112,780,'FAIL CLOSED',11,C.red,800)}${txt(112,808,'Missing, stale, contradictory or unmapped authority disables protected mutation. Frontend context never grants capability.',12,C.text,600)}${pill(1350,780,'Required',C.red,116)}`;
  write('05-wallet-network-identity.svg',frame('Foundation 05','Wallet, network and identity','Connection is not authorization; every protected action revalidates canonical authority.',b));
}

// 06 — transactions
{
  const states=[
    ['idle','Ready',C.muted,'Prerequisites and action visible.'],['validating','Checking',C.info,'Prevent duplicate submission.'],['awaiting-signature','Wallet open',C.cyan,'Explain request; allow cancel.'],['rejected','Rejected',C.red,'Preserve recoverable input.'],
    ['submitted','Submitted',C.info,'Hash is not confirmation.'],['replaced','Replaced',C.amber,'Track canonical replacement.'],['reverted','Reverted',C.red,'Redacted, actionable failure.'],['confirmed','Confirmed',C.info,'Receipt observed; not finality.'],
    ['finalized','Finalized',C.green,'Final-success language allowed.'],['projection-lag','Indexing delayed',C.amber,'Chain truth; projection behind.'],['reorged','Reorg detected',C.red,'Withdraw prior certainty.'],['unavailable','Unavailable',C.muted,'Fail closed; retry/status help.']
  ];
  let b='';states.forEach(([key,label,color,desc],i)=>{const col=i%4,row=Math.floor(i/4),x=64+col*368,y=176+row*224;b+=`${rect(x,y,344,196,C.surface,16,C.border)}${txt(x+20,y+30,key.toUpperCase(),9,C.muted,800,'start','Geist Mono, monospace')}${pill(x+20,y+48,label,color,Math.max(88,label.length*7+28))}${txt(x+20,y+110,desc,11,C.text,600)}${line(x+20,y+132,x+324,y+132,C.border)}${txt(x+20,y+158,i===4?'0xa83f…91c2':i===7?'12 confirmations':i===8?'Canonical finality':'State persisted',10,C.muted,550,'start',i===4?'Geist Mono, monospace':'Geist, Inter, Arial, sans-serif')}${txt(x+324,y+174,i===8?'✓':'↗',13,color,800,'end')}`});
  b+=`${rect(64,864,1472,64,`${C.cyan}0B`,14,`${C.cyan}44`)}${txt(88,903,'Button completion ≠ transaction completion · hash ≠ confirmation · confirmation ≠ finality · projection never overrides chain truth',12,C.cyan,700)}`;
  write('06-transaction-states.svg',frame('Foundation 06','Transaction and projection states','One canonical vocabulary across every mutation and reconciliation surface.',b));
}

// 07 — system states
{
  const states=[
    ['Loading','Skeletons preserve structure','▤',C.info],['Empty','Explain what belongs here','○',C.muted],['Stale','Show source and last freshness','◷',C.amber],['Offline','Preserve safe local work','⌁',C.amber],
    ['Unavailable','Dependency or release missing','×',C.muted],['Error','Safe, redacted and actionable','!',C.red],['Denied','Capability absent or revoked','⊘',C.red],['Not found','Unknown canonical identifier','?',C.muted]
  ];
  let b='';states.forEach(([h,d,ic,c],i)=>{const col=i%4,row=Math.floor(i/4),x=64+col*368,y=184+row*300;b+=`${rect(x,y,344,268,C.surface,16,C.border)}${rect(x+20,y+20,48,48,`${c}18`,14,`${c}55`)}${txt(x+44,y+52,ic,20,c,800,'middle')}${txt(x+20,y+100,h,17,C.text,800)}${txt(x+20,y+126,d,10,C.muted,500)}${rect(x+20,y+150,304,48,C.canvas,10,C.border)}${txt(x+36,y+180,h==='Denied'?'Request access through canonical governance.':h==='Error'?'Try again or view service status.':h==='Offline'?'Reconnect to continue safely.':'No outcome has been inferred.',10,h==='Error'||h==='Denied'?c:C.muted,550)}${button(x+20,y+214,h==='Denied'?'View authority':h==='Not found'?'Explore claims':'Retry','secondary',118)}`});
  b+=`${rect(64,806,1472,104,C.surface,16,C.border)}${txt(88,842,'STATE REQUIREMENTS',11,C.muted,800)}${txt(88,874,'Every state names what happened, preserves truthful data, offers a safe next action, and remains understandable without colour.',12,C.text,600)}${pill(1374,844,'No mock values',C.cyan,126)}`;
  write('07-system-states.svg',frame('Foundation 07','System and boundary states','Truthful degradation without fabricated balances, success, authority or protocol outcomes.',b));
}

// 08 — responsive and accessibility
{
  const viewport=(x,y,w,h,label)=>`${rect(x,y,w,h,C.surface,18,C.border)}${txt(x+18,y+28,label,10,C.cyan,800)}${rect(x+16,y+44,w-32,42,C.canvas,10,C.border)}${txt(x+30,y+70,'TruthBounty',11,C.text,800)}`;
  let b=viewport(64,176,630,500,'DESKTOP · 1440+')+`${rect(80,236,132,420,C.canvas,10,C.border)}${rect(228,236,450,112,C.canvas,10,C.border)}${rect(228,364,212,276,C.canvas,10,C.border)}${rect(456,364,222,276,C.canvas,10,C.border)}`;
  b+=viewport(730,176,376,500,'TABLET · 768')+`${rect(746,236,344,104,C.canvas,10,C.border)}${rect(746,356,344,130,C.canvas,10,C.border)}${rect(746,502,344,154,C.canvas,10,C.border)}`;
  b+=viewport(1142,176,394,500,'MOBILE · 390')+`${rect(1158,236,362,82,C.canvas,10,C.border)}${rect(1158,334,362,118,C.canvas,10,C.border)}${rect(1158,468,362,92,C.canvas,10,C.border)}${button(1158,582,'Full-width primary action','primary',362)}`;
  b+=`${txt(64,724,'RESPONSIVE RULES',12,C.muted,800)}`;
  const rules=[['200% zoom','No clipped controls or lost journeys'],['44 × 44 px','Minimum touch target'],['Keyboard','Logical order and visible focus'],['Screen reader','Landmarks, names and status announcements'],['Reduced motion','No essential meaning in animation'],['Tables → cards','Mobile preserves priority, not columns']];
  rules.forEach(([h,d],i)=>{const col=i%3,row=Math.floor(i/3),x=64+col*492,y=748+row*96;b+=`${rect(x,y,468,78,C.surface,14,C.border)}${check(x+22,y+39,i===5?C.info:C.cyan)}${txt(x+48,y+31,h,12,C.text,750)}${txt(x+48,y+53,d,10,C.muted,500)}`});
  write('08-responsive-accessibility.svg',frame('Foundation 08','Responsive and accessibility behaviour','Reflow preserves task priority, authority, focus and transaction visibility.',b));
}

console.log('Generated 8 foundation boards.');
