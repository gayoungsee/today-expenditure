import React from 'react';

const TodayHeader = ({ clickBtnAdd }) => {
  return (
    <div className="ex-header">
      <h1 className="ex-t1">오늘의 지출</h1>
      <h2 className="ex-t2">2023년 8월 2일</h2>
      <h2 className="ex-t2">
        총 지출:<strong> -130000원</strong>
      </h2>
      <button className="ex-btn-add" onClick={clickBtnAdd}>
        +
      </button>
    </div>
  );
};

export default TodayHeader;
