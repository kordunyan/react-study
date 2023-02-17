import {UserInputModal} from "../modals/UserInputModal/UserInputModal";
import {useState} from "react";

function Header(props) {

    const {onChangeUser, currentUser} = props;
    const [displayUserModal, setDisplayUserModal] = useState(false);

    const onSetUser = (userId) => {
        setDisplayUserModal(false);
        onChangeUser(userId);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1" href="/">ReactStudy</a>
                <button type="button" onClick={() => setDisplayUserModal(true)} className="btn btn-primary">
                    {currentUser ? ('Change User: ' + currentUser) : 'Set User'}
                </button>
            </div>
            {displayUserModal && <UserInputModal
                onSetUser={onSetUser}
                onClose={() => setDisplayUserModal(false)}/>}
        </nav>
    )
}

export default Header;
