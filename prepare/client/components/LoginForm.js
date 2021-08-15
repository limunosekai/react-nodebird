import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../utils/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../_actions/user_actions';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, isSigningUp } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    // onFinish에는 e.preventDefault()가 적용되어있다
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>이메일</label>
        <br />
        <Input name='user-id' value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <BtnWrapper>
        <Button type='primary' htmlType='submit' loading={isLoggingIn}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button loading={isSigningUp}>회원가입</Button>
          </a>
        </Link>
      </BtnWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
