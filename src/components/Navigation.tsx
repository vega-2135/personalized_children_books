import React from 'react';
import { Navigation as PolarisNavigation } from '@shopify/polaris';
import {
  HomeIcon,
  PersonIcon,
  BookIcon,
  ViewIcon,
} from '@shopify/polaris-icons';
import { useRouter } from 'next/router';

export function Navigation() {
  const router = useRouter();

  const items = [
    {
      label: 'Home',
      icon: HomeIcon,
      onClick: () => router.push('/'),
      selected: router.pathname === '/',
    },
    {
      label: 'Customize',
      icon: PersonIcon,
      onClick: () => router.push('/customize'),
      selected: router.pathname === '/customize',
    },
    {
      label: 'Stories',
      icon: BookIcon,
      onClick: () => router.push('/stories'),
      selected: router.pathname === '/stories',
    },
    {
      label: 'Preview',
      icon: ViewIcon,
      onClick: () => router.push('/preview'),
      selected: router.pathname === '/preview',
    },
  ];

  return (
    <PolarisNavigation location="/">
      <PolarisNavigation.Section
        items={items}
      />
    </PolarisNavigation>
  );
}