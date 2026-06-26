import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Eye, X } from "lucide-react";
import Countdown from "./Countdown";
import Ornament from "./Ornament";
import FloatingDecor from "./FloatingDecor";
import type { WeddingCopy } from "./copy";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_BG =
  "https://media.istockphoto.com/id/1480296281/photo/bengali-wedding-ritual-hindu-wedding-stock-photo.jpg?s=612x612&w=0&k=20&c=xmzqtj07g7uR1UkDwHDqOAl2ebXjG68Ny2gs1IkjBPo=";

const GALLERY = [
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
  "https://images.nightcafe.studio/jobs/2GGupTPkS4kSMY8qcX87/2GGupTPkS4kSMY8qcX87--0--v7nix.jpg",
];

const PHYSICAL_CARD_IMAGES = [
  { src: "/card/physical-front.png", labelEn: "Front", labelBn: "সামনের অংশ" },
  { src: "/card/physical-inside.png", labelEn: "Inside", labelBn: "ভিতরের অংশ" },
  { src: "/card/physical-back.png", labelEn: "Back", labelBn: "পেছনের অংশ" },
];

interface SectionProps {
  copy: WeddingCopy;
}

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

export function Hero({ copy }: SectionProps) {
  const ref = useReveal();
  const t = copy.hero;

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
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
          ✦ {t.kicker} ✦
        </p>
        <h1
          data-reveal
          className="mt-6 font-serif-lux text-4xl font-medium leading-[1.05] text-ivory sm:mt-8 sm:text-7xl md:text-8xl"
        >
          <em>{t.groom}</em>
          <span className="my-2 block font-script text-4xl text-gold sm:text-7xl">{t.joiner}</span>
          <em>{t.bride}</em>
        </h1>
        <Ornament className="my-10" />
        <p data-reveal className="font-serif-lux text-2xl italic leading-relaxed text-champagne sm:text-2xl">
          "{t.quote}"
        </p>
        <p
          data-reveal
          className="mt-8 font-display text-2xl tracking-[0.3em] text-gold sm:tracking-[0.4em] text_glow"
        >
          {t.date}
        </p>

        <div data-reveal className="mt-12">
          <Countdown labels={copy.countdown} />
        </div>

        <div data-reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="#invitation" className="btn-royal w-full max-w-xs text-md sm:w-auto">
            {t.invitation}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold/70 sm:block">
        <div className="h-10 w-px animate-pulse bg-gold/70" />
      </div>
    </section>
  );
}

export function Story({ copy }: SectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Heading kicker={copy.story.kicker} title={copy.story.title} />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2" />
          {copy.story.items.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              className={`relative mb-12 flex flex-col sm:flex-row ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
            >
              <div className="absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,0.8)] sm:left-1/2" />
              <div
                className={`luxury-card ml-10 rounded-xl max-w-full p-5 sm:ml-0 sm:max-w-md sm:p-8 ${
                  i % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"
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

export function Gallery({ copy }: SectionProps) {
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker={copy.gallery.kicker} title={copy.gallery.title} />
        <div data-reveal className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {GALLERY.map((src, i) => {
                const isActive = i === selected;
                return (
                  <div key={`${src}-${i}`} className="relative shrink-0 grow-0 basis-[80%] px-3 sm:basis-[55%] md:basis-[42%] lg:basis-[34%]">
                    <button
                      type="button"
                      onClick={() => setActive(src)}
                      className={`group relative block w-full overflow-hidden rounded-lg border transition-all duration-700 ${
                        isActive
                          ? "scale-100 border-gold shadow-[0_30px_80px_-20px_rgba(212,175,55,0.45)]"
                          : "scale-90 border-gold/20 opacity-60"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${copy.gallery.imageAlt} ${i + 1}`}
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

          <button
            type="button"
            aria-label={copy.gallery.previous}
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label={copy.gallery.next}
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex"
          >
            ›
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${copy.gallery.slide} ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === selected ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
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
          <img src={active} alt={copy.gallery.selectedAlt} className="max-h-[90vh] max-w-full border border-gold/40" />
        </div>
      )}
    </section>
  );
}

export function Family({ copy }: SectionProps) {
  const ref = useReveal();
  const families = [copy.family.groom, copy.family.bride];

  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <Heading kicker={copy.family.kicker} title={copy.family.title} />
        <div className="grid gap-10 md:grid-cols-2">
          {families.map((f) => (
            <div key={f.title} data-reveal className="luxury-card p-8 text-center sm:p-10">
              <p className="font-display text-[20px] tracking-[0.4em] text-gold">{f.title.toUpperCase()}</p>
              <Ornament className="my-5" />
              <div className="gold-divider mx-auto my-5 w-16" />
              <ul className="space-y-2 font-serif-lux italic text-champagne/90">
                {f.members.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Events({ copy }: SectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32 events_sec">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker={copy.events.kicker} title={copy.events.title} />
        <div className="grid gap-6 sm:grid-cols-2">
          {copy.events.items.map((e) => (
            <div
              key={e.name}
              data-reveal
              className="luxury-card group relative overflow-hidden p-8 text-center transition-transform duration-500 hover:-translate-y-2"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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

export function InvitationCard({ copy }: SectionProps) {
  const ref = useReveal();

  return (
    <section id="invitation" ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Heading kicker={copy.invitation.kicker} title={copy.invitation.title} />
        <div
          data-reveal
          className="relative mx-auto overflow-hidden p-1"
          style={{ background: "linear-gradient(135deg, #f5d77a, #D4AF37, #8a6d1a, #D4AF37)" }}
        >
          <div
            className="relative px-4 py-12 text-center sm:px-14 sm:py-20"
            style={{ background: "radial-gradient(ellipse at top, #2a0a0c 0%, #140707 80%)" }}
          >
            <div className="pointer-events-none absolute inset-3 border border-gold/40" />
            <div className="pointer-events-none absolute inset-5 border border-gold/20" />

            {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map((p) => (
              <svg key={p} className={`absolute h-10 w-10 text-gold ${p}`} viewBox="0 0 40 40">
                <path d="M2 2 H18 M2 2 V18 M2 10 H10 V2" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="1.2" fill="currentColor" />
              </svg>
            ))}

            <p className="font-display text-[20px] tracking-[0.4em] text-gold sm:tracking-[0.5em]">
              ✦ {copy.invitation.label} ✦
            </p>
            <div className="mt-6 space-y-5 font-serif-lux text-sm italic leading-relaxed text-champagne/90 sm:text-base">
              {copy.invitation.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-xl text-white">
              {copy.invitation.signature[0]}
              <br />
              {copy.invitation.signature[1]}
            </p>

            <Ornament className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhysicalCard({ copy }: SectionProps) {
  const ref = useReveal();
  const [open, setOpen] = useState(false);
  const isEnglish = copy.footer.joiner === "&";
  const text = isEnglish
    ? {
        kicker: "Printed Card",
        title: "View The Physical Invitation",
        body: "Open the complete printed invitation card exactly as it appears in hand.",
        action: "View Full Card",
        close: "Close full card",
        alt: "Physical wedding invitation card",
      }
    : {
        kicker: "ছাপা কার্ড",
        title: "সম্পূর্ণ নিমন্ত্রণপত্র দেখুন",
        body: "হাতে পাওয়া ছাপা নিমন্ত্রণপত্রটি সম্পূর্ণভাবে দেখার জন্য খুলুন।",
        action: "সম্পূর্ণ কার্ড দেখুন",
        close: "কার্ড বন্ধ করুন",
        alt: "ছাপা বিবাহ নিমন্ত্রণপত্র",
      };

  useEffect(() => {
    if (!open || typeof window === "undefined") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32">
      <FloatingDecor />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker={text.kicker} title={text.title} />
        <div data-reveal className="luxury-card overflow-hidden rounded-xl">
          <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div className="grid gap-3 sm:grid-cols-3">
              {PHYSICAL_CARD_IMAGES.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group relative overflow-hidden rounded-lg border border-gold/30 bg-night"
                >
                  <img
                    src={image.src}
                    alt={`${text.alt} ${isEnglish ? image.labelEn : image.labelBn}`}
                    className="aspect-[1.55/1] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-night/80 px-3 py-1 font-display text-sm text-gold backdrop-blur">
                    {isEnglish ? image.labelEn : image.labelBn}
                  </span>
                </button>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <p className="font-serif-lux text-xl italic leading-relaxed text-champagne/90 sm:text-2xl">
                {text.body}
              </p>
              <div className="gold-divider mx-auto my-6 w-24 lg:mx-0" />
              <button type="button" onClick={() => setOpen(true)} className="btn-royal gap-3 text-md">
                <Eye className="h-5 w-5" aria-hidden="true" />
                {text.action}
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[220] overflow-y-auto bg-black/95 px-3 py-5 sm:px-6" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label={text.close}
            onClick={() => setOpen(false)}
            className="fixed right-4 top-4 z-[230] flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-night/90 text-gold backdrop-blur transition hover:bg-gold hover:text-night"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center justify-center gap-5 py-12">
            {PHYSICAL_CARD_IMAGES.map((image) => (
              <figure key={image.src} className="w-full">
                <figcaption className="mb-2 text-center font-display text-lg text-gold">
                  {isEnglish ? image.labelEn : image.labelBn}
                </figcaption>
                <img
                  src={image.src}
                  alt={`${text.alt} ${isEnglish ? image.labelEn : image.labelBn}`}
                  className="mx-auto w-full max-w-5xl rounded-sm border border-gold/50 bg-white shadow-[0_24px_90px_-30px_rgba(212,175,55,0.75)]"
                />
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function Venue({ copy }: SectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32 venue_sec">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Heading kicker={copy.venue.kicker} title={copy.venue.title} />
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
            <p className="font-display text-[20px] tracking-[0.4em] text-gold">{copy.venue.label}</p>
            <h3 className="mt-3 font-serif-lux text-3xl text-ivory sm:text-4xl text_glow">{copy.venue.name}</h3>
            <div className="gold-divider my-4 w-16" />
            <p className="mt-5 text-base text-champagne/80">
              <span className="text-white">{copy.venue.directionLabel}</span> {copy.venue.direction}
            </p>
            <p className="mt-5 text-base text-champagne/80">
              <span className="text-white">{copy.venue.contactLabel}</span>{" "}
              <a href="tel:8017641946" className="for_hover">8017641946</a> /{" "}
              <a href="tel:9674555340" className="for_hover">9674555340</a>
            </p>
            <a
              href="https://maps.app.goo.gl/acZvkDRDqPQWWLWQA"
              target="_blank"
              rel="noreferrer"
              className="btn-royal mt-8 self-start text-md"
            >
              {copy.venue.action}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Blessings({ copy }: SectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative royal-bg py-24 sm:py-32">
      <FloatingDecor />
      <div data-reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-7xl text-gold sm:text-8xl">"</p>
        <p className="-mt-6 font-serif-lux text-2xl italic leading-relaxed text-ivory sm:text-3xl md:text-4xl">
          {copy.blessings}
        </p>
        <Ornament className="mx-auto mt-8 max-w-xs" />
      </div>
    </section>
  );
}

export function Footer({ copy }: SectionProps) {
  return (
    <footer className="relative bg-night py-16 text-center">
      <div className="gold-divider mx-auto mb-10 max-w-md" />
      <div className="px-6">
        <p className="font-script text-5xl text-gold">
          <em>
            {copy.footer.groom} <span className="text-white mx-2">{copy.footer.joiner}</span>{" "}
            {copy.footer.bride}
          </em>
        </p>
        <p className="mt-2 font-display text-xl tracking-[0.4em] text-champagne text_glow">
          {copy.footer.date}
        </p>
        <Ornament className="mx-auto my-6 max-w-xs" />
        <p className="font-serif-lux italic text-champagne/80">"{copy.footer.note}"</p>
      </div>
    </footer>
  );
}
