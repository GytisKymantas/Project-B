const fakeFetch = ({
  firstName,
  lastName,
  email,
  city,
  house,
  street,
  zipcode,
}) =>
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
}) => {
  const response = await fakeFetch({
    firstName,
    lastName,
    email,
    city,
    house,
    street,
    zipcode,
  });
  return response;
};

export default {
  login,
};
