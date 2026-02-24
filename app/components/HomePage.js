"use client";
import Image from "next/image";
import Link from "next/link";
import appLogo from "./logo.png";
import Header from "./Header";

import img1 from "../gallery/gallery1.png";
import img2 from "../gallery/gallery2.png";
import img3 from "../gallery/gallery3.png";
import img4 from "../gallery/gallery4.png";

export default function HomePage() {
  const galleryImages = [
    {
      src: img1,
      alt: "Astro Image 1",
      category: "Astro Pic 1",
    },
    {
      src: img2,
      alt: "Astro Image 2",
      category: "Astro Pic 2",
    },
    {
      src: img3,
      alt: "Astro Image 3",
      category: "Astro Pic 3",
    },
    {
      src: img4,
      alt: "Astro Image 4",
      category: "Astro Pic 4",
    },
  ];

  return (
    <>
      <main>
        <section className="bg-gradient-to-br from-bgPrimary via-bgSecondary to-bgOverlay py-24">
          <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-4">
                Discover the{" "}
                <span className="text-accentPrimary drop-shadow-[0_0_18px_rgba(255,196,0,0.35)]">
                  Glittering
                </span>{" "}
                Universe
              </h1>
              <p className="text-textSecondary max-w-xl">
                AstroMinchu captures galaxies, nebulas, and cosmic events
                through the art of astrophotography—inviting you to explore the
                wonders of our universe.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/gallery">
                  <div className="px-5 py-3 rounded-full bg-accentPrimary text-bgPrimary font-semibold shadow-lg hover:opacity-90">
                    Explore Gallery
                  </div>
                </Link>
                <button className="px-5 py-3 rounded-full border border-accentPrimary text-accentPrimary font-semibold hover:shadow-lg">
                  Follow on Instagram
                </button>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl2 shadow-soft">
              <div className="bg-black rounded-xl aspect-video grid place-items-center text-textSecondary">
                Featured Astrophotography Preview
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="font-heading text-2xl mb-6">About AstroMinchu</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-bgSecondary rounded-xl2 p-6 shadow-soft border border-white/10">
                <div className="text-accentPrimary font-bold">⚡</div>
                <h3 className="mt-2 mb-2 font-semibold">What is Minchu?</h3>
                <p className="text-textSecondary text-sm">
                  Derived from Kannada, <em>Minchu</em> means glittering or
                  lightning—the spark of awe when you witness the cosmos.
                </p>
              </div>
              <div className="bg-bgSecondary rounded-xl2 p-6 shadow-soft border border-white/10">
                <div className="text-accentPrimary font-bold">🔭</div>
                <h3 className="mt-2 mb-2 font-semibold">Our Mission</h3>
                <p className="text-textSecondary text-sm">
                  Celebrate the beauty of the universe and inspire people to
                  marvel at galaxies, nebulas, and celestial events.
                </p>
              </div>
              <div className="bg-bgSecondary rounded-xl2 p-6 shadow-soft border border-white/10">
                <div className="text-accentPrimary font-bold">✨</div>
                <h3 className="mt-2 mb-2 font-semibold">The Journey</h3>
                <p className="text-textSecondary text-sm">
                  Astrophotography is challenging yet deeply rewarding—the
                  results can be more satisfying than you ever imagined.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-bgOverlay py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="font-heading text-2xl mb-6">Featured Captures</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={`img-${index}`}
                  className="group aspect-square rounded-xl border border-accentPrimary/20 relative overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/gallery"
              className="text-accentPrimary hover:underline"
            >
              <p className="mt-4">View full gallery →</p>
            </Link>
          </div>
        </section>

        <section id="follow" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="bg-gradient-to-r from-bgSecondary to-bgPrimary rounded-xl2 p-8 border border-white/10 grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-heading text-2xl mb-3">
                  Join the AstroMinchu Journey
                </h2>
                <p className="text-textSecondary">
                  Follow on Instagram & YouTube for regular cosmic captures and
                  behind-the-scenes.
                </p>
                <div className="mt-4 space-x-2">
                  <button className="px-5 py-2 rounded-full bg-accentPrimary text-bgPrimary font-semibold">
                    Instagram
                  </button>
                  <button className="px-5 py-2 rounded-full border border-accentPrimary text-accentPrimary font-semibold">
                    YouTube
                  </button>
                </div>
              </div>
              <div className="bg-bgSecondary rounded-xl2 p-6 border border-white/10 shadow-soft">
                <h3 className="font-semibold mb-2">Get Updates</h3>
                <p className="text-textSecondary text-sm">
                  Monthly highlights from the night sky.
                </p>
                <div className="flex gap-2 mt-3">
                  <input
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-textPrimary placeholder:text-textSecondary outline-none"
                  />
                  <button className="px-4 py-2 rounded-full bg-accentPrimary text-bgPrimary font-semibold">
                    Notify me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bgOverlay text-textSecondary border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-5">
          © 2022–Present AstroMinchu · Capturing the Glittering Universe
        </div>
      </footer>
    </>
  );
}
