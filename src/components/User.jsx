import { useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUser = useLoaderData()
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                            loadedUser.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{ user.email}</td>
                                <td>{user.createdAt }</td>
                                <td>Blue</td>
                            </tr>)
                       }
                     
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;