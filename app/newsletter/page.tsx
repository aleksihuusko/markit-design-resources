import React from "react";

import NewsletterForm from "@/components/NewsletterForm";
import { Separator } from "@/components/ui/separator";

export default function NewsletterPage() {
  return (
    <>
      <header className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Newsletter
            </h1>
            <p className="text-balance text-muted-foreground md:text-lg">
              {`Get the most recent design news and information delivered directly to your email on a regular basis.`}
            </p>
          </div>
        </div>
      </header>
      <Separator />
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <NewsletterForm />
        </div>
      </section>
      <Separator />
    </>
  );
}
