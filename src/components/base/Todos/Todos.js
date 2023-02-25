import {Component} from "react";
import axios from "axios";
import {TodosList} from "./TodosList";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {WarningAlert} from "../Alerts/WarningAlert";
import {TodosWithUserContext} from "./TodosWithUserContext";

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            todos: []
        };
    }

    fetchTodos(userId) {
        this.setState({isLoading: true});
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then((response) => {
                this.setState({todos: response.data});
            }).finally(() => {
            this.setState({isLoading: false});
        });
    }

    componentDidMount() {
        if (this.props.userId && !this.state.isLoading) {
            this.fetchTodos(this.props.userId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId && !this.state.isLoading) {
            this.fetchTodos(this.props.userId);
        }
    }

    render() {
        const {isLoading, todos} = this.state;
        if (!this.props.userId) {
            return (
                <div className="h-100 my-3">
                    <WarningAlert text='Please select a user id.'/>
                </div>
            );
        }
        return (
            <div className="h-100 my-3">
                {isLoading ? <LoadingSpinner/> : <TodosList todos={todos}/>}
            </div>
        );
    }
}

export default TodosWithUserContext(Todos);
