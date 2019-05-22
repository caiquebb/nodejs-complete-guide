const router = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Add User</title></head>');
        res.write('<body>');
        res.write('<h1>Add User</h1>');
        res.write('</body>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<label for="name">Name:</label>');
        res.write('<input id="name" name="name">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
    
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const name = parseBody.split('=')[1];

            console.log('Received name: ' + name);
            res.statusCode = 302
            res.setHeader('Location', '/users');
            return res.end();
        });
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Add User</title></head>');
        res.write('<body>');
        res.write('<h1>List Users</h1>');
        res.write('</body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('<li>User 5</li>');
        res.write('</ul>');
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>Basics Pratice</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = router;
