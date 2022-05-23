import React, {FC} from 'react';
import { MenuType } from '../../../types/Post';
import DeletedPost from './DeletedPost';
import './deletedPostsPage.scss';
const DeletedPostsPage: FC = () => {
  return (
    <main className="admin_deleted_posts_page">
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Deleted Posts</span>
        </div>
        <DeletedPost 
            id={1}
            userId={1}
            userName="Dio_karpo"
            avatar="/assets/myPhotoSquare.jpg"
            text="Все сфы гули гули"
            likeCount={600}
            createdAt="11 minutes ago"
            menuType={MenuType.own}
          />
      </div>
      <aside className="right-side"></aside>
    </main>
  );
}

export default DeletedPostsPage;