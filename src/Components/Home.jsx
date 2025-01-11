import React, { useState } from 'react';
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Home = () => {
    const [formFields, setFormFields] = useState([
        { email: '', ageRange: 'Pick one' } // Initial field
    ]);
    const [errors, setErrors] = useState([]); // State to store error messages for each field
    const [posts, setPosts] = useState([]); // State to store form submissions

    // Function to add a new form field
    const addFormField = () => {
        setFormFields([...formFields, { email: '', ageRange: 'Pick one' }]);
        setErrors([...errors, []]); // Add an empty error array for the new field
    };

    // Function to delete a specific form field by index
    const deleteFormField = (indexToRemove) => {
        setFormFields(formFields.filter((_, index) => index !== indexToRemove));
        setErrors(errors.filter((_, index) => index !== indexToRemove)); // Remove corresponding error
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check for empty fields and create error messages for them
        const newErrors = formFields.map((field, index) => {
            const fieldErrors = [];
            if (!field.email) fieldErrors.push("Email is required.");
            if (field.ageRange === 'Pick one') fieldErrors.push("Age range is required.");
            return fieldErrors;
        });

        // Update the errors state with the new error messages
        setErrors(newErrors);

        // Check if there are any errors, and if there are none, submit the form
        const flatErrors = newErrors.flat();
        if (flatErrors.length === 0) {
            // Add the new post data to the posts state
            setPosts([...formFields]);
            console.log("Updated Posts:", [...posts, ...formFields]); // Log posts to debug
           
        }
    };

    return (
        <div>
            <div className="lg:w-3/4 mx-auto my-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add Your Lost and Found Items</h1>
                    <p className="py-6">
                        Please fill out the form below to add details about your lost or found item. Make sure to provide accurate information to help others identify and return the item to its rightful owner.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="flex flex-row justify-between items-center -mb-4">
                            <h1>Personal Information</h1>
                            <div className="text-3xl p-4">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-square text-3xl ml-4 text-green-700"
                                    onClick={addFormField}
                                    
                                >
                                    <FiPlusSquare />
                                </button>
                            </div>
                        </div>

                        {/* Dynamic Form Fields */}
                        {formFields.map((field, index) => (
                            <div className="flex flex-row gap-5 mt-4" key={index}>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name={`email-${index}`}
                                        placeholder="Add your email"
                                        className="input input-bordered"
                                        value={field.email}
                                        onChange={(e) => {
                                            const updatedFields = [...formFields];
                                            updatedFields[index].email = e.target.value;
                                            setFormFields(updatedFields);
                                        }}
                                    />
                                    {/* Show error message for email */}
                                    {errors[index] && errors[index].includes("Email is required.") && (
                                        <p className="text-red-600 mt-2">Email is required.</p>
                                    )}
                                </div>
                                <label className="form-control flex-1">
                                    <div className="label">
                                        <span className="label-text">Select Your Age Range</span>
                                        <button
                                            type="button"
                                            className='text-2xl text-red-600 -mt-4 btn btn-sm btn-square'
                                            onClick={() => deleteFormField(index)}
                                        >
                                            <MdOutlineDeleteSweep />
                                        </button>
                                    </div>
                                    <select
                                        name={`ageRange-${index}`}
                                        className="select select-bordered"
                                        value={field.ageRange}
                                        onChange={(e) => {
                                            const updatedFields = [...formFields];
                                            updatedFields[index].ageRange = e.target.value;
                                            setFormFields(updatedFields);
                                        }}
                                    >
                                        <option value="Pick one" disabled>Pick one</option>
                                        <option value="10-15">10-15</option>
                                        <option value="16-20">16-20</option>
                                        <option value="21-25">21-25</option>
                                        <option value="26-30">26-30</option>
                                        <option value="31-35">31-35</option>
                                        <option value="38-40">38-40</option>
                                        <option value="41-45">41-45</option>
                                        <option value="46-50">46-50</option>
                                        <option value="51-55">51-55</option>
                                        <option value="56-60">56-60</option>
                                    </select>
                                    {/* Show error message for select */}
                                    {errors[index] && errors[index].includes("Age range is required.") && (
                                        <p className="text-red-600 mt-2">Age range is required.</p>
                                    )}
                                </label>
                            </div>
                        ))}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Table for displaying posts */}
            <h1 className="text-4xl text-center mt-10 font-bold">Posted Data</h1>
            <div className="lg:w-3/4 mx-auto overflow-x-auto mt-10 card bg-base-100 w-full shrink-0 shadow-2xl">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Age Range</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{post.email}</td>
                                    <td>{post.ageRange}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No posts added yet</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
