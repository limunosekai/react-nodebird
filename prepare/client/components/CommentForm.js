import { Form, Input, Button } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../utils/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const { TextArea } = Input;

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.me?.id);
  const [commentText, setCommentText] = useState('');

  const onChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const onSubmitComment = useCallback(() => {
    setCommentText('');
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <TextArea value={commentText} rows={4} onChange={onChangeCommentText} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: '-40px' }}
          type='primary'
          htmlType='submit'
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
