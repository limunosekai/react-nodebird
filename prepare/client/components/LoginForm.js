import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../utils/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../_actions/user_actions';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    // onFinish에는 e.preventDefault()가 적용되어있다
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
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
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </BtnWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
