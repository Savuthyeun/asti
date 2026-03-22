/**
 * ASTI — ASEAN Swiss TVET Initiative
 * main.js — All interactive behaviour
 *
 * Sections:
 *   NAV          — hamburger toggle + mobile link close
 *   LANG         — language switcher pill
 *   COUNTRY TABS — switchTab()
 *   NEWS FILTER  — filter pill toggle
 *   QUIZ         — selectQ() / runQuiz()
 *   SCROLL REVEAL — IntersectionObserver
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /* ════ NAV ════ */
  function togNav(){
    document.getElementById('ham-btn').classList.toggle('open');
    document.getElementById('mob-menu').classList.toggle('open');
  }
  document.querySelectorAll('.mob-nav a').forEach(a=>a.addEventListener('click',()=>{
    document.getElementById('ham-btn').classList.remove('open');
    document.getElementById('mob-menu').classList.remove('open');
  }));

  /* ════ LANG ════ */
  document.querySelectorAll('.lb').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.lb').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');
  }));

  /* ════ COUNTRY TABS ════ */
  function switchTab(id,btn){
    document.querySelectorAll('.cpanel').forEach(p=>p.classList.remove('on'));
    document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('on'));
    document.getElementById('t-'+id).classList.add('on');
    btn.classList.add('on');
  }

  /* ════ NEWS FILTER ════ */
  document.querySelectorAll('.nfp').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.nfp').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');
  }));

  /* ════ QUIZ ════ */
  function selectQ(btn){
    btn.classList.toggle('selected');
  }
  function runQuiz(){
    const sel = document.querySelectorAll('.qc.selected');
    if(sel.length === 0){
      alert('សូមជ្រើសចំណង់ចំណូលចិត្ត ១ ឬ ច្រើន !');
      return;
    }
    // Map to skill recommendation
    const map = {
      'technical hands-on':'⚡ Electrical / 🔧 Mechanics / 🏗️ Construction',
      'computer & digital':'💻 IT & Digital — salary $400–800/ខែ',
      'food & hospitality':'🍳 Food Processing & Tourism',
      'farming & environment':'🌾 Agro-processing & Smart Farming',
      'helping people':'❤️ Community Health & Care',
      'building & construction':'🏗️ Construction Technology'
    };
    const txt = Array.from(sel).map(b=>{
      const k = Object.keys(map).find(k=>b.textContent.includes(k));
      return k ? map[k] : '';
    }).filter(Boolean).join('\n');
    alert('✅ ជំនាញដែលស័ក្តិសម:\n\n'+txt+'\n\n🎓 ចូល eLMS ASTI ឥឡូវ ដើម្បីចាប់ផ្ដើម!');
  }

  /* ════ SCROLL REVEAL ════ */
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}
    });
  },{threshold:0.07});
  document.querySelectorAll('.rev,.rl,.rr').forEach(el=>io.observe(el));

  /* Expose functions called from inline HTML onclick attributes */
  window.togNav = togNav;
  window.switchTab = switchTab;
  window.selectQ = selectQ;
  window.runQuiz = runQuiz;

});
