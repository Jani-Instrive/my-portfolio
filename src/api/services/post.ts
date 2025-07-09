import { apiClient } from '../config';

export const postData = async <T>(
  endpoint: string,
  data: unknown
): Promise<T> => {
  const response = await apiClient.post<T>(endpoint, data);
  return response.data;
};

export const postDataWithConfig = async <T>(
  endpoint: string,
  data: unknown,
  config?: Record<string, unknown>
): Promise<T> => {
  const response = await apiClient.post<T>(endpoint, data, config);
  return response.data;
};
