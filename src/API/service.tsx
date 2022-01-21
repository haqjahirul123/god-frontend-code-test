import axios from "axios";

 export async function retreiveData() {
    const url = "/api/cars.json";
    return axios.get(url).then((res) => {
      return res.data;
    }).catch(err => err);
  }