import React, {FC} from 'react';
import FollowItem from '../../../components/followItem/FollowItem';
import './followsPage.scss';
const FollowsPage: FC = () => {
  return (
    <main className="follows_page">
      <aside className="left-side"></aside>
      <div className="content">
        <div className="content_header">
          <span>Follows</span>
          <div />
          <span>Dmitry karpenkin</span>
          <div />
          <span>35 follows</span>
        </div>
        <FollowItem id={1} userName="Dmitry Karpenkin" avatar='/assets/myPhotoSquare.jpg' />
        <FollowItem id={1} userName="Dmitry Karpenkin" avatar='/assets/myPhotoSquare.jpg' />
        <FollowItem id={1} userName="Dmitry Karpenkin" avatar='/assets/myPhotoSquare.jpg' />
      </div>
      <aside className="right-side"></aside>
    </main>
  );
}

export default FollowsPage;