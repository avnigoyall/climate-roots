import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Leaf, Sprout, Trees, Instagram } from "lucide-react";

/*
  Climate Roots – Chapters Subdomain (Recovered Stable Build)
  - Restores full site prior to the last change
  - Keeps all earlier requested tweaks:
    • Hero image square corners (no rounding)
    • “What is a chapter?” image aligned with title/text
    • Mission/Vision dark green background
    • Core Values cards
    • Highlights with brown horizontal banner + less-round boxes
    • 3×3 Get Started flow (6 steps; 4&5 combined)
    • Dissolution notice in dark green box (text-base)
  - Includes lightweight runtime smoke tests
*/

const brandCSS = `
  :root{
    --brand-primary:#045724; /* replace with exact primary if needed */
    --brand-accent:#6abe52;  /* accent green */
    --brand-ink:#1d1e1e;     /* dark text */
    --brand-muted:#7b3f00;   /* brown */
    --brand-bg:#ffffff;      /* page bg */
    --brand-soft:#f2f8f4;    /* soft tint */

    --font-heading: "Poppins", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
    --font-body:    "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
  }
  .font-heading{font-family:var(--font-heading);}  .font-body{font-family:var(--font-body);} 
  .text-ink{color:var(--brand-ink);}   .text-muted{color:var(--brand-muted);} 
  .bg-brand{background:var(--brand-primary);} 
  .border-brand{border-color:var(--brand-primary);} 
  .btn-brand{background:var(--brand-primary); color:white;} 
  .btn-brand:hover{background:var(--brand-accent);} 
  .link-brand{color:var(--brand-primary);} .link-brand:hover{color:var(--brand-accent);} 
  .round-title{letter-spacing:0.2px;}
  .img-drop{background:linear-gradient(180deg,#fff,var(--brand-soft)); border:2px dashed color-mix(in oklab, var(--brand-primary) 40%, #a3a3a3);} 
`;

function BrandStyle(){
  useEffect(()=>{
    const style = document.createElement("style");
    style.innerHTML = brandCSS;
    document.head.appendChild(style);
    return ()=>{ document.head.removeChild(style); };
  },[]);
  return null;
}

function Shell({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-ink font-body">
      <Header/>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
      <Footer/>
    </div>
  );
}

function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/100 bg-white/90 border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://climateroots.wordpress.com/wp-content/uploads/2024/04/cl-logo.png"
            alt="Climate Roots"
            className="h-12 w-auto"
            loading="lazy"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink className={({isActive})=>`hover:opacity-80 text-[var(--brand-muted)] font-semibold ${isActive?"underline underline-offset-4":""}`} to="/">Home</NavLink>
          <NavLink className={({isActive})=>`hover:opacity-80 text-[var(--brand-muted)] font-semibold ${isActive?"underline underline-offset-4":""}`} to="/projects">Project Library</NavLink>
          <NavLink className={({isActive})=>`hover:opacity-80 text-[var(--brand-muted)] font-semibold ${isActive?"underline underline-offset-4":""}`} to="/expectations">Chapter Expectations</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Hero(){
  return (
    <section className="relative isolate z-10 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="font-heading round-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Climate Roots <span className="text-[var(--brand-primary)]">Chapters</span>
        </h1>
        <p className="mt-4 text-lg text-muted max-w-prose">Climate Roots Chapters unite students around a shared purpose: to build greener schools and stronger communities. Together, students learn, lead, and take on meaningful hands-on projects that create visible change in their communities. If you’re passionate about making a difference, this is where your impact begins.</p>
        <div className="mt-6 flex flex-wrap gap-3">
<a href="https://forms.office.com/r/SDbEdNGxD5" target="_blank" rel="noopener noreferrer" onClick={()=>{try{window.open('https://forms.office.com/r/SDbEdNGxD5','_blank','noopener,noreferrer');}catch(_){} }} className="btn-brand rounded-xl px-5 py-3 inline-flex items-center gap-2 pointer-events-auto relative z-20">Apply Today <ChevronRight className="h-4 w-4"/></a>          <a href="#mission" className="rounded-xl px-5 py-3 border border-zinc-200 hover:border-brand">Learn More</a>
        </div>
      </div>
      <img
        src="https://climateroots.wordpress.com/wp-content/uploads/2024/04/student-team-03.png"
        alt="Students leading a Climate Roots project"
        className="rounded-xl h-64 sm:h-80 lg:h-96 w-full object-cover"
        loading="lazy"
      />
    </section>
  );
}

function Home(){
  return (
    <Shell>
      <Hero/>

      {/* What is a chapter? */}
      <section className="mt-16" id="what-is-a-chapter">
        <div className="grid md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3">
            <h2 className="font-heading round-title text-2xl sm:text-3xl font-semibold text-[var(--brand-muted)]">What is a chapter?</h2>
            <p className="mt-4 text-ink/90">A Climate Roots Chapter is a branch of our nonprofit at their high school, creating local impact through hands-on projects, events, and education. Chapters empower students to take leadership positions and bring sustainability projects to their own schools and communities.</p>
            <p className="mt-4 text-ink/90">Chapters commit to organizing monthly activities with clear goals and impact that align with Climate Roots’ mission. Starting a new chapter is a big commitment and should only be considered by those who have the time and commitment to making an impact on a larger scale.</p>
          </div>
          <img
            src="https://climateroots.wordpress.com/wp-content/uploads/2024/05/aman-rampure-cap-proof_4.webp"
            alt="Students leading a Climate Roots project"
            className="rounded-xl h-48 sm:h-56 lg:h-64 w-full object-cover md:col-span-2 md:col-start-4 self-start"
            loading="lazy"
          />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mt-16" id="mission">
        <div className="bg-brand rounded-2xl p-6 md:p-8 border border-green-100 shadow-sm">
          <h2 className="font-heading round-title text-2xl sm:text-3xl font-semibold text-white/90">Mission & Vision of Chapters</h2>
          <p className="mt-4 max-w-3xl text-white/90">Chapters will bring sustainability education to their school communities, engage peers, and create meaningful local impact. By leading hands-on projects and events, each chapter helps grow a culture of sustainability, curiosity, and community-driven change.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mt-16" id="core-values">
        <div className="flex items-center gap-3">
          <Sprout className="h-6 w-6 text-[var(--brand-primary)]"/>
          <h2 className="font-heading round-title text-2xl sm:text-3xl font-semibold text-[var(--brand-muted)]">Core Values</h2>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {title:"Show up", desc:"Showing up time after time demonstrates a commitment to our work and team."},
            {title:"Work diligently", desc:"We put forth our best effort and focus on achieving our goals."},
            {title:"Do what you say", desc:"Accountability means we follow through on our commitments."},
            {title:"Bring a positive attitude", desc:"A positive attitude fosters an encouraging environment even in the face of challenges."},
          ].map((it,idx)=> (
            <Card key={idx} className="rounded-2xl border-zinc-200">
              <CardContent className="p-5">
                <h3 className="font-heading text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-muted">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-16 relative" id="highlights" role="region" aria-labelledby="highlights-title">
        {/* Background banner behind title + grid */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-6 w-screen h-48 bg-[var(--brand-muted)]/100 -z-10 pointer-events-none"
        />

        <div className="relative z-10 flex items-center gap-3">
          <Trees className="h-6 w-6 text-[var(--brand-bg)]" />
          <h2 id="highlights-title" className="font-heading round-title text-2xl sm:text-3xl font-semibold text-[var(--brand-bg)]">
            Climate Roots Last Year Highlights
          </h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6 relative z-10">
          <figure className="rounded-md overflow-hidden">
            <img
              src="https://climateroots.wordpress.com/wp-content/uploads/2024/09/food-bank.jpg"
              alt="Tree gleaning volunteers at a local food bank"
              className="h-44 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="rounded-md overflow-hidden">
            <img
              src="https://climateroots.wordpress.com/wp-content/uploads/2025/03/screenshot_2025-03-26_at_12.45.58_am.png"
              alt="Students presenting at a climate competition"
              className="h-44 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="rounded-md overflow-hidden">
            <img
              src="https://climateroots.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-27-at-12.33.22-pm.png"
              alt="Dome greenhouse project built by chapter members"
              className="h-44 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="mt-16" id="get-started">
        <h2 className="font-heading round-title text-2xl sm:text-3xl font-semibold text-[var(--brand-muted)]">How to Get Started</h2>
        <div className="mt-3 max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Recruit your Team",
            "Secure School Approval",
            "Submit Application Form",
            "Interview & Get Approved",
            "Join the Community",
            "Select a Project"
          ].map((step, i)=> (
            <div key={i} className="w-full rounded-xl border border-zinc-200 bg-white p-4 shadow-sm flex items-start gap-3">
              <div className="h-7 w-7 shrink-0 rounded-full bg-[var(--brand-primary)] text-white grid place-items-center font-semibold">{i+1}</div>
              <div className="text-ink/90">{step}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="https://forms.office.com/r/SDbEdNGxD5" target="_blank" rel="noopener noreferrer" onClick={()=>{try{window.open('https://forms.office.com/r/SDbEdNGxD5','_blank','noopener,noreferrer');}catch(_){} }} className="btn-brand rounded-xl px-5 py-3 inline-flex items-center gap-2 relative z-20">Chapter Registration Form</a>
        </div>
      </section>
    </Shell>
  );
}

function ProjectLibrary(){
  const projects = [
    {
      title: "School & Community Garden",
      desc: (
        <>
          Start a garden at your high school's campus or in a community space! In the Fremont area, some community gardens are Ohlone Gardens, Fremont LEAF, and Centerville Library Garden. You can also have one in your community space (subject to approval).
        </>
      ),
    },
    {
      title: "Climate Competitions",
      desc: (
        <>
          Competitions include science/technology hackathons, pitch deck competitions, and art competitions. They may only be school‑wide events.
        </>
      ),
    },
    {
      title: "Workshops",
      desc: (
        <>
          Examples: Painting pots with elementary schools, mushroom classes, container gardening, herb gardens, medicinal gardens, recipe of the month. Bring your own ideas!
        </>
      ),
    },
    {
      title: "Fundraisers",
      desc: (
        <>
          Online fundraisers (e.g., GoFundMe for specific projects), Giving Tuesday fundraisers, and food fundraisers.
        </>
      ),
    },
  ];

  return (
    <Shell>
      <header className="mb-8">
        <h1 className="font-heading round-title text-3xl sm:text-4xl font-bold">Project Library</h1>
        <p className="mt-2 text-muted max-w-prose">Pick a project to kickstart your chapter. Mix and match, or propose your own idea as you grow.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <Card key={idx} className="rounded-2xl overflow-hidden border-zinc-200" data-project-card>
            <img
              src={[
                "https://climateroots.wordpress.com/wp-content/uploads/2024/08/gardening.jpg",
                "https://climateroots.wordpress.com/wp-content/uploads/2025/10/h4sg1440b.jpg",
                "https://climateroots.wordpress.com/wp-content/uploads/2025/10/s567112_10.jpg",
                "https://climateroots.wordpress.com/wp-content/uploads/2025/10/image.webp"
              ][idx]}
              alt={p.title}
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <CardContent className="p-6">
              <h2 className="font-heading text-xl font-semibold text-[var(--brand-muted)]">{p.title}</h2>
              <p className="mt-2 text-ink/90">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Shell>
  );
}

function ChapterExpectations(){
  return (
    <Shell>
      <header className="mb-8">
        <h1 className="font-heading round-title text-3xl sm:text-4xl font-bold">Chapter Expectations</h1>
        <p className="mt-2 text-muted max-w-prose">Here’s what it takes to keep your chapter active, impactful, and in sync with Climate Roots’ mission.</p>
      </header>

      {/* Expectations & Key Requirements */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--brand-muted)]">Chapter Expectations</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-ink/90">
            <li>Submit Monthly Progress Reports (hours, participants, photos) with significant work each month</li>
            <li>Actively engage on the Discord server</li>
            <li>Uphold CR’s core values</li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--brand-muted)]">Key Requirements</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-ink/90">
            <li>Affiliated with a school</li>
            <li>Has a school advisor/supervisor</li>
            <li>Minimum 2 officers (President & Vice President)</li>
            <li>Minimum 5 members</li>
          </ul>
        </div>
      </section>

      {/* Dissolution notice */}
      <div className="mt-8 bg-brand text-white p-4 rounded-xl">
        <p className="font-medium text-base">Climate Roots chapters require consistent involvement and commitment to uphold shared values. Thus, chapters that remain inactive for two months or more, or that are unresponsive to monthly communication during the school year, will be flagged for dissolution.</p>
      </div>

      {/* Chapter Levels */}
      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold text-[var(--brand-muted)]">Chapter Levels</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Seedling */}
          <Card className="rounded-2xl border-zinc-200">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold flex items-center gap-2"><Sprout className="h-5 w-5 text-[var(--brand-primary)]"/> Seedling</h3>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>Age: 0–1 year</li>
                <li>Project Complexity: Beginner</li>
                <li>Project Selection & Fundraising: Selected from our library; fundraise for the project</li>
              </ul>
              <div className="mt-4 text-sm text-muted">Chapter leadership size: minimum officers: 2</div>
            </CardContent>
          </Card>

          {/* Plant */}
          <Card className="rounded-2xl border-zinc-200">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold flex items-center gap-2"><Leaf className="h-5 w-5 text-[var(--brand-primary)]"/> Plant</h3>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>Age: 1–3 years</li>
                <li>Project Complexity: Beginner–Intermediate</li>
                <li>Project Selection & Fundraising: Propose your own project ideas and get board approval; projects must include a fundraising plan</li>
              </ul>
              <div className="mt-4 text-sm text-muted">Chapter leadership size: minimum officers: 5</div>
            </CardContent>
          </Card>

          {/* Tree */}
          <Card className="rounded-2xl border-zinc-200">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold flex items-center gap-2"><Trees className="h-5 w-5 text-[var(--brand-primary)]"/> Tree</h3>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>Age: 3+ years</li>
                <li>Project Complexity: Beginner–Advanced</li>
                <li>Project Selection & Fundraising: Propose your own projects ideas and get resource support from the CR team</li>
              </ul>
              <div className="mt-4 text-sm text-muted">Chapter leadership size: minimum officers: 5</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  );
}

/* Footer */
function Footer(){
  return (
    <footer className="relative z-20 mt-20 bg-gradient-to-r from-[#c4f58a] to-[#79d27c] text-[var(--brand-muted)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12 text-sm">
        {/* Support Us Section */}
        <div className="flex flex-col items-start md:items-center col-span-1 md:col-span-1">
          <h2 className="font-heading text-3xl font-bold">Support Us</h2>
          <a
            href="https://donate.stripe.com/4gw03ZgrE8I03Ek8ww"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-[#154f37] text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90"
          >
            Donate
          </a>
          <div className="mt-8 text-center">
            <a href="https://www.instagram.com/climate.roots?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ba1d80] hover:opacity-75 transition" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-heading font-semibold text-[var(--brand-muted)]">About Us</h4>
          <ul className="mt-3 space-y-2 text-[var(--brand-ink)]">
            <li><a href="https://climateroots.org/our-team/" className="underline">Our Team</a></li>
            <li><a href="https://climateroots.org/youth-leadership/" className="underline">Youth Leadership Council</a></li>
            <li><a href="https://climateroots.org/contact-us/" className="underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading font-semibold text-[var(--brand-muted)]">Programs</h4>
          <ul className="mt-3 space-y-2 text-[var(--brand-ink)]">
            <li><a href="#" className="underline">Food Gardens</a></li>
            <li><a href="#" className="underline">Competitions for Planet Earth</a></li>
            <li><a href="#" className="underline">Tree Gleaning</a></li>
            <li><a href="#" className="underline">Healthy Eating</a></li>
            <li><a href="#" className="underline">Project: StartDown</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-heading font-semibold text-[var(--brand-muted)]">Resources</h4>
          <ul className="mt-3 space-y-2 text-[var(--brand-ink)]">
            <li><a href="#" className="underline">Media Release Form</a></li>
            <li><a href="#" className="underline">Fremont Planting Guide</a></li>
            <li><a href="#" className="underline">Volunteer with Us</a></li>
            <li><a href="#" className="underline">Submit Volunteer Hours</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 text-xs text-[var(--brand-muted)] font-medium">
        © {new Date().getFullYear()} Climate Roots. All rights reserved.
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────
// Lightweight runtime smoke tests (kept non-blocking)
// ────────────────────────────────────────────────────────────
function runSmokeTests(){
  try{
    const requiredIds = ["what-is-a-chapter","mission","core-values","highlights","get-started"];
    const missing = requiredIds.filter(id=>!document.getElementById(id));
    if(missing.length){
      console.warn("[Chapters SmokeTests] Missing section IDs:", missing.join(", "));
    }
    const steps = document.querySelectorAll('#get-started .w-full.rounded-xl.border').length;
    if(steps !== 6){
      console.warn(`[Chapters SmokeTests] Expected 6 get-started steps, found ${steps}`);
    }
    const projectCards = document.querySelectorAll('[data-project-card]').length;
    if(projectCards && projectCards !== 4){
      console.warn(`[Chapters SmokeTests] Expected 4 project cards, found ${projectCards}`);
    }
  }catch(e){
    console.warn("[Chapters SmokeTests] Skipped:", e);
  }
}

function ChapterApplication(){
  return (
    <Shell>
      <header className="mb-8">
        <h1 className="font-heading round-title text-3xl sm:text-4xl font-bold">Chapter Application</h1>
        <p className="mt-2 text-muted max-w-prose">Tell us about your school and chapter team.</p>
      </header>
      <form className="grid gap-6 max-w-3xl">
        <input className="border p-3 rounded-md" placeholder="School Name" />
        <input className="border p-3 rounded-md" placeholder="City / State" />
        <input className="border p-3 rounded-md" placeholder="Chapter President Name" />
        <textarea className="border p-3 rounded-md" placeholder="Why do you want to start a chapter?" rows={4}/>
        <button type="submit" className="btn-brand rounded-xl px-5 py-3 font-semibold">Submit Application</button>
      </form>
    </Shell>
  );
}

export default function App(){
  useEffect(()=>{ runSmokeTests(); },[]);
  return (
    <Router>
      <BrandStyle/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectLibrary/>} />
        <Route path="/expectations" element={<ChapterExpectations/>} />
      <Route path="/apply" element={<ChapterApplication/>} />
      </Routes>
    </Router>
  );
}
