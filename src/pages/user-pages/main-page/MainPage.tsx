import React, { useState } from 'react';
import Post from '../../../components/post/Post';
import { useActions } from '../../../hooks/useActions';
import { usePostMenuType } from '../../../hooks/usePostMenuType';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Notify } from '../../../services/toast';
import { ButtonClickEvent, TextareaChangeHandler } from '../../../types/types';
import './mainPage.scss';
const MainPage: React.FC = () => {
  const checkMenuType = usePostMenuType();
  const isAuth = useTypedSelector((state) => state.userStore.isAuth);
  const avatar = useTypedSelector((state) => state.userStore.user?.avatar);
  const [isFeedOpened, setIsFeedOpened] = useState<boolean>(true);
  const setFeed = () => setIsFeedOpened(true);
  const setFollowed = () => setIsFeedOpened(false);
  const {createNewPost} = useActions();
  const [postText, setPostText] = useState<string>("");
  const onPostTextChange: TextareaChangeHandler = (e) => {
    setPostText(e.target.value);
  }
  const onPublishClick = (e: ButtonClickEvent) => {
    e.preventDefault();
    if (postText.trim()) {
      createNewPost(postText.trim());
    } else {
      Notify.warn("Текст поста не может быть пустым.");
    }
  }
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
            <img src={avatar ?? "/assets/unknown_user.png"} alt="avatar" />
            <textarea value={postText} onChange={onPostTextChange} placeholder='Введите новость...'></textarea>
            <div>
              <button onClick={onPublishClick}>Publish</button>
            </div>
          </div>
          </>
        }
        <Post
          id={1}
          key={1} // id
          userId={1}
          userName="Dio_karpo"
          avatar="/assets/myPhotoSquare.jpg"
          text="Все сфы гули гули"
          likeCount={600}
          createdAt="11 minutes ago"
          menuType={checkMenuType(1)} // TODO if mine then "own" else "stranger" "1 -- userId"
          />
      </div>
      <aside className="right-side"></aside>
    </main>
  );
}

export default MainPage;