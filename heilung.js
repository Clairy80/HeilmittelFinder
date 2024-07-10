const heilmittel = {
    emotional: {
        stress: { 
            stein: 'Amethyst', 
            pflanze: 'Lavendel', 
            öl: 'Lavendelöl' 
        },
        angst: { 
            stein: 'Lepidolith', 
            pflanze: 'Kamille', 
            öl: 'Bergamotteöl' 
        },
        liebeskummer: { 
            stein: 'Rosenquarz', 
            pflanze: 'Herzgespann', 
            öl: 'Rosenöl' 
        },
        depression: { 
            stein: 'Schwarzer Onyx', 
            pflanze: 'Johanniskraut', 
            öl: 'Zitronenöl' 
        },
        wut: { 
            stein: 'Howlith', 
            pflanze: 'Baldrian', 
            öl: 'Ylang-Ylang-Öl' 
        },
        nervosität: { 
            stein: 'Fluorit', 
            pflanze: 'Melisse', 
            öl: 'Lavendelöl' 
        },
        trauer: { 
            stein: 'Obsidian', 
            pflanze: 'Schafgarbe', 
            öl: 'Sandelholzöl' 
        },
        eifersucht: { 
            stein: 'Peridot', 
            pflanze: 'Basilikum', 
            öl: 'Patchouliöl' 
        }
    },

    koerperlich: {
        kopfschmerzen: { 
            stein: 'Sodalith', 
            pflanze: 'Pfefferminze', 
            öl: 'Pfefferminzöl' 
        },
        müdigkeit: { 
            stein: 'Citrin', 
            pflanze: 'Ginseng', 
            öl: 'Zitronenöl' 
        },
        verdauungsbeschwerden: { 
            stein: 'Malachit', 
            pflanze: 'Ingwer', 
            öl: 'Ingweröl' 
        },
        katergefühl: { 
            stein: 'Amethyst', 
            pflanze: 'Mariendistel', 
            öl: 'Pfefferminzöl' 
        },
        stiche: { 
            stein: 'Achat', 
            pflanze: 'Aloe Vera', 
            öl: 'Teebaumöl' 
        },
        schlaflosigkeit: { 
            stein: 'Mondstein', 
            pflanze: 'Lavendel', 
            öl: 'Lavendelöl' 
        },
        erkältung: { 
            stein: 'Aquamarin', 
            pflanze: 'Eukalyptus', 
            öl: 'Eukalyptusöl' 
        },
        muskelschmerzen: { 
            stein: 'Hämatit', 
            pflanze: 'Arnika', 
            öl: 'Rosmarinöl' 
        },
        hautirritationen: { 
            stein: 'Rhodonit', 
            pflanze: 'Ringelblume', 
            öl: 'Kamillenöl' 
        },
        rückenschmerzen: { 
            stein: 'Tigerauge', 
            pflanze: 'Teufelskralle', 
            öl: 'Wintergrünöl' 
        },
        immunsystemStärken: { 
            stein: 'Bernstein', 
            pflanze: 'Echinacea', 
            öl: 'Thymianöl' 
        },
        entzündungen: { 
            stein: 'Jaspis', 
            pflanze: 'Kurkuma', 
            öl: 'Kurkumaöl' 
        }
    }
};

function normalizeInput(input) {
    return input
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss');
}

function getMedizin(art, problem) {
    const kategorie = heilmittel[normalizeInput(art)];
    return kategorie ? kategorie[normalizeInput(problem)] : null;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Ist dein Problem körperlich oder emotional? ', (art) => {
        rl.question('Welches Problem hast du? ', (problem) => {
            const medizin = getMedizin(art, problem);
            if (medizin) {
                console.log(`Für ${problem} empfehle ich den Heilstein ${medizin.stein}, die Heilpflanze ${medizin.pflanze} und das Ätherische Öl ${medizin.öl}.`);
            } else {
                console.log('Für dieses Problem habe ich leider keinen Vorschlag.');
            }
            rl.question('Möchtest du ein weiteres Problem eingeben (ja/nein)? ', (antwort) => {
                if (normalizeInput(antwort) === 'ja') {
                    promptUser();
                } else {
                    rl.close();
                }
            });
        });
    });
}

promptUser();
