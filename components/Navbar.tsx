"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="lg:min-h-18 flex h-auto min-h-16 w-full items-center bg-background px-[5%]">
      <div className="mx-auto flex h-full w-full auto-cols-fr items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <div className="flex min-h-16 flex-shrink-0 items-center">
          <Logo className="h-auto w-24 text-foreground md:w-28" />
        </div>
        <NavigationMenu className="hidden lg:flex lg:justify-self-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sponsor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Newsletter
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Submit
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex min-h-16 items-center justify-end gap-x-4">
          <ThemeToggle />
          <Button>Submit</Button>
          <button className="group -mr-2 flex size-12 flex-col items-center justify-center lg:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
