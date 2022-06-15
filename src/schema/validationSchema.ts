import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  city: Yup.string().required('City name is required'),
  house: Yup.string().required('House number is required'),
  street: Yup.string().required('Street number is required'),
  zipcode: Yup.string().required('Zip code number is required'),
});
