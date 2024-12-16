import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const User = () => {
    const loadedUser = useLoaderData()
    const [user, setUser] = useState(loadedUser)
    const handleDelete = id => {
        fetch(`http://localhost:4000/user/${id}`, {
            method: "delete",
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount > 0) {
                Swal({
                    text: "USer delete successfully",
                });
                const remainingUser = user.filter(user => user._id !== id)
                setUser(remainingUser)
            }
        })
    }
    return (
        <div>
            <h2>User:{loadedUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create At</th>
                            <th>Last logged in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                            user.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{ user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{ user.lastLoggedAt}</td>
                                <td><button onClick={()=> handleDelete(user._id)} className="btn">Delete</button></td>
                            </tr>)
                       }
                     
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;