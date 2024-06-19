import React, { useState, useEffect } from "react";
import Header from "../../componets/plan/Header";
import PlanList from "../../componets/plan/plan-btn/plan-list";
import axios from '../../componets/utils/axiosInstance';
import { useNavigate, useLocation } from "react-router-dom";

const PlanChangeDetailPage = () => {
    const [plans, setPlans] = useState([]);
    const [category, setCategory] = useState(''); // 새로운 category 상태 추가
    const navigate = useNavigate();
    const location = useLocation();
    const [categoryNames, setCategoryNames] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        if (location.state) {
            const { categoryNames, plan, category, image } = location.state;
            setCategoryNames(categoryNames);
            setCategory(category); 
            setImage(image); 
            fetchPlans(category, image); 
        }
    }, [location.state]);

    const fetchPlans = async (categoryName = 'undefined', image) => {
        try {
            const response = await axios.get('/plans');
            const validPlans = response.data.filter(plan => {
                return plan.plan && plan.plan.trim() !== '' && plan.category;
            });

            const plansWithImages = validPlans.map(plan => {
                const category = plan.category || 'undefined';
                return {
                    ...plan,
                    image: image // 해당 계획에 선택된 이미지 설정
                };
            });

            setPlans(plansWithImages);
            console.log('Fetched plans:', plansWithImages);
        } catch (error) {
            console.error('Error fetching plans:', error);
        }
    };

    const handleEditClick = (planId) => {
        navigate(`/plan/edit-plan-detail/${planId}`);
    };

    return (
        <div>
            <Header text="계획 세우기!" />
            <PlanList 
                context="modify" 
                plans={plans} 
                categoryNames={categoryNames} 
                category={category} 
                fetchPlans={fetchPlans} 
                handleClick={handleEditClick} 
                image={image} // image 전달
            />
            {/* 카테고리 변수가 잘 이동했는지 콘솔에 출력 */}
            <div>{console.log('Category Names:', categoryNames)}</div>
            <div>{console.log('Category:', category)}</div>
        </div>
    );
};

export default PlanChangeDetailPage;
