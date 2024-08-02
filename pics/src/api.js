import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID QoM2aQhgWmn81IF-hIZUnG7otj8eMs14btCWjWaGaaM',       
        },
        params: {
            query: term,
        },

    });

    //console.log(response);
    return response.data.results;
};

export default searchImages;