import { useEffect } from "react";

export function useScrollFade() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.scroll-fade');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}