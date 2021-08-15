import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

/*
  fork - 비동기 함수 호출
  call - 동기 함수 호출, async/await과 비슷
  fork와 call은 함수에 전달하고자 하는 데이터를
  펼쳐서 적어야한다. loginAPI(action.payload) X 
  all - 동시 실행해준다
  put - dispatch 같은 개념
  take - 한 번 불려지면 사라지는 단점
  takeEvery - 비동기적으로 동작하면서 take에 while문
  루프 돌린것과 같은 효과를 낸다
  takeLatest - 여러번 요청이 들어오면 앞에꺼 무시하고
  제일 마지막 응답만 받아들인다. 다만, 프론트단에서만
  응답을 취소하는 것이라 서버는 그대로 요청이 여러번
  들어갈 수 있다.
  takeLeading - takeLatest 반대, 첫번째것만
  throttle - 처음 요청이 들어오면 지정해놓은 시간동안의
  다른 요청은 무시된다
  debounce - 지정해놓은 시간동안 가장 마지막 요청만 받음
  delay - setTimeout 같은 기능
*/

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
