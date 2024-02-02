import axios from "axios";

const Instanse = axios.create({
  baseURL: "https://greenlifeuz.onrender.com/greenlife",
});

export default Instanse;
