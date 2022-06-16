import React from 'react';

export interface FetchProps {
  firstName: string | unknown;
  lastName: string | unknown;
  email: string | unknown;
  city: string | unknown;
  house: string | unknown;
  street: string | unknown;
  zipcode: string | unknown;
}

type ResponseType = {
  token?: string;
  user?: string;
};

const fakeFetch = ({
  firstName,
  lastName,
  email,
  city,
  house,
  street,
  zipcode,
}: FetchProps) =>
  new Promise((success, failure) => {
    setTimeout(() => {
      if (email !== '' && city !== '') {
        success({
          token: 'dkas;jgsdndfd',
          user: {
            id: '1234',
            firstName,
            lastName,
            email,
            city,
            house,
            street,
            zipcode,
          },
        });
      } else {
        failure(new Error('Incorect email or/and password'));
      }
    }, 500);
  });

const login = async ({
  firstName,
  lastName,
  email,
  city,
  house,
  street,
  zipcode,
}: FetchProps) => {
  const response = await fakeFetch({
    firstName,
    lastName,
    email,
    city,
    house,
    street,
    zipcode,
  });
  return response as ResponseType;
};

export default {
  login,
};
