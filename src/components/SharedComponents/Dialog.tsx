/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import type { FC } from 'react';
import { Formik, Form } from 'formik';
import { Box, IconButton, Rating, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import backgroundImage from '../../assets/backgroundDialog.png';
import { Close } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    borderRadius: 20,
  },
}));

interface CustomizedDialogsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  company: string;
  job_title: string;
  message: string;
  rating?: number;
}

const initialValues: FormValues = {
  name: '',
  company: '',
  job_title: '',
  message: '',
  rating: 0,
};
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Last Name is required'),
  job_title: Yup.string().required('Job Title is required'),
  company: Yup.string().required('Company is required'),
  message: Yup.string().required('Message is required'),
  rating: Yup.number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
});

export const CustomizedDialogs: FC<CustomizedDialogsProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSubmit = async (values: FormValues) => {
    const SubmitResponse: any = {
      name: values.name,
      company: values.company,
      job_title: values.job_title,
      message: values.message,
      rating: values.rating || 0,
    };
    try {
      console.log('SubmitResponse', SubmitResponse);
    } catch (error) {
      return error;
    }
  };

  return (
    <BootstrapDialog
      fullWidth
      maxWidth='sm'
      onClose={onClose}
      aria-labelledby='customized-dialog-title'
      open={isOpen}
    >
      <Box
        p={4}
        sx={{
          background: `url(${backgroundImage}) no-repeat center center`,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
          }}
        >
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 40,
              top: 40,
              color: '#6B46C1',
              backgroundColor: 'rgba(203, 166, 228, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(203, 166, 228, 0.3)',
              },
            }}
          >
            <Close />
          </IconButton>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '2.5rem',
              },
              fontWeight: 700,
              color: '#6B46C1',
              pb: 2,
            }}
          >
            FeedBack
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Rating
                    name='rating'
                    value={values.rating || 0}
                    onChange={newValue => {
                      handleChange({
                        target: { name: 'rating', value: newValue },
                      });
                    }}
                    size='large'
                    sx={{
                      fontSize: {
                        xs: '1.5rem',
                        sm: '2.5rem',
                      },
                      '& .MuiRating-iconFilled': {
                        color: '#F59E0B',
                      },
                      '& .MuiRating-iconEmpty': {
                        color: '#E5E7EB',
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    label='Name'
                    error={Boolean(touched.name && errors.name)}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    name='company'
                    value={values.company}
                    onChange={handleChange}
                    label='Company Name'
                    error={Boolean(touched.company && errors.company)}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    name='job_title'
                    value={values.job_title}
                    onChange={handleChange}
                    label='Job Title'
                    error={Boolean(touched.job_title && errors.job_title)}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    label='Message'
                    inputProps={{ maxLength: 150 }}
                    error={Boolean(touched.message && errors.message)}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type='submit' variant='contained' color='primary'>
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </BootstrapDialog>
  );
};
