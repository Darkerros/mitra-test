import axios from "axios";
import {GetUserByIdResponse} from "./types/responses/get-user-by-id-response";
import {GetPostCommentsResponse} from "./types/responses/get-post-comments-response";
import {GetAllPostsResponse} from "./types/responses/get-all-posts-response";

const apiInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
const createReguest =  (endpoint: string) => {
    return apiInstance.get(endpoint).then(resp => resp.data)
}

export const api = {
    getAllPosts:():GetAllPostsResponse => createReguest('/posts'),

    getPostComments:(postId: number):GetPostCommentsResponse => createReguest(`/posts/${postId}/comments`),

    getUserById:(userId: number):GetUserByIdResponse =>  createReguest(`/users/${userId}`)
}


