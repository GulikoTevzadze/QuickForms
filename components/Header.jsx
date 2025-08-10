"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);

  const closeSheet = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              QuickForm
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>QuickForm</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent"
                    onClick={closeSheet}
                  >
                    {t("home")}
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent"
                    onClick={closeSheet}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent"
                    onClick={closeSheet}
                  >
                    {t("contact")}
                  </Link>
                  <div className=" w-full flex justify-center pt-4 border-t mt-6">
                    <LanguageSwitcher />
                    <ThemeToggle />

                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}