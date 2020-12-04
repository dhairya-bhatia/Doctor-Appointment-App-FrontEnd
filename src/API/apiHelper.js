const makeApiCall = async (url, paramsObj = {}) => {
  let response = await fetch(url, paramsObj);
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    console.log(response.status);
  }
};

export default makeApiCall;
