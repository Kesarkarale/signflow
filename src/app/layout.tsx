import "./globals.css";
import Providers from "./providers";

export const metadata = {
title: "SignFlow",
description:
"Professional E-Signature Platform",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html
   lang="en"
   suppressHydrationWarning
 > <body
     className="
       min-h-screen
       bg-background
       text-foreground
       antialiased
     "
   > <Providers>
{children} </Providers> </body> </html>
);
}
