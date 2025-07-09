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

export interface LoginForm {
  email: string;
  password: string;
}

export interface UserForm {
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface PostForm {
  title: string;
  body: string;
}

export interface AppState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface FormProps {
  onSubmit: (values: unknown) => void;
  initialValues?: Record<string, unknown>;
  loading?: boolean;
}

export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: unknown) => string;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
