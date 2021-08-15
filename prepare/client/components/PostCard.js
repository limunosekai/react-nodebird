import { Card, Popover, Button, Space, Avatar, List, Comment } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { removePostRequest } from '../_actions/post_actions';

const { Meta } = Card;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const { me } = useSelector((state) => state.user);
  const { isRemovingPost } = useSelector((state) => state.post);
  // 옵셔널 체이닝 me.id가 없으면 undefined
  const id = me?.id;

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch(removePostRequest(post.id));
  }, []);

  return (
    <div style={{ marginBottom: '20px' }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,

          liked ? (
            <HeartTwoTone
              twoToneColor='#eb2f96'
              key='liked'
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key='unliked' onClick={onToggleLike} />
          ),

          <MessageOutlined key='comment' onClick={onToggleComment} />,
          <Popover
            key='more'
            content={
              <Space>
                {id && +post.User.id === +id ? (
                  <>
                    <Button>수정</Button>
                    <Button
                      type='danger'
                      loading={isRemovingPost}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Space>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Meta
          description={<PostCardContent postData={post.content} />}
          title={post.User.nickname}
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  // shape로 object 더 상세히 적는게 좋다
  post: PropTypes.shape({
    id: PropTypes.string,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
