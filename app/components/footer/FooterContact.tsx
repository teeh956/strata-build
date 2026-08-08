function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function MapPinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function ClockIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16v16H4z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#F5F3EF]/80">
      <span className="mt-0.5 text-[#EA5B0C]">{icon}</span>
      <span>
        <span className="block text-[0.7rem] uppercase tracking-[0.24em] text-[#F5F3EF]/60">
          {label}
        </span>
        <span className="mt-1 block">{value}</span>
      </span>
    </li>
  );
}

export default function FooterContact() {
  return (
    <ul className="space-y-4 text-sm text-[#F5F3EF]/80">
      <ContactItem icon={<PhoneIcon size={16} />} label="Phone" value="+254 7XX XXX XXX" />
      <ContactItem icon={<MailIcon size={16} />} label="Email" value="hello@stratabuild.co.ke" />
      <ContactItem icon={<MapPinIcon size={16} />} label="Location" value="Nairobi, Kenya" />
      <ContactItem icon={<ClockIcon size={16} />} label="Business Hours" value="Mon - Fri: 8:00 AM - 5:00 PM" />
    </ul>
  );
}
