import "./about.style.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <span>О ШКОЛЕ</span>
      </div>
      <div className="about-header-2">
        <span>Школа Программирования</span>
        <span style={{ color: "rgb(247, 197, 21)" }}>Code Hive School</span>
      </div>
      <div className="about-description">
        <span>
          Мы предлагаем вашим детям уникальную возможность изучить Python, один
          из самых популярных языков программирования, с нашим онлайн-курсом.
          Этот курс идеально подходит детям от 12 лет, и он предлагает
          интерактивные уроки, практическую работу и экзамены, чтобы проверить
          их навыки. Наши опытные инструкторы направят ваших детей каждым шагом,
          помогая им создать сильную основу в Python
        </span>
      </div>
      <div className="about-info-container">
        <div className="about-info">
          <img
            src={require("../../assets/controls.png")}
            alt="cotrols"
            style={{ width: "100px" }}
          />
          <div className="about-info-description">
            <div>Интерактивные уроки, экзамены и проекты</div>
          </div>
        </div>
        <div className="about-info">
          <img
            src={require("../../assets/list.png")}
            alt="list"
            style={{ width: "100px" }}
          />
          <div className="about-info-description">
            <div>Практические и домашние работы</div>
          </div>
        </div>
        <div className="about-info">
          <img
            src={require("../../assets/star.png")}
            alt="star"
            style={{ width: "100px" }}
          />
          <div className="about-info-description">
            <div>Обучение в игровой форме</div>
          </div>
        </div>
        <div className="about-info">
          <img
            src={require("../../assets/checked.png")}
            alt="checked"
            style={{ width: "100px" }}
          />
          <div className="about-info-description">
            <div>Онлайн дневник для родителей</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
