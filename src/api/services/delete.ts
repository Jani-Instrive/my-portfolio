import { apiClient } from '../config';

export const deleteData = async <T>(endpoint: string): Promise<T> => {
  const response = await apiClient.delete<T>(endpoint);
  return response.data;
};

export const deleteDataWithConfig = async <T>(
  endpoint: string,
  config?: Record<string, unknown>
): Promise<T> => {
  const response = await apiClient.delete<T>(endpoint, config);
  return response.data;
};
