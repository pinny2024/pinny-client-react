import React from "react";
import '../../css/mypage/overconsumption.css';

const Overconsumption = () => {
    const space = '\u00A0'; // 유니코드로 공백 문자를 문자열 변수에 할당

    return (
        <div id="overconsumption">
            <div className="over-name">
                <div className="over-name-first">
                    나의
                </div>
                <div className="over-name-second">
                    {space}과소비 지수
                </div>
                <div className="over-name-third">
                    를 알아보세요!
                </div>
            </div>
            <div className="overconsumption-index-table">
                {/* 과소비 지수 표 */}
                <img src={`${process.env.PUBLIC_URL}/img/mypage/overconsumption.svg`} alt="overconcumption" />
            </div>
        </div>
    );
}

export default Overconsumption;
