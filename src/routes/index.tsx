import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Curtain from "@/components/wedding/Curtain";
import MagicalEntry from "@/components/wedding/MagicalEntry";
import {
  Hero, Story, Events, InvitationCard, Gallery, Venue,
  Family, Blessings, Footer, PhysicalCard,
} from "@/components/wedding/Sections";
import { weddingCopy, type Language } from "@/components/wedding/copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: weddingCopy.bn.metaTitle },
      { name: "description", content: weddingCopy.bn.metaDescription },
      { property: "og:title", content: weddingCopy.bn.metaTitle },
      { property: "og:description", content: weddingCopy.bn.metaDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const [language, setLanguage] = useState<Language>("bn");
  const copy = weddingCopy[language];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <main className="relative">
      <Curtain
        onOpen={() => setOpened(true)}
        language={language}
        onLanguageChange={setLanguage}
        copy={copy.curtain}
      />
      <MagicalEntry active={opened} />
      <Hero copy={copy} />
      <Story copy={copy} />
      <Gallery copy={copy} />
      <Family copy={copy} />
      <Events copy={copy} />
      <InvitationCard copy={copy} />
      <PhysicalCard copy={copy} />
      <Venue copy={copy} />
      <Blessings copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}
