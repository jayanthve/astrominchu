"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

// Import multiple band images
import bandImage1 from "./gallery1.png";
import bandImage2 from "./gallery2.png";
import bandImage3 from "./gallery3.png";
import bandImage4 from "./gallery4.png";
import bandImage5 from "./gallery5.png";
import bandImage6 from "./gallery6.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: bandImage1,
      alt: "Astro Image 1",
      category: "Astro Pic 1",
    },
    {
      src: bandImage2,
      alt: "Astro Image 2",
      category: "Astro Pic 2",
    },
    {
      src: bandImage3,
      alt: "Astro Image 3",
      category: "Astro Pic 3",
    },
    {
      src: bandImage4,
      alt: "Astro Image 4",
      category: "Astro Pic 4",
    },
    {
      src: bandImage5,
      alt: "Astro Image 5",
      category: "Astro Pic 5",
    },
    {
      src: bandImage6,
      alt: "Astro Image 6",
      category: "Astro Pic 6",
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => openImageModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-lg font-semibold">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="text-lg font-semibold">{selectedImage.category}</p>
            </div>
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
