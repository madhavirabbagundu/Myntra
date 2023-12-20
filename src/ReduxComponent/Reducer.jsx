const number = "number";

function Reducer(state=number,action){
    console.log(state,action.payload,"payload")
  
    switch(action.type){
        case "Number":
            return state;

            default:
                return "678"
    }

}
export { Reducer }