import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Curtain from "@/components/wedding/Curtain";
import MagicalEntry from "@/components/wedding/MagicalEntry";
import {
  Hero, Story, Events, InvitationCard, Gallery, Venue,
  RSVP, Family, Schedule, Blessings, Footer,
} from "@/components/wedding/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "শুভম ও অঙ্কিতা" },
      { name: "description", content: "শুভম ও অঙ্কিতা" },
      { property: "og:title", content: "শুভম ও অঙ্কিতা" },
      { property: "og:description", content: "শুভম ও অঙ্কিতা" },
      { property: "og:type", content: "শুভম ও অঙ্কিতা" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  return (
    <main className="relative">
      <Curtain onOpen={() => setOpened(true)} />
      <MagicalEntry active={opened} />
      <Hero />
      {/* <Story /> */}
      <Gallery />
      <Family />
      <Events />
      <InvitationCard />
      <Venue />
      <Blessings />
      <Footer />
    </main>
  );
}
