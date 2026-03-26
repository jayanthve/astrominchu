import Image from "next/image";
import appLogo from "../components/logo.png";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-bgPrimary via-bgSecondary to-bgOverlay py-24 flex-1">
      <div className="w-full flex justify-center px-5 ">
        <div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-8 text-center">
            About <span className="text-accentPrimary">AstroMinchu</span>{" "}
          </h1>
          <div className="text-textSecondary text-justify max-w-2xl space-y-8">
            <p>
              AstroMinchu, derived from the Kannada word Minchu, which means
              glittering or lightning, was launched by Jayanth Venkatesh in
              2022.
            </p>
            <p>
              The platform is a celebration of the beauty of our universe, as
              seen through the lens of astrophotography. AstroMinchu aims to
              inspire people to marvel at the various astronomical events,
              galaxies, nebulas, and other wonders that grace our universe. If
              you are passionate and can handle challenges, astrophotography can
              be incredibly rewarding.
            </p>
            <p>
              The results may be more satisfying than you ever imagined, making
              the journey worthwhile. Join this adventure of awe and inspiration
              by following AstroMinchu on Instagram and YouTube.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-3 mt-10">
            <a
              href="https://www.instagram.com/astrominchu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
            >
              <div className="px-5 py-3 w-auto rounded-full bg-accentPrimary text-bgPrimary font-semibold shadow-lg hover:opacity-90">
                Instagram
              </div>
            </a>
            <a
              href="https://www.youtube.com/@AstroMinchu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
            >
              <div className="px-5 py-3 rounded-full border border-accentPrimary text-accentPrimary font-semibold hover:shadow-lg">
                Youtube
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
