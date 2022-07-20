import Axios from "axios";
import config from '../config/Index';

export default class DashboardService {
  async getDashboard() {
    try {
      const response = await Axios.get(
        `${config.apiUrl}/afb-payment-api/dashboard/getDashboard`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response.data.value)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }
}
