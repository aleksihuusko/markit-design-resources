import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

import Logo from "@/components/Logo";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Navbar() {
  return (
    <nav className="lg:min-h-18 flex h-auto min-h-16 w-full items-center bg-background px-[5%]">
      <div className="mx-auto flex h-full w-full auto-cols-fr items-center justify-between gap-4 lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr]">
        <div className="flex min-h-16 flex-shrink-0 items-center">
          <Logo className="h-auto w-24 text-foreground md:w-28" />
        </div>
        <ul className="absolute left-0 top-16 hidden w-full flex-col items-center justify-start border-b border-muted-foreground bg-background px-[5%] pt-4 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:border-none lg:px-0 lg:pt-0">
          <li className="w-full lg:w-auto">
            <Link href="/">
              <Button variant="link">Resources</Button>
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link href="/">
              <Button variant="link">Sponsor</Button>
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link href="/">
              <Button variant="link">Newsletter</Button>
            </Link>
          </li>
        </ul>
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
