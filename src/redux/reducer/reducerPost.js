import { DELETE, PUBLISH } from "../type/postType";

export const reducerPost = (state = { isPublish: false, isDelete: false }, action) => {
    if (action.type === PUBLISH) {
        const postsData = localStorage.getItem('posts');
        let dataLocal = postsData === null ? [] : JSON.parse(postsData); 
        dataLocal.push(action.data);
        localStorage.setItem('posts',JSON.stringify(dataLocal));
        return { isPublish: true, isDelete: false };
    } if (action.type === DELETE) {
        localStorage.removeItem('posts')
        return { isPublish: false, isDelete: true };
    }
    return state;

}