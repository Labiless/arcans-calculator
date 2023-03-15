// img tarocchi => http://calameo.download/004744829a2dac938b97e

const tarot = [
    {
        name: "Il Mago",
        description: "Il Mago rappresenta una persona dotata di intelligenza e capacità creativa, che sa usare gli strumenti a disposizione per realizzare ciò che si propone. Egli è padrone di sé stesso; tutto ciò che fa è in accordo con la sua Volontà. Non agisce a caso o guidato dall'istinto; ciò che lo guida è la Ragione, di cui si serve per progettare il futuro.",
        imgUrl: "mago"
    },
    {
        name: "La Papessa",
        description: "La Papessa rappresenta la forza dell'intuizione e della conoscenza occulta. Il suo potere deriva dalla luna e dall'acqua, la sua saggezza le permette di vedere le cose nascoste e prevedere il futuro. La Sacerdotessa non agisce a livello materiale, ma al livello più profondo della psiche. È calma e distaccata, sa aspettare il tempo giusto per agire, la sua purezza interiore le permette di non essere contaminata dalle emozioni negative.",
        imgUrl: "papessa"
    },
    {
        name: "L'Imperatrice",
        description: "L'imperatrice simboleggia la forza creativa della natura. È una donna forte, calda, consapevole del suo potere, capace di portare energia e guarigione. Come madre, lei dona la vita e la protegge. Come Dea dell'Amore, è un'amante calda e appassionata. Ogni tipo di progetto creativo verrà stimolato e protetto dalla sua energia.",
        imgUrl: "imperatrice"
    },
    {
        name: "L'Imperatore",
        description: "L'imperatore rappresenta un uomo di potere. A differenza della Papessa, il cui potere è spirituale, il suo potere è terreno, si estende al mondo materiale, alle persone e alle cose. Egli ha maturato una grande esperienza e dominio di sé: è un leader, la sua influenza sugli altri è grande, la sua forza interiore immensa.",
        imgUrl: "imperatore"
    },
    {
        name: "Il Papa",
        description: "Il papa rappresenta il potere spirituale nel suo aspetto non esoterico, la forza della tradizione e dell'ortodossia. Rappresenta una persona con funzione di guida o di insegnante che detiene una conoscenza che si è andata formando nel tempo. La sua funzione non è quella di creare, ma piuttosto quella di trasmettere, spiegare, illuminare. Difficilmente si trova da solo, perché il senso profondo della sua esistenza si manifesta nel rapporto con i discepoli.",
        imgUrl: "papa"
    },
    {
        name: "Gli Amanti",
        description: "Gli Amanti ci ricorda la forza del potere dell'Amore, che sia verso un'altra persona, un'idea o un qualsiasi obiettivo che ci appassiona. Di fronte al vero amore dobbiamo essere nudi, cioè sinceri e autentici, pronti a donarci interamente. In questo modo questa inesauribile energia ci spingerà verso l'alto, verso l'Angelo della figura, ed emergerà la parte migliore di noi. Al tempo stesso, la decisione di abbandonarci all'amore richiede sempre una scelta da parte nostra, la scelta di non cedere alla paura ma seguire ciò che il nostro cuore realmente desidera. L'insegnamento principale di questo Arcano è dunque che solo attraverso una scelta coraggiosa giunge la possibilità dell'Unione.",
        imgUrl: "amanti"
    },
    {
        name: "Il Carro",
        description: "Il Carro rappresenta la Vittoria che si può ottenere grazie all'autodisciplina, allo sforzo sostenuto, all'impegno costante e all'azione energica. È il tempo per agire con rapidità e decisione. Bisogna aggredire i problemi come se si dovesse, in una lotta, concentrare tutte le proprie energie per sferrare un singolo colpo mortale all'avversario. Questa carta ti insegna a perseguire i tuoi obiettivi con determinazione e piena fiducia in te stesso. Il viaggio che il Carro compie rappresenta il percorso da un punto A (la tua condizione attuale, dove sei adesso) a un punto B (il tuo obiettivo). Questo è il tempo di iniziare il viaggio e realizzare i tuoi sogni.",
        imgUrl: "carro"
    },
    {
        name: "La Giustizia",
        description: "La Giustizia è colei che fa in modo che ogni individuo debba sperimentare le conseguenze delle proprie azioni, nel bene come nel male. La bilancia rappresenta il fatto che tale conseguenza deve essere effettivamente commisurata alle azioni intraprese. La spada simboleggia la severità e il rigore con cui il giudizio viene emesso. Questo Arcano ci ricorda che tutti i nodi vengono al pettine. L'individuo in pace con la propria coscienza può trovare conforto nella bilancia; quello che ha commesso azioni malvagie deve invece temere invece la lama della spada.",
        imgUrl: "giustizia"
    },
    {
        name: "L'Eremita",
        description: "L'Eremita raffigura una persona anziana che ha raggiunto la saggezza attraverso lo studio e la riflessione. Lui non ha desiderio di beni materiali, la sua vita è semplice e solitaria. Si muove lentamente e con prudenza, o addirittura non si muove affatto. Dal punto di vista materiale è povero, mentre sotto il profilo spirituale ha accumulato nel tempo una enorme ricchezza, e questo lo rende un faro e una guida per chi è pronto ad ascoltarlo.",
        imgUrl: "eremita"
    },
    {
        name: "La Fortuna",
        description: "La fortuna rappresenta il Destino, i fattori imponderabili che operano sulla nostra vita e che sono al di là del nostro controllo. Poiché la natura della ruota è quella di girare, essa simboleggia il perpetuo alternarsi dei cicli di vita. Ci sono forze spirituali all'opera dietro il tessuto della realtà, forze che si manifestano nei momenti cruciali della nostra esistenza. La lezione della ruota è quella di accettare il perenne cambiamento e avere fiducia nel Disegno Cosmico di cui la nostra vita è un frammento. ",
        imgUrl: "fortuna"
    },
    {
        name: "La Forza",
        description: "La Forza rappresenta due tipi di forza: quella bruta rappresentata dal Leone, e quella spirituale, simboleggiata dalla fanciulla. La forza spirituale riesce a domare quella materiale, dimostrando così di essere la più potente. La Forza insegna a dominare la nostra natura 'animalesca' attraverso l'autocontrollo, la pazienza, la dolcezza. Questa non è una forza aggressiva, che attacca ciò che si trova all'esterno, ma è piuttosto la forza d'animo che permette all'individuo di resistere alle tentazioni e domare i propri demoni interiori. ",
        imgUrl: "forza"
    },
    {
        name: "L'Appeso",
        description: "L'Appeso si è sottoposto volontariamente a un processo di iniziazione da cui emergerà trasformato. Attraverso il sacrificio di sé e il dolore emergerà un nuovo individuo. In questo momento il suo corpo è immobilizzato, e deve accettare tutto ciò che l'universo gli porta: freddo, pioggia, sofferenza. Attraverso l'accettazione egli giungerà a un rinnovamento totale del proprio essere. Anche se non può agire all'esterno per il momento, il suo spirito è libero di lavorare all'interno, su di sé, nel profondo della sua anima. ",
        imgUrl: "appeso"
    },
    {
        name: "La Morte",
        description: "La Morte indica la fine di qualcosa. Questo non è il momento per costruire, ma per distruggere. Che lo si voglia o no, deve avvenire un cambiamento, e questo cambiamento verrà innescato dalla possente energia distruttiva dell'Arcano n. 13. Bisogna essere pronti a lasciare andare tutto ciò che è inutile, superfluo, non essenziale. Bisogna accettare l'inevitabile trasformazione, ripulirsi delle scorie del passato e confidare nella eventuale rinascita. ",
        imgUrl: "morte"
    },
    {
        name: "La Temperanza",
        description: "La Temperanza porta protezione e purificazione, equilibrio e armonia. Le sue virtù sono la moderazione e la prudenza. Questa carta ci insegna che a volte il giusto approccio non è la forza, ma la dolcezza. Il travaso del liquido da una coppa all'altra simboleggia l'opportunità di riconciliare le energie che sono in opposizione. Questo è il momento per mettere insieme, integrare e mettere in sinergia persone, situazioni, opportunità.", 
        imgUrl: "temperanza"
    },
    {
        name: "Il Diavolo",
        description: "Il Diavolo simboleggia tutte le catene che ci rendono prigionieri e ci privano della nostra libertà. Lui è il nemico, che si manifesta nella nostra vita sotto forma di individui malvagi, ostacoli, problemi. Più spesso, tuttavia, il Nemico è dentro di noi, alimenta la paura e cerca di sottomettere il nostro coraggio. Ci rende schiavi e dipendenti: da sostanze, persone, pensieri negativi. Le possibilità di fuga dalla prigione in cui ci troviamo esistono, se si riesce a mantenere la fiducia in sé stessi. ",
        imgUrl: "diavolo"
    },
    {
        name: "La Torre",
        description: "La Torre rappresenta il cambiamento improvviso, la distruzione imprevista e repentina dello stile di vita a cui si era abituati. Le difese crollano, ciò che sembrava solido e sicuro si rivela fragile. Bisogna trovare un altro luogo in cui abitare, un'altra vita da condurre. È necessario vedere il lato positivo della situazione: ciò che viene distrutto lascia spazio a qualcosa di nuovo. La prova maggiore sarà quella di accettare il cambiamento senza esserne travolti. ",
        imgUrl: "torre"
    },
    {
        name: "La Stella",
        description: "La Stella guida e illumina la via. La sua influenza è benefica e ispirante. È il tempo per visualizzare, sognare, avere grandi visioni. Come il cosmo sopra di noi è sconfinato, così il nostro pensiero deve volare libero e non avere limiti. Le nostre azioni devono essere pure e ispirate da alti ideali. L'acqua presente nella figura suggerisce l'idea della purificazione e del rinnovamento. Ci si può rilassare sereni, certi che l'Universo è dalla nostra parte: le stelle ci proteggono e ci aiutano. ",
        imgUrl: "stella"
    },
    {
        name: "La Luna",
        description: "La Luna è il sogno, la magia e l'illusione; è l'immaginazione, la poesia, la notte. Alla luce della luna non si vede chiaramente, le cose appaiono diverse da come sono di giorno, più affascinanti e al tempo stesso più inquietanti.Questo Arcano indica che è meglio non fare le cose alla luce del sole, ma in maniera nascosta e indiretta. Indica anche un individuo ammaliato, sedotto o suggestionato da un'altra persona o situazione che è la fonte di tale fascinazione.", 
        imgUrl: "luna"
    },
    {
        name: "Il Sole",
        description: "Il Sole splende alto nel cielo, indicando Vittoria e successo. I suoi raggi irradiano luce e calore e portano guarigione e armonia. Questo è un simbolo di grande energia positiva all'opera. Bisogna agire nel mondo, essere estroversi e propositivi, fare tutto alla luce del sole ed essere pronti a raccogliere fama, onori e consensi. ",
        imgUrl: "sole"
    },
    {
        name: "L'Angelo",
        description: "L'Angelo ci chiama a una nuova vita. Non è mai troppo tardi per ricominciare, non è mai troppo tardi per rinascere. Si può uscire dalla routine e dai vecchi schemi negativi. Giudicando sé stessi si può imparare dai propri errori, lasciare alle spalle il passato e gettare le basi per una nuova esistenza ricca di significato. Bisogna rispondere alla chiamata, seguire la propria vocazione, rimettersi sul giusto sentiero di vita.",
        imgUrl: "angelo"
    },
    {
        name: "Il Mondo",
        description: "Il Mondo rappresenta il compimento, la realizzazione, la conclusione positiva di un ciclo di esistenza o di un progetto. È il momento di celebrare e danzare, assaporando pienamente il qui e ora. Questo Arcano rappresenta l'infinita bellezza della vita, che è pura gioia. Bisogna festeggiare e condividere con tutti gli esseri senzienti i doni che l'universo, infinitamente prospero e abbondante, ci ha regalato. ",
        imgUrl: "mondo"
    },
    {
        name: "Il Matto",
        description: "Il Matto rappresenta un individuo che sta per iniziare qualcosa di nuovo che potrebbe portarlo ovunque. L'innocenza e la freschezza del suo atteggiamento lo metteranno al riparo da possibili pericoli. La scelta di buttarsi in qualcosa di nuovo non è dettata dalla ragione, ma piuttosto dall'istinto e dallo Spirito che lo guida.",
        imgUrl: "matto"
    },
]


export const getTarot = (n) => tarot[n - 1];