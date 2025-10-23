//your JS code here. If required.
// Get elements
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

changeButton.addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value;
  const colour = document.getElementById('colour_id').value;

  // Reset all grid items to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = 'transparent';
  }

  // Check if blockId is valid
  if (blockId >= 1 && blockId <= 9) {
    document.getElementById(blockId).style.backgroundColor = colour;
  } else {
    alert('Please enter a valid Block ID between 1 and 9');
  }
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = 'transparent';
  }
});
