import {
    CREATE_POST,
    EDIT_HEADER,
    EDIT_LOCALIZATION,
    GET_USER,
    HIDE_LOADER,
    LOGIN,
    LOGOUT,
    SHOW_LOADER
} from "../types";

export const storageName = 'userData';
export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function getUserInfo(token) {
    let headers = {
        Authorization: `Bearer ${token}`
    }
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('/api/user', {method: 'GET', body: null, headers})
        if (response.status === 401) {
            dispatch(logOut())
        }
        const json = await response.json();
        dispatch({
            type: GET_USER,
            payload: json.user[0]
        })
        dispatch(hideLoader())
    }
}


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function editHeader(headerTitle, headerBack) {
    return {
        type: EDIT_HEADER,
        payload: {headerTitle, headerBack}
    }
}

export function editLocalization(localization) {
    return {
        type: EDIT_LOCALIZATION,
        payload: localization
    }
}

export function login(token, userId, user) {
    localStorage.setItem(storageName, JSON.stringify({
        userId, token
    }))
    return {
        type: LOGIN,
        payload: {token, userId, user}
    }
}

export function logOut() {
    localStorage.removeItem(storageName);
    window.location.reload();
    return {
        type: LOGOUT,
    }
}