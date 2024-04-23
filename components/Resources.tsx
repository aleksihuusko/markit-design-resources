"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import * as React from "react";
import { useEffect, useMemo } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterButton } from "@/components/FilterButton";

interface ResourceProps {
  resources: any[];
}

type Category = {
  value: string;
  label: string;
};

export default function Resources({ resources }: ResourceProps) {
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);

  const filteredResources = useMemo(() => {
    if (!selectedCategory || selectedCategory.value === "all-categories") {
      return resources;
    }
    return resources.filter(
      (resource) => resource.fields.category === selectedCategory.label,
    );
  }, [resources, selectedCategory]);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container p-0">
        <div className="md:mb-18 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-3xl">
            <Badge variant="secondary" className="mb-3 md:mb-4">
              Free Resources
            </Badge>
            <h1 className="mb-4 mt-5 text-balance text-4xl font-bold md:mb-5 md:mt-6 md:text-5xl">
              The ultimate resource collection for designers and developers.
            </h1>
            <p className="md:text-md">
              Discover the best resources with the library of over 300+ sites
              and tools. Free forever.
            </p>
          </div>
          <div className="flex-wrap items-center justify-end md:block">
            <FilterButton
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {filteredResources.map((resource) => (
            <Link
              target="_blank"
              href={resource.fields.url}
              key={resource.sys.id}
              className="h-full"
            >
              <Card className="flex h-full flex-col justify-between bg-accent/20 transition hover:border-foreground hover:bg-accent/80">
                <CardHeader>
                  <Image
                    className="mb-4 aspect-square rounded-md object-cover"
                    width={25}
                    height={25}
                    src={`https:${resource.fields.logo?.fields.file?.url}`}
                    alt="alt"
                  />
                  <CardTitle className="text-balance text-sm md:text-lg">
                    {resource.fields.title}
                  </CardTitle>
                  <CardDescription>
                    {resource.fields.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex items-center justify-between">
                  <Badge variant="outline">{resource.fields.category}</Badge>
                  <Button variant="link" className="pr-0">
                    <ExternalLink className="w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
