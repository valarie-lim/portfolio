import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element matching the URL hash (e.g., #about)
      const element = document.getElementById(hash.replace("#", ""));

      if (element) {
        // Scroll smoothly to the target element
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback: If the DOM isn't fully loaded yet, check again shortly
        const timer = setTimeout(() => {
          const retryElement = document.getElementById(hash.replace("#", ""));
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // If navigating to home page without a hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null; // This component doesn't render any visible UI
}

export default ScrollToHashElement;
