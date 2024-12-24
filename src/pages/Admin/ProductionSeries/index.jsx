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

const ProductionSeriesList = () => {
  return (
    <div className="border container mx-auto pb-4 rounded-lg">
      <Table>
        <TableCaption>List of Production Series</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Seasons</TableHead>
            <TableHead>Episodes</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map your production series data here */}
          <TableRow>
            <TableCell>Example Series</TableCell>
            <TableCell>Drama</TableCell>
            <TableCell>2</TableCell>
            <TableCell>24</TableCell>
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

export default ProductionSeriesList;
