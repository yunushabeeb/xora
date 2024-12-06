// Import necessary modules and components
import { Element } from 'react-scroll'; // For smooth scrolling to sections
import { details, features } from '../constants'; // Data for features and details
import Button from '../components/Button'; // Button component

const Features = () => {
  return (
    <section>
      {/* Define the section's scrollable element */}
      <Element name="features">
        <div className="container">
          {/* Wrapper for feature cards and details */}
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {/* Render feature cards dynamically */}
            {features.map(({ id, title, icon, caption, text, button }) => (
              <div
                key={id} // Unique key for each feature
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                {/* Icon container */}
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <img
                      src={icon} // Feature icon
                      alt={title} // Alt text for accessibility
                      className="size-28 object-contain"
                    />
                  </div>
                </div>

                {/* Feature caption */}
                <p>{caption}</p>

                {/* Feature title */}
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>

                {/* Feature description */}
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>

                {/* Feature button */}
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            {/* Detail icons rendered as a horizontal list */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              {/* Horizontal line behind the icons */}
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  {/* Vertical line connecting detail items */}
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  {/* Detail icon container */}
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon} // Detail icon
                      alt={title} // Alt text for accessibility
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  {/* Detail title */}
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features; // Export the Features component
