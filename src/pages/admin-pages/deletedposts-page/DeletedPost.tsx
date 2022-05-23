import React from 'react';
import Post from '../../../components/post/Post';
import { PostProps } from '../../../types/Post';
import './deletedPost.scss';

const DeletedPost: React.FC<PostProps> = ({
    id,
    userName,
    avatar,
    text,
    likeCount,
    createdAt,
    menuType,
  }) => {

  return (
    <div className="deleted-post">
      <div className="rep-post">
        <img src={avatar} alt="avatar" />
          <div className="post_header">
            <div className="post_header_name">
              <span>{userName}</span>
              <div />
              <span>{createdAt}</span>
            </div>
          </div>
          <span>
            {text}
          </span>
          <div className="like">
            <div className="button">
              <img src="/assets/heart.png" alt="heart" /> {likeCount}
            </div>
          </div>
        </div>
      <div className="info">
        <span>
          Deleted 09.05.2022 12:55:21 
        </span>
        <div className="buttons">
          <button>
            Return Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletedPost;