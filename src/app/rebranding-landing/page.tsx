import Image from "next/image";
import {
  ArrowRight,
  CircleGauge,
  Link as LinkIcon,
  Zap,
} from "lucide-react";
import styles from "./rebranding-landing.module.css";

const codeLines = [
  <><b>import</b> {"{ Panel }"} <b>from</b> <span>&apos;fivepixels&apos;</span>;</>,
  null,
  <><b>export default function</b> App() {"{"}</>,
  <>{"  "}return (</>,
  <>{"    "}&lt;&gt;</>,
  <>{"      "}&lt;Report /&gt;</>,
  <>{"      "}&lt;section data-report-id=&quot;hero&quot; data-report-type=&quot;group&quot;&gt;</>,
  <>{"      "}&lt;/&gt;</>,
  <>{"    "})</>,
  <>{"}"}</>,
];

export default function RebrandingLandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <header className={styles.header}>
          <Image
            className={styles.headerLogo}
            src="/rebranding/fivepixels.png"
            alt="fivepixels"
            width={1558}
            height={284}
            priority
          />
          <nav aria-label="Primary navigation">
            <a className={styles.active} href="#guide">GUIDE</a>
            <a href="#settings">SETTINGS</a>
            <a href="#examples">EXAMPLES</a>
          </nav>
        </header>

        <div className={styles.hero}>
          <h1>A Tool for Perfect QA</h1>
          <p>
            fivepixels is a <strong>blazing-fast ⚡</strong> qa corporate tool
            <br />
            that powers next-generation web applications.
          </p>

          <a className={styles.install} href="#setup">
            npm i stitchable <LinkIcon size={15} strokeWidth={2.4} />
          </a>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#setup">
              Get Started <ArrowRight size={17} />
            </a>
            <a className={styles.secondaryButton} href="#guide">
              View Documentation <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className={styles.orangeShowcase}>
          <div className={styles.ruler} />
          <div className={styles.showcasePanel}>
            <h2>support screen panel ui</h2>
            <Image
              className={styles.dashboard}
              src="/rebranding/dashboard.png"
              alt="Radar dashboard"
              width={745}
              height={713}
            />
          </div>
          <div className={styles.showcasePanel}>
            <Image
              className={styles.feedback}
              src="/rebranding/feedback.png"
              alt="Suggested feedback panel"
              width={540}
              height={461}
              priority
            />
            <h2 className={styles.clickCopy}>just click<br />everywhere</h2>
          </div>
        </div>
      </section>

      <section className={styles.marqueeSection} aria-label="Product benefits">
        <div className={styles.marqueeTrack}>
          <span>Easy to use + Performance + Silk UI</span>
          <span>Easy to use + Performance + Silk UI</span>
        </div>
      </section>

      <section className={styles.setup} id="setup">
        <div className={styles.setupGrid}>
          <div>
            <h2>too easy setup</h2>
            <ol>
              <li>import “Panel” from ‘fivepixels’</li>
              <li>setup you globally layout file</li>
              <li>and enjoy :D</li>
            </ol>
          </div>

          <pre className={styles.code}>
            <code>
              {codeLines.map((line, index) => (
                <span key={index}>{line ?? "\u00a0"}</span>
              ))}
            </code>
          </pre>
        </div>

        <div className={styles.metrics}>
          <div><Zap size={16} fill="currentColor" /><strong>blazing fast profile</strong></div>
          <div><b>60</b><strong>easy to use</strong></div>
          <div><b>60</b><strong>easy 1 way</strong></div>
          <div><CircleGauge size={16} /><strong>1 second installation</strong></div>
        </div>
      </section>

      <section className={styles.openSource}>
        <div className={styles.openSourceCopy}>
          <h2>Free &amp; Open Source</h2>
          <p>
            fivepixels is free and open source, made possible by a full-time
            <br />
            team and passionate open-source contributors.
          </p>
          <a href="#contribute">contribute <ArrowRight size={16} /></a>
        </div>

        <div className={styles.profile}>
          <div className={styles.profileCaption}>
            <strong>BROUGHT BY CODI</strong>
            <span>@kimsangjunv1</span>
          </div>
          <Image
            src="/rebranding/post-profile.png"
            alt="Codi profile"
            width={512}
            height={512}
          />
        </div>
      </section>

      <section className={styles.wordmarkSection} aria-label="fivepixels">
        <Image
          src="/rebranding/fivepixels.png"
          alt="fivepixels"
          width={1558}
          height={284}
        />
      </section>

      <section className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.footerAuthor}>
            <Image
              src="/rebranding/post-profile.png"
              alt=""
              width={512}
              height={512}
            />
            <strong>CODI</strong>
            <span>@kimsangjunv1</span>
            <p>Designed and Built by<br />kimsangjun</p>
          </div>

          <div>
            <small>current available library</small>
            <strong className={styles.footerBrand}>agit.<br />fivepixels.</strong>
          </div>

          <div>
            <small>current available library</small>
            <div className={styles.socials}>
              <span aria-label="GitHub">GH</span>
              <span aria-label="LinkedIn">in</span>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
