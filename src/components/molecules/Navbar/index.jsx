import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchAllMovies,
  fetchGenres,
  setMovies,
  fetchProductionSeries,
} from "../../../config/redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres, allMovies, productionSeries } = useSelector(
    (state) => state.movies
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique years from ALL movies, not just filtered ones
  const availableYears = useMemo(() => {
    const years = [...new Set(allMovies.map((movie) => movie.year))];
    return years.sort((a, b) => b - a);
  }, [allMovies]);

  // Get available genres (excluding empty ones)
  const availableGenres = useMemo(() => {
    return genres.filter((genre) => genre.movies && genre.movies.length > 0);
  }, [genres]);

  // Add this new memoized value after availableGenres
  const availableProductionSeries = useMemo(() => {
    // Get all unique production series IDs from movies
    const usedSeriesIds = new Set(
      allMovies
        .filter((movie) => movie.productionSeries)
        .map((movie) => movie.productionSeries._id)
    );

    // Filter production series to only include those that are used in movies
    return productionSeries.filter((series) => usedSeriesIds.has(series._id));
  }, [allMovies, productionSeries]);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchAllMovies()); // Add this
    dispatch(fetchProductionSeries()); // Add this
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setMovies(1, null, searchQuery));
    navigate("/home");
  };

  const handleGenreClick = (genreId) => {
    setSearchQuery(""); // Clear search when selecting genre
    dispatch(setMovies(1, genreId));
    navigate("/home");
  };

  const handleYearClick = (year) => {
    setSearchQuery(""); // Clear search when selecting year
    dispatch(setMovies(1, null, "", year));
    navigate("/home");
  };

  const handleProductionSeriesClick = (seriesId) => {
    setSearchQuery(""); // Clear search when selecting production series
    dispatch(setMovies(1, null, "", null, seriesId));
    navigate("/home");
  };

  return (
    <header
      className="bg-white/15
        my-4
        mx-32
        sticky
        top-0
        z-50
        backdrop-blur-lg
        border border-white/40
        hover:border-black/15
        hover:bg-white/5
        transition-all
        duration-300
        hover:shadow-lg
        hover:shadow-purple-900 rounded-xl"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-700">
          <Link to="home" className="hover:text-white transition duration-300">
            MovieZul
          </Link>
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="w-full px-4 py-2 bg-white/10 border border-white/40 rounded-lg
                       text-white placeholder-white/50 focus:outline-none focus:border-purple-500
                       transition duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-purple-500
                         transition duration-300"
            >
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Center dropdowns */}
        <div className="flex gap-6">
          <Link
            to="about"
            className="hover:text-purple-300 hover:underline transition duration-300"
          >
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-purple-300 transition duration-300">
              Genres <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {availableGenres.map((genre) => (
                <DropdownMenuItem
                  key={genre._id}
                  onClick={() => handleGenreClick(genre._id)}
                >
                  {genre.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={() => handleGenreClick(null)}>
                All Movies
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-purple-300 transition duration-300">
              Years <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {availableYears.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => handleYearClick(year)}
                >
                  {year}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={() => handleYearClick(null)}>
                All Years
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add Production Series Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-purple-300 transition duration-300">
              Production Series <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {availableProductionSeries.map((series) => (
                <DropdownMenuItem
                  key={series._id}
                  onClick={() => handleProductionSeriesClick(series._id)}
                >
                  {series.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem
                onClick={() => handleProductionSeriesClick(null)}
              >
                All Series
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right-aligned login link */}
        <nav>
          <Link
            to="login"
            className="hover:text-purple-300 hover:underline transition duration-300"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
