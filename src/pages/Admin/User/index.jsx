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

const UserList = () => {
  return (
    <div className="border container mx-auto pb-4 rounded-lg">
      <Table>
        <TableCaption>List of Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map your user data here */}
          <TableRow>
            <TableCell>johndoe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Active</TableCell>
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

export default UserList;
