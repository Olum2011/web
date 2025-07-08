document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = section.id === id ? 'block' : 'none';
    });
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      showSection(id);
      history.replaceState(null, '', '#' + id);
    });
  });

  // Beim Laden: Zeige die Section entsprechend der URL oder Home
  const initial = location.hash ? location.hash.substring(1) : 'home';
  showSection(initial);

  // Rassen-Details
  const rasseDetails = {
    labrador: {
      name: 'Labrador Retriever',
      text: 'Der Labrador ist freundlich, intelligent und familienfreundlich. Er liebt Wasser, ist leicht zu erziehen und eignet sich hervorragend als Begleithund.'
    },
    schaeferhund: {
      name: 'Deutscher Schäferhund',
      text: 'Der Deutsche Schäferhund ist treu, mutig und vielseitig. Er wird oft als Polizei-, Rettungs- oder Blindenhund eingesetzt.'
    },
    golden: {
      name: 'Golden Retriever',
      text: 'Der Golden Retriever ist sanft, verspielt und lernfreudig. Er ist ein ausgezeichneter Familienhund und liebt es, zu apportieren.'
    },
    bulldogge: {
      name: 'Französische Bulldogge',
      text: 'Die Französische Bulldogge ist charmant, anpassungsfähig und liebevoll. Sie ist ein toller Begleiter für die Stadt.'
    },
    collie: {
      name: 'Border Collie',
      text: 'Der Border Collie ist sehr intelligent, energiegeladen und arbeitsfreudig. Er braucht viel Beschäftigung und Bewegung.'
    }
  };

  const rasseBtns = document.querySelectorAll('.rasse-btn');
  const rasseDetailsDiv = document.getElementById('rasse-details');

  rasseBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const rasse = this.getAttribute('data-rasse');
      if (rasseDetails[rasse]) {
        rasseDetailsDiv.innerHTML = `<h3>${rasseDetails[rasse].name}</h3><p>${rasseDetails[rasse].text}</p>`;
        rasseDetailsDiv.classList.add('active');
      }
    });
  });
});
