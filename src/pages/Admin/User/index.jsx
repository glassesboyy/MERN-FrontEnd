import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../../components";

const UserList = () => {
  return (
    <div className="border bg-black border-gray-700 container mx-auto pb-4 rounded-lg">
      <div className="flex justify-center">
        <TableCaption>List of Users</TableCaption>
      </div>
      <div className="flex justify-end">
        <Button
          variant="glassmorphism"
          className="text-white"
          margin="mr-4 my-4"
          width="w-1/6"
        >
          Create User
        </Button>
      </div>
      <Table className="text-gray-200">
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
          <TableRow className="hover:bg-gray-700">
            <TableCell>johndoe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button variant="red" size="sm" width="w-1/2">
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
