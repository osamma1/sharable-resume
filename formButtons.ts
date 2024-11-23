// Education Section

function moreEducation() {
  const eduFields = document.getElementById("eduBox");

  // Degree field
  const degreeBox = document.createElement("div");
  degreeBox.className = "input-box  edu-box";

  const degreeLabel = document.createElement("label");
  degreeLabel.textContent = "Degree:";
  const degreeInput = document.createElement("input");
  degreeInput.type = "text";
  degreeInput.placeholder = "Enter your Degree";
  degreeInput.required = true;
  degreeLabel.htmlFor = `degree_${Date.now()}`;
  degreeInput.id = degreeLabel.htmlFor;
  degreeBox.appendChild(degreeLabel);
  degreeBox.appendChild(degreeInput);

  // Institute field
  const instituteBox = document.createElement("div");
  instituteBox.className = "input-box  edu-box";

  const instituteLabel = document.createElement("label");
  instituteLabel.textContent = "Institute Name:";
  const instituteInput = document.createElement("input");
  instituteInput.type = "text";
  instituteInput.placeholder = "Enter your Institute Name";
  instituteInput.required = true;
  instituteLabel.htmlFor = `institute_${Date.now()}`;
  instituteInput.id = instituteLabel.htmlFor;
  instituteBox.appendChild(instituteLabel);
  instituteBox.appendChild(instituteInput);

  // Complete Year field
  const yearBox = document.createElement("div");
  yearBox.className = "input-box  edu-box";

  const yearLabel = document.createElement("label");
  yearLabel.textContent = "Complete Year:";
  const yearInput = document.createElement("input");
  yearInput.type = "text";
  yearInput.placeholder = "Enter completed Year";
  yearInput.required = true;
  yearLabel.htmlFor = `complete_${Date.now()}`;
  yearInput.id = yearLabel.htmlFor;
  yearBox.appendChild(yearLabel);
  yearBox.appendChild(yearInput);

  // Add all fields to the education fields container
  eduFields?.append(degreeBox, instituteBox, yearBox);
}

// Removed Education
function removeEducation() {
  const eduFields = document.getElementById("eduBox");
  if (eduFields && eduFields.children.length > 3) {
    // Check if more than 3 elements are present
    for (let i = 0; i < 3; i++) {
      // Loop to remove last 3 elements
      const lastChild = eduFields.lastChild;
      if (lastChild) {
        lastChild.remove();
      }
    }
  } else {
    alert("This fields is required can't remove");
  }
}

// Work Experience Section
function moreWorkExperience() {
  const workFields = document.getElementById("WorkExperienceBox");

  const jobTitleBox = document.createElement("div");
  jobTitleBox.className = "input-box Box";

  const jobTitleLabel = document.createElement("label");
  jobTitleLabel.textContent = "Job Title:";
  const jobTitleInput = document.createElement("input");
  jobTitleInput.type = "text";
  jobTitleInput.placeholder = "Enter your Job Title";
  jobTitleInput.required = true;
  jobTitleLabel.htmlFor = `jobTitle_${Date.now()}`;
  jobTitleInput.id = jobTitleLabel.htmlFor;
  jobTitleBox.appendChild(jobTitleLabel);
  jobTitleBox.appendChild(jobTitleInput);

  const jobWorkBox = document.createElement("div");
  jobWorkBox.className = "input-box Box";

  const jobWorkLabel = document.createElement("label");
  jobWorkLabel.textContent = "Job Work:";
  const jobWorkInput = document.createElement("input");
  jobWorkInput.type = "text";
  jobWorkInput.placeholder = "Enter job work";
  jobWorkInput.required = true;
  jobWorkLabel.htmlFor = `jobWork_${Date.now()}`;
  jobWorkInput.id = jobWorkLabel.htmlFor;
  jobWorkBox.appendChild(jobWorkLabel);
  jobWorkBox.appendChild(jobWorkInput);

  const dateBox = document.createElement("div");
  dateBox.className = "input-box Box";

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Start Date - End Date:";
  const dateInput = document.createElement("input");
  dateInput.type = "text";
  dateInput.placeholder = "Enter starting, ending date";
  dateInput.required = true;
  dateLabel.htmlFor = `date_${Date.now()}`;
  dateInput.id = dateLabel.htmlFor;
  dateBox.appendChild(dateLabel);
  dateBox.appendChild(dateInput);

  workFields?.append(jobTitleBox, jobWorkBox, dateBox);
}

function removeWorkExperience() {
  const workFields = document.getElementById("WorkExperienceBox");
  if (workFields && workFields.children.length > 3) {
    for (let i = 0; i < 3; i++) {
      const lastChild = workFields.lastChild;
      if (lastChild) {
        lastChild.remove();
      }
    }
  } else {
    alert("This field is required; you can't remove it.");
  }
}

// Language Section

function moreLanguage() {
  const langFields = document.getElementById("languageBox");
  const LanguageBox = document.createElement("div");
  LanguageBox.className = "input-box  languageBox";
  const LanguageLabel = document.createElement("label");
  LanguageLabel.textContent = "Language:";
  const LanguageInput = document.createElement("input");
  LanguageInput.type = "text";
  LanguageInput.placeholder = "Enter your Language";
  LanguageInput.required = true;
  LanguageLabel.htmlFor = `Language_${Date.now()}`;
  LanguageInput.id = LanguageLabel.htmlFor;
  LanguageBox.appendChild(LanguageLabel);
  LanguageBox.appendChild(LanguageInput);

  langFields?.append(LanguageBox);
}

// Removed Language
function removeLanguage() {
  const langFields = document.getElementById("languageBox");
  if (langFields && langFields.children.length > 1) {
    const lastChild = langFields.lastChild;
    lastChild?.remove();
  } else {
    alert("This fields is required can't remove");
  }
}

// Interest Section

function moreInterest() {
  const InterestFields = document.getElementById("InterestBox");

  const InterestBox = document.createElement("div");
  InterestBox.className = "input-box  InterestBox";
  const InterestLabel = document.createElement("label");
  InterestLabel.textContent = "Interest:";
  const InterestInput = document.createElement("input");
  InterestInput.type = "text";
  InterestInput.placeholder = "Enter your Interest";
  InterestInput.required = true;
  InterestLabel.htmlFor = `Interest_${Date.now()}`;
  InterestInput.id = InterestLabel.htmlFor;
  InterestBox.appendChild(InterestLabel);
  InterestBox.appendChild(InterestInput);

  InterestFields?.append(InterestBox);
}

// Removed Interest
function removeInterest() {
  const InterestFields = document.getElementById("InterestBox");
  if (InterestFields && InterestFields.children.length > 1) {
    const lastChild = InterestFields.lastChild;
    lastChild?.remove();
  } else {
    alert("This fields is required can't remove");
  }
}

// Project Section

function moreProjects() {
  const ProjectFields = document.getElementById("ProjectsBox");

  // Title field
  const TitleBox = document.createElement("div");
  TitleBox.className = "input-box  project-Box";
  const TitleLabel = document.createElement("label");
  TitleLabel.textContent = "Title:";
  const TitleInput = document.createElement("input");
  TitleInput.type = "text";
  TitleInput.placeholder = "Enter your Project Title";
  TitleInput.required = true;
  TitleLabel.htmlFor = `Title_${Date.now()}`;
  TitleInput.id = TitleLabel.htmlFor;
  TitleBox.appendChild(TitleLabel);
  TitleBox.appendChild(TitleInput);

  // Description field
  const DescriptionBox = document.createElement("div");
  DescriptionBox.className = "input-box  project-Box";
  const DescriptionLabel = document.createElement("label");
  DescriptionLabel.textContent = "Description:";
  const DescriptionInput = document.createElement("input");
  DescriptionInput.type = "text";
  DescriptionInput.placeholder = "Enter Project Description";
  DescriptionInput.required = true;
  DescriptionLabel.htmlFor = `prodescription_${Date.now()}`;
  DescriptionInput.id = DescriptionLabel.htmlFor;
  DescriptionBox.appendChild(DescriptionLabel);
  DescriptionBox.appendChild(DescriptionInput);

  // Project Link field
  const LinkBox = document.createElement("div");
  LinkBox.className = "input-box  project-Box";
  const LinkLabel = document.createElement("label");
  LinkLabel.textContent = "Link:";
  const LinkkInput = document.createElement("input");
  LinkkInput.type = "text";
  LinkkInput.placeholder = "Enter Project Link";
  LinkkInput.required = true;
  LinkLabel.htmlFor = `projectLink_${Date.now()}`;
  LinkkInput.id = LinkLabel.htmlFor;
  LinkBox.appendChild(LinkLabel);
  LinkBox.appendChild(LinkkInput);

  // Add all fields to the Project fields container
  ProjectFields?.append(TitleBox, DescriptionBox, LinkBox);
}

// Removed Project
function removeProjects() {
  const ProjectsFields = document.getElementById("ProjectsBox");
  if (ProjectsFields && ProjectsFields.children.length > 3) {
    // Check if more than 3 elements are present
    for (let i = 0; i < 3; i++) {
      // Loop to remove last 3 elements
      const lastChild = ProjectsFields.lastChild;
      if (lastChild) {
        lastChild.remove();
      }
    }
  } else {
    alert("This fields is required can't remove");
  }
}

// Skills Section

function moreSkill() {
  const SkillFields = document.getElementById("skillBox");

  //Skill Name field
  const SkillBox = document.createElement("div");
  SkillBox.className = "input-box  skill-box";
  const SkillLabel = document.createElement("label");
  SkillLabel.textContent = "Enter skill Name";
  const SkillInput = document.createElement("input");
  SkillInput.type = "text";
  SkillInput.placeholder = "Enter your Project Title";
  SkillInput.required = true;
  SkillLabel.htmlFor = `Skill_${Date.now()}`;
  SkillInput.id = SkillLabel.htmlFor;
  SkillBox.appendChild(SkillLabel);
  SkillBox.appendChild(SkillInput);

  // Skill Percentag % field
  const PercentagBox = document.createElement("div");
  PercentagBox.className = "input-box  skill-box";
  const PercentagLabel = document.createElement("label");
  PercentagLabel.textContent = "Skill Percentag %:";
  const PercentagInput = document.createElement("input");
  PercentagInput.type = "text";
  PercentagInput.placeholder =
    "Enter your proficiency percentage for this skill.";
  PercentagInput.required = true;
  PercentagLabel.htmlFor = `SkillPercentag_${Date.now()}`;
  PercentagInput.id = PercentagLabel.htmlFor;
  PercentagBox.appendChild(PercentagLabel);
  PercentagBox.appendChild(PercentagInput);

  // Add all fields to the Project fields container
  SkillFields?.append(SkillBox, PercentagBox);
}

// Removed Skill
function removeSkill() {
  const SkillsFields = document.getElementById("skillBox");
  if (SkillsFields && SkillsFields.children.length > 2) {
    // Check if more than 2 elements are present
    for (let i = 0; i < 2; i++) {
      // Loop to remove last 3 elements
      const lastChild = SkillsFields.lastChild;
      if (lastChild) {
        lastChild.remove();
      }
    }
  } else {
    alert("This fields is required can't remove");
  }
}