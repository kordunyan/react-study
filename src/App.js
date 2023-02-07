import './App.css';
import Header from "./components/base/Header/Header";
import Footer from "./components/base/Footer/Footer";
import NavBar from "./components/base/NavBar/NavBar";
import Content from "./components/base/Content/Content";

function App() {
    return (
        <div className="container d-flex flex-column justify-content-between h-100">
            <Header/>
            <div className="row flex-fill">
                <div className="border-end col-3">
                    <NavBar/>
                </div>
                <div className="col-9">
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
