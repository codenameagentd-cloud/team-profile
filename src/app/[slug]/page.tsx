import { team } from "@/data/team";
import ProfileClient from "./client";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProfileClient params={params} />;
}
