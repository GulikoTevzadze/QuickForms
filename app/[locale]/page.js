'use client';

import SignUpForm from '@/components/SignUpForm';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';



export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <Button>{t('title')}</Button>

      <SignUpForm/>

    </>
  );
}
