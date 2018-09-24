export const Actions = {
    CHANGE_LOADING: 'CHANGE_LOADING',
};

//change loading status
export function setLoadingStatus(isLoading) {
    return {
        type: Actions.CHANGE_LOADING,
        isLoading
    };
}