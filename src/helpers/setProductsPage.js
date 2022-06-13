export const setProductsPage = (products, pageIndex = 1, numberForOnePage) => {
    return products.slice((pageIndex - 1) * numberForOnePage, pageIndex * numberForOnePage)
}