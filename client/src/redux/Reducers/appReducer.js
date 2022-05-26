import {EDIT_HEADER, EDIT_LOCALIZATION, HIDE_LOADER, LOGIN, LOGOUT, SHOW_LOADER} from "../types";
import {storageName} from "../Actions/actions";

const data = JSON.parse(localStorage.getItem(storageName))

const initialState = {
    loading: false,
    headerTitle: 'headerTitleMain',
    headerBack: false,
    headerLocalization: 'ru',
    auth: !!data,
    token: !!data
        ? data.token
        : '',
    userId: !!data
        ? data.userId
        : '',
    user: {}
}

export const appReducer = (state = initialState , action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case EDIT_LOCALIZATION:
            return {...state, headerLocalization: action.payload}
        case LOGIN:
            return {...state, auth: true, token: action.payload.token, userId: action.payload.userId, user: action.payload.user}
        case LOGOUT:
            return {...state, auth: false, token: '', userId: ''}
        case EDIT_HEADER:
            return {...state, headerTitle: action.payload.headerTitle, headerBack: action.payload.headerBack}
        default: return state
    }
}