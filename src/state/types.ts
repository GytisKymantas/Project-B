export interface IuserSlice {
  loggedIn: boolean;
  token: null;
  user: null;
}
export interface InitialStateTypes {
  auth: IuserSlice;
}
