import "./students.style.css";
const Students = ({ std }) => {
  const { name, age, alt, review } = std;
  return (
    <li className="transit">
      <div className={`student`}>
        <div className="students-info">{review}</div>
        <div className="students-container">
          <div className="students-img">
            <img src={require(`../assets/${alt}.jpg`)} alt={alt} />
          </div>
          <div className="students-name">{name}</div>
          <div className="students-age">{age} лет</div>
        </div>
      </div>
    </li>
  );
};
export default Students;
