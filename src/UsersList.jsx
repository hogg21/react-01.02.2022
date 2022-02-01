// input: users[]
// output: jsx


import React from "react";
import User from "./User";

const UsersList = ({ users }) => {
    return (
        <ul className="users">
            {users.map((user) => (
                <User key={user.id} {...user}></User>
            ))}
        </ul>
    )
}
export default UsersList;