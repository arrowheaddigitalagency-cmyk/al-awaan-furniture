import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { createMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${slug}` },
  ]);

  const schema = serviceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbs, schema]),
        }}
      />
      <ServicePageContent service={service} />
    </>
  );
}
