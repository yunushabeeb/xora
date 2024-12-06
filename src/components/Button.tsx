// Importing necessary libraries and components
import clsx from 'clsx'; // Utility for conditionally joining class names
import { ReactNode } from 'react'; // Importing type for React children nodes
import Marker from './Marker'; // Importing the Marker component for icon display

const Button = ({
  icon, // The source path for the button icon
  href, // The URL for anchor tags; if not provided, the button will be used
  markerFill, // The fill color for the Marker component, passed as a prop
  onClick, // Optional click handler for buttons
  containerClassName, // Optional custom class names for the button container
  children, // The content to be displayed inside the button (text, etc.)
}: {
  icon: string; // Defining that the icon prop should be a string (path to image)
  href?: string; // Optional URL for anchor tag
  markerFill?: string; // Optional color for the Marker component
  onClick?: () => void; // Optional click handler for buttons
  containerClassName?: string; // Optional custom class names for styling the container
  children: ReactNode; // Content of the button (text, elements, etc.)
}) => {
  // Inner component for the shared structure of the button
  const Inner = () => (
    <>
      {/* Button content wrapper with optional icon and text */}
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {/* Marker icon with the provided fill color */}
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill as string} />
        </span>
        {/* Conditionally render the icon if provided */}
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-20" // Icon styling
          />
        )}
        {/* Button text */}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children} {/* Rendering the children inside the button */}
        </span>
      </span>

      {/* Glow effect that appears before and after the button */}
      <span className="glow-before glow-after" />
    </>
  );

  // Rendering logic based on whether 'href' is provided
  return href ? (
    // If 'href' is provided, render as an anchor tag
    <a
      href={href}
      className={clsx(
        'relative p-0.5 g5 rounded-2xl shadow-500 group', // Styling for the anchor tag
        containerClassName // Additional custom classes passed via props
      )}
    >
      <Inner /> {/* The inner content */}
    </a>
  ) : (
    // If 'href' is not provided, render as a button
    <button
      className={clsx(
        'relative p-0.5 g5 rounded-2xl shadow-500 group', // Styling for the button
        containerClassName // Additional custom classes passed via props
      )}
      onClick={onClick} // Click handler for the button
    >
      <Inner /> {/* The inner content */}
    </button>
  );
};

export default Button;
