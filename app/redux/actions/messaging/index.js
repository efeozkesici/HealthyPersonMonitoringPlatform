const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
          acc[type] = `${base}_${type}`
          return acc
      }, {})
  }
  
  function action(type, payload = {}) {
    return {type, ...payload}
  }
  
  export const SEND_MESSAGE = createRequestTypes('SEND_MESSAGE')
  export const sendMessage = {
    request: (senderId, receiverId, message) => action(SEND_MESSAGE[REQUEST], {senderId, receiverId, message}),
    success: (receiverId, message) => action(SEND_MESSAGE[SUCCESS], {receiverId, message}),
    failure: error => action(SEND_MESSAGE[FAILURE], {error}),
  }
  
  export const GET_MESSAGES = createRequestTypes('GET_MESSAGES')
  export const getMessages = {
    request: (senderId, receiverId) => action(GET_MESSAGES[REQUEST], {senderId, receiverId}),
    success: (messages) => action(GET_MESSAGES[SUCCESS], {messages}),
    failure: error => action(GET_MESSAGES[FAILURE], {error}),
  }
  
  export const GET_MESSAGING = createRequestTypes('GET_MESSAGING')
  export const getMessaging = {
    request: (userId) => action(GET_MESSAGING[REQUEST], {userId}),
    success: (messaging) => action(GET_MESSAGING[SUCCESS], {messaging}),
    failure: error => action(GET_MESSAGING[FAILURE], {error}),
  }
  
  export const SET_MESSAGE_LISTENER = createRequestTypes('SET_MESSAGE_LISTENER')
  export const setMessageListener = {
    request: (senderId, receiverId) => action(SET_MESSAGE_LISTENER[REQUEST], {senderId, receiverId}),
    success: (message) => action(SET_MESSAGE_LISTENER[SUCCESS], {message}),
    failure: error => action(SET_MESSAGE_LISTENER[FAILURE], {error}),
  }