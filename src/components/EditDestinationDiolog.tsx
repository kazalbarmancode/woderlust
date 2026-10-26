'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { PackageCheck, Pencil, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const categories = ["Beach", "Mountain", "City", "Adventure", "Cultural"];

const initialForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const EditDestinationDiolog = () => {
  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);

  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/destinations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
      setOpen(false);
    } catch (err) {
      console.error("Failed to update destination:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors shadow-sm">
            <Pencil className="w-3.5 h-3.5 text-slate-500" />
            Edit
          </Button>
        }
      />
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>
          <DialogDescription>
            Update the travel package details below
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Destination Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Destination Name</Label>
            <Input
              id="name"
              placeholder="Bali Paradise"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              required
            />
          </div>

          {/* Country + Category */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="Indonesia"
                value={form.country}
                onChange={(event) => update("country", event.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Category</Label>
              <Select
                value={form.category}
                onValueChange={(value) => update("category", value ?? "")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price + Duration */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g., 1299"
                value={form.price}
                onChange={(event) => update("price", event.target.value)}
                required
                min="0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                placeholder="e.g., 7 Days/6 Nights"
                value={form.duration}
                onChange={(event) => update("duration", event.target.value)}
                required
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="grid gap-2">
            <Label htmlFor="departureDate">Departure Date</Label>
            <Input
              id="departureDate"
              type="date"
              value={form.departureDate}
              onChange={(event) => update("departureDate", event.target.value)}
              required
            />
          </div>

          {/* Image URL */}
          <div className="grid gap-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={form.imageUrl}
              onChange={(event) => update("imageUrl", event.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the travel experience..."
              className="min-h-28"
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
              required
            />
          </div>

          {/* Actions */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              <X />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cyan-600 text-white hover:bg-cyan-700"
            >
              <PackageCheck />
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDiolog;