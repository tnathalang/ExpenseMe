import React from "react";

const SubHeader: React.FunctionComponent = () => {
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
          >
            @Potloc
          </a>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
