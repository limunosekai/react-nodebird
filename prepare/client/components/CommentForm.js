import { Form, Input, Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addCommentReqeust } from '../_actions/post_actions';

const { TextArea } = Input;

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.me?.id);
  const { commentAdded, isAddingComment } = useSelector((state) => state.post);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (commentAdded) {
      setCommentText('');
    }
  }, [commentAdded]);

  const onChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const onSubmitComment = useCallback(() => {
    dispatch(
      addCommentReqeust({ content: commentText, postId: post.id, userId: id })
    );
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <TextArea value={commentText} rows={4} onChange={onChangeCommentText} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: '-40px', zIndex: 1 }}
          type='primary'
          htmlType='submit'
          loading={isAddingComment}
        >
          등록
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
