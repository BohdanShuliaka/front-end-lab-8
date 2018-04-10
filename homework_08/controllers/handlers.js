const fs             = require("fs");
const content        = fs.readFileSync('./data/storage.json');
const data           = JSON.parse(content);

exports.getAll = function(req, res){
	res.status(200).send(data);
};

exports.getById = function(req, res){
	const person = data.find(c => c.id === parseInt(req.params.id));
	if(!person) return res.status(404).send('Person with the given ID was not found!'); 
	res.status(200).send(person);
}
exports.create = (req, res) => {
    const person = {
		"id": data.length + 1,
		"name": req.body.name,
		"band": req.body.band,
		"instrument": req.body.instrument
	};

	if(!req.body.name||!req.body.band||!req.body.instrument){
		return res.sendStatus(400).send('All data is required');
	}

	const personCheck = data.find(c => {return c.name === req.body.name});
	if(personCheck){
		return res.status(409).send({'message' : 'Musician already exist.'});
	}
	data.push(person);
	res.sendStatus(201).send(person);
}
exports.update = (req, res) => {
	const person = data.find(c => c.id === parseInt(req.params.id));
	if(!person) return res.status(404).send('Not found'); 
	person.name = req.body.name;
	person.band = req.body.band;
	person.instrument = req.body.instrument; 
	res.status(200).send(person);
}

exports.delete = (req, res) => {
	const person = data.find(c => c.id === parseInt(req.params.id));
	if(!person) return res.status(404).send('Not found'); 
	const index = data.indexOf(person);
	data.splice(index, 1);
	res.status(200).send({ "message": "Musician has been successfully removed."});
}