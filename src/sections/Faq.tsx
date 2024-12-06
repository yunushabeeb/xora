// Import necessary modules and components
import { Element } from 'react-scroll'; // For smooth scrolling to sections
import { faq } from '../constants'; // FAQ data
import FaqItem from '../components/FaqItem'; // Component for individual FAQ items

const Faq = () => {
  // Calculate half the length of the FAQ array to split into two columns
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      {/* Define the section's scrollable element */}
      <Element name="faq">
        {/* FAQ Section Header */}
        <div className="container relative z-2 py-28">
          <div>
            {/* Title */}
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            {/* Subtitle */}
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>

          {/* Vertical divider line */}
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        {/* FAQ Content Section */}
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          {/* Container for two-column layout */}
          <div className="container flex gap-10 max-lg:block">
            {/* Decorative FAQ Logo */}
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            {/* Left Column */}
            <div className="relative flex-1 pt-24">
              {/* Map the first half of the FAQ items */}
              {faq.slice(0, halfLength).map(
                (
                  item: { id: string; question: string; answer: string }, // Type definition for item
                  index: number // Index of the item
                ) => (
                  <FaqItem key={item.id} item={item} index={index} />
                )
              )}
            </div>

            {/* Right Column */}
            <div className="relative flex-1 lg:pt-24">
              {/* Map the second half of the FAQ items */}
              {faq.slice(halfLength).map(
                (
                  item: { id: string; question: string; answer: string }, // Type definition for item
                  index: number // Index for the second half
                ) => (
                  <FaqItem
                    key={item.id}
                    item={item}
                    index={halfLength + index} // Adjust index for second column
                  />
                )
              )}
            </div>
          </div>

          {/* Vertical divider line for larger screens */}
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq; // Export the Faq component
