import {createSlice} from '@reduxjs/toolkit'
import {useSelector} from "react-redux";

export const UserStore = createSlice({
    name: 'user-state',
    initialState: {
        userId: null
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    }
});

const userReducer = UserStore.reducer;


export const useUserStore = () => {
    return useSelector((state) => state.userStore.userId);
}

export const {setUserId} = UserStore.actions;

export default userReducer;
