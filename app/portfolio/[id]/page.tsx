"use client";
import { useState, use, useEffect } from "react";
import Modal from "react-modal";
import { allProjects } from "../AllProject";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = allProjects.find((p) => p.id === parseInt(id));

  // ইমেজ সিলেক্ট করার ফাংশন
  const openModal = (img: string, index: number) => {
    setModalImg(img);
    setCurrentIndex(index);
  };

  // ইমেজ পরিবর্তনের ফাংশন
  const changeImage = (direction: number) => {
    if (!project) return;
    const newIndex =
      (currentIndex + direction + project.gallery.length) %
      project.gallery.length;
    setCurrentIndex(newIndex);
    setModalImg(project.gallery[newIndex]);
  };

  // 2. এই useEffect টি যোগ করুন
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <div className="max-w-[1700px] mx-auto py-20 my-20 px-6 md:px-20 bg-white">
      <button
        onClick={() => window.history.back()}
        className="mb-8 text-sm uppercase underline text-gray-500"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-light mb-12 text-gray-500">
        {project?.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {project?.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => openModal(img, i)}
            className="w-full h-80 object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
          />
        ))}
      </div>

      <Modal
        isOpen={!!modalImg}
        onRequestClose={() => setModalImg(null)}
        className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 outline-none"
        overlayClassName="fixed inset-0 bg-black/80 z-50"
      >
        {/* Close Button */}
        <button
          className="absolute top-10 right-10 text-white text-xl font-bold cursore-pointer"
          onClick={() => setModalImg(null)}
        >
          CLOSE [X]
        </button>

        {/* Prev Button */}
        <button
          className="absolute left-10 text-white text-4xl font-light hover:text-amber-500 transition"
          onClick={() => changeImage(-1)}
        >
          &#10094;
        </button>

        {/* Main Image */}
        <img
          src={modalImg!}
          className="max-h-[80vh] max-w-[90vw] object-contain shadow-2xl"
        />

        {/* Next Button */}
        <button
          className="absolute right-10 text-white text-4xl font-light hover:text-amber-500 transition"
          onClick={() => changeImage(1)}
        >
          &#10095;
        </button>

        {/* Counter */}
        <div className="absolute bottom-10 text-white text-sm">
          {currentIndex + 1} / {project?.gallery.length}
        </div>
      </Modal>
    </div>
  );
}
