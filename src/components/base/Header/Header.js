import {UserInputModal} from "../modals/UserInputModal/UserInputModal";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setUserId, useUserStore} from "../../../store/features/UserStore";
import {Link, useNavigate} from "react-router-dom";
import {isLoggedIn, logout} from "../../services/user-service";

function Header() {
    const [displayUserModal, setDisplayUserModal] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();
    const userId = useUserStore();
    const dispatch = useDispatch();

    const onSetUser = (userId) => {
        setDisplayUserModal(false);
        dispatch(setUserId(userId))
    };

    useEffect(() => {
        setIsUserLoggedIn(isLoggedIn());
    }, [userId]);

    const signOut = () => {
        logout();
        dispatch(setUserId(null));
        navigate('/sign-in');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1" href="/">ReactStudy</a>
                <div>
                    <button type="button" onClick={() => setDisplayUserModal(true)} className="btn btn-primary">
                        {userId ? ('Change User: ' + userId) : 'Set User'}
                    </button>
                    {!isUserLoggedIn && <Link to='/sign-in' type="button" className="ms-2 btn btn-outline-primary">Sign In</Link>}
                    {isUserLoggedIn && <button type="button" onClick={signOut} className="ms-2 btn btn-outline-primary">Sign out</button>}
                </div>
            </div>
            {displayUserModal && <UserInputModal
                onSetUser={onSetUser}
                currentUser={userId}
                onClose={() => setDisplayUserModal(false)}/>}

        </nav>
    )
}

export default Header;
