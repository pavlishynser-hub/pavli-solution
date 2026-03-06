import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import HowWeWork from "@/components/home/HowWeWork";
import CTA from "@/components/home/CTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <CaseStudies />
      <Testimonials />
      <HowWeWork />
      <CTA />
    </>
  );
}
