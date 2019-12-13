import { UPDATE_MESSAGE } from '../actions/types';

const INITIAL_STATE = '(Nenhuma mensagem até agora foi digitada)';

export default (state = INITIAL_STATE, { type, payload }) =>
  type === UPDATE_MESSAGE
    ? payload 
    : state