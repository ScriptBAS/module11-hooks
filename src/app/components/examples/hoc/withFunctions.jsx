import React from "react";

const withLogin = (Component) => () => {
    const authToken = localStorage.getItem("auth");
    const isAuth = Boolean(authToken);
    console.log(isAuth);
    const onLogin = () => {
        console.log("onLogin");
        localStorage.setItem(
            "auth",
            JSON.stringify({ token: "AF8B35D3-AF7B-D696-DD95-CFD9EE754F9B" })
        );
    };

    const onLogOut = () => {
        console.log("onLogOut");
        localStorage.removeItem("auth");
    };

    return (
        <>
            {isAuth ? (
                <Component isAuth={isAuth} onClick={onLogOut} />
            ) : (
                <Component isAuth={isAuth} onClick={onLogin} />
            )}
        </>
    );
};

export default withLogin;
