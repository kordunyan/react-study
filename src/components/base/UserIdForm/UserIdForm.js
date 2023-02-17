import {useEffect, useState} from "react";
import {USER_ID_PATTERN} from "../../../constants/constants";


export const UserIdForm = (props) => {
    const [userId, setUserId] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    useEffect(() => {
        if (!userId) {
            return;
        }
        setIsInvalid(!USER_ID_PATTERN.test(userId));
    }, [userId]);

    const invalidMessage = (
        <div className="invalid-feedback">
            Value should be a digit number
        </div>
    );

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
                <input className={"form-control " + (isInvalid && "is-invalid")}
                       value={userId}
                       onChange={e => setUserId(e.target.value)}
                       type="text"/>
                {isInvalid && invalidMessage}
            </div>
            <div className="mb-3 text-end">
                <button disabled={isInvalid} onClick={() => props.onSetUser(userId) } className="btn btn-primary" type="button">Set User</button>
            </div>
        </form>
    )

};
