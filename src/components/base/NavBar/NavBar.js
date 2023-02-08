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
                <button key={it.title}
                        className={this.getItemClassName(it)}
                        onClick={() => this.props.onItemSelected(it)}>
                    {it.title}
                </button>
            );
        });
    }

    getItemClassName(item) {
        return [
            "nav-link text-start",
            item === this.props.currentItem ? "active" : ""
        ].join(" ");
    }

}
