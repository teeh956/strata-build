import type { ReactNode } from "react";

type FooterColumnProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function FooterColumn({ title, children, className = "" }: FooterColumnProps) {
  return (
    <div className={`space-y-4 text-center sm:text-left ${className}`.trim()}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F3EF]">
        {title}
      </h3>
      {children}
    </div>
  );
}
