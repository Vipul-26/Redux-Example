export const getImage = (inputtext) => {
  return {
    type: 'GET_IMAGE',
    payload: "https://joeschmoe.io/api/v1/" + inputtext,
  };
};
