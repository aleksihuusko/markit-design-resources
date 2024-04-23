import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SubmitButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Submit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-left">Submit a resource</DialogTitle>
          <DialogDescription className="text-left">
            {`Share your favourite resource for fellow designers and developers. If we like it too, we'll feature it.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL link
            </Label>
            <Input
              id="url"
              placeholder="www.markit.design"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Category
            </Label>
            <Input
              id="Category"
              placeholder="Resource"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit resource</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
