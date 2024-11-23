function toggleProjects() {
    var toggleProjectDiv = document.getElementById("toggle-project");
    // Add a null check
    if (toggleProjectDiv) {
        if (toggleProjectDiv.style.display === "none" ||
            toggleProjectDiv.style.display === "") {
            toggleProjectDiv.style.display = "block";
        }
        else {
            toggleProjectDiv.style.display = "none";
        }
    }
    else {
        console.warn("Element with ID 'toggle-project' not found.");
    }
}
var isFormVisible = false; // Initial toggle state
function createResume() {
    var form = document.getElementById('form');
    if (form) { // Ensure the form element exists
        if (isFormVisible) {
            form.style.display = 'none'; // Hide the form
        }
        else {
            form.style.display = 'flex'; // Show the form
        }
        isFormVisible = !isFormVisible; // Toggle the visibility state
    }
}
// Submit Form
// Helper function to update the Education section of the resume
function UpdateEducationSec() {
    // Get the container where we want to show the updated education details
    var alledu = document.getElementById("alleducation");
    // Get the container holding all input fields for education details in the form
    var eduFields = document.getElementById("eduBox");
    if (alledu && eduFields) {
        // Clear existing education details in the resume
        alledu.innerHTML = "";
        // Get all inputs from the education form
        var inputs = eduFields.querySelectorAll(".edu-box");
        for (var i = 0; i < inputs.length; i += 3) {
            // Create a new div for each education entry
            var eduDiv = document.createElement("div");
            // Get degree input value
            var degree = inputs[i].querySelector("input")
                .value;
            var institute = inputs[i + 1].querySelector("input").value;
            var year = inputs[i + 2].querySelector("input")
                .value;
            // Create HTML elements for displaying degree, institute, and year
            var degreeElement = document.createElement("h3");
            degreeElement.textContent = degree;
            var instituteElement = document.createElement("h4");
            instituteElement.textContent = institute;
            var yearElement = document.createElement("h5");
            yearElement.textContent = year ? "complete ".concat(year) : "";
            // Append elements to the new education div
            eduDiv.append(degreeElement, instituteElement, yearElement);
            // Add new education div to the main education section
            alledu.appendChild(eduDiv);
        }
    }
}
// Updates the Language Skills section of the resume
function UpdatedLanguage() {
    // Get resume container for language skills
    var allSkill = document.getElementById("LanguageSkills");
    // Get form container with all language input fields
    var allSkillFields = document.getElementById("languageBox");
    if (allSkill && allSkillFields) {
        // Clear current languages in the resume section
        allSkill.innerHTML = "";
        // Get all language input fields
        var inputs = allSkillFields.querySelectorAll(".languageBox");
        // Add each language to the resume list
        for (var i = 0; i < inputs.length; i++) {
            var li = document.createElement("li");
            // Get value from each input field
            var input = inputs[i].querySelector("input")
                .value;
            li.textContent = input;
            // Add language to LanguageSkills container
            allSkill.appendChild(li);
        }
    }
}
// Updates the Interest section of the resume
function UpdatedInterest() {
    // Get container in resume for interests
    var allinterest = document.getElementById("InterestData");
    // Get form container with all interest input fields
    var allinterestFields = document.getElementById("InterestBox");
    if (allinterest && allinterestFields) {
        // Clear existing interests in the resume section
        allinterest.innerHTML = "";
        // Select all interest input fields
        var inputs = allinterestFields.querySelectorAll(".InterestBox");
        // Add each interest to the resume
        for (var i = 0; i < inputs.length; i++) {
            var h4 = document.createElement("h4");
            // Get value from each input field
            var input = inputs[i].querySelector("input")
                .value;
            h4.textContent = input;
            // Append interest to the InterestData container
            allinterest.appendChild(h4);
        }
    }
}
function UpdatedSkills() {
    // Get the container where we want to show the updated skills details
    var allSkills = document.getElementById("allSkills");
    // Get the container holding all input fields for skill details in the form
    var skillFields = document.getElementById("skillBox");
    if (allSkills && skillFields) {
        // Clear existing skills details in the resume
        allSkills.innerHTML = "";
        // Get all inputs from the skill form
        var inputs = skillFields.querySelectorAll(".skill-box");
        for (var i = 0; i < inputs.length; i += 2) {
            // Get skill name input value
            var skillName = inputs[i].querySelector("input")
                .value;
            var skillLevel = inputs[i + 1].querySelector("input").value;
            // Create a new div for each skill entry
            var skillDiv = document.createElement("div");
            skillDiv.className = "skill";
            // Create the skill content with name and level bar
            skillDiv.innerHTML = "\n        <h4>".concat(skillName, "</h4>\n        <div class=\"outerBox\">\n          <div class=\"innerBox\" style=\"width: ").concat(skillLevel, ";\"></div>\n        </div>\n      ");
            // Add new skill div to the main skills section
            allSkills.appendChild(skillDiv);
        }
    }
    else {
        console.log("Skills list or skills field element not found.");
    }
}
function UpdatedProject() {
    var projectList = document.getElementById("projectList");
    var projectField = document.getElementById("ProjectsBox");
    if (projectList && projectField) {
        projectList.innerHTML = ""; // Clear existing projects
        var inputs = projectField.querySelectorAll(".project-Box");
        var toggleProject = null; // Variable to hold extra projects container
        // Loop through inputs in sets of three for each project
        for (var i = 0; i < inputs.length; i += 3) {
            // Get form input values for each project
            var title = inputs[i].querySelector("input")
                .value;
            var description = inputs[i + 1].querySelector("input").value;
            var link = inputs[i + 2].querySelector("input")
                .value;
            // Create project container div
            var div = document.createElement("div");
            div.className = "projects";
            // Create title, description, and link elements
            var h3 = document.createElement("h3");
            h3.className = "projectName";
            h3.innerText = title;
            var p = document.createElement("p");
            p.innerText = description;
            var linkElement = document.createElement("p");
            linkElement.innerHTML = "<strong>Project Link:</strong> <a href=\"".concat(link, "\" target=\"_blank\">").concat(link, "</a>");
            // Append elements to project container
            div.append(h3, p, linkElement);
            // Add the toggle button to the second project only
            if (i === 3) {
                var toggleButtonDiv = document.createElement("div");
                toggleButtonDiv.className = "toggle-box";
                toggleButtonDiv.innerHTML = "\n          <button class=\"toggle-button\" onclick=\"toggleProjects()\">\n            <i class=\"fa-solid fa-angle-down\"></i>\n          </button>\n        ";
                div.append(toggleButtonDiv);
            }
            // Append the first two projects directly
            if (i < 6) {
                projectList.append(div);
            }
            else {
                // For projects beyond the first two, add to a separate container
                if (!toggleProject) {
                    toggleProject = document.createElement("div");
                    toggleProject.id = "toggle-project";
                    projectList.append(toggleProject);
                }
                toggleProject.append(div);
            }
        }
    }
    else {
        console.log("Project list or project field element not found.");
    }
}
// Helper function to update the Education section of the resume
function UpdateExperienceSec() {
    // Get the container where we want to show the updated education details
    var alledu = document.getElementById("allExp");
    // Get the container holding all input fields for education details in the form
    var eduFields = document.getElementById("WorkExperienceBox");
    if (alledu && eduFields) {
        // Clear existing education details in the resume
        alledu.innerHTML = "";
        // Get all inputs from the education form
        var inputs = eduFields.querySelectorAll(".Box");
        for (var i = 0; i < inputs.length; i += 3) {
            // Get degree input value
            var degree = inputs[i].querySelector("input")
                .value;
            var institute = inputs[i + 1].querySelector("input").value;
            var year = inputs[i + 2].querySelector("input")
                .value;
            // Create a new div for each education entry
            var eduDiv = document.createElement("div");
            eduDiv.innerHTML = "  <div class=\"exTitle\">\n                  <h3>".concat(degree, "</h3>\n                  <h4 class=\"start\">").concat(year, "</h4>\n                  </div>\n                  <p class=\"para\"> ").concat(institute, " </p>      ");
            // Add new education div to the main education section
            alledu.appendChild(eduDiv);
        }
    }
}
// Helper function to update text
function updateText(elementId, value) {
    var element = document.getElementById(elementId);
    if (element && value) {
        element.innerText = value;
    }
    else {
        console.log("".concat(elementId, " element not found or value is empty."));
    }
}
// Form Submit
function generateResume(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    event.preventDefault();
    var eduBox = document.getElementsByClassName("edu-box");
    console.log(eduBox);
    // Get input values
    var Name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var FName = (_b = document.getElementById("father-name")) === null || _b === void 0 ? void 0 : _b.value;
    var Designation = (_c = document.getElementById("Designation")) === null || _c === void 0 ? void 0 : _c.value;
    var Number = (_d = document.getElementById("No")) === null || _d === void 0 ? void 0 : _d.value;
    var address = (_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.value;
    var email = (_f = document.getElementById("email")) === null || _f === void 0 ? void 0 : _f.value;
    var WebLink = (_g = document.getElementById("webLink")) === null || _g === void 0 ? void 0 : _g.value;
    var LinkedinidLink = (_h = document.getElementById("Linkedin")) === null || _h === void 0 ? void 0 : _h.value;
    var Profile = (_j = document.getElementById("profile")) === null || _j === void 0 ? void 0 : _j.value;
    // code for setting image
    var imageInput = document.getElementById("Image");
    var resumeImage = document.getElementById("ResumeImage");
    if (imageInput && resumeImage) {
        var file = (_k = imageInput.files) === null || _k === void 0 ? void 0 : _k[0]; // Optional chaining to handle null cases
        if (file) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onloadend = function () {
                if (reader_1.result) {
                    resumeImage.src = reader_1.result;
                }
            };
        }
    }
    // Update Resume
    updateText("ResumeName", Name);
    updateText("ResumeFName", FName);
    updateText("ResumeDesignation", Designation);
    updateText("ResumeNumber", Number);
    updateText("ResumeAddress", address);
    updateText("ResumeEmail", email);
    updateText("ResumeWebLink", WebLink);
    updateText("ResumeLinkedinLink", LinkedinidLink);
    updateText("ResumeProfile", Profile);
    UpdateEducationSec();
    UpdatedLanguage();
    UpdatedInterest();
    UpdatedSkills();
    UpdatedProject();
    UpdateExperienceSec();
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(function (input) {
        input.value = ''; // Clear each input field
    });
}
