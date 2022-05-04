import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../../components/post/Post';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MenuType } from '../../types/Post';
import NotFoundPage from '../notfound-page/NotFoundPage';
import './userProfilePage.scss';

const UserProfliePage: React.FC = () => {
  const [isPostsOpened, setIsPostsOpened] = useState<boolean>(true);
  const mineId = useTypedSelector((state) => state.userStore.user?.id);
  const foreignUser = useTypedSelector((state) => state.userStore.foreignUser);
  const setPosts = () => setIsPostsOpened(true); 
  const setLiked = () => setIsPostsOpened(false);
  const { userId } = useParams<{[key: string]:string}>();
  const id = +(userId || 0);
  const isUserExist = !isNaN(id);
  const navigate = useNavigate();
  console.log("MINE", mineId);
  console.log("id", id);
  if (mineId === id) {
    console.log("navigate BABE");
    navigate("/profile");
  }
  return (
<>
    {
      !isUserExist ? <NotFoundPage />
      :
    <main className="user_profile_page">
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Profile</span>
          <div />
          <span>{foreignUser?.name}</span>
          <div />
          <span>35 posts</span>
        </div>
        <div className="content_cover">
          <img src={foreignUser?.profileCover} alt="cover" />
        </div>
        <div className="content_info">
          <div className="content_avatar">
            <img src="/assets/myPhotoSquare.jpg" alt="avatar" />
              <button className='foreign_profile_btn followed'>Follow</button>
          </div>
          <span className="profile_name">
            {foreignUser?.name}
          </span>
          <span className="profile_description">
            {foreignUser?.description}
          </span>
          <ul>
            <li><img src="/assets/link.png" alt="link" />https://vk.com/dikarp118</li>
            <li><img src="/assets/birthday.png" alt="link" />Birth Date: 28.04.2002</li>
            <li><img src="/assets/calendar.png" alt="link" />Registration Date: 12.05.2012</li>
          </ul>
          <div className="profile_subs">
            <span>751</span> people you subscribed
          </div>
          <div className="profile_subs">
            <span>15k</span> people subscribed to you
          </div>
        </div>
        <div className="profile_sections">
          <button onClick={setPosts} className={isPostsOpened ? "active" : ""}>Posts</button>
          <button onClick={setLiked} className={isPostsOpened ? "" : "active"}>Liked</button>
        </div>
        <div className="profile_posts">
          <Post id={1}
                userName="Dio_karpo"
                avatar="/assets/myPhotoSquare.jpg"
                text="Все сфы гули гули"
                likeCount={600}
                createdAt="11 minutes ago"
                menuType={MenuType.stranger}/>
        </div>
      </div>
      <aside className="right-side"></aside>
    </main>
    }
</>
  );
}

export default UserProfliePage;