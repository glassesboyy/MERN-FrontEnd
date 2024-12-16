import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* Center dropdowns */}
        <div className="flex-1 flex justify-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-purple-300 transition duration-300">
              Genres <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/genre/action" className="w-full">
                  Action
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/genre/comedy" className="w-full">
                  Comedy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/genre/drama" className="w-full">
                  Drama
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/genre/horror" className="w-full">
                  Horror
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/genre/romance" className="w-full">
                  Romance
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-purple-300 transition duration-300">
              Years <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/year/2024" className="w-full">
                  2024
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/year/2023" className="w-full">
                  2023
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/year/2022" className="w-full">
                  2022
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/year/2021" className="w-full">
                  2021
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/year/2020" className="w-full">
                  2020
                </Link>
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
