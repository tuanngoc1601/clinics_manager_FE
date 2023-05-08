import actionTypes from './actionTypes';
import { userService } from '../../services';
import { toast } from 'react-toastify';

// gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START });
            let res = await userService.getAllCodeService('GENDER');
            if(res && res.errorCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch(e) {
            dispatch(fetchGenderFailed());
            console.log(e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

// position
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_POSITION_START });
            let res = await userService.getAllCodeService('POSITION');
            if(res && res.errorCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch(e) {
            dispatch(fetchGenderFailed());
            console.log(e);
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

// role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START });
            let res = await userService.getAllCodeService('ROLE');
            if(res && res.errorCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch(e) {
            dispatch(fetchRoleFailed());
            console.log(e);
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

// create user
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_POSITION_START });
            let res = await userService.createNewUserService(data);
            if(res && res.errorCode === 0) {
                toast.success('Create user successfully!');
                dispatch(createUserSuccess());
                dispatch(getAllUserStart());
            } else {
                dispatch(createUserFailed());
            }
        } catch(e) {
            dispatch(createUserFailed());
            console.log(e);
        }
    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

// get users
export const getAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_POSITION_START });
            let res = await userService.getAllUsers('ALL');
            if(res && res.errorCode === 0) {
                dispatch(getAllUserSuccess(res.users));
            } else {
                dispatch(getAllUserFailed());
            }
        } catch(e) {
            dispatch(getAllUserFailed());
            console.log(e);
        }
    }
}

export const getAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const getAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAIL
})

// delete user
export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.deleteUserService(userId);
            if(res && res.errorCode === 0) {
                toast.success('Delete user successfully!');
                dispatch(deleteUserSuccess());
                dispatch(getAllUserStart());
            } else {
                toast.error('Delete user error!');
                dispatch(deleteUserFailed());
            }
        } catch(e) {
            dispatch(deleteUserFailed());
            console.log(e);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

// edit user
export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.editUserService(data);
            if(res && res.errorCode === 0) {
                toast.success('Update user successfully!');
                dispatch(editUserSuccess());
                dispatch(getAllUserStart());
            } else {
                toast.error('Edit user error!');
                dispatch(editUserFailed());
            }
        } catch(e) {
            dispatch(editUserFailed());
            console.log(e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})