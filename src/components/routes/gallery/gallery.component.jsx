import "./gallery.style.css";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { useState } from "react";

const Gallery = () => {
  const [num, setNum] = useState(1);
  const prevSlide = () => {
    setNum(num >= 4 ? 1 : num + 1);
  };
  const nextSlide = () => {
    setNum(num <= 1 ? 4 : num - 1);
  };
  return (
    <div className="gallery">
      <div style={{ paddingTop: "15px", backgroundColor: "#f7c515" }}></div>
      <div className="gallery-btn-left">
        <button
          className="gal-btn"
          onClick={prevSlide}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(29, 32, 30, 1)",

            borderRadius: "100%",
          }}
        >
          <div
            style={{
              width: "9px",
              marginLeft: "8px",
              transform: "translate(40%, 0%)",
            }}
          >
            <LeftArrow />
          </div>
        </button>
      </div>
      <div className="gallery-btn-right">
        <button
          className="gal-btn"
          onClick={nextSlide}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(29, 32, 30, 1)",

            borderRadius: "100%",
          }}
        >
          <div
            style={{
              width: "9px",
              marginLeft: "8px",
              transform: "translate(0%, 0%) rotate(180deg)",
            }}
          >
            <RightArrow />
          </div>
        </button>
      </div>
      <div className="gallery-container" style={{ transition: "all 1s" }}>
        <div className="gallery-wrapper" style={{ transition: "all 1s" }}>
          <img
            className="gallery-wrap-img"
            style={{ width: "940px", height: "550px", transition: "all 1s" }}
            src={require(`../../assets/Gallery_${num}.jpg`)}
            alt="GALLERY"
          />
        </div>
      </div>
      <div className="gallery-list-container">
        <li className="gallery-list" onClick={() => setNum(1)}>
          <button
            className={`ballet ${num == 1 ? "work" : ""}`}
            aria-label="Перейти к слайду 1"
            style={{ width: "8px", height: "8px", backgroundColor: "#f7c515" }}
          ></button>
        </li>
        <li
          className="gallery-list"
          data-slide-bullet-for="1"
          onClick={() => setNum(2)}
        >
          <button
            type="button"
            className={`ballet ${num == 2 ? "work" : ""}`}
            aria-label="Перейти к слайду 2"
            style={{ width: "8px", height: "8px", backgroundColor: "#f7c515" }}
          ></button>
        </li>
        <li
          className="gallery-list"
          data-slide-bullet-for="2"
          onClick={() => setNum(3)}
        >
          <button
            type="button"
            className={`ballet ${num == 3 ? "work" : ""}`}
            aria-label="Перейти к слайду 3"
            style={{ width: "8px", height: "8px", backgroundColor: "#f7c515" }}
          ></button>
        </li>
        <li
          className="gallery-list"
          data-slide-bullet-for="3"
          onClick={() => setNum(4)}
        >
          <button
            type="button"
            className={`ballet ${num == 4 ? "work" : ""}`}
            aria-label="Перейти к слайду 4"
            style={{ width: "8px", height: "8px", backgroundColor: "#f7c515" }}
          ></button>
        </li>
      </div>
    </div>
  );
};
export default Gallery;
