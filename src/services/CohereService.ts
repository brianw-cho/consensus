const CohereService = () => {

  const getConfidenceLevels = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer Z8mxASabtm6HhUITFQYqG3DPq6EIh1VGy56O1J29'
      },
      body: JSON.stringify({
        inputs: ['Confirm your email address', 'hey i need u to send some $'],
        examples: [
          {text: 'Dermatologists don\'t like her!', label: 'Spam'},
          {text: 'Hello, open to this?', label: 'Spam'},
          {text: 'I need help please wire me $1000 right now', label: 'Spam'},
          {text: 'Nice to know you ;)', label: 'Spam'},
          {text: 'Please help me?', label: 'Spam'},
          {text: 'Your parcel will be delivered today', label: 'Not spam'},
          {text: 'Review changes to our Terms and Conditions', label: 'Not spam'},
          {text: 'Weekly sync notes', label: 'Not spam'},
          {text: 'Re: Follow up from today’s meeting', label: 'Not spam'},
          {text: 'Pre-read for tomorrow', label: 'Not spam'}
        ],
        truncate: 'END'
      })
    };

    const getReviews = () => {
      
    }

    fetch('https://api.cohere.ai/classify', options)
    .then(response => response.json())
    .then(response => console.log(response["classifications"][0]["confidence"]))
    .catch(err => console.error(err));
  };

  

  return {
    getConfidenceLevels
  };
}

export default CohereService;