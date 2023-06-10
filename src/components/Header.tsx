import React, { useEffect, useRef } from "react";
import "../css/header.scss";

const Header: React.FunctionComponent = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef<number | null>(null);

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

    const headingElement = document.querySelector(
      "a#work-link"
    ) as HTMLAnchorElement;
    headingElement?.addEventListener("mouseover", handleMouseOver);

    return () => {
      headingElement?.removeEventListener("mouseover", handleMouseOver);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <div id="text">
        <div className="line">
          <p className="word">Akira</p>
          <p className="word">Na</p>
        </div>
        <div className="line">
          <p className="fancy word">Fullstack</p>
        </div>
        <div className="line">
          <p className="word">Developer</p>
        </div>
        <div className="line">
          <a
            id="work-link"
            href="https://www.potloc.com/"
            target="_blank"
            className="fancy word"
            data-value="@Potloc"
          >
            @Potloc
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
