import React, { useState } from "react";

export default function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interests: [],
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const interestsList = ["Music", "Sports", "Reading", "Gaming"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest.";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setErrors({});
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Multi-Input Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender}</p>
          )}
        </div>

        <div>
          <label>Interests:</label>
          <div>
            {interestsList.map((interest) => (
              <label key={interest} className="block">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                />{" "}
                {interest}
              </label>
            ))}
          </div>
          {errors.interests && (
            <p className="text-red-600 text-sm">{errors.interests}</p>
          )}
        </div>

        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Japan">Japan</option>
          </select>
          {errors.country && (
            <p className="text-red-600 text-sm">{errors.country}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 bg-green-100 p-4 rounded">
          <h3 className="font-bold text-lg mb-2">Submitted Data:</h3>
          <pre className="text-sm">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
