export interface Template {
  link: string;
  title: string;
  description: string;
  name: string;
}
const nxrratives: Template = {
  link: "https://nxrratives.com",
  title: "Designing a better future",
  description:
    "Nxrratives is a career design consultancy that helps people find their purpose and build a career they love.",
  name: "✎ Nxrratives",
};
const whatisin: Template = {
  link: "https://whatisin.xyz",
  title: "A curated list of what's in your Mac",
  description:
    "What is in is a curated list of what's hot in your Mac. Be it  apps, extensions, and products, we display them in full view and share your recommendations with the community.",
  name: "𖤘 WhatIsIn.xyz",
};
const notionplus: Template = {
  link: "https://notionplus.xyz",
  title: "The best engineering Notion templates and widgets",
  description:
    "Notion Plus is a marketplace for the best Notion templates and widgets. We help you supercharge your productivity and creativity with Notion.",
  name: "❑ NotionPlus",
};
const innxvateorg = {
  link: "https://innxvate.org",
  title: "Innovation consulting for startups and enterprises",
  description:
    "Enterprises looking to innovate and startups looking to scale can leverage on our expertise in design thinking, lean startup, and agile methodologies to build innovative products and services.",
  name: "꙳ Innxvate",
};

const fracxional = {
  link: "https://fracxional.com",
  title: "Fractional CxOs for startups and enterprises",
  description:
    "Fracxional is a fractional CxO consulting firm that lends startups and enterprises technical superpowers and product intuition to build innovative products and services.",
  name: "⟆ Fracxional",
};

const firstyear = {
  link: "https://firstyearin.xyz",
  title: "Bridging the knowledge gap in your first year",
  description:
    "We help you bridge the knowledge gap in the first year of your journey in your career. Find out what you need to know to succeed from those who have been there and done that.",
  name: "(づ ᴗ _ᴗ)づ First Year",
};

const reaction = {
  link: "https://github.com/codebyshennan/reaction",
  title: "A React fork of the popular Vue Notion UI library",
  description:
    "The block-based editor allows users to drag and reorder blocks, supports basic Markdown formatting, provides a command menu with shortcuts accessed by typing '/', allows users to register their own blocks, and includes a read-only mode.",
  name: "@codebyshennan/reaction",
};

export const bytitle = {
  nxrratives,
  whatisin,
  notionplus,
  innxvateorg,
  fracxional,
  firstyear,
  reaction,
};
export const details = Object.values(bytitle);
