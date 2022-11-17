import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";

const SimpleComponent = ({ isAuth, onClick }) => {
    console.log(isAuth);
    return (
        <CardWrapper>
            <button className="btn btn-primary" onClick={onClick}>
                {isAuth ? "Выйти из системы" : "Войти"}
            </button>
        </CardWrapper>
    );
};
SimpleComponent.propTypes = {
    onClick: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
