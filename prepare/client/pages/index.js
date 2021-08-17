import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useEffect } from 'react';
import { loadPostsReqeust } from '../_actions/post_actions';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, isLoadingPosts } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(loadPostsReqeust());
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !isLoadingPosts) {
          dispatch(loadPostsReqeust());
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, isLoadingPosts]);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
