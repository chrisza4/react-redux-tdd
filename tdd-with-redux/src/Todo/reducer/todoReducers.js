import { actionTypes } from '../actionCreators/todoActions'
import dataSet from '../../dataSource'

export default function (state = dataSet, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const newData = {
        ...action.data,
        isCompleted: false
      }
      return [ ...state, newData ]
    }
    default: return state
  }
}
