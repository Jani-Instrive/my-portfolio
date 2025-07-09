import { Container, Paper, Box } from '@mui/material';
import { LoginFormComponent } from '@/components/forms/LoginForm';
import { useAppDispatch } from '@/hooks/redux';
import { setUser } from '@/store/slices/userSlice';
import type { LoginForm } from '@/types';

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (values: LoginForm) => {
    // Mock login - in a real app, you'd make an API call here
    console.log('Login attempt:', values);
    
    // Simulate successful login
    dispatch(setUser({
      id: 1,
      name: 'John Doe',
      email: values.email,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <LoginFormComponent onSubmit={handleLogin} />
        </Paper>
      </Box>
    </Container>
  );
};
