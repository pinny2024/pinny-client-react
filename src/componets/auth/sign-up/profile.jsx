import React, { useState, useEffect, useRef } from "react";
import '../../../css/auth/sign-up/profile.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { state } = useLocation();
    const nickName = state?.nickName; 
    const [showModal, setShowModal] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false); 
    const [profileImage, setProfileImage] = useState("");
    const imgRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const initialImage = localStorage.getItem("profileImage");
        if (initialImage) {
            setProfileImage(initialImage);
            setIsCompleted(true);
        }
    }, []);

    useEffect(() => {
        const closeModalOnOutsideClick = (event) => {
            if (event.target === document.querySelector(".modal")) {
                handleCloseModal();
            }
        };

        if (showModal) {
            document.addEventListener("click", closeModalOnOutsideClick);
        }

        return () => {
            document.removeEventListener("click", closeModalOnOutsideClick);
        };
    }, [showModal]);

    const handleConfirm = () => {
        navigate('/login');
    };

    const handleProfileClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDefaultImage = () => {
        console.log("기본 이미지 사용");
        setProfileImage("https://floresta-kids.com/common/img/default_profile.png");
        localStorage.setItem("profileImage", "https://floresta-kids.com/common/img/default_profile.png");
        setIsCompleted(true);
        handleCloseModal();
    };

    const handleTakePhoto = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            console.log("카메라 열기 성공")
            handleCloseModal();
        } catch (error) {
            console.error('카메라를 열 수 없습니다:', error);
        }
    };
    
    const handleChooseFromAlbum = () => {
        handleCloseModal();
        const fileInput = document.createElement("input");
        fileInput.type="file";
        fileInput.accept = "image/*";
        fileInput.onchange = (event) =>{
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    setProfileImage(imageUrl);
                    localStorage.setItem("profileImage", imageUrl);
                    setIsCompleted(true);
                    handleCloseModal();
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    };

    return (
        <div className="profile-container">
            <img
                src={`${process.env.PUBLIC_URL}/img/auth/sign-up-line(5).svg`}
                alt="sign-up-line(5)"
                className="profile-line"
            />
            <div className="profile-all-name">프로필 사진을 설정해주세요</div>
            <div className="all-profile">
                <div className="profile-circle" onClick={handleProfileClick}>
                {!profileImage && (
                    <span className="plus-icon">+</span>
                )}
                {profileImage && (
                    <img src={profileImage} alt="프로필 이미지" className="profile-image" />
                )}
                </div>
                {nickName && <div className="nickname-display">{nickName}</div>}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <button onClick={handleDefaultImage}>기본이미지사용</button>
                            <button onClick={handleTakePhoto}>사진찍기</button>
                            <button onClick={handleChooseFromAlbum}>앨범에서 가져오기</button>
                        </div>
                    </div>
                )}
                <button
                    className={`profile-check-button ${isCompleted ? 'active' : ''}`}
                    onClick={handleConfirm}
                    disabled={!isCompleted}
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default Profile;
