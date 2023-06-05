import React from "react";

const Header: React.FunctionComponent = () => {
  const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = (id: string): void => {
    const element = document.getElementById(id);
    const text = element?.innerText.split("");

    if (element && text) {
      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    }
  };

  enhance("work-link");

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
            className="word fancy"
          >
            @Potloc
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
