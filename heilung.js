const chalk = require('chalk');
const readline = require('readline');

// Beispiel Heilmittel-Daten
const heilmittel = {
    emotional: {
        stress: { 
            stein: 'Amethyst', 
            pflanze: 'Lavendel', 
            öl: 'Lavendelöl',
            beschreibung: 'Hilft bei der Stressbewältigung.',
            anwendungshinweise: 'Ein paar Tropfen ätherisches Öl auf die Haut auftragen oder in die Raumluft verdampfen.'
        },
        angst: { 
            stein: 'Lepidolith', 
            pflanze: 'Kamille', 
            öl: 'Bergamotteöl',
            beschreibung: 'Lindert Angstgefühle und fördert Entspannung.',
            anwendungshinweise: 'Einige Tropfen ätherisches Öl auf ein Taschentuch geben und einatmen.'
        },
        liebeskummer: { 
            stein: 'Rosenquarz', 
            pflanze: 'Herzgespann', 
            öl: 'Rosenöl',
            beschreibung: 'Lindert Liebeskummer und fördert emotionale Heilung.',
            anwendungshinweise: 'Einige Tropfen ätherisches Öl auf die Haut auftragen oder in die Raumluft verdampfen.'
        },
        // Weitere Emotionen ...
    },
    koerperlich: {
        kopfschmerzen: { 
            stein: 'Sodalith', 
            pflanze: 'Pfefferminze', 
            öl: 'Pfefferminzöl',
            beschreibung: 'Lindert Kopfschmerzen und fördert die Durchblutung.',
            anwendungshinweise: 'Ein paar Tropfen ätherisches Öl auf die Schläfen auftragen und sanft einmassieren.'
        },
        müdigkeit: { 
            stein: 'Citrin', 
            pflanze: 'Ginseng', 
            öl: 'Zitronenöl',
            beschreibung: 'Belebt den Geist und erhöht die Energie.',
            anwendungshinweise: 'Einige Tropfen ätherisches Öl in die Handflächen geben, verreiben und tief einatmen.'
        },
        // Weitere körperliche Beschwerden ...
    }
};

// Funktion zur Normalisierung von Benutzereingaben
function normalizeInput(input) {
    return input.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').trim();
}

// Funktion zur Anzeige der Heilmittel-Empfehlung
function displayMedicineRecommendation(problem, medizin) {
    console.log(chalk.yellow.bold(`Für ${problem} empfehle ich:`));
    console.log(chalk.gray('==========================='));
    
    console.log(chalk.green('Heilstein:'));
    console.log(`- ${medizin.stein}`);
    
    console.log(chalk.green('Heilpflanze:'));
    console.log(`- ${medizin.pflanze}`);
    
    console.log(chalk.green('Ätherisches Öl:'));
    console.log(`- ${medizin.öl}`);
    
    console.log(chalk.yellow.bold('Weitere Informationen'));
    console.log(chalk.gray('---------------------------'));
    console.log(chalk.yellow('Beschreibung:'));
    console.log(`- ${medizin.beschreibung}`);
    console.log(chalk.yellow('Anwendungshinweise:'));
    console.log(`- ${medizin.anwendungshinweise}`);
    
    console.log(chalk.gray('==========================='));
    console.log('\n');
}

// Funktion zur Abfrage des Benutzers und Anzeige der Heilmittel-Empfehlung
function promptUser() {
    rl.question('Ist dein Problem körperlich oder emotional? ', (art) => {
        rl.question('Welches Problem hast du? ', (problem) => {
            const kategorie = heilmittel[normalizeInput(art)];
            const medizin = kategorie ? kategorie[normalizeInput(problem)] : null;
            if (medizin) {
                displayMedicineRecommendation(problem, medizin);
            } else {
                console.log(chalk.red('Für dieses Problem habe ich leider keinen Vorschlag.'));
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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

promptUser();
