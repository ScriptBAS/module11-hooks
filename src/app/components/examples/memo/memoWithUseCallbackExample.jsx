import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render btn");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            logOut
        </button>
    );
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(
        (props) => {
            localStorage.removeItem("auth");
        },
        [props]
    );
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setState(!state);
                }}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
export default MemoWithUseCallbackExample;
