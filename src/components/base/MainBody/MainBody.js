import {useState} from "react";
import NavBar from "../NavBar/NavBar";
import {NAVBAR_ITEMS} from "../../../constants/constants";
import {Posts} from "../Posts/Posts";
import Todos from "../Todos/Todos";

const TABS_CONTENT = {
    Posts: Posts,
    TODOS: Todos
};

export const MainBody = () => {

    const [currentTab, setCurrentTab] = useState(NAVBAR_ITEMS[0])

    const Component = TABS_CONTENT[currentTab];

    return (
        <div className="row h-100">
            <div className="border-end col-3">
                <NavBar
                    onItemSelected={setCurrentTab}
                    currentItem={currentTab}
                    items={NAVBAR_ITEMS}
                />
            </div>
            <div className="col-9">
                {Component && <Component/>}
            </div>
        </div>
    );
}
