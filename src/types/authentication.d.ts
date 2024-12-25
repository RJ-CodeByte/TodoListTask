/*  interface for Login form type */
type LoginFormParamsType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  token?:string;
  email:string;
}