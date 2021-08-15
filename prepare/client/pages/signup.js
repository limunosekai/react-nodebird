import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../utils/useInput';
import styled from 'styled-components';
import { signUpRequestAction } from '../_actions/user_actions';
import { useDispatch, useSelector } from 'react-redux';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { isSigningUp } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch(signUpRequestAction({ data: { email, password, nickname } }));
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-email'>이메일</label>
          <br />
          <Input
            name='user-email'
            value={email}
            type='email'
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor='user-nick'>닉네임</label>
          <br />
          <Input
            name='user-nick'
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input
            name='user-password'
            type='password'
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호체크</label>
          <br />
          <Input
            name='user-password-check'
            type='password'
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: '20px' }}>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            가입 약관에 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button
            type='primary'
            htmlType='submit'
            onClick={onSubmit}
            loading={isSigningUp}
          >
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
