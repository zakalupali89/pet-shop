'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider as Provider } from 'next-auth/react';

type Props = PropsWithChildren;

export default function SessionProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}
