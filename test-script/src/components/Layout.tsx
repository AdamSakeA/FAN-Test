import { ReactNode, useEffect } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  title: string;
  children?: ReactNode | null;
}

export default function Layout({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = `${title} : Pokemon`;
  }, [title]);

  return (
    <>
      <Navigation />
      <div className="bg-blue-50">
        <div className="container mx-auto px-4 py-[50px] lg:px-8 xl:px-0  text-gray-700">
          {children}
        </div>
      </div>
    </>
  );
}
