import ContactForm from "./ContactForm";

const CONTACT = {
  email: "hello@leiruiholdings.com",
  phone: "(949) 447-7571",
  phoneHref: "tel:+19494477571",
  location: "Laguna Beach, California",
};

const TALENT = [
  {
    title: "Brand deals & sponsorships",
    text: "We pitch you to brands, negotiate your rates, review every contract and make sure you get paid on time.",
  },
  {
    title: "TikTok growth strategy",
    text: "Content planning, posting schedule, trends, LIVE and analytics reviews, so each video has a job to do.",
  },
  {
    title: "TikTok Shop & affiliate",
    text: "Pick the right products, set up affiliate links and build sales content that converts without feeling like an ad.",
  },
  {
    title: "Multi-platform expansion",
    text: "Turn your TikTok audience into Instagram Reels, YouTube Shorts and Snapchat followers, with one plan for all of them.",
  },
  {
    title: "Monetization",
    text: "Creator rewards, subscriptions, merch, digital products and paid community — more than one way to earn.",
  },
  {
    title: "Reputation & community",
    text: "Comment moderation, DM triage and a calm plan for when a post goes sideways.",
  },
];

const BUSINESS = [
  {
    title: "Business setup",
    text: "LLC formation, EIN, business bank account and the paperwork in the right order.",
  },
  {
    title: "Bookkeeping & invoicing",
    text: "Track income from every platform and brand, send invoices, and stay ready for tax time.",
  },
  {
    title: "Contracts & admin",
    text: "Templates, contract review, usage rights and the back-office tasks that eat your week.",
  },
  {
    title: "Operations & automation",
    text: "Email, CRM, scheduling and simple automations so the business runs while you create.",
  },
  {
    title: "Marketing & growth consulting",
    text: "Positioning, offers, launch plans and social strategy for small businesses and brands.",
  },
  {
    title: "Creator partnerships for brands",
    text: "Businesses: we find and manage the right creators for your campaign, start to finish.",
  },
];

const STEPS = [
  { n: "01", title: "Free intro call", text: "Tell us where you are and where you want to go. 20 minutes, no pressure." },
  { n: "02", title: "A clear plan", text: "We write down what we'll do, what it costs and what success looks like." },
  { n: "03", title: "We run it together", text: "We handle the work and send a short monthly report on results." },
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
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            Lei Rui <span>Holdings</span>
          </a>
          <nav>
            <a href="#creators">Creators</a>
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
              We grow creators on TikTok&nbsp;&amp;&nbsp;social —
              <br />
              and run the business behind them.
            </h1>
            <p className="lead">
              Lei Rui Holdings manages TikTok and social media creators, and handles the business side for creators and
              small companies: setup, money, contracts and operations.
            </p>
            <div className="actions">
              <a href="#contact" className="btn">Book a free intro call</a>
              <a href="#creators" className="btn btn-ghost">See what we do</a>
            </div>
          </div>
        </section>

        <section id="creators" className="section">
          <div className="wrap">
            <p className="eyebrow">For creators</p>
            <h2>Talent management for TikTok &amp; social media</h2>
            <p className="sub">You make the content. We bring the deals, the strategy and the structure.</p>
            <Cards items={TALENT} />
          </div>
        </section>

        <section id="business" className="section alt">
          <div className="wrap">
            <p className="eyebrow">For creators &amp; businesses</p>
            <h2>Business functions, handled</h2>
            <p className="sub">The back office most creators and small businesses don't have time for.</p>
            <Cards items={BUSINESS} />
          </div>
        </section>

        <section className="section">
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

        <section id="about" className="section alt">
          <div className="wrap about">
            <div>
              <p className="eyebrow">About</p>
              <h2>Small team. Personal attention.</h2>
            </div>
            <div>
              <p>
                Lei Rui Holdings LLC is an LGBTQ+-owned talent management and business consulting company based in
                Laguna Beach, California, founded by Rexford Del Ray.
              </p>
              <p>
                We keep our roster small on purpose, so every creator and client works directly with us — not a junior
                account manager.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap contact">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's talk</h2>
              <p className="sub">Creator, business or brand — send a note and we'll reply within two business days.</p>
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
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Lei Rui Holdings LLC</span>
          <span>{CONTACT.location}</span>
        </div>
      </footer>
    </>
  );
}
