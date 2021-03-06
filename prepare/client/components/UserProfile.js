import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../_actions/user_actions';

const { Meta } = Card;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          짹짹
          <br />
          {me.Posts.length}
        </div>,
        <div key='followings'>
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key='followers'>
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={onLogout} loading={isLoggingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
