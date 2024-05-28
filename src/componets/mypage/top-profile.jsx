import React from 'react';
import '../../css/mypage/top-profile.css';

const TopProfile = ({ nickname, profilePhoto }) => {
  return (
    <div id="top-profile">
      <div className="profile-photo">
        {profilePhoto ? <img src={profilePhoto} alt="Profile" /> : null}
      </div>
      <div className="profile-name">
        {nickname || '성찬이님'}
      </div>
      <div className="profile-badge">
        내가 모은 뱃지를 확인해보세요!
      </div>
      <div className="badge-list">
        <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-1.svg`} alt="badge1" />
        <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-2.svg`} alt="badge2" />
        <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-3.svg`} alt="badge3" />
        <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-4.svg`} alt="badge4" />
      </div>
    </div>
  );
};

export default TopProfile;
