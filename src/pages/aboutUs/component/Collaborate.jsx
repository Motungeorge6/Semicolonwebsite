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
              id="fullName"
              name="FullName"
            />
            <input type="email" placeholder="Email" id="email" name="email" />
          </div>

          <div className="form-row">
            <input
              type="text"
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
                  <li onClick={() => handleOptionSelect("Talent Placement")}>
                    Talent Placement
                  </li>
                  <li
                    onClick={() =>
                      handleOptionSelect("Employee Training & Upskilling")
                    }
                  >
                    Employee Training & Upskilling
                  </li>
                  <li
                    onClick={() =>
                      handleOptionSelect("Project Delivery & Outsourcing")
                    }
                  >
                    Project Delivery & Outsourcing
                  </li>
                  <li onClick={() => handleOptionSelect("Venture Building")}>
                    Venture Building
                  </li>
                  <li onClick={() => handleOptionSelect("Others")}>Others</li>
                </ul>
              )}
            </div>
          </div>

          <textarea
            className="form-description"
            id="description"
            name="description"
          ></textarea>
          <button
            type="submit"
            className="submit-button"

            // backgroundColor: "#FFF2C7",
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
