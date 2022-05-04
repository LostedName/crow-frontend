import React, { useState } from 'react';
import Post from '../../components/post/Post';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MenuType } from '../../types/Post';
import './mainPage.scss';
const MainPage: React.FC = () => {
  const isAuth = useTypedSelector((state) => state.userStore.isAuth);
  const avatar = useTypedSelector((state) => state.userStore.user?.avatar);
  const [isFeedOpened, setIsFeedOpened] = useState<boolean>(true);
  const setFeed = () => setIsFeedOpened(true);
  const setFollowed = () => setIsFeedOpened(false);
  return (
    <main className='main_page'>
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Home</span> 
        </div>
        {
          isAuth && <>
          <div className="feed_sections">
            <button onClick={setFeed} className={isFeedOpened ? "active" : ""}>Feed</button>
            <button onClick={setFollowed} className={isFeedOpened ? "" : "active"}>Followed</button>
          </div>
          <div className={`add_new_post ${isFeedOpened ? "active" : ""}`}>
            <img src={avatar} alt="avatar" />
            <textarea placeholder='Введите новость...'></textarea>
            <div>
              <button>Publish</button>
            </div>
          </div>
          </>
        }
        <Post
          id={1}
          userName="Dio_karpo"
          avatar="/assets/myPhotoSquare.jpg"
          text="Все сфы гули гули"
          likeCount={600}
          createdAt="11 minutes ago"
          menuType={!isAuth ? MenuType.none : MenuType.own} // TODO if mine then "own" else "stranger"
          />
      </div>
      <aside className="right-side"></aside>
    </main>
  );
}

export default MainPage;