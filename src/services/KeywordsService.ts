const keyword_extractor = require("keyword-extractor");

const KeywordsService = () => {

    const getKeywords = async (reviews: string[]) => {
        let reviews_aggregate: Array<Array<String>> = [];
        let counter = 0
        for (let i = 0; i < reviews.length; i++) {
            let review = reviews[i];
            let extraction_result = keyword_extractor.extract(review, {
                language: "english",
                remove_digits: true,
                return_changed_case: true,
                remove_duplicates: false
            });
            reviews_aggregate[counter] = extraction_result
            counter++
        }
  
        return reviews_aggregate
    
  }
  return {
    getKeywords 
}
}
  export default KeywordsService;