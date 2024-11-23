function editResume() {
    var edit = document.querySelectorAll('.edit');
    edit.forEach(function (el) {
        el.setAttribute('contenteditable', 'true');
    });
}
function savedChanges() {
    var edit = document.querySelectorAll('.edit');
    edit.forEach(function (el) {
        el.setAttribute('contenteditable', 'false');
    });
}
// dowmload resume
function downloadResume() {
    // Print the content
    window.print();
}
// generate Unique Url
function copyLink() {
    var _a, _b, _c, _d;
    var Name = (_b = (_a = document.getElementById('ResumeName')) === null || _a === void 0 ? void 0 : _a.innerText) !== null && _b !== void 0 ? _b : '';
    var f_Name = (_d = (_c = document.getElementById('ResumeFName')) === null || _c === void 0 ? void 0 : _c.innerText) !== null && _d !== void 0 ? _d : '';
    // Create query parameters
    var queryParams = new URLSearchParams({
        name: Name,
        f_Name: f_Name
    });
    // Create the unique URL using the query string
    var uniqueUrl = "".concat(window.location.origin, "?").concat(queryParams.toString());
    // Copy the URL to clipboard
    navigator.clipboard.writeText(uniqueUrl)
        .then(function () {
        alert(' Copied  Link ');
    })
        .catch(function (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy the link');
    });
    // Change the URL in the address bar without reloading
    window.history.replaceState(null, '', uniqueUrl);
}
document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var f_Name = urlParams.get('f_Name');
    // If the user is on the unique URL, show the resume content
    if (name && f_Name) {
        document.querySelector('header').style.display = 'none';
        document.getElementById('downloadResume').style.display = 'none';
        document.getElementById('copyLink').style.display = 'none';
        document.getElementById('build').style.paddingBottom = '4em';
    }
});
