const GET_IMAGE = "GET_IMAGE";

const initialState =
{
   imgurl:'',
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        imgurl:action.payload
      }
    default:
      return state;
  }
};
export default rootReducer;



 