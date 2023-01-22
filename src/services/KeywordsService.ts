const keyword_extractor = require("keyword-extractor");

const KeywordsService = () => {

    const getKeywords = (reviews: string[]) => {
        for (let i = 0; i < reviews.length; i++) {
            let review = reviews[i];
            let extraction_result = keyword_extractor.extract(review, {
                language: "english",
                remove_digits: true,
                return_changed_case: true,
                remove_duplicates: false
            });
            console.log(extraction_result);
        }
  
  
    
  }
  return {
    getKeywords
  
};
}
  export default KeywordsService;