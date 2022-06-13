export const setPageNumbers = (numberOfPages) => {
    const result = []
    for (let i = 0; i < numberOfPages; i++) {
        result.push(i + 1)
    }
    return result
}