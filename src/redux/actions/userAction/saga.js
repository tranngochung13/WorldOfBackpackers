import {call, put, takeLatest} from 'redux-saga/effects';
import * as Types from './action';
import {register, login} from '../../../api/user';
import {onChangeIntoMainScreen} from '../../../navigation';
import {AsyncStorage} from 'react-native';

function* registerSaga(action) {
  try {
    const response = yield call(register, action.payload);
    yield put(Types.addUserSuccess(response.data));
    onChangeIntoMainScreen();
  } catch (error) {
    console.log(error);

    yield put(Types.addUserFailure({error}));
  }
}

function* loginSaga(action) {  
  try {
    // const response = yield call(action.payload);
    console.log('res: ', action.payload);
    
    yield put(Types.loginUserSuccess(action.payload));
    AsyncStorage.setItem('token', JSON.stringify(action.payload));
    onChangeIntoMainScreen();
  } catch (error) {
    // console.log('res: ', error);
    yield put(Types.loginUserFailure({error}));
  }
}

export function* userSagas() {
  yield takeLatest(Types.ADD_USER, registerSaga);
  yield takeLatest(Types.LOGIN_USER, loginSaga);
}
