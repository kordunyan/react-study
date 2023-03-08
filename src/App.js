import './App.css';
import Header from "./components/base/Header/Header";
import Footer from "./components/base/Footer/Footer";
import {MainBody} from "./components/base/MainBody/MainBody";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {appStore} from "./store/store";

function App() {

    return (
        <Provider store={appStore}>
            <BrowserRouter>
                <div className="container d-flex flex-column justify-content-between h-100">
                    <Header/>
                    <div className="flex-fill">
                        <MainBody/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
