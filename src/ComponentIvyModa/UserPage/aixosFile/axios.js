
import axios from "axios";

const fetchAlluser = (props) => {
    return axios.get("https://reqres.in/api/users?page=2");
}

export default {fetchAlluser};