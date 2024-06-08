import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [education, setEducation] = useState({
        level: "",
        courseDuration: "",
        courseType: "",
        yearOfCompletion: "",
    });

    const handleEducationChange = (field, value) => {
        setEducation({
            ...education,
            [field]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            dateOfBirth,
            education: [education],
        };

        try {
            const response = await fetch("http://localhost:3000/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Form Data Submitted:", data);
                setName("");
                setDateOfBirth("");
                setEducation({
                    level: "",
                    courseDuration: "",
                    courseType: "",
                    yearOfCompletion: "",
                });
            } else {
                console.error(
                    "Failed to submit form data:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the form data:",
                error
            );
        }
    };

    return (
        <form
            className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md mt-8"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-6">User Form</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Date of Birth</label>
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4 border p-4 rounded-md">
                <div className="mb-2">
                    <label className="block text-gray-700">
                        Education Level
                    </label>
                    <select
                        value={education.level}
                        onChange={(e) =>
                            handleEducationChange("level", e.target.value)
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="">Select</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post-graduation">Post-graduation</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700">
                        Course Duration
                    </label>
                    <input
                        type="text"
                        value={education.courseDuration}
                        onChange={(e) =>
                            handleEducationChange(
                                "courseDuration",
                                e.target.value
                            )
                        }
                        placeholder="e.g., 3 months/1 year/3 years"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700">Course Type</label>
                    <select
                        value={education.courseType}
                        onChange={(e) =>
                            handleEducationChange("courseType", e.target.value)
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="">Select</option>
                        <option value="regular">Regular</option>
                        <option value="open">Open</option>
                        <option value="online">Online</option>
                    </select>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700">
                        Year of Completion
                    </label>
                    <input
                        type="number"
                        value={education.yearOfCompletion}
                        onChange={(e) =>
                            handleEducationChange(
                                "yearOfCompletion",
                                e.target.value
                            )
                        }
                        placeholder="e.g., 2023"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
