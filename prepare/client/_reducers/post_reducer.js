import * as actions from '../_actions/types';
import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  isLoadedPosts: false,
  isLoadingPosts: false,
  isLoadingPostsError: null,
  postAdded: false,
  isAddingPost: false,
  isAddingPostError: null,
  postRemoved: false,
  isRemovingPost: false,
  isRemovingPostError: null,
  commentAdded: false,
  isAddingComment: false,
  isAddingCommentError: null,
};

export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
    }));

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '임성',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (text) => ({
  id: shortId.generate(),
  content: text,
  User: {
    id: 1,
    nickname: '임성',
  },
});

const post_reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.LOAD_POSTS_REQUEST:
        draft.isLoadingPosts = true;
        draft.isLoadedPosts = false;
        draft.isLoadingPostsError = null;
        break;
      case actions.LOAD_POSTS_SUCCESS:
        draft.isLoadedPosts = true;
        draft.isLoadingPosts = false;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case actions.LOAD_POSTS_FAILURE:
        draft.isLoadingPosts = false;
        draft.isLoadingPostsError = action.error;
        break;
      case actions.ADD_POST_REQUEST:
        draft.isAddingPost = true;
        draft.postAdded = false;
        draft.isAddingPostError = null;
        break;
      case actions.ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.postAdded = true;
        draft.isAddingPost = false;
        break;
      case actions.ADD_POST_FAILURE:
        draft.isAddingPost = false;
        draft.isAddingPostError = action.error;
        break;
      case actions.REMOVE_POST_REQUEST:
        draft.isRemovingPost = true;
        draft.postRemoved = false;
        draft.isRemovingPostError = null;
        break;
      case actions.REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((i) => i.id !== action.data);
        draft.postRemoved = true;
        draft.isRemovingPost = false;
        break;
      case actions.REMOVE_POST_FAILURE:
        draft.isRemovingPost = false;
        draft.isRemovingPostError = action.error;
        break;
      case actions.ADD_COMMENT_REQUEST:
        draft.commentAdded = false;
        draft.isAddingComment = true;
        draft.isAddingCommentError = null;
        break;
      case actions.ADD_COMMENT_SUCCESS:
        draft.commentAdded = true;
        draft.isAddingComment = false;
        const post = draft.mainPosts.find((i) => i.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        break;
      case actions.ADD_COMMENT_FAILURE:
        draft.isAddingComment = false;
        draft.isAddingCommentError = action.error;
        break;
      default:
        break;
    }
  });
};

export default post_reducer;
