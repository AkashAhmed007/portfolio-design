import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const showButton = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", showButton);
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollTop}
          className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-opacity duration-300"
        >
          <BiArrowToTop />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
