export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'
export const SELECT_CHILD = 'SELECT_CHILD'

export function addChild(child) {
    return {
        type: ADD_CHILD,
        child
    }
}

export function removeChild(id) {
    return {
        type: REMOVE_CHILD,
        id
    }
}

export function selectChild(id) {
    return {
        type: SELECT_CHILD,
        id
    }
}