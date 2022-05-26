import {CREATE_POST, FETCH_POSTS} from "../types";

const initialState = {
    words: [
        {title: 'Әти', translate: 'Папа', status: true},
        {title: 'Әни', translate: 'Мама',status: true},
        {title: 'Әби', translate: 'Бабушка',status: true},
        {title: 'Дәүләт', translate: 'Закон',status: false},
        {title: 'Канун', translate: 'Закон',status: true},
        {title: 'Як', translate: 'Край',status: true},
    ]
}

export const learnWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, words: [...state.posts, action.payload] }
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        default:  return state;
    }
}