import { Link } from "react-router-dom";

interface SectionPreviewProps {
  title: string;
  description: string;
}

export function SectionPreview({ title, description }: SectionPreviewProps) {
  return (
    <section className="section-container min-h-[60vh]" aria-labelledby="section-title">
      <p className="text-sm text-primary">Development preview</p>
      <h1 id="section-title" className="section-heading">{title}</h1>
      <p className="section-subheading">{description}</p>
      <p className="mt-4 text-sm text-muted-foreground">Verified content will be added later.</p>
      <Link to="/" className="mt-6 inline-block text-primary underline">Back to homepage</Link>
    </section>
  );
}
