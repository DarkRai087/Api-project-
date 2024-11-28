// Get references to the button and the output div elements
const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

/**
 * Asynchronous function to fetch posts from an API with error handling.
 */
async function fetchPostsWithErrorHandling() {
    try {
       
        outputDiv.textContent = 'Loading...';

        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Set a 5-second timeout

      
        const response = await fetch('https://dummyjson.com/posts', { signal: controller.signal });
        
        
        clearTimeout(timeoutId);

        
        const data = await response.json();

        
        const postTitles = data.posts.map(post => post.title).join('<br>');
        
        
        outputDiv.innerHTML = `<strong>Fetched Posts:</strong><br>${postTitles}`;
    } catch (error) {
        
        if (error.name === 'AbortError') {
            outputDiv.textContent = 'Error: Network request timed out'; 
        } else {
            outputDiv.textContent = `Error: ${error.message}`; 
        }
    }
}

// Add a click event listener
fetchButton.addEventListener('click', fetchPostsWithErrorHandling);
