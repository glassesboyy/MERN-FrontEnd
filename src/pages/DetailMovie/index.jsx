import React from "react";
import { Button } from "../../components";

const DetailMovie = () => {
  return (
    <div className="p-6 font-sans flex flex-col md:flex-row gap-10 bg-black rounded-3xl p-10">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
        alt="Movie Poster"
        className="w-full md:w-72 rounded-lg shadow-md shadow-white"
      />

      <div className="mt-6 flex-1">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Inception</h1>
        <p className="text-white mt-5 text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ad
          repellat non suscipit, ut doloribus similique eos, iure impedit iusto,
          aperiam necessitatibus dolore. Nemo, aut ut consectetur itaque ipsa
          eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae itaque placeat iste, animi nostrum inventore accusantium
          molestias officia consectetur praesentium magnam eveniet corporis id
          culpa nobis quae ex ipsum repellat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas asperiores blanditiis totam a
          perspiciatis eum suscipit temporibus animi quo facilis, similique
          sapiente deserunt facere esse excepturi in iste adipisci veritatis.
        </p>
        <div className="mt-4">
          <p className="text-white">
            <span className="font-bold">Durasi:</span> 2h 28min
          </p>
          <p className="text-white">
            <span className="font-bold">Genre:</span> Action, Sci-Fi, Thriller
          </p>
        </div>
        <div className="mt-16 flex justify-end">
          <Button to="/home" variant="glassmorphism" width="w-1/5">
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
