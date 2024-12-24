import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const MovieList = () => {
  return (
    <div className="border container mx-auto pb-4 rounded-lg">
      <Table>
        <TableCaption>List of Movies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Release Year</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map your movie data here */}
          <TableRow>
            <TableCell>Example Movie</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>2023</TableCell>
            <TableCell>120 min</TableCell>
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

export default MovieList;
