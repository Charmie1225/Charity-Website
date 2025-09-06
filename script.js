
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  
  
  function copyFrom(selector){
    const el = document.querySelector(selector);
    if (!el) return;
    navigator.clipboard.writeText(el.value).then(()=>{
      const btn = document.querySelector(`[data-copy="${selector}"]`);
      if (btn){
        const old = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(()=> btn.textContent = old, 1200);
      }
    });
  }
  document.querySelectorAll('[data-copy]').forEach(b=>{
    b.addEventListener('click', ()=> copyFrom(b.getAttribute('data-copy')));
  });
  
  
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  toggle?.addEventListener('click', ()=>{
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });
  