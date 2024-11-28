const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

async function fetchPostsWithErrorHandling() {
    try {
        outputDiv.textContent = 'Loading...';

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

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

fetchButton.addEventListener('click', fetchPostsWithErrorHandling);