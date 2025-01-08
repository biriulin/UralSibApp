'use client';

import React from 'react';
import {Loader} from '@gravity-ui/uikit';
import useCommentsdata from '../../../../hooks/useCommentsData';
import {Comment} from './components/Comment';

import {CommentType} from '@/types';
import block from 'bem-cn-lite';

import './Comments.scss';

interface CommentsProps {
    postId: number;
}

const b = block('comments-wrapper');

export const Comments: React.FC<CommentsProps> = ({postId}) => {
    const {isLoading, data: commentsResponse, isSuccess} = useCommentsdata(postId);
    const comments: CommentType[] = commentsResponse?.data;
    return (
        <div className={b()}>
            {isLoading && <Loader />}
            {!isLoading &&
                isSuccess &&
                comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            {!isLoading && !isSuccess && <div>Comments is undefined</div>}
        </div>
    );
};
