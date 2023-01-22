const keyword_extractor = require("keyword-extractor");

const KeywordsService = () => {

    const getKeywords = async (reviews: string[]) => {
        let reviews_aggregate: Array<Array<string>> = [];
        let counter = 0
        for (let i = 0; i < reviews.length; i++) {
            let review = reviews[i];
            let extraction_result = keyword_extractor.extract(review, {
                language: "english",
                remove_digits: true,
                return_changed_case: true,
                return_chained_words: true,
                remove_duplicates: false
            });
            reviews_aggregate[counter] = extraction_result
            counter++
        }
  
        return reviews_aggregate
    
  }

  const countKeywords = (allKeywords: string[][]) => {
    let wordCounts: Record<string, number> = { };
    let wordUnique = [];
    let counter = 0;
    for(let i = 0; i<10; i++){
        for(let j = 0; j<allKeywords[i].length; j++){
            if(!wordCounts[allKeywords[i][j]]){
                wordUnique[counter] = allKeywords[i][j]
                counter++
            }
            wordCounts[allKeywords[i][j]] = (wordCounts[allKeywords[i][j]] || 0) + 1;
        }
    }
    
    let first_used: String = ""
    let first_count: number = 0
    let second_used: String = ""
    let second_count: number = 0
    let third_used: String = ""
    let third_count: number = 0
    let fourth_used: String = ""
    let fourth_count: number = 0
    let finalArray = []

    for(let i = 0; i<wordUnique.length; i++){
        if(wordUnique[i] === "...more" || wordUnique[i] === "average" || wordUnique[i] === "hotel" || wordUnique[i] === "place" || wordUnique[i] === "stay"){
            continue;
        }
        if(wordCounts[wordUnique[i]] >= first_count){
            fourth_count = third_count
            fourth_used = third_used
            third_count = second_count
            third_used = second_used
            second_count = first_count
            second_used = first_used
            first_count = wordCounts[wordUnique[i]]
            first_used = wordUnique[i]
        }
        else if(wordCounts[wordUnique[i]] >= second_count){
            fourth_count = third_count
            fourth_used = third_used
            third_count = second_count
            third_used = second_used
            second_count = wordCounts[wordUnique[i]]
            second_used = wordUnique[i]
        }
        else if(wordCounts[wordUnique[i]] >= third_count){
            fourth_count = third_count
            fourth_used = third_used
            third_count = wordCounts[wordUnique[i]]
            third_used = wordUnique[i]
        }
        else if(wordCounts[wordUnique[i]] >= fourth_count){
            fourth_count = wordCounts[wordUnique[i]]
            fourth_used = wordUnique[i]
        }

        finalArray[0] = [first_used, first_count]
        finalArray[1] = [second_used, second_count]
        finalArray[2] = [third_used, third_count]
        finalArray[3] = [fourth_used, fourth_count]

    }

    return finalArray;

  }
  return {
    getKeywords,
    countKeywords
}
}
  export default KeywordsService;