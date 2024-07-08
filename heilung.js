const heilmittel = {
    stress: {stein: 'Amethyst', pflanze: 'Lavendel'},
    angst: {stein: 'Lepidolith', pflanze: 'Kamille'},
    kopfschmerzen: {stein: 'Sodalith', pflanze: 'Pfefferminze'},
    müdigkeit: {stein: 'Citrin', pflanze: 'Ginseng'},
    verdauungsbeschwerden: {stein: 'Malachit', pflanze: 'Ingwer'},
    liebeskummer: {stein: 'Rosenquarz', pflanze: 'Herzgespann'},
    stiche: {stein: 'Achat', pflanze: 'Aloe Vera'},
    katergefühl: {stein: 'Amethyst', pflanze: 'Mariendistel'}
};

function findeMedizin (problem) {
    return heilmittel[problem.toLowerCase()];
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Welches Problem hast du? ', (problem) => {
    const medizin = findeMedizin(problem);
    if (medizin){
        console.log(`Für ${problem} empfehle ich den Heilstein ${medizin.stein} und die Heilpflanze ${medizin.pflanze}.`);
    } else {
        console.log('Für dieses Problem habe ich leider keinen Vorschlag.');
    }
rl.close();
});