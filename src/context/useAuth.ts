import { useContext } from 'react';
import { AuthContext } from './authTypes';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
   console.error('useAuth must be used within an AuthProvider');
  }
  return context;
};
