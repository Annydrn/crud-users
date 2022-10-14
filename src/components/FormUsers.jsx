import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUsers.css";


const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
}) => {
  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const { handleSubmit, reset, register } = useForm();

  const submit = (data) => {
    if (updateInfo) {
      //update
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      //create
      createNewUser(data);
    }
    reset(defaultValues);
  };

  return (
    <form   onSubmit={handleSubmit(submit)}>
      <h2> {updateInfo ? "Edit User" : "New User"}</h2>
      <div>
        <label className="description" htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label className="description" htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div>
        <label className="description" htmlFor="first_name">First_Name</label>
        <input type="text" id="first_name" {...register("first_name")} />
      </div>
      <div>
        <label className="description" htmlFor="last_name">Last_Name</label>
        <input type="text" id="last_name" {...register("last_name")} />
      </div>
      <div>
        <label className="description" htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <button className="button_create" >{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default FormUsers;
