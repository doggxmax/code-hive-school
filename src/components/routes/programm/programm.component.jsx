import "./programm.style.css";
import { ReactComponent as Check } from "../../assets/check.svg";
const Programm = () => {
  return (
    <div className="programm">
      <div className="programm-block">
        <div className="programm-head">
          <div className="programm-header">
            <span>Программа курса по Python</span>
          </div>
          <div className="programm-header-description">
            Все темы уроков разбиты на блоки, где каждый <br /> блок это группа
            тем включающую в себя <br /> практику, домашнюю работу и экзамен
          </div>
        </div>
        <div className="programm-container">
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Первый блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>Введение в информатику</li>
                <li>Типы данных, комментарии, переменные и назначения</li>
                <li>
                  Продвинутые назначения, конкатенация, арифметические и
                  логические выражения
                </li>
                <li>Преобразование типов, базовый ввод и вывод</li>
              </div>
            </div>
          </div>
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Второй блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>
                  Операторы If else, арифметические и логические операторы
                </li>
                <li>Вложенные операторы If else и блок-схемы</li>
                <li>Цикл while и продвинутые блок-схемы</li>
                <li>Циклы for и вложенные циклы for</li>
                <li>Выражения break и continue</li>
              </div>
            </div>
          </div>
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Третий блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>Встроенные функции Python и функции def</li>
                <li>Методы int и String</li>
                <li>Нарезка и форматирование строк</li>
                <li>Списки, операции добавления удаления и нарезки списков</li>
                <li>Операторы списков</li>
                <li>Вложенные списки</li>
              </div>
            </div>
          </div>
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Четвертый блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>Кортежи и конвертация кортежей</li>
                <li>Операторы кортежей</li>
                <li>Нарезка кортежей</li>
                <li>Множества в Python (тип данных set)</li>
                <li>Словари и их функции</li>
                <li>Запись и чтение файлов</li>
              </div>
            </div>
          </div>
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Пятый блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>Массивы в Python</li>
                <li>Методы массивов и арифметические операции</li>
                <li>Классы и объекты</li>
                <li>Коструктор функций init()</li>
                <li>Методы и атрибуты объекта</li>
              </div>
            </div>
          </div>
          <div className="programm-icon-container">
            <div className="programm-icon">
              <Check />
            </div>
            <div className="programm-wrapper">
              <div className="programm-wrapper-header">
                <span>Шестой блок</span>
              </div>
              <div className="programm-wrapper-description">
                <li>Программирование на Python с графическим интерфейсом</li>
                <li>Компоненты Tkinter</li>
                <li>Управление компоновкой и геометрией</li>
                <li>Сетки</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Programm;
