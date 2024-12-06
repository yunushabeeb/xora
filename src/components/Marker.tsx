// The Marker component renders an SVG element representing a marker icon.
// It accepts a prop 'markerFill' which determines the color of the marker's fill.
// If no color is provided, it defaults to '#2EF2FF'.
const Marker = ({ markerFill }: { markerFill?: string }) => {
  return (
    <svg
      width="8" // Specifies the width of the SVG element
      height="22" // Specifies the height of the SVG element
      viewBox="0 0 8 22" // Defines the view box for scaling the SVG content
      fill="none" // Prevents the SVG from filling anything by default
      xmlns="http://www.w3.org/2000/svg" // SVG namespace to define the XML structure for SVG elements
    >
      {/* The path element represents the shape of the marker. */}
      <path
        fillRule="evenodd" // Ensures that the path is filled according to the "evenodd" rule (used for complex shapes)
        clipRule="evenodd" // Defines the clipping rule (same as fillRule here)
        d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
        // The 'd' attribute defines the actual drawing of the marker icon.
        fill={markerFill || '#2EF2FF'} // Sets the fill color of the marker, defaults to '#2EF2FF' if no 'markerFill' prop is passed.
      />
    </svg>
  );
};

export default Marker;
