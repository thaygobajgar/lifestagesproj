type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`w-full max-w-screen-xl mx-auto px-4 py-[40px] md:py-[72px] ${className}`}
    >
      {children}
    </section>
  );
}
