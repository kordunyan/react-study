import {useState} from "react";
import NavBar from "../NavBar/NavBar";
import {NAVBAR_ITEMS} from "../../../constants/constants";
import {Posts} from "../Posts/Posts";
import Users from "../Users/Users";

export const MainBody = () => {

    const [currentTab, setCurrentTab] = useState(NAVBAR_ITEMS[0])

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
                {currentTab === 'Posts' && <Posts/>}
                {currentTab === 'Users' && <Users/>}
            </div>
        </div>
    );
}
