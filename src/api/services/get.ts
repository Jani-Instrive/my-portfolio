import { apiClient } from '../config';

export const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await apiClient.get<T>(endpoint);
  return response.data;
};

export const getDataWithParams = async <T>(
  endpoint: string,
  params?: Record<string, unknown>
): Promise<T> => {
  const response = await apiClient.get<T>(endpoint, { params });
  return response.data;
};
