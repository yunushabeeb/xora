// Import the socials data from the constants file
import { socials } from '../constants';

const Footer = () => {
  return (
    <footer>
      {/* Container for the footer content */}
      <div className="container py-10">
        {/* Wrapper for the footer sections */}
        <div className="flex w-full max-md:flex-col">
          {/* Copyright Section */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, D-code-H</p>{' '}
            {/* Display copyright notice */}
          </div>

          {/* Legal Links Section */}
          <div className="flex items-center justify-center sm:ml-auto">
            {/* Privacy Policy Link */}
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            {/* Terms of Use Link */}
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          {/* Social Media Icons Section */}
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              // List item for each social media link
              <li key={id}>
                <a
                  href={url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Display the social media icon */}
                  <img
                    src={icon} // Icon URL
                    alt={title} // Accessibility for screen readers
                    className="size-1/3 object-contain" // Styles for the icon
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
