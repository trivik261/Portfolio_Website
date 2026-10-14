const canvas=document.querySelector('#aquarium'),ctx=canvas.getContext('2d'),pause=document.querySelector('#pause');
let mode=1,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,time=0,last=0;
function render(){ctx.save();ctx.scale(2,2);window.projectScenes.aquarium(ctx,mode,Math.floor(time/80));ctx.restore();}
function setMode(value){mode=value;document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.mode)===mode)));render();}
function setPaused(value){paused=value;pause.textContent=paused?'Resume':'Pause';pause.setAttribute('aria-pressed',String(paused));}
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(Number(b.dataset.mode))));
pause.addEventListener('click',()=>setPaused(!paused));document.querySelector('#reset').addEventListener('click',()=>{time=0;render();});
document.addEventListener('keydown',event=>{if(event.target.matches('button,a,input,textarea,select'))return;if(['1','2','3'].includes(event.key))setMode(Number(event.key));if(event.code==='Space'){event.preventDefault();setPaused(!paused);}});
document.addEventListener('visibilitychange',()=>{last=0;});
function frame(now){if(last&&!paused&&!document.hidden)time+=Math.min(now-last,100);last=now;render();requestAnimationFrame(frame);}
setPaused(paused);requestAnimationFrame(frame);
