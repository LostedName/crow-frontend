import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonClickEvent } from '../../../types/types';

type UserRowProps = {
  userId: number,
  name: string,
  banReason: string,
  postsCount: number,
  avatar: string,
}

const UserRow: React.FC<UserRowProps> = ({userId, name, postsCount, banReason, avatar}) => {
  const banUserClick = (e: ButtonClickEvent) => {
    e.preventDefault();
    //BAN USER with userId
  }
  return (
    <div className="table_row">
      <img src={avatar} alt="avatar" />
      <span>{name}</span>
      <span>{postsCount}</span>
      <span>{banReason}</span>
      <div className="row_buttons">
        <Link to={`/users/${userId}`}>Profile</Link>
        <button onClick={banUserClick}>UnBan</button>
      </div>
    </div>
  )
}

export default UserRow;