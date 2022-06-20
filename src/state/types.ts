import { FetchProps } from 'service/api-service';
export interface UserCardProps extends FetchProps {
  zipcode: number;
  index: number;
}

interface ICoords {
  lat: number;
  lng: number;
}

interface ILocation {
  location: ICoords;
}

interface IGeometry {
  geometry: ILocation;
}

export interface IAuth {
  results: IGeometry[];
}

export interface IuserSlice {
  loggedIn: boolean;
  token: null;
  user: null;
}
export interface InitialStateTypes {
  auth: IuserSlice;
}
