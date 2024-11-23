function editResume(){
    const edit = document.querySelectorAll('.edit')
    edit.forEach(el => {
        el.setAttribute('contenteditable', 'true')
    });
    }
    
    function savedChanges(){
     const edit = document.querySelectorAll('.edit')
    edit.forEach(el => {
        el.setAttribute('contenteditable', 'false')
    });
    }
    
    
    // dowmload resume
    function downloadResume() {
        // Print the content
        window.print();
    
    }
    
    // generate Unique Url
    
    function copyLink() {
        const Name = document.getElementById('ResumeName')?.innerText ?? '';
        const f_Name = document.getElementById('ResumeFName')?.innerText ?? '';
        
        // Create query parameters
        const queryParams = new URLSearchParams({
            name: Name,
            f_Name: f_Name
        });
        
        // Create the unique URL using the query string
        const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`;
    
        // Copy the URL to clipboard
        navigator.clipboard.writeText(uniqueUrl)
            .then(() => {
                alert(' Copied  Link ');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy the link');
            });
    
        // Change the URL in the address bar without reloading
        window.history.replaceState(null, '', uniqueUrl);
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const f_Name = urlParams.get('f_Name');
    
        // If the user is on the unique URL, show the resume content
        if (name && f_Name) {
            document.querySelector('header')!.style.display = 'none';
            document.getElementById('downloadResume')!.style.display = 'none';
            document.getElementById('copyLink')!.style.display = 'none';
            document.getElementById('build')!.style.paddingBottom = '4em';
        }
    });