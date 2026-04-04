import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-2 h-2 bg-amber rounded-full pointer-events-none z-[9999]"
    />
  );
}
