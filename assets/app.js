const themeButton = document.querySelector('#theme');
function setTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
  document.querySelector('meta[name="theme-color"]').content = light ? '#f6f6ef' : '#101715';
}
try { setTheme(localStorage.getItem('portfolio-theme') === 'light'); } catch {}
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  setTheme(light);
  try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch {}
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Each tile owns its workflow, playback controls, and visibility-aware timer.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const retinalSteps = [
  ['fundus.jpg', 'Fundus image'], ['clahe.png', 'CLAHE-enhanced green channel'],
  ['vessels.png', 'Reference vessel mask'], ['arteries.png', 'Reference arteries'],
  ['veins.png', 'Reference veins'], ['combined.png', 'Combined artery–vein reference labels']
];
retinalSteps.forEach(([src]) => { const image = new Image(); image.src = `assets/${src}`; });
const measurement = { width: 4.5, from: [186.51225,179.88147], to: [182.40130,181.71179], center: [184,181] };
const complex = {
  add:(a,b)=>[a[0]+b[0],a[1]+b[1]], sub:(a,b)=>[a[0]-b[0],a[1]-b[1]],
  mul:(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],
  div:(a,b)=>{const d=b[0]*b[0]+b[1]*b[1];return [(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d];}
};
function rootFrames() {
  let roots=Array.from({length:4},(_,i)=>{const angle=.25+i*Math.PI/2;return [1.35*Math.cos(angle),1.35*Math.sin(angle)];});
  const frames=[roots];
  for(let t=0;t<12;t++) {
    roots=roots.map((z,i)=>{let product=[1,0];roots.forEach((r,j)=>{if(i!==j)product=complex.mul(product,complex.sub(z,r));});const squared=complex.mul(z,z);const polynomial=complex.sub(complex.mul(squared,squared),[1,0]);return complex.sub(z,complex.div(polynomial,product));});
    frames.push(roots);
  }
  return frames;
}
const rootsHistory=rootFrames();
const wall=5, goal=11, cols=4, rows=3;
function nextState(s,a) {const x=s%cols,y=Math.floor(s/cols),d=[[1,0],[0,1],[-1,0],[0,-1]][a];const nx=x+d[0],ny=y+d[1],n=ny*cols+nx;return nx<0||nx>=cols||ny<0||ny>=rows||n===wall?s:n;}
const values=Array(12).fill(0);
for(let k=0;k<50;k++){const old=[...values];values.forEach((_,s)=>{if(s!==wall&&s!==goal)values[s]=Math.max(...[0,1,2,3].map(a=>{const n=nextState(s,a);return n===goal?1:-.04+.9*old[n];}));});}
const policy=values.map((_,s)=>[0,1,2,3].reduce((best,a)=>values[nextState(s,a)]>values[nextState(s,best)]?a:best,0));
// Entering the terminal goal has reward 1, so explicitly prefer it.
policy.forEach((_,s)=>{for(let a=0;a<4;a++)if(nextState(s,a)===goal)policy[s]=a;});
const route=[0];for(let i=0;i<15&&route.at(-1)!==goal;i++)route.push(nextState(route.at(-1),policy[route.at(-1)]));
function drawGrid(ctx,stage,tick) {
  ctx.clearRect(0,0,500,256);const w=51,gap=6,ox=138,oy=35;
  for(let s=0;s<12;s++) {const x=ox+s%cols*(w+gap),y=oy+Math.floor(s/cols)*(w+gap);ctx.fillStyle=s===wall?'#101715':s===goal?'#bdf1a6':stage>0?`hsl(130 25% ${19+values[s]*25}%)`:'#233a2b';ctx.fillRect(x,y,w,w);ctx.strokeStyle='#47604e';ctx.strokeRect(x,y,w,w);ctx.fillStyle=s===goal?'#15251e':'#dbe8dd';ctx.textAlign='center';ctx.font='20px system-ui';if(s===goal)ctx.fillText('★',x+w/2,y+34);else if(s!==wall&&stage===1){ctx.font='12px monospace';ctx.fillText(values[s].toFixed(2),x+w/2,y+31);}else if(s!==wall&&stage>=2)ctx.fillText(['→','↓','←','↑'][policy[s]],x+w/2,y+33);}
  if(stage===3){const s=route[Math.min(tick,route.length-1)];ctx.beginPath();ctx.arc(ox+s%cols*(w+gap)+w/2,oy+Math.floor(s/cols)*(w+gap)+w/2,13,0,2*Math.PI);ctx.fillStyle='#f3cf91';ctx.fill();ctx.strokeStyle='#14221a';ctx.stroke();}
  ctx.font='10px monospace';ctx.fillStyle='#a4bcaa';ctx.fillText(['12 states · 4 actions · terminal goal','Value iteration · γ = 0.90 · step reward −0.04','Greedy policy from computed state values','Following the policy from start to goal'][stage],250,234);
}
function drawRoots(ctx,stage,tick) {
  ctx.clearRect(0,0,500,256);const ox=250,oy=125,scale=62;ctx.strokeStyle='#385242';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(125,oy);ctx.lineTo(375,oy);ctx.moveTo(ox,28);ctx.lineTo(ox,220);ctx.stroke();ctx.beginPath();ctx.arc(ox,oy,scale,0,Math.PI*2);ctx.setLineDash([3,5]);ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='#a4bcaa';ctx.font='10px monospace';ctx.fillText('Re',378,129);ctx.fillText('Im',254,34);
  if(stage===0){ctx.fillStyle='#edf0e8';ctx.font='28px Georgia';ctx.textAlign='center';ctx.fillText('z⁴ − 1 = 0',250,119);ctx.font='11px monospace';ctx.fillStyle='#a4bcaa';ctx.fillText('Find four complex roots',250,153);return;}
  const frame=stage===1?0:stage===2?Math.min(tick,8):12;
  const colors=['#bdf1a6','#9acbd9','#f3cf91','#e79d9d'];
  if(stage>=2)for(let i=0;i<4;i++){ctx.strokeStyle=colors[i];ctx.globalAlpha=.45;ctx.beginPath();rootsHistory.slice(0,frame+1).forEach((r,k)=>{const x=ox+r[i][0]*scale,y=oy-r[i][1]*scale;if(k===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.stroke();ctx.globalAlpha=1;}
  rootsHistory[frame].forEach((z,i)=>{ctx.fillStyle=colors[i];ctx.beginPath();ctx.arc(ox+z[0]*scale,oy-z[1]*scale,5,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#a4bcaa';ctx.textAlign='center';ctx.font='10px monospace';ctx.fillText(stage===3?'Roots: +1, −1, +i, −i':stage===2?`Simultaneous updates · iteration ${frame}`:'Four initial complex estimates',250,237);
}
function drawMeasurement(workflow,stage) {
  workflow.querySelector('.measurement-mark')?.remove();
  if(stage<2)return;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('measurement-mark');svg.setAttribute('viewBox','0 0 500 256');
  // Match the centered 248 × 256 image displayed at height 220.
  const sc=220/256,ox=(500-248*sc)/2,oy=18;
  const [x,y]=measurement.center;const cx=ox+x*sc,cy=oy+y*sc;
  svg.innerHTML=`<circle cx="${cx}" cy="${cy}" r="13" fill="none" stroke="#f3cf91" stroke-width="1.5"/><path d="M${cx-20} ${cy}h40 M${cx} ${cy-20}v40" stroke="#f3cf91" opacity=".5"/>`;
  if(stage===3){const [a,b]=[measurement.from,measurement.to];svg.innerHTML+=`<path d="M${ox+a[0]*sc} ${oy+a[1]*sc}L${ox+b[0]*sc} ${oy+b[1]*sc}" stroke="#fff" stroke-width="2"/><path d="M${cx+14} ${cy-8}L${cx+45} ${cy-38}" stroke="#f3cf91"/><text x="${cx+47}" y="${cy-38}" fill="#f3cf91" font-size="12" font-family="monospace">${measurement.width.toFixed(1)} px</text>`;}
  workflow.querySelector('.workflow-screen').append(svg);
}
document.querySelectorAll('[data-workflow]').forEach(workflow=>{
  const kind=workflow.dataset.workflow,buttons=[...workflow.querySelectorAll('[data-step]')],play=workflow.querySelector('.play-toggle'),image=workflow.querySelector('.workflow-image'),canvas=workflow.querySelector('canvas'),ctx=canvas?.getContext('2d');
  let stage=0,tick=0,playing=!reducedMotion.matches,visible=false,previous=0,imageVersion=0;
  function render(){
    buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===stage)));
    workflow.querySelector('.stage-title').textContent=buttons[stage].textContent;
    workflow.querySelector('.step-counter').textContent=`${String(stage+1).padStart(2,'0')} / ${String(buttons.length).padStart(2,'0')}`;
    if(image){const index=kind==='segmentation'?stage:stage===0?0:2;const [src,alt]=retinalSteps[index];image.src=`assets/${src}`;image.alt=alt;if(kind==='measurement')drawMeasurement(workflow,stage);}
    if(ctx)(kind==='rl'?drawGrid:drawRoots)(ctx,stage,tick);
  }
  function playback(){workflow.classList.toggle('paused',!playing);play.textContent=playing?'Ⅱ':'▶';play.setAttribute('aria-label',`${playing?'Pause':'Play'} ${kind} animation`);}
  buttons.forEach((b,i)=>b.addEventListener('click',()=>{stage=i;tick=0;previous=performance.now();playing=false;imageVersion++;image?.classList.remove('changing');render();playback();}));
  play.addEventListener('click',()=>{playing=!playing;previous=performance.now();playback();});
  function motionChanged(){playing=!reducedMotion.matches;previous=performance.now();playback();}
  reducedMotion.addEventListener('change',motionChanged);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;previous=performance.now();},{threshold:.15}).observe(workflow);
  let lastTick=0;
  function frame(time){
    if(playing&&visible&&!document.hidden){if(!previous)previous=time;if(time-lastTick>280){tick++;lastTick=time;if(ctx)(kind==='rl'?drawGrid:drawRoots)(ctx,stage,tick);}
      if(time-previous>=2400){stage=(stage+1)%buttons.length;tick=0;previous=time;if(image&&!reducedMotion.matches){const version=++imageVersion;image.classList.add('changing');setTimeout(()=>{if(version===imageVersion){render();image.classList.remove('changing');}},180);}else render();}}
    else previous=time;
    requestAnimationFrame(frame);
  }
  document.addEventListener('visibilitychange',()=>{previous=performance.now();});
  render();playback();requestAnimationFrame(frame);
});
