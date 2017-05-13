function Brewery() {};

Brewery.prototype.brew = function() {
	return `You're barrel of ${this.type} is ready!`;
}

Brewery.factory = function(type) {
	let constr = type,
			newBrewery;

	if (typeof Brewery[constr] !== 'function') {
		throw {
			name: 'Error',
			message: constr + " doesn't exist!"
		};
	}

	if (typeof Brewery[constr].prototype.brew !== 'function') {
		Brewery[constr].prototype = new Brewery();
	}

	newBrewery = new Brewery[constr]();
	return newBrewery;
}

Brewery.Lager = function() {
	this.type = 'lager';
}

Brewery.Porter = function() {
	this.type = 'porter';
}

Brewery.Hefeweizen = function() {
	this.type = 'hefeweizen';
}

let types = ['Lager', 'Porter', 'Hefeweizen'];
types.forEach((type) => {
	let o = Brewery.factory(type);
	console.log(o.brew());
});