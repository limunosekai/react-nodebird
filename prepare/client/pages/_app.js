// 페이지들의 공통되는 부분들 처리
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      {/* next에서 지원하는 Head로 넣어준다 */}
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      {/* index.js 컴포넌트가 이 곳에 위치 */}
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
