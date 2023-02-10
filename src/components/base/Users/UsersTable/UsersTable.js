import {Component} from "react";

export default class UsersTable extends Component {

    getUserRows() {

        return this.props.users.map(user => {
            return (
                <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        });

    }

    render() {
        return (
            <table className="table my-4">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.getUserRows()}
                </tbody>
            </table>
        )
    }

}
