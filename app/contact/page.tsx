import type { Metadata } from "next";
import { Space_Grotesk,Inter,IBM_Plex_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:["latin"], weight:["500","700"], variable:"--font-display"});
const plexMono = IBM_Plex_Mono({subsets:["latin"], weight:["400","500"], variable:"--font-mono" });

export const metadata: Metadata = {
    title:"Contact-Strata Build",
    description:"Request a site consultation from Strata Build's structural reinforcement team.",
};
export default function ContactPage(){
    return(
        <main className={`${spaceGrotesk.variable} ${plexMono.variable} min-h-screen bg-[#EDEBE7] text-[#1C1B19]`}>
            <div className="grid md:grid-cols-[380px_1fr] min-h-screen">
                {/*Title block sidebar*/}
                <aside className="bg-[#1C1B19] text-white p-8 md:p-12 flex-col justify-between">
                    <div>
                        <a href="/" className="font-mono text-xs tracking-widest text-white/60 hover:text-white transition">
                        &larr;STRATA BUILD 
                        </a>
                        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-8">
                            Start your project
                        </h1>
                        <div className="mt-4 h-1 w-12 bg-[#EA5B0C]" />
                        <p className="mt-6 text-white/70 leading-relaxed">
                        Tell us about the build. A site engineer will follow up within one business day.
                        </p>
                    </div>
                    <dl className="mt-12 space-y-5 font-mono text-sm">
                        <div>
                            <dt className="text-white/40 tracking-widest text-xs">LOCATION</dt>
                            <dd className="mt-1">Thika road, Kiambu County</dd>
                        </div>
                        <div>
                            <dt className="text-white/40 tracking-widest text-xs">EMAIL</dt>
                            <dd className="mt-1">hello@stratabuild.co.ke</dd>
                        </div>
                        <div>
                            <dt className="text-white/40 tracking-widest text-xs">RESPONSE TIME</dt>
                            <dd className="mt-1">Within 1 business day</dd>
                        </div>
                    </dl>
                </aside>

                {/* form*/}
                <section className="p-8 md:p-16 flex items-center">
                    <form
                    action="https://formspree.io/f/xwvgnlwd"
                    method="POST"
                    className="w-full max-w-xl space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="font-mono text-xs tracking-widest text-[#1C1B19]/50">
                            FULLNAME
                            </label>
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 focus:border-[#EA5B0C] focus:outline-none transition"
                            placeholder="Jane Wanjiku"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="font-mono text-xs tracking-widest text-[#1C1B19]">
                                PHONE NUMBER
                            </label>
                            <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 focus:border-[#EA5B0C] focus:outline-none transition"
                            placeholder="07xxxxxxxx"
                            />
                        </div>

                        <div>
                            <label htmlFor="projectType" className="font-mono text-xs tracking-widest text-[#1C1B19]/50">
                            PROJECT TYPE
                            </label>
                            <select
                            id="projectType"
                            name="projectType"
                            required
                            defaultValue=""
                            className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 focus:border-[#EA5B0C] focus:outline-none transition"
                            >
                                <option value="" disabled>Select one</option>
                                <option value="residential">Residential Build</option>
                                <option value="commercial">Commercial Build</option>
                                <option value="reinforcement">Reinforcement/Steel fixing</option>
                                <option value="consultation">Structural Consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="font-mono text-xs tracking-widest text-[#1C1B19]/50">
                            PROJECT DETAILS
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 focus:border-[#EA5B0C] focus:outline-none transition resize-none"
                            placeholder="location,approximate scope and timeline"
                            />
                        </div>

                        <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-[#EA5B0C] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#d14f09] transition"
                        >
                            Send Request
                        </button>
                    </form>
                </section>
            </div>
        </main>
    )
}