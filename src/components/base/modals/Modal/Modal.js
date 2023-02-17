import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

const modalRoot = document.getElementById('modalRoot');

export const Modal = (props) => {
    const {onClose} = props;

    const [modalElement, setModalElement] = useState(null);

    useEffect(() => {
        const div = document.createElement('div');
        setModalElement(div);
        modalRoot.appendChild(div);
        return () => {
            modalRoot.removeChild(div);
        }
    }, []);


    const modal = (<>
        <div onClick={onClose} className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
    </>)

    return modalElement && createPortal(modal, modalElement);
};
