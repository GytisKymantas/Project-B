import React, { useState } from 'react';
import {
  Box,
  FlexWrapper,
  SectionWrapper,
  InputField,
  Typography,
} from 'components';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import APIservice from '../../service/api-service';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  street: '',
  house: '',
  zipcode: '',
};

export const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  city: Yup.string().required('City name is required'),
  house: Yup.string().required('House number is required'),
  street: Yup.string().required('Street number is required'),
  zipcode: Yup.string().required('Zip code number is required'),
});

const RegistrationPage = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  console.log(errorMsg, 'error msg');

  const handleLogin = ({
    firstName,
    lastName,
    email,
    city,
    street,
    house,
    zipcode,
  }) => {
    console.log(firstName, lastName, email, city, street, house, zipcode);
  };

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });
  console.log(values);
  console.log(errors, 'errors');

  return (
    <Box>
      <RegistrationFormContainer>
        <Box mb='s16'>
          <Typography textAlign='center' color='primary' type='h5'>
            Registration page
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <FlexWrapper flexDirection='column' gap='25px'>
            <FlexWrapper gap='25px'>
              <InputField
                onChange={handleChange}
                type='text'
                placeholder='First Name'
                id='firstName'
                name='firstName'
              ></InputField>
              <InputField
                onChange={handleChange}
                type='text'
                placeholder='Last Name'
                id='lastName'
                name='lastName'
              ></InputField>
            </FlexWrapper>
            <InputField
              onChange={handleChange}
              type='email'
              placeholder='E-Mail'
              id='email'
              name='email'
            ></InputField>
            <FlexWrapper gap='25px'>
              <InputField
                onChange={handleChange}
                type='text'
                placeholder='City'
                id='city'
                name='city'
              ></InputField>
              <InputField
                onChange={handleChange}
                type='text'
                placeholder='Street'
                id='street'
                name='street'
              ></InputField>
            </FlexWrapper>
            <FlexWrapper gap='25px'>
              <InputField
                onChange={handleChange}
                type='number'
                placeholder='House Number'
                id='house'
                name='house'
              ></InputField>
              <InputField
                onChange={handleChange}
                type='number'
                placeholder='Zipcode'
                id='zipcode'
                name='zipcode'
              ></InputField>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justifyContent='center'>
            <button type='submit'>okay</button>
          </FlexWrapper>
        </form>
      </RegistrationFormContainer>
    </Box>
  );
};

export default RegistrationPage;

const RegistrationFormContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
