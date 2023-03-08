import {Component} from "react";
import {NavLink} from "react-router-dom";
import {URLs} from "../../../constants/constants";

export default class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="nav nav-pills flex-column mt-3">
                    {this.getNavbarItems()}
                </nav>
            </div>
        )
    }

    getNavbarItems() {
        return URLs.map(it => {
            return (
                <NavLink key={it.path}
                         to={it.path}
                         className={"nav-link text-start " + (({isActive, isPending}) => isActive && "active")}>
                    {it.title}
                </NavLink>
            );
        });
    }
}
