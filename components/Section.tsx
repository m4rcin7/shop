"use client";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`h-max my-12 mx-auto px-4 ${className}`}>
      {title && <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
