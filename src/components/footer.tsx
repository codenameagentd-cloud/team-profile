export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 pt-[120px] pb-12 border-t border-black/[0.06] mt-[120px]">
      <p
        className="text-[clamp(32px,4vw,48px)] font-normal tracking-[-0.03em] leading-[1.15] max-w-[480px]"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        Built by the
        <br />
        team itself.
      </p>
      <div className="text-xs text-[#8A8680] md:text-right leading-8 mt-10 md:mt-0">
        <p>The team behind the team.</p>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
