import React, { useState, useEffect } from 'react';
import { Box, FlexWrapper, Typography } from 'components';
import { BaseButton } from 'components/buttons/elements/BaseButton';
import { useSelector } from 'react-redux';
import { selectState } from 'state/slice';
import { setDelete, loginSuccess } from 'state/slice';

import { useDispatch } from 'react-redux';

export const UserCard = ({
  firstName,
  lastName,
  email,
  city,
  street,
  house,
  zipcode,
  index,
  setUserData,
  userDataClone,
}) => {
  const [locationData, setLocationData] = useState();
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const userData = state.auth.user;
  const name = userData[index].firstName;

  const bam = userData?.filter(({ firstName }) => firstName !== name);
  const deleteGlobal = () => {
    dispatch(setDelete(bam));
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
    <Box key={firstName} bg='gray' p='50px' width='400px' borderRadius='24px'>
      <FlexWrapper gap='20px' flexDirection='column'>
        <Typography color='primary'>
          Name: {firstName} {lastName}
        </Typography>
        <Typography color='primary'>Email: {email}</Typography>
        <Typography color='primary'>City: {city}</Typography>
        <Typography color='primary'>Street: {street}</Typography>
        <Typography color='primary'>House: {house}</Typography>
        <Typography color='primary'>Zipcode: {zipcode}</Typography>
        <FlexWrapper flexDirection='column' alignItems='center'>
          <Typography color='primary'>
            Lat: {locationData?.results[0]?.geometry.location.lat}
          </Typography>
          <Typography color='primary'>
            Lng: {locationData?.results[0]?.geometry.location.lng}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
      <Box mt='30px'>
        <BaseButton type='button' onClick={() => deleteGlobal()}>
          Fire employee
        </BaseButton>
      </Box>
    </Box>
  );
};
