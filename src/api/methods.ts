const defaultHeaders = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function getRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);
  return await response.json();
}

export async function postRequest<T, R>(
  endpoint: string,
  body: T,
  headers: HeadersInit = {}
): Promise<R> {
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

export async function putRequest<T, R>(
  endpoint: string,
  body: T,
  headers: HeadersInit = {}
): Promise<R> {
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

export async function deleteRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint, {
    method: "DELETE",
  });
  return await response.json();
}
