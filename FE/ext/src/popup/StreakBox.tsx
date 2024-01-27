export function StreakBox() {
  return (
    <div className="streak-box">
      <p className="streak-title">STREAK</p>
      <p className="streak-continuous">
        연속 <strong>5일 째</strong>
      </p>
      <div className="streak-and-more-container">
        <ul className="streak-container">
          <li className="streak-deactive"></li>
          <li className="streak-deactive"></li>
          <li className="streak-active"></li>
          <li className="streak-active"></li>
          <li className="streak-active"></li>
          <li className="streak-active"></li>
          <li className="streak-active streak-today"></li>
        </ul>
        <p className="streak-more">더보기</p>
      </div>
    </div>
  );
}
export default StreakBox;
