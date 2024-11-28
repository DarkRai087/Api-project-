const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

function fetchPostsWithTimeout() {
    outputDiv.textContent = 'Loading...';

    const fetchPromise = fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const postTitles = data.posts.map(post => post.title).join('<br>');
            outputDiv.innerHTML = `<strong>Fetched Posts:</strong><br>${postTitles}`;
        });

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, 5000);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchButton.addEventListener('click', () => {
    fetchPostsWithTimeout()
        .catch(error => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});