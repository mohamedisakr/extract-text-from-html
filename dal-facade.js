// using data access layer using facade pattern
export function getProducts() {
  return getFetch("products.json");
}

export function getProductById(id) {
  return getFetch("products.json", { id });
}

function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map(param => `${param[0]}=${param[1]}`)
    .join("&");
  return fetch(`${url}?${queryString}`).then(res => res.json());
}

/*
function getFetch(url, params = {}) {
  return axios({ url: url, method: "GET", params: params }).then(
    res => res.data
  );
}
*/
