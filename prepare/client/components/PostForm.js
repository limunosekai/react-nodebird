import { Form, Input, Button } from 'antd';
import { useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../_actions/post_actions';

const { TextArea } = Input;

const PostForm = () => {
  const dispatch = useDispatch();

  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState('');

  const imageInput = useRef();

  const onSubmit = useCallback(() => {
    dispatch(addPost());
    setText('');
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}
    >
      <TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='뭐든 적어줘봐요'
      />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type='primary' style={{ float: 'right' }} htmlType='submit'>
          등록
        </Button>
      </div>
      <div>
        {imagePaths.map((path) => {
          return (
            <div key={path} style={{ display: 'inline-block' }}>
              <img src={path} style={{ width: '200px' }} alt={path} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
