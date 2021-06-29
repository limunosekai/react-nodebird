import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const { Search } = Input;

const NicknameEditForm = () => {
  // useMemo를 이용한 불필요한 리렌더 방지
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    []
  );

  return (
    <Form>
      <Search style={style} addonBefore='닉네임' enterButton='수정' />
    </Form>
  );
};

export default NicknameEditForm;
