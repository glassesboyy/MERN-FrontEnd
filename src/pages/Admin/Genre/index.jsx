import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GenreList = () => {
  return (
    <div className="border container mx-auto pb-4 rounded-lg">
      <Table>
        <TableCaption>List of Genres</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map your genre data here */}
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Action movie genre</TableCell>
            <TableCell className="space-x-2">
              <Button size="sm">Edit</Button>
              <Button variant="destructive" size="sm">
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
