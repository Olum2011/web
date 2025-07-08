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

  // Unterseiten-Inhalte für Tennis
  const unterDetails = {
    geschichte: {
      urspruenge: '<h3>Ursprünge</h3><p>Die Ursprünge des Tennis reichen bis ins 12. Jahrhundert zurück. Damals wurde mit der Hand gespielt, später mit Schlägern. Das moderne Tennis entstand im 19. Jahrhundert in England.</p>',
      entwicklung: '<h3>Entwicklung</h3><p>Von Holzschlägern zu Hightech-Rackets, von weißen Bällen zu gelben – Tennis hat sich stetig weiterentwickelt. Große Turniere wie Wimbledon prägen die Geschichte.</p>',
      moderne: '<h3>Moderne</h3><p>Heute ist Tennis ein globaler Profisport mit Millionen Fans, TV-Übertragungen und Hightech-Analysen. Neue Trainingsmethoden und Technik prägen das Spiel.</p>'
    },
    regeln: {
      grundlagen: '<h3>Grundlagen</h3><ul><li>Ein Spiel besteht aus Sätzen, Games und Punkten.</li><li>Der Ball darf nur einmal aufspringen.</li><li>Es gibt Einzel- und Doppelmatches.</li></ul>',
      begriffe: '<h3>Wichtige Begriffe</h3><ul><li>Aufschlag: Der erste Schlag eines Ballwechsels.</li><li>Return: Die Antwort auf den Aufschlag.</li><li>Volley: Schlag aus der Luft.</li><li>Break: Gewinn eines gegnerischen Aufschlagspiels.</li></ul>',
      punkte: '<h3>Punktesystem</h3><p>0 (Love), 15, 30, 40, Vorteil, Spiel. Drei gewonnene Sätze (bei Grand Slams der Herren: fünf) bedeuten den Matchgewinn.</p>'
    },
    stars: {
      maenner: '<h3>Herren</h3><ul class="spieler-liste">\
<li><button class="spieler-btn" data-spieler="federer">Roger Federer</button></li>\
<li><button class="spieler-btn" data-spieler="nadal">Rafael Nadal</button></li>\
<li><button class="spieler-btn" data-spieler="djokovic">Novak Djokovic</button></li>\
<li><button class="spieler-btn" data-spieler="borg">Björn Borg</button></li>\
</ul>',
      frauen: '<h3>Damen</h3><ul class="spieler-liste">\
<li><button class="spieler-btn" data-spieler="williams">Serena Williams</button></li>\
<li><button class="spieler-btn" data-spieler="graf">Steffi Graf</button></li>\
<li><button class="spieler-btn" data-spieler="navratilova">Martina Navratilova</button></li>\
<li><button class="spieler-btn" data-spieler="osaka">Naomi Osaka</button></li>\
</ul>',
      legenden: '<h3>Legenden</h3><ul class="spieler-liste">\
<li><button class="spieler-btn" data-spieler="laver">Rod Laver</button></li>\
<li><button class="spieler-btn" data-spieler="king">Billie Jean King</button></li>\
<li><button class="spieler-btn" data-spieler="agassi">Andre Agassi</button></li>\
</ul>'
    },
    ben: {
      wer: '<h3>Wer ist Ben?</h3><p>Ben ist ein guter Freund, der zwar kein Tennis spielt, aber immer für gute Stimmung sorgt. Er unterstützt seine Freunde bei Turnieren, feuert sie an und bringt mit seinem Humor alle zum Lachen.</p>',
      momente: '<h3>Bens Momente</h3><ul><li>Ben organisiert das Grillen nach dem Tennisturnier.</li><li>Er ist der beste Fanclub-Leiter und sorgt für Motivation am Spielfeldrand.</li><li>Ben kennt die besten Tennis-Witze.</li></ul>',
      zitat: '<h3>Zitat</h3><blockquote>„Ich spiele zwar kein Tennis, aber ich bin immer dabei, wenn es Spaß macht!“ – Ben</blockquote>'
    }
  };

  // Spieler-Details für Tennis-Stars mit Fun Facts
  const spielerDetails = {
    federer: '<h4>Roger Federer</h4><p>Schweizer Tennislegende, 20 Grand-Slam-Titel, bekannt für Eleganz und Vielseitigkeit auf dem Platz.</p><ul><li>Fun Fact: Federer hat in seiner Karriere über 1.200 Matches gewonnen.</li><li>Fun Fact: Er spricht fließend Deutsch, Englisch und Französisch.</li></ul>',
    nadal: '<h4>Rafael Nadal</h4><p>Spanischer Sandplatzkönig, 22 Grand-Slam-Titel, berühmt für seine Ausdauer und seinen Kampfgeist.</p><ul><li>Fun Fact: Nadal hat 14 Mal die French Open gewonnen – Rekord!</li><li>Fun Fact: Er ist Linkshänder, schreibt aber mit rechts.</li></ul>',
    djokovic: '<h4>Novak Djokovic</h4><p>Serbischer Ausnahmespieler, über 20 Grand-Slam-Titel, dominiert seit Jahren die Weltrangliste.</p><ul><li>Fun Fact: Djokovic ist für seine extreme Beweglichkeit und Dehnübungen bekannt.</li><li>Fun Fact: Er hat eine glutenfreie Ernährung.</li></ul>',
    borg: '<h4>Björn Borg</h4><p>Schwedische Tennisikone, 11 Grand-Slam-Titel, revolutionierte das Spiel mit seiner Coolness.</p><ul><li>Fun Fact: Borg gewann fünfmal in Folge Wimbledon.</li><li>Fun Fact: Er zog sich mit nur 26 Jahren vom Profitennis zurück.</li></ul>',
    williams: '<h4>Serena Williams</h4><p>US-amerikanische Tenniskönigin, 23 Grand-Slam-Titel, eine der erfolgreichsten Sportlerinnen aller Zeiten.</p><ul><li>Fun Fact: Serena hat auch einen Modeabschluss.</li><li>Fun Fact: Sie gewann 2017 die Australian Open schwanger.</li></ul>',
    graf: '<h4>Steffi Graf</h4><p>Deutsche Tennislegende, 22 Grand-Slam-Titel, einziger Golden Slam der Geschichte (1988).</p><ul><li>Fun Fact: Steffi Graf gewann 1988 alle vier Grand Slams und Olympia-Gold.</li><li>Fun Fact: Ihr Vorname ist eigentlich Stefanie.</li></ul>',
    navratilova: '<h4>Martina Navratilova</h4><p>Tschechisch-US-amerikanische Spielerin, 18 Grand-Slam-Titel im Einzel, Rekordhalterin im Doppel.</p><ul><li>Fun Fact: Sie gewann 59 Grand-Slam-Titel insgesamt (Einzel, Doppel, Mixed).</li><li>Fun Fact: Sie ist Linkshänderin.</li></ul>',
    osaka: '<h4>Naomi Osaka</h4><p>Japanische Topspielerin, mehrfache Grand-Slam-Siegerin, bekannt für ihre Power und Fairness.</p><ul><li>Fun Fact: Osaka wurde in Japan geboren, wuchs aber in den USA auf.</li><li>Fun Fact: Sie ist für ihr Engagement gegen Rassismus bekannt.</li></ul>',
    laver: '<h4>Rod Laver</h4><p>Australische Tennislegende, einziger Spieler mit zwei Grand Slams (alle vier Majors in einem Jahr).</p><ul><li>Fun Fact: Das Stadion der Australian Open ist nach ihm benannt.</li><li>Fun Fact: Er gewann 200 Einzel-Titel – Rekord!</li></ul>',
    king: '<h4>Billie Jean King</h4><p>US-amerikanische Pionierin, 39 Grand-Slam-Titel (Einzel, Doppel, Mixed), setzte sich für Gleichberechtigung ein.</p><ul><li>Fun Fact: Sie gewann das berühmte "Battle of the Sexes"-Match 1973.</li><li>Fun Fact: Sie gründete die WTA (Women’s Tennis Association).</li></ul>',
    agassi: '<h4>Andre Agassi</h4><p>US-amerikanischer Superstar, 8 Grand-Slam-Titel, bekannt für sein Comeback und seine Wandlungsfähigkeit.</p><ul><li>Fun Fact: Agassi gewann alle vier Grand Slams und olympisches Gold.</li><li>Fun Fact: Er ist mit Steffi Graf verheiratet.</li></ul>'
  };

  function setupUnterseiten(sectionId, detailsId, unterKey) {
    const btns = document.querySelectorAll(`#${sectionId} .unter-btn`);
    const detailsDiv = document.getElementById(detailsId);
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const key = this.getAttribute('data-unter');
        detailsDiv.innerHTML = unterDetails[unterKey][key] || '';
        detailsDiv.classList.add('active');
      });
    });
    // Standardmäßig erstes Thema anzeigen
    if (btns.length > 0) {
      btns[0].click();
    }
  }

  setupUnterseiten('geschichte', 'geschichte-details', 'geschichte');
  setupUnterseiten('regeln', 'regeln-details', 'regeln');
  setupUnterseiten('stars', 'stars-details', 'stars');
  setupUnterseiten('ben', 'ben-details', 'ben');

  // Event-Delegation für Spieler-Buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('spieler-btn')) {
      const spieler = e.target.getAttribute('data-spieler');
      const spielerDiv = document.getElementById('spieler-details');
      if (spielerDetails[spieler]) {
        spielerDiv.innerHTML = spielerDetails[spieler];
        spielerDiv.classList.add('active');
      }
    }
  });
});

