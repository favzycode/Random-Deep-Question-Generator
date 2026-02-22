'use strict';
/* ══════════════════════════════════════════════════════════
   EXAMINED — Daily Philosophical Questions
   JS: Questions bank, journal, community board, animations
   ══════════════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────────────
// QUESTIONS BANK
// ───────────────────────────────────────────────────────────
const QUESTIONS = [
  // EXISTENTIAL
  { id:'e1',  topic:'existential',  q:'If your life ended tomorrow, what would you regret having never said aloud?',         sub:'Some silences outlast us.' },
  { id:'e2',  topic:'existential',  q:'Is the person you are in private the same person you are in public — and which one is more real?', sub:'The gap between them is where the self lives.' },
  { id:'e3',  topic:'existential',  q:'What would it mean to live as though every moment mattered equally?',                 sub:'Not just the beautiful ones.' },
  { id:'e4',  topic:'existential',  q:'At what point does a life become a story you are telling rather than living?',        sub:'And who decides when that happens?' },
  { id:'e5',  topic:'existential',  q:'If you could remember your death, what do you think you would feel in the final hour?', sub:'Not to fear it — but to understand it.' },
  { id:'e6',  topic:'existential',  q:'How much of who you are is something you chose, and how much was chosen for you?',   sub:'The question behind all questions of identity.' },
  { id:'e7',  topic:'existential',  q:'Does the universe need to have a purpose for your life to have one?',                sub:'These are not the same question.' },
  { id:'e8',  topic:'existential',  q:'What does it mean that every experience you have ever had exists only inside you?',  sub:'No other mind has ever witnessed your life.' },

  // ETHICAL
  { id:'t1',  topic:'ethical',      q:'Is it possible to be genuinely kind, or does every act of kindness serve some need within the giver?', sub:'The question Kant wrestled with and never fully resolved.' },
  { id:'t2',  topic:'ethical',      q:'If you could prevent great suffering by telling a single lie, what does your choice say about the values you truly hold?', sub:'Theory often dissolves under real pressure.' },
  { id:'t3',  topic:'ethical',      q:'To what extent are you responsible for the beliefs of the people you influence?',   sub:'Every relationship is a kind of teaching.' },
  { id:'t4',  topic:'ethical',      q:'What do you owe to strangers — people whose names you will never know?',           sub:'The moral geometry of the anonymous.' },
  { id:'t5',  topic:'ethical',      q:'Is forgiveness something you give to the other person, or something you give to yourself?', sub:'The distinction matters more than it seems.' },
  { id:'t6',  topic:'ethical',      q:'Can you do the right thing for the wrong reason — and does the reason change whether it was right?', sub:'Morality and motivation are rarely clean.' },
  { id:'t7',  topic:'ethical',      q:'Where is the line between honesty that heals and honesty that only satisfies the speaker?', sub:'Truth-telling can be its own form of violence.' },

  // PERSONAL GROWTH
  { id:'p1',  topic:'personal',     q:'What story about yourself are you most reluctant to revise, and what are you protecting by keeping it?', sub:'Our identities are often defenses we forgot we built.' },
  { id:'p2',  topic:'personal',     q:'Which of your beliefs have you never seriously challenged — and why not?',          sub:'Comfort can look a lot like certainty.' },
  { id:'p3',  topic:'personal',     q:'What version of yourself are you still trying to become, and what is preventing the transition?', sub:'Sometimes the obstacle is the self that came before.' },
  { id:'p4',  topic:'personal',     q:'If you removed every external measure of success, what would you still pursue?',    sub:'That thing, whatever it is, may be the answer.' },
  { id:'p5',  topic:'personal',     q:'What do the people who know you best see in you that you cannot see in yourself?', sub:'Other eyes sometimes show us a clearer reflection.' },
  { id:'p6',  topic:'personal',     q:'How much of your life is spent doing what you want, versus doing what you think you are supposed to want?', sub:'The gap is worth measuring honestly.' },
  { id:'p7',  topic:'personal',     q:'What would you do differently if you truly believed you deserved the life you want?', sub:'Worthiness is a story we tell before we act.' },
  { id:'p8',  topic:'personal',     q:'When did you last change your mind about something important — and what did that feel like?', sub:'Intellectual flexibility is a form of courage.' },

  // METAPHYSICAL
  { id:'m1',  topic:'metaphysical', q:'Is consciousness something the brain produces, or something the brain receives?',   sub:'The answer changes almost everything downstream.' },
  { id:'m2',  topic:'metaphysical', q:'If time is continuous, what separates the person you were ten years ago from the person you are now?', sub:'The Ship of Theseus, wearing your face.' },
  { id:'m3',  topic:'metaphysical', q:'What would it mean for something to be truly random — and does such a thing exist?', sub:'Randomness and mystery may be the same word.' },
  { id:'m4',  topic:'metaphysical', q:'Is the experience of beauty a property of the world, or a property of the mind looking at it?', sub:'And does the answer change what beauty means?' },
  { id:'m5',  topic:'metaphysical', q:'Could a fully simulated world be meaningfully different from a real one?',          sub:'The question becomes harder the longer you hold it.' },
  { id:'m6',  topic:'metaphysical', q:'Is language capable of expressing what you most deeply feel, or are we always translating badly?', sub:'Every poem is a defeat and a triumph.' },
  { id:'m7',  topic:'metaphysical', q:'If free will is an illusion, does that change your relationship to regret?',       sub:'Regret requires a belief in alternatives.' },
];

// Seed community answers
const SEED_COMMUNITY = [
  { qid:'e1', topic:'existential',  body:'I would tell my father I am proud of him too. I have spent so long waiting to hear those words that I forgot I could give them first.',         age:'2 hours ago', likes:41 },
  { qid:'p1', topic:'personal',     body:'The story I protect is that I failed because circumstances were against me. The truth is I was afraid to truly try — failure would have been mine alone.',  age:'5 hours ago', likes:87 },
  { qid:'t1', topic:'ethical',      body:'I think pure altruism exists in moments, not in people. A parent running into traffic for their child is not calculating anything.',              age:'1 day ago',   likes:34 },
  { qid:'m1', topic:'metaphysical', body:'I lean toward the brain producing it, but every time I fall asleep and come back, I am less certain. Where did I go?',                         age:'3 hours ago', likes:62 },
  { qid:'e3', topic:'existential',  body:'I think we cannot sustain that intensity. But we could practice it with one or two moments each day — the cup of tea, the person at the door.', age:'6 hours ago', likes:29 },
  { qid:'p4', topic:'personal',     body:'Writing. I have written in some form since I was nine years old and no one has ever paid me for it and it is still the truest part of my life.', age:'12 hours ago',likes:73 },
  { qid:'t3', topic:'ethical',      body:'Fully. Anyone who listens to you is partly made by what you say. That is the weight of having a voice.',                                         age:'1 day ago',   likes:55 },
  { qid:'m4', topic:'metaphysical', body:'Both, somehow. The capacity for beauty is ours, but the invitation comes from outside. A sunset is not beautiful without a witness — but it is also not nothing.',  age:'4 hours ago', likes:48 },
  { qid:'e6', topic:'existential',  body:'I used to say 20% chosen. Now I think the choosing part — the moment of awareness — is everything, even if it is rare.',                       age:'2 days ago',  likes:91 },
  { qid:'p7', topic:'personal',     body:'I would stop apologizing before I began. I would make the call without rehearsing it eight times. I would say yes before my fear had time to vote.', age:'8 hours ago', likes:66 },
  { qid:'t5', topic:'ethical',      body:'You give it to yourself. The other person does not even need to know. You put it down so you can walk further.',                                 age:'1 day ago',   likes:44 },
  { qid:'m6', topic:'metaphysical', body:'Language fails us most precisely where it matters most. The word grief is nothing like grief.',                                                  age:'3 days ago',  likes:108 },
];

// ───────────────────────────────────────────────────────────
// STATE
// ───────────────────────────────────────────────────────────
let currentTodayFilter   = 'all';
let currentCommunityFilter = 'all';
let journalEntries       = JSON.parse(localStorage.getItem('examined_journal') || '[]');
let communityPosts       = JSON.parse(localStorage.getItem('examined_community') || 'null') || SEED_COMMUNITY;
let currentJournalId     = null;
let modalQuestion        = null; // { q, topic }
let heroQuestionIndex    = getDailyIndex();

// ───────────────────────────────────────────────────────────
// INIT
// ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setNavDate();
  renderHero();
  renderQuestionGrid('all');
  renderCommunityBoard('all');
  renderJournalSidebar();
  setupScrollNav();
  setupWordCounts();
});

// ───────────────────────────────────────────────────────────
// UTILITIES
// ───────────────────────────────────────────────────────────
function getDailyIndex() {
  const day = Math.floor(Date.now() / 86400000);
  return day % QUESTIONS.length;
}

function setNavDate() {
  const now = new Date();
  document.getElementById('nav-date').textContent =
    now.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
}

function topicColor(t) {
  return { existential:'#9b7ec8', ethical:'#7a8c76', personal:'#b8935a', metaphysical:'#8a9eb8' }[t] || '#b8935a';
}
function topicLabel(t) {
  return { existential:'Existential', ethical:'Ethical', personal:'Personal Growth', metaphysical:'Metaphysical' }[t] || t;
}
function timeAgo(ts) {
  const diff = Date.now() - ts;
  if (diff < 3600000)  return Math.floor(diff/60000) + 'm ago';
  if (diff < 86400000) return Math.floor(diff/3600000) + 'h ago';
  return Math.floor(diff/86400000) + 'd ago';
}
function wordCount(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function saveJournal() {
  localStorage.setItem('examined_journal', JSON.stringify(journalEntries));
}
function saveCommunity() {
  localStorage.setItem('examined_community', JSON.stringify(communityPosts));
}

// ───────────────────────────────────────────────────────────
// NAV SCROLL
// ───────────────────────────────────────────────────────────
function setupScrollNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ───────────────────────────────────────────────────────────
// VIEW SWITCHING
// ───────────────────────────────────────────────────────────
function showView(view, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  if (btn) btn.classList.add('active');
  else {
    const b = document.querySelector(`[data-view="${view}"]`);
    if (b) b.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (view === 'journal')   renderJournalSidebar();
  if (view === 'community') renderCommunityBoard(currentCommunityFilter);
}

// ───────────────────────────────────────────────────────────
// HERO
// ───────────────────────────────────────────────────────────
function renderHero() {
  const q = QUESTIONS[heroQuestionIndex];
  const qEl  = document.getElementById('hero-question');
  const tagEl = document.getElementById('q-tag');
  const subEl = document.getElementById('hero-sub');

  qEl.textContent  = q.q;
  tagEl.textContent = topicLabel(q.topic);
  subEl.textContent = q.sub;

  // Stagger entrance
  qEl.style.animation = 'heroReveal 0.9s cubic-bezier(0.2,0,0,1) both 0.2s';
  subEl.style.animation = 'heroReveal 0.9s cubic-bezier(0.2,0,0,1) both 0.4s';
}

// Inject hero keyframe dynamically
const heroStyle = document.createElement('style');
heroStyle.textContent = `
@keyframes heroReveal {
  from { opacity:0; transform: translateY(20px); }
  to   { opacity:1; transform: translateY(0); }
}`;
document.head.appendChild(heroStyle);

function nextQuestion() {
  const qEl = document.getElementById('hero-question');
  qEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  qEl.style.opacity = '0';
  qEl.style.transform = 'translateY(10px)';

  setTimeout(() => {
    heroQuestionIndex = (heroQuestionIndex + 1) % QUESTIONS.length;
    renderHero();
    qEl.style.opacity = '';
    qEl.style.transform = '';
  }, 360);
}

// ───────────────────────────────────────────────────────────
// QUESTION GRID
// ───────────────────────────────────────────────────────────
function renderQuestionGrid(filter) {
  const grid = document.getElementById('questions-grid');
  const list = filter === 'all' ? QUESTIONS : QUESTIONS.filter(q => q.topic === filter);

  grid.innerHTML = '';
  list.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.dataset.topic = q.topic;
    card.style.animationDelay = (i * 0.05) + 's';
    card.innerHTML = `
      <div class="q-card-topic topic-${q.topic}">${topicLabel(q.topic)}</div>
      <div class="q-card-text">${q.q}</div>
      <div class="q-card-footer">
        <span class="q-card-reflect">Reflect on this</span>
        <div class="q-card-arrow">↗</div>
      </div>`;
    card.addEventListener('click', () => openJournalEntry(q));
    grid.appendChild(card);
  });
}

function filterToday(filter, btn) {
  currentTodayFilter = filter;
  document.querySelectorAll('#today-filters .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderQuestionGrid(filter);
}

// ───────────────────────────────────────────────────────────
// JOURNAL MODAL (quick-write from Today)
// ───────────────────────────────────────────────────────────
function openJournalEntry(q) {
  if (!q) {
    // Called from hero button — use current hero question
    q = QUESTIONS[heroQuestionIndex];
  }
  modalQuestion = q;

  document.getElementById('modal-q-tag').textContent = topicLabel(q.topic).toUpperCase();
  document.getElementById('modal-question').textContent = q.q;
  document.getElementById('modal-textarea').value = '';
  document.getElementById('modal-words').textContent = '0 words';

  document.getElementById('modal-backdrop').classList.add('open');
  setTimeout(() => document.getElementById('modal-textarea').focus(), 350);
}

function closeModal(event, force) {
  if (event && event.target !== document.getElementById('modal-backdrop') && !force) return;
  document.getElementById('modal-backdrop').classList.remove('open');
  modalQuestion = null;
}

function saveModalEntry() {
  const body = document.getElementById('modal-textarea').value.trim();
  if (!body) { toast('Write something first.'); return; }
  const entry = {
    id:    'j-' + Date.now(),
    qid:   modalQuestion.id,
    topic: modalQuestion.topic,
    q:     modalQuestion.q,
    body,
    date:  Date.now(),
    shared: false,
  };
  journalEntries.unshift(entry);
  saveJournal();
  closeModal(null, true);
  toast('Saved to your journal ✦');
  renderJournalSidebar();
}

function shareModalToPublic() {
  const body = document.getElementById('modal-textarea').value.trim();
  if (!body) { toast('Write something to share.'); return; }
  addCommunityPost(modalQuestion, body);
  saveModalEntry();
  toast('Shared anonymously with the community ✦');
}

// ───────────────────────────────────────────────────────────
// JOURNAL VIEW
// ───────────────────────────────────────────────────────────
function renderJournalSidebar() {
  const list = document.getElementById('jsb-list');
  const count = document.getElementById('jsb-count');
  count.textContent = journalEntries.length + (journalEntries.length === 1 ? ' entry' : ' entries');

  list.innerHTML = '';
  if (!journalEntries.length) {
    list.innerHTML = '<div class="jsb-empty">No entries yet.<br/>Start reflecting.</div>';
    return;
  }

  journalEntries.forEach(e => {
    const item = document.createElement('div');
    item.className = 'jsb-item' + (currentJournalId === e.id ? ' active' : '');
    item.innerHTML = `
      <div class="jsb-item-q">${e.q}</div>
      <div class="jsb-item-meta">
        <span class="jsb-item-tag">${topicLabel(e.topic).toUpperCase()}</span>
        <span class="jsb-item-date">${timeAgo(e.date)}</span>
      </div>`;
    item.addEventListener('click', () => selectJournalEntry(e.id));
    list.appendChild(item);
  });
}

function selectJournalEntry(id) {
  currentJournalId = id;
  const entry = journalEntries.find(e => e.id === id);
  if (!entry) return;

  document.getElementById('je-empty').style.display = 'none';
  document.getElementById('je-form').style.display  = 'flex';
  document.getElementById('je-qlabel').textContent = topicLabel(entry.topic).toUpperCase();
  document.getElementById('je-qtext').textContent  = entry.q;
  document.getElementById('je-meta').textContent   =
    new Date(entry.date).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  document.getElementById('je-textarea').value = entry.body;
  document.getElementById('je-word-count').textContent = wordCount(entry.body) + ' words';

  renderJournalSidebar();
}

function saveEntry() {
  if (!currentJournalId) return;
  const entry = journalEntries.find(e => e.id === currentJournalId);
  if (!entry) return;
  entry.body = document.getElementById('je-textarea').value;
  saveJournal();
  renderJournalSidebar();
  toast('Entry saved ✦');
}

function shareToPublic() {
  if (!currentJournalId) return;
  const entry = journalEntries.find(e => e.id === currentJournalId);
  if (!entry) return;
  const body = document.getElementById('je-textarea').value.trim();
  if (!body) { toast('Write something first.'); return; }
  entry.body = body;
  entry.shared = true;
  saveJournal();
  addCommunityPost({ id: entry.qid, topic: entry.topic, q: entry.q }, body);
  toast('Shared anonymously ✦');
}

// ───────────────────────────────────────────────────────────
// COMMUNITY
// ───────────────────────────────────────────────────────────
function addCommunityPost(q, body) {
  communityPosts.unshift({
    qid:   q.id,
    topic: q.topic,
    body,
    age:   Date.now(),
    likes: 0,
    isNew: true,
  });
  saveCommunity();
  renderCommunityBoard(currentCommunityFilter);
}

function renderCommunityBoard(filter) {
  currentCommunityFilter = filter;
  const board = document.getElementById('community-board');
  const posts = filter === 'all'
    ? communityPosts
    : communityPosts.filter(p => p.topic === filter);

  board.innerHTML = '';
  posts.forEach((p, i) => {
    const q = QUESTIONS.find(x => x.id === p.qid);
    const qText = q ? q.q : '';
    const ageStr = typeof p.age === 'number' ? timeAgo(p.age) : p.age;
    const liked = (p.likedByMe || false);

    const card = document.createElement('div');
    card.className = 'community-card';
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <div class="cc-question">${qText}</div>
      <div class="cc-body">${p.body}</div>
      <div class="cc-footer">
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="cc-topic topic-${p.topic}" style="color:${topicColor(p.topic)}">${topicLabel(p.topic).toUpperCase()}</span>
          <span class="cc-age">${ageStr}</span>
        </div>
        <button class="cc-like-btn ${liked ? 'liked' : ''}" onclick="likePost(${i}, this)">
          ♡ <span class="like-count">${p.likes}</span>
        </button>
      </div>`;
    board.appendChild(card);
  });
}

function likePost(idx, btn) {
  // idx is position in filtered list — re-find in full list
  const filter = currentCommunityFilter;
  const filtered = filter === 'all' ? communityPosts : communityPosts.filter(p => p.topic === filter);
  const post = filtered[idx];
  if (!post) return;
  if (post.likedByMe) {
    post.likes = Math.max(0, post.likes - 1);
    post.likedByMe = false;
    btn.classList.remove('liked');
  } else {
    post.likes++;
    post.likedByMe = true;
    btn.classList.add('liked');
  }
  btn.querySelector('.like-count').textContent = post.likes;
  saveCommunity();
}

function filterCommunity(filter, btn) {
  document.querySelectorAll('#view-community .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderCommunityBoard(filter);
}

// ───────────────────────────────────────────────────────────
// WORD COUNT LIVE
// ───────────────────────────────────────────────────────────
function setupWordCounts() {
  document.getElementById('modal-textarea').addEventListener('input', function() {
    document.getElementById('modal-words').textContent = wordCount(this.value) + ' words';
  });
  document.getElementById('je-textarea').addEventListener('input', function() {
    document.getElementById('je-word-count').textContent = wordCount(this.value) + ' words';
  });
}

// ───────────────────────────────────────────────────────────
// TOAST
// ───────────────────────────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}
