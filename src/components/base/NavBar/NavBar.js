import {Component} from "react";

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
        return this.props.items.map(it => {
            return (
                <button key={it}
                        className={"nav-link text-start " + (this.isActive(it) && "active")}
                        onClick={() => this.props.onItemSelected(it)}>
                    {it}
                </button>
            );
        });
    }

    isActive(item) {
        return item === this.props.currentItem;
    }
}
