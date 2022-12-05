const defaultHeaders = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function getRequest(endpoint: string) {
  const response = await fetch(endpoint);
  return await response.json();
}

export async function postRequest<T>(
  endpoint: string,
  body: T,
  headers: HeadersInit = {}
) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });
  return await response.json();
}

export async function putRequest<T>(
  endpoint: string,
  body: T,
  headers: HeadersInit = {}
) {
  const response = await fetch(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });
  return await response.json();
}

export async function deleteRequest(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "DELETE",
  });
  return await response.json();
}
