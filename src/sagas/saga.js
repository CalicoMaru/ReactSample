import { put, takeEvery, all, call } from 'redux-saga/effects'
import axios from 'axios'

import { LOADING } from '../actions/productListActionTypes'
import { loadingProductDone, loadingProductError } from '../actions/productListAction'


const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users")
}

export function* workerSaga() {

  // const itemList = []
  // const { response, error } = yield call(fetchData)
  // if (response) {
  //   for (let x of response.data) {
  //     itemList.push({ name: x.name })
  //   }
  //   yield put({ type: LOADING_DONE, payload: itemList })
  // } else {
  //   yield put({ type: LOADING_ERROR, payload: error.message })
  // }

  try {
    const itemList = []
    const response = yield call(fetchData)
    for (let x of response.data) {
      itemList.push({ id: x.id, name: x.name })
    }

    yield put(
      loadingProductDone(itemList)
      //{ type: LOADING_DONE, payload: itemList }
      )

  } catch (error) {

    yield put(
      loadingProductError(error.message)
      //{ type: LOADING_ERROR, payload: error.message }
      )
  }
}

export function* watcherSaga() {
  yield takeEvery(LOADING, workerSaga)
}

export default function* rootSaga() {
  yield all([
    watcherSaga()
  ])
}