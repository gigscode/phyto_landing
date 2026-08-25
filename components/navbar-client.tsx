'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Navbar } from './navbar';

export default function NavbarClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // preserve header space during SSR to avoid layout shift
  if (!mounted) return <div className="h-16" />;

  return <Navbar />;
}
