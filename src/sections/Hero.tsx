// Import necessary modules and components
import { Link as LinkScroll, Element } from 'react-scroll'; // For smooth scrolling and linking to specific sections
import Button from '../components/Button'; // Custom Button component

// Define the Hero component
const Hero = () => {
  return (
    // Hero section with responsive padding for different screen sizes
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* Wrapper for scroll navigation, named 'hero' */}
      <Element name="hero">
        <div className="container">
          {/* Content area for heading and description */}
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            {/* Caption or subtitle */}
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            {/* Main heading */}
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            {/* Description text */}
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            {/* Button with smooth scrolling to the "features" section */}
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* Background image for the hero section */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png" // Source of the hero image
              className="size-1230 max-lg:h-auto" // Image styling for responsive behavior
              alt="hero" // Alternative text for the image
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

// Export the Hero component for use in other parts of the app
export default Hero;
