import React, { useEffect, useRef, useState } from "react";
import destinations from "../destinations";

const HeroText: React.FC = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef<number | null>(null);
  //   const [destination, setDestination] = useState<{
  //     index: number;
  //     activity: string;
  //   }>(destinations[0]);

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0;

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = window.setInterval(() => {
        const target = event.target as HTMLHeadingElement;
        target.innerText = target.innerText
          .split("")
          .map((letter: string, index: number) => {
            if (index < iteration) {
              return target.dataset.value?.[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (
          target?.dataset?.value !== undefined &&
          iteration >= target.dataset.value.length
        ) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
          }
        }

        iteration += 1 / 3;
      }, 30);
    };

    const headingElement = document.querySelector("h5") as HTMLHeadingElement;
    headingElement?.addEventListener("mouseover", handleMouseOver);

    return () => {
      headingElement?.removeEventListener("mouseover", handleMouseOver);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h6>On my way to</h6>
      <div className="hero-text-container">
        <h5 data-value="The Beach">The Beach</h5>
      </div>
    </div>
  );
};

export default HeroText;
