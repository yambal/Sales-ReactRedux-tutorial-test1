import request from 'superagent'

export const onAddCount = (count, countHistory) => ({
    type: 'ADD',
    payload: {
      count,
      countHistory
    }
})

export const onReduceCount = (count, countHistory) => ({
    type: 'REDUCE',
    payload: {
      count,
      countHistory
    }
})

export const onChangeButton = isAdd => ({
    type: 'CHANGE_BUTTON',
    payload: {isAdd}
})

export function onSetUser(user){
  return dispatch => {
    dispatch(requestPost(user))
    const url = 'http://0.0.0.0:8080/api/user/signin'
    return request
            .post(url)
            .set('Content-Type', 'application/json')
            .send({
              user: user
            })
            .then((res) => {
              dispatch(receivePost(res.body))
              localStorage.setItem('count_user', JSON.stringify(res.body))
              window.location = '/count'
            })
            .catch((err) => {
              console.log(err)
            })
  }
}

const requestPost = user => ({
  type: 'REQUEST_POST',
  payload: {user}
})

const receivePost = user => ({
  type: "RECEIVE_POST",
  payload: {user}
})
