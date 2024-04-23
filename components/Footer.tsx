"use client";

import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Footer() {
  return (
    <footer className="md:py-18 px-[5%] py-12 lg:py-20">
      <div className="container p-0">
        <div className="md:pb-18 flex flex-col items-center pb-12 lg:pb-20">
          <div className="mb-8">
            <Logo className="h-auto w-24 text-foreground md:w-28" />
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row">
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
        </div>
        <div className="h-px w-full bg-muted-foreground/20" />
        <div className="flex flex-col-reverse items-center justify-between pt-6 text-center text-sm md:flex-row md:pt-8">
          <p className="mt-8 text-muted-foreground md:mt-0">
            © 2024 Markit | All rights reserved
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline decoration-black underline-offset-1">
              <Link href="/">
                <Button variant="link" className="text-muted-foreground">
                  Privacy Policy
                </Button>
              </Link>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <Link href="/">
                <Button variant="link" className="text-muted-foreground">
                  Terms of Service
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
