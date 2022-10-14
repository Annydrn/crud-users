import React from "react";
import "./styles/userCard.css";
const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
  };

  return (
    <article className="user">
      <h2 className="user_name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="user_list">
        <li className="user_item">
          <span className="user_span">Email</span>
          {user.email}
        </li>
        <li className="user_item">
          <span className="user_span">Birthday</span>
          {user.birthday}
        </li>
      </ul>
      <footer className="user_footer">
        <button className="user_btn" onClick={() => deleteUserById(user.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>

        <button className="user_btn" onClick={handleEdit}>
          <i className="user_edit fa-sharp fa-solid fa-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
