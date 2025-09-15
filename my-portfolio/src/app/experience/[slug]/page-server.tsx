// This component wraps the client experience page for static generation
import dynamic from 'next/dynamic';

// Dynamically import the client component to avoid SSR issues
const ExperienceClientPage = dynamic(() => import('./experience-client'), {
  ssr: false
});

// Generate static paths for all experiences
export async function generateStaticParams() {
  return [
    { slug: 'ai-engineer-intern' },
    { slug: 'software-qa-engineer' },
    { slug: 'ai-research-intern' },
    { slug: 'exec-swe-mentor' },
    { slug: 'undergraduate-research-assistant' }
  ];
}

// Server component that wraps the client component
export default function ExperiencePage({ params }: { params: { slug: string } }) {
  return <ExperienceClientPage params={params} />;
}
