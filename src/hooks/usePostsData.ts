import {useQuery} from 'react-query';

import {PostService, PostsService} from '../services/postsService';

const POSTS_KEY = 'POSTS_KEY';
const POST_KEY = 'POST_KEY';

export const usePostsData = () => {
    return useQuery(POSTS_KEY, PostsService.getAllPosts);
};

export const usePostData = (postId: number) => {
    return useQuery(POST_KEY, () => PostService.getPost(postId), {
        retry: false,
    });
};
