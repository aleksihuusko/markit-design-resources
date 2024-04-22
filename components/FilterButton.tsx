"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Category = {
  value: string;
  label: string;
};

const categories: Category[] = [
  {
    value: "all-categories",
    label: "All Categories",
  },
  {
    value: "accessibility",
    label: "Accessibility",
  },
  {
    value: "books",
    label: "Books",
  },
  {
    value: "color",
    label: "Color",
  },
  {
    value: "design-news",
    label: "Design News",
  },
  {
    value: "design-systems",
    label: "Design Systems",
  },
  {
    value: "design-tools",
    label: "Design Tools",
  },
  {
    value: "icons",
    label: "Icons",
  },
  {
    value: "illustrations",
    label: "Illustrations",
  },
  {
    value: "inspiration",
    label: "Inspiration",
  },
  {
    value: "jobs",
    label: "Jobs",
  },
  {
    value: "learn-design",
    label: "Learn Design",
  },
  {
    value: "mockup-tools",
    label: "Mockup Tools",
  },
  {
    value: "podcasts",
    label: "Podcasts",
  },
  {
    value: "prototyping-tools",
    label: "Prototyping Tools",
  },
  {
    value: "resources",
    label: "Resources",
  },
  {
    value: "stock-photos",
    label: "Stock Photos",
  },
  {
    value: "typography",
    label: "Typography",
  },
  {
    value: "wireframing",
    label: "Wireframing",
  },
];

export function FilterButton({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            {selectedCategory ? (
              <>{selectedCategory.label}</>
            ) : (
              <>Filter by category</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="end">
          <CategoryList
            setOpen={setOpen}
            setSelectedCategory={setSelectedCategory}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[200px]justify-start">
          {selectedCategory ? (
            <>{selectedCategory.label}</>
          ) : (
            <>Filter by category</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CategoryList
            setOpen={setOpen}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CategoryList({
  setOpen,
  setSelectedCategory,
}: {
  setOpen: (open: boolean) => void;
  setSelectedCategory: (category: Category | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Search category..." />
      <CommandList>
        <CommandEmpty>No categories found.</CommandEmpty>
        <CommandGroup>
          {categories.map((category) => (
            <CommandItem
              key={category.value}
              value={category.value}
              onSelect={(value) => {
                setSelectedCategory(
                  categories.find((priority) => priority.value === value) ||
                    null,
                );
                setOpen(false);
              }}
            >
              {category.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
