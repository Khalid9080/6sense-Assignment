import React, { useState } from 'react';
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Home = () => {
    const [formFields, setFormFields] = useState([
        { email: '', ageRange: 'Pick one' } // Initial field
    ]);

    // Function to add a new form field
    const addFormField = () => {
        setFormFields([...formFields, { email: '', ageRange: 'Pick one' }]);
    };

    // Function to delete a specific form field by index
    const deleteFormField = (indexToRemove) => {
        // Filter the fields and remove the one at the specific index
        setFormFields(formFields.filter((_, index) => index !== indexToRemove));
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
                    <form className="card-body">
                        <div className="flex flex-row justify-between items-center -mb-4">
                            <h1>Personal Information</h1>
                            <div className="text-3xl p-4">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-square text-3xl"
                                    onClick={addFormField}
                                >
                                    <FiPlusSquare />
                                </button>
                            </div>
                        </div>

                        {/* Dynamic Form Fields */}
                        {formFields.map((field, index) => (
                            <div className="flex flex-row gap-2 mt-4" key={index}> {/* Using index as the key */}
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name={`email-${index}`}
                                        placeholder="Add your email"
                                        className="input input-bordered"
                                        value={field.email} // Bind value for email input
                                        onChange={(e) => {
                                            const updatedFields = [...formFields];
                                            updatedFields[index].email = e.target.value;
                                            setFormFields(updatedFields);
                                        }}
                                        required
                                    />
                                </div>
                                <label className="form-control flex-1">
                                    <div className="label ">
                                        <span className="label-text">Select Your Age Range</span>
                                        <button
                                            type="button"
                                            className='text-2xl text-red-600 -mt-4 btn btn-sm btn-square'
                                            onClick={() => deleteFormField(index)} // Delete the specific index
                                        >
                                            <MdOutlineDeleteSweep />
                                        </button>
                                    </div>
                                    <select
                                        name={`ageRange-${index}`}
                                        className="select select-bordered"
                                        value={field.ageRange} // Bind value for ageRange
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
                                </label>
                            </div>
                        ))}

                        <div className="form-control mt-6">
                            <button type="submit" value="Add post" className="btn btn-primary">
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
