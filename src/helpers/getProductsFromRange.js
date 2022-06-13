export function getProductsFromRange(products, sliders) {
  const productsInPriceRange = products.map((product) => {
    return product.price <= sliders[0].currentMax &&
      product.price >= sliders[0].currentMin
      ? product
      : {};
  });
  return productsInPriceRange.filter((product) => {
    return product.rating <= sliders[1].currentMax &&
      product.price >= sliders[1].currentMin
      ? product
      : null;
  });
}
