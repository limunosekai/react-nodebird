import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../_actions/user_actions';

const { Meta } = Card;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          짹짹
          <br />0
        </div>,
        <div key='followings'>
          팔로잉
          <br />0
        </div>,
        <div key='followers'>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Meta avatar={<Avatar>limu</Avatar>} title='limunosekai' />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
