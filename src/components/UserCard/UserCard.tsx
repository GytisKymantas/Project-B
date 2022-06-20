import React, { useState, useEffect } from 'react';
import { Box, FlexWrapper, Typography } from 'components';
import { BaseButton } from 'components/buttons/elements/BaseButton';
import { useSelector } from 'react-redux';
import { selectState } from 'state/slice';
import { setDelete } from 'state/slice';
import Map from 'components/Map/Map';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { IAuth } from 'state/types';
import { UserCardProps } from 'state/types';

export interface IUserDataProps {
  city: string;
  email: string;
  firstName: string;
  house: number;
  id: string;
  lastName: string;
  street: string;
  zipcode: number;
}

export const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  email,
  city,
  street,
  house,
  zipcode,
  index,
}) => {
  const [locationData, setLocationData] = useState<IAuth>();
  const [selected, setSelected] = useState(false);
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const userData: IUserDataProps[] = state!.auth!.user!;
  const name = userData[index]!.firstName!;

  const latitude = locationData?.results[0]?.geometry.location.lat;
  const longitude = locationData?.results[0]?.geometry.location.lng;

  const deleteUser = userData?.filter(
    ({ firstName }: IUserDataProps) => firstName !== name
  );
  const deleteGlobal = () => {
    dispatch(setDelete(deleteUser));
  };

  function getCoordinates() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${street}+${house}+${zipcode}&key=AIzaSyAiwtIaQV5iz-CowHZoKUVBXLNIL4yNwxA`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
      });
  }

  useEffect(() => getCoordinates(), []);

  return (
    <EmployeeCard
      width='25rem'
      borderRadius='br24'
      onClick={() => setSelected(!selected)}
      bg={selected ? 'secondary' : 'gray'}
      boxShadow='default'
    >
      <FlexWrapper justifyContent='center' mt='s20'></FlexWrapper>
      <Box p='s50' borderRadius='br24'>
        <FlexWrapper gap='1.25rem' flexDirection='column'>
          <Typography color='primary'>
            Name: {firstName} {lastName}
          </Typography>
          <Typography color='primary'>Email: {email}</Typography>
          <Typography color='primary'>City: {city}</Typography>
          <Typography color='primary'>Street: {street}</Typography>
          <Typography color='primary'>House: {house}</Typography>
          <Typography color='primary'>Zipcode: {zipcode}</Typography>
          <FlexWrapper flexDirection='column' alignItems='center'>
            <Typography color='primary'>Lat: {latitude}</Typography>
            <Typography color='primary'>Lng: {longitude}</Typography>
          </FlexWrapper>
        </FlexWrapper>
        <Box mt='s30'>
          <BaseButton type='button' onClick={() => deleteGlobal()}>
            Fire employee
          </BaseButton>
        </Box>
      </Box>
      <Box>
        <Map latitude={latitude} longitude={longitude} />
      </Box>
    </EmployeeCard>
  );
};

const EmployeeCard = styled(Box)`
  cursor: pointer;
`;
