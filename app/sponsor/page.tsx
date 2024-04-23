import { SponsorForm } from "@/components/SponsorForm";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SponsorPage() {
  return (
    <>
      <header className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Sponsor
            </h1>
            <p className="text-balance text-muted-foreground md:text-lg">
              {`Promote your product to thousands of engaged product designers and
              developers.`}
            </p>
          </div>
        </div>
      </header>
      <Separator />
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container p-0">
          <div className="mx-auto w-full max-w-lg">
            <div className="prose prose-stone dark:prose-invert">
              <>
                <h2>What we offer</h2>
                <h3>Get featured</h3>
                <p>
                  Your products will appear on the homepage as the fourth item.
                  It will remain there for the specified time period.
                </p>
                <h3>Newsletter</h3>
                <p>
                  Your product will be showcased in a dedicated spot at the top
                  of our weekly email. It will appear in each email for the
                  specified time period.
                </p>
                <Separator />
                <h2>Stats</h2>
                <Table>
                  <TableCaption>These are approximate averages.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Subscribers</TableHead>
                      <TableHead className="w-[180px]">Regions</TableHead>
                      <TableHead>Open rate</TableHead>
                      <TableHead>Click rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-left font-medium">
                        2,500
                      </TableCell>
                      <TableCell>USA, UK, FR, ES, CA</TableCell>
                      <TableCell>27%</TableCell>
                      <TableCell>6,9%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Separator className="my-10" />
                <h2>Get in touch</h2>
                <p>
                  {`If you believe you're a suitable match for our audience, contact us.`}
                </p>
                <SponsorForm />
              </>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
