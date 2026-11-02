import ContactForm from "./ContactForm";

const CONTACT = {
  email: "hello@leiruiholdings.com",
  phone: "(949) 447-7571",
  phoneHref: "tel:+19494477571",
  location: "Laguna Beach, California",
};

// NGLCC LGBTBE certification is issued.
const NGLCC_CERTIFIED = true;
const LGBTQ_LABEL = NGLCC_CERTIFIED
  ? "Certified LGBTQ+ Business Enterprise (NGLCC)"
  : "Proudly LGBTQ+-owned";

const ROLES = [
  {
    title: "IT & tech",
    text: "Software engineers, IT support, data analysts, cloud and cybersecurity specialists, project managers.",
  },
  {
    title: "Professional",
    text: "Finance and accounting, operations, sales, marketing, administration and consultants.",
  },
  {
    title: "Creators & media",
    text: "TikTok creators, on-camera hosts, speakers, performers and other creative professionals.",
  },
];

const COMPANIES = [
  {
    title: "Full-time placement",
    text: "We find, screen and introduce candidates who fit the role and your team.",
  },
  {
    title: "Contract & project talent",
    text: "Skilled people for a project, a season or a gap on your team — fast.",
  },
  {
    title: "Creator & speaker bookings",
    text: "TikTok creators, hosts and speakers for campaigns, events and brand work.",
  },
];

const TALENT = [
  {
    title: "Career management",
    text: "A long-term plan for your career — which roles, projects and partners to say yes to, and which to pass on.",
  },
  {
    title: "Placement & bookings",
    text: "We find and secure work: full-time roles, contracts, projects, events, speaking and brand campaigns.",
  },
  {
    title: "Contract negotiation",
    text: "Fair rates, clear terms and protected rights. We read the fine print so you don't have to.",
  },
  {
    title: "Brand partnerships",
    text: "Endorsements and ambassador roles with companies that fit who you are.",
  },
  {
    title: "Public image & PR",
    text: "Your bio, press kit and media requests handled with care and consistency.",
  },
  {
    title: "Talent development",
    text: "Résumé, interview and on-camera coaching, plus portfolio guidance to get you ready for the next level.",
  },
];

const BUSINESS = [
  {
    title: "Business setup",
    text: "LLC formation, EIN, business bank account and the paperwork in the right order.",
  },
  {
    title: "Bookkeeping & invoicing",
    text: "Track every payment, send invoices, follow up on late fees and stay ready for tax time.",
  },
  {
    title: "Contracts & admin",
    text: "Templates, contract tracking and the back-office tasks that eat your week.",
  },
  {
    title: "Scheduling & travel",
    text: "Calendar, travel and logistics for every booking, so you only have to show up.",
  },
  {
    title: "Operations",
    text: "Simple systems for email, client records and scheduling that keep a small business running smoothly.",
  },
  {
    title: "Business consulting",
    text: "Pricing, offers, partnerships and growth plans for independent talent and small companies.",
  },
];

const STEPS = [
  { n: "01", title: "Free intro call", text: "Tell us where you are and where you want to go. 20 minutes, no pressure." },
  { n: "02", title: "A clear plan", text: "We write down what we'll do, what it costs and what success looks like." },
  { n: "03", title: "We work together", text: "We handle the work and send a short monthly update on progress." },
];

function Cards({ items }) {
  return (
    <div className="cards">
      {items.map((item) => (
        <article className="card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="pride-banner">
        <div className="pride-stripes" aria-hidden="true" />
        <p className="wrap">🏳️‍🌈 {LGBTQ_LABEL} · Everyone is welcome here</p>
      </div>

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            Lei Rui <span>Holdings</span>
          </a>
          <nav>
            <a href="#talent">Talent</a>
            <a href="#companies">Companies</a>
            <a href="#business">Business</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-sm">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Talent management · Business services</p>
            <h1>
              The right talent
              <br />
              for every role.
            </h1>
            <p className="lead">
              Lei Rui Holdings represents and places talent across IT, professional services and digital media — from
              software engineers to TikTok creators — and handles the business side behind them.
            </p>
            <div className="actions">
              <a href="#contact" className="btn">Book a free intro call</a>
              <a href="#talent" className="btn btn-ghost">See what we do</a>
            </div>
            <p className="badge">
              <span className="badge-dot" aria-hidden="true" />
              {LGBTQ_LABEL}
            </p>
          </div>
        </section>

        <section id="talent" className="section">
          <div className="wrap">
            <p className="eyebrow">Who we represent</p>
            <h2>We fill many roles</h2>
            <p className="sub">One agency for technical, professional and creative talent.</p>
            <Cards items={ROLES} />
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <p className="eyebrow">For talent</p>
            <h2>Talent management</h2>
            <p className="sub">You focus on the work. We bring the opportunities, the deals and the structure.</p>
            <Cards items={TALENT} />
          </div>
        </section>

        <section id="companies" className="section">
          <div className="wrap">
            <p className="eyebrow">For companies</p>
            <h2>Need someone? We'll find them.</h2>
            <p className="sub">Tell us the role. We bring vetted people you can trust.</p>
            <Cards items={COMPANIES} />
          </div>
        </section>

        <section id="business" className="section">
          <div className="wrap">
            <p className="eyebrow">For talent &amp; small businesses</p>
            <h2>Business functions, handled</h2>
            <p className="sub">The back office most independent talent and small businesses don't have time for.</p>
            <Cards items={BUSINESS} />
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <p className="eyebrow">How it works</p>
            <h2>Three simple steps</h2>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap about">
            <div>
              <p className="eyebrow">About</p>
              <h2>Small team. Personal attention.</h2>
            </div>
            <div>
              <p>
                Lei Rui Holdings LLC is an NGLCC-certified, LGBTQ+-owned talent management and business consulting company based in
                Laguna Beach, California, founded by Rexford Del Ray.
              </p>
              <p>
                We keep our roster small on purpose, so every client works directly with us — not a junior account
                manager. We are proud to champion LGBTQ+ talent and allies alike.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="wrap contact">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's talk</h2>
              <p className="sub">Talent, hiring company or business client — send a note and we'll reply within two business days.</p>
              <ul className="contact-list">
                <li>
                  <span>Phone</span>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <span>Location</span>
                  {CONTACT.location}
                </li>
              </ul>
            </div>
            <ContactForm email={CONTACT.email} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="pride-stripes" aria-hidden="true" />
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Lei Rui Holdings LLC · {LGBTQ_LABEL}</span>
          <span>{CONTACT.location}</span>
        </div>
      </footer>
    </>
  );
}
