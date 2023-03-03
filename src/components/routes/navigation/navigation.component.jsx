import { Link, Outlet } from "react-router-dom";

import "./navigation.style.scss";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav">
          <div className="nav-image">
            <Link to="/">
              <img
                src={require("../../assets/logo.png")}
                alt="logo"
                style={{
                  maxWidth: "150px",
                  width: "150px",
                  minWidth: "150px",
                  height: "auto",
                  display: "block",
                }}
              />
            </Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/about">О школе</Link>
            </li>
            <li>
              <Link to="/reviews">Отзывы</Link>
            </li>
            <li>
              <Link to="/programm">Программа</Link>
            </li>
            <li>
              <Link to="/rates">Тарифы</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
          </div>
        </div>

        <div className="nav-info">
          <div>
            Текущее кол-во учеников:{" "}
            <span style={{ color: "rgb(247, 197, 21)" }}>15</span>
          </div>
          <div className="nav-media">
            <Link target="_blank" to="https://t.me/CodeHiveSchool">
              <Telegram />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/code.hive.school/"
            >
              <Instagram />
            </Link>
            <Link target="_blank" to="mailto:code.hive.school@gmail.com">
              <Mail />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
