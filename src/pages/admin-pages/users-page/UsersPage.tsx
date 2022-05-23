import React, {FC} from 'react';
import UserRow from './UserRow';
import './usersPage.scss';
const UsersPage: FC = () => {
  return (
    <main className="admin_users_page">
      <div className="users_table">        
        <div className="table_header">
          <span>Avatar</span>
          <span>Name</span>
          <span>Post count</span>
        </div>
        <div className="table_body">
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
          />
        </div>
      </div>
    </main>
  );
}

export default UsersPage;