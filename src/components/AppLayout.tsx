import React from 'react';
import { AppProvider, Frame } from '@shopify/polaris';
import { Navigation } from './Navigation';
import enTranslations from '@shopify/polaris/locales/en.json';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Frame navigation={<Navigation />}>
        {children}
      </Frame>
    </AppProvider>
  );
}