// Importing the TestimonialItem component to display individual testimonials
import TestimonialItem from '../components/TestimonialItem';
// Importing the testimonials data from a constants file
import { testimonials } from '../constants';

// Testimonials component to display the testimonials section
const Testimonials = () => {
  // Calculate the halfway point of the testimonials array to divide it into two groups
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    // Section container with relative positioning and padding
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      {/* Container to hold the section content */}
      <div className="container block lg:flex">
        {/* Header of the testimonials section */}
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          {/* Caption above the header */}
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          {/* Main heading of the section */}
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        {/* Inner container for testimonials, styled with before/after pseudo-elements */}
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          {/* First group of testimonials */}
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id} // Unique key for each testimonial
                item={testimonial} // Passing the testimonial data as a prop
                containerClassName="last:after:hidden last:after:max-md:block" // Styling for the container
              />
            ))}
          </div>

          {/* Second group of testimonials */}
          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id} // Unique key for each testimonial
                item={testimonial} // Passing the testimonial data as a prop
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12" // Styling for the container
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the Testimonials component for use in other parts of the application
export default Testimonials;
