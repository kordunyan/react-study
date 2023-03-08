import NavBar from "../NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Posts} from "../Posts/Posts";
import Todos from "../Todos/Todos";
import {Home} from "../Home/Home";
import {SignIn} from "../SignIn/SignIn";
import {ProtectedRoute} from "../security/ProtectedRoute/protected-route";

export const MainBody = () => {
    return (
        <div className="row h-100">
            <div className="border-end col-3">
                <NavBar/>
            </div>
            <div className="col-9">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/posts' element={<ProtectedRoute><Posts/></ProtectedRoute>} />
                    <Route path='/todos' element={<ProtectedRoute><Todos/></ProtectedRoute>} />
                    <Route path='/sign-in' element={<SignIn/>} />
                </Routes>
            </div>
        </div>
    );
}
