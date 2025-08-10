import React from "react";

interface Props {
  currentMonth: string;
  onPrev: () => void;
  onNext: () => void;
}

const MonthNavigator: React.FC<Props> = ({ currentMonth, onPrev, onNext }) => {
  return (
    <div className="month-nav">
      <button onClick={onPrev}>←</button>
      <span>{currentMonth}</span>
      <button onClick={onNext}>→</button>
    </div>
  );
};

export default MonthNavigator;