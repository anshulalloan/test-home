import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import "./../styles/styles.scss";

export const metadata: Metadata = {
  title: "alloan.ai",
  description: "A Virtual Assistant for Asset-Based Finance Investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <Script type="text/javascript" id="ms_clarity"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l4ppll4aip");`
          }}
      />
      </head>
      <body>
        {children}
      <ToastContainer />
      </body>
    </html>
  );
}
