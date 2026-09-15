import { useState, useEffect } from "react";

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Barlow:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');`;

const gs = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Crimson Pro',serif;background:#F8F4EC;color:#0B1E3E;}
h1,h2,h3,h4{font-family:'Playfair Display',serif;}
p{line-height:1.8;font-size:1rem;}
a{text-decoration:none;color:inherit;}
.btn-p{background:#C9A84C;color:#071429;font-family:'Barlow',sans-serif;font-weight:800;font-size:0.74rem;letter-spacing:0.12em;text-transform:uppercase;padding:13px 28px;border:none;cursor:pointer;transition:background 0.2s;}
.btn-p:hover{background:#E2C47A;}
.btn-o{border:2px solid #C9A84C;color:#C9A84C;background:transparent;font-family:'Barlow',sans-serif;font-weight:800;font-size:0.74rem;letter-spacing:0.12em;text-transform:uppercase;padding:11px 26px;cursor:pointer;transition:all 0.2s;}
.btn-o:hover{background:#C9A84C;color:#071429;}
.sl{font-family:'Barlow',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#C9A84C;margin-bottom:10px;display:block;}
.gl{width:44px;height:3px;background:#C9A84C;margin-bottom:22px;}
.con{max-width:1200px;margin:0 auto;padding:0 48px;}
.card{background:#fff;border-top:4px solid #C9A84C;padding:28px 24px;box-shadow:0 2px 12px rgba(11,30,62,0.07);transition:transform 0.2s;}
.card:hover{transform:translateY(-4px);}
.ph{background:#0B1E3E;padding:80px 48px 60px;position:relative;overflow:hidden;}
.ph::before{content:'';position:absolute;top:0;right:0;bottom:0;width:38%;background:linear-gradient(135deg,rgba(201,168,76,0.07) 0%,transparent 60%);}
.ph .bc{font-family:'Barlow',sans-serif;font-size:0.68rem;letter-spacing:0.1em;color:#C9A84C;margin-bottom:14px;text-transform:uppercase;}
.ph h1{color:#fff;font-size:clamp(2rem,4vw,3rem);font-weight:700;line-height:1.15;position:relative;z-index:2;}
.ph h1 em{color:#C9A84C;}
.skip-link{position:absolute;left:16px;top:-48px;background:#C9A84C;color:#071429;padding:10px 16px;font-family:'Barlow',sans-serif;font-weight:700;z-index:2000;}
.skip-link:focus{top:16px;}
.nav-toggle{display:none;border:1px solid rgba(201,168,76,0.6);background:transparent;color:#C9A84C;padding:8px 11px;font-family:'Barlow',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;}
@media(max-width:980px){
  .nav-utility{padding:6px 22px!important;}
  .nav-utility-copy{display:none;}
  .nav-main{padding:14px 22px!important;}
  .nav-toggle{display:block;}
  .nav-links{display:none!important;position:absolute;top:100%;left:0;right:0;background:#071429;padding:10px 22px 22px;border-top:1px solid rgba(201,168,76,0.2);box-shadow:0 14px 28px rgba(7,20,41,0.28);}
  .nav-links.open{display:flex!important;flex-direction:column;align-items:stretch;gap:0!important;}
  .nav-links.open span{padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.08);}
  .nav-links.open button{margin-top:14px;}
}
@media(max-width:768px){.con{padding:0 22px;}.ph{padding:60px 22px 40px;}.nav-brand-sub{display:none;}}
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
    ["about","About"],["services","How We Support"],["membership","Membership"],
    ["resourcehub","Resources"],["shop","Shop"],["newsroom","Employer Voice"],["partnerships","Partners"],
  ];

  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc||cur!=="home"?"#071429":"transparent",transition:"background 0.4s",borderBottom:sc?"1px solid rgba(201,168,76,0.2)":"none" }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-utility" style={{ background:"#C9A84C",padding:"6px 48px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span className="nav-utility-copy" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:600,color:"#071429" }}>
          Mon–Fri: 07:30–16:30 &nbsp;|&nbsp; info@saueo.co.za &nbsp;|&nbsp; The organised voice of employers.
        </span>
        <div style={{ display:"flex",gap:14,alignItems:"center" }}>
          <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"#071429" }}>Public employer resources</span>
          <span onClick={()=>go("membership")} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,background:"#071429",color:"#C9A84C",padding:"4px 14px",cursor:"pointer" }}>Join (SA)UEO</span>
        </div>
      </div>
      <div className="nav-main" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 48px",position:"relative" }}>
        <div onClick={()=>go("home")} style={{ cursor:"pointer",minWidth:0 }}>
          <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:900,color:"#fff" }}>(SA)UEO</div>
          <div className="nav-brand-sub" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.52rem",letterSpacing:"0.14em",color:"#C9A84C",textTransform:"uppercase",marginTop:2 }}>South African United Commercial & Allied Employers' Organisation</div>
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
      <div style={{ minHeight:"100vh",background:"linear-gradient(135deg,#071429 55%,#122644 100%)",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:120 }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"8%",right:"-4%",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="con" style={{ position:"relative",zIndex:2 }}>
          <div style={{ maxWidth:740 }}>
            <span className="sl">Registered Employers' Organisation — Department of Employment and Labour</span>
            <h1 style={{ color:"#fff",fontSize:"clamp(2.6rem,5vw,4.4rem)",fontWeight:900,lineHeight:1.08,marginBottom:22 }}>
              The organised voice<br /><em style={{ color:"#C9A84C" }}>of South African employers.</em>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.75)",fontSize:"1.1rem",lineHeight:1.8,maxWidth:560,marginBottom:14 }}>
              Bringing structure, collective strength, and foresight to labour relations in a complex business environment — for over 25 years.
            </p>
            <p style={{ color:"rgba(255,255,255,0.48)",fontSize:"0.95rem",lineHeight:1.75,maxWidth:540,marginBottom:40,fontStyle:"italic",borderLeft:"3px solid rgba(201,168,76,0.35)",paddingLeft:16 }}>
              "Without membership of an employers' organisation, you have no voice in industry negotiations — yet you are lawfully bound by the outcome."
            </p>
            <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <button className="btn-p" onClick={()=>go("membership")}>Become a Member</button>
              <button className="btn-o" onClick={()=>go("about")}>Our Institutional Story</button>
            </div>
          </div>
        </div>
        <div style={{ position:"absolute",bottom:80,right:"6%",background:"#C9A84C",padding:"20px 28px",maxWidth:200 }}>
          <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:"#071429",marginBottom:4 }}>Our One Word</div>
          <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"#071429",fontStyle:"italic",lineHeight:1 }}>Defensible.</div>
          <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",color:"#071429",marginTop:6,lineHeight:1.45 }}>We make your employer position defensible — structurally, legally, institutionally.</div>
        </div>
      </div>

      <div style={{ background:"#0B1E3E",display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid rgba(201,168,76,0.2)" }}>
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
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start" }}>
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

      <div style={{ background:"#0B1E3E",padding:"80px 0" }}>
        <div className="con">
          <span className="sl">Partnerships That Extend Member Value</span>
          <div className="gl" />
          <h2 style={{ color:"#fff",fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:14 }}>Complementary expertise, <em style={{ color:"#C9A84C" }}>within reach.</em></h2>
          <p style={{ color:"rgba(255,255,255,0.7)",marginBottom:32,maxWidth:620,lineHeight:1.8 }}>Carefully selected relationships extend member value beyond the core mandate. These partners support business resilience, financial insight, and professional standards while (SA)UEO remains the constitutional anchor.</p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {[
              { label:"CIBA",role:"Financial & Governance Insight",pts:["Financial advisory insight","Governance support","Business intelligence","Professional advisory"] },
              { label:"Recalibrate",role:"Independent Strategic Partner",pts:["Business systems and pipelines","Service provider network","Operational enablement","Structurally separate"] },
              { label:"LLLRA",role:"Professional Standards",pts:["Labour-relations development","CPD and ethical discipline","Practitioner standards","Recognition wording pending"] },
            ].map((b,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,0.04)",padding:"24px 20px",borderTop:"3px solid #C9A84C" }}>
                <div style={{ width:58,height:58,border:"1px solid rgba(201,168,76,0.65)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Barlow',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.08em",color:"#C9A84C",marginBottom:18 }}>LOGO</div>
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

      <div style={{ background:"#C9A84C",padding:"72px 0" }}>
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
          <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>The mandate stays clear.<br /><em style={{ color:"#C9A84C" }}>The ecosystem goes further.</em></h2>
          <p style={{ color:"#4A5568",maxWidth:700,marginBottom:46 }}>Partnerships bring complementary expertise within members' reach. They strengthen the wider business environment around organised employer representation without being presented as part of (SA)UEO's three core mandate functions.</p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {partners.map((p,i)=>(
              <div key={i} className="card" style={{ minHeight:280 }}>
                <div style={{ width:72,height:72,background:"#0B1E3E",border:"3px solid #C9A84C",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",color:"#C9A84C",marginBottom:22 }}>LOGO</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:6 }}>{p.name}</div>
                <h3 style={{ fontSize:"1.12rem",lineHeight:1.35,marginBottom:12 }}>{p.role}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ background:"#0B1E3E",padding:"30px 34px",marginTop:42,display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap" }}>
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
              <div key={i} style={{ background:c.pop?"#0B1E3E":"#fff",borderTop:"4px solid #C9A84C",padding:"22px 18px",cursor:"pointer",boxShadow:"0 2px 12px rgba(11,30,62,0.07)",position:"relative" }}>
                {c.pop&&<div style={{ position:"absolute",top:14,right:14,background:"#C9A84C",color:"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.1em",padding:"2px 8px",textTransform:"uppercase" }}>Popular</div>}
                <div style={{ fontSize:"1.6rem",marginBottom:12 }}>{c.i}</div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:700,marginBottom:10,color:c.pop?"#fff":"#0B1E3E",lineHeight:1.4 }}>{c.n}</h4>
                <p style={{ fontSize:"0.84rem",color:c.pop?"rgba(255,255,255,0.72)":"#4A5568",lineHeight:1.65,marginBottom:16 }}>{c.d}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.1em",color:"#C9A84C",textTransform:"uppercase" }}>Apply Now →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// NEWSROOM
function Newsroom({ go }) {
  const [filter, setFilter] = useState("all");
  const arts = [
    { cat:"insights",tag:"Insights & Opinions",t:"What the CCMA's 2025 Caseload Data Means for South African Employers",d:"15 May 2026",ex:"Over 140,000 referrals annually. We unpack what this means for employer compliance posture and representation strategy.",by:"Legal Team" },
    { cat:"media",tag:"Media Coverage",t:"(SA)UEO Featured in Business Day: The Future of Employer Representation",d:"8 May 2026",ex:"Our General Secretary discusses the evolution of employers' organisations in a changing world of work.",by:"Business Day" },
    { cat:"insights",tag:"Insights & Opinions",t:"Collective Bargaining Season 2026: What Employers Must Know",d:"2 May 2026",ex:"As bargaining councils convene, we outline key wage demands, sector pressures, and what organised members can expect.",by:"IR Advisory" },
    { cat:"media",tag:"Media Coverage",t:"LLLRA Recognised as SA's First Designated Labour Relations Body",d:"22 April 2026",ex:"The Labour Law Labour Relations Association achieves a landmark designation milestone.",by:"HR Pulse" },
    { cat:"insights",tag:"Insights & Opinions",t:"Navigating the NMW Increase: A Practical Guide",d:"10 April 2026",ex:"The National Minimum Wage adjustment for 2026 — what your payroll and compliance approach needs to reflect.",by:"Compliance Unit" },
    { cat:"insights",tag:"Insights & Opinions",t:"State of Business Survey 2026: Early Findings",d:"1 April 2026",ex:"First data from our annual survey surfaces the critical pressure points facing South African businesses.",by:"Research Team" },
  ];
  const filtered = filter === "all" ? arts : arts.filter(a => a.cat === filter);

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Newsroom</div>
        <h1>Newsroom.<br /><em>Evidence before opinion. Structure before noise.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"flex",gap:10,marginBottom:36,flexWrap:"wrap" }}>
            {[["all","All Articles"],["insights","Insights & Opinions"],["media","Media Coverage"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {filtered.map((a,i)=>(
              <div key={i} className="card" style={{ cursor:"pointer" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
                  <span style={{ background:a.cat==="insights"?"#0B1E3E":"#C9A84C",color:a.cat==="insights"?"#C9A84C":"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",padding:"2px 8px" }}>{a.tag}</span>
                  <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF" }}>{a.d}</span>
                </div>
                <h3 style={{ fontSize:"0.96rem",color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{a.t}</h3>
                <p style={{ fontSize:"0.87rem",color:"#4A5568",lineHeight:1.65,marginBottom:14 }}>{a.ex}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF",marginBottom:12 }}>By {a.by}</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.1em",color:"#C9A84C",textTransform:"uppercase" }}>Read More →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// RESOURCE HUB
function ResourceHub() {
  const [filter, setFilter] = useState("all");
  const res = [
    { cat:"templates",tag:"Contract Template",i:"📄",t:"Fixed-Term Employment Contract",d:"Legally aligned template for fixed-term appointments under South African labour law." },
    { cat:"checklists",tag:"Compliance Checklist",i:"✅",t:"CCMA Hearing Preparation Checklist",d:"Step-by-step checklist ensuring procedural discipline before any formal hearing." },
    { cat:"guides",tag:"Employer Guide",i:"📘",t:"National Minimum Wage 2026 Guide",d:"Plain-language guide to NMW obligations, exemptions, and compliance requirements." },
    { cat:"templates",tag:"Policy Template",i:"📄",t:"Disciplinary Code and Procedure",d:"Customisable disciplinary code aligned to the Labour Relations Act and CCMA requirements." },
    { cat:"guides",tag:"Employer Guide",i:"📘",t:"Understanding Bargaining Councils",d:"What bargaining councils are, how they bind employers, and what organised membership enables." },
    { cat:"checklists",tag:"Compliance Checklist",i:"✅",t:"Employment Equity Compliance Checklist",d:"Ensure your EE reporting and planning meets current regulatory requirements." },
    { cat:"guides",tag:"Employer Guide",i:"📘",t:"Section 189 Retrenchment: Step-by-Step",d:"Navigate retrenchment processes correctly — from consultation to conclusion." },
    { cat:"templates",tag:"Policy Template",i:"📄",t:"Remote and Hybrid Work Policy",d:"A compliance-aligned policy template for digital and hybrid working arrangements." },
    { cat:"checklists",tag:"Compliance Checklist",i:"✅",t:"New Employee Onboarding Checklist",d:"Ensure all new hires are correctly documented, contracted, and onboarded per South African law." },
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
              <h3 style={{ color:"#fff",fontSize:"1rem",marginBottom:6 }}>Members access the full Resource Hub</h3>
              <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",margin:0 }}>Contracts, policies, checklists — structured for South African employers.</p>
            </div>
            <button className="btn-p">Join to Access All Resources</button>
          </div>
          <div style={{ display:"flex",gap:10,marginBottom:32,flexWrap:"wrap" }}>
            {[["all","All Resources"],["templates","Templates"],["checklists","Checklists"],["guides","Guides"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {filtered.map((r,i)=>(
              <div key={i} className="card" style={{ cursor:"pointer" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                  <span style={{ background:"#F1F0EE",color:"#0B1E3E",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"2px 8px" }}>{r.tag}</span>
                  <div style={{ fontSize:"1.3rem" }}>{r.i}</div>
                </div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:700,color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{r.t}</h4>
                <p style={{ fontSize:"0.86rem",color:"#4A5568",lineHeight:1.65,marginBottom:16 }}>{r.d}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.1em",color:"#C9A84C",textTransform:"uppercase" }}>Download →</div>
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
    { type:"branded", tag:"Branded Item", icon:"💳", title:"Business Cards", desc:"Official (SA)UEO business cards for part-time organisers and representatives.", action:"Shop Business Cards", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-business-cards-part-time-organisers" },
    { type:"branded", tag:"Branded Item", icon:"🏷️", title:"Name Badge", desc:"A professional branded name badge for part-time organisers and representatives.", action:"Shop Name Badge", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-name-badge-part-time-organisers" },
    { type:"branded", tag:"Branded Item", icon:"📁", title:"Organiser File", desc:"A branded organiser file to keep member documents, notes, and workplace records together.", action:"Shop Organiser File", url:"https://www.vaoutsourcingservices.co.za/product-page/copy-of-sa-ueo-organiser-file" },
    { type:"branded", tag:"Labour Poster", icon:"⚖️", title:"SAUEO Labour Posters", desc:"Browse the official collection of paid workplace posters for display in your organisation.", action:"View Posters", url:"https://www.vaoutsourcingservices.co.za/category/saueo-branded-posters" },
    { type:"template", tag:"Template Library", icon:"📄", title:"Disciplinary Templates", desc:"Professionally drafted policies, procedures, and forms for disciplinary processes.", action:"Browse Templates", url:"https://www.vaoutsourcingservices.co.za/category/disciplinary-policy-procedures-forms" },
    { type:"template", tag:"Template Library", icon:"🤝", title:"Grievance Templates", desc:"Structured documents to help employers manage workplace grievances consistently.", action:"Browse Templates", url:"https://www.vaoutsourcingservices.co.za/category/grievances" },
    { type:"template", tag:"Template Library", icon:"📋", title:"HR Documents", desc:"Core HR documents for sound, consistent employment administration.", action:"Browse Templates", url:"https://www.vaoutsourcingservices.co.za/category/hr-documents" },
    { type:"template", tag:"Template Library", icon:"📊", title:"Performance Templates", desc:"Tools for managing poor work performance with a fair and documented process.", action:"Browse Templates", url:"https://www.vaoutsourcingservices.co.za/category/poor-work-performance" },
    { type:"template", tag:"Template Library", icon:"🧭", title:"Incapacity, Recruitment & Leave", desc:"Access templates for workplace incompatibility, incapacity, recruitment, and leave processes.", action:"Open Template Library", url:"https://www.vaoutsourcingservices.co.za/saueo-template-library" },
  ];
  const webinars = [
    { date:"18 JUN 2026", title:"Preparing for Collective Bargaining Season", detail:"A practical briefing on wage demands, sector pressure, and the employer position.", time:"10:00–11:00 SAST" },
    { date:"09 JUL 2026", title:"The CCMA Readiness Clinic", detail:"Build a defensible process before a dispute reaches conciliation or arbitration.", time:"14:00–15:30 SAST" },
    { date:"06 AUG 2026", title:"National Minimum Wage: 2026 Update", detail:"What changed, what to check, and how to keep payroll and contracts aligned.", time:"10:00–11:00 SAST" },
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
          <div style={{ display:"grid",gridTemplateColumns:"1fr 280px",gap:36,alignItems:"start",marginBottom:64 }}>
            <div>
              <span className="sl">The (SA)UEO Shop</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:16 }}>Tools that make your position <em style={{ color:"#C9A84C" }}>defensible.</em></h2>
              <p style={{ color:"#4A5568",maxWidth:640,marginBottom:16 }}>Find official (SA)UEO branded items, paid labour posters, and professionally drafted labour and HR templates in our current online stores.</p>
              <p style={{ color:"#4A5568",fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>Webinar registrations will live here as each event opens. Join briefings led by practitioners who work inside South Africa's labour system.</p>
            </div>
            <div style={{ background:"#0B1E3E",padding:24,color:"#fff" }}>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:10 }}>Checkout</div>
              <h3 style={{ color:"#fff",fontSize:"1.25rem",lineHeight:1.3,marginBottom:12 }}>Payments will run through Peach Payments.</h3>
              <p style={{ color:"rgba(255,255,255,0.68)",fontSize:"0.86rem",lineHeight:1.6,marginBottom:18 }}>Product browsing is live now. Checkout and secure payment will be connected here before launch.</p>
              <button className="btn-p" disabled style={{ width:"100%",opacity:0.55 }}>Peach Checkout Coming Soon</button>
            </div>
          </div>

          <span className="sl">Current Online Stores</span>
          <div className="gl" />
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,flexWrap:"wrap",marginBottom:28 }}>
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)" }}>Tools for organised employers.</h2>
            <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
              {[['all','All Items'],['branded','Branded Items'],['template','Templates']].map(([id,label])=>(
                <button key={id} onClick={()=>setFilter(id)} style={{ padding:"8px 16px",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer" }}>{label}</button>
              ))}
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:76 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="card" style={{ display:"flex",flexDirection:"column" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:14 }}>
                  <span style={{ background:p.type === "template" ? "#F1F0EE" : "#0B1E3E",color:p.type === "template" ? "#0B1E3E" : "#C9A84C",fontFamily:"'Barlow',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.09em",textTransform:"uppercase",padding:"3px 8px" }}>{p.tag}</span>
                  <span style={{ fontSize:"1.45rem" }}>{p.icon}</span>
                </div>
                <h3 style={{ fontSize:"1rem",lineHeight:1.35,marginBottom:10 }}>{p.title}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.88rem",lineHeight:1.65,marginBottom:18,flexGrow:1 }}>{p.desc}</p>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,borderTop:"1px solid rgba(11,30,62,0.1)",paddingTop:16 }}>
                  <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9CA3AF" }}>{p.type === "branded" ? "Shop online" : "Browse online"}</span>
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
                  <div style={{ display:"flex",gap:18,alignItems:"flex-start",marginBottom:24 }}>
                    <div style={{ width:66,height:66,background:"#0B1E3E",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",flexShrink:0 }}>{selectedProduct.icon}</div>
                    <p style={{ color:"#4A5568",lineHeight:1.75,margin:0 }}>{selectedProduct.desc}</p>
                  </div>
                  <div style={{ background:"#fff",borderLeft:"3px solid #C9A84C",padding:"16px 18px",marginBottom:24 }}>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9CA3AF",marginBottom:6 }}>How it works</div>
                    <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.65,margin:0 }}>Review the product here. Peach Payments will be connected to the checkout action so customers can pay without leaving the SAUEO website.</p>
                  </div>
                  <div style={{ display:"flex",justifyContent:"flex-end",gap:10,flexWrap:"wrap" }}>
                    <button className="btn-o" onClick={()=>setSelectedProduct(null)}>Keep Browsing</button>
                    <button className="btn-p" onClick={()=>window.alert("Peach Payments checkout will be connected here.")}>Continue to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ background:"#0B1E3E",padding:"38px 40px",marginBottom:26 }}>
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
          <p style={{ color:"#9CA3AF",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",letterSpacing:"0.04em" }}>Peach Payments checkout and webinar registration links will be connected here as each feature is integrated.</p>
        </div>
      </div>
    </div>
  );
}

// SERVICES
function Services({ go }) {
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

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Services & Programmes</div>
        <h1>Services & Programmes.<br /><em>More than labour. By institutional design.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F8F4EC" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"1fr 2fr",gap:56,marginBottom:56,alignItems:"start" }}>
            <div>
              <span className="sl">Our Operating Model</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:16,lineHeight:1.25 }}>Three principles. <em style={{ color:"#C9A84C" }}>One institution.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:16 }}>Our services are grounded in three core principles: elevated standards of representation; proactive compliance as a baseline discipline; and integrated support beyond labour.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>These are structural realities, enforced through governance systems, mandate controls, and professional standards — visible in how we behave under pressure.</p>
              <button className="btn-p" onClick={()=>go("membership")}>View Membership Options</button>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10 }}>
              {["Core Mandate","Risk Management","Evidence & Advocacy","Member Benefits","Professional Standards","Member Intelligence","Ecosystem Support"].map((cat,i)=>(
                <div key={i} style={{ background:"#0B1E3E",padding:"12px 16px",textAlign:"center" }}>
                  <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#C9A84C",lineHeight:1.4 }}>{cat}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20 }}>
            {svs.map((s,i)=>(
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
              {[["✉️","General Enquiries","info@saueo.co.za"],["🏢","Membership","membership@saueo.co.za"],["🕐","Office Hours","Monday to Friday: 07:30 to 16:30"],["🔐","Member Portal","portal.saueo.co.za"]].map(([ic,lbl,val],i)=>(
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
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:900,color:"#fff",marginBottom:4 }}>(SA)UEO</div>
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
    resourcehub: <ResourceHub />,
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
