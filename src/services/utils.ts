interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

const API_URL = 'https://randomuser.me/api/';

// eslint-disable-next-line no-undef
export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  try {
    response.parsedBody = await response.json();
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getRequest<T>(
  path: string,
  // eslint-disable-next-line no-undef
  args: RequestInit = {
    method: 'GET',
  },
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(API_URL + path, args));
}
