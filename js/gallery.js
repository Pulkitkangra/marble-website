/* ============================================================
   GALLERY PAGE — Filtering & Lightbox
   ============================================================ */

/* Project tile uses stone gradient + texture per project material — never blank */
const PROJECT_IMG = {};

const PROJECTS = [
  { id:1,  title:'Luxury Villa — Full Flooring',       cat:'residential',   city:'Chandigarh Sector 9',   material:'Italian Statuario Marble',   area:'8,200 sqft',  year:'2023',
    desc:'Complete flooring for a 4-storey luxury villa including living rooms, bedrooms, corridors and bathrooms. Bookmatched slabs used in the main hall.',
    h:260, grad:'linear-gradient(135deg,#f0ede8 0%,#e0dcd0 30%,#f4f0ea 60%,#d8d4ca 100%)' },

  { id:2,  title:'5-Star Hotel Lobby',                 cat:'hotels',        city:'Ambala Cantt',          material:'Black Galaxy Granite',        area:'14,500 sqft', year:'2023',
    desc:'Grand hotel lobby with polished Black Galaxy granite flooring, custom-cut diamond inlay patterns, and matching reception counter cladding.',
    h:200, grad:'linear-gradient(135deg,#0e0e10 0%,#1a1a1e 35%,#121216 65%,#1e1e22 100%)' },

  { id:3,  title:'Tech Park Entrance Plaza',            cat:'commercial',    city:'Panchkula Sector 22',   material:'Grey Quartzite & SS Granite', area:'6,800 sqft',  year:'2022',
    desc:'Corporate tech park entrance featuring grey quartzite flooring with polished granite feature strips and exterior sandstone facade cladding.',
    h:220, grad:'linear-gradient(135deg,#909090 0%,#a0a0a0 40%,#888888 70%,#989898 100%)' },

  { id:4,  title:'Colonial Bungalow Renovation',        cat:'residential',   city:'Patiala',               material:'Makrana White Marble',        area:'3,400 sqft',  year:'2024',
    desc:'Heritage bungalow restoration using authentic Makrana white marble for all flooring and verandah areas, maintaining the colonial architectural character.',
    h:180, grad:'linear-gradient(135deg,#f2f0ec 0%,#e8e4de 35%,#f5f3ef 65%,#dedad4 100%)' },

  { id:5,  title:'Rooftop Restaurant & Bar',            cat:'hotels',        city:'Ambala City',            material:'Calacatta Gold Marble',       area:'2,800 sqft',  year:'2024',
    desc:'Luxury rooftop restaurant with Calacatta Gold marble bar counter, feature wall panel bookmatched for dramatic effect, and coordinated floor tiles.',
    h:240, grad:'linear-gradient(130deg,#f4edd8 0%,#e8d8b0 30%,#f8f2e0 60%,#dcc898 100%)' },

  { id:6,  title:'Corporate HQ — 18 Floors',            cat:'offices',       city:'Chandigarh Sector 17',   material:'Absolute Black Granite',      area:'22,000 sqft', year:'2022',
    desc:'Full building flooring for a 18-floor corporate tower using Absolute Black polished granite. Includes lobby, lift lobbies, conference rooms and executive floors.',
    h:210, grad:'linear-gradient(135deg,#080808 0%,#101010 40%,#0c0c0c 70%,#141414 100%)' },

  { id:7,  title:'Farmhouse Exterior Cladding',          cat:'residential',   city:'Kurukshetra',            material:'Agra Red Sandstone',          area:'5,600 sqft',  year:'2023',
    desc:'Farmhouse exterior wall cladding and gate pillars using Agra Red sandstone with sandblasted finish. Mughal-inspired arched panels with custom carving.',
    h:190, grad:'linear-gradient(135deg,#8a3a28 0%,#9e4838 35%,#7e2e1e 65%,#923820 100%)' },

  { id:8,  title:'Boutique Heritage Hotel',              cat:'hotels',        city:'Yamunanagar',            material:'Mixed Stone Package',         area:'9,200 sqft',  year:'2023',
    desc:'Complete stone specification for a boutique heritage hotel: Rajasthan Pink marble in rooms, Black Galaxy granite in dining, Sandstone in courtyards.',
    h:230, grad:'linear-gradient(135deg,#ecd8d0 0%,#dcc8c0 40%,#f0dcd5 70%,#d4b8b0 100%)' },

  { id:9,  title:'Bank Branch — Premium Fit-out',        cat:'commercial',    city:'Karnal',                 material:'Silver Grey Marble',          area:'2,400 sqft',  year:'2024',
    desc:'Full flooring and teller counter cladding for a leading private bank branch using Silver Grey marble. Polished to mirror finish with laser-cut logo inlay.',
    h:200, grad:'linear-gradient(135deg,#b8b8b8 0%,#c8c8c8 35%,#a8a8a8 65%,#c0c0c0 100%)' },

  { id:10, title:'Government School Complex',             cat:'commercial',    city:'Ambala',                 material:'Kota Blue Stone',             area:'12,000 sqft', year:'2021',
    desc:'Large-scale educational building flooring using Kota Blue honed stone across classrooms, corridors and stairways. Durable, easy maintenance and cost-effective.',
    h:185, grad:'linear-gradient(135deg,#8c9090 0%,#9aa0a0 40%,#8a8e8e 70%,#929898 100%)' },

  { id:11, title:'Luxury Apartments — Tower A & B',       cat:'residential',   city:'Panchkula Sector 5',    material:'Kashmir White Granite',       area:'9,800 sqft',  year:'2022',
    desc:'Complete flooring for two residential towers, 72 apartments total. Kashmir White granite used throughout with customised border designs per unit.',
    h:220, grad:'linear-gradient(140deg,#e8e4de 0%,#d8d4cc 35%,#eae6e0 65%,#ccc8c0 100%)' },

  { id:12, title:'Jewellery Showroom',                   cat:'commercial',    city:'Ambala City',            material:'Carrara White & Black Marble', area:'3,200 sqft',  year:'2024',
    desc:'High-end jewellery showroom interior with alternating Carrara White and Nero Marquina marble flooring in a custom geometric pattern. Display counter in onyx.',
    h:195, grad:'linear-gradient(135deg,#ebebeb 0%,#e0e0dd 50%,#141414 51%,#1a1a1a 100%)' },

  { id:13, title:'Hill Resort & Spa',                    cat:'hotels',        city:'Morni Hills, Panchkula', material:'Natural Stone Mix',           area:'6,400 sqft',  year:'2023',
    desc:'Eco-luxury resort spa using natural local quartzite for pool surrounds, Indian green marble in spa treatment rooms, and sandstone for outdoor pathways.',
    h:240, grad:'linear-gradient(135deg,#1a3a18 0%,#244a22 35%,#1e421e 65%,#2a5028 100%)' },

  { id:14, title:'Shopping Mall — Food Court',            cat:'commercial',    city:'Ambala',                 material:'Tan Brown Granite',           area:'8,500 sqft',  year:'2021',
    desc:'Heavy-traffic food court flooring using Tan Brown polished granite for durability and easy cleaning. Custom compass rose inlay in the central atrium.',
    h:210, grad:'linear-gradient(135deg,#5a3a28 0%,#6a4838 40%,#502e20 70%,#603a2c 100%)' },

  { id:15, title:'Director\'s Bungalow — Interior',      cat:'residential',   city:'Chandigarh',             material:'Rainforest Green Marble',     area:'4,100 sqft',  year:'2024',
    desc:'Dramatic rainforest green marble used for the main staircase, dining room floor and all bathroom feature walls in this architect-designed director\'s residence.',
    h:225, grad:'linear-gradient(128deg,#1a3818 0%,#284a24 35%,#1e4020 65%,#2a4e28 100%)' },
];

let activeCategory = 'all';
const galleryGrid  = document.getElementById('galleryGrid');
const filterTabs   = document.querySelectorAll('.filter-tab');
const lightbox     = document.getElementById('lightbox');
const lbClose      = document.getElementById('lbClose');

/* ── Tab filtering ──────────────────────────────────────── */
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.cat;
    renderGallery();
  });
});

/* ── Render ─────────────────────────────────────────────── */
function renderGallery() {
  const items = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeCategory);

  if (!galleryGrid) return;

  galleryGrid.innerHTML = items.map(p => `
    <div class="gallery-item" data-id="${p.id}" style="cursor:pointer">
      <div class="gallery-img" style="
        height:${p.h}px;
        background:${p.grad};
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <div style="position:relative;text-align:center;color:rgba(255,255,255,0.85);text-shadow:0 2px 8px rgba(0,0,0,0.6);">
          <div style="font-size:2.2rem;margin-bottom:0.4rem;opacity:0.6;">🏛️</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:600;padding:0 1.5rem;">${p.material}</div>
          <div style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-top:0.4rem;opacity:0.95;">${p.area}</div>
        </div>
      </div>
      <div class="gallery-overlay">
        <span class="gallery-tag">${catLabel(p.cat)}</span>
        <h4>${p.title}</h4>
        <p>📍 ${p.city} &nbsp;|&nbsp; ${p.year}</p>
      </div>
    </div>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.id)));
  });
}

function catLabel(cat) {
  const map = { residential:'Residential', commercial:'Commercial', hotels:'Hotels & Hospitality', offices:'Offices' };
  return map[cat] || cat;
}

/* ── Lightbox ───────────────────────────────────────────── */
function openLightbox(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p || !lightbox) return;

  document.getElementById('lbImg').style.background    = p.grad;
  document.getElementById('lbImg').innerHTML = `<div style="text-align:center;color:rgba(255,255,255,0.9);text-shadow:0 2px 12px rgba(0,0,0,0.7);"><div style="font-size:3rem;margin-bottom:0.5rem;">🏛️</div><div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;">${p.material}</div><div style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-top:0.5rem;">${p.area} installed</div></div>`;
  document.getElementById('lbTitle').textContent       = p.title;
  document.getElementById('lbDesc').textContent        = p.desc;
  document.getElementById('lbCity').textContent        = p.city;
  document.getElementById('lbMaterial').textContent    = p.material;
  document.getElementById('lbArea').textContent        = p.area;
  document.getElementById('lbYear').textContent        = p.year;
  document.getElementById('lbCategory').textContent    = catLabel(p.cat);

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

if (lbClose)   lbClose.addEventListener('click', closeLightbox);
if (lightbox)  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

renderGallery();
