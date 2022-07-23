/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:04:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import Axios from "axios";
import config from '../config/Index';

export default class BookingsService {
  async getBookings() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/bookings`,
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

  async getAccount(){
    try {
      const response = await Axios.get(
        `http://172.21.253.133:8086/accounts/listAccount`,
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

  async searchBookings(data) {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/booking-gasesByUser_Id/{userId}?userId=${data.user}`,
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

  async updateBooking(data) {
    try {
      const response = await Axios.put(
        `${config.apiUrl}/bookings`,
          {
            id: data.bookingId,
            user: {
              id: JSON.parse(localStorage.getItem("bookingDetails")).user.id
            }, 
            motoExtra: {
              id: data.moto
            },
            date: JSON.parse(localStorage.getItem("bookingDetails")).date,
            hour: JSON.parse(localStorage.getItem("bookingDetails")).hour,
            minute: JSON.parse(localStorage.getItem("bookingDetails")).minute,
            beginMap: {
              id: JSON.parse(localStorage.getItem("bookingDetails")).beginMap.id,
              latitude: JSON.parse(localStorage.getItem("bookingDetails")).beginMap.latitude,
              longitude: JSON.parse(localStorage.getItem("bookingDetails")).beginMap.longitude
            },
            endMap: {
              id: JSON.parse(localStorage.getItem("bookingDetails")).endMap.id,
              latitude: JSON.parse(localStorage.getItem("bookingDetails")).endMap.latitude,
              longitude: JSON.parse(localStorage.getItem("bookingDetails")).endMap.longitude
            }
          },{
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            }
        }
      );
      //console.log(response)
      return response;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }
}
