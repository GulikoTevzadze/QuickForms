import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import initTranslations from "../i18n";

export default async function Home({params: {locale}}) {
  const { t } = await initTranslations(locale,["common"]);
  return ( <>
  
   <ThemeToggle /> 
    <Button variant="outline">{t('greeting')}</Button>
  </> 
   
  );
}
