import { useFormik } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import { loginSchema } from '@/utils/validation';
import type { LoginForm } from '@/types';

interface LoginFormProps {
  onSubmit: (values: LoginForm) => void;
  loading?: boolean;
}

export const LoginFormComponent: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Login
      </Typography>
      
      <TextField
        fullWidth
        margin="normal"
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      
      <TextField
        fullWidth
        margin="normal"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading || !formik.isValid}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
};
