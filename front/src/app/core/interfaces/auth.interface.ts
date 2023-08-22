export interface ISuccessfulLoggin {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}
