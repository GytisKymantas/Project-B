const fakeFetch = ({
  firstName,
  lastName,
  email,
  city,
  street,
  house,
  zipcode,
}) =>
  new Promise((success, failure) => {
    setTimeout(() => {
      if (
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        city !== '' &&
        street !== '' &&
        house !== '' &&
        zipcode !== ''
      ) {
        success({
          firstName,
          lastName,
          email,
          city,
          street,
          house,
          zipcode,
          user: {
            id: '1234',
            email: 'frontend@isawesome.com',
          },
        });
      } else {
        failure(new Error('Missing information!'));
      }
    }, 2000);
  });

const login = async ({
  firstName,
  lastName,
  email,
  city,
  street,
  house,
  zipcode,
}) => {
  const response = await fakeFetch({
    firstName,
    lastName,
    email,
    city,
    street,
    house,
    zipcode,
  });
  return response;
};

export default {
  login,
};
