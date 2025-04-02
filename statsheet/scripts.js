document.addEventListener('DOMContentLoaded', () => {
    const characterDetails = document.getElementById('characterDetails');
  
    // Load character data from localStorage
    const loadCharacter = () => {
      const savedCharacter = localStorage.getItem('character');
      if (savedCharacter) {
        const character = JSON.parse(savedCharacter);
        displayCharacter(character);
      }
    };
  
    // Display character details on the home page
    const displayCharacter = (character) => {
      characterDetails.innerHTML = `
        <p><strong>Name:</strong> ${character.name}</p>
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Class:</strong> ${character.class}</p>
        <p><strong>Level:</strong> ${character.level}</p>
        <p><strong>Strength:</strong> ${character.strength}</p>
        <p><strong>Dexterity:</strong> ${character.dexterity}</p>
        <p><strong>Constitution:</strong> ${character.constitution}</p>
        <p><strong>Intelligence:</strong> ${character.intelligence}</p>
        <p><strong>Wisdom:</strong> ${character.wisdom}</p>
        <p><strong>Charisma:</strong> ${character.charisma}</p>
        <p><strong>Abilities:</strong> ${character.abilities}</p>
        <p><strong>Skills:</strong> ${character.skills}</p>
        <p><strong>Inventory:</strong> ${character.inventory}</p>
      `;
    };
  
    // Initialize the page by loading character data if available
    loadCharacter();
  });