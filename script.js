function studentLogin() {
    window.location.href = "student-login.html";
}


function studentDriveLogin() {
    window.location.href = "student-login.html";
}


function placementLogin() {
    alert("Placement Officer Login will be available soon.");
}


function companyLogin() {
    alert("Company Login will be available soon.");
}


function adminLogin() {
    alert("Admin Login will be available soon.");
}


function goToLogin() {
    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });
}


function goToDrives() {
    document.getElementById("drives").scrollIntoView({
        behavior: "smooth"
    });
}


function goToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}


function studentLoginSubmit(event) {

    event.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const password = document.getElementById("studentPassword").value.trim();

    const savedStudent =
        JSON.parse(localStorage.getItem("studentData"));

    if (
        id === "STU1001" &&
        password === "12345"
    ) {

        localStorage.setItem("studentLoggedIn", "true");
        localStorage.setItem("studentId", id);

        window.location.href = "student.html";

        return;
    }


    if (
        savedStudent &&
        savedStudent.studentId === id &&
        savedStudent.password === password
    ) {

        localStorage.setItem("studentLoggedIn", "true");
        localStorage.setItem("studentId", id);

        window.location.href = "student.html";

        return;
    }


    alert("Invalid Student ID or Password.");
}


function registerStudent(event) {

    event.preventDefault();

    const name =
        document.getElementById("regName").value.trim();

    const studentId =
        document.getElementById("regStudentId").value.trim();

    const email =
        document.getElementById("regEmail").value.trim();

    const mobile =
        document.getElementById("regMobile").value.trim();

    const course =
        document.getElementById("regCourse").value;

    const branch =
        document.getElementById("regBranch").value.trim();

    const semester =
        document.getElementById("regSemester").value;

    const cgpa =
        document.getElementById("regCgpa").value.trim();

    const skills =
        document.getElementById("regSkills").value.trim();

    const password =
        document.getElementById("regPassword").value;

    const confirmPassword =
        document.getElementById("regConfirmPassword").value;

    const resume =
        document.getElementById("regResume").files[0];


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    const existingStudent =
        JSON.parse(localStorage.getItem("studentData"));


    if (
        existingStudent &&
        existingStudent.studentId === studentId
    ) {

        alert("Student ID already registered.");

        return;
    }


    const studentData = {

        name: name,

        studentId: studentId,

        email: email,

        mobile: mobile,

        course: course,

        branch: branch,

        semester: semester,

        cgpa: cgpa,

        skills: skills,

        password: password,

        resumeName: resume ? resume.name : ""

    };


    localStorage.setItem(
        "studentData",
        JSON.stringify(studentData)
    );


    alert("Student registration successful.");

    window.location.href = "student-login.html";
}


function logout() {

    localStorage.removeItem("studentLoggedIn");

    localStorage.removeItem("studentId");

    window.location.href = "index.html";
}


function openProfile() {

    window.location.href = "profile.html";
}


function openDrives() {

    window.location.href = "drives.html";
}


function openApplications() {

    window.location.href = "status.html";
}