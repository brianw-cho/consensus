const CohereService = () => {

  const getConfidenceLevels = async (inputsRAW : String[]) => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer Z8mxASabtm6HhUITFQYqG3DPq6EIh1VGy56O1J29'
      },
      body: JSON.stringify({
        inputs: inputsRAW,
        examples: [
          {text: 'Staff was friendly', label: 'Positive'},
          {text: 'Staff was rude', label: 'Negative'},
          {text: 'Location is perfect', label: 'Positive'},
          {text: 'Location is far from attractions', label: 'Negative'},
          {text: 'The service was excellent', label: 'Positive'},
          {text: 'The service was subpar', label: 'Negative'},
          {text: 'The service was amazing', label: 'Positive'},
          {text: 'The beds are comfortable', label: 'Positive'},
          {text: 'The bedding was unconfortable', label: 'Negative'},
          {text: 'The caretakers are very well mannered', label: 'Positive'},
          {text: 'The caretakers are rude', label: 'Negative'},
          {text: 'The caretakers are very helpful', label: 'Positive'},
          {text: 'The caretakers are not helpful', label: 'Negative'},
          {text: 'The bedding was soft', label: 'Positive'},
          {text: 'The bed was hard', label: 'Negative'},
          {text: 'The room was clean', label: 'Positive'},
          {text: 'The room was dirty', label: 'Negative'},
          {text: 'The room was spacious', label: 'Positive'},
          {text: 'The room was small', label: 'Negative'},
          {text: 'The room was quiet', label: 'Positive'},
          {text: 'The room was noisy', label: 'Negative'},
          {text: 'The kitchen was clean', label: 'Positive'},
          {text: 'The kitchen was dirty', label: 'Negative'},
          {text: 'The pool was large', label: 'Positive'},
          {text: 'The pool was small', label: 'Negative'},
          {text: 'The pool was clean', label: 'Positive'},
          {text: 'The pool was dirty', label: 'Negative'},
          {text: 'The pool was well maintained', label: 'Positive'},
          {text: 'The pool was not well maintained', label: 'Negative'},
          {text: 'There were many ammeneties', label: 'Positive'},
          {text: 'There were few ammeneties', label: 'Negative'},
          {text: 'The breakfast was tasty', label: 'Positive'},
          {text: 'The breakfast was bland', label: 'Negative'},
          {text: 'The breakfast was plentiful', label: 'Positive'},
          {text: 'The breakfast was sparse', label: 'Negative'},
          {text: 'The breakfast was well prepared', label: 'Positive'},
          {text: 'The breakfast was poorly prepared', label: 'Negative'},
          {text: 'The breakfast was well presented', label: 'Positive'},
          {text: 'The breakfast was poorly presented', label: 'Negative'},
          {text: 'The breakfast was well stocked', label: 'Positive'},
          {text: 'The breakfast was poorly stocked', label: 'Negative'},
          {text: 'There was ample parking', label: 'Positive'},
          {text: 'There was little parking', label: 'Negative'},
          {text: 'The parking was free', label: 'Positive'},
          {text: 'The parking was not free', label: 'Negative'},
          {text: 'The view was spectacular', label: 'Positive'},
          {text: 'The view was not spectacular', label: 'Negative'},
          {text: 'The view was beautiful', label: 'Positive'},
          {text: 'The view was not beautiful', label: 'Negative'},
          {text: 'The view was breathtaking', label: 'Positive'},
          {text: 'The bathroom was dirty', label: 'Negative'},
          {text: 'The bathroom was clean', label: 'Positive'},
          {text: 'The lobby was modern', label: 'Positive'},
          {text: 'The lobby was old', label: 'Negative'},
          {text: 'The lobby was clean', label: 'Positive'},
          {text: 'The lobby was dirty', label: 'Negative'},
          {text: 'The lobby was spacious', label: 'Positive'},
          {text: 'The lobby was small', label: 'Negative'},
          {text: 'The lobby was well lit', label: 'Positive'},
          {text: 'The lobby was poorly lit', label: 'Negative'},
          {text: 'The lobby was well decorated', label: 'Positive'},
          {text: 'The lobby was poorly decorated', label: 'Negative'},
          {text: 'The internet was slow', label: 'Negative'},
          {text: 'The internet was fast', label: 'Positive'},
          {text: 'The internet was free', label: 'Positive'},
          {text: 'The internet was not free', label: 'Negative'},
          {text: 'The internet was reliable', label: 'Positive'},
          {text: 'The internet was not reliable', label: 'Negative'},
          {text: 'The internet was strong', label: 'Positive'},
          {text: 'The internet was weak', label: 'Negative'}
        ],
        truncate: 'END'
      })
    };

    

    return await fetch('https://api.cohere.ai/classify', options)
    .then(response => response.json())
    .then(response => response["classifications"][0]["prediction"])
    .catch(err => console.error(err));
  };

  const getConfidenceLevelsIndividual = async (inputsRAW : String) => {
    let inputsRAW_ARRAY = []
    inputsRAW_ARRAY[0] = inputsRAW
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer Z8mxASabtm6HhUITFQYqG3DPq6EIh1VGy56O1J29'
      },
      body: JSON.stringify({
        inputs: inputsRAW_ARRAY,
        examples: [
          {text: 'Staff was very friendly', label: 'Positive'},
          {text: 'Staff was rude', label: 'Negative'},
          {text: 'Location is perfect', label: 'Positive'},
          {text: 'Location is a bit far from attractions', label: 'Negative'},
          {text: 'The service was excellent', label: 'Positive'},
          {text: 'the room service was subpar', label: 'Negative'},
          {text: 'the service was superb', label: 'Positive'},
          {text: 'The beds are comfortable', label: 'Positive'},
          {text: 'The bedding was unconfortable', label: 'Negative'},
          {text: 'The caretakers are very well mannered', label: 'Positive'},
          {text: 'The caretakers are rude', label: 'Negative'},
          {text: 'The caretakers are very helpful', label: 'Positive'},
          {text: 'The caretakers are not helpful', label: 'Negative'},
          {text: 'The bedding was soft', label: 'Positive'},
          {text: 'The bed was hard', label: 'Negative'},
          {text: 'The room was clean', label: 'Positive'},
          {text: 'The room was dirty', label: 'Negative'},
          {text: 'The room was spacious', label: 'Positive'},
          {text: 'The room was small', label: 'Negative'},
          {text: 'The room was quiet', label: 'Positive'},
          {text: 'The room was noisy', label: 'Negative'},
          {text: 'The kitchen was clean', label: 'Positive'},
          {text: 'The kitchen was dirty', label: 'Negative'},
          {text: 'The pool was large', label: 'Positive'},
          {text: 'The pool was small', label: 'Negative'},
          {text: 'The pool was clean', label: 'Positive'},
          {text: 'The pool was dirty', label: 'Negative'},
          {text: 'The pool was well maintained', label: 'Positive'},
          {text: 'The pool was not well maintained', label: 'Negative'},
          {text: 'There were many ammeneties', label: 'Positive'},
          {text: 'There were few ammeneties', label: 'Negative'},
          {text: 'The breakfast was tasty', label: 'Positive'},
          {text: 'The breakfast was bland', label: 'Negative'},
          {text: 'The breakfast was plentiful', label: 'Positive'},
          {text: 'The breakfast was sparse', label: 'Negative'},
          {text: 'The breakfast was well prepared', label: 'Positive'},
          {text: 'The breakfast was poorly prepared', label: 'Negative'},
          {text: 'The breakfast was well presented', label: 'Positive'},
          {text: 'The breakfast was poorly presented', label: 'Negative'},
          {text: 'The breakfast was well stocked', label: 'Positive'},
          {text: 'The breakfast was poorly stocked', label: 'Negative'},
          {text: 'There was ample parking', label: 'Positive'},
          {text: 'There was little parking', label: 'Negative'},
          {text: 'The parking was free', label: 'Positive'},
          {text: 'The parking was not free', label: 'Negative'},
          {text: 'The view was spectacular', label: 'Positive'},
          {text: 'The view was not spectacular', label: 'Negative'},
          {text: 'The view was beautiful', label: 'Positive'},
          {text: 'The view was not beautiful', label: 'Negative'},
          {text: 'The view was breathtaking', label: 'Positive'},
          {text: 'The bathroom was dirty', label: 'Negative'},
          {text: 'The bathroom was clean', label: 'Positive'},
          {text: 'The lobby was modern', label: 'Positive'},
          {text: 'The lobby was old', label: 'Negative'},
          {text: 'The lobby was clean', label: 'Positive'},
          {text: 'The lobby was dirty', label: 'Negative'},
          {text: 'The lobby was spacious', label: 'Positive'},
          {text: 'The lobby was small', label: 'Negative'},
          {text: 'The lobby was well lit', label: 'Positive'},
          {text: 'The lobby was poorly lit', label: 'Negative'},
          {text: 'The lobby was well decorated', label: 'Positive'},
          {text: 'The lobby was poorly decorated', label: 'Negative'},
          {text: 'The internet was slow', label: 'Negative'},
          {text: 'The internet was fast', label: 'Positive'},
          {text: 'The internet was free', label: 'Positive'},
          {text: 'The internet was not free', label: 'Negative'},
          {text: 'The internet was reliable', label: 'Positive'},
          {text: 'The internet was not reliable', label: 'Negative'},
          {text: 'The internet was strong', label: 'Positive'},
          {text: 'The internet was weak', label: 'Negative'}
        ],
        truncate: 'END'
      })
    };

    

    fetch('https://api.cohere.ai/classify', options)
    .then(response => response.json())
    .then(response => console.log(response["classifications"][0]["prediction"]))
    .catch(err => console.error(err));
  };



  return {
    getConfidenceLevels,
    getConfidenceLevelsIndividual
  };
}

export default CohereService;