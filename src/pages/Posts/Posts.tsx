'use client';

import React from 'react';
import {Loader} from '@gravity-ui/uikit';

import {usePostsData} from '../../hooks/usePostsData';

import {PostCard} from './components/PostCard';

import {PostType} from '@/types';

import './Posts.scss';
import block from 'bem-cn-lite';

interface PostsProps {}

const b = block('posts-wrapper');

export const Posts: React.FC<PostsProps> = () => {
    const {isLoading, data, isSuccess} = usePostsData();
    const searchResultPosts: PostType[] = data?.data;

    return (
        <div>
            {isLoading && <Loader></Loader>}
            {!isLoading && isSuccess && (
                <div className={b()}>
                    {searchResultPosts.map((post: PostType) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            )}
            {!isLoading && !isSuccess && <div>Not found</div>}
        </div>
    );
};
