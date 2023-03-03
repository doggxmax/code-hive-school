import "./rates.style.css";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { Link } from "react-router-dom";
const Rates = () => {
  return (
    <div className="rates">
      <div className="rates-header">
        Выберите свой абонемент или запишитесь
        <br /> на первое бесплатное занятие по Python
      </div>
      <div className="rates-containers">
        <div className="rates-container-1">
          <div className="rates-number">Одно занятие Online</div>
          <div className="rates-indiv">Индивидуальные занятия</div>
          <div className="rates-amount w">$ 15</div>
          <div className="rates-lesson">Первое занятие бесплатно</div>
          <div className="rates-teacher">Уроки с преподователем</div>
          <div className="rates-online">Онлайн формат</div>
          <div className="rates-duration">Занятие от 45 до 90 мин.</div>
          <div className="rates-sign-up">
            <Link to="https://forms.gle/P2n9yAVav6W4nxRP8">Записаться</Link>
          </div>
        </div>
        <div className="rates-container-2">
          <div className="rates-number">8 занятий</div>
          <div className="rates-indiv">
            4 групповых занятий по 2 часа в месяц
          </div>
          <div className="rates-amount o">$ 55</div>
          <div className="rates-lesson b">Два занятия в неделю</div>
          <div className="rates-teacher b">Группы по 4 ученика</div>
          <div className="rates-online b">Онлайн формат</div>
          <div className="rates-duration b">Занятие от 60 до 120 мин.</div>
          <div className="rates-sign-up bol">
            <Link to="https://forms.gle/P2n9yAVav6W4nxRP8">Записаться</Link>
          </div>
        </div>
        <div className="rates-container-1">
          <div className="rates-number">Одно занятие Offline</div>
          <div className="rates-indiv">Индивидуальные занятия</div>
          <div className="rates-amount bl">$ 25</div>
          <div className="rates-lesson">Первое занятие бесплатно</div>
          <div className="rates-teacher">Уроки с преподователем</div>
          <div className="rates-online">Оффлайн формат</div>
          <div className="rates-duration">Занятие от 45 до 90 мин.</div>
          <div className="rates-sign-up">
            <Link to="https://forms.gle/P2n9yAVav6W4nxRP8">Записаться</Link>
          </div>
        </div>
      </div>
      <div className="rates-contact">
        <div className="rates-us">Свяжись с нами!</div>
        <div className="rates-mail">code.hive.school@gmail.com</div>
        <div className="rates-contact-container">
          <Link target="_blank" to="https://t.me/CodeHiveSchool">
            <Telegram />
          </Link>
          <Link target="_blank" to="mailto:code.hive.school@gmail.com">
            <Mail />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/code.hive.school/"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Rates;
