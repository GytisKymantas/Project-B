import React, { SetStateAction, useState } from 'react';
import { Box, FlexWrapper, InputField, Typography } from 'components';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from 'state/slice';
import * as Yup from 'yup';
import APIservice from '../../service/api-service';
import { selectState } from 'state/slice';
import { theme } from 'styles/theme';
import { navigate } from 'gatsby';
import { BaseButton } from 'components/buttons/elements/BaseButton';
import { LoadingLine } from 'components/LoadingLine/LoadingLine';

interface IUserDataProps {
  city: string;
  email: string;
  firstName: string;
  house: string;
  lastName: string;
  street: string;
  zipcode: string;
}

type Error = {
  error: string;
  message: SetStateAction<null>;
};

const initialValues: IUserDataProps = {
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
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  city: Yup.string().required('City name is required'),
  house: Yup.string().required('House number is required'),
  street: Yup.string().required('Street number is required'),
  zipcode: Yup.string().required('Zip code is required'),
});

const RegistrationPage: React.FC = () => {
  const checkstate = useSelector(selectState);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async ({
    firstName,
    lastName,
    email,
    city,
    house,
    street,
    zipcode,
  }: IUserDataProps) => {
    try {
      const { user, token } = await APIservice.login({
        firstName,
        lastName,
        email,
        city,
        house,
        street,
        zipcode,
      });
      const loginSuccesAction = loginSuccess({ user, token });
      dispatch(loginSuccesAction);
      navigate('/grid');
    } catch (e) {
      const error = e as Error;
      setErrorMsg(error.message);
    }
  };

  const {
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <Box>
      {isSubmitting && <LoadingLine />}
      <RegistrationFormContainer>
        <Box mb='s16'>
          <Typography textAlign='center' color='primary' type='h5'>
            Registration page
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <FlexWrapper gap='1.4375rem' flexDirection='column'>
            <FlexWrapper gap='1.5625rem'>
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='First Name'
                id='firstName'
                name='firstName'
                style={
                  (touched.firstName && errors.firstName) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.firstName && errors.firstName && (
                <Error style={{ top: '30%', left: '14%' }}>
                  {errors.firstName}
                </Error>
              )}
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Last Name'
                id='lastName'
                name='lastName'
                style={
                  (touched.lastName && errors.lastName) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.lastName && errors.lastName && (
                <Error style={{ top: '30%', left: '70%' }}>
                  {errors.lastName}
                </Error>
              )}
            </FlexWrapper>
            <InputField
              onChange={handleChange}
              onBlur={handleBlur}
              type='email'
              placeholder='E-Mail'
              id='email'
              name='email'
              style={
                (touched.email && errors.email) || errorMsg
                  ? { borderBottom: `1px solid red` }
                  : { borderBottom: `1px solid black` }
              }
            />
            {touched.email && errors.email && (
              <Error style={{ top: '46%', left: '50%' }}>{errors.email}</Error>
            )}
            <FlexWrapper gap='1.5625rem'>
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='City'
                id='city'
                name='city'
                style={
                  (touched.city && errors.city) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.city && errors.city && (
                <Error style={{ top: '62%', left: '16%' }}>{errors.city}</Error>
              )}
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Street'
                id='street'
                name='street'
                style={
                  (touched.street && errors.street) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.street && errors.street && (
                <Error style={{ top: '62%', left: '69%' }}>{errors.city}</Error>
              )}
            </FlexWrapper>
            <FlexWrapper gap='1.5625rem'>
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='number'
                placeholder='House Number'
                id='house'
                name='house'
                style={
                  (touched.house && errors.house) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.house && errors.house && (
                <Error style={{ top: '80%', left: '19%' }}>
                  {errors.house}
                </Error>
              )}
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                type='number'
                placeholder='Zipcode'
                id='zipcode'
                name='zipcode'
                style={
                  (touched.zipcode && errors.zipcode) || errorMsg
                    ? { borderBottom: `1px solid red` }
                    : { borderBottom: `1px solid black` }
                }
              />
              {touched.zipcode && errors.zipcode && (
                <Error style={{ top: '80%', left: '69%' }}>
                  {errors.zipcode}
                </Error>
              )}
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justifyContent='center'>
            <Box mt='s50'>
              <BaseButton type='submit'>Register</BaseButton>
            </Box>
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

const Error = styled.span`
  position: absolute;
  font-size: ${theme.fontSizes.fs10};
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  display: flex;
  justify-content: center;
`;
