import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./home.style.css";
const Home = () => {
  return (
    <Fragment>
      <div className="bgk">
        <div className="bk"></div>
      </div>
      <div className="home">
        <div className="home-info" style={{ color: "#fff" }}>
          Школа по <br />
          программированию <br />
          для детей
          <span style={{ color: "rgb(247, 197, 21)" }}> от 12 лет</span>
        </div>
        <div className="home-button">
          <div className="btn-wrapper">
            <Link
              target="_blank"
              to="https://forms.gle/P2n9yAVav6W4nxRP8"
              className="home-button-link"
            >
              Записаться на бесплатное занятие <div className="anim"></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="background-wrapper"></div>
      </div>
    </Fragment>
  );
};
export default Home;
