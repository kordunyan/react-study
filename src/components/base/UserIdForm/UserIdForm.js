import {useFormik} from "formik";
import * as Yup from 'yup';
import {ErrorMessage} from "../Forms/ErrorMessage/ErrorMessage";

const validation = Yup.object().shape({
    userId: Yup.number().required().positive().integer()
});
export const UserIdForm = (props) => {

    const {currentUser} = props;

    const formik = useFormik({
        initialValues: {
            userId: currentUser || ''
        },
        validationSchema: validation,
        onSubmit: values => {
            props.onSetUser(values.userId);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
                <input className={"form-control " + (formik.errors.userId && "is-invalid")}
                       name="userId"
                       value={formik.values.userId}
                       onChange={formik.handleChange}
                       type="text"/>
                <ErrorMessage errors={formik.errors} field="userId" />
            </div>
            <div className="mb-3 text-end">
                <button disabled={!formik.isValid}  className="btn btn-primary">Set User</button>
            </div>
        </form>
    )
};
