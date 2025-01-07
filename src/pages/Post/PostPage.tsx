'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {Loader, Text} from '@gravity-ui/uikit';

import {usePostData} from '../../hooks/usePostsData';

import {Post} from './components/Post';
import {Comments} from './components/Comments';

import {PostType} from '@/types';

import './PostPage.scss';

interface PostPageProps {}

export const PostPage: React.FC<PostPageProps> = () => {
    const params = useParams();
    const id = params?.id;

    const {isLoading, data, isSuccess, isError} = usePostData(Number(id));
    const post: PostType = data?.data;

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && !isSuccess && isError && <div>Post is undefined</div>}
            {!isLoading && isSuccess && (
                <div>
                    <Post post={post}></Post>
                    <Text variant="header-1">Comments</Text>
                    <Comments postId={Number(id)} />
                </div>
            )}
        </div>
    );
};
