import Axios from 'axios';
import config from '../config/Index';

export default class AuthService {
  async login(data) {
    try {
      //console.log('data from auth service is ', data);
      const response = await Axios.post(`${config.apiUrl}/authenticate`, {
        username: data.username,
        password: data.password
      });
      //console.log('response', JSON.stringify(response));
      if (response.data.id_token) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('token', response.data.id_token); 
        return response.data.id_token;
      } else {
        return Promise.reject({
          errors: response.data.message
        });
      }
    } catch (errors) {
      return Promise.reject({ errors });
    }
  }

}