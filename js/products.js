/* ============================================================
   PRODUCTS PAGE — Filtering, Sorting, Modals, Compare
   ============================================================ */

/* ── Realistic CSS-only stone textures ──────────────────────── */
const TEX = {
  /* WHITE MARBLE with bold dark grey veins (Statuario) */
  statuario: `
    radial-gradient(ellipse at 22% 78%, rgba(150,150,160,0.18) 0%, transparent 38%),
    radial-gradient(ellipse at 80% 22%, rgba(180,180,190,0.15) 0%, transparent 40%),
    linear-gradient(118deg, transparent 26%, rgba(60,60,70,0.55) 28%, rgba(90,90,100,0.7) 29%, rgba(60,60,70,0.55) 30%, transparent 32%, transparent 53%, rgba(50,50,60,0.5) 55%, rgba(80,80,92,0.65) 56%, rgba(50,50,60,0.5) 57%, transparent 59%),
    linear-gradient(72deg, transparent 43%, rgba(120,120,130,0.32) 45%, rgba(120,120,130,0.32) 46%, transparent 47%),
    linear-gradient(135deg, #f7f4ec 0%, #ebe6da 30%, #f3eddf 60%, #dad3c0 100%)`,

  /* WHITE MARBLE soft fine veins (Carrara) */
  carrara: `
    linear-gradient(108deg, transparent 32%, rgba(120,120,135,0.28) 34%, rgba(140,140,155,0.32) 35%, rgba(120,120,135,0.28) 36%, transparent 38%, transparent 64%, rgba(110,110,125,0.22) 66%, rgba(130,130,145,0.27) 67%, rgba(110,110,125,0.22) 68%, transparent 70%),
    linear-gradient(78deg, transparent 48%, rgba(140,140,155,0.18) 50%, rgba(140,140,155,0.18) 51%, transparent 53%),
    radial-gradient(ellipse at 30% 60%, rgba(200,200,210,0.3) 0%, transparent 40%),
    linear-gradient(135deg, #ededed 0%, #e1e1de 30%, #ededec 60%, #d8d8d4 100%)`,

  /* BLACK GALAXY — golden + silver specks on dark base */
  blackGalaxy: `
    radial-gradient(circle, rgba(220,180,80,0.95) 0.8px, transparent 1.6px) 0 0/22px 22px,
    radial-gradient(circle, rgba(210,210,210,0.85) 0.7px, transparent 1.4px) 11px 11px/28px 28px,
    radial-gradient(circle, rgba(220,190,90,0.8) 0.6px, transparent 1.3px) 5px 17px/35px 35px,
    radial-gradient(circle, rgba(180,180,180,0.7) 0.5px, transparent 1.1px) 18px 6px/40px 40px,
    linear-gradient(135deg, #08080c 0%, #14141a 50%, #0a0a10 100%)`,

  /* KASHMIR WHITE — cream with black + brown specks */
  kashmirWhite: `
    radial-gradient(circle, rgba(40,30,25,0.85) 0.9px, transparent 1.8px) 0 0/24px 24px,
    radial-gradient(circle, rgba(120,40,30,0.6) 0.8px, transparent 1.5px) 12px 12px/40px 40px,
    radial-gradient(circle, rgba(60,50,45,0.7) 0.7px, transparent 1.4px) 6px 18px/30px 30px,
    linear-gradient(135deg, #ebe5db 0%, #d8d2c6 30%, #ece6dc 60%, #d0c8b8 100%)`,

  /* RAJASTHAN PINK MARBLE */
  pinkMarble: `
    linear-gradient(115deg, transparent 35%, rgba(180,120,115,0.3) 37%, rgba(200,140,135,0.35) 38%, rgba(180,120,115,0.3) 39%, transparent 41%, transparent 65%, rgba(170,110,105,0.28) 67%, rgba(170,110,105,0.28) 68%, transparent 70%),
    radial-gradient(ellipse at 25% 70%, rgba(220,180,175,0.4) 0%, transparent 45%),
    radial-gradient(ellipse at 75% 25%, rgba(245,215,210,0.45) 0%, transparent 40%),
    linear-gradient(135deg, #ecd5cd 0%, #d8bcb4 30%, #efd6cf 60%, #c8a8a0 100%)`,

  /* ABSOLUTE BLACK — pure deep black with subtle sheen */
  absoluteBlack: `
    radial-gradient(ellipse at 30% 30%, rgba(40,40,45,0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 70%, rgba(20,20,25,0.6) 0%, transparent 50%),
    linear-gradient(135deg, #060608 0%, #0e0e10 50%, #050507 100%)`,

  /* INDIAN GREEN MARBLE — dark green with white veins */
  indianGreen: `
    linear-gradient(110deg, transparent 30%, rgba(220,225,210,0.55) 32%, rgba(245,248,235,0.7) 33%, rgba(220,225,210,0.55) 34%, transparent 36%, transparent 60%, rgba(200,210,195,0.45) 62%, rgba(225,235,215,0.6) 63%, rgba(200,210,195,0.45) 64%, transparent 66%),
    linear-gradient(70deg, transparent 50%, rgba(180,195,170,0.3) 52%, rgba(180,195,170,0.3) 53%, transparent 54%),
    radial-gradient(ellipse at 30% 70%, rgba(40,80,40,0.4) 0%, transparent 50%),
    linear-gradient(135deg, #18341a 0%, #1f4220 30%, #1a3a1c 60%, #244a26 100%)`,

  /* CALACATTA GOLD — bold gold + grey veins on white */
  calacatta: `
    linear-gradient(120deg, transparent 28%, rgba(170,130,50,0.55) 30%, rgba(200,160,80,0.7) 31%, rgba(170,130,50,0.55) 32%, transparent 34%, transparent 56%, rgba(110,110,120,0.45) 58%, rgba(140,140,150,0.55) 59%, rgba(110,110,120,0.45) 60%, transparent 62%),
    linear-gradient(75deg, transparent 45%, rgba(180,140,60,0.3) 47%, rgba(180,140,60,0.3) 48%, transparent 50%),
    radial-gradient(ellipse at 25% 75%, rgba(245,235,200,0.5) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 25%, rgba(255,245,215,0.4) 0%, transparent 35%),
    linear-gradient(135deg, #f5edd6 0%, #ecd9a8 30%, #f6ecca 60%, #d8bf80 100%)`,

  /* TAN BROWN GRANITE — brown with black + cream specks */
  tanBrown: `
    radial-gradient(circle, rgba(20,15,10,0.9) 0.9px, transparent 1.8px) 0 0/22px 22px,
    radial-gradient(circle, rgba(180,150,110,0.6) 0.7px, transparent 1.4px) 11px 11px/28px 28px,
    radial-gradient(circle, rgba(40,28,20,0.7) 0.6px, transparent 1.3px) 5px 17px/35px 35px,
    linear-gradient(135deg, #5a3520 0%, #6e4830 30%, #4e2c1a 60%, #6a4028 100%)`,

  /* WHITE ONYX — translucent cream with banded layers */
  whiteOnyx: `
    linear-gradient(105deg, rgba(245,225,180,0.4) 0%, transparent 25%, rgba(255,235,200,0.5) 40%, transparent 60%, rgba(230,200,160,0.45) 80%, transparent 100%),
    linear-gradient(78deg, rgba(255,240,210,0.3) 0%, transparent 30%, rgba(220,190,150,0.35) 50%, transparent 80%),
    radial-gradient(ellipse at 30% 50%, rgba(255,235,200,0.5) 0%, transparent 60%),
    radial-gradient(ellipse at 75% 70%, rgba(220,185,140,0.45) 0%, transparent 55%),
    linear-gradient(135deg, #f5e6c8 0%, #e8d2a8 30%, #f3e0bc 60%, #d8b888 100%)`,

  /* JAISALMER YELLOW SANDSTONE — uniform golden with grain */
  jaisalmer: `
    radial-gradient(circle, rgba(160,110,40,0.4) 0.5px, transparent 1px) 0 0/8px 8px,
    radial-gradient(circle, rgba(200,150,70,0.35) 0.5px, transparent 1px) 4px 4px/12px 12px,
    linear-gradient(135deg, #d8b870 0%, #e6c682 25%, #c8a85a 50%, #dab872 75%, #c0a560 100%)`,

  /* AGRA RED SANDSTONE — deep red with grain */
  agraRed: `
    radial-gradient(circle, rgba(50,15,10,0.5) 0.5px, transparent 1px) 0 0/9px 9px,
    radial-gradient(circle, rgba(160,60,40,0.3) 0.5px, transparent 1px) 4px 5px/13px 13px,
    linear-gradient(135deg, #8a3a26 0%, #9e4836 25%, #722818 50%, #8c3c2a 75%, #6e2818 100%)`,

  /* GREY QUARTZITE — silver grey with shimmer */
  greyQuartzite: `
    radial-gradient(circle, rgba(220,220,225,0.5) 0.5px, transparent 1px) 0 0/14px 14px,
    radial-gradient(circle, rgba(60,60,65,0.4) 0.5px, transparent 1px) 7px 7px/18px 18px,
    linear-gradient(120deg, transparent 40%, rgba(200,200,210,0.2) 50%, transparent 60%),
    linear-gradient(135deg, #8a8a8e 0%, #9c9ca0 30%, #82828a 60%, #939398 100%)`,

  /* SILVER GREY MARBLE — grey with cloud patterns */
  silverGrey: `
    linear-gradient(115deg, transparent 30%, rgba(80,80,90,0.4) 32%, rgba(110,110,120,0.5) 33%, rgba(80,80,90,0.4) 34%, transparent 36%, transparent 60%, rgba(70,70,80,0.35) 62%, rgba(95,95,105,0.45) 63%, rgba(70,70,80,0.35) 64%, transparent 66%),
    radial-gradient(ellipse at 25% 75%, rgba(180,180,195,0.4) 0%, transparent 40%),
    radial-gradient(ellipse at 75% 25%, rgba(220,220,230,0.4) 0%, transparent 38%),
    linear-gradient(135deg, #b5b5ba 0%, #c7c7cc 30%, #a6a6ac 60%, #bdbdc2 100%)`,

  /* BLUE PEARL GRANITE — dark blue-black with iridescent specks */
  bluePearl: `
    radial-gradient(circle, rgba(120,160,220,0.7) 0.7px, transparent 1.4px) 0 0/22px 22px,
    radial-gradient(circle, rgba(180,200,230,0.5) 0.5px, transparent 1.1px) 11px 11px/28px 28px,
    radial-gradient(circle, rgba(80,120,180,0.6) 0.6px, transparent 1.2px) 5px 17px/30px 30px,
    linear-gradient(135deg, #1a2030 0%, #242a3c 30%, #161c2c 60%, #28304a 100%)`,

  /* EMERALD GREEN ONYX — deep green banded translucent */
  emeraldOnyx: `
    linear-gradient(108deg, rgba(80,150,100,0.4) 0%, transparent 30%, rgba(60,130,80,0.5) 50%, transparent 80%, rgba(90,160,110,0.45) 100%),
    linear-gradient(72deg, rgba(40,90,60,0.4) 0%, transparent 40%, rgba(70,130,90,0.4) 70%, transparent 100%),
    radial-gradient(ellipse at 30% 60%, rgba(120,200,140,0.35) 0%, transparent 50%),
    linear-gradient(135deg, #082015 0%, #143828 30%, #0a281a 60%, #1a4030 100%)`,

  /* NERO MARQUINA — black with bold white veins */
  neroMarquina: `
    linear-gradient(115deg, transparent 28%, rgba(245,245,250,0.85) 30%, rgba(255,255,255,0.95) 31%, rgba(245,245,250,0.85) 32%, transparent 34%, transparent 56%, rgba(230,230,235,0.7) 58%, rgba(250,250,255,0.85) 59%, rgba(230,230,235,0.7) 60%, transparent 62%),
    linear-gradient(74deg, transparent 47%, rgba(220,220,225,0.4) 49%, rgba(220,220,225,0.4) 50%, transparent 52%),
    radial-gradient(ellipse at 30% 70%, rgba(40,40,45,0.5) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0c 0%, #14141a 30%, #0c0c12 60%, #181820 100%)`,

  /* ROSA AURORA — blush pink with delicate white veins */
  rosaAurora: `
    linear-gradient(108deg, transparent 35%, rgba(255,235,232,0.5) 37%, rgba(255,245,242,0.65) 38%, rgba(255,235,232,0.5) 39%, transparent 41%, transparent 67%, rgba(245,225,222,0.4) 69%, rgba(245,225,222,0.4) 70%, transparent 72%),
    radial-gradient(ellipse at 25% 70%, rgba(248,220,216,0.5) 0%, transparent 45%),
    radial-gradient(ellipse at 75% 25%, rgba(245,210,205,0.4) 0%, transparent 40%),
    linear-gradient(135deg, #e8cdc8 0%, #d8b8b2 30%, #ecd0cb 60%, #ccaaa3 100%)`,

  /* BETHEL WHITE — ivory with very fine specks */
  bethelWhite: `
    radial-gradient(circle, rgba(40,40,45,0.6) 0.4px, transparent 0.8px) 0 0/14px 14px,
    radial-gradient(circle, rgba(120,100,80,0.4) 0.4px, transparent 0.8px) 7px 7px/18px 18px,
    linear-gradient(135deg, #ebe5db 0%, #ddd5c8 30%, #ece6dc 60%, #d3c8b8 100%)`,

  /* MAKRANA WHITE — pure subtle white with very fine veins */
  makrana: `
    linear-gradient(110deg, transparent 38%, rgba(180,180,185,0.18) 40%, rgba(180,180,185,0.18) 42%, transparent 44%, transparent 70%, rgba(160,160,165,0.15) 72%, rgba(160,160,165,0.15) 74%, transparent 76%),
    radial-gradient(ellipse at 30% 70%, rgba(245,242,235,0.4) 0%, transparent 45%),
    linear-gradient(135deg, #f4f1ea 0%, #e8e2d6 30%, #f5f0e4 60%, #ddd5c4 100%)`,

  /* KOTA BLUE STONE — uniform blue-grey */
  kotaBlue: `
    radial-gradient(circle, rgba(60,70,75,0.4) 0.5px, transparent 1px) 0 0/10px 10px,
    radial-gradient(circle, rgba(180,190,195,0.3) 0.4px, transparent 0.9px) 5px 5px/14px 14px,
    linear-gradient(135deg, #88909a 0%, #98a0aa 30%, #7a828c 60%, #909aa4 100%)`,

  /* GOLDEN BROWN SANDSTONE */
  goldenBrown: `
    radial-gradient(circle, rgba(50,30,15,0.45) 0.5px, transparent 1px) 0 0/9px 9px,
    radial-gradient(circle, rgba(200,150,80,0.3) 0.5px, transparent 1px) 4px 5px/13px 13px,
    linear-gradient(135deg, #a07238 0%, #b88848 25%, #885e28 50%, #a87838 75%, #946a30 100%)`,

  /* AZURE BLUE QUARTZITE — blue with silver veining */
  azureBlue: `
    linear-gradient(115deg, transparent 32%, rgba(180,200,230,0.5) 34%, rgba(200,220,245,0.6) 35%, rgba(180,200,230,0.5) 36%, transparent 38%, transparent 62%, rgba(160,180,210,0.4) 64%, rgba(180,200,230,0.5) 65%, rgba(160,180,210,0.4) 66%, transparent 68%),
    radial-gradient(circle, rgba(180,210,240,0.4) 0.5px, transparent 1px) 0 0/16px 16px,
    linear-gradient(135deg, #243648 0%, #324658 30%, #1c2c40 60%, #2e4258 100%)`,

  /* RAINFOREST GREEN — green with bold white + gold veining */
  rainforestGreen: `
    linear-gradient(112deg, transparent 26%, rgba(245,245,235,0.7) 28%, rgba(255,255,245,0.85) 29%, rgba(245,245,235,0.7) 30%, transparent 32%, transparent 54%, rgba(220,180,80,0.55) 56%, rgba(240,200,100,0.65) 57%, rgba(220,180,80,0.55) 58%, transparent 60%),
    linear-gradient(75deg, transparent 48%, rgba(230,230,220,0.4) 50%, rgba(230,230,220,0.4) 51%, transparent 53%),
    radial-gradient(ellipse at 30% 70%, rgba(60,90,50,0.5) 0%, transparent 50%),
    linear-gradient(135deg, #1a3818 0%, #28482a 30%, #1c3e1e 60%, #305030 100%)`,
};

const PRODUCTS = [
  { id:1,  name:'Italian Statuario Marble',   type:'marble',    color:'white',  finish:'polished',    price:450, origin:'Italy',     popular:true,  newest:false,
    apps:['flooring','wall-cladding','kitchen-counter','bathroom'],
    desc:'The pinnacle of marble elegance. Statuario features bold grey veins sweeping across a brilliant white background. Quarried in Carrara, Italy, it has adorned the world\'s finest residences and luxury hotels for centuries.',
    dims:['24×24 in','24×48 in','12×24 in','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.statuario },

  { id:2,  name:'Carrara White Marble',        type:'marble',    color:'white',  finish:'honed',       price:320, origin:'Italy',     popular:true,  newest:false,
    apps:['flooring','bathroom','wall-cladding'],
    desc:'Soft white with delicate grey veining. Carrara is the world\'s most recognised marble, used in architecture since Roman times. Honed finish gives a sophisticated matte elegance perfect for bathrooms and feature walls.',
    dims:['24×24 in','24×48 in','12×12 in'],  thickness:['18mm','20mm'],
    grad: TEX.carrara },

  { id:3,  name:'Black Galaxy Granite',        type:'granite',   color:'black',  finish:'polished',    price:220, origin:'India',     popular:true,  newest:false,
    apps:['flooring','kitchen-counter','wall-cladding','outdoor'],
    desc:'India\'s most iconic granite. Deep black background studded with golden and silver specks resembling a galaxy. Quarried in Andhra Pradesh, it\'s a perennial favourite for kitchen counters and lobby floors in luxury hotels.',
    dims:['24×24 in','24×48 in','Slab'],  thickness:['18mm','20mm'],
    grad: TEX.blackGalaxy },

  { id:4,  name:'Kashmir White Granite',       type:'granite',   color:'white',  finish:'polished',    price:185, origin:'India',     popular:true,  newest:false,
    apps:['kitchen-counter','bathroom','flooring'],
    desc:'A beloved Indian granite featuring a creamy white to light grey background with dramatic black and garnet red mineral deposits. Quarried in Tamil Nadu, Kashmir White offers excellent hardness and low maintenance for kitchen counters.',
    dims:['24×24 in','Slab','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.kashmirWhite },

  { id:5,  name:'Rajasthan Pink Marble',       type:'marble',    color:'pink',   finish:'polished',    price:160, origin:'India',     popular:false, newest:false,
    apps:['flooring','wall-cladding','outdoor'],
    desc:'Warm pink tones with subtle veining make Rajasthan Pink marble a popular choice for residential flooring and exterior cladding. Quarried in Banswara, Rajasthan, it\'s durable, readily available and competitively priced.',
    dims:['24×24 in','12×24 in','Custom'],  thickness:['18mm'],
    grad: TEX.pinkMarble },

  { id:6,  name:'Absolute Black Granite',      type:'granite',   color:'black',  finish:'polished',    price:195, origin:'India',     popular:false, newest:false,
    apps:['kitchen-counter','flooring','wall-cladding','outdoor'],
    desc:'Pure jet-black granite with no visible grain or pattern. Absolute Black is quarried in Karnataka and is the go-to choice for minimalist contemporary interiors, kitchen counters and memorial stones. Extremely hard and durable.',
    dims:['24×24 in','24×48 in','Slab','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.absoluteBlack },

  { id:7,  name:'Indian Green Marble',         type:'marble',    color:'green',  finish:'polished',    price:290, origin:'India',     popular:false, newest:false,
    apps:['flooring','wall-cladding','bathroom'],
    desc:'Rich forest green tones with contrasting white veins give this marble a striking tropical character. Quarried in Rajasthan, Indian Green is widely used in luxury hotel lobbies, feature walls and bathroom accent panels.',
    dims:['24×24 in','12×24 in'],  thickness:['18mm'],
    grad: TEX.indianGreen },

  { id:8,  name:'Calacatta Gold Marble',       type:'marble',    color:'white',  finish:'polished',    price:520, origin:'Italy',     popular:true,  newest:true,
    apps:['wall-cladding','bathroom','kitchen-counter'],
    desc:'The crown jewel of Italian marble. Calacatta Gold features a brilliant white background with dramatic, thick gold and grey veins running diagonally across each slab. No two slabs are alike. Perfect for statement feature walls and vanity tops.',
    dims:['24×48 in','Slab','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.calacatta },

  { id:9,  name:'Tan Brown Granite',           type:'granite',   color:'brown',  finish:'polished',    price:210, origin:'India',     popular:false, newest:false,
    apps:['kitchen-counter','flooring','outdoor'],
    desc:'Warm chocolate brown base with black and grey mineral flecks. Tan Brown granite from Andhra Pradesh pairs beautifully with wooden cabinetry and warm-toned interiors. Exceptionally durable and stain-resistant.',
    dims:['24×24 in','Slab','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.tanBrown },

  { id:10, name:'White Onyx',                  type:'onyx',      color:'white',  finish:'polished',    price:680, origin:'Iran',      popular:true,  newest:true,
    apps:['wall-cladding','bathroom'],
    desc:'Translucent creamy white onyx that glows beautifully when backlit. Iranian White Onyx is used in luxury spa areas, bar counters and feature walls. Each slab has unique flowing patterns with honey, amber and white tones intermingled.',
    dims:['24×48 in','Slab'],  thickness:['15mm','18mm'],
    grad: TEX.whiteOnyx },

  { id:11, name:'Jaisalmer Yellow Sandstone',  type:'sandstone', color:'beige',  finish:'brushed',     price:120, origin:'India',     popular:false, newest:false,
    apps:['outdoor','wall-cladding','flooring'],
    desc:'Classic golden-yellow sandstone from the deserts of Jaisalmer, Rajasthan. Its warm honey tones make it ideal for exterior cladding, garden paths and heritage-style architecture. Brushed finish provides excellent grip underfoot.',
    dims:['12×12 in','12×24 in','24×24 in'],  thickness:['20mm','25mm'],
    grad: TEX.jaisalmer },

  { id:12, name:'Agra Red Sandstone',          type:'sandstone', color:'brown',  finish:'sandblasted', price:135, origin:'India',     popular:false, newest:false,
    apps:['outdoor','wall-cladding'],
    desc:'Deep brick-red sandstone sourced from the same quarries used in the Agra Fort and Fatehpur Sikri. Sandblasted finish reveals the stone\'s natural texture and grain. Perfect for Mughal-inspired architecture and exterior cladding.',
    dims:['12×24 in','24×24 in','Custom'],  thickness:['20mm','25mm'],
    grad: TEX.agraRed },

  { id:13, name:'Grey Quartzite',              type:'quartzite', color:'grey',   finish:'honed',       price:175, origin:'Brazil',    popular:false, newest:false,
    apps:['flooring','outdoor','wall-cladding'],
    desc:'Silver-grey quartzite with subtle shimmer from natural quartz inclusions. Harder than granite, quartzite is extremely durable and scratch-resistant. Honed finish brings out its natural cool grey tones for contemporary interiors.',
    dims:['24×24 in','24×48 in'],  thickness:['18mm','20mm'],
    grad: TEX.greyQuartzite },

  { id:14, name:'Silver Grey Marble',          type:'marble',    color:'grey',   finish:'polished',    price:320, origin:'Turkey',    popular:true,  newest:false,
    apps:['flooring','bathroom','wall-cladding'],
    desc:'Smooth silver-grey marble with delicate lighter and darker cloud-like formations. Imported from Turkey, Silver Grey is a versatile stone that works in both classic and contemporary settings. Particularly popular for master bathrooms.',
    dims:['24×24 in','24×48 in','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.silverGrey },

  { id:15, name:'Blue Pearl Granite',          type:'granite',   color:'multi',  finish:'polished',    price:285, origin:'Norway',    popular:true,  newest:true,
    apps:['kitchen-counter','wall-cladding','flooring'],
    desc:'Stunning Norwegian granite with iridescent blue, silver and grey labradorescence that shimmers in changing light. Blue Pearl is a premium import used in five-star hotel lobbies, executive offices and luxury kitchen counters.',
    dims:['24×24 in','Slab'],  thickness:['18mm','20mm'],
    grad: TEX.bluePearl },

  { id:16, name:'Emerald Green Onyx',          type:'onyx',      color:'green',  finish:'polished',    price:750, origin:'Pakistan',  popular:false, newest:true,
    apps:['wall-cladding','bathroom'],
    desc:'Rare translucent deep green onyx with lighter apple-green and white banding. When backlit, Emerald Green Onyx creates a breathtaking stained-glass effect. Exclusively used in ultra-luxury projects — bar counters, reception desks and spa cabins.',
    dims:['Slab','Custom'],  thickness:['15mm','18mm'],
    grad: TEX.emeraldOnyx },

  { id:17, name:'Nero Marquina Marble',        type:'marble',    color:'black',  finish:'polished',    price:410, origin:'Spain',     popular:true,  newest:false,
    apps:['bathroom','wall-cladding','kitchen-counter'],
    desc:'Striking jet-black Spanish marble with brilliant white veining. Nero Marquina is the definitive luxury black marble, used in 5-star hotel bathrooms and high-end residential projects worldwide. The contrast between black and white is dramatic and timeless.',
    dims:['24×24 in','24×48 in','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.neroMarquina },

  { id:18, name:'Rosa Aurora Marble',          type:'marble',    color:'pink',   finish:'polished',    price:390, origin:'Portugal',  popular:false, newest:true,
    apps:['bathroom','wall-cladding','flooring'],
    desc:'Delicate blush pink Portuguese marble with a warm rosy tone and fine white veining. Rosa Aurora brings feminine elegance to bathroom vanities, feature walls and flooring. A favourite for luxury residential master suites.',
    dims:['24×24 in','12×24 in','Custom'],  thickness:['18mm'],
    grad: TEX.rosaAurora },

  { id:19, name:'Bethel White Granite',        type:'granite',   color:'white',  finish:'brushed',     price:165, origin:'India',     popular:false, newest:false,
    apps:['outdoor','flooring','kitchen-counter'],
    desc:'Light ivory-white granite with fine black and grey speckling from Tamil Nadu. Bethel White is widely used for outdoor flooring due to its slip-resistant brushed finish and excellent weather resistance. A cost-effective alternative to Italian marble.',
    dims:['24×24 in','12×12 in'],  thickness:['18mm','20mm'],
    grad: TEX.bethelWhite },

  { id:20, name:'Makrana White Marble',        type:'marble',    color:'white',  finish:'polished',    price:280, origin:'India',     popular:true,  newest:false,
    apps:['flooring','wall-cladding','bathroom'],
    desc:'The stone that built the Taj Mahal. Makrana marble from Rajasthan is India\'s finest white marble — pure, translucent and extremely durable. With 2,000+ years of quarrying history, it\'s the most prestigious Indian marble available.',
    dims:['24×24 in','24×48 in','Custom'],  thickness:['18mm','20mm'],
    grad: TEX.makrana },

  { id:21, name:'Kota Blue Stone',             type:'sandstone', color:'beige',  finish:'honed',       price:95,  origin:'India',     popular:false, newest:false,
    apps:['flooring','outdoor'],
    desc:'Fine-grained blue-grey limestone from Kota, Rajasthan. One of India\'s most cost-effective and durable flooring options, used in schools, hospitals and commercial buildings. Honed to a smooth surface with natural earthy tones.',
    dims:['12×12 in','12×24 in','24×24 in'],  thickness:['20mm','25mm'],
    grad: TEX.kotaBlue },

  { id:22, name:'Golden Brown Sandstone',      type:'sandstone', color:'brown',  finish:'brushed',     price:140, origin:'India',     popular:false, newest:false,
    apps:['outdoor','wall-cladding'],
    desc:'Rich golden-brown sandstone from Dholpur, Rajasthan with subtle rust undertones. Widely used for exterior building facades, garden walls and landscaping in North India. Brushed finish reveals beautiful natural grain patterns.',
    dims:['12×24 in','24×24 in','Custom'],  thickness:['20mm','25mm'],
    grad: TEX.goldenBrown },

  { id:23, name:'Azure Blue Quartzite',        type:'quartzite', color:'multi',  finish:'polished',    price:340, origin:'Brazil',    popular:false, newest:true,
    apps:['wall-cladding','bathroom','kitchen-counter'],
    desc:'Exotic Brazilian quartzite with stunning blue and silver tones created by mineral inclusions. Azure Blue Quartzite has become a top choice for luxury kitchen islands and bathroom feature walls. Harder than granite, highly stain-resistant.',
    dims:['24×48 in','Slab'],  thickness:['18mm','20mm'],
    grad: TEX.azureBlue },

  { id:24, name:'Rainforest Green Marble',     type:'marble',    color:'green',  finish:'polished',    price:420, origin:'India',     popular:true,  newest:true,
    apps:['wall-cladding','bathroom','flooring'],
    desc:'Dramatic Indian marble with a deep forest green background and bold white and gold veining that resembles an aerial view of a rainforest. Each slab is unique. Used in luxury hotel lobbies and high-end residential dining rooms for a statement look.',
    dims:['24×24 in','24×48 in','Slab'],  thickness:['18mm','20mm'],
    grad: TEX.rainforestGreen },
];

/* ── State ──────────────────────────────────────────────── */
let activeFilters = {
  type:    [],
  color:   [],
  finish:  [],
  app:     [],
  maxPrice: 1000,
};
let sortOrder   = 'popular';
let compareList = [];
let filtered    = [...PRODUCTS];

/* ── DOM refs ───────────────────────────────────────────── */
const grid         = document.getElementById('productsGrid');
const countEl      = document.getElementById('productCount');
const sortSel      = document.getElementById('sortSelect');
const priceValEl   = document.getElementById('priceVal');
const priceRange   = document.getElementById('priceRange');
const compareBar   = document.getElementById('compareBar');
const compareSlots = document.querySelectorAll('.compare-item-slot');
const compareCount = document.getElementById('compareCount');
const clearBtn     = document.getElementById('clearFilters');
const compareBtn   = document.getElementById('doCompare');

/* ── URL param pre-filters ──────────────────────────────── */
(function applyURLParams() {
  const params = new URLSearchParams(window.location.search);
  const type   = params.get('type');
  const finish = params.get('finish');
  const app    = params.get('app');
  if (type)   { activeFilters.type.push(type);   tickCheckbox('type', type); }
  if (finish) { activeFilters.finish.push(finish); tickCheckbox('finish', finish); }
  if (app)    { activeFilters.app.push(app);       tickCheckbox('app', app); }
})();

function tickCheckbox(group, value) {
  const cb = document.querySelector(`input[data-group="${group}"][value="${value}"]`);
  if (cb) cb.checked = true;
}

/* ── Filter checkboxes ──────────────────────────────────── */
document.querySelectorAll('.filter-cb').forEach(cb => {
  cb.addEventListener('change', () => {
    const group = cb.dataset.group;
    const val   = cb.value;
    if (cb.checked) {
      if (!activeFilters[group]) activeFilters[group] = [];
      activeFilters[group].push(val);
    } else {
      activeFilters[group] = activeFilters[group].filter(v => v !== val);
    }
    applyFilters();
  });
});

/* ── Price slider ───────────────────────────────────────── */
if (priceRange) {
  priceRange.addEventListener('input', () => {
    activeFilters.maxPrice = parseInt(priceRange.value, 10);
    priceValEl.textContent = '₹' + activeFilters.maxPrice;
    applyFilters();
  });
}

/* ── Sort ───────────────────────────────────────────────── */
if (sortSel) {
  sortSel.addEventListener('change', () => {
    sortOrder = sortSel.value;
    renderProducts();
  });
}

/* ── Clear filters ──────────────────────────────────────── */
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    activeFilters = { type:[], color:[], finish:[], app:[], maxPrice:1000 };
    document.querySelectorAll('.filter-cb').forEach(cb => cb.checked = false);
    if (priceRange) { priceRange.value = 1000; priceValEl.textContent = '₹1000'; }
    applyFilters();
  });
}

/* ── Filter logic ───────────────────────────────────────── */
function applyFilters() {
  filtered = PRODUCTS.filter(p => {
    if (activeFilters.type.length   && !activeFilters.type.includes(p.type))     return false;
    if (activeFilters.color.length  && !activeFilters.color.includes(p.color))   return false;
    if (activeFilters.finish.length && !activeFilters.finish.includes(p.finish)) return false;
    if (activeFilters.app.length    && !p.apps.some(a => activeFilters.app.includes(a))) return false;
    if (p.price > activeFilters.maxPrice) return false;
    return true;
  });
  renderProducts();
}

/* ── Sort logic ─────────────────────────────────────────── */
function getSorted(arr) {
  const a = [...arr];
  switch (sortOrder) {
    case 'price-asc':  return a.sort((x,y) => x.price - y.price);
    case 'price-desc': return a.sort((x,y) => y.price - x.price);
    case 'newest':     return a.sort((x,y) => (y.newest?1:0)-(x.newest?1:0));
    default:           return a.sort((x,y) => (y.popular?1:0)-(x.popular?1:0));
  }
}

/* ── Render ─────────────────────────────────────────────── */
function renderProducts() {
  const sorted = getSorted(filtered);
  if (countEl) countEl.textContent = sorted.length;

  if (!grid) return;
  if (sorted.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;">
      <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
      <h3 style="color:var(--white);margin-bottom:0.5rem;">No products match your filters</h3>
      <p>Try adjusting your filters or <button onclick="document.getElementById('clearFilters').click()" style="color:var(--gold);background:none;border:none;cursor:pointer;font-size:inherit;text-decoration:underline;">clear all filters</button></p>
    </div>`;
    return;
  }

  grid.innerHTML = sorted.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        <div class="product-img-bg" style="background:${p.grad};"></div>
        ${p.popular ? '<div class="product-badge">Popular</div>' : ''}
        ${p.newest  ? '<div class="product-badge" style="left:auto;right:0.75rem;background:var(--bg3);color:var(--gold);border:1px solid var(--gold)">New</div>' : ''}
        <div class="product-compare-check ${compareList.includes(p.id)?'checked':''}" data-id="${p.id}" title="Add to compare">✓</div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="product-type">${capitalize(p.type)}</span>
          <span class="product-origin">🌍 ${p.origin}</span>
        </div>
        <div class="product-name">${p.name}</div>
        <div class="product-attrs">
          <span class="product-attr">${capitalize(p.finish)}</span>
          <span class="product-attr">${capitalize(p.color)}</span>
        </div>
        <div class="product-footer">
          <div>
            <div class="product-price">₹${p.price}<span class="product-price-unit">/sqft</span></div>
          </div>
          <button class="btn btn-outline btn-sm view-btn" data-id="${p.id}">View Details</button>
        </div>
      </div>
    </div>
  `).join('');

  /* attach events */
  grid.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openModal(parseInt(btn.dataset.id)); });
  });
  grid.querySelectorAll('.product-compare-check').forEach(el => {
    el.addEventListener('click', e => { e.stopPropagation(); toggleCompare(parseInt(el.dataset.id)); });
  });
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g,' '); }

/* ── Product Detail Modal ───────────────────────────────── */
const modalOverlay = document.getElementById('productModal');
const modalClose   = document.getElementById('modalClose');

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !modalOverlay) return;

  document.getElementById('mName').textContent    = p.name;
  document.getElementById('mType').textContent    = p.name;
  document.getElementById('mPreview').style.background = p.grad;
  document.getElementById('mMaterial').textContent = capitalize(p.type);
  document.getElementById('mOrigin').textContent   = p.origin;
  document.getElementById('mFinish').textContent   = capitalize(p.finish);
  document.getElementById('mColor').textContent    = capitalize(p.color);
  document.getElementById('mPrice').textContent    = '₹' + p.price + ' per sqft';
  document.getElementById('mDims').textContent     = p.dims.join(', ');
  document.getElementById('mThick').textContent    = p.thickness.join(', ');
  document.getElementById('mApps').innerHTML       = p.apps.map(a => `<span class="modal-tag">${capitalize(a)}</span>`).join('');
  document.getElementById('mDesc').textContent     = p.desc;

  const enqBtn = document.getElementById('mEnquire');
  if (enqBtn) enqBtn.onclick = () => {
    window.location.href = `contact.html?product=${encodeURIComponent(p.name)}#enquiry`;
  };
  const waBtn = document.getElementById('mWhatsApp');
  if (waBtn) waBtn.href = `https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}%20at%20%E2%82%B9${p.price}%2Fsqft.%20Please%20share%20availability.`;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Compare Feature ────────────────────────────────────── */
function toggleCompare(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(x => x !== id);
  } else {
    if (compareList.length >= 3) {
      showToast('You can compare up to 3 products. Remove one first.');
      return;
    }
    compareList.push(id);
  }
  updateCompareBar();
  renderProducts();
}

function updateCompareBar() {
  if (!compareBar) return;
  compareBar.classList.toggle('visible', compareList.length > 0);
  if (compareCount) compareCount.textContent = `${compareList.length} of 3 selected`;

  compareSlots.forEach((slot, i) => {
    const pid = compareList[i];
    if (pid) {
      const p = PRODUCTS.find(x => x.id === pid);
      slot.classList.add('filled');
      slot.innerHTML = `<span>${p.name}</span><div class="compare-item-remove" data-id="${pid}">×</div>`;
      slot.querySelector('.compare-item-remove').addEventListener('click', () => toggleCompare(pid));
    } else {
      slot.classList.remove('filled');
      slot.textContent = 'Empty slot';
    }
  });
}

if (compareBtn) {
  compareBtn.addEventListener('click', () => {
    if (compareList.length < 2) { showToast('Select at least 2 products to compare.'); return; }
    openCompareModal();
  });
}

function openCompareModal() {
  const items = compareList.map(id => PRODUCTS.find(p => p.id === id));
  const cm    = document.getElementById('compareModal');
  if (!cm) return;

  const colHeader = items.map(p =>
    `<th><div class="compare-stone-prev" style="background:${p.grad};"></div>${p.name}</th>`
  ).join('');

  const rows = [
    ['Material', p => capitalize(p.type)],
    ['Origin',   p => p.origin],
    ['Finish',   p => capitalize(p.finish)],
    ['Color',    p => capitalize(p.color)],
    ['Price',    p => '₹' + p.price + '/sqft'],
    ['Sizes',    p => p.dims.join(', ')],
    ['Thickness',p => p.thickness.join(', ')],
    ['Applications', p => p.apps.map(a => capitalize(a)).join(', ')],
  ].map(([label, fn]) =>
    `<tr><td class="row-label">${label}</td>${items.map(p => `<td>${fn(p)}</td>`).join('')}</tr>`
  ).join('');

  document.getElementById('compareTableBody').innerHTML =
    `<tr><td class="row-label">Stone</td>${colHeader}</tr>${rows}`;

  cm.classList.add('active');
  document.body.style.overflow = 'hidden';
}

const compareModalClose = document.getElementById('compareModalClose');
const compareModal      = document.getElementById('compareModal');
if (compareModalClose) compareModalClose.addEventListener('click', () => { compareModal.classList.remove('active'); document.body.style.overflow = ''; });
if (compareModal) compareModal.addEventListener('click', e => { if (e.target === compareModal) { compareModal.classList.remove('active'); document.body.style.overflow = ''; }});

/* ── Toast ──────────────────────────────────────────────── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:6rem;left:50%;transform:translateX(-50%);background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:0.75rem 1.5rem;border-radius:4px;font-size:0.85rem;z-index:2000;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.4);';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2800);
}

/* ── Mobile Sidebar Drawer ──────────────────────────────── */
(function () {
  const toggleBtn = document.getElementById('filterToggle');
  const closeBtn  = document.getElementById('sidebarClose');
  const overlay   = document.getElementById('sidebarOverlay');
  const sidebar   = document.getElementById('filterSidebar');
  function openSidebar()  { sidebar?.classList.add('open'); overlay?.classList.add('visible'); document.body.style.overflow = 'hidden'; }
  function closeSidebar() { sidebar?.classList.remove('open'); overlay?.classList.remove('visible'); document.body.style.overflow = ''; }
  toggleBtn?.addEventListener('click', openSidebar);
  closeBtn?.addEventListener('click',  closeSidebar);
  overlay?.addEventListener('click',   closeSidebar);
  /* close drawer when a filter changes on mobile */
  document.querySelectorAll('.filter-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      if (window.innerWidth <= 768) setTimeout(closeSidebar, 400);
    });
  });
})();

/* ── Active filter badge ────────────────────────────────── */
function updateFilterBadge() {
  const badge = document.getElementById('activeFilterBadge');
  if (!badge) return;
  const count = activeFilters.type.length + activeFilters.color.length +
    activeFilters.finish.length + activeFilters.app.length +
    (activeFilters.maxPrice < 1000 ? 1 : 0);
  badge.style.display = count > 0 ? 'inline-block' : 'none';
  badge.textContent   = count + ' filter' + (count !== 1 ? 's' : '') + ' active';
}

/* Wrap renderProducts to also refresh badge */
const _origRenderProducts = renderProducts;
renderProducts = function () { _origRenderProducts(); updateFilterBadge(); };

/* ── Init ───────────────────────────────────────────────── */
applyFilters();
