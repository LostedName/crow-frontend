import React, {FC} from 'react';
import { MenuType } from '../../../types/Post';
import ReportedPost from './ReportedPost';
import './reportsPage.scss';
const ReportsPage: FC = () => {
  return (
    <main className="admin_reports_page">
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Reported Posts</span>
        </div>
          <ReportedPost 
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

export default ReportsPage;