'use client';

import React from 'react';
import {Card, Text, UserLabel} from '@gravity-ui/uikit';

import Link from 'next/link';

import useUserData from '../../../../hooks/useUserData';

import block from 'bem-cn-lite';

import {PostType, UserType} from '@/types';

import './PostCard.scss';

interface PostCardProps {
    post: PostType;
}

const b = block('post-card-wrapper');

export const PostCard: React.FC<PostCardProps> = ({post}) => {
    const {data, isSuccess} = useUserData(post.userId);
    const postOwner: UserType = isSuccess ? data?.data : {};

    return (
        <Card className={b()}>
            <UserLabel type="person">{postOwner.name}</UserLabel>
            <Link href={`posts/${post.id}`} className={b('link')}>
                <Text variant="header-2">{post.title}</Text>
            </Link>
            <Text className={b('body')}>{post.body}</Text>
        </Card>
    );
};
