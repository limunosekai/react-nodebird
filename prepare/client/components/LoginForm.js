import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../utils/useInput';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedin }) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedin(true);
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

LoginForm.propTypes = {
  setIsLoggedin: PropTypes.func.isRequired,
};

export default LoginForm;
