import {Modal} from "../Modal/Modal";
import {UserIdForm} from "../../UserIdForm/UserIdForm";

export const UserInputModal = (props) => {

    const {onClose, onSetUser} = props;

    return (
        <Modal onClose={onClose}>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Set User</h1>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
                <UserIdForm onSetUser={onSetUser}/>
            </div>
        </Modal>
    )
};
