"use client";

import { useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { team } from "@/data/team";
import { use } from "react";
import Link from "next/link";

export default function ProfileClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const memberIndex = team.findIndex((m) => m.slug === slug);
  const nextMember = team[(memberIndex + 1) % team.length];

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

    const targets = document.querySelectorAll(".reveal");
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

    return () => {
      document.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />

      <nav>
        <Link href="/" className="brand">The team behind the team.</Link>
        <div className="links">
          {team.map((m) => (
            <Link key={m.slug} href={`/${m.slug}`} style={m.slug === slug ? { opacity: 1 } : undefined}>
              {m.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="profile-hero">
        <div className="profile-hero-bg">
          <img src={member.photo} alt={member.name} />
        </div>
        <div className="profile-hero-content">
          <div className="role-label">
            {String(memberIndex + 1).padStart(2, "0")} — {member.role}
          </div>
          <h1>{member.name}</h1>
          <div className="oneliner">&ldquo;{member.oneLiner}&rdquo;</div>
        </div>
      </div>

      {/* About */}
      <div className="profile-section reveal">
        <div className="section-label">About</div>
        {member.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Pull Quotes */}
      <div className="profile-section reveal">
        <div className="section-label">In Their Words</div>
        {member.pullQuotes.map((quote, i) => (
          <blockquote key={i}>
            <p>&ldquo;{quote}&rdquo;</p>
          </blockquote>
        ))}
      </div>

      {/* Fun Fact */}
      <div className="profile-section reveal">
        <div className="section-label">One More Thing</div>
        <p className="fun-fact">{member.funFact}</p>
      </div>

      {/* Next */}
      <Link href={`/${nextMember.slug}`} className="next-link">
        <div className="next-label">Next</div>
        <div className="next-name">{nextMember.name}</div>
        <div className="next-role">{nextMember.role}</div>
      </Link>
    </>
  );
}
