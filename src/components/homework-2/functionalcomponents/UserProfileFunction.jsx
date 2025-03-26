import React from "react"


const UserProfileFunction=({name,age,hobby})=>{
    
    return(
        <div className="user-profile-card">
            <div className="user-profile-content">
                <h2 className="user-profile-title">User Profile</h2>
                <div className="user-profile-info">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Hobby:</strong> {hobby}</p>
                </div>
            </div>
        </div>

    )
}
export default UserProfileFunction