import {Component} from "react";
import axios from "axios";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import UsersTable from "./UsersTable/UsersTable";

export default class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            users: []
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({users: response.data});
            }).finally(() => {
            this.setState({isLoading: false});
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="h-100">
                    <LoadingSpinner/>
                </div>
            )
        }
        return (
            <div>
                <UsersTable users={this.state.users}/>
            </div>
        )
    }

}
