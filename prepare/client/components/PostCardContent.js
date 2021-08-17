import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
  return (
    <div>
      {postData?.split(/(#[^\s#]+)/g).map((item, index) => {
        if (item.match(/(#[^\s#]+)/g)) {
          return (
            <Link key={index} href={`/hashtag/${item.slice(1)}`}>
              <a>{item}</a>
            </Link>
          );
        }
        return item;
      })}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
