export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ErrorResponse {
  message: string;
  status: number;
}
