/* ============================================================
   PRICE CALCULATOR
   ============================================================ */

const MATERIALS = [
  { name:'Kota Blue Stone',            base:95,   install:35 },
  { name:'Jaisalmer Yellow Sandstone', base:120,  install:40 },
  { name:'Agra Red Sandstone',         base:135,  install:40 },
  { name:'Golden Brown Sandstone',     base:140,  install:40 },
  { name:'Bethel White Granite',       base:165,  install:45 },
  { name:'Kashmir White Granite',      base:185,  install:45 },
  { name:'Absolute Black Granite',     base:195,  install:45 },
  { name:'Black Galaxy Granite',       base:220,  install:50 },
  { name:'Tan Brown Granite',          base:210,  install:45 },
  { name:'Grey Quartzite',             base:175,  install:45 },
  { name:'Rajasthan Pink Marble',      base:160,  install:50 },
  { name:'Makrana White Marble',       base:280,  install:55 },
  { name:'Carrara White Marble',       base:320,  install:60 },
  { name:'Silver Grey Marble',         base:320,  install:60 },
  { name:'Blue Pearl Granite',         base:285,  install:55 },
  { name:'Indian Green Marble',        base:290,  install:55 },
  { name:'Azure Blue Quartzite',       base:340,  install:65 },
  { name:'Rosa Aurora Marble',         base:390,  install:65 },
  { name:'Nero Marquina Marble',       base:410,  install:65 },
  { name:'Rainforest Green Marble',    base:420,  install:70 },
  { name:'Italian Statuario Marble',   base:450,  install:70 },
  { name:'Calacatta Gold Marble',      base:520,  install:75 },
  { name:'White Onyx',                 base:680,  install:90 },
  { name:'Emerald Green Onyx',         base:750,  install:90 },
];

const FINISH_MULTIPLIER = { polished:1.0, honed:1.05, brushed:1.08, sandblasted:1.12 };

/* populate select */
const matSelect    = document.getElementById('calcMaterial');
const finishSelect = document.getElementById('calcFinish');

if (matSelect) {
  MATERIALS.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.name;
    opt.textContent = `${m.name} — ₹${m.base}/sqft`;
    matSelect.appendChild(opt);
  });
}

/* calculate */
const calcBtn    = document.getElementById('calcBtn');
const resultBox  = document.getElementById('calcResult');

if (calcBtn) {
  calcBtn.addEventListener('click', calculate);
}

function calculate() {
  const length  = parseFloat(document.getElementById('calcLength').value) || 0;
  const width   = parseFloat(document.getElementById('calcWidth').value)  || 0;
  const matName = matSelect ? matSelect.value : '';
  const finish  = finishSelect ? finishSelect.value : 'polished';
  const withInstall = document.getElementById('calcInstall') ? document.getElementById('calcInstall').checked : false;

  if (!length || !width) { alert('Please enter valid length and width.'); return; }
  if (!matName) { alert('Please select a material.'); return; }

  const mat       = MATERIALS.find(m => m.name === matName);
  const area      = length * width;
  const wastage   = Math.ceil(area * 0.1); // 10% wastage
  const totalArea = area + wastage;
  const finMul    = FINISH_MULTIPLIER[finish] || 1;
  const matCost   = Math.round(totalArea * mat.base * finMul);
  const instCost  = withInstall ? Math.round(totalArea * mat.install) : 0;
  const subtotal  = matCost + instCost;
  const gst       = Math.round(subtotal * 0.18);
  const total     = subtotal + gst;

  document.getElementById('rArea').textContent     = area.toFixed(1) + ' sqft';
  document.getElementById('rWastage').textContent  = wastage.toFixed(1) + ' sqft (10%)';
  document.getElementById('rTotal').textContent    = totalArea.toFixed(1) + ' sqft';
  document.getElementById('rMatRate').textContent  = '₹' + Math.round(mat.base * finMul) + '/sqft';
  document.getElementById('rMatCost').textContent  = '₹' + matCost.toLocaleString('en-IN');
  document.getElementById('rInstRow').style.display = withInstall ? '' : 'none';
  document.getElementById('rInstCost').textContent = '₹' + instCost.toLocaleString('en-IN');
  document.getElementById('rGST').textContent      = '₹' + gst.toLocaleString('en-IN');
  document.getElementById('rFinal').textContent    = '₹' + total.toLocaleString('en-IN');
  document.getElementById('rFinish').textContent   = finish.charAt(0).toUpperCase() + finish.slice(1);
  document.getElementById('rMat').textContent      = matName;

  if (resultBox) resultBox.classList.add('visible');
  resultBox.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

/* reset */
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    document.getElementById('calcLength').value = '';
    document.getElementById('calcWidth').value  = '';
    if (matSelect)    matSelect.selectedIndex = 0;
    if (finishSelect) finishSelect.selectedIndex = 0;
    if (document.getElementById('calcInstall')) document.getElementById('calcInstall').checked = false;
    if (resultBox) resultBox.classList.remove('visible');
  });
}

/* download brochure */
const dlBtn = document.getElementById('downloadBrochure');
if (dlBtn) {
  dlBtn.addEventListener('click', () => {
    const content = `
AMBALA MARBLE & GRANITE HOUSE
Product & Price Brochure 2024
Plot 12, Industrial Area Phase-II, Ambala City, Haryana 134003
Phone: +91 98765 43210 | Email: info@ambalamarblegranite.com
=============================================================

MARBLE COLLECTION
-----------------
Italian Statuario Marble        ₹ 400 – 500 per sqft
Calacatta Gold Marble           ₹ 480 – 560 per sqft
Carrara White Marble            ₹ 290 – 360 per sqft
Makrana White Marble            ₹ 240 – 310 per sqft
Silver Grey Marble              ₹ 290 – 360 per sqft
Nero Marquina Marble            ₹ 370 – 450 per sqft
Rosa Aurora Marble              ₹ 350 – 430 per sqft
Rainforest Green Marble         ₹ 380 – 460 per sqft
Indian Green Marble             ₹ 260 – 320 per sqft
Rajasthan Pink Marble           ₹ 140 – 180 per sqft

GRANITE COLLECTION
------------------
Black Galaxy Granite            ₹ 200 – 250 per sqft
Kashmir White Granite           ₹ 165 – 210 per sqft
Absolute Black Granite          ₹ 175 – 220 per sqft
Tan Brown Granite               ₹ 190 – 235 per sqft
Blue Pearl Granite              ₹ 260 – 320 per sqft
Bethel White Granite            ₹ 145 – 185 per sqft

SANDSTONE COLLECTION
--------------------
Kota Blue Stone                 ₹  80 – 110 per sqft
Jaisalmer Yellow Sandstone      ₹ 105 – 140 per sqft
Agra Red Sandstone              ₹ 115 – 155 per sqft
Golden Brown Sandstone          ₹ 120 – 160 per sqft

QUARTZITE & ONYX
-----------------
Grey Quartzite                  ₹ 155 – 200 per sqft
Azure Blue Quartzite            ₹ 310 – 380 per sqft
White Onyx                      ₹ 620 – 750 per sqft
Emerald Green Onyx              ₹ 680 – 820 per sqft

=============================================================
INSTALLATION CHARGES (additional)
Marble & Granite Flooring       ₹ 45 – 75 per sqft
Sandstone / Quartzite           ₹ 35 – 50 per sqft
Wall Cladding                   ₹ 60 – 90 per sqft
Kitchen Counter                 ₹ 80 – 120 per sqft

GST @ 18% applicable on all supplies.
=============================================================
* Prices are indicative. Exact quote depends on order quantity,
  stone grade, finish type and site conditions.
* Minimum order: 50 sqft (retail) | 500 sqft (wholesale)
* Valid for: October 2024

Contact us for your exact custom quote.
www.ambalamarblegranite.com
    `.trim();

    const blob = new Blob([content], { type:'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'Ambala-Marble-Granite-House-Brochure-2024.txt';
    a.click();
    URL.revokeObjectURL(url);
  });
}
