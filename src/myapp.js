const http = require('http');
const fs = require('fs').promises; // Use fs.promises for async/await file operations
const path = require('path');

const server = http.createServer(async (req, res) => {
    // Enable CORS (Cross-Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // Handle pre-flight requests
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/submit-feedback') {
        await handleFeedbackSubmission(req, res);
    } else {
        // Serve your React build files (assuming they are in a 'build' folder)
        const filePath = path.join(__dirname, 'build', req.url);
        const contentType = getContentType(filePath);

        try {
            const content = await fs.readFile(filePath, 'utf8');
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        } catch (err) {
            res.writeHead(404);
            res.end('File not found!');
        }
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.js':
            return 'text/javascript';
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        // Add more cases for different file types if needed
        default:
            return 'text/plain';
    }
}

async function handleFeedbackSubmission(req, res) {
    let data = '';

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', async () => {
        try {
            const feedbackData = JSON.parse(data);
            await saveFeedbackData(feedbackData);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error parsing feedback data:', error);
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Error parsing feedback data');
        }
    });
}

async function saveFeedbackData(feedbackData) {
    const fileName = 'feedbackData.json';
    const filePath = path.join(__dirname, fileName);

    try {
        // Read file content (if the file exists)
        const content = await fs.readFile(filePath, 'utf8');

        // Parse existing data or initialize as an empty array
        const existingData = content ? JSON.parse(content) : [];

        // Add new feedback data
        existingData.push(feedbackData);

        // Write the updated data back to the file
        await fs.writeFile(filePath, JSON.stringify(existingData));

        console.log('Feedback data saved successfully!');
    } catch (error) {
        console.error('Error saving feedback data:', error);
    }
}
