import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  unfollowRequestAction,
  followRequestAction,
} from '../_actions/user_actions';

function FollowButton({ post }) {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    (state) => state.user
  );

  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch(unfollowRequestAction(post?.User.id));
    } else {
      dispatch(followRequestAction(post?.User.id));
    }
  }, [isFollowing]);
  return (
    <Button onClick={onClickButton} loading={followLoading || unfollowLoading}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  );
}

FollowButton.propTypes = {
  post: propTypes.object.isRequired,
};

export default FollowButton;
