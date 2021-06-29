import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';

const { Meta } = Card;

const UserProfile = ({ setIsLoggedin }) => {
  const onLogout = useCallback(() => {
    setIsLoggedin(false);
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
