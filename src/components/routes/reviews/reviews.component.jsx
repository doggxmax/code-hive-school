import { Link } from "react-router-dom";
import Students from "../../students/students.component";
import "./reviews.style.css";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { useRef, useState } from "react";
const Reviews = () => {
  // let num = 0;
  const students = [
    {
      id: 0,
      name: "Хамзат",
      age: 12,
      alt: "Hamzat_feedback",
      review: `Сначала мне было сложно понять функции, я 2 дня пытался их сам
      понять, но потом когда мне объяснили ещё раз, то я их хорошо
      запомнил. Еще у нас учитель очень креативный и больше всего мне
      понравился дизайн домашних заданий, а ещё система выдачи уровней
      за выполненные практические задания`,
      bullet: "active",
    },
    {
      id: 1,
      name: "Ханиф",
      age: 15,
      alt: "Hanif_feedback",
      review: `Мне понравилось, что обучение проходит в игровой форме. Особенно
      выдача уровней за выполненные домашние задания. Если вам кажется
      программирование сложным, то советую как минимум попробовать`,
      bullet: "active",
    },
    {
      id: 2,
      name: "Абдулла",
      age: 12,
      alt: "Abdullah_feedback",
      review: `В курсе по Python больше всего мне понравилась система выдачи
      уровней, а также то, что у меня получается программировать`,
      bullet: "active",
    },
    {
      id: 3,
      name: "Амир",
      age: 15,
      alt: "Amir_feedback",
      review: `Мне понравилось, что хорошо объясняют темы урока, иногда я не
      понимаю, но постепенно я начинаю понимать программирование и это
      меня начинает интересовать больше`,
      bullet: "active",
    },
    {
      id: 4,
      name: "Абдурахман",
      age: 12,
      alt: "Abdurrahman_feedback",
      review: `Я бы порекомендовал этот курс потому что если ты будешь
      стараться и выполнять домашние задание, то ты получишь за это
      новый уровень и новые знания`,
      bullet: "active",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = students.length - 1;
  const nextSlide = () => {
    setCurrent(current >= length ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current <= 0 ? length : current - 1);
  };
  const divRef = useRef();
  return (
    <div className="reviews">
      <div className="reviews-header">
        <div>Отзывы о курсе от учеников</div>
      </div>
      <div className="reviews-container">
        <div className="btn-left">
          <button
            className="right"
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
                transform: "translate(0%,0%) rotate(180deg)",
              }}
            >
              <RightArrow />
            </div>
          </button>
        </div>
        <div className="btn-right">
          <button
            onClick={nextSlide}
            className="right"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(29, 32, 30, 1)",

              borderRadius: "100%",
            }}
          >
            <div style={{ width: "9px", marginLeft: "8px" }}>
              <LeftArrow />
            </div>
          </button>
        </div>
        <div className="reviews-student">
          <Students
            key={students[current].id}
            std={students[current]}
          ></Students>

          <div className="reviews-slide" data-slide-bullet-for="0">
            <li className="review-list" onClick={() => setCurrent(0)}>
              <button
                className={`boolet ${current == 0 ? "active" : ""}`}
                aria-label="Перейти к слайду 1"
                style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
              ></button>
            </li>
            <li
              className="review-list"
              data-slide-bullet-for="1"
              onClick={() => setCurrent(1)}
            >
              <button
                type="button"
                className={`boolet ${current == 1 ? "active" : ""}`}
                aria-label="Перейти к слайду 2"
                style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
              ></button>
            </li>
            <li
              className="review-list"
              data-slide-bullet-for="2"
              onClick={() => setCurrent(2)}
            >
              <button
                type="button"
                className={`boolet ${current == 2 ? "active" : ""}`}
                aria-label="Перейти к слайду 3"
                style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
              ></button>
            </li>
            <li
              className="review-list"
              data-slide-bullet-for="3"
              onClick={() => setCurrent(3)}
            >
              <button
                type="button"
                className={`boolet ${current == 3 ? "active" : ""}`}
                aria-label="Перейти к слайду 4"
                style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
              ></button>
            </li>
            <li
              className="review-list"
              data-slide-bullet-for="4"
              onClick={() => setCurrent(4)}
            >
              <button
                type="button"
                className={`boolet ${current == 4 ? "active" : ""}`}
                aria-label="Перейти к слайду 5"
                style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
              ></button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
