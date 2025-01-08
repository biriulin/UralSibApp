'use client';

import React from 'react';
import {Text, UserLabel} from '@gravity-ui/uikit';

import useUserData from '../../../../hooks/useUserData';

import block from 'bem-cn-lite';

import {PostType, UserType} from '@/types';

import './Post.scss';

interface PostProps {
    post: PostType;
}

const b = block('post-wrapper');

export const Post: React.FC<PostProps> = ({post}) => {
    const {data: userResponse, isSuccess: isSuccessUserData} = useUserData(post.userId);
    const postOwner: UserType = isSuccessUserData ? userResponse?.data : {};

    return (
        <article className={b()}>
            <UserLabel type="person">{postOwner.name}</UserLabel>
            <Text variant="display-3" className={b('title')}>
                {post.title}
            </Text>
            <Text variant="subheader-2" className={b('body')}>
                {post.body}
            </Text>
        </article>
    );
};
