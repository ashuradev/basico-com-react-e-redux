import { UPDATE_MESSAGE } from './types'

export const updateMessage = (newMessage) => ({
  type: UPDATE_MESSAGE,
  payload: newMessage,
})