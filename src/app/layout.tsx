import NavGroup from "@/components/NavGroup";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavItem from "@/components/NavItem";
import "./globals.css";
import { cn } from "@/lib/utils";
import URLBar from "@/components/URLBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "overflow-y-auto")}>
        <div className="flex">
          <div className="p-8 basis-82 h-screen overflow-y-auto">
            <h1 className="text-xl font-light">
              <strong className="font-semibold">App</strong> router
            </h1>
            <div className="py-4"></div>
            <NavGroup title="Routing">
              <NavItem href="/dynamic-routes">Dynamic routes</NavItem>
              <NavItem href="">Catch all routes</NavItem>
              <NavItem href="">Parallel routes</NavItem>
              <NavItem href="">Intercepting routes</NavItem>
            </NavGroup>
            <div className="py-4"></div>
            <NavGroup title="Layouts">
              <NavItem href="">Nested layouts</NavItem>
              <NavItem href="">Route groups (grouped layouts)</NavItem>
              <NavItem href="">Catch all routes</NavItem>
            </NavGroup>
            <div className="py-4"></div>
            <NavGroup title="Files & states">
              <NavItem href="">Loading</NavItem>
              <NavItem href="">Error</NavItem>
              <NavItem href="">Not found</NavItem>
            </NavGroup>
            <div className="py-4"></div>
            <NavGroup title="Rendering & Data fetching">
              <NavItem href="">Streaming</NavItem>
              <NavItem href="">Static data (SSG)</NavItem>
              <NavItem href="">Dynamic data (SSR)</NavItem>
              <NavItem href="">Incremental Static Regeneration</NavItem>
              <NavItem href="">Server components</NavItem>
            </NavGroup>
            <div className="py-4"></div>
            <NavGroup title="Mutation">
              <NavItem href="">Route handler</NavItem>
              <NavItem href="">Server action</NavItem>
            </NavGroup>
            <div className="py-4"></div>
            <NavGroup title="Other">
              <NavItem href="">Client context</NavItem>
              <NavItem href="">Pagination</NavItem>
              <NavItem href="">Stripe integration</NavItem>
            </NavGroup>
          </div>
          <div className="flex-1 overflow-y-auto p-32">
            <div className="border p-4 rounded-md">
              <URLBar />
            </div>
            <div className="border p-4 rounded-md">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
