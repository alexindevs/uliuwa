const selectTrigger = document.querySelector('.select-trigger');
const selectOptions = document.querySelector('.select-options');
const hiddenSelect = document.querySelector('#serviceType');
const selectedOption = document.querySelector('.selected-option');
const options = document.querySelectorAll('.option');

selectTrigger.addEventListener('click', function() {
  selectOptions.style.display = selectOptions.style.display === 'none' ? 'block' : 'none';
});

options.forEach(option => {
  option.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    const text = this.textContent;

    selectedOption.textContent = text;
    hiddenSelect.value = value;
    selectOptions.style.display = 'none';
  });
});

document.addEventListener('click', function(event) {
  if (!selectTrigger.contains(event.target) && !selectOptions.contains(event.target)) {
    selectOptions.style.display = 'none';
  }
});
