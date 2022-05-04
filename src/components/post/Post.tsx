import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {MenuType, PostProps} from '../../types/Post';
import './post.scss';

const Post: React.FC<PostProps> = ({
    id,
    userName,
    avatar,
    text,
    likeCount,
    createdAt,
    menuType,
  }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const openMenu = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMenuOpened(true);
  }
  const closeMenu = () => setIsMenuOpened(false);
  const renderButton = useCallback(() => {
    switch (menuType) {
      case MenuType.none: 
        return (<></>);
      case MenuType.own: 
        return (
          <button onClick={openMenu}>
              <div />
              <div />
              <div />
              <div className={`profile_menu ${isMenuOpened ? "active" : ""}`}>
                <Link to="/profile">Edit</Link>
                <Link to="/follows">Delete</Link>
              </div>
          </button>
        );
      case MenuType.stranger: 
        return (
          <button onClick={openMenu}>
            <div />
            <div />
            <div />
            <div className={`profile_menu ${isMenuOpened ? "active" : ""}`}>
              <Link to="/profile">Report</Link>
            </div>
          </button>
        );
    }
}, [menuType, isMenuOpened]);
  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, []);
  return (
    <div className="post">
        <img src={avatar} alt="avatar" />
        <div className="post_header">
            <div className="post_header_name">
                <span>{userName}</span>
                <div />
                <span>{createdAt}</span>
            </div>
            {renderButton()}
        </div>
        <span>
            {text}
        </span>
        <div className="like">
            <button>
                <img src="/assets/heart.png" alt="heart" /> {likeCount}
            </button>
        </div>
    </div>
  );
}

export default Post;