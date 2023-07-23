import React from 'react';
import './App.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <h1>All User: {user. length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((u) =>{
                            return (
                                <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td><a href={`/singlepeson/${u.id}`}>View</a></td>
                            </tr>
                            )
})
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;