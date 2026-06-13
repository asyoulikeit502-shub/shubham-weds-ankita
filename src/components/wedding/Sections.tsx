import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Countdown from "./Countdown";
import Ornament from "./Ornament";
import FloatingDecor from "./FloatingDecor";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_BG =
  "https://images.unsplash.com/photo-1775566416976-e4d9dc48dbf8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const GALLERY = [
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg"

];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);
  return ref;
}

/* ---------------- HERO ---------------- */
export function Hero() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,7,7,0.85) 0%, rgba(20,7,7,0.65) 50%, rgba(20,7,7,0.95) 100%)",
        }}
      />
      <FloatingDecor />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-10 text-center sm:px-6">
        <p data-reveal className="font-display text-[20px] tracking-[0.4em] text-gold sm:tracking-[0.5em]">
          ✦  আপনাকে আমন্ত্রণ জানাই  ✦
        </p>
        <h1
          data-reveal
          className="mt-6 font-serif-lux text-4xl font-medium leading-[1.05] text-ivory sm:mt-8 sm:text-7xl md:text-8xl"
        >
          শুভম
          <span className="my-2 block font-script text-4xl text-gold sm:text-7xl">ও</span>
          অঙ্কিতা
        </h1>
        <Ornament className="my-10" />
        <p
          data-reveal
          className="font-serif-lux text-2xl italic leading-relaxed text-champagne sm:text-2xl"
        >
          "দুই হৃদয়, <br className="sm:hidden" /> এক আত্মা, <br />এক অপূর্ব যাত্রা "
        </p>
        <p
          data-reveal
          className="mt-8 font-display text-2xl tracking-[0.3em] text-gold sm:tracking-[0.4em]"
        >
          ১১ · ডিসেম্বর · ২০২৬
        </p>

        <div data-reveal className="mt-12">
          <Countdown />
        </div>

        <div data-reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="#invitation" className="btn-royal w-full max-w-xs text-md sm:w-auto">আমন্ত্রণ পত্র</a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold/70 sm:block">
        <div className="h-10 w-px animate-pulse bg-gold/70" />
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADING ---------------- */
function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div data-reveal className="mb-14 text-center">
      <p className="font-display text-[20px] tracking-[0.5em] text-gold">✦ {kicker} ✦</p>
      <h2 className="mt-3 font-serif-lux text-4xl font-medium text-ivory sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <Ornament className="mx-auto mt-5 max-w-xs" />
    </div>
  );
}

/* ---------------- STORY ---------------- */
const STORY = [
  {
    title: "প্রথম সাক্ষাৎ",
    date: "১২ জুন ২০২২",
    text: "অফিস ফেরার সময়, এক অপরিচিত চোখের সাথে প্রথম দেখা।",
  },
  {
    title: "বন্ধুত্ব - ভালোবাসা",
    date: "২০২২ – ২০২৪",
    text: "বন্ধুত্ব - ভালোবাসা আর একে অপরের প্রতি ভালোবাসা।",
  },
  {
    title: "বিবাহের প্রস্তাব",
    date: "২০২৫",
    text: "দুই পরিবারের সম্মতিতে বিবাহের প্রস্তাব।",
  },
  {
    title: "বিবাহের দিন",
    date: "০৯ ডিসেম্বর ২০২৬",
    text: "দুই পরিবার, এক ভালোবাসা আর নক্ষত্রসম জাঁকজমকপূর্ণ উৎসব।",
  },
];

export function Story() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Heading kicker="আমাদের যাত্রা" title="আলাপচারিতা" />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2" />
          {STORY.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              className={`relative mb-12 flex flex-col sm:flex-row ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
            >
              <div className="absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,0.8)] sm:left-1/2" />
              <div
                className={`luxury-card ml-10 rounded-xl max-w-full p-5 sm:ml-0 sm:max-w-md sm:p-8 ${i % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"
                  }`}
              >
                <p className="font-display text-[20px] tracking-[0.4em] text-gold">{s.date}</p>
                <h3 className="mt-2 font-serif-lux text-2xl text-ivory sm:text-3xl">{s.title}</h3>
                <div className="gold-divider my-3 w-12" />
                <p className="font-serif-lux italic text-champagne/90">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
const EVENTS = [
  { name: "বিবাহ অনুষ্ঠান", date: "০৯ ডিসেম্বর, ২০২৬", time: "সন্ধ্যা ৫:০০", venue: "রিষড়া, হুগলি", icon: "❤" },
  { name: "বৌভাত অনুষ্ঠান", date: "১১ · ডিসেম্বর, ২০২৬", time: "সন্ধ্যা ৭:০০", venue: "রূপলাগি লজ, চুঁচুড়া, হুগলি", icon: "✦" },
];

export function Events() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker="সময়সূচি" title="বিবাহের অনুষ্ঠানসমূহ" />
        <div className="grid gap-6 sm:grid-cols-2">
          {EVENTS.map((e) => (
            <div
              key={e.name}
              data-reveal
              className="luxury-card group relative overflow-hidden p-8 text-center transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.18), transparent 60%)" }}
              />
              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 text-2xl text-gold">
                  {e.icon}
                </div>
                <h3 className="mt-5 font-serif-lux text-2xl text-ivory">{e.name}</h3>
                <div className="gold-divider my-3 mx-auto w-12" />
                <p className="font-display text-xl tracking-[0.3em] text-gold">{e.date}</p>
                <p className="mt-1 font-serif-lux italic text-champagne">{e.time}</p>
                <p className="mt-3 text-md text-champagne/80">{e.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INVITATION CARD ---------------- */
export function InvitationCard() {
  const ref = useReveal();
  return (
    <section id="invitation" ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Heading kicker="আশীর্বাদের সাথে" title="আমন্ত্রণপত্র" />
        <div
          data-reveal
          className="relative mx-auto overflow-hidden p-1"
          style={{
            background: "linear-gradient(135deg, #f5d77a, #D4AF37, #8a6d1a, #D4AF37)",
          }}
        >
          <div
            className="relative px-4 py-12 text-center sm:px-14 sm:py-20"
            style={{
              background:
                "radial-gradient(ellipse at top, #2a0a0c 0%, #140707 80%)",
            }}
          >
            <div className="pointer-events-none absolute inset-3 border border-gold/40" />
            <div className="pointer-events-none absolute inset-5 border border-gold/20" />

            {/* corner ornaments */}
            {[
              "top-3 left-3", "top-3 right-3 rotate-90",
              "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180",
            ].map((p) => (
              <svg key={p} className={`absolute h-10 w-10 text-gold ${p}`} viewBox="0 0 40 40">
                <path d="M2 2 H18 M2 2 V18 M2 10 H10 V2" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="1.2" fill="currentColor" />
              </svg>
            ))}

            <p className="font-display text-[20px] tracking-[0.4em] text-gold sm:tracking-[0.5em]">
              ✦ শুভ বিবাহ ✦
            </p>
            <p className="mt-6 font-serif-lux text-sm italic text-champagne/90 sm:text-base">
“হাজার অনুষ্ঠান প্রভাত ফেরীর গান<br/>
মন দিন গোনে এই দিনের আশায়।”<br/><br/>

প্রভাত ফেরীর গান সানাই-এ পরিণত হবে ঠিক সেই দিন,<br/> 
আগামী  ৯-ই ডিসেম্বর, ২০২৬, বুধবার,<br/>
শ্রী অমিতাভ দাঁ ও শ্রীমতী কণিকা দাঁ-এর একমাত্র কন্যা<br/>
কল্যাণীয়া অঙ্কিতার সাথে, রিষড়ায়।<br/> <br/>

“রাত জেগে নাটকের মহড়ায় চঞ্চল,<br/>
মন শুধু সে ক্ষণের প্রতীক্ষায়।”<br/><br/>

আয়োজনে তো সকলেরই মন চঞ্চল,<br/>
আর সেই নির্দিষ্ট ক্ষণটি হল<br/>
১১-ই ডিসেম্বর, ২০২৬ শুক্রবার সন্ধ্যায়।<br/> <br/>

স্বর্গীয় শ্রী গৌতম দাস এবং শ্রীমতী মঞ্জুরী কুশারী<br/>
দাসের আপ্যায়নে তাদের একমাত্র পুত্র<br/>
কল্যাণীয় শুভমের পরিণয়ে আপনাকে/ আপনাদের<br/>
সকলকে কিন্তু আসতেই হবে, চুঁচুড়ায়।<br/><br/>

“ছন্দে গানে ভরে উঠুক এমন দুটি মন,<br/>
নতুন নতুন সুর বাঁধার এই তো অয়োজন।”<br/><br/>

সকলের স্নেহাশীর্বাদ করি আবাহন।<br/><br/>

            </p>
            <p className="mt-2 text-xl text-white">
              বিনীত<br/>শ্রীমতী মঞ্জুরী কুশারী দাস
            </p>

            {/* <h3 className="mt-8 font-serif-lux text-4xl text-ivory sm:text-6xl">শুভম</h3>
            <p className="my-2 font-script text-3xl text-gold sm:text-4xl">&amp;</p>
            <h3 className="font-serif-lux text-4xl text-ivory sm:text-6xl">অঙ্কিতা</h3> */}

            <Ornament className="my-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const ref = useReveal();
  const [active, setActive] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3800, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);
  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker="স্মৃতি" title="প্রেমের মুহূর্তসমূহ" />

        <div data-reveal className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {GALLERY.map((src, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={src}
                    className="relative shrink-0 grow-0 basis-[80%] px-3 sm:basis-[55%] md:basis-[42%] lg:basis-[34%]"
                  >
                    <button
                      onClick={() => setActive(src)}
                      className={`group relative block w-full overflow-hidden rounded-lg border transition-all duration-700 ${isActive
                        ? "scale-100 border-gold shadow-[0_30px_80px_-20px_rgba(212,175,55,0.45)]"
                        : "scale-90 border-gold/20 opacity-60"
                        }`}
                    >
                      <img
                        src={src}
                        alt={`স্মৃতি ${i + 1}`}
                        loading="lazy"
                        className="h-[420px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 sm:h-[480px]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            aria-label="পূর্ববর্তী"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex"
          >
            ‹
          </button>
          <button
            aria-label="পরবর্তী"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                aria-label={`স্লাইড ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === selected ? "w-8 bg-gold" : "w-2 bg-gold/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 animate-in"
          onClick={() => setActive(null)}
        >
          <img src={active} alt="নির্বাচিত স্মৃতি" className="max-h-[90vh] max-w-full border border-gold/40" />
        </div>
      )}
    </section>
  );
}

/* ---------------- VENUE ---------------- */
export function Venue() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker="অবস্থান" title="আপ্যায়ণ স্থল" />
        <div data-reveal className="luxury-card grid overflow-hidden md:grid-cols-2 rounded-xl">
          <div className="aspect-[4/3] w-full md:aspect-auto">
            <iframe
              title="Venue map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.021400842055!2d88.39465327476663!3d22.89959842090727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893fe7269d63f%3A0xd500c3d7d5ef56da!2sRUPLAGI%20LODGE!5e1!3m2!1sen!2sin!4v1781357641679!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-12">
            <p className="font-display text-[20px] tracking-[0.4em] text-gold">আপ্যায়ণ স্থল</p>
            <h3 className="mt-3 font-serif-lux text-3xl text-ivory sm:text-4xl">রূপলাগি লজ, চুঁচুড়া, হুগলি</h3>
            <div className="gold-divider my-4 w-16" />
            <p className="mt-5 text-base text-champagne/80">
              <span className="text-white">পথনির্দেশ -</span> হুগলী স্টেশন / চুঁচুড়া ফেরীঘাট হইতে টোটো বা অটোতে পিপুলপাতি মোড় ১০ মিনিটের পথ
            </p>
            <p className="mt-5 text-base text-champagne/80">
              <span className="text-white">যোগাযোগ -</span> <a href="tel:৮০১৭৬৪১৯৪৬" className="for_hover">৮০১৭৬৪১৯৪৬</a> / <a href="tel:৯৬৭৪৫৫৫৩৪০" className="for_hover">৯৬৭৪৫৫५३४०</a>
            </p>
            <a
              href="https://maps.app.goo.gl/acZvkDRDqPQWWLWQA"
              target="_blank"
              rel="noreferrer"
              className="btn-royal mt-8 self-start text-md"
            >
              দিকনির্দেশনা
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAMILY ---------------- */
const FAMILY = {
    groom: {
    title: "পাত্রের পরিবার",
    members: ["পিতা - স্বর্গীয় শ্রী গৌতম দাস", "মাতা - শ্রীমতী মঞ্জুরী কুশারী দাস", "পাত্র - কল্যাণীয় শুভম দাস", "ঠিকানা - কাপাসডাঙা, চুঁচুড়া, হুগলি"],
  },
  bride: {
    title: "পাত্রীর পরিবার",
    members: ["পিতা - শ্রী অমিতাভ দাঁ", "মাতা - শ্রীমতী কণিকা দাঁ", "পাত্রী - কল্যাণীয়া অঙ্কিতা দাঁ", "ঠিকানা - বাঙ্গুরপার্ক, রিষড়া, হুগলি"],
  }
};

export function Family() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <Heading kicker="আমাদের প্রিয়জনরা" title="পরিবারসমূহ" />
        <div className="grid gap-10 md:grid-cols-2">
          {[FAMILY.groom, FAMILY.bride].map((f) => (
            <div key={f.title} data-reveal className="luxury-card p-8 text-center sm:p-10">
              <p className="font-display text-[20px] tracking-[0.4em] text-gold">{f.title.toUpperCase()}</p>
              <Ornament className="my-5" />
              <h3 className="font-serif-lux text-2xl text-ivory">{f.parents}</h3>
              <div className="gold-divider mx-auto my-5 w-16" />
              <ul className="space-y-2 font-serif-lux italic text-champagne/90">
                {f.members.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------------- BLESSINGS ---------------- */
export function Blessings() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div data-reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-7xl text-gold sm:text-8xl">"</p>
        <p className="-mt-6 font-serif-lux text-2xl italic leading-relaxed text-ivory sm:text-3xl md:text-4xl">
          একসাথে এই সুন্দর যাত্রা শুরু করতে গিয়ে আপনার আশীর্বাদই আমাদের সবচেয়ে বড় উপহার।
        </p>
        <Ornament className="mx-auto mt-8 max-w-xs" />
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="relative bg-night py-16 text-center">
      <div className="gold-divider mx-auto mb-10 max-w-md" />
      <div className="px-6">
        <p className="font-script text-5xl text-gold"><em>শুভম ও অঙ্কিতা</em></p>
        <p className="mt-2 font-display text-xl tracking-[0.4em] text-champagne">
          ১১ · ডিসেম্বর · ২০২৬
        </p>
        <Ornament className="mx-auto my-6 max-w-xs" />
        <p className="font-serif-lux italic text-champagne/80">
          " ভালোবাসা ও কৃতজ্ঞতার সাথে — আমাদের গল্পে আপনার অংশগ্রহণের জন্য আগাম ধন্যবাদ। "
        </p>
      </div>
    </footer>
  );
}
