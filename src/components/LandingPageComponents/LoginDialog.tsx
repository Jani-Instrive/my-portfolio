import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
  Alert,
  InputAdornment,
} from '@mui/material';
import {
  Close,
  Login,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: 'demo@gmail.com',
      password: 'Abc@123',
    },
  });

  const handleClose = () => {
    reset();
    setLoginError(null);
    onClose();
  };
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      const success = await auth?.login(data.email, data.password);
      
      if (success) {
        handleClose();
        // Redirect to admin dashboard after successful login
        // navigate('/admin', { replace: true });
      } else {
        setLoginError('Invalid email or password. Use demo@gmail.com and Abc@123 for demo.');
      }
    } catch {
      setLoginError('Invalid email or password. Use demo@gmail.com and Abc@123 for demo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // In a real app, you'd integrate with OAuth providers
    // For demo purposes, we'll simulate a successful login
    handleClose();
    // In a real implementation, after successful OAuth, redirect to admin
    // navigate('/admin', { replace: true });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle sx={{ position: 'relative', textAlign: 'center', pb: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Login color="primary" sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h4" component="h2" fontWeight={700}>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Sign in to your account
          </Typography>
        </motion.div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {loginError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {loginError}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message || 'Use demo@gmail.com and Abc@123 for demo'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                mb: 2,
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Or continue with
            </Typography>
          </Divider>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={() => handleSocialLogin('Google')}
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={() => handleSocialLogin('GitHub')}
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              GitHub
            </Button>
          </Box>
        </motion.div>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}            <Button
              variant="text"
              size="small"
              onClick={() => console.log('Sign up clicked')}
              sx={{ textDecoration: 'underline', p: 0, minWidth: 'auto' }}
            >
              Sign up
            </Button>
          </Typography>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
