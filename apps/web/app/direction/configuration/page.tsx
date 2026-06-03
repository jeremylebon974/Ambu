'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DirectionConfigurationRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/configuration');
  }, [router]);
  return null;
}
