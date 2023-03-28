import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'522f88b1db2345808bcb5bf3400fcea0'
    }
})