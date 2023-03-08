import {useFormik} from "formik";
import {loginUser} from "../../services/user-service";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserId} from "../../../store/features/UserStore";

export const SignIn = () => {

    const [isValidCredentials, setIsValidCredentials] = useState(false);
    const [dataTouched, setDataTouched] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: (values) => {
            const {login, password} = values;
            setDataTouched(true);
            try {
                const user = loginUser(login, password);
                dispatch(setUserId(user.id));
                setIsValidCredentials(true);
                navigate('/');
            } catch (e) {
                setIsValidCredentials(false);
            }
        }
    });

    return (
        <div className="mt-5 row justify-content-center">
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sign In</h5>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                                <input type="text"
                                       name="login"
                                       value={formik.values.login}
                                       onChange={formik.handleChange}
                                       className="form-control"
                                       id="exampleInputEmail1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                       name="password"
                                       value={formik.values.password}
                                       onChange={formik.handleChange}
                                       className="form-control"
                                       id="exampleInputPassword1"/>
                            </div>
                            { !isValidCredentials && dataTouched && (
                                <div className="mb-3 invalid-feedback d-block">
                                    Invalid login or password
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

};
