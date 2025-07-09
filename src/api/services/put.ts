import { apiClient } from '../config';

export const putData = async <T>(
  endpoint: string,
  data: unknown
): Promise<T> => {
  const response = await apiClient.put<T>(endpoint, data);
  return response.data;
};

export const putDataWithConfig = async <T>(
  endpoint: string,
  data: unknown,
  config?: Record<string, unknown>
): Promise<T> => {
  const response = await apiClient.put<T>(endpoint, data, config);
  return response.data;
};
