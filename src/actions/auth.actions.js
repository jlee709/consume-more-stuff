import Axios from 'axios';

const register = '/api/auth/register';
const login = '/api/auth/login';
const logout = '/api/auth/logout';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ERROR = 'ERROR';

export const registerUser = (registerCreds) => {
  return (dispatch) => {
    return Axios.post(register, registerCreds)
    .then(response => {
        dispatch({
          type: REGISTER_USER,
          newUser: response.data
       });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};


export const loginUser = (userCreds) => {
  return (dispatch) => {
    return Axios.post(login, userCreds)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: LOGIN_USER,
          userDetails: response.data
        });
      }
    })
    .catch((err) => {
      console.log('Login Failed. Please re-enter your username and password.', err);
      return false;
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return Axios.get(logout)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: LOGOUT_USER,
          success: response.data.success
        });
      }
    });
  };
};
