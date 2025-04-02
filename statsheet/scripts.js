document.addEventListener('DOMContentLoaded', () => {
    const characterForm = document.getElementById('characterForm');
    const characterDetails = document.getElementById('characterDetails');
    const characterInfo = document.getElementById('characterInfo');
    const characterDisplay = document.querySelector('.character-display');
  
    // Function to load character data from localStorage
    const loadCharacter = () => {
      const savedCharacter = localStorage.getItem('character');
      if (savedCharacter) {
        const character = JSON.parse(savedCharacter);
        displayCharacter(character);
      }
    };
  
    // Display character details on the home page
    const displayCharacter = (character) => {
      if (characterDetails) {
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
      }
  
      if (characterInfo) {
        characterDisplay.style.display = 'block';
        characterInfo.innerHTML = `
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
      }
    };
  
    // Handle form submission on Character Sheet page
    if (characterForm) {
      characterForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const character = {
          name: document.getElementById('name').value,
          race: document.getElementById('race').value,
          class: document.getElementById('class').value,
          level: document.getElementById('level').value,
          strength: document.getElementById('strength').value,
          dexterity: document.getElementById('dexterity').value,
          constitution: document.getElementById('constitution').value,
          intelligence: document.getElementById('intelligence').value,
          wisdom: document.getElementById('wisdom').value,
          charisma: document.getElementById('charisma').value,
          abilities: document.getElementById('abilities').value,
          skills: document.getElementById('skills').value,
          inventory: document.getElementById('inventory').value
        };
  
        // Save character to localStorage
        localStorage.setItem('character', JSON.stringify(character));
        displayCharacter(character);
      });
    }
  
    // Initialize the page by loading character data if available
    loadCharacter();
  });