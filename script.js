window.__PROJECTS__ = [{"num": "01", "name": "NEXUS", "cat": "Generative AI Automation Platform · UX/UI Case Study", "year": "2026", "role": "UX/UI Designer", "desc": "A Unified Generative AI Platform designed to streamline content creation, campaign management, and workflow automation within a single ecosystem.", "overview": "NEXUS unifies fragmented AI tools into one intelligent workspace where teams create content, launch campaigns, and orchestrate automated workflows without switching apps.", "problem": "Marketing and content teams juggle 6–10 disconnected AI tools, losing time to context switching, inconsistent brand output, and manual hand-offs between generation, review, and publishing.", "solution": "A modular dashboard with a Brand Hub, drag-and-drop workflow builder, and multi-model content generation (text, image, video) — all wired into a shared content library and analytics layer.", "tags": ["AI Platform", "SaaS", "Dashboard", "Workflow Automation", "UX Research"], "tools": ["Figma", "Photoshop", "Illustrator", "ChatGPT"], "image": "assets/nexus.jpg", "behance": "https://www.behance.net/gallery/247350391/NEXUS-Automation-Gen-AI-Platform-UXUI-Case-Study"}, {"num": "02", "name": "Assassin's Creed", "cat": "Gamified Interactive Website · UX/UI Case Study", "year": "2026", "role": "UX/UI Designer", "desc": "A cinematic, scroll-based gaming website inspired by the Assassin's Creed universe.", "overview": "A concept marketing site that turns the Assassin's Creed lore into an immersive, scroll-driven story — introducing characters, eras, and factions through cinematic transitions.", "problem": "Traditional gaming landing pages feel like static press kits. Fans want atmosphere, discovery, and lore — not a spec sheet.", "solution": "A dark, cinematic layout with parallax layers, character reveal transitions, and a gamified navigation system that rewards exploration with fragments of story.", "tags": ["Gaming UI", "Web Design", "Gamification", "Interaction Design", "Cinematic"], "tools": ["Figma", "Photoshop", "Illustrator"], "image": "assets/assassins-creed.jpg", "behance": "https://www.behance.net/gallery/249042107/Gaming-Website"}, {"num": "03", "name": "LUMI", "cat": "AR Powered Skincare Analysis App · UX/UI Case Study", "year": "2026", "role": "UX/UI Designer", "desc": "An AR-powered skincare mobile app that analyses users' skin and delivers personalised recommendations.", "overview": "LUMI uses the phone camera and augmented reality to scan the user's skin, map concerns, and translate them into a personalised routine and curated product shelf.", "problem": "Shopping for skincare online is overwhelming and generic — users can't tell what actually fits their skin without expensive consultations or endless trial-and-error.", "solution": "An AR scanner with real-time skin mapping, a guided onboarding flow, and a personalised dashboard that evolves as the user tracks progress and results.", "tags": ["Augmented Reality", "Mobile App", "E-Commerce", "UX Research", "Personalisation"], "tools": ["Figma", "Photoshop", "Illustrator"], "image": "assets/lumi.jpg", "behance": "https://www.behance.net/gallery/250290639/LUMI-AR-Powered-Skincare-Analysis"}, {"num": "04", "name": "COSMOS", "cat": "Apple Vision Pro · Spatial Computing · UX/UI Case Study", "year": "2026", "role": "UX/UI Designer", "desc": "An immersive Apple Vision Pro concept that turns space exploration into a cinematic mixed-reality experience.", "overview": "COSMOS lets users journey through planets, nebulae, galaxies and black holes at human scale — designed natively for the spatial canvas of Apple Vision Pro.", "problem": "Learning about the universe on a flat screen is passive. Existing space apps rely on scrollable text and 2D imagery that fail to convey scale, depth or wonder.", "solution": "A gaze-and-pinch spatial interface with floating information panels, scale-aware travel, and cinematic narration — turning knowledge into an experience you stand inside.", "tags": ["Spatial UI", "Vision Pro", "VR", "Interaction Design", "Concept"], "tools": ["Figma", "Photoshop", "Illustrator"], "image": "assets/cosmos.jpg", "behance": "https://www.behance.net/gallery/252286293/COSMOS-Interactive-Universe-Explorer-for-Vision-Pro"}, {"num": "05", "name": "Parallax Gaming Website", "cat": "Cinematic Parallax Website · Interactive Prototype", "year": "2026", "role": "UX/UI Designer", "desc": "A cinematic parallax gaming website — Treasure Verse — journeying through mysterious islands, legendary pirates and hidden treasure.", "overview": "", "problem": "", "solution": "", "tags": ["Parallax", "Gaming", "Cinematic", "Web Design", "Prototype"], "tools": ["Figma", "Photoshop"], "image": "assets/treasure-verse.jpg", "video": "assets/treasure-verse.mp4", "behance": "", "externalUrl": "https://www.figma.com/proto/lmtJKVFpz8TTiSsaTG3P6x/Untitled?node-id=83-56&starting-point-node-id=83%3A56&t=vCJ1z0fNERARmRoX-1"}];
/* Portfolio interactions */
(function () {
  const isTouch = matchMedia("(hover: none)").matches;

  // --- Preloader ---
  const pre = document.querySelector(".preloader");
  const percentEl = document.querySelector(".preloader__percent");
  const bar = document.querySelector(".preloader__bar");
  if (pre) {
    let p = 0;
    document.body.classList.add("no-scroll");
    const iv = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(finish, 500); }
      if (percentEl) percentEl.textContent = String(Math.floor(p)).padStart(3, "0") + "%";
      if (bar) bar.style.width = p + "%";
    }, 120);
    function finish() {
      pre.classList.add("done");
      document.body.classList.remove("no-scroll");
    }
  }

  // --- Custom cursor ---
  const cursor = document.querySelector(".cursor");
  const cursorLabel = document.querySelector(".cursor__label");
  if (cursor && !isTouch) {
    let mx = 0, my = 0, cx = 0, cy = 0, lx = 0, ly = 0;
    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
    (function tick() {
      cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2;
      lx += (mx - lx) * 0.15; ly += (my - ly) * 0.15;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      if (cursorLabel) cursorLabel.style.transform =
        `translate(${lx}px, ${ly}px) translate(-50%, -180%) scale(${cursor.classList.contains("labeled") ? 1 : 0})`;
      requestAnimationFrame(tick);
    })();
    document.querySelectorAll("a, button, .project").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        const label = el.getAttribute("data-cursor");
        if (label && cursorLabel) {
          cursorLabel.textContent = label;
          cursor.classList.add("labeled");
        }
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover", "labeled");
      });
    });
  }

  // --- Hero rotating text ---
  const rot = document.querySelector(".hero__title .rotate");
  if (rot) {
    const words = ["UI/UX Designer", "Product Designer"];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % words.length;
      rot.style.opacity = "0";
      rot.style.transform = "translateY(-10px)";
      setTimeout(() => {
        rot.textContent = words[i];
        rot.style.transition = "opacity .5s, transform .5s";
        rot.style.opacity = "1";
        rot.style.transform = "none";
      }, 350);
    }, 2600);
  }

  // --- Hero mouse glow ---
  const glow = document.querySelector(".hero__glow");
  const hero = document.querySelector(".hero");
  if (glow && hero && !isTouch) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      glow.style.transform = `translate(${e.clientX - r.left - 300}px, ${e.clientY - r.top - 300}px)`;
    });
  }

  // --- Reveal on scroll ---
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // --- Active nav highlight ---
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav__links a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const id = en.target.id;
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => spy.observe(s));

  // --- Mobile menu ---
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("open"))
    );
  }

  // --- Back to top ---
  const top = document.querySelector(".footer__top");
  if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // --- Magnetic buttons ---
  if (!isTouch) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }
})();

/* --- theme toggle --- */
(function(){
  var root=document.documentElement, btn=document.querySelector('.theme-toggle');
  try{var t=localStorage.getItem('theme'); if(t) root.setAttribute('data-theme',t);}catch(e){}
  if(!root.getAttribute('data-theme')) root.setAttribute('data-theme','dark');
  function sync(){var d=root.getAttribute('data-theme')!=='light';
    var i=document.querySelector('.theme-toggle__icon'), l=document.querySelector('.theme-toggle__label');
    if(i) i.textContent=d?'\u25D0':'\u25D1'; if(l) l.textContent=d?'Dark':'Light';}
  sync();
  if(btn) btn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='light'?'dark':'light';
    root.setAttribute('data-theme',next); try{localStorage.setItem('theme',next);}catch(e){} sync();
  });
})();

/* --- hover video --- */
document.querySelectorAll('.project').forEach(function(card){
  var v=card.querySelector('video'); if(!v) return;
  card.addEventListener('mouseenter',function(){v.currentTime=0;var pr=v.play();if(pr&&pr.catch)pr.catch(function(){});card.classList.add('has-video');});
  card.addEventListener('mouseleave',function(){v.pause();card.classList.remove('has-video');});
});

/* --- project modal --- */
(function(){
  var root=document.createElement('div'); document.body.appendChild(root);
  function esc(s){return String(s||'').replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function close(){root.innerHTML='';document.body.classList.remove('no-scroll');}
  function open(p){
    document.body.classList.add('no-scroll');
    var sec='';
    if(p.overview) sec+='<div class="pm__section"><h4>Overview</h4><p>'+esc(p.overview)+'</p></div>';
    if(p.problem||p.solution) sec+='<div class="pm__grid">'+
      (p.problem?'<div class="pm__section"><h4>The Problem</h4><p>'+esc(p.problem)+'</p></div>':'')+
      (p.solution?'<div class="pm__section"><h4>The Solution</h4><p>'+esc(p.solution)+'</p></div>':'')+'</div>';
    var cta=p.behance?'<a href="'+p.behance+'" target="_blank" rel="noreferrer" class="btn btn--primary">View Full Case Study on Behance <span class="arrow">\u2197</span></a>':'';
    root.innerHTML='<div class="pm" role="dialog" aria-modal="true"><div class="pm__panel">'+
      '<button class="pm__close" aria-label="Close">\u00d7</button>'+
      '<div class="pm__hero"><img src="'+p.image+'" alt="'+esc(p.name)+'"></div>'+
      '<div class="pm__body">'+
      '<div class="pm__meta"><span>'+p.num+' / 05</span><span>'+p.year+'</span><span>'+esc(p.role)+'</span></div>'+
      '<h3 class="pm__title">'+esc(p.name)+'</h3><div class="pm__cat">'+esc(p.cat)+'</div>'+sec+
      '<div class="pm__section"><h4>Tags</h4><div class="project__tags">'+p.tags.map(function(t){return '<span class="project__tag">'+esc(t)+'</span>';}).join('')+'</div></div>'+
      '<div class="pm__section"><h4>Tools Used</h4><div class="project__tags">'+p.tools.map(function(t){return '<span class="project__tag">'+esc(t)+'</span>';}).join('')+'</div></div>'+
      (cta?'<div class="pm__actions">'+cta+'</div>':'')+
      '</div></div></div>';
    var pm=root.querySelector('.pm');
    pm.addEventListener('click',function(e){if(e.target===pm)close();});
    root.querySelector('.pm__close').addEventListener('click',close);
  }
  document.querySelectorAll('.project').forEach(function(btn){
    btn.addEventListener('click',function(){
      var p=window.__PROJECTS__.filter(function(x){return x.num===btn.getAttribute('data-project');})[0];
      if(!p) return;
      if(p.externalUrl){window.open(p.externalUrl,'_blank','noopener');return;}
      open(p);
    });
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
