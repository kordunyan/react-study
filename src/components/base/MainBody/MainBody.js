import {useState} from "react";
import NavBar from "../NavBar/NavBar";
import Content from "../Content/Content";
import {CONTENT, NAVBAR_ITEMS} from "../../../constants/constants";

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
                <Content item={CONTENT[currentTab]}/>
            </div>
        </div>
    );
}
