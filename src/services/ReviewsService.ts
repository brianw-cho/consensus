
import Location from "../models/Location";

const ReviewService = () => {
 
  let latitude = 0
  let longitude = 0
 
  const getLocation = async (hotel_string : String) => {


    var promise1 = new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(function(pos){
          latitude = pos.coords.latitude
          longitude = pos.coords.longitude
            resolve({latitude,longitude});
        }) 
    })
    
    const locList: Location[] = await promise1.then(async function() {
      let zoom = 15.1
      let ll_string = `@${latitude},${longitude},${zoom}z`
      let apiKey_string = '8ac3491226abfa32da82bbca0b588455e4105df420f643755e4f82fdebf4ea11'    
  
  
      
      const locationList = await fetch(`https://serpapi.com/search.json?engine=google_maps&q=${hotel_string}&ll=${ll_string}&type=search&api_key=${apiKey_string}`, {method: 'GET',
      // mode: 'no-cors',
      })
      .then(response => response.json())
      .then(function(result){
        let locationList: Array<Location> = [];
          if (result["local_results"]) {
            let placesAvail = result["local_results"]
            for(let i = 0; i<placesAvail.length; i++){
                let tempTitle = placesAvail[i]["title"]
                let tempData_id = placesAvail[i]["data_id"]
                let tempAddress = placesAvail[i]["address"]
                let tempRating = placesAvail[i]["rating"]
                let tempThumbnail = placesAvail[i]["thumbnail"]
                let tempWebsite = placesAvail[i]["website"]
                let tempReviews = placesAvail[i]["reviews"]
                locationList[i] = {
                  title: tempTitle,
                  data_id: tempData_id,
                  address: tempAddress,
                  rating: tempRating,
                  thumbnail: tempThumbnail,
                  website: tempWebsite,
                  numReviews: tempReviews
                }
              }
          }
          else{
            let placesAvail = result["place_results"]
            let tempTitle = placesAvail["title"]
                let tempData_id = placesAvail["data_id"]
                let tempAddress = placesAvail["address"]
                let tempRating = placesAvail["rating"]
                let tempThumbnail = placesAvail["thumbnail"]
                let tempWebsite = placesAvail["website"]
                let tempReviews = placesAvail["reviews"]
                locationList[0] = {
                  title: tempTitle,
                  data_id: tempData_id,
                  address: tempAddress,
                  rating: tempRating,
                  thumbnail: tempThumbnail,
                  website: tempWebsite,
                  numReviews: tempReviews
                }
          }
          
            return locationList;
          })
      .catch(error => console.log('error', error))
          
      return locationList;
    }) as Location[];

      
      return locList;
  }

  const getReviewsFromID = async (locationObj : Location) => {
    let reviews: Array<string> = [];
    let dataID = locationObj.data_id
    let apiKey_string = '8ac3491226abfa32da82bbca0b588455e4105df420f643755e4f82fdebf4ea11'    

    await fetch(`https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataID}&sort_by=newestFirst&api_key=${apiKey_string}`, {method: 'GET',
    })
    .then(response => response.json())
    .then(function(result){
      for(let i = 0; i<result["reviews"].length; i++){
        reviews[i] = result["reviews"][i]["snippet"]
      }
  
    })
    .catch(error => console.log('error', error))
  
  
  return reviews
  
  }

  const filterReviews = (reviews : String[]) => {
    for(let i = 0; i < reviews.length; i++){
      if(reviews[i] == undefined){
        reviews[i] = "Above Average"
      }
    }
  return reviews
  
  }



  return {
    getLocation,
    getReviewsFromID,
    filterReviews
  };
};





export default ReviewService;