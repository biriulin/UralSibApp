import {useQuery} from 'react-query';

import {UserService} from '../services/userService';

const USER_KEY = 'USER_KEY';

const useUserData = (userId: number) => {
    return useQuery([USER_KEY, userId], () => UserService.getUser(userId));
};

export default useUserData;
