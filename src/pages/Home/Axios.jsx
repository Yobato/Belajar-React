import axios from 'axios'
import React from 'react'

function Axios() {

  // axios.get("https://jsonplaceholder.typicode.com/users")
  // .then(({data})=>{
  //   console.log("response", data);
  // }) 
  // .catch((err) =>{
  //   console.log(err);
  // }) 
  // .finally(() =>{
  //   console.log("request selesai");
  // })

  function addUser(){
    const newUser = {
      name: "Ajat",
      email: "test@gmail.com"
    }
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    .then(({data}) => {
      console.log("response", data);
    })
    .catch((err) =>{
      console.log("response", err);
    })
    .finally(()=>{
      console.log("request selesai");
    })
  }


  // BISA JADI OPSI UNTUK MENGGUNAKAN PATCH JIKA YANG DI UPDATE TIDAK SEMUA PROPERTI
  // axios .put
  function updateUser() {
    const updateUser = {
      name: "Ajat",
      email: "test@gmail.com",
    };

    const userId = 1;
    axios({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
      data: updateUser,
    }).then(({ data }) => {
        console.log("response", data);
      })
      .catch((err) => {
        console.log("response", err);
      })
      .finally(() => {
        console.log("request selesai");
      });
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/users/${userId}`, updateUser)
    //   .then(({ data }) => {
    //     console.log("response", data);
    //   })
    //   .catch((err) => {
    //     console.log("response", err);
    //   })
    //   .finally(() => {
    //     console.log("request selesai");
    //   });
  }

  function deleteUser() {

    const userId = 3;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`, deleteUser)
      .then(({ data }) => {
        console.log("response", data);
      })
      .catch((err) => {
        console.log("response", err);
      })
      .finally(() => {
        console.log("request selesai");
      });
  }

  return (
    <>
      <div>Axios</div>
      <button onClick={addUser()}>Add User</button>
      <button onClick={updateUser()}>Update User</button>
      <button onClick={deleteUser()}>Delete User</button>
    </>
  );
}

export default Axios