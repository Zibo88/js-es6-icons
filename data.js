const allCategory = [
	{
		name: 'CAT',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-cat"></i>'
	},
	{
		name: 'CROW',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-crow"></i>'
	},
	{
		name: 'DOG',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-dog"></i>'
	},
	{
		name: 'DOVE',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-dove"></i>'
	},
	{
		name: 'DRAGON',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-dragon"></i>'
	},
	{
		name: 'HORSE',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-horse"></i>'
	},
	{
		name: 'HIPPO',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-hippo"></i>'
	},
	{
		name: 'FISH',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
		icon: '<i class="fa-solid fa-fish"></i>'
	},
	{
		name: 'CARROT	',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
		icon: '<i class="fa-solid fa-carrot"></i>'
	},
	{
		name: 'APPLE-ALT',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
		icon: '<i class="fa-solid fa-apple-whole"></i>'
	},
	{
		name: 'LEMON',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
		icon: '<i class="fa-solid fa-lemon"></i>'
	},
	{
		name: 'PEPPER-HOT',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
		icon: '<i class="fa-solid fa-pepper-hot"></i>'
	},
	{
		name: 'USER-RESTAURANT',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
		icon: '<i class="fa-solid fa-user-astronaut"></i>'
	},
	{
		name: 'USER-ASTRONAUT',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
		icon: '<i class="fa-solid fa-user-graduate"></i>'
	},
	{
		name: 'USER-NINJA',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
		icon: '<i class="fa-solid fa-user-ninja"></i>'
	},
	{
		name: 'USER-SECRET',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
		icon: '<i class="fa-solid fa-user-secret"></i>'
	}
];



// Categorizziamo i diversi elementi di allCategory in base ai valori selezionati： All, Animal, Vegetable e User
// Prendiamo fuori tutti i type animal per inserirli in un array 
const onlyAnimal = allCategory.filter((elementAnimal) => {
	const copyElement = {...elementAnimal}
	return copyElement.type === 'animal';
});

console.log(onlyAnimal);

// Prendiamo fuori tutti i type vegetable per inserirli in un array 
const onlyVegetable = allCategory.filter((elementVegetable) => {
	const copyElement = {...elementVegetable}
	return copyElement.type === 'vegetable';
});

console.log(onlyVegetable);
// Prendiamo fuori tutti i type user per inserirli in un array 
const onlyUser = allCategory.filter((elementUser) => {
	const copyElement = {...elementUser}
	return copyElement.type === 'user';
});

console.log(onlyUser);
console.log(allCategory);

// Creiamo la variante per rende disponibili al display solo gli elementi della categoria scelta dall'utente
const userChooseCategory = document.querySelector('#category').value;

let showedCard;

console.log(userChooseCategory);
if(userChooseCategory === 'all') {
	showedCard = allCategory;
} else if(userChooseCategory === 'animal') {
	showedCard = onlyAnimal;
} else if(userChooseCategory === 'vegetable') {
	showedCard = onlyVegetable;
} else if(userChooseCategory === 'user') {
	showedCard = onlyUser;
};

console.log('categoria', showedCard);