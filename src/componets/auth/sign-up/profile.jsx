import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from '../../../config.js';

import '../../../css/auth/sign-up/profile.css';
import { contextType } from "react-modal";

const Profile = () => {
    const { state } = useLocation();
    const nickName = state?.nickName;
    const [showModal, setShowModal] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [profileImage, setProfileImage] = useState("");
    const [profileImageFile, setProfileImageFile] = useState(null); 
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
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const nickname = localStorage.getItem("nickname");
        const career = localStorage.getItem("job");
        const salary = parseInt(localStorage.getItem("salary"));
        const saving = parseInt(localStorage.getItem("saving"));
        const ageRange = parseInt(localStorage.getItem("ageGroup"));
        const introduction = localStorage.getItem("introduction");

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("passwordConfirm", password);
        formData.append("nickname", nickname);
        formData.append("career", career);
        formData.append("salary", salary);
        formData.append("saving", saving);
        formData.append("ageRange", ageRange);
        formData.append("introduction", introduction);
        if (profileImageFile) {
            formData.append("file", profileImageFile);
        }

        axios.post(`${config.baseUrl}/join`, formData, {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            console.log(response);
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("nickname");
            localStorage.removeItem("job");
            localStorage.removeItem("salary");
            localStorage.removeItem("saving");
            localStorage.removeItem("ageGroup");
            localStorage.removeItem("introduction");
            localStorage.removeItem("profileImage");

            alert("회원가입 성공");

            navigate('/login');
        })
        .catch(function (error) {
            alert("회원가입 실패")
            console.log(error);
        });
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
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    setProfileImage(imageUrl);
                    setProfileImageFile(file);
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
