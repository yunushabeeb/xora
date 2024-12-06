// Import necessary modules and components
import { Element } from 'react-scroll'; // For scroll anchoring
import { links, logos } from '../constants'; // Links and logos data
import Marker from '../components/Marker'; // Decorative marker component

const Download = () => {
  return (
    <section>
      {/* Define a scrollable element for the Download section */}
      <Element name="download" className="g7 relative pb-32 pt-24">
        <div className="container">
          {/* Main content layout: flex container */}
          <div className="flex items-center">
            {/* Left Column: Information and Download Links */}
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              {/* Logo */}
              <div className="mb-10">
                <img
                  src="/images/xora.svg" // Path to logo
                  alt="xora" // Logo alt text
                  width={160} // Width of logo
                  height={55} // Height of logo
                />
              </div>
              {/* Description */}
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>
              {/* Download Links */}
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id} // Unique key for each list item
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url} // Link URL
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      {/* Marker decoration */}
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      {/* Decorative background */}
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      {/* Icon */}
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Preview Image */}
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  {/* Decorative dots */}
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  {/* Preview image */}
                  <img
                    src="/images/screen.jpg" // Path to preview image
                    alt="screen" // Alt text for preview image
                    width={855} // Width of image
                    height={655} // Height of image
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                {/* Logo image */}
                <img
                  src={url} // Path to logo image
                  width={width} // Width of logo
                  height={height} // Height of logo
                  alt={title} // Alt text for logo
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download; // Export the Download component
