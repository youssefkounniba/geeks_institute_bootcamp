const select = document.getElementById('genres');

// 1. Display the value of the selected option
console.log("Selected value:", select.value);

// 2. Add an additional option: <option value="classic">Classic</option>
const newOption = document.createElement('option');
newOption.value = "classic";
newOption.textContent = "Classic";
select.appendChild(newOption);

// 3. The newly added option should be selected by default
newOption.selected = true;