import { RAPID_API_HOST, RAPID_API_KEY } from "@env"

const fetchDataCards = async (url, method) => {

    const response = await fetch(url, {
        "method": method,
        "headers": {
            "x-rapidapi-host": RAPID_API_HOST,
            "x-rapidapi-key": RAPID_API_KEY
        }
    });

    try{

        if (response && response.status == "200") {
            const result = await response.json();
            return result;
        }else{
            throw Error(response.status, response.statusText)
        }

    }catch(err){
       console.log(err)
    }
}

export default fetchDataCards;