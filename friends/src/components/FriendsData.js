import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsData extends React.Component {
  state = {
    friendsData: []
  };

  componentDidMount() {
    this.getData();
  }

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
      </div>
    )
  }
}

export default FriendsData;