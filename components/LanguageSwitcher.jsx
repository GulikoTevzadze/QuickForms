'use client';

import * as React from "react"
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = {
  ka: 'Ge',
  en: 'En'
};

export default function LanguageSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const switchLanguage = (newLocale) => {
    if (newLocale !== currentLocale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled className="h-8 w-8">
        <Globe className="h-3 w-3" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Globe className="h-3 w-3" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[60px] p-1">
        {Object.entries(languages).map(([locale, label]) => (
          <DropdownMenuItem 
            key={locale} 
            onClick={() => switchLanguage(locale)}
            className={`text-xs px-2 py-1 ${currentLocale === locale ? 'bg-accent' : ''}`}
          >
            {label}
            {currentLocale === locale && <span className="ml-1 text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}