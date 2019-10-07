import { useState, useEffect } from "react";

export function useScrollY() {

  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (e) => {
    setScrollY(window.pageYOffset || window.scrollY)
    setScrollX(window.pageXOffset || window.scrollX)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return {
    scrollY,
    scrollX
  };
}