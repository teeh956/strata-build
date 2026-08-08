type FooterLinksProps = {
  items: Array<{ label: string; onClick?: () => void }>;
};

export default function FooterLinks({ items }: FooterLinksProps) {
  return (
    <ul className="space-y-3 text-sm text-[#F5F3EF]/80">
      {items.map((item) => (
        <li key={item.label}>
          <button
            type="button"
            onClick={item.onClick}
            className="group relative inline-flex items-center text-left transition-colors duration-250 ease-out hover:text-[#EA5B0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1B19]"
          >
            <span>{item.label}</span>
            <span className="pointer-events-none absolute bottom-[-0.25rem] left-0 h-px w-full origin-left scale-x-0 bg-[#EA5B0C] transition-transform duration-250 ease-out group-hover:scale-x-100" />
          </button>
        </li>
      ))}
    </ul>
  );
}
