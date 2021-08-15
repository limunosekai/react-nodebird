import * as actions from '../_actions/types';

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '임성',
      },
      content: '첫 번째 게시글 #해시태그 #리무',
      Images: [
        {
          src: 'https://res.cloudinary.com/limu/image/upload/v1624428744/portfolio/quiz_rb2z18.png',
        },
        {
          src: 'https://res.cloudinary.com/limu/image/upload/v1624346227/portfolio/dark_l5msvo.png',
        },
        {
          src: 'https://res.cloudinary.com/limu/image/upload/v1623320474/portfolio/sidebar_er45zx.png',
        },
      ],
      createdAt: {},
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: '하이루~',
        },
        {
          User: {
            nickname: '멸망',
          },
          content: '멸망이다~',
        },
      ],
    },
  ],
  imagePaths: [],
  comments: [],
  postAdded: false,
  isAddingPost: false,
  isAddingPostError: null,
  commentAdded: false,
  isAddingComment: false,
  isAddingCommentError: null,
};

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '임성',
  },
  Images: [],
  Comments: [],
};

const dummyComment = {
  id: 1,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '임성',
  },
  Images: [],
  Comments: [],
};

const post_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_POST_REQUEST:
      return {
        ...state,
        isAddingPost: true,
        postAdded: false,
        isAddingPostError: null,
      };

    case actions.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
        isAddingPost: false,
      };

    case actions.ADD_POST_FAILURE:
      return {
        ...state,
        isAddingPost: false,
        isAddingPostError: action.error,
      };

    case actions.ADD_COMMENT_REQUEST:
      return {
        ...state,
        commentAdded: false,
        isAddingComment: true,
        isAddingCommentError: null,
      };

    case actions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [dummyComment, ...state.comments],
        commentAdded: true,
        isAddingComment: false,
      };

    case actions.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isAddingComment: false,
        isAddingCommentError: action.error,
      };
    default:
      return state;
  }
};

export default post_reducer;
