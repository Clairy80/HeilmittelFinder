const heilmittel = {
    emotional: {
        stress: { stein: 'Amethyst', pflanze: 'Lavendel' },
        angst: { stein: 'Lepidolith', pflanze: 'Kamille' },
        liebeskummer: { stein: 'Rosenquarz', pflanze: 'Herzgespann' },

    },

    körperlich: {

        kopfschmerzen: { stein: 'Sodalith', pflanze: 'Pfefferminze' },
        müdigkeit: { stein: 'Citrin', pflanze: 'Ginseng' },
        verdauungsbeschwerden: { stein: 'Malachit', pflanze: 'Ingwer' },
        katergefühl: { stein: 'Amethyst', pflanze: 'Mariendistel' },
        stiche: { stein: 'Achat', pflanze: 'Aloe Vera' },
    }
};

function findeMedizin(art, problem) {
    const kategorie = heilmittel[art.toLowerCase()];
console.log(art, problem)
    return kategorie ? kategorie[problem.toLowerCase()] : null;
    
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Ist dein Problem körperlich oder emotional?', (art) => {
        rl.question('Welches Problem hast du? ', (problem) => {
        const medizin = findeMedizin(art, problem);
        if (medizin) {
            console.log(`Für ${problem} empfehle ich den Heilstein ${heilmittel[art][problem].stein} und die Heilpflanze ${heilmittel[art][problem].pflanze}.`);
        } else {
            console.log('Für dieses Problem habe ich leider keinen Vorschlag.');
        }
    
    rl.question('Möchtest du ein weiteres Problem eingeben (ja/nein)', (art, problem) => {
        if (art.toLowerCase() === 'ja') {
            promptUser();
        } else {
            rl.close();
        }
    });
        });
});
}

promptUser();