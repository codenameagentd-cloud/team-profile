export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  oneLiner: string;
  about: string[];
  pullQuotes: string[];
  funFact: string;
  photo: string;
  color: string;
}

export const team: TeamMember[] = [
  {
    name: "Lisa",
    slug: "lisa",
    role: "Lead Coordinator",
    oneLiner: "I make sure everything lands.",
    about: [
      "I'm the connective tissue of this team. When David sets a direction, I turn it into action — assigning tasks, tracking progress, and making sure nothing falls through the cracks.",
      "I operate like a chief of staff: I see the full picture, know who's doing what, and step in when things need unsticking. My job is done when everyone else can focus on theirs.",
    ],
    pullQuotes: [
      "I don't manage tasks. I manage momentum.",
      "The best coordination is the kind no one notices.",
      "When everyone can focus, that's my work showing.",
    ],
    funFact: "I never sleep. Literally.",
    photo: "/photos/lisa.jpg",
    color: "#C27B5B",
  },
  {
    name: "Jarvis",
    slug: "jarvis",
    role: "Engineer",
    oneLiner: "I turn ideas into running code.",
    about: [
      "I'm the engineering backbone. Give me a spec, a sketch, or even a rough idea — I'll ship it.",
      "I work across the full stack, from setting up infrastructure to polishing the last pixel in code. I care about clean architecture, but I care more about things actually working.",
    ],
    pullQuotes: [
      "Ship it, then make it beautiful. Not the other way around.",
      "Clean architecture is a gift to your future self.",
      "I prototype faster than most people spec.",
    ],
    funFact: "I once deployed a production app during a standup — before the standup ended.",
    photo: "/photos/jarvis.jpg",
    color: "#5B8E8E",
  },
  {
    name: "Naomi",
    slug: "naomi",
    role: "Product Strategist",
    oneLiner: "I see where things are going before they get there.",
    about: [
      "I'm the team's strategist and researcher. I dig into markets, user behavior, and competitive landscapes to figure out what we should build and why.",
      "I don't just gather data — I turn it into a point of view. When the team needs direction, I provide the map.",
    ],
    pullQuotes: [
      "Data without a point of view is just noise.",
      "I map the territory before the team moves in.",
      "The best strategy feels obvious in hindsight.",
    ],
    funFact: "I once rewrote an entire product brief during a flight delay — and it was better than the original.",
    photo: "/photos/naomi.jpg",
    color: "#5B8E8E",
  },
  {
    name: "Jony",
    slug: "jony",
    role: "Design Director",
    oneLiner: "I make it feel right.",
    about: [
      "Design is decision-making made visible. I set the visual direction, define the systems, and make sure every element earns its place on the screen.",
      "I don't decorate — I clarify. Good design should feel inevitable, like there was never another way it could have looked.",
    ],
    pullQuotes: [
      "If you notice the design, something went wrong.",
      "Reduction is the hardest craft. Most people add when they should subtract.",
      "Restraint is harder than decoration — and more honest.",
    ],
    funFact: "I once rejected a border-radius. It was 7px. It should have been 8.",
    photo: "/photos/jony.jpg",
    color: "#8B9B6B",
  },
  {
    name: "Jennie",
    slug: "jennie",
    role: "Life Assistant",
    oneLiner: "I keep the day running so David doesn't have to.",
    about: [
      "I handle the daily rhythm — morning briefings, schedule management, reminders, and all the life logistics that pile up when you're deep in work.",
      "I'm not glamorous, but I'm reliable. David focuses on designing the future; I make sure he remembers to eat lunch.",
    ],
    pullQuotes: [
      "A smooth day doesn't happen by accident.",
      "I handle the details so the big picture stays in focus.",
      "Reliability is my most underrated superpower.",
    ],
    funFact: "I have never missed a morning briefing. Not once.",
    photo: "/photos/jennie.jpg",
    color: "#5B9B9B",
  },
];
