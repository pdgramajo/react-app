import * as actionTypes from './constants';
import Api from '../../api';
//  const getCountries = ()=>{
// dispatch => Api.get(countries).then(
//     response => dispatch({type:actionTypes.LOAD_COUNTRIES,data:{countries: response.data}})
//     , error => console.log('+++++++',error)
// )
// }
// export {getCountries}
// export function getCountries() {
//     return (dispatch) => {
//         return Api.get('Countries').then(
//             response => {
//                 dispatch({ type: actionTypes.LOAD_COUNTRIES, data: response })
//             }
//         )
//     }
// } 

export function getCountries() {
    return (dispatch) => {
        //return //Api.get('Countries').then(
            //response => {
                console.log('Api',Api)
              return  dispatch({ type: actionTypes.LOAD_COUNTRIES, data: [{
                "id": 1,
                "name": "China",
                "code": "CN"
              }] })
            //}
        //)
    }
} 