

export const setCorrectId = (id, minId, maxId) => {
    if(id <= minId){
        return minId
    } else if (id >= maxId) {
        return maxId
    }
    return id
}