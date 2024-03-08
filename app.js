const gistId = 'YOUR_G6f6d1d4a865a518af6f0f7b9586a95f1IST_ID';
const filename = 'data.json';

/// Function to fetch and display tasks from the Gist
async function fetchAndDisplayGistContent() {
    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        const data = await response.json();
        const tasks = JSON.parse(data.files[filename].content).tasks;
        
        // Generate HTML for each task and display it
        document.getElementById('itemsList').innerHTML = tasks.map(task => 
            `<li>${task.title} - ${task.description} [${task.completed ? '✅' : '❌'}]</li>`
        ).join('');
    } catch (error) {
        console.error('Failed to fetch Gist content:', error);
        document.getElementById('itemsList').innerHTML = '<li>Error loading tasks.</li>';
    }
}

// Initial fetch of the Gist content
fetchAndDisplayGistContent();