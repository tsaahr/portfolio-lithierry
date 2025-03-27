// providers/IntlProvider.tsx

"use client";

import { ReactNode } from "react";
import { IntlProvider as NextIntlProvider } from "next-intl";

interface Props {
  locale: string;
  messages: Record<string, string>;
  children: ReactNode;
}

const IntlProvider = ({ locale, messages, children }: Props) => {
  return (
    <NextIntlProvider locale={locale} messages={messages}>
      {children}
    </NextIntlProvider>
  );
};

export default IntlProvider;
