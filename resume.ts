function toggleProjects() {
  const toggleProjectDiv = document.getElementById(
    "toggle-project"
  ) as HTMLDivElement | null;
  // Add a null check
  if (toggleProjectDiv) {
    if (
      toggleProjectDiv.style.display === "none" ||
      toggleProjectDiv.style.display === ""
    ) {
      toggleProjectDiv.style.display = "block";
    } else {
      toggleProjectDiv.style.display = "none";
    }
  } else {
    console.warn("Element with ID 'toggle-project' not found.");
  }
}


let isFormVisible = false; // Initial toggle state

function createResume() {
    const form = document.getElementById('form');

    if (form) { // Ensure the form element exists
        if (isFormVisible) {
            form.style.display = 'none'; // Hide the form
        } else {
            form.style.display = 'flex'; // Show the form
            
        }
        isFormVisible = !isFormVisible; // Toggle the visibility state
    }
}





// Submit Form

// Helper function to update the Education section of the resume
function UpdateEducationSec() {
  // Get the container where we want to show the updated education details
  const alledu = document.getElementById("alleducation");
  // Get the container holding all input fields for education details in the form
  const eduFields = document.getElementById("eduBox");

  if (alledu && eduFields) {
    // Clear existing education details in the resume
    alledu.innerHTML = "";

    // Get all inputs from the education form
    const inputs = eduFields.querySelectorAll(".edu-box");

    for (let i = 0; i < inputs.length; i += 3) {
      // Create a new div for each education entry
      const eduDiv = document.createElement("div");

      // Get degree input value
      const degree = (inputs[i].querySelector("input") as HTMLInputElement)
        .value;
      const institute = (
        inputs[i + 1].querySelector("input") as HTMLInputElement
      ).value;
      const year = (inputs[i + 2].querySelector("input") as HTMLInputElement)
        .value;

      // Create HTML elements for displaying degree, institute, and year
      const degreeElement = document.createElement("h3");
      degreeElement.textContent = degree;

      const instituteElement = document.createElement("h4");
      instituteElement.textContent = institute;

      const yearElement = document.createElement("h5");
      yearElement.textContent = year ? `complete ${year}` : "";

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
  const allSkill = document.getElementById("LanguageSkills");
  // Get form container with all language input fields
  const allSkillFields = document.getElementById("languageBox");

  if (allSkill && allSkillFields) {
    // Clear current languages in the resume section
    allSkill.innerHTML = "";

    // Get all language input fields
    const inputs = allSkillFields.querySelectorAll(".languageBox");

    // Add each language to the resume list
    for (let i = 0; i < inputs.length; i++) {
      const li = document.createElement("li");
      // Get value from each input field
      const input = (inputs[i].querySelector("input") as HTMLInputElement)
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
  const allinterest = document.getElementById("InterestData");
  // Get form container with all interest input fields
  const allinterestFields = document.getElementById("InterestBox");

  if (allinterest && allinterestFields) {
    // Clear existing interests in the resume section
    allinterest.innerHTML = "";

    // Select all interest input fields
    const inputs = allinterestFields.querySelectorAll(".InterestBox");

    // Add each interest to the resume
    for (let i = 0; i < inputs.length; i++) {
      const h4 = document.createElement("h4");
      // Get value from each input field
      const input = (inputs[i].querySelector("input") as HTMLInputElement)
        .value;
      h4.textContent = input;

      // Append interest to the InterestData container
      allinterest.appendChild(h4);
    }
  }
}

function UpdatedSkills() {
  // Get the container where we want to show the updated skills details
  const allSkills = document.getElementById("allSkills");
  // Get the container holding all input fields for skill details in the form
  const skillFields = document.getElementById("skillBox");

  if (allSkills && skillFields) {
    // Clear existing skills details in the resume
    allSkills.innerHTML = "";

    // Get all inputs from the skill form
    const inputs = skillFields.querySelectorAll(".skill-box");

    for (let i = 0; i < inputs.length; i += 2) {
      // Get skill name input value
      const skillName = (inputs[i].querySelector("input") as HTMLInputElement)
        .value;
      const skillLevel = (
        inputs[i + 1].querySelector("input") as HTMLInputElement
      ).value;

      // Create a new div for each skill entry
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";

      // Create the skill content with name and level bar
      skillDiv.innerHTML = `
        <h4>${skillName}</h4>
        <div class="outerBox">
          <div class="innerBox" style="width: ${skillLevel};"></div>
        </div>
      `;

      // Add new skill div to the main skills section
      allSkills.appendChild(skillDiv);
    }
  } else {
    console.log("Skills list or skills field element not found.");
  }
}

function UpdatedProject() {
  const projectList = document.getElementById(
    "projectList"
  ) as HTMLDivElement | null;
  const projectField = document.getElementById(
    "ProjectsBox"
  ) as HTMLDivElement | null;

  if (projectList && projectField) {
    projectList.innerHTML = ""; // Clear existing projects

    const inputs = projectField.querySelectorAll(".project-Box");
    let toggleProject: HTMLDivElement | null = null; // Variable to hold extra projects container

    // Loop through inputs in sets of three for each project
    for (let i = 0; i < inputs.length; i += 3) {
      // Get form input values for each project
      const title = (inputs[i].querySelector("input") as HTMLInputElement)
        .value;
      const description = (
        inputs[i + 1].querySelector("input") as HTMLInputElement
      ).value;
      const link = (inputs[i + 2].querySelector("input") as HTMLInputElement)
        .value;

      // Create project container div
      const div = document.createElement("div");
      div.className = "projects";

      // Create title, description, and link elements
      const h3 = document.createElement("h3");
      h3.className = "projectName";
      h3.innerText = title;

      const p = document.createElement("p");
      p.innerText = description;

      const linkElement = document.createElement("p");
      linkElement.innerHTML = `<strong>Project Link:</strong> <a href="${link}" target="_blank">${link}</a>`;

      // Append elements to project container
      div.append(h3, p, linkElement);

      // Add the toggle button to the second project only
      if (i === 3) {
        const toggleButtonDiv = document.createElement("div");
        toggleButtonDiv.className = "toggle-box";
        toggleButtonDiv.innerHTML = `
          <button class="toggle-button" onclick="toggleProjects()">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        `;
        div.append(toggleButtonDiv);
      }

      // Append the first two projects directly
      if (i < 6) {
        projectList.append(div);
      } else {
        // For projects beyond the first two, add to a separate container
        if (!toggleProject) {
          toggleProject = document.createElement("div");
          toggleProject.id = "toggle-project";
          projectList.append(toggleProject);
        }

        toggleProject.append(div);
      }
    }
  } else {
    console.log("Project list or project field element not found.");
  }
}

// Helper function to update the Education section of the resume
function UpdateExperienceSec() {
  // Get the container where we want to show the updated education details
  const alledu = document.getElementById("allExp");
  // Get the container holding all input fields for education details in the form
  const eduFields = document.getElementById("WorkExperienceBox");

  if (alledu && eduFields) {
    // Clear existing education details in the resume
    alledu.innerHTML = "";

    // Get all inputs from the education form
    const inputs = eduFields.querySelectorAll(".Box");

    for (let i = 0; i < inputs.length; i += 3) {
      // Get degree input value
      const degree = (inputs[i].querySelector("input") as HTMLInputElement)
        .value;
      const institute = (
        inputs[i + 1].querySelector("input") as HTMLInputElement
      ).value;
      const year = (inputs[i + 2].querySelector("input") as HTMLInputElement)
        .value;

      // Create a new div for each education entry
      const eduDiv = document.createElement("div");
      eduDiv.innerHTML = `  <div class="exTitle">
                  <h3>${degree}</h3>
                  <h4 class="start">${year}</h4>
                  </div>
                  <p class="para"> ${institute} </p>      `;

      // Add new education div to the main education section
      alledu.appendChild(eduDiv);
    }
  }
}

// Helper function to update text
function updateText(elementId, value) {
  const element = document.getElementById(elementId) as HTMLElement | null;
  if (element && value) {
    element.innerText = value;
  } else {
    console.log(`${elementId} element not found or value is empty.`);
  }
}

// Form Submit
function generateResume(event) {
  event.preventDefault();

  const eduBox = document.getElementsByClassName("edu-box");
  console.log(eduBox);
  // Get input values
  const Name = (document.getElementById("name") as HTMLInputElement | null)
    ?.value;
  const FName = (
    document.getElementById("father-name") as HTMLInputElement | null
  )?.value;
  const Designation = (
    document.getElementById("Designation") as HTMLInputElement | null
  )?.value;
  const Number = (document.getElementById("No") as HTMLInputElement | null)
    ?.value;
  const address = (
    document.getElementById("address") as HTMLInputElement | null
  )?.value;
  const email = (document.getElementById("email") as HTMLInputElement | null)
    ?.value;
  const WebLink = (
    document.getElementById("webLink") as HTMLInputElement | null
  )?.value;
  const LinkedinidLink = (
    document.getElementById("Linkedin") as HTMLInputElement | null
  )?.value;
  const Profile = (
    document.getElementById("profile") as HTMLInputElement | null
  )?.value;

  // code for setting image
  const imageInput = document.getElementById(
    "Image"
  ) as HTMLInputElement | null;
  const resumeImage = document.getElementById(
    "ResumeImage"
  ) as HTMLImageElement | null;

  if (imageInput && resumeImage) {
    const file = imageInput.files?.[0]; // Optional chaining to handle null cases
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        if (reader.result) {
          resumeImage.src = reader.result as string;
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

  const allInputs = document.querySelectorAll('input');

  allInputs.forEach(input => {
    (input as HTMLInputElement).value = ''; // Clear each input field
  });
  
}