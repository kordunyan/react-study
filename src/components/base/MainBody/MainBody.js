import {Component} from "react";
import NavBar from "../NavBar/NavBar";
import Content from "../Content/Content";
import {TabItem} from "../../model/TabItem";

export class MainBody extends Component {

    constructor(props) {
        super(props);

        const tabItems = [
            new TabItem('Home', 'Home page'),
            new TabItem('Posts', 'Posts page'),
            new TabItem('Contacts', 'Contacts page'),
            new TabItem('Info', 'Info page'),
        ];

        this.state = {
            navbarItems: tabItems,
            currentTab: tabItems[0]
        }
    }

    navbarItemSelected(item) {
        this.setState({
            currentTab: item
        })
    }

    render() {
        return (
            <div className="row h-100">
                <div className="border-end col-3">
                    <NavBar onItemSelected={this.navbarItemSelected.bind(this)} currentItem={this.state.currentTab} items={this.state.navbarItems}/>
                </div>
                <div className="col-9">
                    <Content item={this.state.currentTab}/>
                </div>
            </div>
        );
    }

}
