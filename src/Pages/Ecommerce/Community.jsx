import React from "react";
import { useNavigate } from "react-router-dom";
const Community = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div className="join-page">
            <h1>Join our community!</h1>
            <button onClick={handleNavigate}>Back to Store</button>
        </div>
    );
};
export default Community;