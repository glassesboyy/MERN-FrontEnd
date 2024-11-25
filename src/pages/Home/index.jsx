import { motion } from "framer-motion";
import React from "react";
import { Button, MovieItem } from "../../components";

const Home = () => {
  const movies = [
    {
      title: "Godzilla Minus One",
      description:
        "Setelah Jepang kalah dalam Perang Dunia II, Godzilla muncul sebagai ancaman besar yang menghancurkan negara yang sudah hancur. Sebuah perjuangan epik untuk bertahan hidup dimulai.",
      imageUrl:
        "https://www.movieposters.com/cdn/shop/files/godzilla2_480x.progressive.jpg?v=1729789153",
    },
    {
      title: "Blade Trinity",
      description:
        "Blade bergabung dengan tim pemburu vampir untuk menghadapi musuh terbesarnya, Dracula, dalam pertarungan epik untuk menyelamatkan umat manusia dari dominasi vampir.",
      imageUrl:
        "https://www.movieposters.com/cdn/shop/products/4425fc6f2ac17eb310afa66abe71690b_7edc2fb1-ab7a-4a92-9b6e-778d06bb4bb9_480x.progressive.jpg?v=1573590396",
    },
    {
      title: "The Lord of The Rings",
      description:
        "Frodo Baggins memulai perjalanan berbahaya untuk menghancurkan Cincin Kekuasaan, dengan bantuan Fellowship yang melindunginya dari kekuatan jahat Sauron.",
      imageUrl:
        "https://www.movieposters.com/cdn/shop/files/ItemR81771_jpg_480x.progressive.jpg?v=1694023916",
    },
    {
      title: "Avatar",
      description:
        "Seorang mantan marinir dikirim ke dunia Pandora dan harus memilih antara melindungi penduduk asli planet tersebut atau mengikuti perintah misinya yang menghancurkan.",
      imageUrl:
        "https://www.movieposters.com/cdn/shop/files/avatar.adv.24x36_480x.progressive.jpg?v=1707410703",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-wrap justify-center"
    >
      <div className="w-full flex justify-end mb-4">
        <Button
          variant="glassmorphism"
          to="/create-movie"
          color="purple"
          width="w-32"
        >
          Create
        </Button>
      </div>

      <div className="flex flex-wrap justify-center">
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <MovieItem
              title={movie.title}
              imageUrl={movie.imageUrl}
              description={movie.description}
              margin="m-2"
              width="w-72"
              height="h-auto"
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-between mt-4">
        <Button
          variant="glassmorphism"
          width="w-32"
          margin="ml-10"
          className="hidden"
        >
          Previous
        </Button>
        <Button variant="glassmorphism" width="w-32" margin="mr-10">
          Next
        </Button>
      </div>
    </motion.div>
  );
};

export default Home;
