import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        {/* Link에 href 적고 a 태그 적는다 */}
        <Link href='/'>
          <a>노드버드</a>
        </Link>
        <Link href='/profile'>
          <a>프로필</a>
        </Link>
        <Link href='/signup'>
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
