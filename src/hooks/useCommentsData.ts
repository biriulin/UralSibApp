import {useQuery} from 'react-query';

import {CommentsService} from '../services/commentsService';

const COMMENTS_KEY = 'COMMENTS_KEY';

const useCommentsData = (postId: number) => {
    return useQuery(COMMENTS_KEY, () => CommentsService.getCommentsByPostId(postId));
};

export default useCommentsData;
