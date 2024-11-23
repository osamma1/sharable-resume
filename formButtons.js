// Education Section
function moreEducation() {
    var eduFields = document.getElementById("eduBox");
    // Degree field
    var degreeBox = document.createElement("div");
    degreeBox.className = "input-box  edu-box";
    var degreeLabel = document.createElement("label");
    degreeLabel.textContent = "Degree:";
    var degreeInput = document.createElement("input");
    degreeInput.type = "text";
    degreeInput.placeholder = "Enter your Degree";
    degreeInput.required = true;
    degreeLabel.htmlFor = "degree_".concat(Date.now());
    degreeInput.id = degreeLabel.htmlFor;
    degreeBox.appendChild(degreeLabel);
    degreeBox.appendChild(degreeInput);
    // Institute field
    var instituteBox = document.createElement("div");
    instituteBox.className = "input-box  edu-box";
    var instituteLabel = document.createElement("label");
    instituteLabel.textContent = "Institute Name:";
    var instituteInput = document.createElement("input");
    instituteInput.type = "text";
    instituteInput.placeholder = "Enter your Institute Name";
    instituteInput.required = true;
    instituteLabel.htmlFor = "institute_".concat(Date.now());
    instituteInput.id = instituteLabel.htmlFor;
    instituteBox.appendChild(instituteLabel);
    instituteBox.appendChild(instituteInput);
    // Complete Year field
    var yearBox = document.createElement("div");
    yearBox.className = "input-box  edu-box";
    var yearLabel = document.createElement("label");
    yearLabel.textContent = "Complete Year:";
    var yearInput = document.createElement("input");
    yearInput.type = "text";
    yearInput.placeholder = "Enter completed Year";
    yearInput.required = true;
    yearLabel.htmlFor = "complete_".concat(Date.now());
    yearInput.id = yearLabel.htmlFor;
    yearBox.appendChild(yearLabel);
    yearBox.appendChild(yearInput);
    // Add all fields to the education fields container
    eduFields === null || eduFields === void 0 ? void 0 : eduFields.append(degreeBox, instituteBox, yearBox);
}
// Removed Education
function removeEducation() {
    var eduFields = document.getElementById("eduBox");
    if (eduFields && eduFields.children.length > 3) {
        // Check if more than 3 elements are present
        for (var i = 0; i < 3; i++) {
            // Loop to remove last 3 elements
            var lastChild = eduFields.lastChild;
            if (lastChild) {
                lastChild.remove();
            }
        }
    }
    else {
        alert("This fields is required can't remove");
    }
}
// Work Experience Section
function moreWorkExperience() {
    var workFields = document.getElementById("WorkExperienceBox");
    var jobTitleBox = document.createElement("div");
    jobTitleBox.className = "input-box Box";
    var jobTitleLabel = document.createElement("label");
    jobTitleLabel.textContent = "Job Title:";
    var jobTitleInput = document.createElement("input");
    jobTitleInput.type = "text";
    jobTitleInput.placeholder = "Enter your Job Title";
    jobTitleInput.required = true;
    jobTitleLabel.htmlFor = "jobTitle_".concat(Date.now());
    jobTitleInput.id = jobTitleLabel.htmlFor;
    jobTitleBox.appendChild(jobTitleLabel);
    jobTitleBox.appendChild(jobTitleInput);
    var jobWorkBox = document.createElement("div");
    jobWorkBox.className = "input-box Box";
    var jobWorkLabel = document.createElement("label");
    jobWorkLabel.textContent = "Job Work:";
    var jobWorkInput = document.createElement("input");
    jobWorkInput.type = "text";
    jobWorkInput.placeholder = "Enter job work";
    jobWorkInput.required = true;
    jobWorkLabel.htmlFor = "jobWork_".concat(Date.now());
    jobWorkInput.id = jobWorkLabel.htmlFor;
    jobWorkBox.appendChild(jobWorkLabel);
    jobWorkBox.appendChild(jobWorkInput);
    var dateBox = document.createElement("div");
    dateBox.className = "input-box Box";
    var dateLabel = document.createElement("label");
    dateLabel.textContent = "Start Date - End Date:";
    var dateInput = document.createElement("input");
    dateInput.type = "text";
    dateInput.placeholder = "Enter starting, ending date";
    dateInput.required = true;
    dateLabel.htmlFor = "date_".concat(Date.now());
    dateInput.id = dateLabel.htmlFor;
    dateBox.appendChild(dateLabel);
    dateBox.appendChild(dateInput);
    workFields === null || workFields === void 0 ? void 0 : workFields.append(jobTitleBox, jobWorkBox, dateBox);
}
function removeWorkExperience() {
    var workFields = document.getElementById("WorkExperienceBox");
    if (workFields && workFields.children.length > 3) {
        for (var i = 0; i < 3; i++) {
            var lastChild = workFields.lastChild;
            if (lastChild) {
                lastChild.remove();
            }
        }
    }
    else {
        alert("This field is required; you can't remove it.");
    }
}
// Language Section
function moreLanguage() {
    var langFields = document.getElementById("languageBox");
    var LanguageBox = document.createElement("div");
    LanguageBox.className = "input-box  languageBox";
    var LanguageLabel = document.createElement("label");
    LanguageLabel.textContent = "Language:";
    var LanguageInput = document.createElement("input");
    LanguageInput.type = "text";
    LanguageInput.placeholder = "Enter your Language";
    LanguageInput.required = true;
    LanguageLabel.htmlFor = "Language_".concat(Date.now());
    LanguageInput.id = LanguageLabel.htmlFor;
    LanguageBox.appendChild(LanguageLabel);
    LanguageBox.appendChild(LanguageInput);
    langFields === null || langFields === void 0 ? void 0 : langFields.append(LanguageBox);
}
// Removed Language
function removeLanguage() {
    var langFields = document.getElementById("languageBox");
    if (langFields && langFields.children.length > 1) {
        var lastChild = langFields.lastChild;
        lastChild === null || lastChild === void 0 ? void 0 : lastChild.remove();
    }
    else {
        alert("This fields is required can't remove");
    }
}
// Interest Section
function moreInterest() {
    var InterestFields = document.getElementById("InterestBox");
    var InterestBox = document.createElement("div");
    InterestBox.className = "input-box  InterestBox";
    var InterestLabel = document.createElement("label");
    InterestLabel.textContent = "Interest:";
    var InterestInput = document.createElement("input");
    InterestInput.type = "text";
    InterestInput.placeholder = "Enter your Interest";
    InterestInput.required = true;
    InterestLabel.htmlFor = "Interest_".concat(Date.now());
    InterestInput.id = InterestLabel.htmlFor;
    InterestBox.appendChild(InterestLabel);
    InterestBox.appendChild(InterestInput);
    InterestFields === null || InterestFields === void 0 ? void 0 : InterestFields.append(InterestBox);
}
// Removed Interest
function removeInterest() {
    var InterestFields = document.getElementById("InterestBox");
    if (InterestFields && InterestFields.children.length > 1) {
        var lastChild = InterestFields.lastChild;
        lastChild === null || lastChild === void 0 ? void 0 : lastChild.remove();
    }
    else {
        alert("This fields is required can't remove");
    }
}
// Project Section
function moreProjects() {
    var ProjectFields = document.getElementById("ProjectsBox");
    // Title field
    var TitleBox = document.createElement("div");
    TitleBox.className = "input-box  project-Box";
    var TitleLabel = document.createElement("label");
    TitleLabel.textContent = "Title:";
    var TitleInput = document.createElement("input");
    TitleInput.type = "text";
    TitleInput.placeholder = "Enter your Project Title";
    TitleInput.required = true;
    TitleLabel.htmlFor = "Title_".concat(Date.now());
    TitleInput.id = TitleLabel.htmlFor;
    TitleBox.appendChild(TitleLabel);
    TitleBox.appendChild(TitleInput);
    // Description field
    var DescriptionBox = document.createElement("div");
    DescriptionBox.className = "input-box  project-Box";
    var DescriptionLabel = document.createElement("label");
    DescriptionLabel.textContent = "Description:";
    var DescriptionInput = document.createElement("input");
    DescriptionInput.type = "text";
    DescriptionInput.placeholder = "Enter Project Description";
    DescriptionInput.required = true;
    DescriptionLabel.htmlFor = "prodescription_".concat(Date.now());
    DescriptionInput.id = DescriptionLabel.htmlFor;
    DescriptionBox.appendChild(DescriptionLabel);
    DescriptionBox.appendChild(DescriptionInput);
    // Project Link field
    var LinkBox = document.createElement("div");
    LinkBox.className = "input-box  project-Box";
    var LinkLabel = document.createElement("label");
    LinkLabel.textContent = "Link:";
    var LinkkInput = document.createElement("input");
    LinkkInput.type = "text";
    LinkkInput.placeholder = "Enter Project Link";
    LinkkInput.required = true;
    LinkLabel.htmlFor = "projectLink_".concat(Date.now());
    LinkkInput.id = LinkLabel.htmlFor;
    LinkBox.appendChild(LinkLabel);
    LinkBox.appendChild(LinkkInput);
    // Add all fields to the Project fields container
    ProjectFields === null || ProjectFields === void 0 ? void 0 : ProjectFields.append(TitleBox, DescriptionBox, LinkBox);
}
// Removed Project
function removeProjects() {
    var ProjectsFields = document.getElementById("ProjectsBox");
    if (ProjectsFields && ProjectsFields.children.length > 3) {
        // Check if more than 3 elements are present
        for (var i = 0; i < 3; i++) {
            // Loop to remove last 3 elements
            var lastChild = ProjectsFields.lastChild;
            if (lastChild) {
                lastChild.remove();
            }
        }
    }
    else {
        alert("This fields is required can't remove");
    }
}
// Skills Section
function moreSkill() {
    var SkillFields = document.getElementById("skillBox");
    //Skill Name field
    var SkillBox = document.createElement("div");
    SkillBox.className = "input-box  skill-box";
    var SkillLabel = document.createElement("label");
    SkillLabel.textContent = "Enter skill Name";
    var SkillInput = document.createElement("input");
    SkillInput.type = "text";
    SkillInput.placeholder = "Enter your Project Title";
    SkillInput.required = true;
    SkillLabel.htmlFor = "Skill_".concat(Date.now());
    SkillInput.id = SkillLabel.htmlFor;
    SkillBox.appendChild(SkillLabel);
    SkillBox.appendChild(SkillInput);
    // Skill Percentag % field
    var PercentagBox = document.createElement("div");
    PercentagBox.className = "input-box  skill-box";
    var PercentagLabel = document.createElement("label");
    PercentagLabel.textContent = "Skill Percentag %:";
    var PercentagInput = document.createElement("input");
    PercentagInput.type = "text";
    PercentagInput.placeholder =
        "Enter your proficiency percentage for this skill.";
    PercentagInput.required = true;
    PercentagLabel.htmlFor = "SkillPercentag_".concat(Date.now());
    PercentagInput.id = PercentagLabel.htmlFor;
    PercentagBox.appendChild(PercentagLabel);
    PercentagBox.appendChild(PercentagInput);
    // Add all fields to the Project fields container
    SkillFields === null || SkillFields === void 0 ? void 0 : SkillFields.append(SkillBox, PercentagBox);
}
// Removed Skill
function removeSkill() {
    var SkillsFields = document.getElementById("skillBox");
    if (SkillsFields && SkillsFields.children.length > 2) {
        // Check if more than 2 elements are present
        for (var i = 0; i < 2; i++) {
            // Loop to remove last 3 elements
            var lastChild = SkillsFields.lastChild;
            if (lastChild) {
                lastChild.remove();
            }
        }
    }
    else {
        alert("This fields is required can't remove");
    }
}
