'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DeleteDestinationProps {
  id: string;
}

const DeleteDestinationPage = ({ id }: DeleteDestinationProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete destination");
      }

      router.push("/destination");
    } catch (err) {
      console.error("Error deleting destination:", err);
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-md hover:bg-red-50 transition-colors shadow-sm">
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </Button>
          }
        />

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this travel package from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Confirm Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDestinationPage;