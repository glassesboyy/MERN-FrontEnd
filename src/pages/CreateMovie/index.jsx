import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button, Input, Label, Upload } from "../../components";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !genre || !year || !imageUrl) {
      setNotification({
        message: "Semua field harus diisi!",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("year", year);
    formData.append("image", imageUrl);

    try {
      const response = await axios.post(
        "http://localhost:4000/v1/movie/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setNotification({
        message: "Movie berhasil ditambahkan!",
        type: "success",
      });

      setTitle("");
      setDescription("");
      setGenre("");
      setYear("");
      setImageUrl(null);
    } catch (error) {
      setNotification({
        message: "Terjadi kesalahan saat mengunggah data.",
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

          <form>
            <div className="mb-6">
              <Label htmlFor="title" textColor="text-white">
                Title
              </Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="description" textColor="text-white">
                Description
              </Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Enter movie description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-6 flex gap-4">
              <div>
                <Label htmlFor="genre" textColor="text-white">
                  Genre
                </Label>
                <Input
                  type="text"
                  name="genre"
                  placeholder="Enter movie genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="year" textColor="text-white">
                  Year
                </Label>
                <Input
                  type="number"
                  name="year"
                  placeholder="Enter movie year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <Label htmlFor="image" textColor="text-white">
                Poster Image
              </Label>
              <Upload
                name="fileUpload"
                accept=".jpg,.png,"
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="purple"
                width="w-full"
                onClick={handleSubmit}
              >
                Create Movie
              </Button>
              <Button to="/home" variant="glassmorphism" width="w-1/2">
                Kembali
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateMovie;
