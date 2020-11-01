const API_KEY = "AIzaSyB7lFp8W_c2z5ksXsY139Jhsq-2v_hbhpk"

const requests = {
    fecthTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
    fetchTopRated:  `/movie/top_rated?api_key=${API_KEY}&language=en=-US`,
    
}
