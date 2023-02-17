import {Component} from "react";
import axios from "axios";
import {UserContext} from "../../../constants/context";
import {TodosList} from "./TodosList";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";

export default class Todos extends Component {

    isFetchingTodos = false;
    prevUserId = null;

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            todos: []
        };
        console.log(this.context);
    }

    fetchTodos(userId) {
        console.log('Fetch todos for user: ' + userId);
        this.setState({isLoading: true});
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then((response) => {
                console.log('Retrieved data');
                this.setState({todos: response.data});
            }).finally(() => {
            this.setState({isLoading: false});
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.prevUserId !== this.context && !this.state.isLoading) {
            this.prevUserId = this.context;
            this.fetchTodos(this.context);
        }
    }

    render() {
        const {isLoading, todos} = this.state;
        return (
            <div className="h-100 mt-3">
                {isLoading ? <LoadingSpinner/> : <TodosList todos={todos}/>}
            </div>
        );
    }

}

Todos.contextType = UserContext;
