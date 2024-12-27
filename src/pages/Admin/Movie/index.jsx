import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteMovie, setMovies } from "@/config/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(setMovies());
  }, [dispatch]);

  const handleEdit = (movieId) => {
    navigate(`/admin/movies/edit/${movieId}`);
  };

  const handleDelete = async (movieId) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await dispatch(deleteMovie(movieId));
        dispatch(setMovies());
      } catch (error) {
        // Remove error logging
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border bg-black border-gray-700 container mx-auto pb-4 rounded-lg">
      {/* Add Create Movie Button */}
      <div className="flex justify-center">
        <TableCaption>List of Movies</TableCaption>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => navigate("/admin/movies/create")}
          variant="glassmorphism"
          className="text-white"
          margin="mr-4 my-4"
          width="w-1/6"
        >
          Create Movie
        </Button>
      </div>

      <Table className="text-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Poster</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Production Series</TableHead>
            <TableHead>Release Year</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies &&
            movies.map((movie) => (
              <TableRow key={movie._id} className=" hover:bg-gray-700">
                <TableCell>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-20 h-28 object-cover rounded"
                    onError={(e) => {
                      e.target.src = "/default-movie.jpg";
                    }}
                  />
                </TableCell>
                <TableCell className="font-semibold">{movie.title}</TableCell>
                <TableCell>
                  {Array.isArray(movie.genres)
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "-"}
                </TableCell>
                <TableCell>{movie.productionSeries?.name || "-"}</TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell className="space-x-1">
                  <Button
                    variant="blue"
                    size="sm"
                    onClick={() => handleEdit(movie._id)}
                    width="w-1/3"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="red"
                    size="sm"
                    onClick={() => handleDelete(movie._id)}
                    width="w-1/3"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MovieList;
