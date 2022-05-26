export const getPageCount = (totalpage, limit) => {
    return Math.ceil(totalpage/limit)
}

export const getPagesArray = (totalCount) => {
    let result = []
    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1);
    }
    return result;
}