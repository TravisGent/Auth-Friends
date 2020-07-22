import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsData extends React.Component {
  state = {
    friendsData: [],
    newFriend: {
        id: 7,
        name: "",
        age: "",
        email: ""
      }
  };

  componentDidMount() {
    this.getData();
  }

  handleChanges = event => {
    this.setState({
      ...this.state,
      newFriend: {
          ...this.state.newFriend,
          [event.target.name]: event.target.value
      }
    });
  };

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(response => {
        this.setState({
          friendsData: response.data
        })
      })
      .catch(error => console.log(error))
  };

  addFriend = event => {
    event.preventDefault();

    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.friendsData.map(data => (
          <div>
            <h1>{data.name}</h1>
            <h3>Age: {data.age}</h3>
            <h3>{data.email}</h3>
          </div>
        ))}

        <form onSubmit={this.addFriend}>
          <h1>Add New Friend</h1>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.handleChanges} 
          />
          <p>Age</p>
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.handleChanges} 
          />
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChanges} 
          />
          <br /><button>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendsData;