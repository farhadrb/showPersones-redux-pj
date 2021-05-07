export const setshowPerson = ()=>{
    return async dispatch =>{
        await dispatch({type:'SHOW_PERSONS'})
    }
}