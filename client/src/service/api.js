import axios from "axios";

export const getNews = async()=> {
    try {
        return await axios.get('http://localhost:8000/news')
    }
    catch (error){
        console.log("Error while getting news : ",error)
    }
}

