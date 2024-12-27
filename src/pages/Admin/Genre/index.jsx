import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";

const GenreList = () => {
  return (
    <div className="border bg-black border-gray-700 container mx-auto pb-4 rounded-lg">
      <div className="flex justify-center">
        <TableCaption>List of Genres</TableCaption>
      </div>
      <div className="flex justify-end">
        <Button
          variant="glassmorphism"
          className="text-white"
          margin="mr-4 my-4"
          width="w-1/6"
        >
          Create Genre
        </Button>
      </div>
      <Table className="text-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Movies</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map your genre data here */}
          <TableRow className="hover:bg-gray-700">
            <TableCell>Action</TableCell>
            <TableCell>Action movie genre</TableCell>
            <TableCell>Movies</TableCell>
            <TableCell className="space-x-2">
              <Button variant="blue" size="sm" width="w-1/4">
                Edit
              </Button>
              <Button variant="red" size="sm" width="w-1/4">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default GenreList;
