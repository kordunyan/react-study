import {Component} from "react";
import {UserContext} from "../../../constants/context";

export const TodosWithUserContext = (WrappedComponent) => {

    const Wrapped = class extends Component {
        render() {
            const {userId} = this.context;
            return <WrappedComponent userId={userId}/>
        }
    };

    Wrapped.contextType = UserContext;

    return Wrapped;
};
