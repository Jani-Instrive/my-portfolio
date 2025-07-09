import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const userSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[+]?[\d\s-()]+$/, 'Invalid phone number format')
    .optional(),
  website: yup
    .string()
    .url('Invalid URL format')
    .optional(),
});

export const postSchema = yup.object({
  title: yup
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),
  body: yup
    .string()
    .min(10, 'Body must be at least 10 characters')
    .max(1000, 'Body must be less than 1000 characters')
    .required('Body is required'),
});
