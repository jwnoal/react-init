// import axios from 'axios'
const ERROR_MSG = 'ERROR_MSG'
const initState={
	redirectTo:''
}
// reducer
export function user(state=initState, action){
	switch(action.type){
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		default:
			return state
	}
} 
