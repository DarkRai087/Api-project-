const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

function simulateDelay(callback) {
    outputDiv.textContent = 'Loading...';
    setTimeout(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => callback(null, data.posts))
            .catch(error => callback(error, null));
    }, 5000);
}

function handleFetchedPosts(error, posts) {
    if (error) {
        outputDiv.textContent = `Error: ${error.message}`;
        return;
    }

    const postTitles = posts.map(post => post.title).join('<br>');
    outputDiv.innerHTML = `<strong>Fetched Posts:</strong><br>${postTitles}`;
}

fetchButton.addEventListener('click', () => {
    simulateDelay(handleFetchedPosts);
});