import React from 'react';
import { selectState } from 'state/slice';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { navigate } from 'gatsby';
import { UserCard } from 'components/UserCard.tsx/UserCard';
import { theme } from 'styles/theme';

import {
  Box,
  FlexWrapper,
  BaseButton,
  GridWrapper,
  Typography,
} from 'components';

interface IUserDataProps {
  city: string;
  email: string;
  firstName: string;
  house: number;
  lastName: string;
  length: number;
  street: string;
  zipcode: number;
  idx: number;
}
interface test {
  data: IUserDataProps;
}

const Grid: React.FC = () => {
  const checkstate = useSelector(selectState);
  const data = checkstate.auth.user;

  return (
    <Box>
      <RegisteredUsersGrid>
        <Box mb='s50'>
          <BaseButton type='button' onClick={() => navigate('/registration')}>
            Return to Registration
          </BaseButton>
          <Typography type='h3' color='primary' textAlign='center'>
            Employee count: {data?.length}
          </Typography>
        </Box>
        <GridWrapper
          gridTemplateColumns='repeat(3,1fr)'
          gap='3.125rem'
          m='auto'
          width='53.125rem'
        >
          {data?.map((userData: IUserDataProps, idx: number) => {
            return (
              <UserCard
                key={idx}
                firstName={userData.firstName}
                lastName={userData.lastName}
                email={userData.email}
                city={userData.city}
                street={userData.street}
                house={userData.house}
                zipcode={userData.zipcode}
                index={idx}
              />
            );
          })}
        </GridWrapper>
      </RegisteredUsersGrid>
    </Box>
  );
};

export default Grid;

const RegisteredUsersGrid = styled(Box)`
  margin: ${theme.space.s50};
`;
