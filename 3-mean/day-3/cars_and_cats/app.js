const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);
	
	if(request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/cats') {
		fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/cars/new') {
		fs.readFile('./views/new_car.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	
	else if (request.url === '/images/car-1.jpg') {
		fs.readFile('./images/car-1.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/car-2.jpg') {
		fs.readFile('./images/car-2.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/car-3.jpg') {
		fs.readFile('./images/car-3.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/car-4.jpg') {
		fs.readFile('./images/car-4.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cat-1.jpg') {
		fs.readFile('./images/cat-1.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cat-2.jpg') {
		fs.readFile('./images/cat-2.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cat-3.jpg') {
		fs.readFile('./images/cat-3.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cat-4.jpg') {
		fs.readFile('./images/cat-4.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}

	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(7077);
console.log("Running in localhost at port 7077");