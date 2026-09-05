import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "What We Can Do | Custom Furniture Work UAE | Al-Awan Furniture",
  description:
    "See the custom furniture and interior work we can create for your home in the UAE — TV units, wardrobes, bedrooms, kids rooms, curtains, and more.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
