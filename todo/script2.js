window.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('.message');
	const button = document.querySelector('.add');
	const ul = document.querySelector('.todo');

	let allItems = [];

	if (localStorage.getItem('todo')) {
		allItems = JSON.parse(localStorage.getItem('todo'));
		addMessages(allItems);
	}

	function addMessages(massive) {
		let displayMessage = '';
		if (allItems.length === 0) {
			ul.innerHTML = null;
		} else {
			massive.forEach((item, i) => {
				displayMessage += `
				<li>
					<input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}/>
					<label class="${item.important ? 'important' : ''} unselected" for="item_${i}">${item.label}</label>
					<i id='item_${i}' class="fa fa-trash-o"></i>
				</li>
			`;
				ul.innerHTML = displayMessage;
			});
		}
		input.value = '';
	}

	function deleteItem() {
		document.querySelectorAll('.fa-trash-o').forEach((item, i) => {
			item.addEventListener('click', (e) => {
				let idInput = item.getAttribute('id');
				let forLabel = ul.querySelector('[for='+ idInput +']');
				if (idInput === forLabel.getAttribute('for')) {
					allItems.splice(i, 1);
					localStorage.setItem('todo', JSON.stringify(allItems));
					addMessages(allItems);
					deleteItem();
				}
			});
		});
	}

	deleteItem();

	ul.addEventListener('change', (e) => {
		let idInput = e.target.getAttribute('id');
		let forLabel = ul.querySelector('[for='+ idInput +']');
		let valueLabel = forLabel.innerHTML;

		allItems.forEach(item => {
			if (item.label === valueLabel) {
				item.checked = !item.checked;
				localStorage.setItem('todo', JSON.stringify(allItems));
			}
		});
	});

	const addImportant = (listener) => {
		ul.addEventListener(listener, (e) => {
			e.preventDefault();
			allItems.forEach((item, i) => {
				if (item.label === e.target.innerHTML) {
					if (e.ctrlKey || e.metaKey) {
						allItems.splice(i, 1);
					} else {
						item.important = !item.important;
					}
					localStorage.setItem('todo', JSON.stringify(allItems));
					addMessages(allItems);
					deleteItem();
				}
			});
		});
	};

	addImportant('contextmenu');
	addImportant('dblclick');

	const clickButton = (listener, important) => {
			button.addEventListener(listener, (e) => {
				if (input.value !== '') {
					e.preventDefault();
					const newItem = {
						label: input.value,
						important,
						checked: false
					};
					allItems.push(newItem);
					localStorage.setItem('todo', JSON.stringify(allItems));
					addMessages(allItems);
				} else {
					return;
				}
				deleteItem();
			});
	};

	clickButton('click', false);
	clickButton('contextmenu', true);

	/*FILTERS*/
	const done = document.querySelector('.filter__done');
	const important = document.querySelector('.filter__important');
	const all = document.querySelector('.filter__all');

	done.addEventListener('click', () => {
		const doneList = allItems.filter(item => item.checked);
		addMessages(doneList);
		deleteItem();
	});

	important.addEventListener('click', () => {
		const importantList = allItems.filter(item => item.important);
		addMessages(importantList);
		deleteItem();
	});

	all.addEventListener('click', () => {
		allItems = JSON.parse(localStorage.getItem('todo'));
		addMessages(allItems);
		deleteItem();
	});
});