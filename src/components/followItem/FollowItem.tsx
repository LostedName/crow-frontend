import React from 'react';
import { FollowItemProps } from '../../types/FollowItem';
import './followItem.scss';

const FollowItem: React.FC<FollowItemProps> = ({
    id,
    userName,
    avatar,
  }) => (
  <div className="follower">
    <img src="/assets/myPhotoSquare.jpg" alt="avatar" />
    <span>
      Dmitry Karpenkin
    </span>
    <div>
      <button>
        Profile
      </button>
      <button>
        Unfollow
      </button>
    </div>
  </div>
);

export default FollowItem;