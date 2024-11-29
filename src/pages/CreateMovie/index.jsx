import { motion } from "framer-motion";
import React from "react";
import { Button, Input, Label } from "../../components";

const CreateMovie = () => {
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
          <form>
            <div className="mb-6">
              <Label htmlFor="title" textColor="text-white">
                Title
              </Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter movie title"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="image" textColor="text-white">
                Image
              </Label>
              <Input
                type="file"
                name="image"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="purple" width="w-full">
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
