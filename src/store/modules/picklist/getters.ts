import { GetterTree } from 'vuex'
import PicklistState from './PicklistState';
import RootState from '@/store/RootState'

const getters: GetterTree <PicklistState, RootState> = {
  getPicklists (state) {
    return state.list;
  },
  getCurrent (state) {
    return state.current;
  },
  getCompleted (state) {
    return state.completed;
  }
}
export default getters;
