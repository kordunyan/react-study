import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {isLoggedIn} from "../../../services/user-service";

export const ProtectedRoute = (props) => {

    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const checkIsLoggedIn = () => {
        if (!isLoggedIn()) {
            setIsUserLoggedIn(false);
            return navigate('/sign-in');
        }
        setIsUserLoggedIn(true);
    }

    useEffect(() => {
        checkIsLoggedIn();
    }, [isUserLoggedIn]);

    return (
        <React.Fragment>
            {
                isUserLoggedIn ? props.children : null
            }
        </React.Fragment>
    );

};
