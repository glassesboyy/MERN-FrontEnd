import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Label, Upload } from "../../components";
import {
  addMovie,
  fetchGenres,
  fetchProductionSeries,
} from "../../config/redux/actions";

const CreateMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres, productionSeries, loading, error } = useSelector(
    (state) => state.movies
  );
  const [notification, setNotification] = useState({ message: "", type: "" }); // Add notification state
  const [selectedProductionSeries, setSelectedProductionSeries] =
    useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    genres: [],
    year: "",
    image: null,
    productionSeries: null,
  });

  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchProductionSeries()); // Add this line
  }, [dispatch]);

  // Show error notification if there's an error from Redux state
  useEffect(() => {
    if (error) {
      setNotification({ message: error, type: "error" });
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (name === "fileUpload") {
      // Changed from checking type to checking name
      setForm({
        ...form,
        image: files[0],
      });
    } else if (name === "genres") {
      // Handle multiple select
      const selectedGenres = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setForm({
        ...form,
        genres: selectedGenres,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleGenreSelect = (genreId, genreName, checked) => {
    setSelectedGenres((prev) => {
      if (!checked) {
        return prev.filter((g) => g.id !== genreId);
      }
      return [...prev, { id: genreId, name: genreName }];
    });

    setForm((prev) => ({
      ...prev,
      genres: checked
        ? [...(prev.genres || []), genreId]
        : (prev.genres || []).filter((id) => id !== genreId),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.description ||
      !form.year ||
      !form.image ||
      form.genres.length === 0 ||
      !form.productionSeries // Add validation for productionSeries
    ) {
      setNotification({
        message:
          "Please fill in all required fields including genres and production series",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("year", form.year);
    formData.append("image", form.image);
    formData.append("genres", JSON.stringify(form.genres));
    formData.append("productionSeries", form.productionSeries); // Add productionSeries as string

    try {
      const response = await dispatch(addMovie(formData));
      setNotification({
        message: "Movie created successfully!",
        type: "success",
      });
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      setNotification({
        message: error.message || "Failed to create movie",
        type: "error",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md mx-auto p-10 bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl shadow-purple-900/50 border border-white/20">
          <h1 className="text-4xl text-center font-bold text-white mb-6">
            Create Movie Page
          </h1>

          {notification.message && (
            <div
              className={`p-2 ${
                notification.type === "success" ? "bg-indigo-800" : "bg-red-800"
              } items-center text-indigo-100 leading-none rounded-full flex mb-6`}
              role="alert"
            >
              <span
                className={`flex rounded-full ${
                  notification.type === "success"
                    ? "bg-indigo-500"
                    : "bg-red-500"
                } uppercase px-2 py-1 text-xs font-bold mr-3`}
              >
                {notification.type === "success" ? "Success" : "Error"}
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {notification.message}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" textColor="text-white">
                  Title
                </Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter movie title"
                  value={form.title}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20"
                />
              </div>

              <div>
                <Label htmlFor="description" textColor="text-white">
                  Description
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Enter movie description"
                  value={form.description}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20 resize-none"
                />
              </div>

              {/* Genres and Year side by side */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label htmlFor="genres" textColor="text-white">
                    Genres
                  </Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition duration-300">
                      <div className="truncate max-w-[100px]">
                        {selectedGenres.length > 0
                          ? selectedGenres.map((g) => g.name).join(", ")
                          : "Select Genres"}
                      </div>
                      <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {genres.map((genre) => (
                        <DropdownMenuCheckboxItem
                          key={genre._id}
                          checked={selectedGenres.some(
                            (g) => g.id === genre._id
                          )}
                          onCheckedChange={(checked) =>
                            handleGenreSelect(genre._id, genre.name, checked)
                          }
                        >
                          {genre.name}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="w-1/2">
                  <Label htmlFor="year" textColor="text-white">
                    Year
                  </Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="Enter movie year"
                    value={form.year}
                    onChange={handleChange}
                    className="bg-white/10 text-white border-white/20"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image" textColor="text-white">
                  Poster Image
                </Label>
                <Upload
                  name="fileUpload"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>

              {/* Add Production Series Dropdown */}
              <div>
                <Label htmlFor="productionSeries" textColor="text-white">
                  Production Series
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
                    <div className="truncate max-w-[200px]">
                      {selectedProductionSeries?.name ||
                        "Select Production Series"}
                    </div>
                    <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {productionSeries.map((series) => (
                      <DropdownMenuCheckboxItem
                        key={series._id}
                        checked={selectedProductionSeries?._id === series._id}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedProductionSeries(series);
                            setForm((prev) => ({
                              ...prev,
                              productionSeries: series._id, // Just store the ID
                            }));
                          } else {
                            setSelectedProductionSeries(null);
                            setForm((prev) => ({
                              ...prev,
                              productionSeries: null,
                            }));
                          }
                        }}
                      >
                        {series.name}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button
                  type="submit"
                  variant="purple"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Create Movie
                </Button>
                <Button
                  onClick={() => navigate("/home")}
                  variant="glassmorphism"
                  className="w-1/2"
                >
                  Kembali
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateMovie;
