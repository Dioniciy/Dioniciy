export const addCheckedStatus = (filters) => {
    return filters.map(filter => {
        return {
            name: filter,
            isChecked: false
        }
    })
}