import React, { useState, useEffect } from 'react';
import { selectState } from 'state/slice';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { navigate } from 'gatsby';
import { UserCard } from 'components/UserCard.tsx/UserCard';
import { Box, FlexWrapper, GridWrapper, Typography } from 'components';

const grid: React.FC = () => {
  const checkstate = useSelector(selectState);
  const data = checkstate.auth.user;

  return (
    <Box>
      <RegisteredUsersGrid>
        <Box mb='50px'>
          <Typography type='h3' color='primary' textAlign='center'>
            Employee count: {data?.length}
          </Typography>
        </Box>
        <GridWrapper
          gridTemplateColumns='repeat(3,1fr)'
          gap='50px'
          m='auto'
          width='850px'
        >
          {data?.map(
            (
              { firstName, lastName, email, city, street, house, zipcode },
              idx
            ) => {
              return (
                <UserCard
                  key={idx}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  city={city}
                  street={street}
                  house={house}
                  zipcode={zipcode}
                  index={idx}
                  // setUserData={setNewUserData}
                  // userDataClone={newUserData}
                />
              );
            }
          )}
          {/* <FlexWrapper>Grid2</FlexWrapper> */}
        </GridWrapper>
        <button type='button' onClick={() => navigate('/registration')}>
          test
        </button>
      </RegisteredUsersGrid>
    </Box>
  );
};

export default grid;

const RegisteredUsersGrid = styled(Box)`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  margin: 50px;
`;

{
  /* <Box bg='gray' p='s16'>
            <FlexWrapper gap='20px' flexDirection='column'>
              <Typography color='primary'>
                name: {data?.firstName} {data?.lastName}
              </Typography>
              <Typography color='primary'>email: {data?.email}</Typography>
              <Typography color='primary'>city: {data?.city}</Typography>
              <Typography color='primary'>street: {data?.street}</Typography>
              <Typography color='primary'>house: {data?.house}</Typography>
              <Typography color='primary'>zipcode: {data?.zipcode}</Typography>
            </FlexWrapper>
          </Box> */
}
