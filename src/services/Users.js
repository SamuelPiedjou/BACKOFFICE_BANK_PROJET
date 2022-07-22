/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:51:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import Axios from "axios";
import config from '../config/Index';

export default class UsersService {
  async getUsers() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/users`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  async getClients() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/user-extras`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  async getMotos() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/moto-extras`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  async getMA() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/school-extras`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  newUser = async (data) => {
    try {
      const response = await Axios.post(
        `${config.apiUrl}/register`,
        {
          adress: data.userAddress,
          cni: data.userCNI,
          firstName: data.userFirstName,
          lastName: data.userLastName,
          phone: data.userPhone,
          password: data.userPassword,
          login: data.userPhone,
          imageBase: data.baseImage
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //Authorization: localStorage.getItem('token')
          }
        }
      );
      //console.log(response);
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error));
      return Promise.reject(error);
    }
  };

  activate = async (data) => {
    //console.log(data)
    try {
      const response = await Axios.put(
        `${config.apiUrl}/users`,
        {
          id: data.id,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
     // console.log(response);
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error));
      return Promise.reject(error);
    }
  };

  desactivate = async (data) => {
    //console.log(data)
    try {
      const response = await Axios.put(
        `${config.apiUrl}/users`,
        {
          id: data.id,
          login: data.login,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          imageUrl: data.imageUrl,
          activated: false,
          langKey: data.langKey,
          /* createdBy: "anonymousUser",
          createdDate: "2021-12-28T13:20:12.467Z",
          lastModifiedBy: "anonymousUser",
          lastModifiedDate: "2021-12-28T13:20:12.467Z", */
          authorities: [
            "ROLE_SCHOOL"
          ]
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
     // console.log(response);
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error));
      return Promise.reject(error);
    }
  };

}
