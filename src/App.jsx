import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";

const baseURL = "http://144.126.218.162:9000";

function App() {
  const [users, setUsers] = useState();
  // Esto es parara pasar info desde UserCard hasta FormUser
  const [updateInfo, setUpdateInfo] = useState();

  // Este es para hacer el get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //para crear un nuevo usuario
  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Para eliminar un usuario especifico
  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Para actualizar un usuario especifico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <section className="card_form">
      <h1 className="title_crud">Users CRUD</h1>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      </section>
      {users?.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
        />
      ))}
    </div>
  );
}

export default App;
