
const ReviewService = () => {
 



  let latitude = 0
  let longitude = 0
 
  const getReviews = () => {
    navigator.geolocation.getCurrentPosition(function(position)
    {
      latitude = position.coords.latitude
      longitude = position.coords.longitude
    }
    )
    
    
    
    let hotel_string = "ritz-carlton-hotel"
    let zoom = 15.1
    let ll_string = `@${latitude},${longitude},${zoom}z`
    let apiKey_string = '6a461a33a2f5a9b53c15e06349a270bc1df302df4434f9d18e78deda5703eee9'    

    fetch(`https://serpapi.com/search.json?engine=google_maps&q=${hotel_string}&ll=${ll_string}&type=search&api_key=${apiKey_string}`, {method: 'GET',
    // mode: 'no-cors',
    })
    .then(response => response.json())
    .then(function(result){})
    .catch(error => console.log('error', error))






    fetch(`https://serpapi.com/search.json?engine=google_maps&q=${hotel_string}&ll=${ll_string}&type=search&api_key=${apiKey_string}`, {method: 'GET',
    // mode: 'no-cors',
    })
    .then(response => response.json())
    .then(function(result){


        })
    .catch(error => console.log('error', error))
 
  };


  const getReviewsFromID = (dataID : String) => {
    let reviews: Array<string> = [];
    dataID = "0x89c259af336b3341:0xa4969e07ce3108de"
    let apiKey_string = '6a461a33a2f5a9b53c15e06349a270bc1df302df4434f9d18e78deda5703eee9'    

    fetch(`https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataID}&sort_by=newestFirst&api_key=${apiKey_string}`, {method: 'GET',
    })
    .then(response => response.json())
    .then(function(result){
      for(let i = 0; i<result["reviews"].length; i++){
        console.log(result["reviews"][i]["snippet"])
        reviews[i] = result["reviews"][i]["snippet"]
      }
  
    })
    .catch(error => console.log('error', error))
  
  
  return reviews
  
  }

  return {
    getReviews,
    getReviewsFromID
  };
};





export default ReviewService;