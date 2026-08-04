import type { Metadata } from "next";
import ContactPageClient from "../components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact-Strata Build",
  description: "Request a site consultation from Strata Build's structural reinforcement team.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}