import { useState, useEffect } from "react";

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');`;

const gs = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--ink:#19324A;--ink-deep:#19324A;--coral:#688276;--coral-soft:#E7EFEB;--mint:#E3F1EB;--paper:#F7F9F8;--slate:#5B6872;--line:rgba(25,50,74,0.12);}
html{scroll-behavior:smooth;}
body{font-family:'Manrope',sans-serif;background:var(--paper);color:var(--ink);}
h1,h2,h3,h4{font-family:'DM Serif Display',serif;font-weight:400;}
p{line-height:1.75;font-size:0.98rem;}
a{text-decoration:none;color:inherit;}
.btn-p{background:var(--coral);color:#fff;font-family:'Manrope',sans-serif;font-weight:800;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;padding:14px 24px;border:none;border-radius:999px;cursor:pointer;transition:transform 0.2s,background 0.2s,box-shadow 0.2s;box-shadow:0 8px 18px rgba(255,107,87,0.22);}
.btn-p:hover{background:#e95643;transform:translateY(-2px);box-shadow:0 12px 22px rgba(255,107,87,0.3);}
.btn-o{border:1px solid var(--coral);color:var(--coral);background:transparent;font-family:'Manrope',sans-serif;font-weight:800;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;padding:13px 24px;border-radius:999px;cursor:pointer;transition:all 0.2s;}
.btn-o:hover{background:var(--coral);color:#fff;border-color:var(--coral);}
.sl{font-family:'Manrope',sans-serif;font-size:0.65rem;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:var(--coral);margin-bottom:10px;display:block;}
.gl{width:54px;height:4px;background:var(--coral);border-radius:9px;margin-bottom:22px;}
.con{max-width:1240px;margin:0 auto;padding:0 52px;}
.card{background:#fff;border:1px solid var(--line);border-top:3px solid var(--coral);border-radius:12px;padding:28px 24px;box-shadow:0 10px 28px rgba(16,42,67,0.06);transition:transform 0.2s,box-shadow 0.2s;}
.card:hover{transform:translateY(-5px);box-shadow:0 16px 34px rgba(16,42,67,0.1);}
.ph{background:#EAF2EE!important;padding:88px 52px 68px;position:relative;overflow:hidden;}
.ph::before{display:none;}
.ph .bc{font-family:'Manrope',sans-serif;font-size:0.65rem;letter-spacing:0.1em;color:#688276;margin-bottom:14px;text-transform:uppercase;}
.ph h1{color:var(--ink);font-size:clamp(2rem,4vw,3.4rem);font-weight:400;line-height:1.1;position:relative;z-index:2;}
.ph h1 em{color:#557467;}
.skip-link{position:absolute;left:16px;top:-48px;background:var(--coral);color:#fff;padding:10px 16px;font-family:'Manrope',sans-serif;font-weight:700;z-index:2000;}
.brand-logo{width:56px;height:56px;object-fit:contain;display:block;flex-shrink:0;}
.brand-lockup{display:flex;align-items:center;gap:12px;}
.brand-name{font-family:'DM Serif Display',serif;font-size:1.35rem;color:var(--ink);line-height:1;}
.brand-subtitle{font-family:'Manrope',sans-serif;font-size:0.47rem;letter-spacing:0.1em;color:#A88742;text-transform:uppercase;margin-top:6px;white-space:nowrap;}
.modern-nav .nav-main{padding-top:10px!important;padding-bottom:10px!important;}
.modern-nav .nav-links{padding:8px 10px;border-radius:999px;gap:16px!important;}
.modern-nav .nav-links .btn-p{padding:10px 18px!important;}
.modern-nav{color:var(--ink);}
.modern-nav .nav-main{background:rgba(255,255,255,0.94);backdrop-filter:blur(14px);}
.modern-nav .nav-main>div>div>div:last-child{color:var(--ink)!important;}
.modern-nav .nav-links span{color:var(--ink)!important;}
.modern-nav .nav-links span[style*="C9A84C"]{color:var(--coral)!important;}
.modern-nav .nav-toggle{border-color:var(--coral);color:var(--coral);}
.modern-nav .nav-links{background:#fff;}
.modern-nav .nav-utility{background:var(--mint)!important;}
.modern-nav .nav-utility span{color:var(--ink)!important;}
.modern-nav .nav-utility span[style*="071429"]{background:var(--ink)!important;color:#fff!important;}
.modern-nav .top-join{background:var(--coral)!important;color:#fff!important;border-radius:999px;padding:7px 16px!important;box-shadow:0 5px 12px rgba(174,48,64,0.22);}
.modern-nav .utility-label{font-weight:800!important;letter-spacing:0.04em;}
.modern-home-grid>div>div,.modern-partner-grid>div{background:#fff!important;}
.modern-callout{background:var(--coral-soft)!important;right:9%!important;bottom:28px!important;z-index:3;}
.modern-hero-mark{position:absolute;right:9%;top:23%;width:360px;height:430px;background:rgba(255,255,255,0.72);border:1px solid rgba(25,50,74,0.1);border-radius:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 26px 60px rgba(25,50,74,0.12);transform:rotate(3deg);}
.modern-hero-mark::before{content:'';position:absolute;inset:14px;border:1px solid rgba(201,79,69,0.2);border-radius:20px;}
.modern-hero-mark img{width:285px;height:285px;object-fit:contain;position:relative;z-index:1;}
.modern-hero-mark-label{font-family:'Manrope',sans-serif;font-size:0.64rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:var(--ink);position:relative;z-index:1;margin-top:8px;}
.modern-hero-mark-line{width:42px;height:3px;background:var(--coral);border-radius:9px;margin:12px 0 0;position:relative;z-index:1;}
.modern-stat-grid{background:var(--mint)!important;border-top-color:rgba(25,50,74,0.08)!important;}
.modern-stat-grid>div{border-right-color:rgba(25,50,74,0.1)!important;}
.modern-stat-grid>div>div:first-child{color:var(--coral)!important;}
.modern-stat-grid>div>div:last-child{color:var(--ink)!important;}
.modern-ecosystem{background:var(--paper)!important;}
.modern-ecosystem h2{color:var(--ink)!important;}
.modern-ecosystem> .con>p{color:var(--slate)!important;}
.modern-ecosystem .modern-partner-grid>div{background:#fff!important;border-top-color:var(--coral)!important;color:var(--ink)!important;}
.modern-ecosystem .modern-partner-grid>div div{color:var(--ink)!important;}
.modern-ecosystem .modern-partner-grid>div span{color:var(--slate)!important;}
.modern-ecosystem .modern-partner-grid>div>div:first-child{color:var(--coral)!important;}
.modern-cta{background:var(--coral-soft)!important;}
.modern-cta h2,.modern-cta p{color:var(--ink)!important;}
.modern-cta button:first-child{background:var(--ink)!important;color:#fff!important;}
.modern-cta button:last-child{border-color:var(--ink)!important;color:var(--ink)!important;}
.partnership-heading{color:var(--ink)!important;}
.partnership-heading em{color:var(--coral)!important;}
.partnership-card{background:#fff!important;color:var(--ink)!important;border-top-color:var(--coral)!important;}
.partnership-card h3{color:var(--ink)!important;}
.partnership-card p{color:var(--slate)!important;}
.partnership-card .partner-name{color:var(--coral)!important;}
.partnership-hierarchy{background:var(--ink)!important;}
.services-intro{grid-template-columns:1fr 1.25fr!important;}
.services-categories{grid-template-columns:repeat(3,1fr)!important;gap:12px!important;align-content:start;}
.services-categories>div{background:transparent!important;border:0;}
.services-category{background:var(--mint);border:1px solid rgba(25,50,74,0.1);border-radius:10px;text-align:left;min-height:70px;padding:14px 16px;font-family:'Manrope',sans-serif;font-size:0.72rem;font-weight:800;letter-spacing:0.03em;color:var(--ink);cursor:pointer;transition:background 0.2s,transform 0.2s,border-color 0.2s;}
.services-category:hover{transform:translateY(-2px);border-color:var(--coral);}
.services-category.active{background:var(--ink);color:#fff;border-color:var(--ink);box-shadow:0 8px 16px rgba(25,50,74,0.14);}
.service-results-heading{display:flex;align-items:end;gap:18px;flex-wrap:wrap;margin:0 0 22px;padding-top:8px;scroll-margin-top:120px;}
.service-results-heading .sl{margin:0;flex-basis:100%;}
.service-results-heading h2{font-size:clamp(1.5rem,2.6vw,2rem);color:var(--ink);}
.service-results-heading button{border:0;background:transparent;color:var(--coral);font-family:'Manrope',sans-serif;font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;cursor:pointer;padding:0 0 4px;border-bottom:1px solid var(--coral);}
.membership-modal{position:fixed;inset:0;z-index:1200;background:rgba(25,50,74,0.58);display:flex;align-items:center;justify-content:center;padding:22px;}
.membership-form{position:relative;background:#fff;width:min(560px,100%);max-height:calc(100vh - 44px);overflow:auto;border-top:4px solid var(--coral);border-radius:16px;padding:34px;box-shadow:0 24px 70px rgba(25,50,74,0.24);}
.membership-form-close{position:absolute;top:16px;right:18px;border:0;background:transparent;color:var(--ink);font-size:1.8rem;line-height:1;cursor:pointer;}
.membership-form h2,.membership-success h2{font-size:clamp(1.7rem,3vw,2.3rem);color:var(--ink);margin-bottom:8px;}
.membership-form-intro{color:var(--slate);margin-bottom:22px;}
.membership-form label{display:block;color:var(--ink);font-family:'Manrope',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:14px;}
.membership-form input,.membership-form textarea{display:block;width:100%;margin-top:7px;border:1px solid var(--line);border-radius:8px;background:var(--paper);padding:11px 12px;color:var(--ink);font:500 0.9rem 'Manrope',sans-serif;outline:none;}
.membership-form input:focus,.membership-form textarea:focus{border-color:var(--coral);box-shadow:0 0 0 3px var(--coral-soft);}
.membership-form textarea{resize:vertical;margin-bottom:8px;}
.membership-success p{color:var(--slate);margin:0 0 24px;}
.membership-links{display:grid;gap:10px;margin-top:20px;}
.membership-link{display:flex;justify-content:space-between;align-items:center;gap:16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:14px 16px;color:var(--ink);font:700 0.78rem 'Manrope',sans-serif;transition:transform 0.2s,border-color 0.2s,background 0.2s;}
.membership-link:hover{transform:translateY(-2px);border-color:var(--coral);background:var(--coral-soft);}
.membership-link span{color:var(--coral);font-size:0.65rem;letter-spacing:0.04em;text-transform:uppercase;white-space:nowrap;}
.membership-contact-note{background:var(--paper);border-radius:10px;padding:18px;margin-top:20px;}
.membership-contact-note p{color:var(--slate);font-size:0.9rem;margin-bottom:18px;}
.resource-card{cursor:default!important;}
.resource-access{border:0;background:transparent;color:var(--coral);font-family:'Manrope',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:0;cursor:pointer;}
.resource-access:hover{text-decoration:underline;}
.resource-access:focus-visible{outline:2px solid var(--coral);outline-offset:4px;}
.product-preview{height:260px;border-radius:12px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:22px;}
.product-preview img{width:100%;height:100%;object-fit:contain;display:block;}
.product-preview-fallback{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--slate);}
.product-preview-fallback span{font-size:3.5rem;}
.product-preview-fallback small{font:700 0.62rem 'Manrope',sans-serif;letter-spacing:0.08em;text-transform:uppercase;}
.newsroom-intro{display:grid;grid-template-columns:1.4fr 0.8fr;gap:28px;align-items:end;margin-bottom:34px;}
.newsroom-intro h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--ink);line-height:1.15;margin-bottom:12px;}
.newsroom-intro p{color:var(--slate);max-width:650px;}
.newsroom-note{background:var(--mint);border-left:4px solid var(--coral);padding:20px 22px;display:grid;gap:8px;color:var(--ink);}
.newsroom-note strong{font:800 0.68rem 'Manrope',sans-serif;letter-spacing:0.1em;text-transform:uppercase;}
.newsroom-note span{font-size:0.84rem;line-height:1.6;color:var(--slate);}
.newsroom-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:34px;}
.featured-article{display:grid;grid-template-columns:1.4fr 0.6fr;gap:28px;align-items:stretch;background:var(--ink);border-radius:16px;padding:34px 38px;margin-bottom:42px;overflow:hidden;box-shadow:0 16px 34px rgba(25,50,74,0.12);}
.featured-article-copy h2{color:#fff;font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.15;margin-bottom:12px;}
.featured-article-copy p{color:rgba(255,255,255,0.76);max-width:680px;margin-bottom:16px;}
.featured-article-copy .article-meta{color:rgba(255,255,255,0.55);margin-bottom:22px;}
.featured-article-mark{display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.2);color:var(--coral);font:800 clamp(1.2rem,3vw,2rem) 'Manrope',sans-serif;letter-spacing:0.1em;transform:rotate(3deg);}
.featured-article-mark span{display:block;font:400 0.65rem 'Manrope',sans-serif;letter-spacing:0.16em;color:rgba(255,255,255,0.58);margin-top:10px;}
.featured-article-image{width:100%;height:100%;min-height:220px;object-fit:cover;border-radius:12px;}
.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:0 0 20px;}
.article-section-heading h2{font-size:clamp(1.5rem,2.5vw,2rem);color:var(--ink);}
.article-section-heading>span{color:var(--slate);font:700 0.7rem 'Manrope',sans-serif;text-transform:uppercase;letter-spacing:0.06em;}
.article-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.article-card{min-height:240px;}
.article-meta{color:#9CA3AF;font:500 0.68rem 'Manrope',sans-serif;margin-bottom:14px;}
.article-archive{margin-top:58px;padding-top:34px;border-top:1px solid var(--line);}
.archive-months{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px;}
.archive-months button{border:1px solid var(--line);background:#fff;color:var(--ink);padding:10px 14px;border-radius:999px;font:700 0.68rem 'Manrope',sans-serif;cursor:pointer;}
.archive-months button:hover,.archive-months button.active{background:var(--ink);border-color:var(--ink);color:#fff;}
.archive-months .archive-reset{color:var(--coral);border-color:var(--coral);background:transparent;}
.archive-grid{margin-top:20px;}
.article-read-link{border:0;background:transparent;padding:0;color:var(--coral);font:800 0.68rem 'Manrope',sans-serif;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;}
.article-read-link:hover{text-decoration:underline;}
.article-modal{position:fixed;inset:0;z-index:1300;background:rgba(25,50,74,0.62);display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:70px 22px 40px;}
.article-reader{position:relative;background:#fff;width:min(820px,100%);border-radius:16px;overflow:hidden;box-shadow:0 24px 80px rgba(25,50,74,0.28);}
.article-reader-close{position:absolute;right:20px;top:18px;z-index:2;border:0;background:rgba(255,255,255,0.9);border-radius:50%;width:38px;height:38px;color:var(--ink);font-size:1.6rem;line-height:1;cursor:pointer;}
.article-reader-header{padding:42px 52px 30px;}
.article-reader-header h2{font-size:clamp(2rem,4vw,3.2rem);line-height:1.08;color:var(--ink);max-width:700px;margin-bottom:16px;}
.article-reader-image{display:block;width:100%;max-height:360px;object-fit:cover;}
.article-reader-placeholder{height:260px;background:linear-gradient(135deg,var(--ink),#31566A);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);font:800 1.7rem 'Manrope',sans-serif;letter-spacing:0.08em;}
.article-reader-placeholder span{font:400 0.72rem 'Manrope',sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:var(--coral);margin-left:12px;}
.article-reader-body{padding:38px 52px 18px;color:var(--slate);font-size:1.02rem;line-height:1.85;}
.article-reader-lead{font-size:1.2rem;line-height:1.7;color:var(--ink);}
.article-reader-rule{height:1px;background:var(--line);margin:26px 0;}
.article-reader-footer{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap;border-top:1px solid var(--line);padding:22px 52px 30px;color:var(--slate);font:500 0.72rem 'Manrope',sans-serif;}
.shop-webinars{border-radius:16px;box-shadow:0 16px 34px rgba(25,50,74,0.12);}
.services-categories .services-category-intro{grid-column:1/-1;background:transparent!important;border:0;display:block;min-height:0;padding:0 0 4px;}
footer{background:var(--ink)!important;}
.skip-link:focus{top:16px;}
.nav-toggle{display:none;border:1px solid rgba(201,168,76,0.6);background:transparent;color:#C9A84C;padding:8px 11px;font-family:'Barlow',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;}
@media(max-width:980px){
  .nav-utility{padding:6px 22px!important;}
  .nav-utility-copy{display:none;}
  .nav-main{padding:14px 22px!important;}
  .nav-toggle{display:block;}
  .nav-links{display:none!important;position:absolute;top:100%;left:0;right:0;background:var(--ink-deep);padding:10px 22px 22px;border-top:1px solid rgba(255,107,87,0.28);box-shadow:0 14px 28px rgba(7,28,44,0.28);}
  .nav-links.open{display:flex!important;flex-direction:column;align-items:stretch;gap:0!important;}
  .nav-links.open span{padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.08);}
  .nav-links.open button{margin-top:14px;}
}
@media(max-width:980px){.modern-home-grid{grid-template-columns:1fr!important;}.modern-partner-grid{grid-template-columns:1fr!important;}.modern-stat-grid{grid-template-columns:repeat(2,1fr)!important;}.services-intro{grid-template-columns:1fr!important;}.services-categories{grid-template-columns:repeat(2,1fr)!important;}.shop-webinars>div{grid-template-columns:1fr!important;}.newsroom-intro,.featured-article{grid-template-columns:1fr;}.article-grid{grid-template-columns:repeat(2,1fr);}.article-reader-header,.article-reader-body{padding-left:30px;padding-right:30px;}.article-reader-footer{padding-left:30px;padding-right:30px;}}
@media(max-width:1100px){.modern-hero-mark{right:4%;width:290px;height:350px;}.modern-hero-mark img{width:220px;height:220px;}}
@media(max-width:768px){.con{padding:0 22px;}.ph{padding:64px 22px 44px;}.nav-brand-sub{display:none;}.modern-hero{padding-top:150px!important;min-height:860px!important;}.modern-callout{right:22px!important;bottom:34px!important;}.modern-hero h1{font-size:clamp(2.55rem,13vw,4rem)!important;}.modern-stat-grid>div{padding:20px 8px!important;}.modern-hero-mark{top:auto;right:22px;bottom:150px;width:190px;height:230px;transform:rotate(2deg);}.modern-hero-mark img{width:155px;height:155px;}.modern-hero-mark-label{font-size:0.48rem;}.modern-hero-mark-line{margin-top:7px;}}
`;

// NAV
function Nav({ cur, go }) {
  const [sc, setSc] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [cur]);

  const links = [
    ["home","Home"],["about","About"],["services","How We Support"],["membership","Membership"],
    ["resourcehub","Resources"],["shop","Shop"],["newsroom","Employer Voice"],["partnerships","Partners"],
  ];

  return (
    <nav className={`modern-nav ${sc||cur!=="home" ? "solid" : "transparent"}`} style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc||cur!=="home"?"#071429":"transparent",transition:"background 0.4s",borderBottom:sc?"1px solid rgba(201,168,76,0.2)":"none" }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-utility" style={{ background:"#C9A84C",padding:"6px 48px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span className="nav-utility-copy" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:600,color:"#071429" }}>
          Mon–Fri: 07:30–16:30 &nbsp;|&nbsp; info@saueo.co.za &nbsp;|&nbsp; The organised voice of employers.
        </span>
        <div style={{ display:"flex",gap:14,alignItems:"center" }}>
          <a className="utility-label" href="https://portal.saueo.co.za/login" target="_blank" rel="noreferrer" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"#071429" }}>Portal login</a>
          <span className="top-join" onClick={()=>go("membership")} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,background:"#071429",color:"#C9A84C",padding:"4px 14px",cursor:"pointer" }}>Join (SA)UEO</span>
        </div>
      </div>
      <div className="nav-main" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 48px",position:"relative" }}>
        <div onClick={()=>go("home")} style={{ cursor:"pointer",minWidth:0 }}>
          <div className="brand-lockup">
            <img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO logo" className="brand-logo" />
            <div><div className="brand-name">(SA)UEO</div><div className="brand-subtitle">South African United Commercial & Allied Employers' Organisation</div></div>
          </div>
        </div>
        <button className="nav-toggle" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={()=>setMobileOpen(open=>!open)}>{mobileOpen ? "Close" : "Menu"}</button>
        <div id="primary-navigation" className={`nav-links${mobileOpen ? " open" : ""}`} style={{ display:"flex",gap:18,alignItems:"center" }}>
          {links.map(([id,label])=>(
            <span key={id} onClick={()=>go(id)} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.7rem",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:cur===id?"#C9A84C":"#fff",cursor:"pointer",borderBottom:cur===id?"2px solid #C9A84C":"2px solid transparent",paddingBottom:2,transition:"color 0.2s" }}>{label}</span>
          ))}
          <button className="btn-p" onClick={()=>go("contact")} style={{ fontSize:"0.66rem",padding:"9px 18px" }}>Get Help</button>
        </div>
      </div>
    </nav>
  );
}

// HOME
function Home({ go }) {
  return (
    <div>
      <div className="modern-hero" style={{ minHeight:"100vh",background:"linear-gradient(135deg,#F7F9F8 0%,#EAF3F0 62%,#DDEBE6 100%)",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:120 }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"8%",right:"-4%",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="con" style={{ position:"relative",zIndex:2 }}>
          <div style={{ maxWidth:740 }}>
            <span className="sl">Registered Employers' Organisation — Department of Employment and Labour</span>
            <h1 style={{ color:"#19324A",fontSize:"clamp(2.6rem,5vw,4.4rem)",fontWeight:900,lineHeight:1.08,marginBottom:22 }}>
              The organised voice<br /><em style={{ color:"#688276" }}>of South African employers.</em>
            </h1>
            <p style={{ color:"#52616D",fontSize:"1.1rem",lineHeight:1.8,maxWidth:560,marginBottom:14 }}>
              Bringing structure, collective strength, and foresight to labour relations in a complex business environment — for over 25 years.
            </p>
            <p style={{ color:"#6B7780",fontSize:"0.95rem",lineHeight:1.75,maxWidth:540,marginBottom:40,fontStyle:"italic",borderLeft:"3px solid #688276",paddingLeft:16 }}>
              "Without membership of an employers' organisation, you have no voice in industry negotiations — yet you are lawfully bound by the outcome."
            </p>
            <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <button className="btn-p" onClick={()=>go("membership")}>Become a Member</button>
              <button className="btn-o" onClick={()=>go("about")}>Our Institutional Story</button>
            </div>
          </div>
        </div>
        <div className="modern-hero-mark" aria-label="(SA)UEO 25 years emblem">
          <img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO 25 years emblem" />
          <div className="modern-hero-mark-label">A safe harbour for business</div>
          <div className="modern-hero-mark-line" />
        </div>
        <div className="modern-callout" style={{ position:"absolute",bottom:80,right:"6%",background:"#FFDDD6",padding:"20px 28px",maxWidth:200,borderRadius:12 }}>
          <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:"#071429",marginBottom:4 }}>Our One Word</div>
          <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"#071429",fontStyle:"italic",lineHeight:1 }}>Defensible.</div>
          <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",color:"#071429",marginTop:6,lineHeight:1.45 }}>We make your employer position defensible — structurally, legally, institutionally.</div>
        </div>
      </div>

      <div className="modern-stat-grid" style={{ background:"#102A43",display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid rgba(255,107,87,0.25)" }}>
        {[["25+","Years of Representation"],["211","Professional Organisers"],["9","Provinces Covered"],["8","Membership Categories"]].map(([n,l],i)=>(
          <div key={i} style={{ textAlign:"center",padding:"24px 16px",borderRight:i<3?"1px solid rgba(201,168,76,0.12)":"none" }}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2.6rem",fontWeight:900,color:"#C9A84C",lineHeight:1 }}>{n}</div>
            <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9CA3AF",marginTop:6 }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <span className="sl">Our Institutional Mandate</span>
          <div className="gl" />
          <div className="modern-home-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start" }}>
            <div>
              <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>Employers are stronger<br /><em style={{ color:"#C9A84C" }}>when organised.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:16 }}>(SA)UEO is a nationally registered employers' organisation recognised by the Department of Employment and Labour. Our core function is to organise employers into structured collective strength — and to represent them lawfully and defensibly within South Africa's statutory labour system.</p>
              <p style={{ color:"#4A5568",marginBottom:16,fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>"More Than Labour" — labour disputes often originate in broader business pressures. Our ecosystem gives members access to support beyond representation.</p>
              <button className="btn-p" onClick={()=>go("about")} style={{ marginTop:8 }}>Read Our Story</button>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
              {[
                { i:"⚖️",t:"Recognised Representation",d:"Formal standing at the CCMA, Labour Court, and Bargaining Councils." },
                { i:"🏛️",t:"Collective Bargaining",d:"We consolidate employer voices before agreements become binding obligations." },
                { i:"📋",t:"Preventative Compliance",d:"Early risk identification and structured intervention — before disputes arise." },
                { i:"📊",t:"Evidence-Led Advocacy",d:"The State of Business Survey translates employer realities into structured data." },
              ].map((p,i)=>(
                <div key={i} className="card">
                  <div style={{ fontSize:"1.6rem",marginBottom:12 }}>{p.i}</div>
                  <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:700,marginBottom:8,color:"#0B1E3E" }}>{p.t}</h4>
                  <p style={{ fontSize:"0.88rem",color:"#4A5568",lineHeight:1.65 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="modern-ecosystem" style={{ background:"#0B1E3E",padding:"80px 0" }}>
        <div className="con">
          <span className="sl">Partnerships That Extend Member Value</span>
          <div className="gl" />
          <h2 style={{ color:"#fff",fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:14 }}>Complementary expertise, <em style={{ color:"#C9A84C" }}>within reach.</em></h2>
          <p style={{ color:"rgba(255,255,255,0.7)",marginBottom:32,maxWidth:620,lineHeight:1.8 }}>Carefully selected relationships extend member value beyond the core mandate. These partners support business resilience, financial insight, and professional standards while (SA)UEO remains the constitutional anchor.</p>
          <div className="modern-partner-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {[
              { label:"CIBA",role:"Financial & Governance Insight",pts:["Financial advisory insight","Governance support","Business intelligence","Professional advisory"] },
              { label:"Recalibrate",role:"Independent Strategic Partner",pts:["Business systems and pipelines","Service provider network","Operational enablement","Structurally separate"] },
              { label:"LLLRA",role:"Professional Standards",pts:["Labour-relations development","CPD and ethical discipline","Practitioner standards","Recognition wording pending"] },
            ].map((b,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.04)",padding:"24px 20px",borderTop:"3px solid #C9A84C" }}>
                <div style={{ width:58,height:58,background:"#E7EFEB",border:"1px solid rgba(25,50,74,0.14)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Manrope',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.04em",color:"#19324A",marginBottom:18 }}>{b.label}</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:4 }}>{b.label}</div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"0.92rem",color:"#fff",marginBottom:14,lineHeight:1.35 }}>{b.role}</div>
                {b.pts.map((pt,j)=>(
                  <div key={j} style={{ display:"flex",gap:8,alignItems:"flex-start",marginBottom:8 }}>
                    <div style={{ width:5,height:5,background:"#C9A84C",borderRadius:"50%",marginTop:7,flexShrink:0 }} />
                    <span style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.75)",lineHeight:1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="btn-o" onClick={()=>go("partnerships")} style={{ marginTop:28 }}>Explore Partnerships</button>
        </div>
      </div>

      <div className="modern-cta" style={{ background:"#C9A84C",padding:"72px 0" }}>
        <div className="con" style={{ textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.3rem)",color:"#071429",marginBottom:12 }}>Your position is stronger when it is <em>organised.</em></h2>
          <p style={{ color:"#071429",fontSize:"1.05rem",maxWidth:520,margin:"0 auto 28px",lineHeight:1.75 }}>(SA)UEO exists to ensure employers never stand alone — and that labour engagement strengthens business sustainability.</p>
          <div style={{ display:"flex",gap:14,justifyContent:"center" }}>
            <button onClick={()=>go("membership")} style={{ background:"#071429",color:"#C9A84C",fontFamily:"'Barlow',sans-serif",fontWeight:800,fontSize:"0.72rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"13px 28px",border:"none",cursor:"pointer" }}>View Membership Options</button>
            <button onClick={()=>go("contact")} style={{ border:"2px solid #071429",color:"#071429",background:"transparent",fontFamily:"'Barlow',sans-serif",fontWeight:800,fontSize:"0.72rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"11px 26px",cursor:"pointer" }}>Contact Our Team</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// PARTNERSHIPS
function Partnerships() {
  const partners = [
    { name:"CIBA", role:"Financial & Governance Insight", text:"CIBA extends member value through financial advisory insight, governance support, and broader business intelligence. The relationship adds perspective around the commercial pressures that often sit behind workplace risk." },
    { name:"Recalibrate", role:"Independent Strategic Partner", text:"Recalibrate supports business systems, operational enablement, and access to a service provider network. It remains structurally separate from (SA)UEO's statutory representation mandate." },
    { name:"LLLRA", role:"Professional Standards", text:"LLLRA supports the development of professional standards, continuing development, ethical discipline, and practitioner capability in labour relations. Final recognition wording remains subject to confirmation." },
  ];

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Partnerships & Member Value</div>
        <h1>Complementary expertise.<br /><em>One stronger employer ecosystem.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <span className="sl">Partnerships & Member Value</span>
          <div className="gl" />
          <h2 className="partnership-heading" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>The mandate stays clear.<br /><em style={{ color:"#C9A84C" }}>The ecosystem goes further.</em></h2>
          <p style={{ color:"#4A5568",maxWidth:700,marginBottom:46 }}>Partnerships bring complementary expertise within members' reach. They strengthen the wider business environment around organised employer representation without being presented as part of (SA)UEO's three core mandate functions.</p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {partners.map((p,i)=>(
              <div key={i} className="card partnership-card" style={{ minHeight:280 }}>
                <div style={{ width:72,height:72,background:"#E7EFEB",border:"1px solid rgba(25,50,74,0.14)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Manrope',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.06em",color:"#19324A",marginBottom:22 }}>{p.name}</div>
                <div className="partner-name" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:6 }}>Member value partner</div>
                <h3 style={{ fontSize:"1.12rem",lineHeight:1.35,marginBottom:12 }}>{p.role}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="partnership-hierarchy" style={{ background:"#0B1E3E",padding:"30px 34px",marginTop:42,display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap" }}>
            <div>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:8 }}>The hierarchy</div>
              <p style={{ color:"rgba(255,255,255,0.75)",fontSize:"0.95rem",lineHeight:1.7,margin:0,maxWidth:700 }}>Representation, Collective Bargaining, and Employer Advocacy remain the core (SA)UEO mandate. Partnerships extend member value around that foundation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ABOUT
function About({ go }) {
  return (
    <div>
      <div className="ph">
        <div className="bc">Home / About Us</div>
        <h1>An institution of substance.<br /><em>Built for endurance.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"5fr 4fr",gap:56,alignItems:"start" }}>
            <div>
              <span className="sl">Institutional Story</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)",marginBottom:20,lineHeight:1.2 }}>Founded 1998.<br /><em style={{ color:"#C9A84C" }}>Reimagined as next-generation.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:16 }}>For over 25 years, (SA)UEO has stood as the organised voice of South African employers — in CCMA hearings, Bargaining Council negotiations, and formal labour forums where unorganised employers have no standing and no voice.</p>
              <p style={{ color:"#4A5568",marginBottom:16 }}>Being next-generation means two integrated shifts: raising the standard of the practitioners who represent employers, and supporting business members holistically — beyond reactive case handling.</p>
              <p style={{ color:"#4A5568",marginBottom:28,fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>Labour risk is connected to financial sustainability, operational capacity, and governance discipline. Our ecosystem reflects that understanding.</p>
              <button className="btn-p" onClick={()=>go("team")}>Meet Our Team</button>
            </div>
            <div>
              <div style={{ background:"#0B1E3E",padding:36 }}>
                <div style={{ height:3,background:"#C9A84C",marginBottom:24 }} />
                <h3 style={{ color:"#fff",marginBottom:12,fontSize:"1.1rem" }}>Institutional Purpose</h3>
                <p style={{ color:"rgba(255,255,255,0.78)",marginBottom:20,lineHeight:1.8 }}>To protect and strengthen organised employer representation within South Africa's labour system — through legitimacy, discipline, and prevention.</p>
                <div style={{ borderTop:"1px solid rgba(201,168,76,0.25)",paddingTop:20,marginBottom:20 }}>
                  <h3 style={{ color:"#fff",marginBottom:10,fontSize:"1.1rem" }}>The One Word</h3>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.8rem",fontWeight:900,color:"#C9A84C",fontStyle:"italic" }}>Defensible.</div>
                  <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.9rem",marginTop:8,lineHeight:1.7 }}>We make your employer position defensible — procedurally, institutionally, and under scrutiny.</p>
                </div>
              </div>
              <div style={{ background:"#C9A84C",padding:"20px 36px",marginTop:3 }}>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#071429",marginBottom:4 }}>Established</div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2.2rem",fontWeight:900,color:"#071429" }}>1998</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background:"#0B1E3E",padding:"80px 0" }}>
        <div className="con">
          <span className="sl">How We Show Up</span>
          <div className="gl" />
          <h2 style={{ color:"#fff",fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:18 }}>The Sage. The Ruler.</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,background:"rgba(201,168,76,0.12)" }}>
            {[
              { h:"Lawful before loud",d:"We interpret complexity before we act. We do not escalate unnecessarily or posture beyond our statutory role." },
              { h:"Evidence before opinion",d:"Data before assertion. The State of Business Survey grounds our advocacy in structured employer realities." },
              { h:"Prevention before victory",d:"Fewer disputes is success. We measure value in risk reduced and disputes avoided — not cases won." },
              { h:"Structured, not rigid",d:"We value process because process protects everyone — including employers. Discipline is not detachment." },
              { h:"Calm in volatility",d:"We remain steady when tensions rise. Our tone does not shift with political pressure or provocation." },
              { h:"Collectively minded",d:"Individual employers negotiate defensively. Organised employers negotiate structurally. We believe in collective strength." },
            ].map((b,i)=>(
              <div key={i} style={{ background:"#071429",padding:"28px 24px" }}>
                <div style={{ width:28,height:2,background:"#C9A84C",marginBottom:12 }} />
                <h4 style={{ color:"#fff",fontSize:"0.95rem",marginBottom:8 }}>{b.h}</h4>
                <p style={{ color:"rgba(255,255,255,0.68)",fontSize:"0.88rem",lineHeight:1.7 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <span className="sl">Institutional Values</span>
          <div className="gl" />
          <h2 style={{ fontSize:"clamp(1.7rem,2.8vw,2.3rem)",marginBottom:40 }}>What we stand for — <em style={{ color:"#C9A84C" }}>in employer-relevant terms.</em></h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20 }}>
            {[
              { t:"Clarity before reaction",d:"We interpret complexity carefully before we act. Employers deserve structured, considered guidance — not reactive commentary." },
              { t:"Collective strength over isolation",d:"Individual vulnerability becomes collective authority through structured membership." },
              { t:"Lawful authority",d:"Mandate cleanliness is not bureaucracy — it is the source of our institutional standing." },
              { t:"Business-aware judgement",d:"Labour stability is inseparable from operational and financial realities. We understand the broader pressures our members face." },
              { t:"Foresight in negotiation",d:"Prevention reduces risk more effectively than the best possible dispute defence." },
            ].map((v,i)=>(
              <div key={i} className="card">
                <h3 style={{ fontFamily:"'Barlow',sans-serif",color:"#0B1E3E",fontSize:"0.95rem",fontWeight:700,marginBottom:10 }}>{v.t}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.9rem" }}>{v.d}</p>
              </div>
            ))}
            <div style={{ background:"#C9A84C",padding:"28px 24px",display:"flex",alignItems:"center" }}>
              <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.15rem",fontStyle:"italic",color:"#071429",margin:0,lineHeight:1.5 }}>"We exist to ensure employers never stand alone."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TEAM
function Team() {
  const [tab, setTab] = useState("manco");

  const teamData = {
    manco: {
      title: "MANCO",
      desc: "The MANCO team leads the day-to-day operations, legal representation, and financial governance of (SA)UEO.",
      members: [
        { n:"Elise Coetser", t:"General Secretary", d:"Strategic leadership of (SA)UEO and founder of the LLLRA — professionalising labour relations practice across South Africa." },
        { n:"Andre Fourie", t:"Assistant General Secretary", d:"Supporting the General Secretary in the strategic and operational management of the organisation." },
        { n:"Adv. Cisca Moyses", t:"Legal Representative", d:"Providing legal expertise and representation across labour forums, ensuring mandate integrity and member protection." },
        { n:"Rilene Horn", t:"Head of Operations and Finance", d:"Overseeing operational delivery and financial governance across the national (SA)UEO structure." },
      ],
    },
    exco: {
      title: "EXCO",
      desc: "The Executive Committee provides constitutional oversight and institutional leadership, guiding strategic direction and mandate integrity.",
      members: [
        { n:"Adriaan Bezuidenhout", t:"Chairperson", d:"Providing executive leadership and institutional direction for (SA)UEO at the highest governance level." },
        { n:"Dawie Brink", t:"Vice-Chairperson", d:"Supporting the Chairperson and deputising in all executive engagements and governance decisions." },
        { n:"Erikka Motang", t:"Member", d:"Contributing to executive-level strategy and institutional policy decisions." },
        { n:"Charmaine le Grange", t:"Member", d:"Contributing to executive-level strategy and institutional policy decisions." },
      ],
    },
    staff: {
      title: "Staff",
      desc: "The Head Office staff team delivers day-to-day member services, communications, finance, and operational support across (SA)UEO.",
      members: [
        { n:"Rilene Horn", t:"Head of Operations and Finance — 15 Years", d:"Leading operational and financial management with 15 years of committed service to (SA)UEO." },
        { n:"Leonette Horn", t:"Finance Assistant — 10 Years", d:"Supporting financial administration and member billing with a decade of institutional knowledge." },
        { n:"Lize-Mari de Klerk", t:"Communications & Graphic Design Specialist — 10 Years", d:"Driving brand communications, digital presence, and graphic design across all (SA)UEO platforms." },
        { n:"Marius van den Berg", t:"HR IT Support and Multimedia — 5 Years", d:"Managing IT infrastructure, HR support, and multimedia production for the organisation." },
        { n:"Bianca Kruger", t:"Administrative Assistant — Members", d:"Providing dedicated administrative support to (SA)UEO members across all membership categories." },
        { n:"Danya Nepgen", t:"Administrative Assistant — Organisers", d:"Supporting the national organiser network with coordination and administrative excellence." },
        { n:"Linsey van Nieuwenhuizen", t:"Junior Project Manager", d:"Coordinating projects and initiatives across the (SA)UEO operational environment." },
      ],
    },
  };

  const tabs = [["manco","MANCO"],["exco","EXCO"],["staff","Staff"]];
  const current = teamData[tab];

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Our Team</div>
        <h1>The people behind<br /><em>South Africa's organised employer voice.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"200px 1fr",gap:40,alignItems:"start" }}>
            <div>
              <span className="sl">Structure</span>
              <div className="gl" />
              {tabs.map(([id,label])=>(
                <div key={id} onClick={()=>setTab(id)} style={{ padding:"13px 16px",background:tab===id?"#0B1E3E":"#fff",color:tab===id?"#fff":"#0B1E3E",fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.07em",textTransform:"uppercase",cursor:"pointer",borderLeft:tab===id?"4px solid #C9A84C":"4px solid transparent",marginBottom:3,transition:"all 0.2s" }}>{label}</div>
              ))}
              <div style={{ background:"#C9A84C",padding:"20px 22px",marginTop:22 }}>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#071429",marginBottom:4 }}>National Network</div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.8rem",fontWeight:900,color:"#071429" }}>211</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#071429",marginTop:4 }}>Practitioners across all 9 provinces</div>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize:"clamp(1.4rem,2.5vw,1.9rem)",color:"#0B1E3E",marginBottom:8 }}>{current.title}</h2>
              <p style={{ color:"#4A5568",marginBottom:28,fontSize:"0.95rem" }}>{current.desc}</p>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18 }}>
                {current.members.map((m,i)=>(
                  <div key={i} style={{ background:"#fff",borderTop:"3px solid #C9A84C",padding:"22px 20px",boxShadow:"0 2px 12px rgba(11,30,62,0.07)" }}>
                    <div style={{ width:48,height:48,borderRadius:"50%",background:"#0B1E3E",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,color:"#C9A84C",marginBottom:14 }}>{m.n.charAt(0)}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"0.9rem",color:"#0B1E3E",marginBottom:4 }}>{m.n}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.08em",color:"#C9A84C",textTransform:"uppercase",marginBottom:10 }}>{m.t}</div>
                    <p style={{ fontSize:"0.86rem",color:"#4A5568",lineHeight:1.65 }}>{m.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// MEMBERSHIP
function Membership({ go }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const cats = [
    { i:"🏪",n:"Micro Employers",d:"For businesses with 1–4 employees. Full representation, compliance tools, and Recalibrate access.",pop:false },
    { i:"🏢",n:"Small, Medium & Large",d:"Comprehensive support — representation, collective bargaining, and preventative compliance.",pop:true },
    { i:"🏠",n:"Domestic Employers",d:"Specialised membership for employers of domestic workers, including full compliance guidance.",pop:false },
    { i:"🌾",n:"Agriculture Employers",d:"Dedicated support for agricultural employers navigating farm labour and seasonal employment.",pop:false },
    { i:"🍽️",n:"Catering Employers",d:"Tailored for hospitality and catering businesses with industry-specific labour relations expertise.",pop:false },
    { i:"🏛️",n:"NPO / NPC / Body Corporate",d:"Specialised membership for non-profit organisations, non-profit companies and body corporates.",pop:false },
    { i:"🤝",n:"Collaborative Membership",d:"For labour practitioners and HR professionals who represent or advise employers.",pop:false },
    { i:"💡",n:"Social Entrepreneur",d:"For impact-driven businesses. Compliance, representation, and business resilience support.",pop:false },
  ];
  const closeApplication = () => setSelectedCategory(null);
  const applicationLinks = {
    "Micro Employers":[["Micro Business · 1–5 employees","https://forms.clickup.com/20674763/f/kpy6b-14012/ZRXKTORARPAWWEFEN6"]],
    "Small, Medium & Large":[["Small Business · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-13572/SLOHVZXOU852RDRYTG"],["Medium Business · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-13872/NCZEGCB18PFE3YPFFX"],["Large Business · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-13932/WVTEQ0W8QKP60Q4BXY"],["Macro Business · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-13972/6Y85TBWM7M19MJID6O"]],
    "Domestic Employers":[["Domestic Member · 1–2 employees","https://forms.clickup.com/20674763/f/kpy6b-14572/JHXYYHNZU5H21UIIB3"]],
    "Agriculture Employers":[["Agriculture · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14252/DH5ZHXCXGEI1A7NN4H"],["Agriculture · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14332/QG0BSQCM5Y5294VZ0C"],["Agriculture · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14412/8HO3BP7SBJQXN2Q147"],["Agriculture · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14492/RK2S7A6KLXBZH2MCBO"]],
    "Catering Employers":[["Catering · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14292/FMCFXOVVZX0ZMCX5EZ"],["Catering · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14372/WPB4PK7191R0H63G4D"],["Catering · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14452/HA144BDL353UI0GWX4"],["Catering · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14532/Z99K97BLSXH902ZUJU"]],
    "NPO / NPC / Body Corporate":[["NPO / NPC / Body Corporate · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14092/QDICWUUYR08IROO6T8"],["NPO / NPC / Body Corporate · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14132/KCDWVI5QIQA8VV45RN"],["NPO / NPC / Body Corporate · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14172/L4X11HW5RZMSVBYSI5"],["NPO / NPC / Body Corporate · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14212/8FP5K6SM799QJH782Q"]],
  };

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Membership</div>
        <h1>Membership categories.<br /><em>Structured for value.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,marginBottom:64,alignItems:"start" }}>
            <div>
              <span className="sl">Why Organised Membership Matters</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.3rem)",marginBottom:16,lineHeight:1.25 }}>Unorganised employers have no voice — <em style={{ color:"#C9A84C" }}>yet are bound by the outcome.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:14 }}>In South Africa's labour system, collective agreements reached in Bargaining Councils bind all employers in that sector — whether or not they participated. Only organised employers have standing to influence those agreements before they are concluded.</p>
              <p style={{ color:"#4A5568",marginBottom:14,fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>Membership is not a support service. It is institutional standing in the forums where your decisions are tested.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>Every (SA)UEO member also receives a <strong>coupon code to register as a Recalibrate Business Client — free of charge.</strong></p>
              <button className="btn-p" onClick={()=>go("contact")}>Speak to Our Team</button>
            </div>
            <div style={{ background:"#0B1E3E",padding:36 }}>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:18 }}>What Membership Includes</div>
              {["Recognised representation at CCMA, Labour Court & Bargaining Councils","Access to 211 professional organisers nationally","Compliance checklists, contract templates, and HR policies","Preventative compliance screening at onboarding","Expert updates on labour law changes","State of Business Survey participation","Free Recalibrate Business Client registration","Employee benefit scheme access","Professional development through the LLLRA","Invitations to employer forums and institutional engagements"].map((b,i)=>(
                <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:12 }}>
                  <div style={{ width:5,height:5,background:"#C9A84C",borderRadius:"50%",marginTop:9,flexShrink:0 }} />
                  <p style={{ color:"rgba(255,255,255,0.8)",fontSize:"0.9rem",lineHeight:1.65,margin:0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>

          <span className="sl">Choose Your Category</span>
          <div className="gl" />
          <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:36 }}>Eight categories. <em style={{ color:"#C9A84C" }}>One organised employer platform.</em></h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16 }}>
            {cats.map((c,i)=>(
              <div key={i} role="button" tabIndex="0" onClick={()=>setSelectedCategory(c.n)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){setSelectedCategory(c.n);}}} style={{ background:c.pop?"#0B1E3E":"#fff",borderTop:"4px solid #C9A84C",padding:"22px 18px",cursor:"pointer",boxShadow:"0 2px 12px rgba(11,30,62,0.07)",position:"relative" }}>
                {c.pop&&<div style={{ position:"absolute",top:14,right:14,background:"#C9A84C",color:"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.1em",padding:"2px 8px",textTransform:"uppercase" }}>Popular</div>}
                <div style={{ fontSize:"1.6rem",marginBottom:12 }}>{c.i}</div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:700,marginBottom:10,color:c.pop?"#fff":"#0B1E3E",lineHeight:1.4 }}>{c.n}</h4>
                <p style={{ fontSize:"0.84rem",color:c.pop?"rgba(255,255,255,0.72)":"#4A5568",lineHeight:1.65,marginBottom:16 }}>{c.d}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.1em",color:"#C9A84C",textTransform:"uppercase" }}>Apply Now →</div>
              </div>
            ))}
          </div>
          {selectedCategory && (
            <div className="membership-modal" onClick={closeApplication}>
              <div className="membership-form" role="dialog" aria-modal="true" aria-label={`Apply for ${selectedCategory}`} onClick={e=>e.stopPropagation()}>
                <button type="button" className="membership-form-close" aria-label="Close application form" onClick={closeApplication}>×</button>
                <span className="sl">Official membership application</span>
                <h2>Apply for {selectedCategory}</h2>
                <p className="membership-form-intro">Choose the option that matches your organisation. The application will open in the official (SA)UEO registration form.</p>
                {applicationLinks[selectedCategory] ? <div className="membership-links">{applicationLinks[selectedCategory].map(([label,url])=><a key={url} href={url} target="_blank" rel="noreferrer" className="membership-link">{label}<span>Open application ↗</span></a>)}</div> : <div className="membership-contact-note"><p>We do not currently have a dedicated online form listed for this category. Our team can guide you to the right membership route.</p><a className="btn-p" href="mailto:info@saueo.co.za?subject=Membership enquiry">Contact the membership team</a></div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// NEWSROOM
function Newsroom({ go }) {
  const [filter, setFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("current");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const arts = [
    { cat:"insights",tag:"Insights & Opinions",t:"What the CCMA's 2025 Caseload Data Means for South African Employers",d:"15 May 2026",ex:"Over 140,000 referrals annually. We unpack what this means for employer compliance posture and representation strategy.",by:"Legal Team",body:"A high referral volume is a practical warning for every employer: workplace processes need to be ready before a dispute reaches the CCMA. A defensible position starts with clear policies, consistent records, fair procedure, and early action when concerns first arise.\n\nThe lesson is not that every disagreement becomes a case. It is that preventable gaps become harder and more expensive to correct once a matter is formally referred. Employers should review contracts, disciplinary processes, grievance channels, and the records that show how decisions were made.\n\nOrganised representation adds another layer of readiness. It gives employers a structured route to guidance and representation when a workplace issue moves beyond an internal conversation." },
    { cat:"media",tag:"Media Coverage",t:"(SA)UEO Featured in Business Day: The Future of Employer Representation",d:"8 May 2026",ex:"Our General Secretary discusses the evolution of employers' organisations in a changing world of work.",by:"Business Day",body:"The world of work is changing quickly, and employer representation must keep pace. The conversation focuses on the need for organisations that combine statutory labour knowledge with a practical understanding of business pressures.\n\nFor employers, the future is not only about reacting to disputes. It is also about building better systems, understanding obligations early, and having a credible voice when industry decisions are being shaped." },
    { cat:"insights",tag:"Insights & Opinions",t:"Collective Bargaining Season 2026: What Employers Must Know",d:"2 May 2026",ex:"As bargaining councils convene, we outline key wage demands, sector pressures, and what organised members can expect.",by:"IR Advisory",body:"Bargaining season is a period for preparation, not surprise. Employers should understand which council or sector instruments apply to them, review current wage and benefit obligations, and identify the operational impact of proposed changes.\n\nOrganised employers are better placed to understand the position being negotiated and to contribute to a structured employer voice. The practical starting point is a current picture of your workforce, payroll, contracts, and affordability constraints." },
    { cat:"media",tag:"Media Coverage",t:"LLLRA Recognised as SA's First Designated Labour Relations Body",d:"22 April 2026",ex:"The Labour Law Labour Relations Association achieves a landmark designation milestone.",by:"HR Pulse",body:"Professional standards matter because employers depend on capable, ethical representation when workplace matters are under pressure. The recognition of LLLRA represents an important step toward clearer development pathways for labour-relations practitioners.\n\nFor the wider employer community, stronger professional discipline supports better advice, clearer communication, and more consistent representation across the labour system." },
    { cat:"insights",tag:"Insights & Opinions",t:"Navigating the NMW Increase: A Practical Guide",d:"10 April 2026",ex:"The National Minimum Wage adjustment for 2026 — what your payroll and compliance approach needs to reflect.",by:"Compliance Unit",body:"A minimum-wage change should trigger a short compliance review, not only a payroll adjustment. Employers should check affected employees, written agreements, payslips, working hours, deductions, and any sector-specific instrument that may apply.\n\nMaking the change consistently and keeping a record of the review helps reduce uncertainty later. Where the position is unclear, employers should seek guidance before changing terms or processing the next pay cycle." },
    { cat:"insights",tag:"Insights & Opinions",t:"State of Business Survey 2026: Early Findings",d:"1 April 2026",ex:"First data from our annual survey surfaces the critical pressure points facing South African businesses.",by:"Research Team",body:"The early findings point to the value of listening directly to employers. Business pressure, labour risk, compliance capacity, and operational resilience are connected; they cannot be understood through isolated statistics alone.\n\nThe survey gives employer realities a structured place in the conversation and helps inform the issues that deserve practical support, evidence-led advocacy, and continued attention." },
  ];
  const monthKey = article => {
    const date = new Date(article.d);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  };
  const monthLabel = key => new Intl.DateTimeFormat("en-ZA", { month:"long", year:"numeric" }).format(new Date(`${key}-01T00:00:00`));
  const months = [...new Set(arts.map(monthKey))];
  const calendarMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`;
  const activeMonth = monthFilter === "current" ? (months.includes(calendarMonth) ? calendarMonth : months[0]) : monthFilter;
  const filtered = arts.filter(article => monthKey(article) === activeMonth && (filter === "all" || article.cat === filter));
  const featured = filtered[0];
  const olderMonths = months.filter(month => month !== activeMonth);
  const olderArticles = arts.filter(article => monthKey(article) !== activeMonth && (filter === "all" || article.cat === filter));

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Newsroom</div>
        <h1>Newsroom.<br /><em>Evidence before opinion. Structure before noise.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div className="newsroom-intro">
            <div><span className="sl">Employer voice</span><h2>Useful insight for the decisions in front of you.</h2><p>Read the latest (SA)UEO updates, practical guidance, and employer perspectives. New articles will appear in the current month automatically.</p></div>
            <div className="newsroom-note"><strong>Not legal advice</strong><span>Articles are for general information and should be considered alongside advice for your situation.</span></div>
          </div>
          <div className="newsroom-controls">
            {[["all","All Articles"],["insights","Insights & Opinions"],["media","Media Coverage"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          {featured && <div className="featured-article"><div className="featured-article-copy"><span className="sl">Featured this month</span><h2>{featured.t}</h2><p>{featured.ex}</p><div className="article-meta">{featured.d} · By {featured.by}</div><button className="btn-p" type="button" onClick={()=>setSelectedArticle(featured)}>Read featured article</button></div>{featured.image ? <img className="featured-article-image" src={featured.image} alt="" /> : <div className="featured-article-mark">{featured.cat === "media" ? "MEDIA" : "INSIGHT"}<span>(SA)UEO</span></div>}</div>}
          <div className="article-section-heading"><div><span className="sl">{monthLabel(activeMonth)}</span><h2>Latest articles</h2></div><span>{filtered.length} {filtered.length === 1 ? "article" : "articles"}</span></div>
          <div className="article-grid">
            {filtered.slice(1).map((a,i)=>(
              <div key={i} className="card article-card" role="button" tabIndex="0" onClick={()=>setSelectedArticle(a)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" ")setSelectedArticle(a)}} style={{ cursor:"pointer" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
                  <span style={{ background:a.cat==="insights"?"#0B1E3E":"#C9A84C",color:a.cat==="insights"?"#C9A84C":"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",padding:"2px 8px" }}>{a.tag}</span>
                  <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF" }}>{a.d}</span>
                </div>
                <h3 style={{ fontSize:"0.96rem",color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{a.t}</h3>
                <p style={{ fontSize:"0.87rem",color:"#4A5568",lineHeight:1.65,marginBottom:14 }}>{a.ex}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF",marginBottom:12 }}>By {a.by}</div>
                <button type="button" className="article-read-link" onClick={e=>{e.stopPropagation();setSelectedArticle(a)}}>Read the article →</button>
              </div>
            ))}
          </div>
          {selectedArticle && <div className="article-modal" onClick={()=>setSelectedArticle(null)}><article className="article-reader" role="dialog" aria-modal="true" aria-label={selectedArticle.t} onClick={e=>e.stopPropagation()}><button type="button" className="article-reader-close" aria-label="Close article" onClick={()=>setSelectedArticle(null)}>×</button><div className="article-reader-header"><span className="sl">{selectedArticle.tag}</span><h2>{selectedArticle.t}</h2><div className="article-meta">{selectedArticle.d} · By {selectedArticle.by}</div></div>{selectedArticle.image ? <img className="article-reader-image" src={selectedArticle.image} alt="" /> : <div className="article-reader-placeholder">(SA)UEO <span>Employer voice</span></div>}<div className="article-reader-body"><p className="article-reader-lead">{selectedArticle.ex}</p><div className="article-reader-rule" />{(selectedArticle.body || "This article is ready for the full WordPress content, including the article text, supporting images, and related resources.").split("\n\n").map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><div className="article-reader-footer"><span>For general information only. Not legal advice.</span><button type="button" className="btn-o" onClick={()=>setSelectedArticle(null)}>Back to newsroom</button></div></article></div>}
          <div className="article-archive"><div className="article-section-heading"><div><span className="sl">Keep exploring</span><h2>Older articles</h2></div><span>Browse by month</span></div><div className="archive-months">{olderMonths.map(month=><button key={month} type="button" className={monthFilter === month ? "active" : ""} onClick={()=>setMonthFilter(month)}>{monthLabel(month)}</button>)}{monthFilter !== "current" && <button type="button" className="archive-reset" onClick={()=>setMonthFilter("current")}>Back to latest</button>}</div>{monthFilter !== "current" && <div className="article-grid archive-grid">{olderArticles.filter(article=>monthKey(article) === monthFilter).map((a,i)=><div key={i} className="card article-card"><span className="sl">{a.tag}</span><h3>{a.t}</h3><p>{a.ex}</p><div className="article-meta">{a.d} · By {a.by}</div></div>)}</div>}</div>
        </div>
      </div>
    </div>
  );
}

// RESOURCE HUB
function ResourceHub({ go }) {
  const [filter, setFilter] = useState("all");
  const res = [
    { cat:"templates",tag:"Starter Template",i:"📄",t:"Basic Employment Contract - Domestic Employer",d:"A practical starting contract for employing a domestic worker.",url:"https://saueo.co.za/wp-content/uploads/2025/10/CONTRACT-OF-EMPLOYMENT-DOMESTIC-WORKER.doc" },
    { cat:"templates",tag:"Starter Template",i:"📄",t:"Domestic Employer Payslip Example",d:"An example payslip to help domestic employers keep clearer employment records.",url:"https://saueo.co.za/wp-content/uploads/2025/09/PAYSLIP.pdf" },
    { cat:"checklists",tag:"Compliance Checklist",i:"✅",t:"UIF COIDA Guidelines Checklist - Domestic Employers",d:"A practical checklist covering key UIF and COIDA considerations.",url:"https://saueo.co.za/protostar/wp-content/uploads/2025/08/UIF_COIDA_Guidelines_Checklist_Domestic_Employers.pdf" },
    { cat:"checklists",tag:"Workplace Record",i:"✅",t:"Domestic Worker Attendance Register",d:"A simple register for recording attendance and maintaining consistent records.",url:"https://saueo.co.za/protostar/wp-content/uploads/2025/08/Domestic_Worker_Attendance_Register.pdf" },
    { cat:"guides",tag:"Official Form",i:"📘",t:"UIF (UI.19) Form",d:"The official UI.19 form for relevant UIF administration.",url:"https://saueo.co.za/wp-content/uploads/2025/09/Form-UI19.pdf" },
    { cat:"guides",tag:"Official Form",i:"📘",t:"UI 8D Form",d:"Application for registration as an employer of workers in a private household.",url:"https://saueo.co.za/wp-content/uploads/2025/09/Form-UI-8D-Application-for-registration-as-an-employer-of-workers-in-a-PRIVATE-HOUSEHOLD.pdf" },
  ];
  const filtered = filter === "all" ? res : res.filter(r => r.cat === filter);

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Resource Hub</div>
        <h1>Resource Hub.<br /><em>Compliance tools built for South African employers.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F8F4EC" }}>
        <div className="con">
            <div style={{ background:"#0B1E3E",padding:"28px 36px",marginBottom:36,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
            <div>
              <h3 style={{ color:"#fff",fontSize:"1rem",marginBottom:6 }}>Free starter resources for employers</h3>
              <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",margin:0 }}>Practical tools and official forms to help you take the next step with confidence.</p>
            </div>
            <button className="btn-p" onClick={()=>go("membership")}>Need tailored support?</button>
          </div>
          <div style={{ display:"flex",gap:10,marginBottom:32,flexWrap:"wrap" }}>
            {[["all","All Resources"],["templates","Templates"],["checklists","Checklists"],["guides","Guides"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {filtered.map((r,i)=>(
              <div key={i} className="card resource-card">
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                  <span style={{ background:"#F1F0EE",color:"#0B1E3E",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"2px 8px" }}>{r.tag}</span>
                  <div style={{ fontSize:"1.3rem" }}>{r.i}</div>
                </div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:700,color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{r.t}</h4>
                <p style={{ fontSize:"0.86rem",color:"#4A5568",lineHeight:1.65,marginBottom:16 }}>{r.d}</p>
                <a className="resource-access" href={r.url} target="_blank" rel="noreferrer">Download resource →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// SHOP
function Shop() {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"💳", title:"Business Cards", desc:"Official (SA)UEO business cards for part-time organisers and representatives.", action:"Order business cards", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-business-cards-part-time-organisers", image:"https://static.wixstatic.com/media/0704df_880659081427471e8f39ffee6fbf6236~mv2.png/v1/fill/w_827,h_551,al_c,q_90/0704df_880659081427471e8f39ffee6fbf6236~mv2.png" },
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"🏷️", title:"Name Badge", desc:"A professional branded name badge for part-time organisers and representatives.", action:"Order name badge", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-name-badge-part-time-organisers", image:"https://static.wixstatic.com/media/0704df_b20bdf06d0fa4957840197d9fe143bbb~mv2.png/v1/fill/w_838,h_551,al_c,q_90/0704df_b20bdf06d0fa4957840197d9fe143bbb~mv2.png" },
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"📁", title:"Organiser File", desc:"A branded organiser file to keep member documents, notes, and workplace records together.", action:"Order organiser file", url:"https://www.vaoutsourcingservices.co.za/product-page/copy-of-sa-ueo-organiser-file", image:"https://static.wixstatic.com/media/0704df_f4c8ca2ab1d24b75b1aed86e3e5bc883~mv2.png/v1/fill/w_551,h_551,al_c,q_85/0704df_f4c8ca2ab1d24b75b1aed86e3e5bc883~mv2.png" },
    { type:"physical", format:"Physical product", tag:"Branded item", icon:"⚖️", title:"(SA)UEO Labour Posters", desc:"Browse the official collection of paid workplace posters for display in your organisation.", action:"View physical products", url:"https://www.vaoutsourcingservices.co.za/category/saueo-branded-posters" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📄", title:"Disciplinary Templates", desc:"Professionally drafted policies, procedures, and forms for disciplinary processes.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/disciplinary-policy-procedures-forms" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"🤝", title:"Grievance Templates", desc:"Structured documents to help employers manage workplace grievances consistently.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/grievances" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📋", title:"HR Documents", desc:"Core HR documents for sound, consistent employment administration.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/hr-documents" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📊", title:"Performance Templates", desc:"Tools for managing poor work performance with a fair and documented process.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/poor-work-performance" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"🧭", title:"Incapacity, Recruitment & Leave", desc:"Access templates for workplace incompatibility, incapacity, recruitment, and leave processes.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/saueo-template-library" },
  ];
  const webinars = [
    { date:"NOV 2026", title:"Session 2: CIBA | (SA)UEO", detail:"A joint CIBA and (SA)UEO session for employers. Event details and registration will be published soon.", time:"Details to be confirmed" },
  ];
  const filtered = filter === "all" ? products : products.filter(p => p.type === filter);

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Shop</div>
        <h1>Practical tools.<br /><em>Ready for the real workplace.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"1fr",gap:36,alignItems:"start",marginBottom:64 }}>
            <div>
              <span className="sl">The (SA)UEO Shop</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:16 }}>Tools that make your position <em style={{ color:"#C9A84C" }}>defensible.</em></h2>
              <p style={{ color:"#4A5568",maxWidth:640,marginBottom:16 }}>Find official (SA)UEO branded items, paid labour posters, and professionally drafted labour and HR templates in our current online stores.</p>
              <p style={{ color:"#4A5568",fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>Webinar registrations will live here as each event opens. Join briefings led by practitioners who work inside South Africa's labour system.</p>
            </div>
          </div>

          <div className="shop-webinars" style={{ background:"#0B1E3E",padding:"38px 40px",marginBottom:64 }}>
            <span className="sl">Coming Up</span>
            <h2 style={{ color:"#fff",fontSize:"clamp(1.5rem,2.6vw,2.1rem)",marginBottom:26 }}>Upcoming employer webinars.</h2>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
              {webinars.map((w,i)=>(
                <div key={i} style={{ borderTop:"3px solid #C9A84C",background:"rgba(255,255,255,0.045)",padding:"20px 18px" }}>
                  <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",color:"#C9A84C",marginBottom:12 }}>{w.date} · {w.time}</div>
                  <h3 style={{ color:"#fff",fontSize:"1rem",lineHeight:1.35,marginBottom:9 }}>{w.title}</h3>
                  <p style={{ color:"rgba(255,255,255,0.68)",fontSize:"0.87rem",lineHeight:1.6,marginBottom:18 }}>{w.detail}</p>
                  <button className="btn-o" onClick={()=>window.alert("Registration will open soon. Please check back or contact info@saueo.co.za.")} style={{ padding:"8px 13px",fontSize:"0.6rem" }}>Register Interest</button>
                </div>
              ))}
            </div>
          </div>

          <span className="sl">Shop by product type</span>
          <div className="gl" />
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,flexWrap:"wrap",marginBottom:28 }}>
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)" }}>Choose a category, then select your product.</h2>
            <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
              {[['all','All Items'],['organiser','Organiser Orders'],['physical','Physical Products'],['digital','Digital Products']].map(([id,label])=>(
                <button key={id} onClick={()=>setFilter(id)} style={{ padding:"8px 16px",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer" }}>{label}</button>
              ))}
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:76 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="card" style={{ display:"flex",flexDirection:"column" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:14 }}>
                  <span style={{ background:p.type === "digital" ? "#E7EFEB" : "#19324A",color:p.type === "digital" ? "#19324A" : "#fff",fontFamily:"'Manrope',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.06em",textTransform:"uppercase",padding:"4px 8px",borderRadius:999 }}>{p.format}</span>
                  <span style={{ fontSize:"1.45rem" }}>{p.icon}</span>
                </div>
                <h3 style={{ fontSize:"1rem",lineHeight:1.35,marginBottom:10 }}>{p.title}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.88rem",lineHeight:1.65,marginBottom:18,flexGrow:1 }}>{p.desc}</p>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,borderTop:"1px solid rgba(11,30,62,0.1)",paddingTop:16 }}>
                  <span style={{ fontFamily:"'Manrope',sans-serif",fontSize:"0.64rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",color:"#9CA3AF" }}>{p.type === "digital" ? "Digital access" : "Physical order"}</span>
                  <button className="btn-p" onClick={()=>setSelectedProduct(p)} style={{ padding:"9px 13px",fontSize:"0.62rem" }}>View Product</button>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div onClick={()=>setSelectedProduct(null)} style={{ position:"fixed",inset:0,zIndex:1200,background:"rgba(7,20,41,0.78)",display:"flex",alignItems:"center",justifyContent:"center",padding:22 }}>
              <div role="dialog" aria-modal="true" aria-label={selectedProduct.title} onClick={e=>e.stopPropagation()} style={{ background:"#F8F4EC",maxWidth:620,width:"100%",borderTop:"5px solid #C9A84C",boxShadow:"0 20px 70px rgba(0,0,0,0.3)" }}>
                <div style={{ padding:"30px 32px 26px" }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"start",gap:20,marginBottom:22 }}>
                    <div>
                      <span className="sl">{selectedProduct.tag}</span>
                      <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.1rem)",lineHeight:1.2 }}>{selectedProduct.title}</h2>
                    </div>
                    <button aria-label="Close product details" onClick={()=>setSelectedProduct(null)} style={{ border:"none",background:"transparent",fontSize:"1.8rem",lineHeight:1,color:"#0B1E3E",cursor:"pointer" }}>×</button>
                  </div>
                  <div className="product-preview">
                    {selectedProduct.image ? <img src={selectedProduct.image} alt={`${selectedProduct.title} product preview`} /> : <div className="product-preview-fallback"><span>{selectedProduct.icon}</span><small>Product preview coming soon</small></div>}
                  </div>
                  <p style={{ color:"#4A5568",lineHeight:1.75,margin:"0 0 24px" }}>{selectedProduct.desc}</p>
                  <div style={{ background:"#fff",borderLeft:"3px solid #C9A84C",padding:"16px 18px",marginBottom:24 }}>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9CA3AF",marginBottom:6 }}>How it works</div>
                    <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.65,margin:0 }}>{selectedProduct.type === "digital" ? "Open the official digital library to review and access this product." : "Open the official external store to review the product, pricing, and ordering options."}</p>
                  </div>
                  <div style={{ display:"flex",justifyContent:"flex-end",gap:10,flexWrap:"wrap" }}>
                    <button className="btn-o" onClick={()=>setSelectedProduct(null)}>Keep Browsing</button>
                    <a className="btn-p" href={selectedProduct.url} target="_blank" rel="noreferrer">{selectedProduct.action} ↗</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p style={{ color:"#9CA3AF",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",letterSpacing:"0.04em" }}>Product orders and digital resources open through their official external stores and libraries.</p>
        </div>
      </div>
    </div>
  );
}

// SERVICES
function Services({ go }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const svs = [
    { i:"⚖️",cat:"Core Mandate",t:"Representation at CCMA, Labour Court & Bargaining Councils",d:"Formal right of appearance in statutory labour forums. Representation is issued institutionally and digitally verified before issuance.",pts:["CCMA conciliation and arbitration","Labour Court appearances","Bargaining Council proceedings","Mandate-controlled institutional representation"] },
    { i:"🤝",cat:"Core Mandate",t:"Collective Bargaining Representation",d:"Not secondary — central. We consolidate employer voices into structured positions before agreements become binding obligations on all employers in that sector.",pts:["Participation in industry Bargaining Councils","Wage negotiation representation","Terms and conditions advocacy","Prevention of fragmented employer positioning"] },
    { i:"📋",cat:"Risk Management",t:"Preventative Compliance and Labour Risk Management",d:"Entry-level compliance screening at onboarding, early risk identification, and organiser-led intervention before disputes escalate.",pts:["Compliance screening at member onboarding","Early labour risk identification","Organiser-led preventative intervention","Reducing exposure before disputes arise"] },
    { i:"📊",cat:"Evidence & Advocacy",t:"State of Business Survey©",d:"An institutional evidence instrument — not a marketing campaign. Informs the State of Business Report and Address, translating employer realities into structured data.",pts:["Cross-sector employer data gathering","State of Business Report","State of Business Address","Evidence-led advocacy and policy input"] },
    { i:"🔗",cat:"Ecosystem Support",t:"More Than Labour — Recalibrate Access",d:"Every (SA)UEO member receives a coupon code to register as a Recalibrate Business Client free of charge. Representation remains constitutionally clean. Enablement is structurally separate.",pts:["Free Recalibrate Business Client registration","Access to vetted service provider network","Business systems and operational support","Mandate separation maintained"] },
    { i:"🛡️",cat:"Member Benefits",t:"Employee Benefit Schemes",d:"Affordable hospitalisation, funeral, and income protection benefits for employer members and their teams — because resilient businesses need resilient people.",pts:["Hospitalisation cover","Funeral benefits","Income protection","Affordable group benefit access"] },
    { i:"🎓",cat:"Professional Standards",t:"LLLRA Professional Development Pathway",d:"SA's first emerging professional body for labour relations practitioners. All (SA)UEO organisers must hold LLLRA membership.",pts:["Professional designation pathways","CPD and ethical discipline","Peer-to-peer knowledge sharing nationally","Raising the standard of employer-side representation"] },
    { i:"📰",cat:"Member Intelligence",t:"Expert Updates and Business Intelligence",d:"Critical expert updates on any new developments that may impact your business — delivered as they arise, not after the fact.",pts:["Labour law change alerts","CCMA trend reports","NMW and wage compliance updates","Enforcement environment advisories"] },
  ];
  const categories = [
    ["Core Mandate","Representation & Advice"],
    ["Risk Management","Prevent Problems"],
    ["Evidence & Advocacy","Research & Advocacy"],
    ["Member Benefits","Benefits for Members"],
    ["Professional Standards","Professional Development"],
    ["Member Intelligence","Updates & Insights"],
    ["Ecosystem Support","Business Support"],
  ];
  const visibleServices = activeCategory === "all" ? svs : svs.filter(service => service.cat === activeCategory);
  const activeLabel = activeCategory === "all" ? "All support services" : categories.find(([id]) => id === activeCategory)?.[1];
  const chooseCategory = id => {
    setActiveCategory(activeCategory === id ? "all" : id);
    window.setTimeout(() => document.getElementById("service-results")?.scrollIntoView({ behavior:"smooth", block:"start" }), 0);
  };

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Services & Programmes</div>
        <h1>Services & Programmes.<br /><em>More than labour. By institutional design.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div className="services-intro" style={{ display:"grid",gridTemplateColumns:"1fr 2fr",gap:56,marginBottom:56,alignItems:"start" }}>
            <div>
              <span className="sl">How We Help Employers</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:16,lineHeight:1.25 }}>Practical support for <em style={{ color:"#C9A84C" }}>stronger businesses.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:16 }}>From everyday compliance questions to formal labour disputes, we help employers understand their responsibilities, reduce risk, and make confident decisions.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>Our team combines representation, prevention, expert insight, and practical business support so you are not left to navigate the labour environment alone.</p>
              <button className="btn-p" onClick={()=>go("membership")}>View Membership Options</button>
            </div>
            <div className="services-categories" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10 }}>
              <div className="services-category-intro"><div className="sl" style={{ margin:0 }}>Areas of support</div><p style={{ color:"#5B6872",fontSize:"0.82rem",lineHeight:1.5,marginTop:7 }}>Explore the ways we support employers and their teams.</p></div>
              {categories.map(([id,label])=>(
                <button key={id} type="button" className={`services-category${activeCategory === id ? " active" : ""}`} onClick={()=>chooseCategory(id)}>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          <div id="service-results" className="service-results-heading"><span className="sl">Selected support area</span><h2>{activeLabel}</h2><button type="button" onClick={()=>setActiveCategory("all")}>Show all services</button></div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20 }}>
            {visibleServices.map((s,i)=>(
              <div key={i} className="card">
                <div style={{ display:"flex",gap:16,alignItems:"flex-start" }}>
                  <div style={{ fontSize:"1.8rem",flexShrink:0 }}>{s.i}</div>
                  <div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"#C9A84C",marginBottom:4 }}>{s.cat}</div>
                    <h3 style={{ fontSize:"1rem",color:"#0B1E3E",marginBottom:10,lineHeight:1.3 }}>{s.t}</h3>
                    <p style={{ fontSize:"0.87rem",color:"#4A5568",lineHeight:1.68,marginBottom:14 }}>{s.d}</p>
                    {s.pts.map((pt,j)=>(
                      <div key={j} style={{ display:"flex",gap:9,alignItems:"flex-start",marginBottom:7 }}>
                        <div style={{ width:5,height:5,background:"#C9A84C",borderRadius:"50%",marginTop:7,flexShrink:0 }} />
                        <span style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.87rem",color:"#0B1E3E",lineHeight:1.6 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",cat:"",msg:"" });
  const [done, setDone] = useState(false);
  const ch = e => setForm(f => ({ ...f,[e.target.name]:e.target.value }));

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Contact Us</div>
        <h1>Get in Touch.<br /><em>We are here to help.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"2fr 3fr",gap:56,alignItems:"start" }}>
            <div>
              <span className="sl">Contact Information</span>
              <div className="gl" />
              <h2 style={{ fontSize:"1.6rem",marginBottom:24,lineHeight:1.25 }}>Reach the right <em style={{ color:"#C9A84C" }}>team directly.</em></h2>
              {[["✉️","General Enquiries","info@saueo.co.za"],["🕐","Office Hours","Monday to Friday: 07:30 to 16:30"],["🔐","Member Portal","portal.saueo.co.za"]].map(([ic,lbl,val],i)=>(
                <div key={i} style={{ display:"flex",gap:16,marginBottom:22,alignItems:"flex-start" }}>
                  <div style={{ fontSize:"1.2rem",flexShrink:0,marginTop:2 }}>{ic}</div>
                  <div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9CA3AF",marginBottom:4 }}>{lbl}</div>
                    <div style={{ fontFamily:"'Crimson Pro',serif",fontSize:"1rem",color:"#0B1E3E" }}>{val}</div>
                  </div>
                </div>
              ))}
              <div style={{ background:"#0B1E3E",padding:28,marginTop:8 }}>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:10 }}>National Footprint</div>
                <p style={{ color:"rgba(255,255,255,0.78)",fontSize:"0.9rem",lineHeight:1.75 }}>211 organisers operating across all nine provinces — ensuring employers are never without accessible, professionally governed support.</p>
              </div>
            </div>
            <div style={{ background:"#fff",padding:44,boxShadow:"0 8px 40px rgba(11,30,62,0.1)" }}>
              {done ? (
                <div style={{ textAlign:"center",padding:"36px 0" }}>
                  <div style={{ fontSize:"2.4rem",marginBottom:14 }}>✅</div>
                  <h3 style={{ color:"#0B1E3E",fontSize:"1.3rem",marginBottom:12 }}>Message Received</h3>
                  <p style={{ color:"#4A5568" }}>Thank you for reaching out. A member of our team will respond within one business day.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ color:"#0B1E3E",fontSize:"1.2rem",marginBottom:8 }}>Send Us a Message</h3>
                  <p style={{ color:"#4A5568",fontSize:"0.9rem",marginBottom:24 }}>Complete the form and our team will respond within one business day.</p>
                  {[["name","Full Name *","text"],["email","Email Address *","email"],["phone","Phone Number","tel"]].map(([nm,lbl,tp])=>(
                    <div key={nm} style={{ marginBottom:16 }}>
                      <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>{lbl}</label>
                      <input type={tp} name={nm} value={form[nm]} onChange={ch} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC" }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>Enquiry Type</label>
                    <select name="cat" value={form.cat} onChange={ch} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC" }}>
                      <option value="">Select an option</option>
                      <option>Membership Enquiry</option>
                      <option>CCMA or Labour Dispute</option>
                      <option>Compliance Support</option>
                      <option>Collective Bargaining</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div style={{ marginBottom:24 }}>
                    <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>Message *</label>
                    <textarea name="msg" value={form.msg} onChange={ch} rows={5} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC",resize:"vertical" }} />
                  </div>
                  <button className="btn-p" onClick={()=>{ if(form.name&&form.email&&form.msg)setDone(true); }} style={{ width:"100%",textAlign:"center" }}>Send Message</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FOOTER
function Footer({ go }) {
  return (
    <footer style={{ background:"#071429" }}>
      <div style={{ height:4,background:"linear-gradient(90deg,#C9A84C,#E2C47A,#C9A84C)" }} />
      <div className="con" style={{ padding:"56px 48px 32px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:40 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:10 }}><img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO logo" className="brand-logo" /><div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:900,color:"#fff" }}>(SA)UEO</div></div>
            <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.52rem",letterSpacing:"0.13em",color:"#C9A84C",textTransform:"uppercase",marginBottom:16 }}>South African United Commercial and Allied Employers' Organisation</div>
            <p style={{ color:"rgba(255,255,255,0.52)",fontSize:"0.88rem",lineHeight:1.75,marginBottom:16,maxWidth:280 }}>Registered employers' organisation in terms of the Labour Relations Act. Recognised by the Department of Employment and Labour.</p>
            <div style={{ fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:"0.92rem",color:"#C9A84C" }}>"The organised voice of employers."</div>
          </div>
          {[
            { h:"Organisation",ls:[["home","Home"],["about","About Us"],["team","Our Team"],["contact","Contact Us"]] },
            { h:"Membership",ls:[["membership","All Categories"],["membership","Micro Employers"],["membership","SME Membership"],["membership","Agriculture"]] },
            { h:"Resources",ls:[["newsroom","Newsroom"],["resourcehub","Resource Hub"],["services","Services"],["contact","Contact"]] },
          ].map((col,i)=>(
            <div key={i}>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:"#C9A84C",marginBottom:16 }}>{col.h}</div>
              {col.ls.map(([pg,lbl],j)=>(
                <div key={j} style={{ marginBottom:10 }}>
                  <span onClick={()=>go(pg)} style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.62)",cursor:"pointer",transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#C9A84C"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.62)"}>{lbl}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
          <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",color:"rgba(255,255,255,0.32)" }}>© 2026 (SA)UEO — All rights reserved.</span>
          <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",color:"rgba(255,255,255,0.32)" }}>Registered in terms of the Labour Relations Act</span>
        </div>
      </div>
    </footer>
  );
}

// APP
export default function App() {
  const [page, setPage] = useState("home");
  const go = p => { setPage(p); window.scrollTo({ top:0,behavior:"smooth" }); };
  const pages = {
    home: <Home go={go} />,
    partnerships: <Partnerships />,
    about: <About go={go} />,
    team: <Team />,
    membership: <Membership go={go} />,
    newsroom: <Newsroom go={go} />,
    resourcehub: <ResourceHub go={go} />,
    shop: <Shop />,
    services: <Services go={go} />,
    contact: <Contact />,
  };
  return (
    <>
      <style>{fonts + gs}</style>
      <Nav cur={page} go={go} />
      <main id="main-content" tabIndex="-1" style={{ paddingTop: page === "home" ? 0 : 108 }}>
        {pages[page] || pages.home}
      </main>
      <Footer go={go} />
    </>
  );
}
