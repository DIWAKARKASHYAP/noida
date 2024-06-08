import React, { useEffect, useState } from "react";

const Data = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users/");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">User Data</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">
                                Date of Birth
                            </th>
                            <th className="py-2 px-4 border-b">Education</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td className="py-2 px-4 border-b">
                                    {user.name}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {new Date(
                                        user.dateOfBirth
                                    ).toLocaleDateString()}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {user.education.map((edu, index) => (
                                        <div key={index} className="mb-2">
                                            <strong>Level:</strong> {edu.level},{" "}
                                            <strong>Duration:</strong>{" "}
                                            {edu.courseDuration},{" "}
                                            <strong>Type:</strong>{" "}
                                            {edu.courseType},{" "}
                                            <strong>Year:</strong>{" "}
                                            {edu.yearOfCompletion}
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Data;
