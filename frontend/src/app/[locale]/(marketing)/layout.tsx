// import { DemoBanner } from "@/components/DemoBanner";
// import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { BaseTemplate } from "@/templates/BaseTemplate";
import { getTranslations, setRequestLocale } from "next-intl/server";
// import Link from "next/link";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "RootLayout",
  });

  return (
    <>
      {/* <DemoBanner /> */}
      <BaseTemplate
        leftNav={<> {/* Nav bar removed */}</>}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
