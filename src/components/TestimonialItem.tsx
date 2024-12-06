import clsx from 'clsx';

// The TestimonialItem component receives two props: 'item' and 'containerClassName'
// 'item' is an object containing the testimonial data (id, name, role, avatarUrl, comment)
// 'containerClassName' is an additional class name that can be applied to the container
const TestimonialItem = ({
  item,
  containerClassName,
}: {
  item: {
    id: string; // Unique identifier for the testimonial item
    name: string; // Name of the person giving the testimonial
    role: string; // Role or title of the person
    avatarUrl: string; // URL to the person's avatar image
    comment: string; // The testimonial or comment given by the person
  };
  containerClassName: string; // Additional class name for styling the container
}) => {
  return (
    <div
      className={clsx(
        // The container div uses the clsx utility to merge multiple class names
        'relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[""] max-md:px-0 max-md:pt-11 after:max-md:-right-4',
        // The class name passed from the parent component
        containerClassName
      )}
    >
      {/* Blockquote to display the comment text with a margin-bottom */}
      <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>

      <div className="flex items-center max-xl:mr-8">
        {/* Avatar image container with border and padding */}
        <div className="mr-4 size-20 shrink-0 rounded-1/2 border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl} // The source of the avatar image
            alt={item.name} // Alt text is the name of the person
            className="size-full object-cover" // Ensures the image is fully covered and maintains its aspect ratio
          />
        </div>

        {/* Name and role of the person */}
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>{' '}
          {/* Name with body-2 style */}
          <p className="small-compact uppercase text-s3">{item.role}</p>{' '}
          {/* Role with uppercase and small-compact style */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
