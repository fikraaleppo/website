
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
