import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Projects | Custom Furniture Portfolio | Al-Awan Furniture",
  description:
    "Browse our portfolio of custom furniture and interior projects in the UAE — TV units, wardrobes, bedrooms, kids rooms, curtains, and more.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
