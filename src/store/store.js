import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch,useSelector } from 'react-redux';
import mealReducer from "../reducers/mealReducer";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

const store = configureStore({
    reducer: {
        mealReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});


export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: () => AppSelector = useSelector // Export a hook that can be reused to resolve types

export default store;