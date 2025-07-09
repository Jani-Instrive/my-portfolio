import { Alert, AlertTitle, Box } from '@mui/material';

interface ErrorMessageProps {
  error: string;
  title?: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
  onClose?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  title = 'Error',
  severity = 'error',
  onClose,
}) => {
  return (
    <Box my={2}>
      <Alert severity={severity} onClose={onClose}>
        <AlertTitle>{title}</AlertTitle>
        {error}
      </Alert>
    </Box>
  );
};
