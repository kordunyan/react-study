import './App.css';
import Header from "./components/base/Header/Header";
import Footer from "./components/base/Footer/Footer";
import NavBar from "./components/base/NavBar/NavBar";
import Content from "./components/base/Content/Content";
import {MainBody} from "./components/base/MainBody/MainBody";

function App() {
    return (
        <div className="container d-flex flex-column justify-content-between h-100">
            <Header/>
            <div className="flex-fill">
                <MainBody/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
