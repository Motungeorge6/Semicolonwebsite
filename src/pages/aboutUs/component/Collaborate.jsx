import React, { useState } from "react";
import "../style/Collaborate.css";

const Collaborate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();

    if (fullName && email && company && description) {
      alert("Successful!");
    } else {
      alert("Unsuccessful. Please fill in all the required fields.");
    }
  }

  return (
    <div className="collaborate-container">
      <div className="inner-container">
        <div>
          <h1>Collaborate With Us</h1>
          <p>
            Innovation starts with Collaboration. Let's work together through
            our research capabilities,business services, and skilled team to
            address your needs,connect with the right talent,and create tangible
            impact.
          </p>
        </div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <div className="form-row">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              id="fullName"
              name="FullName"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              value={company}
              onChange={handleCompanyChange}
              placeholder="Company"
              id="company"
              name="company"
            />

            <div className="dropdown-container">
              <input
                type="text"
                id="dropdown"
                placeholder="Select Purpose"
                value={selectedOption}
                onChange={handleOptionChange}
                onFocus={toggleDropdown}
                onBlur={toggleDropdown}
                className="dropdown-input"
              />
              <div
                className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
                onClick={toggleDropdown}
              >
                &#9662;
              </div>

              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li
                    onMouseDown={() => handleOptionSelect("Talent Placement")}
                  >
                    Talent Placement
                  </li>
                  <li
                    onMouseDown={() =>
                      handleOptionSelect("Employee Training & Upskilling")
                    }
                  >
                    Employee Training & Upskilling
                  </li>
                  <li
                    onMouseDown={() =>
                      handleOptionSelect("Project Delivery & Outsourcing")
                    }
                  >
                    Project Delivery & Outsourcing
                  </li>
                  <li
                    onMouseDown={() => handleOptionSelect("Venture Building")}
                  >
                    Venture Building
                  </li>
                  <li onMouseDown={() => handleOptionSelect("Others")}>
                    Others
                  </li>
                </ul>
              )}
            </div>
          </div>

          <textarea
            className="form-description"
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
