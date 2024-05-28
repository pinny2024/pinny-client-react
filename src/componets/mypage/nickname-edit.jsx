import React, { useState, useRef, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../css/mypage/nickname-edit.css';

const NicknameEdit = ({ onUpdateProfile }) => {
    const [nickname, setNickname] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [isButtonActive, setIsButtonActive] = useState(false); 
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
       
        if (nickname.trim() !== '' || profilePhoto !== null) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [nickname, profilePhoto]);

    const handlePhotoChange = (e) => {
        setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProfile({ nickname, profilePhoto });
        navigate('/mypage', { state: { updatedProfile: { nickname, profilePhoto } } });
    };

    const handleProfileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="nickname-edit-container">
            <form className="nickname-edit-form" onSubmit={handleSubmit}>
                <div className="profile-photo-wrapper" >
                    <div className="profile-photo" style={{ backgroundImage: `url(${profilePhoto})` }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        /> 
                        <div className='camera-icon-wrapper'>
                            <FaCamera className="camera-icon" color='white' onClick={handleProfileClick}/>
                        </div>
                    </div>
                </div>
                <div>
                    <label>
                        <input type="text" value={nickname} onChange={handleNicknameChange} />
                        <input type="text" />
                    </label>
                </div>
                <button type="submit" disabled={!isButtonActive}>프로필 업데이트</button>
            </form>
        </div>
    );
};

export default NicknameEdit;
