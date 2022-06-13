export function getRequestUrl(obj) {
  let url = obj.prodUrl;
  const filters = obj.filters ? obj.filters : { categories: [], brands: [] };
  const categoriesValues = filters.categories;
  const brandsValues = filters.brands;
  const categories = categoriesValues.map(
    (category) => `category=${category.name.toLowerCase().replace(" ", "_")}`
  );
  const brands = brandsValues.map(
    (brand) => `brand=${brand.name.toLowerCase().replace(" ", "_")}`
  );
  url = `${url}?`;
  url = obj.searchValue ? `${url}q=${obj.searchValue}` : url;
  url = categories.length !== 0 ? `${url}&${categories}` : url;
  url = brands.length !== 0 ? `${url}&${brands}` : url;
  if (obj.sliders) {
    url = `${url}&minPrice=${obj.sliders[0].currentMin}&maxPrice=${obj.sliders[0].currentMax}`;
    url = `${url}&minRating=${obj.sliders[1].currentMin}&maxRating=${obj.sliders[1].currentMax}`;
  }
  url = `${url}&page=${obj.currentPage}&limit=9`;
  return url;
}
