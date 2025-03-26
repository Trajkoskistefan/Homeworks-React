import { Component } from "react";
import "./UserProfileClass.css"
class UserProfileClass extends Component {
  render() {
    const { name, age, hobby } = this.props;
    return (
    <div className="user-profile-card">
       <div className="user-profile-content">
        <h2 className="user-profile-title">User Profile</h2>
        <div className="user-profile-info">    
         <p><strong>Name:</strong>{name}</p>
         <p><strong>Age:</strong>{age}</p>
         <p><strong>Hobby:</strong>{hobby}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default UserProfileClass;
