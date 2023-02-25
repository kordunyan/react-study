import React, {useContext} from "react";

export const UserContext = React.createContext({
    userId: '',
    changeUser: () => {}
});


export const useUserContext = () => {
    const userContext = useContext(UserContext);

    return userContext.userId;
};
