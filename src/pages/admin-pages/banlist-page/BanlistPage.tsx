import React, {FC} from 'react';
import './banlistPage.scss';
import UserRow from './UserRow';
const BanlistPage: FC = () => {
  return (
    <main className="admin_banlist_page">
      <div className="users_table">        
        <div className="table_header">
          <span>Avatar</span>
          <span>Name</span>
          <span>Post count</span>
          <span>Reason</span>
        </div>
        <div className="table_body">
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
            banReason="REASON TO BAN, FU"
          />
          <UserRow 
            userId={1}
            name="Dmitry Karpenkin"
            avatar="/assets/myPhotoSquare.jpg"
            postsCount={55}
            banReason="REASON TO BAN, FU"
          />
        </div>
      </div>
    </main>
  );
}

export default BanlistPage;