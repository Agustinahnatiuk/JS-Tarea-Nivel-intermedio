//1.Creador de Nombres de Bandas Aleatorios:
function bandsNameGenerator(){
    let unusualWords = ['Abuhado', 'Arrebol', 'Bonhomía', 'Celaje', 'Ebúrneo', 'Hermeneuta', 'Histrión', 'Joyel', 'Melifluo', 'Nadir'];
    //                     0          1          2          3            4         5             6          7          8          9          
    let crazyColors = ['Verditer', 'Zaffre', 'Falu', 'Vantablack', 'Nattier', 'Antimonio', 'Sinoper', 'Gingerline', 'Incarnadine', 'Puke'];
    //                     0           1          2          3            4         5            6           7          8             9
    let exoticAnimals = ['Axolotl', 'Quokka', 'Fossa', 'Okapi', 'Wallaby', 'Coendú', 'Loris', 'Aye aye', 'Kiwi', 'Kinkajú'];
    //                     0           1         2         3         4         5         6       7          8         9
    let getRandomBand = (array) => array[Math.floor(Math.random() * array.length)];

    let bandName = `${getRandomBand(unusualWords)} ${getRandomBand(crazyColors)} ${getRandomBand(exoticAnimals)}`;

    return bandName;
}

console.log(bandsNameGenerator());

//2.Conversor de Emociones a Emoji:

function emotionConverter(emotion, mostrarEmoji = true) {
    let emotions = {
        feliz: { emoji: "😀", nombre: "Feliz" },
        triste: { emoji: "😢", nombre: "Triste" },
        enojado: { emoji: "😡", nombre: "Enojado" },
        sorprendido: { emoji: "😶", nombre: "Sorprendido" },
        enamorado: { emoji: "😍", nombre: "Enamorado" },
        pensativo: { emoji: "🤔", nombre: "Pensativo" },
    };

    let selectedEmotion = emotions[emotion];

    if (selectedEmotion) {
        return mostrarEmoji ? selectedEmotion.emoji : selectedEmotion.nombre;
    } else {
        return "Emoción no reconocida";
    }
}


console.log(emotionConverter("feliz"));             // Output: 😀
console.log(emotionConverter("triste", false));     // Output: Triste
console.log(emotionConverter("enojado", true));      // Output: 😡
console.log(emotionConverter("sorprendido", false)); // Output: Sorprendido
console.log(emotionConverter("enamorado"));          // Output: 😍
console.log(emotionConverter("pensativo", true));    // Output: 🤔
console.log(emotionConverter("cansado", false));     // Output: Emoción no reconocida



//3.Generador de historias absurdas
function sillyStoriesGenerator() {
    const places = ["una plaza de helado", "un castillo subacuático", "un gimnasio lleno de vacas", "un circo en la cima de la montaña", "una escuela para ratones", "una fábrica de payasos", "una montaña rusa en un avión"];
    const characters = ["científico loco", "vampiro vegetariano", "pirata con miedo al agua", "ninja que sabía hacer trucos de magia", "fantasma con alergia al polvo", "dinosaurios malabaristas"];
    const skills = ["hablaba chino mandarín con las plantas", "estornudaba con los ojos abiertos", "convertia la música en arcoíris", "cocinaba pizzas que curaban la tristeza", "creaba programas que conectaban a los demás con el multiverso"];
    const animals = ["ardilla nadadora olímpica", "elefante bailarín de tango", "jirafa fanática del fútbol", "pajarito karateca", "perro surfista", "panda chef profesional" ];
    const problems = ["todos los calcetines del mundo desaparecieron misteriosamente","las nubes se negaron a seguir patrones y empezaron a formar figuras extrañas",
    "los espejos decidieron reflejar versiones exageradamente dramáticas",
    "todos los gatos de la ciudad se unieron para formar una banda de jazz",
    "el agua de la ducha empezó a conceder deseos",
    "los árboles del vecindario empezaron a tener debates filosóficos a altas horas de la noche",
    "los coches empezaron a bailar salsa mientras conducían",
    "las flores desarrollaron el don de la empatía",
    "los semáforos comenzaron a contar chistes malos",
    "las nubes de algodón de azúcar invadieron la ciudad",
    "todas las puertas exigieron una contraseña divertida para abrirse",
    "los paraguas se rebelaron y solo se abrían cuando querían",
    "los libros de cocina sólo contenían recetas para preparar comida de astronautas"];
    const solutions = ["contratar un detective de calcetines para resolver el misterio de los calcetines desaparecidos",
    "organizar un festival de nubes para celebrar su creatividad",
    "invitar a un entrenador de espejos para enseñarles a reflejar con menos drama",
    "convocar a una asamblea general de gatos para discutir su nuevo interés en el jazz",
    "iniciar un club de duchas para compartir los deseos concedidos",
    "organizar un debate filosófico entre los árboles para llegar a una comprensión mutua",
    "organizar un concurso de baile de coches para canalizar su nueva habilidad de salsa",
    "enviar a un embajador floral para mejorar las relaciones con las flores",
    "contratar a comediantes semáforos para entretener a la ciudad",
    "lanzar una expedición de recolección de nubes de algodón de azúcar para hacer dulces",
    "contratar a un experto en contraseñas divertidas para satisfacer las puertas rebeldes",
    "convocar a un grupo de terapia para paraguas para abordar sus problemas de apertura selectiva",
    "organizar un taller de cocina para enseñar a preparar comida de astronauta con estilo"];


    function obtenerElementoAleatorio(elementos) {
        const indiceAleatorio = Math.floor(Math.random() * elementos.length);
        return elementos[indiceAleatorio];
    }

    const historia =
        `Había una vez, en ${obtenerElementoAleatorio(places)}, un ${obtenerElementoAleatorio(characters)} que ${obtenerElementoAleatorio(skills)}, ` +
        `su mejor amigo era ${obtenerElementoAleatorio(animals)}. ` +
        `Un día, ${obtenerElementoAleatorio(problems)}, así que con ${obtenerElementoAleatorio(animals)} quisieron ayudar a resolver el problema. ` +
        `Juntos se unieron a la aventura de ${obtenerElementoAleatorio(solutions)} y todos fueron muy felices.`;

    return historia;
}


const historiaAbsurda = sillyStoriesGenerator();
console.log(historiaAbsurda);



//4.Simulador de viaje en el tiempo musical
function songRecommendations(year) {
    let songsByYear = {
        2000: {
            "rock": ['"Its My Life" - Bon Jovi', '"All the small things" - Blink 182', '"Again" - Lenny Kravitz', '"Hanging by a moment" - Lifehouse'],
            "pop": ['"Yellow" - Coldplay', '"Suerte" - Shakira', '"Oops I did it again" - Britney Spears','"Bye bye bye" - Nsync', '"Rock DJ" - Robbie Williams'],
            "cumbia": ['"El amor se fue" - El original', '"Negra caderona" - El tecla', '"Te vi" - La banda del lechuga', '"Sabroson" - La base'],
            "baladas": ['"A Puro Dolor" - Son by Four', '"El Amor de Mi Vida" - Ricky Martin', '"Amores Extraños" - Laura Pausini'],
        },
        2001: {
            "rock": ['"Aerials" - System of a down', '"Wherever you will go" - The calling', '"Sing" - Travis', '"How you remind me" - Nickelback'],
            "pop": ['"Lady Marmalade" - Christina Aguilera', '"Me gustas tu" - Manu Chao', '"Color esperanza" - Diego Torres', '"La playa" - La oreja de Van Gogh' ],
            "cumbia": ['"Yo quiero bailar" - Sonia y Selena', '"Vamos a bailar" - Yerba Brava', '"La rama te mueve" - La rama', '"Bum Bum" - La base'],
            "baladas": ['"Fallin" - Alicia Keys', '"Hanging by a Moment" - Lifehouse', '"All or Nothing" - OTown', '"El Problema" - Ricardo Arjona', '"Fuego de Noche, Nieve de Día" - Ricky Martin'],
        },
        2002: {
            "rock": ['"Its My Life" - Bon Jovi', '"Times like this" - Foo Fighters', '"Stop crying your heart out" - Oasis', '"Complicated" - Avril Lavigne'],
            "pop": ['"Yellow" - Coldplay', '"Suerte" - Shakira', '"Ave Maria" - David Bisbal', '"Underneath your clothes" - Shakira', '"Hero" - Enrique Iglesias' ],
            "cumbia": ['"Me tienes que olvidar" - El original', '"Te fuiste sin pensar" - Nestor en bloque', '"Cuanto te amo" - Junior', '"Triste" - Supermerk2'],
            "baladas": ['"A Thousand Miles" - Vanessa Carlton', '""A New Day Has Come" - Celine Dion', '"A Moment Like This" - Kelly Clarkson', '"Complicated" - Avril Lavigne', '"Mentira" - La Ley', '"Fotografía" - Juanes ft. Nelly Furtado']
        },
        2003: {
            "rock": ['"Where Is the Love?" - The Black Eyed Peas', '"Im with You" - Avril Lavigne', '"White Flag" - Dido', '"Bring Me to Life" - Evanescence'],
            "pop": ['"Yellow" - Coldplay', '"Suerte" - Shakira', '"Im with You" - Avril Lavigne', '"Hoy Ya Me Voy" - Kany García','"No Me Doy Por Vencido" - Luis Fonsi'],
            "cumbia": ['"Cumbia sobre el Río" - Celso Piña', '"La Cumbia Tribalera" - El Pelón del Mikrophone', '"Margarita" - La Sonora Santanera'],
            "baladas": ['"Unwell" - Matchbox Twenty', '"White Flag" - Dido', '"Why Dont You & I" - Santana featuring Alex Band or Chad Kroeger', '"Beautiful" - Christina Aguilera'],
        },
        2004: {
            "rock": ['"Take Me Out" - Franz Ferdinand', '"American Idiot" - Green Day', '"Float On" - Modest Mouse', '"Somebody Told Me" - The Killers' ],
            "pop": ['"Toxic" - Britney Spears', '"Yeah!" - Usher featuring Lil Jon, Ludacris','"Since U Been Gone" - Kelly Clarkson','"She Will Be Loved" - Maroon 5' ],
            "cumbia": ['"Cien Abriles" - Guardián de la Cumbia', '"Llorarás" - Oscar DLeón y Grupo Gale', '"Tus Ojitos" - Los Cafres', '"La Cumbia Tribalera" - El Pelón del Mikrophone'],
            "baladas": ['"My Immortal" - Evanescence', '"The Reason" - Hoobastank', '"100 Years" - Five for Fighting', '""Breathe (2 AM)" - Anna Nalick'],
        },
        2005: {
            "rock": ['"Boulevard of Broken Dreams" - Green Day', '"Speed of Sound" - Coldplay', '"Best of You" - Foo Fighters', '"Feel Good Inc." - Gorillaz'],
            "pop": ['"I Believe" - Fantasia', '"Since U Been Gone" - Kelly Clarkson', '"My Happy Ending" - Avril Lavigne', '"The Reason" - Hoobastank'],
            "cumbia": ['"Te Perdiste Mi Amor" - Thalía y Prince Royce', '"La Cumbia de los Trapos" - Los Pibes Chorros', '"El Baile de la Cumbia" - Grupo 5', '"Me Duele el Alma" - La Tropa Vallenata'],
            "baladas": ['"Because of You" - Kelly Clarkson', '"You are Beautiful" - James Blunt', '"Bleeding Love" - Leona Lewis', '"Fix You" - Coldplay' ],
        },
    };
    if (songsByYear.hasOwnProperty(year)) {
        return `Recomendaciones musicales para ${year}:\n${songsByYear[year]["rock"].join('\n')}\n${songsByYear[year]["pop"].join('\n')}\n${songsByYear[year]["cumbia"].join('\n')}\n${songsByYear[year]["baladas"].join('\n')}`;
    } else {
        return `Lo siento, no tengo recomendaciones para el año ${year}.`;
    }
}

const year = 2005;
console.log(songRecommendations(year));



//5.Creador de Recetas Culinarias del Futuro
function recipeCreator() {
    const crazyIngredients = ['polvo de aurora boreal', 'ralladura de arcoiris', 'escamas de espejo', 'semillas de tortuga', 'huevos de cometa', 'gelatina de caramelo', 'esencia de atmósfera', 'caviar de algas marinas del Pacífico'];
    const crazyWays = ['teletransportación de sabores amargos', 'cocción al vapor de agua ionizada', 'horneado magnético en frío', 'fermentación de corto plazo asistida por robots', 'incrementación de sabores por multiplicación cuántica'];
  
    const primaryIngredient = crazyIngredients[Math.floor(Math.random() * crazyIngredients.length)];
    const secondaryIngredient = crazyIngredients[Math.floor(Math.random() * crazyIngredients.length)];
    const cookingWay = crazyWays[Math.floor(Math.random() * crazyWays.length)];
  
    const crazyRecipe = `
      Bienvenido a nuestra página de recetas de cocina futurista.
      Aquí podrás aprender a realizar exquisitos platos y deleitar a tu familia!
      Hoy prepararemos Sorrentinos Biomoleculares.
    
      Utilizaremos la técnica futurista conocida como ${cookingWay}
      Pasos a seguir:
      1. Mezcla en un bowl ${primaryIngredient} y un poco de ${secondaryIngredient}.
      2. Aplica la técnica de ${cookingWay} para así poder crear la masa de los sorrentinos y su relleno.
      3. Para la salsa, pon un poco de ${primaryIngredient} dentro de una olla con agua fría.
      4. ¡Listo! Ya puedes emplatar.
    `;
  
    return crazyRecipe;
  }
  
  const futureRecipe = recipeCreator();
  console.log(futureRecipe);


//6.  Generador de Planetas Fantásticos
function planetsCreator() {
    const colors = ['rosa resplandor', 'violeta tormentoso', 'azul nublado', 'rojo atardecer', 'verde universo', 'naranja terrenal', 'amarillo iridiscente', 'celeste terciopelo'];
    const chemicals = ['hidrógeno', 'calcio', 'zinc', 'galio', 'neptunio', 'uranio', 'manganeso', 'cesio', 'potasio', 'silicio'];
    const cosmicElements = ['galactinio', 'osógeno', 'vertagacio', 'netarmalitio', 'jocenicio', 'poverplan', 'astroplasma', 'meteorito'];
    const galaxy = ['Nebulosa Psicodélica', 'Cúmulo Estelar Fractal', 'Galaxia Danzarina de Quarks', 'Espiral Caótico de Polvo Estelar', 'Constelación iridiscente', 'Vórtice Nebular Luminiscente', 'Agujero Cósmico Desconcertante'];
    const name = ['Tatooine Prime', 'Coruscant IX', 'Kashyyyk Alpha', 'Endor Nova', 'Naboo Delta', 'Hoth Nebula', 'Mustafar Sigma', 'Geonosis Theta', 'Alderaan Celestial', 'Jakku Zenith'];

    const crazyColor = colors[Math.floor(Math.random() * colors.length)];
    const crazyChemicals = chemicals[Math.floor(Math.random() * chemicals.length)];
    const crazyElements = cosmicElements[Math.floor(Math.random() * cosmicElements.length)];
    const crazyGalaxy = galaxy[Math.floor(Math.random() * galaxy.length)];
    const crazyName = name[Math.floor(Math.random() * name.length)];

    
    const crazyPlanetName = `Este planeta, ubicado en la galaxia ${crazyGalaxy}, es color ${crazyColor}. Su principal químico es el ${crazyChemicals}, el cual se combina con ${crazyElements}. Su nombre es ${crazyName}. ¡Te invitamos a visitarlo!`

    return crazyPlanetName
};
    const planetName = planetsCreator();
    console.log(planetName);