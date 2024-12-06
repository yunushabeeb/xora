// Importing necessary libraries and components.
import clsx from 'clsx'; // Utility for conditionally joining class names.
import { useState } from 'react'; // React hook to manage component state.
import { SlideDown } from 'react-slidedown'; // A library to create slide-down animations.
import 'react-slidedown/lib/slidedown.css'; // Importing styles for the SlideDown component.

const FaqItem = ({
  item, // Destructuring the 'item' prop, which contains an 'id', 'question', and 'answer'.
  index, // Destructuring the 'index' prop, which represents the FAQ item index.
}: {
  item: { id: string; question: string; answer: string }; // Defining the structure of the 'item' prop.
  index: number; // Defining the structure of the 'index' prop.
}) => {
  // Declaring state to manage the active FAQ item based on its ID.
  const [activeId, setActiveId] = useState<null | string>(null);

  // 'active' is true if the current FAQ item is the one that is expanded.
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      {/* Main container for each FAQ item. It listens for clicks to toggle the 'active' state. */}
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          // Toggling the 'activeId' state to expand/collapse the FAQ item.
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        {/* Container for the question text */}
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg-hidden">
            {/* Displaying the index with a leading zero if it's a single-digit number */}
            {index < 10 ? '0' : ''}
            {index}
          </div>
          <div
            className={clsx(
              // Applying styles for the question text.
              'h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center',
              active && 'max-lg:text-p1' // Change color when active.
            )}
          >
            {item.question} {/* Displaying the question text */}
          </div>
        </div>

        {/* Container for the arrow icon that toggles based on 'active' state */}
        <div
          className={clsx(
            'faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4',
            active && 'before:bg-p1 after:rotate-0 after:bg-p1' // Rotate and change color when active.
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      {/* SlideDown component for the answer, which only renders when the FAQ item is active */}
      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>

      {/* Background styling that appears when the item is active */}
      <div
        className={clsx(
          'absolute g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500',
          active && 'opacity-100' // Makes the background visible when active.
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl " />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
