import { useEffect } from "react";

const useHeaderScroll = () => {
  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement | null;

    // Eğer header öğesi mevcut değilse, hata vermeden işlevi sonlandır
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Temizlik
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useHeaderScroll;
