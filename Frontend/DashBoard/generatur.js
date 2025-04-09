function router() {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#/';
  
    // Startseite
    if (hash === '#/' || hash === '') {
      app.innerHTML = '<h2>Willkommen zur Equiverwaltung</h2><p>Bitte wähle eine Option aus der Navigation.</p>';
    } 
    // Login-Seite
    else if (hash.startsWith('#/login')) {
      renderLogin();
    } 
    // Pferde: Neues Pferd hinzufügen (spezielle Route, vor allgemeiner Pferde-Route)
    else if (hash.startsWith('#/horses/new')) {
      renderNewHorseForm();
    } 
    // Pferde: Pferd bearbeiten
    else if (hash.startsWith('#/horses/edit/')) {
      const parts = hash.split('/');
      renderEditHorseForm(parts[3]);
    }}
//     else if (hash.startsWith('#/horses')) {
//       renderHorseList();