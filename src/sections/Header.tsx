// Import necessary libraries and hooks
import clsx from 'clsx'; // For conditional class management
import { useEffect, useState } from 'react'; // React hooks for state and lifecycle management
import { LinkProps, Link as LinkScroll } from 'react-scroll'; // Smooth scrolling and link navigation

const Header = () => {
  // State to manage whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  // State to track whether the user has scrolled past a certain point
  const [hasScrolled, setHasScrolled] = useState(false);

  // Effect to add/remove a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on scroll position
      setHasScrolled(window.scrollY > 32);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Component for navigation links
  const NavLink = ({ title, to }: LinkProps) => (
    <LinkScroll
      to={to} // Target section ID
      offset={-100} // Offset for scrolling
      spy // Keep the link active based on section visibility
      smooth // Enable smooth scrolling
      activeClass="nav-active" // Class applied to active links
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5" // Styling for the links
      onClick={() => setIsOpen(false)} // Close the menu on link click
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', // Default styles
        hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]' // Styles when scrolled
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Logo link for scrolling to the hero section */}
        <LinkScroll
          to="hero"
          offset={-250} // Offset for proper alignment
          spy
          smooth
          className="lg:hidden flex-1 cursor-pointer z-2"
        >
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </LinkScroll>

        {/* Navigation container */}
        <div
          className={clsx(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', // Default mobile styles
            isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none' // Adjust visibility based on state
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              {/* Navigation list */}
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  {/* Navigation links */}
                  <NavLink to="features" title="features" />
                  <div className="dot" /> {/* Decorative dot */}
                  <NavLink to="pricing" title="pricing" />
                </li>
                <li className="nav-logo">
                  {/* Central logo in larger screens */}
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink to="faq" title="faq" />
                  <div className="dot" />
                  <NavLink to="download" title="download" />
                </li>
              </ul>
            </nav>
          </div>
          {/* Background outlines for mobile menu */}
          <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
            <img
              src="/images/bg-outlines.svg"
              width={960}
              height={380}
              alt="outline"
              className="relative z-2"
            />
            <img
              src="/images/bg-outlines-fill.png"
              width={960}
              height={380}
              alt="outline"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)} // Toggle the menu state
        >
          <img
            src={`/images/${isOpen ? 'close' : 'magic'}.svg`} // Dynamically load icon based on menu state
            alt="menu"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

// Export the Header component
export default Header;
