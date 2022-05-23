import React, { useEffect, useState } from 'react';
import Post from '../../../components/post/Post';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { MenuType } from '../../../types/Post';
import './profilePage.scss';

const ProfilePage: React.FC = () => {
  const [isPostsOpened, setIsPostsOpened] = useState<boolean>(true);
  const user = useTypedSelector((state) => state.userStore.user);
  const userPosts = useTypedSelector((state) => state.postStore.userPosts);
  const {loadUserPosts} = useActions();
  const setPosts = () => setIsPostsOpened(true); 
  const setLiked = () => setIsPostsOpened(false);

  useEffect(() => {
    if (user?.id)
      loadUserPosts(user?.id);
  }, [user]);
  return (
    <main className="profile_page">
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Profile</span>
          <div />
          <span>{user?.name}</span>
          <div />
          <span>35 posts</span>
        </div>
        <div className="content_cover">
          <img src={user?.profileCover ?? "/assets/unknown_cover.jpg"} alt="cover" />
        </div>
        <div className="content_info">
          <div className="content_avatar">
            <img src={user?.avatar ?? "/assets/unknown_user.png"} alt="avatar" />
            {
              <button>Edit Profile</button>
            }
          </div>
          <span className="profile_name">
            {user?.name}
          </span>
          <span className="profile_description">
            {user?.description}
          </span>
          <ul>
            <li><img src="/assets/link.png" alt="link" />https://vk.com/dikarp118</li>
            {
              user?.birthDate && <li><img src="/assets/birthday.png" alt="link" />Birth Date: {user?.birthDate}</li>
            }
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
          {
            userPosts.map((post) => (
              <Post id={post.id}
                key={post.id}
                userId={post.userId}
                userName={user?.name || ""}
                avatar={user?.avatar ?? "/assets/unknown_user.png"}
                text={post.text}
                likeCount={600}  // TODO add likes counter
                createdAt="11 minutes ago" //TODO add work with times
                menuType={MenuType.own}/>
            ))
          }
        </div>
      </div>
      <aside className="right-side"></aside>
    </main>
  );
}

export default ProfilePage;