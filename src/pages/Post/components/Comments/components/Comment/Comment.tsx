'use client';

import React from 'react';
import {Card, Text, UserLabel} from '@gravity-ui/uikit';

import block from 'bem-cn-lite';

import {CommentType} from '@/types';
import './Comment.scss';

interface CommentProps {
    comment: CommentType;
}

const b = block('comment-wrapper');

export const Comment: React.FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <Card className={b()}>
                <UserLabel type="person">{comment.email}</UserLabel>
                <Text variant="header-2" className={b('title')}>
                    {comment.name}
                </Text>
                <Text className={b('body')}>{comment.body}</Text>
            </Card>
        </div>
    );
};
