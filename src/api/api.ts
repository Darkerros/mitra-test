import axios, {AxiosInstance} from "axios";
import {GetUserByIdResponse} from "./types/responses/get-user-by-id-response";
import {GetPostCommentsResponse} from "./types/responses/get-post-comments-response";
import {GetAllPostsResponse} from "./types/responses/get-all-posts-response";


class Api {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
    }

    createReguest (endpoint: string) {
        return this.apiClient.get(endpoint).then(resp => resp.data)
    }

    getAllPosts():GetAllPostsResponse {
        return this.createReguest('/posts')
    }

    getPostComments(postId: number):GetPostCommentsResponse {
        return this.createReguest(`/posts/${postId}/comments`)
    }

    getUserById(userId: number):GetUserByIdResponse {
        return this.createReguest(`/users/${userId}`)
    }
}

const api = new Api()

export default api