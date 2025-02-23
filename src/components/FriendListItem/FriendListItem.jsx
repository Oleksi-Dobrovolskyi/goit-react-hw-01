import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.module.css'


export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="friend-item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img src={avatar} alt="Avatar" width="48" className="avatar" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
