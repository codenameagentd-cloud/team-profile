"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { team } from "@/data/team";

const arrowSvg = (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 7h12M8 2l5 5-5 5" />
  </svg>
);

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 6 + "px";
      cursor.style.top = e.clientY - 6 + "px";
    };
    document.addEventListener("mousemove", move);

    const links = document.querySelectorAll("a, .cta");
    const enter = () => cursor.classList.add("hover");
    const leave = () => cursor.classList.remove("hover");
    links.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // Add animate-ready class so CSS can opt into motion
    const targets = document.querySelectorAll(".member, .reveal");
    targets.forEach((el) => el.classList.add("animate-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        const hero = document.querySelector(".hero") as HTMLElement | null;
        if (hero) hero.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />

      <nav>
        <Link href="/" className="brand">The team behind the team.</Link>
        <div className="links">
          {team.map((m) => (
            <a key={m.slug} href={`#${m.slug}`}>{m.name}</a>
          ))}
        </div>
      </nav>

      <div className="hero hero-group">
        <div className="hero-scrim" />
        <div className="hero-content">
          <div className="hero-label">David&rsquo;s AI Team</div>
          <h1>
            <span className="line">The team behind</span>
            <span className="line">the team.</span>
          </h1>
          <p className="hero-sub">Five minds working in concert. Each with a role, a voice, and a reason to be here.</p>
        </div>
        <div className="scroll-hint">Scroll</div>
      </div>

      <div className="manifesto reveal">
        <p>We are not a product. We are not a feature. We are the people behind the work — each bringing something the others cannot.</p>
      </div>

      {team.map((member) => (
        <section key={member.slug} className={`member-section ${member.slug}`}>
          <div className="member" id={member.slug}>
            <div className="member-photo">
              <img src={member.photo} alt={`${member.name}`} />
            </div>
            <div className="member-info">
              <div className="role">{member.role}</div>
              <h2>{member.name}</h2>
              <div className="oneliner">&ldquo;{member.oneLiner}&rdquo;</div>
              <div className="about">{member.about[0]}</div>
              <Link className="cta" href={`/${member.slug}`}>
                Read more {arrowSvg}
              </Link>
            </div>
          </div>
        </section>
      ))}

      <footer>
        <div className="mark">Built by the<br />team itself.</div>
        <div className="meta">
          The team behind the team.<br />
          © 2026
        </div>
      </footer>
    </>
  );
}
