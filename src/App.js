import './App.css';
import Header from "./components/base/Header/Header";
import Footer from "./components/base/Footer/Footer";
import {MainBody} from "./components/base/MainBody/MainBody";
import {useState} from "react";
import {UserContext} from "./constants/context";

function App() {

    const [currentUser, setCurrentUser] = useState('');
    const onChangeUser = (userId) => {
        setCurrentUser(userId);
    };

    const value = {
        userId: currentUser,
        changeUser: setCurrentUser
    }

    return (
        <div className="container d-flex flex-column justify-content-between h-100">
            <UserContext.Provider value={value}>
                <Header currentUser={currentUser} onChangeUser={onChangeUser}/>
                <div className="flex-fill">
                    <MainBody/>
                </div>
                <Footer/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
