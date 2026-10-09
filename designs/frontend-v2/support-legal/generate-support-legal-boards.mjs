import { mkdirSync, writeFileSync } from 'node:fs';

const out = new URL('./boards/', import.meta.url);
mkdirSync(out, { recursive: true });

const C = {
  canvas: '#070A12', surface: '#101522', raised: '#151C2B', soft: '#0C111C',
  border: '#273149', text: '#F7F9FC', muted: '#9AA7BD', cyan: '#22D3EE',
  blue: '#4F7CFF', gold: '#F5B942', green: '#41D39A', amber: '#F4B860',
  red: '#FF6B7A', violet: '#9B8AFB'
};

const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rect = (x,y,w,h,fill=C.surface,rx=16,stroke=C.border,sw=1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const line = (x1,y1,x2,y2,stroke=C.border,sw=1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"/>`;
const txt = (x,y,value,size=14,fill=C.text,weight=500,anchor='start') => `<text x="${x}" y="${y}" font-family="Geist, Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(value)}</text>`;
const multi = (x,y,rows,size=11,fill=C.muted,weight=500,gap=22) => rows.map((row,i)=>txt(x,y+i*gap,row,size,fill,weight)).join('');
const pill = (x,y,label,color=C.blue,w=Math.max(74,label.length*7+24)) => `${rect(x,y,w,28,`${color}1F`,14,`${color}66`)}${txt(x+w/2,y+19,label,11,color,700,'middle')}`;
const button = (x,y,label,kind='primary',w=168) => {
  const fill = kind==='primary' ? C.blue : kind==='danger' ? C.red : kind==='gold' ? C.gold : kind==='disabled' ? C.soft : C.raised;
  const stroke = ['primary','danger','gold'].includes(kind) ? fill : C.border;
  const color = kind==='gold' ? C.canvas : kind==='disabled' ? C.muted : C.text;
  return `${rect(x,y,w,44,fill,10,stroke)}${txt(x+w/2,y+28,label,13,color,750,'middle')}`;
};
const dot = (x,y,color=C.green) => `<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
const icon = (x,y,label,color=C.cyan) => `${rect(x,y,42,42,`${color}18`,12,`${color}55`)}${txt(x+21,y+27,label,15,color,800,'middle')}`;
const note = (x,y,w,title,body,color=C.blue,h=76) => `${rect(x,y,w,h,`${color}0E`,12,`${color}55`)}${txt(x+20,y+29,title,12,C.text,760)}${txt(x+20,y+54,body,10,C.muted,500)}`;
const kv = (x,y,w,key,value,color=C.text) => `${txt(x,y,key,10,C.muted,650)}${txt(x+w,y,value,11,color,700,'end')}${line(x,y+17,x+w,y+17)}`;
const metric = (x,y,w,title,value,meta,color=C.cyan) => `${rect(x,y,w,114,C.surface,16,C.border)}${txt(x+20,y+30,title,10,C.muted,700)}${txt(x+20,y+67,value,22,color,820)}${txt(x+20,y+94,meta,9,C.muted,500)}`;
const card = (x,y,w,h,title,body,tag,color=C.cyan) => `${rect(x,y,w,h,C.surface,16,C.border)}${icon(x+20,y+20,title.slice(0,1),color)}${txt(x+78,y+40,title,14,C.text,760)}${multi(x+20,y+88,body,10,C.muted,500,21)}${tag?pill(x+20,y+h-46,tag,color):''}`;
const listRow = (x,y,w,title,meta,state,color=C.cyan) => `${rect(x,y,w,70,C.soft,12,C.border)}${dot(x+20,y+24,color)}${txt(x+38,y+29,title,12,C.text,700)}${txt(x+38,y+51,meta,9,C.muted,500)}${pill(x+w-146,y+21,state,color,124)}`;
const check = (x,y,color=C.green) => `<circle cx="${x}" cy="${y}" r="10" fill="${color}20" stroke="${color}"/><path d="m${x-4} ${y} 3 3 6-7" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`;

const defs = `<defs><linearGradient id="signal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.blue}"/></linearGradient><radialGradient id="glow"><stop stop-color="${C.blue}" stop-opacity=".16"/><stop offset="1" stop-color="${C.canvas}" stop-opacity="0"/></radialGradient></defs>`;
const brand = () => `<g transform="translate(46 24)"><path fill="url(#signal)" d="M22 0 7 5c-2 1-3 2-3 4v12c0 12 6 22 18 27V29l-8-8 8-8V0Zm4 0 15 5c2 1 3 2 3 4v12c0 12-6 22-18 27V29l8-8-8-8V0Z"/><path fill="${C.cyan}" d="m24 17 4 4-4 4-4-4 4-4Z"/>${txt(78,31,'TruthBounty',19,C.text,820)}</g>`;
const nav = (active) => {
  const items = [['Explore','Claims'],['How it works','Guide'],['Docs','Docs'],['Status','Status']];
  return items.map(([label,key],i)=>txt(930+i*110,52,label,12,key===active?C.cyan:C.muted,key===active?760:550)).join('');
};
const frame = (title,active,eyebrow,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-label="${esc(title)}">${defs}<rect width="1600" height="1000" fill="${C.canvas}"/><circle cx="1420" cy="170" r="300" fill="url(#glow)"/><rect width="1600" height="88" fill="${C.soft}"/>${brand()}${nav(active)}${button(1370,22,'Open app','primary',170)}${txt(64,128,eyebrow.toUpperCase(),10,C.cyan,800)}${body}<rect x="0" y="934" width="1600" height="66" fill="${C.soft}"/>${txt(64,973,'TruthBounty V2 · Optimism/EVM · Design authority',10,C.muted,600)}${txt(1080,973,'Docs   Status   Contact   Privacy   Terms   Disclosures',10,C.muted,600)}</svg>`;
const write = (name,svg) => writeFileSync(new URL(name,out),svg);

// 01 — documentation home
{
  let b = `${txt(64,177,'Understand the protocol.',36,C.text,840)}${txt(64,214,'Act with evidence.',36,C.text,840)}${txt(64,252,'Versioned guidance for every TruthBounty journey.',13,C.muted,500)}`;
  b += `${rect(64,292,930,56,C.surface,12,C.border)}${txt(88,326,'Search claims, verification, disputes, rewards, governance…',12,C.muted,500)}${pill(842,306,'⌘ K',C.blue,78)}`;
  b += `${note(1020,292,516,'Current documentation','TB-V2 · Optimism Sepolia · reviewed 09 Oct 2026',C.cyan)}`;
  const topics = [
    ['Claimants',['Create and fund a claim','Publish public evidence','Track verification and disputes'],'5 guides',C.cyan],
    ['Verifiers',['Eligibility and stake','Commit and reveal','Rewards and slashing'],'6 guides',C.blue],
    ['Disputes',['Challenge windows','Evidence and bonds','Appeals and settlement'],'4 guides',C.violet],
    ['Safety',['Wallet and network','Transaction recovery','Protocol risks'],'7 guides',C.amber],
    ['Governance',['Proposal lifecycle','Timelock and roles','Emergency boundaries'],'5 guides',C.blue],
    ['Developers',['Release manifests','Contract interfaces','API and indexer'],'8 guides',C.cyan]
  ];
  topics.forEach(([h,rows,tag,color],i)=>b+=card(64+(i%3)*506,388+Math.floor(i/3)*228,474,196,h,rows,tag,color));
  b += `${note(64,860,1472,'Documentation boundary','Guidance explains observed interfaces. Contract state and verified release artifacts remain authoritative.',C.blue)}`;
  write('01-documentation-home.svg',frame('Documentation home','Docs','Documentation',b));
}

// 02 — documentation article
{
  let b = `${txt(64,170,'Docs  /  Transactions  /  Recovery',11,C.muted,650)}${txt(64,214,'Recover a delayed transaction',32,C.text,820)}${txt(64,246,'Understand submitted, replaced, confirmed, finalized, indexing-delayed and reorged states.',12,C.muted,500)}`;
  b += `${pill(64,272,'TB-V2',C.blue,78)}${pill(152,272,'Reviewed 09 Oct 2026',C.green,166)}${pill(328,272,'Optimism/EVM',C.cyan,124)}`;
  b += `${rect(64,324,244,538,C.soft,14,C.border)}${txt(88,362,'ON THIS PAGE',10,C.muted,800)}${multi(88,404,['Before you start','1 · Find the transaction','2 · Read the canonical state','3 · Reconcile indexing','Replaced transactions','Reorg recovery','When to ask for help'],11,C.muted,550,43)}`;
  b += `${rect(336,324,820,538,C.surface,16,C.border)}${txt(370,370,'Before you start',20,C.text,800)}${multi(370,408,['Never resubmit only because the interface is delayed. First confirm the','network, release, wallet account and canonical transaction hash.'],11,C.muted,500,24)}${note(370,466,752,'Canonical receipt first','A successful wallet submission is not final settlement or API indexing.',C.cyan)}${txt(370,584,'1 · Find the transaction',17,C.text,760)}${multi(370,620,['Open Transaction center and match the exact account, chain and release.','If the wallet replaced the transaction, follow the replacement hash.'],11,C.muted,500,24)}${txt(370,708,'2 · Read the canonical state',17,C.text,760)}${multi(370,744,['Submitted → confirmed → finalized are distinct. Reverted and reorged','states require recovery; indexing delayed does not imply chain failure.'],11,C.muted,500,24)}${button(370,814,'Previous article','secondary',156)}${button(956,814,'Next article','secondary',156)}`;
  b += `${rect(1184,324,352,538,C.surface,16,C.border)}${txt(1210,364,'Article details',14,C.text,760)}${kv(1210,404,300,'Version','2.0')}${kv(1210,452,300,'Applies to','TB-V2')}${kv(1210,500,300,'Source','UX authority',C.cyan)}${note(1210,548,300,'Need help?','Use support with a non-secret transaction hash.',C.blue,94)}${txt(1210,688,'Was this useful?',11,C.text,700)}${button(1210,708,'Yes','secondary',94)}${button(1318,708,'No','secondary',94)}${txt(1210,790,'Feedback is not a support request.',9,C.muted,500)}`;
  write('02-documentation-article.svg',frame('Documentation article','Docs','Documentation article',b));
}

// 03 — help and troubleshooting
{
  let b = `${txt(64,176,'Help and troubleshooting',34,C.text,830)}${txt(64,210,'Start with the observed state; escalation never changes canonical protocol outcomes.',12,C.muted,500)}`;
  b += `${rect(64,250,1472,54,C.surface,12,C.border)}${txt(88,283,'Describe what you see…',12,C.muted,500)}${pill(1374,263,'Search',C.blue,110)}`;
  const cases = [
    ['Wallet or network',['Wrong account or chain','Connection expired','Unsupported wallet'],'Check context',C.cyan],
    ['Transaction delayed',['Submitted or replaced','Confirmation pending','Indexing delayed'],'Recover safely',C.blue],
    ['Evidence unavailable',['Gateway degraded','CID missing','Integrity mismatch'],'Inspect source',C.amber],
    ['Claim or dispute',['Window expired','Action unavailable','Outcome provisional'],'Read lifecycle',C.violet],
    ['Rewards and stake',['Settlement pending','Withdrawal locked','Slashing result'],'Check finality',C.gold],
    ['Service degraded',['API or RPC unavailable','Indexer behind','Release mismatch'],'Open status',C.red]
  ];
  cases.forEach(([h,rows,tag,color],i)=>b+=card(64+(i%3)*506,344+Math.floor(i/3)*222,474,190,h,rows,tag,color));
  b += `${note(64,824,960,'Safe escalation','Support may diagnose interfaces and records; it cannot edit claims, votes, disputes, settlements or balances.',C.red)}${button(1050,840,'Contact support','primary',198)}${button(1262,840,'View service status','secondary',214)}`;
  write('03-help-troubleshooting.svg',frame('Help and troubleshooting','Docs','Help center',b));
}

// 04 — service status overview
{
  let b = `${txt(64,176,'Service status',34,C.text,830)}${pill(64,206,'Some systems degraded',C.amber,178)}${txt(258,225,'Observed 14:16 UTC · public health data · refresh in 42s',11,C.muted,500)}`;
  b += `${note(1020,160,516,'Authority boundary','Third-party services are observed dependencies, not controlled guarantees.',C.blue)}`;
  const metrics = [['Web application','Operational','release TB-V2',C.green],['API','Operational','checked 12s ago',C.green],['Indexer','Delayed','lag 47 blocks',C.amber],['Evidence gateway','Degraded','fallback active',C.amber]];
  metrics.forEach(([a,v,m,c],i)=>b+=metric(64+i*368,282,344,a,v,m,c));
  b += `${rect(64,424,940,410,C.surface,18,C.border)}${txt(90,464,'COMPONENTS',10,C.muted,800)}${listRow(90,488,888,'Optimism RPC','Observed through bounded API probe','Operational',C.green)}${listRow(90,570,888,'PostgreSQL projection','Public readiness only; diagnostics remain protected','Operational',C.green)}${listRow(90,652,888,'Indexer projection','Finalized 14,281,402 · observed 14,281,449','Delayed',C.amber)}${listRow(90,734,888,'IPFS evidence access','Primary gateway degraded · fallback observation','Degraded',C.amber)}`;
  b += `${rect(1032,424,504,410,C.surface,18,C.border)}${txt(1058,464,'ACTIVE INCIDENT',10,C.muted,800)}${pill(1058,492,'Monitoring',C.amber,112)}${txt(1058,546,'Indexer projection delay',17,C.text,780)}${multi(1058,580,['Public reads may be stale. Contract transactions','remain available, but indexed views can lag.'],11,C.muted,500,24)}${kv(1058,658,452,'Started','13:42 UTC')}${kv(1058,706,452,'Last update','14:12 UTC')}${button(1058,760,'View incident','secondary',160)}`;
  b += `${txt(64,882,'Illustrative board: production UI must bind canonical public health endpoints and label freshness.',10,C.muted,600)}`;
  write('04-service-status-overview.svg',frame('Service status overview','Status','System transparency',b));
}

// 05 — incident detail and history
{
  let b = `${txt(64,168,'Status  /  Incident INC-204',11,C.muted,650)}${txt(64,212,'Indexer projection delay',32,C.text,820)}${pill(64,238,'Monitoring',C.amber,112)}${txt(190,257,'Started 13:42 UTC · affected: indexed claim and dispute views',11,C.muted,500)}`;
  b += `${rect(64,304,932,530,C.surface,18,C.border)}${txt(92,346,'INCIDENT TIMELINE',10,C.muted,800)}`;
  const events=[['13:42','Investigating','Projection lag exceeded the public freshness threshold.',C.red],['13:51','Identified','RPC timeouts delayed finalized-event projection.',C.amber],['14:03','Mitigating','Fallback RPC enabled; backlog draining under idempotent replay.',C.blue],['14:12','Monitoring','Lag reduced from 126 to 47 blocks; no canonical data loss observed.',C.green]];
  events.forEach(([time,title,meta,color],i)=>{const y=386+i*92;b+=`${dot(104,y,color)}${line(104,y+8,104,y+82,i===events.length-1?C.border:color,2)}${txt(132,y+4,time,10,C.muted,700)}${txt(206,y+4,title,12,C.text,760)}${txt(206,y+29,meta,10,C.muted,500)}`});
  b += `${note(92,764,876,'Current impact','Indexed screens may be stale. Use canonical receipts before repeating any transaction.',C.amber)}`;
  b += `${rect(1024,304,512,530,C.surface,18,C.border)}${txt(1052,346,'Incident facts',14,C.text,760)}${kv(1052,390,456,'Public reference','INC-204')}${kv(1052,438,456,'Affected release','TB-V2')}${kv(1052,486,456,'Canonical writes','Available',C.green)}${kv(1052,534,456,'Indexed reads','Delayed',C.amber)}${kv(1052,582,456,'Evidence gateway','Unaffected',C.green)}${note(1052,626,456,'Report boundary','Internal investigation notes and protected diagnostics are not published.',C.blue,94)}${button(1052,752,'Incident history','secondary',174)}${button(1240,752,'Subscribe unavailable','disabled',238)}`;
  b += `${txt(64,882,'Historical availability is evidence, not an uptime guarantee.',10,C.muted,600)}`;
  write('05-incident-detail-history.svg',frame('Incident detail and history','Status','Incident detail',b));
}

// 06 — contact and support entry
{
  let b = `${txt(64,176,'Contact TruthBounty',34,C.text,830)}${txt(64,210,'Choose the channel that matches your request. Never send secrets or protected evidence.',12,C.muted,500)}`;
  const routes=[
    ['Technical support',['Wallet, transaction, indexing','and evidence-access problems'],'Open support',C.cyan],
    ['General questions',['Product, protocol and','documentation guidance'],'Contact route',C.blue],
    ['Contributors',['Repository, issue and','implementation enquiries'],'GitHub',C.violet],
    ['Partnerships',['Ecosystem and integration','enquiries'],'Channel pending',C.gold],
    ['Privacy or legal',['Data request and legal','correspondence'],'Address pending',C.amber],
    ['Security report',['Vulnerability disclosure','through a protected channel'],'Open security',C.red]
  ];
  routes.forEach(([h,rows,tag,color],i)=>b+=card(64+(i%3)*506,270+Math.floor(i/3)*236,474,204,h,rows,tag,color));
  b += `${note(64,754,1472,'Response commitment pending','No public support address, legal address, security bounty, or fixed response SLA is approved in the current release.',C.amber,92)}${note(64,864,1472,'Never share','Seed phrases, private keys, signatures, credentials, private rationale, or non-public evidence.',C.red)}`;
  write('06-contact-support-entry.svg',frame('Contact and support entry','Docs','Contact',b));
}

// 07 — support request form
{
  let b = `${txt(64,176,'Request technical support',34,C.text,830)}${txt(64,210,'Provide non-secret references that let maintainers reproduce the interface problem.',12,C.muted,500)}`;
  b += `${rect(64,254,944,600,C.surface,18,C.border)}${txt(92,296,'Request details',15,C.text,780)}`;
  const fields=[['Category','Transaction or indexing'],['Contact','name@example.com'],['Public reference','Transaction hash, claim ID or dispute ID'],['Release','TB-V2 · Optimism Sepolia']];
  fields.forEach(([label,val],i)=>{const x=92+(i%2)*444,y=330+Math.floor(i/2)*92;b+=`${txt(x,y,label,10,C.muted,700)}${rect(x,y+14,416,48,C.soft,10,C.border)}${txt(x+16,y+44,val,11,i===1?C.muted:C.text,550)}`});
  b += `${txt(92,528,'What happened?',10,C.muted,700)}${rect(92,544,860,118,C.soft,10,C.border)}${multi(110,574,['Describe the observed state, expected state and safe reproduction steps.','Do not paste protected evidence, wallet secrets or authentication tokens.'],10,C.muted,500,24)}${rect(92,684,860,62,`${C.amber}0E`,10,`${C.amber}55`)}${txt(112,710,'□ I removed secrets and understand this request cannot change protocol outcomes.',10,C.text,650)}${txt(92,776,'Submission endpoint',10,C.muted,700)}${pill(222,762,'Unavailable until approved',C.amber,190)}${button(760,790,'Submit unavailable','disabled',192)}`;
  b += `${rect(1036,254,500,600,C.surface,18,C.border)}${txt(1064,296,'Before submitting',15,C.text,780)}${['Check the public status page','Confirm wallet, chain and release','Use the canonical transaction hash','Remove query tokens and credentials','Keep private evidence private'].map((v,i)=>`${check(1074,342+i*50,C.green)}${txt(1100,347+i*50,v,10,C.muted,550)}`).join('')}${note(1064,610,444,'Privacy notice','Support data requires an approved collection endpoint, retention policy and processor list.',C.blue,100)}${note(1064,730,444,'Authority boundary','Support can diagnose; it cannot reverse, edit or settle protocol state.',C.red,100)}`;
  write('07-support-request-form.svg',frame('Support request form','Docs','Support request',b));
}

// 08 — security and vulnerability reporting
{
  let b = `${txt(64,176,'Report a security vulnerability',34,C.text,830)}${txt(64,210,'Use responsible disclosure. Do not publish exploitable details or test against user assets.',12,C.muted,500)}`;
  b += `${rect(64,254,710,586,C.surface,18,C.border)}${txt(92,296,'Accepted report scope',15,C.text,780)}${['Smart contracts and upgrade controls','API authorization and data integrity','Frontend wallet and transaction safety','Release artifacts and manifest validation','Evidence privacy and secret exposure'].map((v,i)=>`${check(102,340+i*48,C.green)}${txt(128,345+i*48,v,11,C.muted,550)}`).join('')}${txt(92,606,'Include',12,C.text,740)}${multi(92,638,['Affected release and component','Reproduction steps and impact','Non-destructive proof of concept','Suggested mitigation if known'],10,C.muted,500,28)}${pill(92,770,'Protected channel pending',C.amber,194)}`;
  b += `${rect(802,254,734,586,C.surface,18,C.border)}${txt(830,296,'Safety rules',15,C.text,780)}${note(830,326,678,'Do not test','User funds, production data, denial of service, social engineering or credential access.',C.red,92)}${note(830,436,678,'Do not disclose','Seed phrases, private keys, tokens, private evidence, or live exploit details.',C.red,92)}${txt(830,574,'Current programme status',12,C.text,740)}${kv(830,610,678,'Security contact','Not formally published',C.amber)}${kv(830,658,678,'Bug bounty','Not authorized',C.amber)}${kv(830,706,678,'Response SLA','Not authorized',C.amber)}${button(830,770,'Submission unavailable','disabled',216)}`;
  b += `${txt(64,884,'Until a protected channel is approved, the UI must not solicit sensitive vulnerability details.',10,C.muted,600)}`;
  write('08-security-reporting.svg',frame('Security and vulnerability reporting','Docs','Security',b));
}

// 09 — privacy notice
{
  let b = `${txt(64,166,'Privacy notice',34,C.text,830)}${pill(64,194,'Review copy · not legal approval',C.amber,220)}${txt(300,213,'Version DRAFT-1 · effective date and operator identity pending',11,C.muted,500)}`;
  b += `${rect(64,258,254,580,C.soft,14,C.border)}${txt(88,296,'CONTENTS',10,C.muted,800)}${multi(88,340,['Scope and operator','Blockchain data','Support and session data','Analytics and telemetry','Evidence and IPFS','Retention and requests','Processors and transfers','Version history'],11,C.muted,550,49)}`;
  b += `${rect(346,258,834,580,C.surface,18,C.border)}${txt(376,304,'Data boundaries',18,C.text,800)}${note(376,336,776,'Public and immutable','Wallet addresses, transactions, contract events and public evidence references may remain on-chain.',C.blue,86)}${note(376,438,776,'Off-chain and controllable','Session, support, telemetry and projection data require purpose, retention and processor authority.',C.cyan,86)}${txt(376,566,'Observed implementation',13,C.text,740)}${multi(376,600,['• Optional analytics defaults off and records a local preference only.','• No canonical analytics network sink is present in the current frontend.','• Evidence URLs and wallet identifiers are subject to redaction controls.','• API audit retention defaults exist, but they are configuration—not approved policy.'],10,C.muted,500,30)}${note(376,748,776,'User requests','Contact channel, jurisdiction and verified operator identity must be approved before publication.',C.amber,70)}`;
  b += `${rect(1208,258,328,580,C.surface,18,C.border)}${txt(1234,304,'Required review',14,C.text,760)}${['Legal operator identity','Governing jurisdiction','Retention schedule','Processor inventory','Request contact','Age restrictions','International transfers'].map((v,i)=>`${dot(1244,346+i*48,C.amber)}${txt(1264,351+i*48,v,10,C.muted,550)}`).join('')}${pill(1234,714,'Publication blocked',C.red,150)}${button(1234,762,'Version history','secondary',164)}`;
  write('09-privacy-notice.svg',frame('Privacy notice','Docs','Legal',b));
}

// 10 — terms of use
{
  let b = `${txt(64,166,'Terms of use',34,C.text,830)}${pill(64,194,'Review copy · not legal approval',C.amber,220)}${txt(300,213,'Version DRAFT-1 · effective date and governing law pending',11,C.muted,500)}`;
  b += `${rect(64,258,254,580,C.soft,14,C.border)}${txt(88,296,'CONTENTS',10,C.muted,800)}${multi(88,340,['Eligibility','Wallet responsibility','Acceptable use','Claims and evidence','Staking and rewards','Disputes and outcomes','Third-party services','Availability and liability'],11,C.muted,550,49)}`;
  b += `${rect(346,258,834,580,C.surface,18,C.border)}${txt(376,304,'Participation boundaries',18,C.text,800)}${note(376,336,776,'Wallet responsibility','Users control wallet accounts, signing decisions, gas and recovery. TruthBounty cannot restore keys.',C.cyan,86)}${note(376,438,776,'Protocol outcomes','Claims, verification and disputes follow contract rules; provisional results are not final truth.',C.blue,86)}${note(376,540,776,'Economic risk','Stake may be locked or slashed; rewards are uncertain; testnet assets have no monetary value.',C.gold,86)}${note(376,642,776,'External dependencies','Wallets, RPCs, IPFS gateways and explorers remain separately operated third-party services.',C.violet,86)}${txt(376,770,'No acceptance control is enabled until the approved legal version is published.',10,C.muted,650)}`;
  b += `${rect(1208,258,328,580,C.surface,18,C.border)}${txt(1234,304,'Required review',14,C.text,760)}${['Operator and eligibility','Prohibited conduct','Liability limitations','Governing law','Dispute mechanism','Suspension rules','Version acceptance'].map((v,i)=>`${dot(1244,346+i*48,C.amber)}${txt(1264,351+i*48,v,10,C.muted,550)}`).join('')}${pill(1234,714,'Publication blocked',C.red,150)}${button(1234,762,'Risk disclosures','secondary',164)}`;
  write('10-terms-of-use.svg',frame('Terms of use','Docs','Legal',b));
}

// 11 — protocol risk disclosures
{
  let b = `${txt(64,176,'Protocol and participation risks',34,C.text,830)}${txt(64,210,'Risk is explained before authorization and remains available as a durable public reference.',12,C.muted,500)}`;
  const risks=[
    ['Smart contracts',['Bugs, upgrades and incompatible','release artifacts can cause loss.'],'Technical',C.red],
    ['Stake and rewards',['Stake can be locked or slashed;','rewards are not guaranteed.'],'Economic',C.gold],
    ['Finality and reorgs',['Confirmation can be replaced;','finality and indexing differ.'],'Chain',C.blue],
    ['Evidence access',['Public links and IPFS gateways','can disappear or expose metadata.'],'Evidence',C.cyan],
    ['Dependencies',['Wallet, RPC, API and indexer','availability is not guaranteed.'],'Infrastructure',C.violet],
    ['Governance',['Timelock, upgrades and emergency','controls carry coordination risk.'],'Governance',C.amber]
  ];
  risks.forEach(([h,rows,tag,color],i)=>b+=card(64+(i%3)*506,266+Math.floor(i/3)*224,474,192,h,rows,tag,color));
  b += `${note(64,754,1472,'Outcome language','A provisional confidence score or dispute result must not be presented as established truth.',C.red,90)}${rect(64,862,1472,44,C.soft,10,C.border)}${txt(88,889,'Testnet notice: Optimism Sepolia assets and rewards have no monetary value.',11,C.gold,700)}`;
  write('11-protocol-risk-disclosures.svg',frame('Protocol-risk disclosures','Docs','Disclosures',b));
}

// 12 — legal document version and consent
{
  let b = `${txt(64,176,'Legal documents and consent',34,C.text,830)}${txt(64,210,'Track published versions without confusing wallet signatures, sessions or legal acceptance.',12,C.muted,500)}`;
  b += `${rect(64,254,930,584,C.surface,18,C.border)}${txt(92,296,'DOCUMENT VERSIONS',10,C.muted,800)}${listRow(92,322,876,'Privacy notice · DRAFT-1','Effective date and operator identity unresolved','Review only',C.amber)}${listRow(92,406,876,'Terms of use · DRAFT-1','Governing law and acceptance mechanism unresolved','Review only',C.amber)}${listRow(92,490,876,'Risk disclosures · v1.0','Testnet-specific structural content','Proposed',C.blue)}${listRow(92,574,876,'Security policy · DRAFT-1','Protected reporting channel unresolved','Unavailable',C.red)}${note(92,680,876,'Version rule','Material changes show a summary, effective date and previous version before renewed consent.',C.cyan,88)}${txt(92,800,'No production acceptance is currently required or recorded.',10,C.muted,650)}`;
  b += `${rect(1022,254,514,584,C.surface,18,C.border)}${txt(1050,296,'Consent state preview',15,C.text,780)}${pill(1050,326,'Unavailable',C.red,112)}${multi(1050,382,['Acceptance controls remain disabled until:','• an approved legal version exists;','• the operator and jurisdiction are verified;','• retention and processor notices are complete;','• the recording mechanism is specified;','• decline and renewed-consent behavior is approved.'],10,C.muted,500,32)}${note(1050,608,458,'Wallet-signature boundary','A wallet signature is not legal consent unless intentionally specified and reviewed.',C.red,100)}${button(1050,752,'Review document','secondary',174)}${button(1238,752,'Accept unavailable','disabled',244)}`;
  write('12-legal-version-consent.svg',frame('Legal document version and consent','Docs','Legal versions',b));
}

// 13 — not found, unavailable and maintenance
{
  let b = `${txt(64,176,'System support states',34,C.text,830)}${txt(64,210,'Every failure preserves context, explains the boundary and offers only safe recovery paths.',12,C.muted,500)}`;
  const states=[
    ['404','Resource not found',['The identifier is unknown or no longer','available in this release.'],'Return to exploration',C.cyan],
    ['410','Release retired',['This release is unsupported. No wallet','request or automatic migration starts.'],'Open release guide',C.amber],
    ['503','Service unavailable',['Public status reports a dependency','failure. Mutations fail closed.'],'View service status',C.red],
    ['⏱','Planned maintenance',['Maintenance window 02:00–03:00 UTC.','Canonical contracts may remain available.'],'Read maintenance note',C.blue],
    ['↻','Stale indexed view',['Data freshness is below threshold.','Verify canonical receipts first.'],'Open transaction center',C.violet],
    ['⊘','Action denied',['Capability, chain or release validation','failed. Context is preserved.'],'Review requirements',C.red]
  ];
  states.forEach(([symbol,h,rows,action,color],i)=>{
    const x=64+(i%3)*506,y=260+Math.floor(i/3)*244;
    b+=`${rect(x,y,474,214,C.surface,16,C.border)}${icon(x+20,y+20,symbol,color)}${txt(x+78,y+40,h,14,C.text,760)}${multi(x+20,y+92,rows,10,C.muted,500,22)}${button(x+20,y+152,action,'secondary',210)}`;
  });
  b += `${note(64,780,1472,'Recovery rule','No error state may auto-submit, request a signature, switch networks, discard a draft or hide canonical identifiers.',C.red,88)}`;
  write('13-system-support-states.svg',frame('Not found, unavailable and maintenance states','Docs','System states',b));
}

console.log('Generated 13 TruthBounty Batch 6 SVG boards.');
