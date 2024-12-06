// Importing section components for the landing page
import Download from './sections/Download'; // Importing the Download section
import Faq from './sections/Faq'; // Importing the Frequently Asked Questions section
import Features from './sections/Features'; // Importing the Features section
import Footer from './sections/Footer'; // Importing the Footer section
import Header from './sections/Header'; // Importing the Header section
import Hero from './sections/Hero'; // Importing the Hero section (main header/intro)
import Pricing from './sections/Pricing'; // Importing the Pricing section
import Testimonials from './sections/Testimonials'; // Importing the Testimonials section

// App component that returns the layout of the landing page
const App = () => {
  return (
    // The main container for the landing page
    <main className="overflow-hidden">
      {/* The header of the page, likely containing logo and navigation */}
      <Header />

      {/* The hero section, typically the first visible part of the page */}
      <Hero />

      {/* The features section to highlight key offerings of the product */}
      <Features />

      {/* The pricing section to present subscription or purchase options */}
      <Pricing />

      {/* The FAQ section to answer common questions about the product */}
      <Faq />

      {/* The testimonials section to showcase user reviews or feedback */}
      <Testimonials />

      {/* The download section, likely providing a call-to-action to download the product or app */}
      <Download />

      {/* The footer section, generally containing links or contact information */}
      <Footer />
    </main>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
