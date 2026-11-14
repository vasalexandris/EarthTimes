import { US_STATES, CITY_TO_STATE } from './states-data.js?v=20261114_world7';
/**
 * Navigator Module
 * Hierarchical Cascading Navigation: Continents -> Countries -> Cities
 */

export const CONTINENTS_DATA = [
  {
    id: 'europe',
    name: 'Ευρώπη',
    icon: 'fa-earth-europe',
    countries: [
      {
        id: 'greece',
        name: 'Ελλάδα',
        flag: '🇬🇷',
        cities: [
          { id: 'kozani', name: 'Κοζάνη', badge: 'Πόλη Κρόκου' },
          { id: 'athens', name: 'Αθήνα', badge: 'Πρωτεύουσα' },
          { id: 'thessaloniki', name: 'Θεσσαλονίκη', badge: 'Συμπρωτεύουσα' },
          { id: 'patras', name: 'Πάτρα' },
          { id: 'heraklion', name: 'Ηράκλειο' },
          { id: 'larissa', name: 'Λάρισα' },
          { id: 'volos', name: 'Βόλος' },
          { id: 'ioannina', name: 'Ιωάννινα' },
          { id: 'trikala', name: 'Τρίκαλα' },
          { id: 'chania', name: 'Χανιά' },
          { id: 'chalkida', name: 'Χαλκίδα' }
        ]
      },
      {
        id: 'france',
        name: 'Γαλλία',
        flag: '🇫🇷',
        cities: [
          { id: 'paris', name: 'Παρίσι', badge: 'Πρωτεύουσα' },
          { id: 'marseille', name: 'Μασσαλία' },
          { id: 'lyon', name: 'Λυών' },
          { id: 'nice', name: 'Νίκαια' },
          { id: 'bordeaux', name: 'Μπορντό' },
          { id: 'strasbourg', name: 'Στρασβούργο' },
          { id: 'toulouse', name: 'Τουλούζη' },
          { id: 'lille', name: 'Λιλ' },
          { id: 'nantes', name: 'Νάντη' },
          { id: 'montpellier', name: 'Μονπελιέ' }
        ]
      },
      {
        id: 'italy',
        name: 'Ιταλία',
        flag: '🇮🇹',
        cities: [
          { id: 'rome', name: 'Ρώμη', badge: 'Πρωτεύουσα' },
          { id: 'florence', name: 'Φλωρεντία' },
          { id: 'milan', name: 'Μιλάνο' },
          { id: 'venice', name: 'Βενετία' },
          { id: 'naples', name: 'Νάπολη' },
          { id: 'bologna', name: 'Μπολόνια' },
          { id: 'turin', name: 'Τορίνο' },
          { id: 'verona', name: 'Βερόνα' },
          { id: 'palermo', name: 'Παλέρμο' },
          { id: 'genoa', name: 'Γένοβα' }
        ]
      },
      {
        id: 'germany',
        name: 'Γερμανία',
        flag: '🇩🇪',
        cities: [
          { id: 'berlin', name: 'Βερολίνο', badge: 'Πρωτεύουσα' },
          { id: 'munich', name: 'Μόναχο' },
          { id: 'hamburg', name: 'Αμβούργο' },
          { id: 'frankfurt', name: 'Φρανκφούρτη' },
          { id: 'cologne', name: 'Κολωνία' },
          { id: 'stuttgart', name: 'Στουτγκάρδη' },
          { id: 'dusseldorf', name: 'Ντίσελντορφ' },
          { id: 'leipzig', name: 'Λειψία' },
          { id: 'dresden', name: 'Δρέσδη' },
          { id: 'nuremberg', name: 'Νυρεμβέργη' }
        ]
      },
      {
        id: 'uk',
        name: 'Ηνωμένο Βασίλειο',
        flag: '🇬🇧',
        cities: [
          { id: 'london', name: 'Λονδίνο', badge: 'Πρωτεύουσα' },
          { id: 'edinburgh', name: 'Εδιμβούργο' },
          { id: 'manchester', name: 'Μάντσεστερ' },
          { id: 'liverpool', name: 'Λίβερπουλ' },
          { id: 'glasgow', name: 'Γλασκώβη' },
          { id: 'bristol', name: 'Μπρίστολ' },
          { id: 'oxford', name: 'Οξφόρδη' },
          { id: 'cambridge-uk', name: 'Κέιμπριτζ' },
          { id: 'york', name: 'Γιορκ' },
          { id: 'leeds', name: 'Λιντς' }
        ]
      },
      {
        id: 'spain',
        name: 'Ισπανία',
        flag: '🇪🇸',
        cities: [
          { id: 'madrid', name: 'Μαδρίτη', badge: 'Πρωτεύουσα' },
          { id: 'barcelona', name: 'Βαρκελώνη' },
          { id: 'seville', name: 'Σεβίλλη' },
          { id: 'bilbao', name: 'Μπιλμπάο' },
          { id: 'malaga', name: 'Μάλαγα' },
          { id: 'valencia-es', name: 'Βαλένθια' },
          { id: 'granada-es', name: 'Γρανάδα' },
          { id: 'toledo-es', name: 'Τολέδο' },
          { id: 'salamanca', name: 'Σαλαμάνκα' },
          { id: 'zaragoza', name: 'Σαραγόσα' }
        ]
      },
      {
        id: 'austria',
        name: 'Αυστρία',
        flag: '🇦🇹',
        cities: [
          { id: 'vienna', name: 'Βιέννη', badge: 'Πρωτεύουσα' },
          { id: 'salzburg', name: 'Σάλτσμπουργκ' },
          { id: 'innsbruck', name: 'Ίνσμπρουκ' },
          { id: 'graz', name: 'Γκρατς' },
          { id: 'linz', name: 'Λιντς' },
          { id: 'klagenfurt', name: 'Κλάγκενφουρτ' },
          { id: 'villach', name: 'Φίλαχ' },
          { id: 'st-polten', name: 'Ζανκτ Πέλτεν' },
          { id: 'bregenz', name: 'Μπρέγκεντς' },
          { id: 'krems', name: 'Κρεμς' }
        ]
      },
      {
        id: 'switzerland',
        name: 'Ελβετία',
        flag: '🇨🇭',
        cities: [
          { id: 'bern', name: 'Βέρνη', badge: 'Πρωτεύουσα' },
          { id: 'zurich', name: 'Ζυρίχη' },
          { id: 'geneva', name: 'Γενεύη' },
          { id: 'basel', name: 'Βασιλεία' },
          { id: 'lausanne', name: 'Λωζάννη' },
          { id: 'lucerne', name: 'Λουκέρνη' },
          { id: 'lugano', name: 'Λουγκάνο' },
          { id: 'winterthur', name: 'Βίντερτουρ' },
          { id: 'st-gallen', name: 'Σεντ Γκάλεν' },
          { id: 'interlaken', name: 'Ιντερλάκεν' }
        ]
      },
      {
        id: 'netherlands',
        name: 'Ολλανδία',
        flag: '🇳🇱',
        cities: [
          { id: 'amsterdam', name: 'Άμστερνταμ', badge: 'Πρωτεύουσα' },
          { id: 'rotterdam', name: 'Ρότερνταμ' },
          { id: 'utrecht', name: 'Ουτρέχτη' },
          { id: 'the-hague', name: 'Χάγη' },
          { id: 'eindhoven', name: 'Αϊντχόβεν' },
          { id: 'groningen', name: 'Χρόνινγκεν' },
          { id: 'maastricht', name: 'Μάαστριχτ' },
          { id: 'delft', name: 'Ντελφτ' },
          { id: 'haarlem', name: 'Χάρλεμ' },
          { id: 'leiden', name: 'Λάιντεν' }
        ]
      },
      {
        id: 'belgium',
        name: 'Βέλγιο',
        flag: '🇧🇪',
        cities: [
          { id: 'brussels', name: 'Βρυξέλλες', badge: 'Πρωτεύουσα' },
          { id: 'antwerp', name: 'Αμβέρσα' },
          { id: 'ghent', name: 'Γάνδη' },
          { id: 'bruges', name: 'Μπριζ' },
          { id: 'liege', name: 'Λιέγη' },
          { id: 'namur', name: 'Ναμύρ' },
          { id: 'charleroi', name: 'Σαρλερουά' },
          { id: 'leuven', name: 'Λέουβεν' },
          { id: 'mechelen', name: 'Μέχελεν' },
          { id: 'mons', name: 'Μονς' }
        ]
      },
      {
        id: 'portugal',
        name: 'Πορτογαλία',
        flag: '🇵🇹',
        cities: [
          { id: 'lisbon', name: 'Λισαβόνα', badge: 'Πρωτεύουσα' },
          { id: 'porto', name: 'Πόρτο' },
          { id: 'braga', name: 'Μπράγκα' },
          { id: 'coimbra', name: 'Κοΐμπρα' },
          { id: 'faro', name: 'Φάρο' },
          { id: 'funchal', name: 'Φουντσάλ' },
          { id: 'aveiro', name: 'Αβέιρο' },
          { id: 'evora', name: 'Έβορα' },
          { id: 'guimaraes', name: 'Γκιμαράες' },
          { id: 'setubal', name: 'Σετούμπαλ' }
        ]
      },
      {
        id: 'czech',
        name: 'Τσεχία',
        flag: '🇨🇿',
        cities: [
          { id: 'prague', name: 'Πράγα', badge: 'Πρωτεύουσα' },
          { id: 'brno', name: 'Μπρνο' },
          { id: 'ostrava', name: 'Οστράβα' },
          { id: 'plzen', name: 'Πίλζεν' },
          { id: 'cesky-krumlov', name: 'Τσέσκι Κρούμλοβ' },
          { id: 'olomouc', name: 'Όλομοουτς' },
          { id: 'liberec', name: 'Λίμπερετς' },
          { id: 'karlovy-vary', name: 'Κάρλοβι Βάρι' },
          { id: 'ceske-budejovice', name: 'Τσέσκε Μπουντεγιόβιτσε' },
          { id: 'pardubice', name: 'Παρντούμπιτσε' }
        ]
      },
      {
        id: 'poland',
        name: 'Πολωνία',
        flag: '🇵🇱',
        cities: [
          { id: 'warsaw', name: 'Βαρσοβία', badge: 'Πρωτεύουσα' },
          { id: 'krakow', name: 'Κρακοβία' },
          { id: 'gdansk', name: 'Γκντανσκ' },
          { id: 'wroclaw', name: 'Βρότσλαβ' },
          { id: 'poznan', name: 'Πόζναν' },
          { id: 'lodz', name: 'Λοτζ' },
          { id: 'lublin', name: 'Λούμπλιν' },
          { id: 'szczecin', name: 'Στσέτσιν' },
          { id: 'torun', name: 'Τόρουν' },
          { id: 'katowice', name: 'Κατοβίτσε' }
        ]
      },
      {
        id: 'sweden',
        name: 'Σουηδία',
        flag: '🇸🇪',
        cities: [
          { id: 'stockholm', name: 'Στοκχόλμη', badge: 'Πρωτεύουσα' },
          { id: 'gothenburg', name: 'Γκέτεμποργκ' },
          { id: 'malmo', name: 'Μάλμε' },
          { id: 'uppsala', name: 'Ουψάλα' },
          { id: 'visby', name: 'Βίσμπι' },
          { id: 'kiruna', name: 'Κιρούνα' },
          { id: 'linkoping', name: 'Λινσέπινγκ' },
          { id: 'orebro', name: 'Ερεμπρού' },
          { id: 'helsingborg', name: 'Χέλσινγκμποργκ' },
          { id: 'lund', name: 'Λουντ' }
        ]
      },
      {
        id: 'norway',
        name: 'Νορβηγία',
        flag: '🇳🇴',
        cities: [
          { id: 'oslo', name: 'Όσλο', badge: 'Πρωτεύουσα' },
          { id: 'bergen', name: 'Μπέργκεν' },
          { id: 'tromso', name: 'Τρόμσο' },
          { id: 'trondheim', name: 'Τρόντχαϊμ' },
          { id: 'stavanger', name: 'Σταβάνγκερ' },
          { id: 'alesund', name: 'Όλεσουντ' },
          { id: 'kristiansand', name: 'Κρίστιανσαντ' },
          { id: 'drammen', name: 'Ντράμεν' },
          { id: 'bodo', name: 'Μπόντε' },
          { id: 'lillehammer', name: 'Λιλεχάμερ' }
        ]
      },
      {
        id: 'denmark',
        name: 'Δανία',
        flag: '🇩🇰',
        cities: [
          { id: 'copenhagen', name: 'Κοπεγχάγη', badge: 'Πρωτεύουσα' },
          { id: 'aarhus', name: 'Ώρχους' },
          { id: 'odense', name: 'Όντενσε' },
          { id: 'aalborg', name: 'Όλμποργκ' },
          { id: 'roskilde', name: 'Ροσκίλντε' },
          { id: 'esbjerg', name: 'Έσμπιεργκ' },
          { id: 'kolding', name: 'Κόλντινγκ' },
          { id: 'skagen', name: 'Σκάγκεν' },
          { id: 'helsingor', name: 'Χέλσινγκορ' },
          { id: 'vejle', name: 'Βάιλε' }
        ]
      },
      {
        id: 'finland',
        name: 'Φινλανδία',
        flag: '🇫🇮',
        cities: [
          { id: 'helsinki', name: 'Ελσίνκι', badge: 'Πρωτεύουσα' },
          { id: 'tampere', name: 'Τάμπερε' },
          { id: 'turku', name: 'Τούρκου' },
          { id: 'rovaniemi', name: 'Ροβανιέμι' },
          { id: 'oulu', name: 'Όουλου' },
          { id: 'jyvaskyla', name: 'Γιουβάσκουλα' },
          { id: 'kuopio', name: 'Κουόπιο' },
          { id: 'lahti', name: 'Λάχτι' },
          { id: 'vaasa', name: 'Βάασα' },
          { id: 'porvoo', name: 'Πόρβοο' }
        ]
      },
      {
        id: 'ireland',
        name: 'Ιρλανδία',
        flag: '🇮🇪',
        cities: [
          { id: 'dublin', name: 'Δουβλίνο', badge: 'Πρωτεύουσα' },
          { id: 'cork', name: 'Κορκ' },
          { id: 'galway', name: 'Γκάλγουεϊ' },
          { id: 'limerick', name: 'Λίμερικ' },
          { id: 'kilkenny', name: 'Κιλκένι' },
          { id: 'waterford', name: 'Γουότερφορντ' },
          { id: 'sligo', name: 'Σλάιγκο' },
          { id: 'killarney', name: 'Κιλάρνεϊ' },
          { id: 'drogheda', name: 'Ντρόχεντα' },
          { id: 'wexford', name: 'Γουέξφορντ' }
        ]
      },
      {
        id: 'hungary',
        name: 'Ουγγαρία',
        flag: '🇭🇺',
        cities: [
          { id: 'budapest', name: 'Βουδαπέστη', badge: 'Πρωτεύουσα' },
          { id: 'debrecen', name: 'Ντέμπρετσεν' },
          { id: 'szeged', name: 'Σέγκεντ' },
          { id: 'pecs', name: 'Πετς' },
          { id: 'gyor', name: 'Γκιόρ' },
          { id: 'eger', name: 'Έγκερ' },
          { id: 'miskolc', name: 'Μίσκολτς' },
          { id: 'nyiregyhaza', name: 'Νιρεγκιχάζα' },
          { id: 'szekesfehervar', name: 'Σεκεσφεχερβάρ' },
          { id: 'sopron', name: 'Σόπρον' }
        ]
      },
      {
        id: 'romania',
        name: 'Ρουμανία',
        flag: '🇷🇴',
        cities: [
          { id: 'bucharest', name: 'Βουκουρέστι', badge: 'Πρωτεύουσα' },
          { id: 'brasov', name: 'Μπρασόφ' },
          { id: 'cluj', name: 'Κλουζ-Ναπόκα' },
          { id: 'timisoara', name: 'Τιμισοάρα' },
          { id: 'sibiu', name: 'Σιμπίου' },
          { id: 'constanta', name: 'Κωνστάντζα' },
          { id: 'iasi', name: 'Ιάσιο' },
          { id: 'oradea', name: 'Οράντεα' },
          { id: 'sighisoara', name: 'Σιγκισοάρα' },
          { id: 'craiova', name: 'Κραϊόβα' }
        ]
      },
      {
        id: 'bulgaria',
        name: 'Βουλγαρία',
        flag: '🇧🇬',
        cities: [
          { id: 'sofia', name: 'Σόφια', badge: 'Πρωτεύουσα' },
          { id: 'plovdiv', name: 'Φιλιππούπολη' },
          { id: 'varna', name: 'Βάρνα' },
          { id: 'burgas', name: 'Μπουργκάς' },
          { id: 'veliko-tarnovo', name: 'Βελίκο Τάρνοβο' },
          { id: 'ruse', name: 'Ρούσε' },
          { id: 'stara-zagora', name: 'Στάρα Ζαγόρα' },
          { id: 'blagoevgrad', name: 'Μπλαγκόεβγκραντ' },
          { id: 'pleven', name: 'Πλέβεν' },
          { id: 'nesebar', name: 'Νεσέμπαρ' }
        ]
      },
      {
        id: 'serbia',
        name: 'Σερβία',
        flag: '🇷🇸',
        cities: [
          { id: 'belgrade', name: 'Βελιγράδι', badge: 'Πρωτεύουσα' },
          { id: 'novi-sad', name: 'Νόβι Σαντ' },
          { id: 'nis', name: 'Νις' },
          { id: 'subotica', name: 'Σουμπότιτσα' },
          { id: 'kragujevac', name: 'Κραγκούγεβατς' },
          { id: 'zlatibor', name: 'Ζλάτιμπορ' },
          { id: 'kraljevo', name: 'Κράλιεβο' },
          { id: 'valjevo', name: 'Βάλιεβο' },
          { id: 'vranje', name: 'Βράνιε' },
          { id: 'pancevo', name: 'Πάντσεβο' }
        ]
      },
      {
        id: 'croatia',
        name: 'Κροατία',
        flag: '🇭🇷',
        cities: [
          { id: 'zagreb', name: 'Ζάγκρεμπ', badge: 'Πρωτεύουσα' },
          { id: 'split', name: 'Σπλιτ' },
          { id: 'dubrovnik', name: 'Ντουμπρόβνικ' },
          { id: 'rijeka', name: 'Ριέκα' },
          { id: 'zadar', name: 'Ζάνταρ' },
          { id: 'pula', name: 'Πούλα' },
          { id: 'osijek', name: 'Όσιγιεκ' },
          { id: 'varazdin', name: 'Βαραζντίν' },
          { id: 'sibenik', name: 'Σίμπενικ' },
          { id: 'rovinj', name: 'Ρόβινι' }
        ]
      },
      {
        id: 'cyprus',
        name: 'Κύπρος',
        flag: '🇨🇾',
        cities: [
          { id: 'nicosia', name: 'Λευκωσία', badge: 'Πρωτεύουσα' },
          { id: 'limassol', name: 'Λεμεσός' },
          { id: 'paphos', name: 'Πάφος' },
          { id: 'larnaca', name: 'Λάρνακα' },
          { id: 'famagusta', name: 'Αμμόχωστος' },
          { id: 'kyrenia', name: 'Κερύνεια' },
          { id: 'ayia-napa', name: 'Αγία Νάπα' },
          { id: 'protaras', name: 'Πρωταράς' },
          { id: 'polis', name: 'Πόλις Χρυσοχούς' },
          { id: 'troodos', name: 'Τρόοδος' }
        ]
      },
      {
        id: 'turkey',
        name: 'Τουρκία',
        flag: '🇹🇷',
        cities: [
          { id: 'ankara', name: 'Άγκυρα', badge: 'Πρωτεύουσα' },
          { id: 'istanbul', name: 'Κωνσταντινούπολη', badge: 'Μητρόπολη' },
          { id: 'izmir', name: 'Σμύρνη' },
          { id: 'antalya', name: 'Αττάλεια' },
          { id: 'bursa', name: 'Προύσα' },
          { id: 'trabzon', name: 'Τραπεζούντα' },
          { id: 'konya', name: 'Ικόνιο' },
          { id: 'bodrum', name: 'Αλικαρνασσός' },
          { id: 'eskisehir', name: 'Εσκισεχίρ' },
          { id: 'gaziantep', name: 'Γκαζιαντέπ' }
        ]
      },
      {
        id: 'albania',
        name: 'Αλβανία',
        flag: '🇦🇱',
        cities: [
          { id: 'tirana', name: 'Τίρανα', badge: 'Πρωτεύουσα' },
          { id: 'durres', name: 'Δυρράχιο' },
          { id: 'vlore', name: 'Αυλώνας' },
          { id: 'shkoder', name: 'Σκόδρα' },
          { id: 'berat', name: 'Μπεράτ' },
          { id: 'gjirokaster', name: 'Αργυρόκαστρο' },
          { id: 'saranda', name: 'Άγιοι Σαράντα' },
          { id: 'korce', name: 'Κορυτσά' },
          { id: 'elbasan', name: 'Ελμπασάν' },
          { id: 'kruje', name: 'Κρούγια' }
        ]
      },
      {
        id: 'north-macedonia',
        name: 'Βόρεια Μακεδονία',
        flag: '🇲🇰',
        cities: [
          { id: 'skopje', name: 'Σκόπια', badge: 'Πρωτεύουσα' },
          { id: 'ohrid', name: 'Οχρίδα' },
          { id: 'bitola', name: 'Μπίτολα' },
          { id: 'tetovo', name: 'Τέτοβο' },
          { id: 'prilep', name: 'Πρίλεπ' },
          { id: 'kumanovo', name: 'Κουμάνοβο' },
          { id: 'strumica', name: 'Στρούμιτσα' },
          { id: 'veles', name: 'Βέλες' },
          { id: 'stip', name: 'Στιπ' },
          { id: 'krusevo', name: 'Κρούσεβο' }
        ]
      },
      {
        id: 'montenegro',
        name: 'Μαυροβούνιο',
        flag: '🇲🇪',
        cities: [
          { id: 'podgorica', name: 'Ποντγκόριτσα', badge: 'Πρωτεύουσα' },
          { id: 'kotor', name: 'Κότορ' },
          { id: 'budva', name: 'Μπούντβα' },
          { id: 'cetinje', name: 'Τσετίνιε' },
          { id: 'herceg-novi', name: 'Χέρτσεγκ Νόβι' },
          { id: 'ulcinj', name: 'Ούλτσιν' },
          { id: 'niksic', name: 'Νίκσιτς' },
          { id: 'zabljak', name: 'Ζάμπλιακ' },
          { id: 'tivat', name: 'Τίβατ' },
          { id: 'bar', name: 'Μπαρ' }
        ]
      },
      {
        id: 'bosnia',
        name: 'Βοσνία & Ερζεγοβίνη',
        flag: '🇧🇦',
        cities: [
          { id: 'sarajevo', name: 'Σαράγεβο', badge: 'Πρωτεύουσα' },
          { id: 'mostar', name: 'Μόσταρ' },
          { id: 'banja-luka', name: 'Μπάνια Λούκα' },
          { id: 'tuzla', name: 'Τούζλα' },
          { id: 'travnik', name: 'Τράβνικ' },
          { id: 'bihac', name: 'Μπίχατς' },
          { id: 'trebinje', name: 'Τρεμπίνιε' },
          { id: 'zenica', name: 'Ζένιτσα' },
          { id: 'jajce', name: 'Γιάιτσε' },
          { id: 'doboj', name: 'Ντόμποϊ' }
        ]
      },
      {
        id: 'slovenia',
        name: 'Σλοβενία',
        flag: '🇸🇮',
        cities: [
          { id: 'ljubljana', name: 'Λιουμπλιάνα', badge: 'Πρωτεύουσα' },
          { id: 'maribor', name: 'Μάριμπορ' },
          { id: 'piran', name: 'Πιράν' },
          { id: 'bled', name: 'Μπλεντ' },
          { id: 'kranj', name: 'Κραν' },
          { id: 'celje', name: 'Τσέλιε' },
          { id: 'ptuj', name: 'Πτούι' },
          { id: 'koper', name: 'Κόπερ' },
          { id: 'novo-mesto', name: 'Νόβο Μέστο' },
          { id: 'postojna', name: 'Ποστόινα' }
        ]
      },
      {
        id: 'slovakia',
        name: 'Σλοβακία',
        flag: '🇸🇰',
        cities: [
          { id: 'bratislava', name: 'Μπρατισλάβα', badge: 'Πρωτεύουσα' },
          { id: 'kosice', name: 'Κόσιτσε' },
          { id: 'presov', name: 'Πρέσοβ' },
          { id: 'zilina', name: 'Ζίλινα' },
          { id: 'nitra', name: 'Νίτρα' },
          { id: 'trnava', name: 'Τρνάβα' },
          { id: 'banska-bystrica', name: 'Μπάνσκα Μπίστριτσα' },
          { id: 'poprad', name: 'Πόπραντ' },
          { id: 'trencin', name: 'Τρέντσιν' },
          { id: 'martin', name: 'Μάρτιν' }
        ]
      },
      {
        id: 'estonia',
        name: 'Εσθονία',
        flag: '🇪🇪',
        cities: [
          { id: 'tallinn', name: 'Τάλιν', badge: 'Πρωτεύουσα' },
          { id: 'tartu', name: 'Τάρτου' },
          { id: 'parnu', name: 'Πάρνου' },
          { id: 'narva', name: 'Νάρβα' },
          { id: 'kuressaare', name: 'Κουρεσάαρε' },
          { id: 'viljandi', name: 'Βίλγιαντι' },
          { id: 'rakvere', name: 'Ράκβερε' },
          { id: 'haapsalu', name: 'Χάαπσαλου' },
          { id: 'otepaa', name: 'Οτεπάα' },
          { id: 'voru', name: 'Βόρου' }
        ]
      },
      {
        id: 'latvia',
        name: 'Λετονία',
        flag: '🇱🇻',
        cities: [
          { id: 'riga', name: 'Ρίγα', badge: 'Πρωτεύουσα' },
          { id: 'daugavpils', name: 'Νταουγκάβπιλς' },
          { id: 'liepaja', name: 'Λιεπάγια' },
          { id: 'jurmala', name: 'Γιούρμαλα' },
          { id: 'cesis', name: 'Τσέσις' },
          { id: 'jelgava', name: 'Γιέλγκαβα' },
          { id: 'ventspils', name: 'Βέντσπιλς' },
          { id: 'sigulda', name: 'Σιγκούλντα' },
          { id: 'rezekne', name: 'Ρέζεκνε' },
          { id: 'valmiera', name: 'Βαλμιέρα' }
        ]
      },
      {
        id: 'lithuania',
        name: 'Λιθουανία',
        flag: '🇱🇹',
        cities: [
          { id: 'vilnius', name: 'Βίλνιους', badge: 'Πρωτεύουσα' },
          { id: 'kaunas', name: 'Κάουνας' },
          { id: 'klaipeda', name: 'Κλαϊπέντα' },
          { id: 'siauliai', name: 'Σιαουλιάι' },
          { id: 'panevezys', name: 'Πανεβεζίς' },
          { id: 'trakai', name: 'Τρακάι' },
          { id: 'palanga', name: 'Παλάνγκα' },
          { id: 'druskininkai', name: 'Ντρούσκινινκαϊ' },
          { id: 'alytus', name: 'Αλίτους' },
          { id: 'marijampole', name: 'Μαριγιάμπολε' }
        ]
      },
      {
        id: 'iceland',
        name: 'Ισλανδία',
        flag: '🇮🇸',
        cities: [
          { id: 'reykjavik', name: 'Ρέικιαβικ', badge: 'Πρωτεύουσα' },
          { id: 'akureyri', name: 'Άκουρεϊρι' },
          { id: 'husavik', name: 'Χούσαβικ' },
          { id: 'vik', name: 'Βικ' },
          { id: 'keflavik', name: 'Κέφλαβικ' },
          { id: 'isafjordur', name: 'Ίσαφιορδουρ' },
          { id: 'egilsstadir', name: 'Έγκιλσταντιρ' },
          { id: 'selfoss', name: 'Σέλφος' },
          { id: 'borgarnes', name: 'Μποργκαρνές' },
          { id: 'hofn', name: 'Χεπν' }
        ]
      },
      {
        id: 'luxembourg',
        name: 'Λουξεμβούργο',
        flag: '🇱🇺',
        cities: [
          { id: 'luxembourg-city', name: 'Πόλη του Λουξεμβούργου', badge: 'Πρωτεύουσα' },
          { id: 'esch-sur-alzette', name: 'Ες-συρ-Αλζέτ' },
          { id: 'differdange', name: 'Ντιφερντάνζ' },
          { id: 'dudelange', name: 'Ντιντελάνζ' },
          { id: 'ettelbruck', name: 'Έτελμπρικ' },
          { id: 'diekirch', name: 'Ντίκιρχ' },
          { id: 'wiltz', name: 'Βιλτς' },
          { id: 'echternach', name: 'Έχτερναχ' },
          { id: 'remich', name: 'Ρέμιχ' },
          { id: 'grevenmacher', name: 'Γκρεβενμάχερ' }
        ]
      },
      {
        id: 'malta',
        name: 'Μάλτα',
        flag: '🇲🇹',
        cities: [
          { id: 'valletta', name: 'Βαλέτα', badge: 'Πρωτεύουσα' },
          { id: 'mdina', name: 'Μντίνα' },
          { id: 'sliema', name: 'Σλιέμα' },
          { id: 'st-julians', name: 'Σεντ Τζούλιανς' },
          { id: 'birgu', name: 'Μπίργκου' },
          { id: 'victoria-gozo', name: 'Βικτώρια' },
          { id: 'mellieha', name: 'Μελίχα' },
          { id: 'marsaxlokk', name: 'Μαρσασλόκ' },
          { id: 'qormi', name: 'Κόρμι' },
          { id: 'mosta', name: 'Μόστα' }
        ]
      },
      {
        id: 'andorra',
        name: 'Ανδόρα',
        flag: '🇦🇩',
        cities: [
          { id: 'andorra-la-vella', name: 'Ανδόρα λα Βέλια', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'liechtenstein',
        name: 'Λιχτενστάιν',
        flag: '🇱🇮',
        cities: [
          { id: 'vaduz', name: 'Βαντούζ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'monaco',
        name: 'Μονακό',
        flag: '🇲🇨',
        cities: [
          { id: 'monaco', name: 'Μονακό', badge: 'Πριγκιπάτο' }
        ]
      },
      {
        id: 'vatican',
        name: 'Βατικανό',
        flag: '🇻🇦',
        cities: [
          { id: 'vatican-city', name: 'Βατικανό', badge: 'Αγία Έδρα' }
        ]
      },
      {
        id: 'san-marino',
        name: 'Σαν Μαρίνο',
        flag: '🇸🇲',
        cities: [
          { id: 'san-marino', name: 'Σαν Μαρίνο', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'russia',
        name: 'Ρωσία',
        flag: '🇷🇺',
        cities: [
          { id: 'moscow', name: 'Μόσχα', badge: 'Πρωτεύουσα' },
          { id: 'saint-petersburg', name: 'Αγία Πετρούπολη', badge: 'Πολιτιστική Πρωτεύουσα' },
          { id: 'kazan', name: 'Καζάν', badge: 'Βόλγας' },
          { id: 'novosibirsk', name: 'Νοβοσιμπίρσκ' },
          { id: 'yekaterinburg', name: 'Αικατερινούπολη' },
          { id: 'sochi', name: 'Σότσι' },
          { id: 'vladivostok', name: 'Βλαδιβοστόκ' },
          { id: 'nizhny-novgorod', name: 'Νίζνι Νόβγκοροντ' },
          { id: 'kaliningrad', name: 'Καλίνινγκραντ' },
          { id: 'samara', name: 'Σαμάρα' }
        ]
      },
      {
        id: 'ukraine',
        name: 'Ουκρανία',
        flag: '🇺🇦',
        cities: [
          { id: 'kyiv', name: 'Κίεβο', badge: 'Πρωτεύουσα' },
          { id: 'lviv', name: 'Λβιβ', badge: 'Δυτική Κληρονομιά' },
          { id: 'odesa', name: 'Οδησσός', badge: 'Μαύρη Θάλασσα' },
          { id: 'kharkiv', name: 'Χάρκοβο' },
          { id: 'dnipro', name: 'Ντνίπρο' },
          { id: 'zaporizhzhia', name: 'Ζαπορίζια' },
          { id: 'ivano-frankivsk', name: 'Ιβάνο-Φρανκίβσκ' },
          { id: 'chernivtsi', name: 'Τσερνιβτσί' },
          { id: 'poltava', name: 'Πολτάβα' },
          { id: 'vinnytsia', name: 'Βίνιτσα' }
        ]
      },
      {
        id: 'belarus',
        name: 'Λευκορωσία',
        flag: '🇧🇾',
        cities: [
          { id: 'minsk', name: 'Μινσκ', badge: 'Πρωτεύουσα' },
          { id: 'brest', name: 'Μπρεστ', badge: 'Ιστορικό Φρούριο' },
          { id: 'grodno', name: 'Γκρόντνο' },
          { id: 'gomel', name: 'Γόμελ' },
          { id: 'vitebsk', name: 'Βίτεμπσκ' },
          { id: 'mogilev', name: 'Μογκίλεφ' },
          { id: 'bobruisk', name: 'Μπομπρούισκ' },
          { id: 'pinsk', name: 'Πινσκ' },
          { id: 'polotsk', name: 'Πόλοτσκ' },
          { id: 'baranovichi', name: 'Μπαρανοβίτσι' }
        ]
      },
      {
        id: 'moldova',
        name: 'Μολδαβία',
        flag: '🇲🇩',
        cities: [
          { id: 'chisinau', name: 'Κισινάου', badge: 'Πρωτεύουσα' },
          { id: 'balti', name: 'Μπάλτι', badge: 'Βόρεια Μολδαβία' },
          { id: 'orhei', name: 'Ορχέι' },
          { id: 'soroca', name: 'Σορόκα' },
          { id: 'tiraspol', name: 'Τιράσπολ' },
          { id: 'cahul', name: 'Καχούλ' },
          { id: 'ungheni', name: 'Ουνγκένι' },
          { id: 'comrat', name: 'Κομράτ' },
          { id: 'bender', name: 'Μπεντέρ' },
          { id: 'edinet', name: 'Εντινέτς' }
        ]
      }
    ]
  },
  {
    id: 'north_america',
    name: 'Βόρεια & Κεντρική Αμερική',
    icon: 'fa-earth-americas',
    countries: [
      {
        id: 'usa',
        name: 'Ηνωμένες Πολιτείες (ΗΠΑ)',
        flag: '🇺🇸',
        cities: [
          { id: 'new-york', name: 'Νέα Υόρκη', badge: 'Μητρόπολη' },
          { id: 'los-angeles', name: 'Λος Άντζελες' },
          { id: 'chicago', name: 'Σικάγο' },
          { id: 'boston', name: 'Βοστώνη' },
          { id: 'houston', name: 'Χιούστον' },
          { id: 'philadelphia', name: 'Φιλαδέλφεια' },
          { id: 'phoenix', name: 'Φοίνιξ' },
          { id: 'san-diego', name: 'Σαν Ντιέγκο' },
          { id: 'dallas', name: 'Ντάλας' },
          { id: 'san-antonio', name: 'Σαν Αντόνιο' }
        ]
      },
      {
        id: 'canada',
        name: 'Καναδάς',
        flag: '🇨🇦',
        cities: [
          { id: 'ottawa', name: 'Οττάβα', badge: 'Πρωτεύουσα' },
          { id: 'toronto', name: 'Τορόντο' },
          { id: 'montreal', name: 'Μόντρεαλ' },
          { id: 'vancouver', name: 'Βανκούβερ' },
          { id: 'calgary', name: 'Κάλγκαρι' },
          { id: 'edmonton', name: 'Έντμοντον' },
          { id: 'quebec-city', name: 'Κεμπέκ' },
          { id: 'winnipeg', name: 'Γουίνιπεγκ' },
          { id: 'halifax', name: 'Χάλιφαξ' },
          { id: 'victoria-bc', name: 'Βικτώρια' }
        ]
      },
      {
        id: 'mexico',
        name: 'Μεξικό',
        flag: '🇲🇽',
        cities: [
          { id: 'mexico-city', name: 'Πόλη του Μεξικού', badge: 'Πρωτεύουσα' },
          { id: 'guadalajara', name: 'Γκουανταλαχάρα' },
          { id: 'monterrey', name: 'Μοντερέι' },
          { id: 'cancun', name: 'Κανκούν' },
          { id: 'puebla', name: 'Πουέμπλα' },
          { id: 'tijuana', name: 'Τιχουάνα' },
          { id: 'merida', name: 'Μέριντα' },
          { id: 'oaxaca', name: 'Οαχάκα' },
          { id: 'queretaro', name: 'Κερέταρο' },
          { id: 'san-miguel-de-allende', name: 'Σαν Μιγκέλ ντε Αγιέντε' }
        ]
      },
      {
        id: 'cuba',
        name: 'Κούβα',
        flag: '🇨🇺',
        cities: [
          { id: 'havana', name: 'Αβάνα', badge: 'Πρωτεύουσα' },
          { id: 'santiago-de-cuba', name: 'Σαντιάγο ντε Κούβα', badge: 'Ιστορική' },
          { id: 'trinidad', name: 'Τρινιδάδ', badge: 'UNESCO' },
          { id: 'camaguey', name: 'Καμαγουέι' },
          { id: 'cienfuegos', name: 'Σιενφουέγος' },
          { id: 'santa-clara', name: 'Σάντα Κλάρα' },
          { id: 'varadero', name: 'Βαραδέρο' },
          { id: 'holguin', name: 'Ολγκίν' },
          { id: 'vinales', name: 'Βινιάλες' },
          { id: 'baracoa', name: 'Μπαρακόα' }
        ]
      },
      {
        id: 'costa-rica',
        name: 'Κόστα Ρίκα',
        flag: '🇨🇷',
        cities: [
          { id: 'san-jose', name: 'Σαν Χοσέ', badge: 'Πρωτεύουσα' },
          { id: 'alajuela', name: 'Αλαχουέλα' },
          { id: 'puerto-limon', name: 'Πουέρτο Λιμόν' },
          { id: 'heredia', name: 'Ερέδια' },
          { id: 'cartago', name: 'Καρτάγο' },
          { id: 'puntarenas', name: 'Πουνταρένας' },
          { id: 'liberia', name: 'Λιμπέρια' },
          { id: 'la-fortuna', name: 'Λα Φορτούνα' },
          { id: 'monteverde', name: 'Μοντεβέρδε' },
          { id: 'quepos', name: 'Κέπος' }
        ]
      },
      {
        id: 'dominican-republic',
        name: 'Δομινικανή Δημοκρατία',
        flag: '🇩🇴',
        cities: [
          { id: 'santo-domingo', name: 'Σάντο Ντομίνγκο', badge: 'Πρωτεύουσα' },
          { id: 'santiago-de-los-caballeros', name: 'Σαντιάγο ντε λος Καμπαγιέρος' },
          { id: 'punta-cana', name: 'Πούντα Κάνα', badge: 'Καραϊβική' },
          { id: 'puerto-plata', name: 'Πουέρτο Πλάτα' },
          { id: 'la-romana', name: 'Λα Ρομάνα' },
          { id: 'las-terrenas', name: 'Λας Τερένας' },
          { id: 'samana', name: 'Σαμανά' },
          { id: 'barahona', name: 'Μπαραόνα' },
          { id: 'san-pedro-de-macoris', name: 'Σαν Πέδρο ντε Μακορίς' },
          { id: 'jarabacoa', name: 'Χαραμπακόα' }
        ]
      },
      {
        id: 'guatemala',
        name: 'Γουατεμάλα',
        flag: '🇬🇹',
        cities: [
          { id: 'guatemala-city', name: 'Γουατεμάλα Σίτι', badge: 'Πρωτεύουσα' },
          { id: 'antigua-guatemala', name: 'Αντίγουα Γουατεμάλα', badge: 'Αποικιακή' },
          { id: 'quetzaltenango', name: 'Κετσαλτενάνγκο' },
          { id: 'flores-gt', name: 'Φλόρες' },
          { id: 'panajachel', name: 'Παναχατσέλ' },
          { id: 'chichicastenango', name: 'Τσιτσικαστενάνγκο' },
          { id: 'coban', name: 'Κομπάν' },
          { id: 'puerto-barrios', name: 'Πουέρτο Μπάριος' },
          { id: 'livingston', name: 'Λίβινγκστον' },
          { id: 'escuintla', name: 'Εσκουίντλα' }
        ]
      },
      {
        id: 'bahamas',
        name: 'Μπαχάμες',
        flag: '🇧🇸',
        cities: [
          { id: 'nassau', name: 'Νασάου', badge: 'Η Πόλη των Πειρατών' },
          { id: 'freeport-bs', name: 'Φρίπορτ', badge: 'Η Μαγική Πόλη' },
          { id: 'lucaya', name: 'Λουκάγια', badge: 'Το Ριβιέρα των Μπαχαμών' },
          { id: 'west-end-bs', name: 'Γουέστ Εντ', badge: 'Η Ιστορική Πρωτεύουσα' },
          { id: 'marsh-harbour', name: 'Μαρς Χάρμπορ', badge: 'Η Πρωτεύουσα των Άμπακο' },
          { id: 'george-town-bs', name: 'Τζορτζ Τάουν', badge: 'Το Κόσμημα των Εξούμα' },
          { id: 'dunmore-town', name: 'Ντάνμορ Τάουν', badge: 'Το Νησί με τη Ροζ Άμμο' },
          { id: 'alice-town', name: 'Άλις Τάουν', badge: 'Η Πύλη του Μπίμινι' },
          { id: 'matthew-town', name: 'Μάθιου Τάουν', badge: 'Η Πόλη του Αλατιού & των Φλαμίνγκο' },
          { id: 'rock-sound', name: 'Ροκ Σάουντ', badge: 'Η Πόλη της Ωκεάνιας Τρύπας' }
        ]
      },
      {
        id: 'barbados',
        name: 'Μπαρμπάντος',
        flag: '🇧🇧',
        cities: [
          { id: 'bridgetown', name: 'Μπρίτζταουν', badge: 'Η Πρωτεύουσα — Μνημείο UNESCO' },
          { id: 'speightstown', name: 'Σπέιτσταουν', badge: 'Το Μικρό Μπρίστολ' },
          { id: 'holetown', name: 'Χόουλταουν', badge: 'Η Πρώτη Αποβίβαση — Χρυσή Ακτή' },
          { id: 'oistins', name: 'Όιστινς', badge: 'Το Λιμάνι των Ψαράδων & η Χάρτα του 1652' },
          { id: 'bathsheba', name: 'Μπαθσίμπα', badge: 'Η Άγρια Ανατολική Ακτή — Soup Bowl' },
          { id: 'st-lawrence-gap', name: 'Σεντ Λόρενς Γκαπ', badge: 'Ο Παλμός του Νότου' },
          { id: 'warrens', name: 'Γουόρενς', badge: 'Το Νέο Εμπορικό Κέντρο' },
          { id: 'the-crane', name: 'Δε Κρέιν', badge: 'Η Ροζ Άμμος του 1887' },
          { id: 'six-cross-roads', name: 'Σιξ Κρος Ρόουντς', badge: 'Ο Κόμβος του Σεντ Φίλιπ' },
          { id: 'chalky-mount', name: 'Τσάλκι Μάουντ', badge: 'Το Χωριό των Αγγειοπλαστών' }
        ]
      },
      {
        id: 'belize',
        name: 'Μπελίζ',
        flag: '🇧🇿',
        cities: [
          { id: 'belize-city', name: 'Μπελίζ Σίτι', badge: 'Ιστορική' },
          { id: 'san-ignacio', name: 'Σαν Ιγνάσιο' },
          { id: 'belmopan', name: 'Μπελμοπάν', badge: 'Πρωτεύουσα' },
          { id: 'san-pedro', name: 'Σαν Πέδρο' },
          { id: 'caye-caulker', name: 'Κέι Κόλκερ' },
          { id: 'placencia', name: 'Πλασένσια' },
          { id: 'orange-walk', name: 'Όραντζ Γουόκ' },
          { id: 'corozal', name: 'Κοροζάλ' },
          { id: 'dangriga', name: 'Ντανγκρίγκα' },
          { id: 'punta-gorda', name: 'Πούντα Γκόρντα' }
        ]
      },
      {
        id: 'el-salvador',
        name: 'Ελ Σαλβαδόρ',
        flag: '🇸🇻',
        cities: [
          { id: 'san-salvador', name: 'Σαν Σαλβαδόρ', badge: 'Πρωτεύουσα' },
          { id: 'santa-ana', name: 'Σάντα Άνα' },
          { id: 'san-miguel-sv', name: 'Σαν Μιγκέλ' },
          { id: 'sonsonate', name: 'Σονσονάτε' },
          { id: 'santa-tecla', name: 'Σάντα Τέκλα' },
          { id: 'ahuachapan', name: 'Αουατσαπάν' },
          { id: 'suchitoto', name: 'Σουτσιτότο' },
          { id: 'la-libertad', name: 'Λα Λιμπερτάδ' },
          { id: 'usulutan', name: 'Ουσουλουτάν' },
          { id: 'chalatenango', name: 'Τσαλατενάνγκο' }
        ]
      },
      {
        id: 'haiti',
        name: 'Αϊτή',
        flag: '🇭🇹',
        cities: [
          { id: 'port-au-prince', name: 'Πορτ-ο-Πρενς', badge: 'Η Πόλη του Κόλπου' },
          { id: 'cap-haitien', name: 'Καπ-Αϊτιέν', badge: 'Η Πόλη των Φρουρίων' },
          { id: 'gonaives', name: 'Γκοναΐβ', badge: 'Η Πόλη της Ανεξαρτησίας' },
          { id: 'les-cayes', name: 'Λε Καγιέ', badge: 'Η Πόλη της Φιλοξενίας' },
          { id: 'jacmel', name: 'Ζακμέλ', badge: 'Η Πολιτιστική Πρωτεύουσα' },
          { id: 'saint-marc', name: 'Σαιν-Μαρκ', badge: 'Η Πύλη της Κοιλάδας' },
          { id: 'petion-ville', name: 'Πεσιόν-Βιλ', badge: 'Το Μπαλκόνι της Πρωτεύουσας' },
          { id: 'port-de-paix', name: 'Πορ-ντε-Παι', badge: 'Το Λιμάνι της Ειρήνης' },
          { id: 'jeremie', name: 'Ζερεμί', badge: 'Η Πόλη των Ποιητών' },
          { id: 'carrefour-ht', name: 'Καρφούρ', badge: 'Ο Σταυροδρόμι του Νότου' }
        ]
      },
      {
        id: 'trinidad-and-tobago',
        name: 'Τρινιντάντ και Τομπάγκο',
        flag: '🇹🇹',
        cities: [
          { id: 'port-of-spain', name: 'Πορτ οφ Σπέιν', badge: 'Η Πρωτεύουσα του Καρναβαλιού' },
          { id: 'san-fernando', name: 'Σαν Φερνάντο', badge: 'Η Βιομηχανική Πόλη' },
          { id: 'chaguanas', name: 'Τσαγκουάνας', badge: 'Η Πόλη των Παζαριών' },
          { id: 'arima', name: 'Αρίμα', badge: 'Η Βασιλική Πόλη των Αμερινδιάνων' },
          { id: 'point-fortin', name: 'Πόιντ Φορτίν', badge: 'Η Ενεργειακή Πρωτεύουσα' },
          { id: 'scarborough-tt', name: 'Σκάρμπρο', badge: 'Η Πρωτεύουσα του Τομπάγκο' },
          { id: 'crown-point', name: 'Κράουν Πόιντ', badge: 'Η Τουριστική Πύλη του Τομπάγκο' },
          { id: 'couva', name: 'Κούβα', badge: 'Η Καρδιά της Ζάχαρης & του Αθλητισμού' },
          { id: 'diego-martin', name: 'Ντιέγκο Μάρτιν', badge: 'Η Πράσινη Κοιλάδα' },
          { id: 'marabella', name: 'Μαραμπέλα', badge: 'Η Πόλη που δεν Κοιμάται Ποτέ' }
        ]
      },
      {
        id: 'antigua-and-barbuda',
        name: 'Αντίγκουα και Μπαρμπούντα',
        flag: '🇦🇬',
        cities: [
          { id: 'st-johns', name: 'Σεντ Τζονς', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'dominica',
        name: 'Δομινίκα',
        flag: '🇩🇲',
        cities: [
          { id: 'roseau', name: 'Ροζό', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'grenada',
        name: 'Γρενάδα',
        flag: '🇬🇩',
        cities: [
          { id: 'st-georges', name: 'Σεντ Τζορτζς', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'saint-kitts-and-nevis',
        name: 'Σεντ Κιτς και Νέβις',
        flag: '🇰🇳',
        cities: [
          { id: 'basseterre', name: 'Μπαστέρ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'saint-lucia',
        name: 'Σεντ Λουσία',
        flag: '🇱🇨',
        cities: [
          { id: 'castries', name: 'Κάστρις', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'saint-vincent-and-the-grenadines',
        name: 'Σεντ Βίνσεντ και Γρεναδίνες',
        flag: '🇻🇨',
        cities: [
          { id: 'kingstown', name: 'Κίνγκσταουν', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'honduras',
        name: 'Ονδούρα',
        flag: '🇭🇳',
        cities: [
          { id: 'tegucigalpa', name: 'Τεγκουσιγκάλπα', badge: 'Πρωτεύουσα' },
          { id: 'san-pedro-sula', name: 'Σαν Πέδρο Σούλα' },
          { id: 'roatan', name: 'Ροατάν', badge: 'Καραϊβική' },
          { id: 'copan-ruinas', name: 'Κοπάν Ρουίνας', badge: 'UNESCO' },
          { id: 'la-ceiba', name: 'Λα Σέιμπα' },
          { id: 'comayagua', name: 'Κομαγιάγουα', badge: 'Ιστορική' },
          { id: 'utila', name: 'Ουτίλα', badge: 'Καταδύσεις' },
          { id: 'choluteca', name: 'Τσολοτέκα' },
          { id: 'santa-rosa-de-copan', name: 'Σάντα Ρόσα ντε Κοπάν' },
          { id: 'trujillo-hn', name: 'Τρουχίγιο', badge: 'Ιστορική' }
        ]
      },
      {
        id: 'jamaica',
        name: 'Τζαμάικα',
        flag: '🇯🇲',
        cities: [
          { id: 'kingston', name: 'Κίνγκστον', badge: 'Πρωτεύουσα' },
          { id: 'montego-bay', name: 'Μοντέγκο Μπέι', badge: 'Καραϊβική' },
          { id: 'ocho-rios', name: 'Ότσο Ρίος', badge: 'Καταρράκτες' },
          { id: 'negril', name: 'Νεγκρίλ', badge: 'Παραλία' },
          { id: 'port-antonio', name: 'Πορτ Αντόνιο', badge: 'Φύση' },
          { id: 'falmouth', name: 'Φάλμουθ', badge: 'Ιστορική' },
          { id: 'spanish-town', name: 'Σπάνις Τάουν', badge: 'Ιστορική' },
          { id: 'mandeville', name: 'Μάντεβιλ' },
          { id: 'black-river', name: 'Μπλακ Ρίβερ' },
          { id: 'port-royal', name: 'Πορτ Ρόαγιαλ', badge: 'Ιστορική' }
        ]
      },
      {
        id: 'nicaragua',
        name: 'Νικαράγουα',
        flag: '🇳🇮',
        cities: [
          { id: 'managua', name: 'Μανάγουα', badge: 'Πρωτεύουσα' },
          { id: 'granada-ni', name: 'Γρανάδα', badge: 'Ιστορική' },
          { id: 'leon-ni', name: 'Λεόν', badge: 'UNESCO' },
          { id: 'san-juan-del-sur', name: 'Σαν Χουάν ντελ Σουρ', badge: 'Σέρφινγκ' },
          { id: 'matagalpa', name: 'Ματαγκάλπα', badge: 'Καφές' },
          { id: 'esteli', name: 'Εστελί', badge: 'Πούρα' },
          { id: 'moyogalpa', name: 'Μογιογάλπα', badge: 'Ηφαίστειο' },
          { id: 'masaya', name: 'Μασάγια', badge: 'Λαογραφία' },
          { id: 'san-carlos-ni', name: 'Σαν Κάρλος' },
          { id: 'bluefields', name: 'Μπλούφιλντς', badge: 'Καραϊβική' }
        ]
      },
      {
        id: 'panama',
        name: 'Παναμάς',
        flag: '🇵🇦',
        cities: [
          { id: 'panama-city', name: 'Πόλη του Παναμά', badge: 'Πρωτεύουσα' },
          { id: 'colon', name: 'Κολόν' },
          { id: 'david', name: 'Νταβίντ' },
          { id: 'boquete', name: 'Μποκέτε' },
          { id: 'bocas-del-toro', name: 'Μπόκας ντελ Τόρο' },
          { id: 'chitre', name: 'Τσιτρέ' },
          { id: 'santiago-de-veraguas', name: 'Σαντιάγο ντε Βεράγουας' },
          { id: 'las-tablas', name: 'Λας Τάμπλας' },
          { id: 'penonome', name: 'Πενονομέ' },
          { id: 'portobelo', name: 'Πορτομπέλο' }
        ]
      }
    ]
  },
  {
    id: 'south_america',
    name: 'Νότια Αμερική',
    icon: 'fa-earth-americas',
    countries: [
      {
        id: 'brazil',
        name: 'Βραζιλία',
        flag: '🇧🇷',
        cities: [
          { id: 'brasilia', name: 'Μπραζίλια' },
          { id: 'rio-de-janeiro', name: 'Ρίο ντε Τζανέιρο' },
          { id: 'sao-paulo', name: 'Σάο Πάολο' },
          { id: 'salvador', name: 'Σαλβαδόρ' },
          { id: 'belo-horizonte', name: 'Μπέλο Οριζόντε' },
          { id: 'curitiba', name: 'Κουριτίμπα' },
          { id: 'fortaleza', name: 'Φορταλέζα' },
          { id: 'recife', name: 'Ρεσίφε' },
          { id: 'porto-alegre', name: 'Πόρτο Αλέγκρε' },
          { id: 'manaus', name: 'Μανάους' }
        ]
      },
      {
        id: 'argentina',
        name: 'Αργεντινή',
        flag: '🇦🇷',
        cities: [
          { id: 'buenos-aires', name: 'Μπουένος Άιρες' },
          { id: 'cordoba', name: 'Κόρδοβα' },
          { id: 'rosario', name: 'Ροσάριο' },
          { id: 'mendoza', name: 'Μεντόζα' },
          { id: 'la-plata', name: 'Λα Πλάτα' },
          { id: 'san-miguel-de-tucuman', name: 'Σαν Μιγκέλ δε Τουκουμάν' },
          { id: 'mar-del-plata', name: 'Μαρ ντελ Πλάτα' },
          { id: 'salta', name: 'Σάλτα' },
          { id: 'santa-fe-ar', name: 'Σάντα Φε' },
          { id: 'san-juan-ar', name: 'Σαν Χουάν' }
        ]
      },
      {
        id: 'chile',
        name: 'Χιλή',
        flag: '🇨🇱',
        cities: [
          { id: 'santiago', name: 'Σαντιάγο', badge: 'Η Πόλη στις Παρυφές των Άνδεων' },
          { id: 'valparaiso', name: 'Βαλπαραΐσο', badge: 'Το Κοσμοπολίτικο Λιμάνι των Λόφων' },
          { id: 'vina-del-mar', name: 'Βίνια δελ Μαρ', badge: 'Η Πόλη-Κήπος' },
          { id: 'antofagasta', name: 'Αντοφαγάστα', badge: 'Το Μαργαριτάρι του Βορρά' },
          { id: 'la-serena', name: 'Λα Σερένα', badge: 'Η Πόλη των Καμπαναριών' },
          { id: 'concepcion', name: 'Κονσεπσιόν', badge: 'Η Πόλη των Πανεπιστημίων' },
          { id: 'puerto-montt', name: 'Πουέρτο Μοντ', badge: 'Η Πύλη της Παταγονίας' },
          { id: 'punta-arenas', name: 'Πούντα Αρένας', badge: 'Η Πόλη του Πορθμού' },
          { id: 'iquique', name: 'Ικίκε', badge: 'Η Πόλη του Χρυσού και του Σέρφινγκ' },
          { id: 'temuco', name: 'Τεμούκο', badge: 'Η Καρδιά της Araucanía' }
        
        ]
      },
      {
        id: 'peru',
        name: 'Περού',
        flag: '🇵🇪',
        cities: [
          { id: 'lima', name: 'Λίμα', badge: 'Η Πόλη των Βασιλέων' },
          { id: 'cusco', name: 'Κούσκο', badge: 'Ο Ομφαλός του Κόσμου' },
          { id: 'arequipa', name: 'Αρεκίπα', badge: 'Η Λευκή Πόλη' },
          { id: 'trujillo-pe', name: 'Τρουχίγιο', badge: 'Η Πόλη της Αιώνιας Άνοιξης' },
          { id: 'chiclayo', name: 'Τσικλάγιο', badge: 'Η Πόλη της Φιλίας' },
          { id: 'iquitos', name: 'Ικίτος', badge: 'Η Πρωτεύουσα του Αμαζονίου' },
          { id: 'piura', name: 'Πιούρα', badge: 'Η Πόλη της Κατσάκα & του Tondero' },
          { id: 'huancayo', name: 'Ουανκάγιο', badge: 'Η Καρδιά της Κοιλάδας Mantaro' },
          { id: 'puno', name: 'Πούνο', badge: 'Η Πόλη της Λίμνης Titicaca' },
          { id: 'tacna', name: 'Τάκνα', badge: 'Η Ηρωική Πόλη' }
        
        ]
      },
      {
        id: 'colombia',
        name: 'Κολομβία',
        flag: '🇨🇴',
        cities: [
          { id: 'bogota', name: 'Μπογκοτά' },
          { id: 'medellin', name: 'Μεδεγίν' },
          { id: 'cartagena', name: 'Καρθαγένη' },
          { id: 'cali', name: 'Κάλι' },
          { id: 'barranquilla', name: 'Μπαρανκίγια' },
          { id: 'bucaramanga', name: 'Μπουκαραμάνγκα' },
          { id: 'pereira', name: 'Περέιρα' },
          { id: 'santa-marta', name: 'Σάντα Μάρτα' },
          { id: 'cucuta', name: 'Κούκουτα' },
          { id: 'manizales', name: 'Μανισάλες' }
        ]
      },
      {
        id: 'venezuela',
        name: 'Βενεζουέλα',
        flag: '🇻🇪',
        cities: [
          { id: 'caracas', name: 'Καράκας', badge: 'Η Πόλη της Αιώνιας Άνοιξης' },
          { id: 'maracaibo', name: 'Μαρακαΐμπο', badge: 'Η Αγαπημένη Γη του Ήλιου' },
          { id: 'valencia', name: 'Βαλένθια', badge: 'Η Πρωτεύουσα της Βιομηχανίας' },
          { id: 'barquisimeto', name: 'Μπαρκισιμέτο', badge: 'Η Μουσική Πρωτεύουσα' },
          { id: 'maracay', name: 'Μαρακάι', badge: 'Η Πόλη των Κήπων' },
          { id: 'ciudad-guayana', name: 'Σιουδάδ Γουαγιάνα', badge: 'Ορινόκο & Καταρράκτες Καρονί' },
          { id: 'merida-ve', name: 'Μέριντα', badge: 'Οι Άνδεις & το ψηλότερο τελεφερίκ' },
          { id: 'san-cristobal-ve', name: 'Σαν Κριστόμπαλ', badge: 'Η πόλη της ευγένειας' },
          { id: 'puerto-la-cruz', name: 'Πουέρτο Λα Κρουζ', badge: 'Καραϊβική & Εθνικό Πάρκο Μοτσιμά' },
          { id: 'cumana', name: 'Κουμανά', badge: 'Η πρώτη ισπανική αποικιακή πόλη της ηπείρου' }
        
        ]
      },
      {
        id: 'ecuador',
        name: 'Εκουαδόρ',
        flag: '🇪🇨',
        cities: [
          { id: 'quito', name: 'Κίτο', badge: 'Το Φως της Αμερικής' },
          { id: 'guayaquil', name: 'Γουαγιακίλ', badge: 'Το Μαργαριτάρι του Πασίφικο' },
          { id: 'cuenca', name: 'Κουένκα', badge: 'Η Αθήνα του Εκουαδόρ' },
          { id: 'ambato', name: 'Αμπάτο', badge: 'Η Πόλη των Λουλουδιών & των Φρούτων' },
          { id: 'manta', name: 'Μάντα', badge: 'Η Πύλη του Ειρηνικού' },
          { id: 'loja', name: 'Λόχα', badge: 'Η Πρωτεύουσα της Μουσικής' },
          { id: 'machala', name: 'Ματσάλα', badge: 'Η Πρωτεύουσα της Μπανάνας' },
          { id: 'riobamba', name: 'Ριομπάμπα', badge: 'Η Πόλη των Βουνών' },
          { id: 'ibarra', name: 'Ιμπάρρα', badge: 'Η Λευκή Πόλη του Βορρά' },
          { id: 'puerto-ayora', name: 'Πουέρτο Αγιόρα', badge: 'Η Πύλη των Γκαλαπάγκος' }
        
        ]
      },
      {
        id: 'bolivia',
        name: 'Βολιβία',
        flag: '🇧🇴',
        cities: [
          { id: 'la-paz', name: 'Λα Παζ', badge: 'Διοικητική Πρωτεύουσα' },
          { id: 'sucre', name: 'Σούκρε', badge: 'Συνταγματική Πρωτεύουσα' },
          { id: 'santa-cruz', name: 'Σάντα Κρουζ ντε λα Σιέρα', badge: 'Οικονομική Πρωτεύουσα' },
          { id: 'cochabamba', name: 'Κοτσαμπάμπα', badge: 'Γαστρονομική Πρωτεύουσα' },
          { id: 'potosi', name: 'Ποτοσί', badge: 'Μνημείο UNESCO' },
          { id: 'oruro', name: 'Ορούρο', badge: 'Καρναβάλι UNESCO' },
          { id: 'tarija', name: 'Ταρίχα', badge: 'Κοιλάδα του Κρασιού' },
          { id: 'trinidad-bo', name: 'Τρινιντάντ', badge: 'Πεδιάδα Beni' },
          { id: 'uyuni', name: 'Ουγιούνι', badge: 'Salar de Uyuni' },
          { id: 'copacabana-bo', name: 'Κοπακαμπάνα', badge: 'Λίμνη Τιτικάκα' }
        
        ]
      },
      {
        id: 'paraguay',
        name: 'Παραγουάη',
        flag: '🇵🇾',
        cities: [
          { id: 'asuncion', name: 'Ασουνσιόν', badge: 'Η Μητέρα των Πόλεων' },
          { id: 'ciudad-del-este', name: 'Σιουδάδ δελ Έστε', badge: 'Η Πύλη της Τριεθνούς & του Φράγματος Ιταϊπού' },
          { id: 'encarnacion', name: 'Ενκαρνασιόν', badge: 'Το Μαργαριτάρι του Νότου' },
          { id: 'luque', name: 'Λούκε', badge: 'Η Πόλη της Μουσικής & της Χρυσοχοΐας' },
          { id: 'san-lorenzo-py', name: 'Σαν Λορένσο', badge: 'Η Πανεπιστημιούπολη' },
          { id: 'villarrica', name: 'Βιγιαρρίκα', badge: 'Η Πόλη του Πνεύματος και των Τεχνών' },
          { id: 'concepcion-py', name: 'Κονσεπσιόν', badge: 'Το Μεγάλο Βόρειο Λιμάνι' },
          { id: 'pedro-juan-caballero', name: 'Πέδρο Χουάν Καμπαγιέρο', badge: 'Η Πύλη του Αμαμπάι' },
          { id: 'coronel-oviedo', name: 'Κορονέλ Οβιέδο', badge: 'Η Πόλη των Δέντρων' },
          { id: 'capiata', name: 'Καπιατά', badge: 'Η Πόλη των Μύθων και των Φραγκισκανών' }
        
        ]
      },
      {
        id: 'uruguay',
        name: 'Ουρουγουάη',
        flag: '🇺🇾',
        cities: [
          { id: 'montevideo', name: 'Μοντεβιδέο', badge: 'Η Πόλη της Rambla & του Τάνγκο' },
          { id: 'punta-del-este', name: 'Πούντα δελ Έστε', badge: 'Η Σαν Τροπέ της Νότιας Αμερικής' },
          { id: 'colonia-del-sacramento', name: 'Κολόνια δελ Σακραμέντο', badge: 'Ιστορικό Κόσμημα UNESCO' },
          { id: 'salto', name: 'Σάλτο', badge: 'Θερμά Λουτρά & Ποταμός Ουρουγουάης' },
          { id: 'paysandu', name: 'Παϊσαντού', badge: 'Ιστορική Ηρωική Πόλη' },
          { id: 'maldonado', name: 'Μαλδονάδο', badge: 'Αποικιακή Πρωτεύουσα της Ριβιέρας' },
          { id: 'rivera', name: 'Ριβέρα', badge: 'Διεθνής Πόλη στα Σύνορα με Βραζιλία' },
          { id: 'tacuarembo', name: 'Τακουαρεμπό', badge: 'Η Πατρίδα των Γκαούτσο' },
          { id: 'rocha', name: 'Ρότσα', badge: 'Πύλη για τις Άγριες Παραλίες του Ατλαντικού' },
          { id: 'mercedes-uy', name: 'Μερσέδες', badge: 'Η Πόλη των Τεχνών & του Ρίο Νέγρο' }
        
        ]
      },
      {
        id: 'guyana',
        name: 'Γουιάνα',
        flag: '🇬🇾',
        cities: [
          { id: 'georgetown', name: 'Τζορτζτάουν', badge: 'Πρωτεύουσα' },
          { id: 'linden', name: 'Λίντεν' }
        ]
      },
      {
        id: 'suriname',
        name: 'Σουρινάμ',
        flag: '🇸🇷',
        cities: [
          { id: 'paramaribo', name: 'Παραμαρίμπο', badge: 'Πρωτεύουσα' },
          { id: 'lelydorp', name: 'Λέλινορπ' }
        ]
      }
    ]
  }
,
  {
    id: 'africa',
    name: 'Αφρική',
    icon: 'fa-earth-africa',
    countries: [
      {
        id: 'egypt',
        name: 'Αίγυπτος',
        flag: '🇪🇬',
        cities: [
          { id: 'cairo', name: 'Κάιρο', badge: 'Πρωτεύουσα' },
          { id: 'alexandria', name: 'Αλεξάνδρεια', badge: 'Μεσόγειος' },
          { id: 'luxor', name: 'Λούξορ', badge: 'Ιστορικό' },
          { id: 'giza', name: 'Γκίζα', badge: 'Πυραμίδες' }
        ]
      },
      {
        id: 'morocco',
        name: 'Μαρόκο',
        flag: '🇲🇦',
        cities: [
          { id: 'rabat', name: 'Ραμπάτ', badge: 'Πρωτεύουσα' },
          { id: 'casablanca', name: 'Καζαμπλάνκα', badge: 'Μητρόπολη' },
          { id: 'marrakesh', name: 'Μαρακές', badge: 'Ιστορικό' },
          { id: 'fes', name: 'Φες' }
        ]
      },
      {
        id: 'tunisia',
        name: 'Τυνησία',
        flag: '🇹🇳',
        cities: [
          { id: 'tunis', name: 'Τύνιδα', badge: 'Πρωτεύουσα' },
          { id: 'sfax', name: 'Σφαξ' },
          { id: 'sousse', name: 'Σους' }
        ]
      },
      {
        id: 'algeria',
        name: 'Αλγερία',
        flag: '🇩🇿',
        cities: [
          { id: 'algiers', name: 'Αλγέρι', badge: 'Πρωτεύουσα' },
          { id: 'oran', name: 'Οράν' },
          { id: 'constantine', name: 'Κωνσταντίνη' }
        ]
      },
      {
        id: 'libya',
        name: 'Λιβύη',
        flag: '🇱🇾',
        cities: [
          { id: 'tripoli', name: 'Τρίπολη', badge: 'Πρωτεύουσα' },
          { id: 'benghazi', name: 'Βεγγάζη' }
        ]
      },
      {
        id: 'nigeria',
        name: 'Νιγηρία',
        flag: '🇳🇬',
        cities: [
          { id: 'abuja', name: 'Αμπούτζα', badge: 'Πρωτεύουσα' },
          { id: 'lagos', name: 'Λάγος', badge: 'Μητρόπολη' },
          { id: 'kano', name: 'Κάνο' }
        ]
      },
      {
        id: 'ghana',
        name: 'Γκάνα',
        flag: '🇬🇭',
        cities: [
          { id: 'accra', name: 'Άκρα', badge: 'Πρωτεύουσα' },
          { id: 'kumasi', name: 'Κουμάσι' }
        ]
      },
      {
        id: 'senegal',
        name: 'Σενεγάλη',
        flag: '🇸🇳',
        cities: [
          { id: 'dakar', name: 'Ντακάρ', badge: 'Πρωτεύουσα' },
          { id: 'saint-louis', name: 'Σαιν-Λουί' }
        ]
      },
      {
        id: 'ivory-coast',
        name: 'Ακτή Ελεφαντοστού',
        flag: '🇨🇮',
        cities: [
          { id: 'yamoussoukro', name: 'Γιαμουσούκρο', badge: 'Πρωτεύουσα' },
          { id: 'abidjan', name: 'Αμπιτζάν', badge: 'Μητρόπολη' }
        ]
      },
      {
        id: 'cameroon',
        name: 'Καμερούν',
        flag: '🇨🇲',
        cities: [
          { id: 'yaounde', name: 'Γιαουντέ', badge: 'Πρωτεύουσα' },
          { id: 'douala', name: 'Ντουάλα' }
        ]
      },
      {
        id: 'cape-verde',
        name: 'Πράσινο Ακρωτήριο',
        flag: '🇨🇻',
        cities: [
          { id: 'praia', name: 'Πράια', badge: 'Πρωτεύουσα' },
          { id: 'mindelo', name: 'Μιντέλο' }
        ]
      },
      {
        id: 'mauritania',
        name: 'Μαυριτανία',
        flag: '🇲🇷',
        cities: [
          { id: 'nouakchott', name: 'Νουακσότ', badge: 'Πρωτεύουσα' },
          { id: 'nouadhibou', name: 'Νουαντίμπου' }
        ]
      },
      {
        id: 'south-africa',
        name: 'Νότια Αφρική',
        flag: '🇿🇦',
        cities: [
          { id: 'cape-town', name: 'Κέιπ Τάουν', badge: 'Πρωτεύουσα' },
          { id: 'johannesburg', name: 'Γιοχάνεσμπουργκ', badge: 'Μητρόπολη' },
          { id: 'pretoria', name: 'Πρετόρια', badge: 'Διοικητική' },
          { id: 'durban', name: 'Ντέρμπαν' }
        ]
      },
      {
        id: 'kenya',
        name: 'Κένυα',
        flag: '🇰🇪',
        cities: [
          { id: 'nairobi', name: 'Ναϊρόμπι', badge: 'Πρωτεύουσα' },
          { id: 'mombasa', name: 'Μομπάσα', badge: 'Λιμάνι' }
        ]
      },
      {
        id: 'tanzania',
        name: 'Τανζανία',
        flag: '🇹🇿',
        cities: [
          { id: 'dodoma', name: 'Ντοντόμα', badge: 'Πρωτεύουσα' },
          { id: 'dar-es-salaam', name: 'Νταρ ες Σαλάμ', badge: 'Μητρόπολη' },
          { id: 'zanzibar', name: 'Ζανζιβάρη', badge: 'Νησί' }
        ]
      },
      {
        id: 'ethiopia',
        name: 'Αιθιοπία',
        flag: '🇪🇹',
        cities: [
          { id: 'addis-ababa', name: 'Αντίς Αμπέμπα', badge: 'Πρωτεύουσα' },
          { id: 'lalibela', name: 'Λαλιμπέλα', badge: 'Ιστορικό' }
        ]
      },
      {
        id: 'madagascar',
        name: 'Μαδαγασκάρη',
        flag: '🇲🇬',
        cities: [
          { id: 'antananarivo', name: 'Ανταναναρίβο', badge: 'Πρωτεύουσα' },
          { id: 'toamasina', name: 'Τοαμασίνα' }
        ]
      },
      {
        id: 'namibia',
        name: 'Ναμίμπια',
        flag: '🇳🇦',
        cities: [
          { id: 'windhoek', name: 'Βίντχουκ', badge: 'Πρωτεύουσα' },
          { id: 'swakopmund', name: 'Σουακοπμούντ' }
        ]
      },
      {
        id: 'botswana',
        name: 'Μποτσουάνα',
        flag: '🇧🇼',
        cities: [
          { id: 'gaborone', name: 'Γκαμπορόνε', badge: 'Πρωτεύουσα' },
          { id: 'maun', name: 'Μαούν', badge: 'Σαφάρι' }
        ]
      },
      {
        id: 'zimbabwe',
        name: 'Ζιμπάμπουε',
        flag: '🇿🇼',
        cities: [
          { id: 'harare', name: 'Χαράρε', badge: 'Πρωτεύουσα' },
          { id: 'victoria-falls', name: 'Βικτόρια Φολς', badge: 'Καταρράκτες' }
        ]
      },
      {
        id: 'rwanda',
        name: 'Ρουάντα',
        flag: '🇷🇼',
        cities: [
          { id: 'kigali', name: 'Κιγκάλι', badge: 'Πρωτεύουσα' },
          { id: 'gisenyi', name: 'Γκισένι' }
        ]
      },
      {
        id: 'uganda',
        name: 'Ουγκάντα',
        flag: '🇺🇬',
        cities: [
          { id: 'kampala', name: 'Καμπάλα', badge: 'Πρωτεύουσα' },
          { id: 'entebbe', name: 'Εντέμπε' }
        ]
      },
      {
        id: 'mauritius',
        name: 'Μαυρίκιος',
        flag: '🇲🇺',
        cities: [
          { id: 'port-louis', name: 'Πορ Λουί', badge: 'Πρωτεύουσα' },
          { id: 'grand-baie', name: 'Γκραν Μπε', badge: 'Θέρετρο' }
        ]
      },
      {
        id: 'dr-congo',
        name: 'Λαϊκή Δημοκρατία του Κονγκό',
        flag: '🇨🇩',
        cities: [
          { id: 'kinshasa', name: 'Κινσάσα', badge: 'Πρωτεύουσα' },
          { id: 'goma', name: 'Γκόμα' }
        ]
      },
      {
        id: 'angola',
        name: 'Αγκόλα',
        flag: '🇦🇴',
        cities: [
          { id: 'luanda', name: 'Λουάντα', badge: 'Πρωτεύουσα' },
          { id: 'benguela', name: 'Μπενγκέλα' }
        ]
      },
      {
        id: 'mozambique',
        name: 'Μοζαμβίκη',
        flag: '🇲🇿',
        cities: [
          { id: 'maputo', name: 'Μαπούτο', badge: 'Πρωτεύουσα' },
          { id: 'beira', name: 'Μπέιρα' }
        ]
      },
      {
        id: 'benin',
        name: 'Μπενίν',
        flag: '🇧🇯',
        cities: [
          { id: 'porto-novo', name: 'Πόρτο Νόβο', badge: 'Πρωτεύουσα' },
          { id: 'cotonou', name: 'Κοτονού' }
        ]
      },
      {
        id: 'burkina-faso',
        name: 'Μπουρκίνα Φάσο',
        flag: '🇧🇫',
        cities: [
          { id: 'ouagadougou', name: 'Ουαγκαντουγκού', badge: 'Πρωτεύουσα' },
          { id: 'bobo-dioulasso', name: 'Μπόμπο-Ντιουλασό' }
        ]
      },
      {
        id: 'gambia',
        name: 'Γκάμπια',
        flag: '🇬🇲',
        cities: [
          { id: 'banjul', name: 'Μπανζούλ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'guinea',
        name: 'Γουινέα',
        flag: '🇬🇳',
        cities: [
          { id: 'conakry', name: 'Κονακρί', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'guinea-bissau',
        name: 'Γουινέα-Μπισάου',
        flag: '🇬🇼',
        cities: [
          { id: 'bissau', name: 'Μπισάου', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'liberia',
        name: 'Λιβερία',
        flag: '🇱🇷',
        cities: [
          { id: 'monrovia', name: 'Μονρόβια', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'mali',
        name: 'Μάλι',
        flag: '🇲🇱',
        cities: [
          { id: 'bamako', name: 'Μπαμακό', badge: 'Πρωτεύουσα' },
          { id: 'timbuktu', name: 'Τιμπουκτού', badge: 'UNESCO Κληρονομιά' }
        ]
      },
      {
        id: 'niger',
        name: 'Νίγηρας',
        flag: '🇳🇪',
        cities: [
          { id: 'niamey', name: 'Νιαμέι', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'sierra-leone',
        name: 'Σιέρα Λεόνε',
        flag: '🇸🇱',
        cities: [
          { id: 'freetown', name: 'Φρίταουν', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'togo',
        name: 'Τόγκο',
        flag: '🇹🇬',
        cities: [
          { id: 'lome', name: 'Λομέ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'chad',
        name: 'Τσαντ',
        flag: '🇹🇩',
        cities: [
          { id: 'ndjamena', name: 'Ντζαμένα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'central-african-republic',
        name: 'Κεντροαφρικανική Δημοκρατία',
        flag: '🇨🇫',
        cities: [
          { id: 'bangui', name: 'Μπανγκί', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'congo',
        name: 'Κονγκό',
        flag: '🇨🇬',
        cities: [
          { id: 'brazzaville', name: 'Μπραζαβίλ', badge: 'Πρωτεύουσα' },
          { id: 'pointe-noire', name: 'Πουάντ-Νουάρ' }
        ]
      },
      {
        id: 'equatorial-guinea',
        name: 'Ισημερινή Γουινέα',
        flag: '🇬🇶',
        cities: [
          { id: 'malabo', name: 'Μαλάμπο', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'gabon',
        name: 'Γκαμπόν',
        flag: '🇬🇦',
        cities: [
          { id: 'libreville', name: 'Λιμπρεβίλ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'sao-tome-and-principe',
        name: 'Σάο Τομέ και Πρίνσιπε',
        flag: '🇸🇹',
        cities: [
          { id: 'sao-tome', name: 'Σάο Τομέ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'comoros',
        name: 'Κομόρες',
        flag: '🇰🇲',
        cities: [
          { id: 'moroni', name: 'Μορονί', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'seychelles',
        name: 'Σεϋχέλλες',
        flag: '🇸🇨',
        cities: [
          { id: 'victoria', name: 'Βικτόρια', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'djibouti',
        name: 'Τζιμπουτί',
        flag: '🇩🇯',
        cities: [
          { id: 'djibouti-city', name: 'Τζιμπουτί', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'eritrea',
        name: 'Ερυθραία',
        flag: '🇪🇷',
        cities: [
          { id: 'asmara', name: 'Ασμάρα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'somalia',
        name: 'Σομαλία',
        flag: '🇸🇴',
        cities: [
          { id: 'mogadishu', name: 'Μογκαντίσου', badge: 'Πρωτεύουσα' },
          { id: 'hargeisa', name: 'Χαργκέισα' }
        ]
      },
      {
        id: 'sudan',
        name: 'Σουδάν',
        flag: '🇸🇩',
        cities: [
          { id: 'khartoum', name: 'Χαρτούμ', badge: 'Πρωτεύουσα' },
          { id: 'port-sudan', name: 'Πορτ Σουδάν' }
        ]
      },
      {
        id: 'south-sudan',
        name: 'Νότιο Σουδάν',
        flag: '🇸🇸',
        cities: [
          { id: 'juba', name: 'Τζούμπα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'burundi',
        name: 'Μπουρούντι',
        flag: '🇧🇮',
        cities: [
          { id: 'gitega', name: 'Γκιτέγκα', badge: 'Πρωτεύουσα' },
          { id: 'bujumbura', name: 'Μπουζουμπούρα' }
        ]
      },
      {
        id: 'malawi',
        name: 'Μαλάουι',
        flag: '🇲🇼',
        cities: [
          { id: 'lilongwe', name: 'Λιλόνγκουε', badge: 'Πρωτεύουσα' },
          { id: 'blantyre', name: 'Μπλαντάιρ' }
        ]
      },
      {
        id: 'zambia',
        name: 'Ζάμπια',
        flag: '🇿🇲',
        cities: [
          { id: 'lusaka', name: 'Λουσάκα', badge: 'Πρωτεύουσα' },
          { id: 'livingstone', name: 'Λίβινγκστον', badge: 'Καταρράκτες Βικτόρια' }
        ]
      },
      {
        id: 'lesotho',
        name: 'Λεσότο',
        flag: '🇱🇸',
        cities: [
          { id: 'maseru', name: 'Μαζέρου', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'eswatini',
        name: 'Εσουατίνι',
        flag: '🇸🇿',
        cities: [
          { id: 'mbabane', name: 'Μπαμπάνε', badge: 'Πρωτεύουσα' }
        ]
      }
    ]
  },
  {
    id: 'asia',
    name: 'Ασία',
    icon: 'fa-earth-asia',
    countries: [
      {
        id: 'china',
        name: 'Κίνα',
        flag: '🇨🇳',
        cities: [
          { id: 'beijing', name: 'Πεκίνο', badge: 'Πρωτεύουσα' },
          { id: 'shanghai', name: 'Σανγκάη', badge: 'Μητρόπολη' },
          { id: 'hong-kong', name: 'Χονγκ Κονγκ', badge: 'Ειδική Περιφέρεια' },
          { id: 'xian', name: 'Σιάν', badge: 'Πήλινος Στρατός' },
          { id: 'chengdu', name: 'Τσενγκντού', badge: 'Γιγάντια Πάντα' },
          { id: 'guangzhou', name: 'Γκουανγκτζόου', badge: 'Καντόνα' },
          { id: 'hangzhou', name: 'Χανγκτζόου', badge: 'Δυτική Λίμνη' },
          { id: 'chongqing', name: 'Τσονγκτσίνγκ', badge: 'Γιανγκτσέ' },
          { id: 'suzhou', name: 'Σουτζόου', badge: 'Κήποι UNESCO' },
          { id: 'guilin', name: 'Γκουιλίν', badge: 'Καρστικά Τοπία' }
        ]
      },
      {
        id: 'japan',
        name: 'Ιαπωνία',
        flag: '🇯🇵',
        cities: [
          { id: 'tokyo', name: 'Τόκιο', badge: 'Πρωτεύουσα' },
          { id: 'kyoto', name: 'Κιότο', badge: 'Αρχαία Πρωτεύουσα' },
          { id: 'osaka', name: 'Οσάκα', badge: 'Γαστρονομία & Εμπόριο' },
          { id: 'hiroshima', name: 'Χιροσίμα', badge: 'Μνημείο Ειρήνης' },
          { id: 'sapporo', name: 'Σαππόρο', badge: 'Χοκκάιντο' },
          { id: 'fukuoka', name: 'Φουκουόκα', badge: 'Πύλη Κιούσου' }
        ]
      },
      {
        id: 'south-korea',
        name: 'Νότια Κορέα',
        flag: '🇰🇷',
        cities: [
          { id: 'seoul', name: 'Σεούλ', badge: 'Πρωτεύουσα' },
          { id: 'busan', name: 'Μπουσάν', badge: 'Μεγάλο Λιμάνι' },
          { id: 'incheon', name: 'Ίντσον', badge: 'Διεθνής Πύλη' }
        ]
      },
      {
        id: 'north-korea',
        name: 'Βόρεια Κορέα',
        flag: '🇰🇵',
        cities: [
          { id: 'pyongyang', name: 'Πιονγιάνγκ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'mongolia',
        name: 'Μογγολία',
        flag: '🇲🇳',
        cities: [
          { id: 'ulaanbaatar', name: 'Ουλάν Μπατόρ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'taiwan',
        name: 'Ταϊβάν',
        flag: '🇹🇼',
        cities: [
          { id: 'taipei', name: 'Ταϊπέι', badge: 'Πρωτεύουσα' },
          { id: 'kaohsiung', name: 'Καοσιούνγκ', badge: 'Νότιο Λιμάνι' }
        ]
      },
      {
        id: 'vietnam',
        name: 'Βιετνάμ',
        flag: '🇻🇳',
        cities: [
          { id: 'hanoi', name: 'Ανόι', badge: 'Πρωτεύουσα' },
          { id: 'ho-chi-minh-city', name: 'Χο Τσι Μινχ', badge: 'Οικονομικό Κέντρο' },
          { id: 'da-nang', name: 'Ντα Νανγκ', badge: 'Κεντρική Ακτή' }
        ]
      },
      {
        id: 'thailand',
        name: 'Ταϊλάνδη',
        flag: '🇹🇭',
        cities: [
          { id: 'bangkok', name: 'Μπανγκόκ', badge: 'Πρωτεύουσα' },
          { id: 'chiang-mai', name: 'Τσιάνγκ Μάι', badge: 'Βόρειος Πολιτισμός' },
          { id: 'phuket', name: 'Πουκέτ', badge: 'Ανδαμάν' }
        ]
      },
      {
        id: 'indonesia',
        name: 'Ινδονησία',
        flag: '🇮🇩',
        cities: [
          { id: 'jakarta', name: 'Τζακάρτα', badge: 'Πρωτεύουσα' },
          { id: 'bali-denpasar', name: 'Ντενπασάρ', badge: 'Μπαλί' },
          { id: 'surabaya', name: 'Σουραμπάγια', badge: 'Ανατολική Ιάβα' }
        ]
      },
      {
        id: 'malaysia',
        name: 'Μαλαισία',
        flag: '🇲🇾',
        cities: [
          { id: 'kuala-lumpur', name: 'Κουάλα Λουμπούρ', badge: 'Πρωτεύουσα' },
          { id: 'george-town', name: 'Τζορτζ Τάουν', badge: 'Πενάνγκ UNESCO' }
        ]
      },
      {
        id: 'singapore',
        name: 'Σιγκαπούρη',
        flag: '🇸🇬',
        cities: [
          { id: 'singapore', name: 'Σιγκαπούρη', badge: 'Πόλη-Κράτος' }
        ]
      },
      {
        id: 'philippines',
        name: 'Φιλιππίνες',
        flag: '🇵🇭',
        cities: [
          { id: 'manila', name: 'Μανίλα', badge: 'Πρωτεύουσα' },
          { id: 'cebu-city', name: 'Σεμπού', badge: 'Βασίλισσα Νότου' }
        ]
      },
      {
        id: 'cambodia',
        name: 'Καμπότζη',
        flag: '🇰🇭',
        cities: [
          { id: 'phnom-penh', name: 'Πνομ Πενχ', badge: 'Πρωτεύουσα' },
          { id: 'siem-reap', name: 'Σιέμ Ριπ', badge: 'Άνγκορ Βατ' }
        ]
      },
      {
        id: 'laos',
        name: 'Λάος',
        flag: '🇱🇦',
        cities: [
          { id: 'vientiane', name: 'Βιεντιάν', badge: 'Πρωτεύουσα' },
          { id: 'luang-prabang', name: 'Λουάνγκ Πραμπάνγκ', badge: 'UNESCO Κληρονομιά' }
        ]
      },
      {
        id: 'myanmar',
        name: 'Μιανμάρ',
        flag: '🇲🇲',
        cities: [
          { id: 'yangon', name: 'Γιανγκόν', badge: 'Ιστορική Πρωτεύουσα' },
          { id: 'mandalay', name: 'Μάνταλεϊ', badge: 'Βασιλική Πόλη' }
        ]
      },
      {
        id: 'brunei',
        name: 'Μπρουνέι',
        flag: '🇧🇳',
        cities: [
          { id: 'bandar-seri-begawan', name: 'Μπαντάρ Σερί Μπεγκαβάν', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'east-timor',
        name: 'Ανατολικό Τιμόρ',
        flag: '🇹🇱',
        cities: [
          { id: 'dili', name: 'Ντίλι', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'india',
        name: 'Ινδία',
        flag: '🇮🇳',
        cities: [
          { id: 'new-delhi', name: 'Νέο Δελχί', badge: 'Πρωτεύουσα' },
          { id: 'mumbai', name: 'Βομβάη', badge: 'Οικονομικό Κέντρο' },
          { id: 'jaipur', name: 'Τζαϊπούρ', badge: 'Ροζ Πόλη' },
          { id: 'agra', name: 'Άγκρα', badge: 'Ταζ Μαχάλ' }
        ]
      },
      {
        id: 'pakistan',
        name: 'Πακιστάν',
        flag: '🇵🇰',
        cities: [
          { id: 'islamabad', name: 'Ισλαμαμπάντ', badge: 'Πρωτεύουσα' },
          { id: 'karachi', name: 'Καράτσι' },
          { id: 'lahore', name: 'Λαχόρη' }
        ]
      },
      {
        id: 'bangladesh',
        name: 'Μπαγκλαντές',
        flag: '🇧🇩',
        cities: [
          { id: 'dhaka', name: 'Ντάκα', badge: 'Πρωτεύουσα' },
          { id: 'chattogram', name: 'Τσιταγκόνγκ' }
        ]
      },
      {
        id: 'sri-lanka',
        name: 'Σρι Λάνκα',
        flag: '🇱🇰',
        cities: [
          { id: 'colombo', name: 'Κολόμπο', badge: 'Πρωτεύουσα' },
          { id: 'kandy', name: 'Κάντι' }
        ]
      },
      {
        id: 'nepal',
        name: 'Νεπάλ',
        flag: '🇳🇵',
        cities: [
          { id: 'kathmandu', name: 'Κατμαντού', badge: 'Πρωτεύουσα' },
          { id: 'pokhara', name: 'Ποκάρα' }
        ]
      },
      {
        id: 'bhutan',
        name: 'Μπουτάν',
        flag: '🇧🇹',
        cities: [
          { id: 'thimphu', name: 'Τιμπού', badge: 'Πρωτεύουσα' },
          { id: 'paro', name: 'Πάρο' }
        ]
      },
      {
        id: 'maldives',
        name: 'Μαλδίβες',
        flag: '🇲🇻',
        cities: [
          { id: 'male', name: 'Μαλέ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'afghanistan',
        name: 'Αφγανιστάν',
        flag: '🇦🇫',
        cities: [
          { id: 'kabul', name: 'Καμπούλ', badge: 'Πρωτεύουσα' },
          { id: 'herat', name: 'Χεράτ' }
        ]
      },
      {
        id: 'iran',
        name: 'Ιράν',
        flag: '🇮🇷',
        cities: [
          { id: 'tehran', name: 'Τεχεράνη', badge: 'Πρωτεύουσα' },
          { id: 'isfahan', name: 'Ισφαχάν' },
          { id: 'shiraz', name: 'Σιράζ' }
        ]
      },
      {
        id: 'iraq',
        name: 'Ιράκ',
        flag: '🇮🇶',
        cities: [
          { id: 'baghdad', name: 'Βαγδάτη', badge: 'Πρωτεύουσα' },
          { id: 'erbil', name: 'Ερμπίλ' }
        ]
      },
      {
        id: 'syria',
        name: 'Συρία',
        flag: '🇸🇾',
        cities: [
          { id: 'damascus', name: 'Δαμασκός', badge: 'Πρωτεύουσα' },
          { id: 'aleppo', name: 'Χαλέπι' }
        ]
      },
      {
        id: 'lebanon',
        name: 'Λίβανος',
        flag: '🇱🇧',
        cities: [
          { id: 'beirut', name: 'Βηρυτός', badge: 'Πρωτεύουσα' },
          { id: 'byblos', name: 'Βύβλος' }
        ]
      },
      {
        id: 'israel',
        name: 'Ισραήλ',
        flag: '🇮🇱',
        cities: [
          { id: 'jerusalem', name: 'Ιερουσαλήμ', badge: 'Πρωτεύουσα' },
          { id: 'tel-aviv', name: 'Τελ Αβίβ' }
        ]
      },
      {
        id: 'palestine',
        name: 'Παλαιστίνη',
        flag: '🇵🇸',
        cities: [
          { id: 'ramallah', name: 'Ραμάλα', badge: 'Διοικητική Έδρα' },
          { id: 'bethlehem', name: 'Βηθλεέμ' }
        ]
      },
      {
        id: 'jordan',
        name: 'Ιορδανία',
        flag: '🇯🇴',
        cities: [
          { id: 'amman', name: 'Αμμάν', badge: 'Πρωτεύουσα' },
          { id: 'petra', name: 'Πέτρα', badge: 'UNESCO Θαύμα' }
        ]
      },
      {
        id: 'saudi-arabia',
        name: 'Σαουδική Αραβία',
        flag: '🇸🇦',
        cities: [
          { id: 'riyadh', name: 'Ριάντ', badge: 'Πρωτεύουσα' },
          { id: 'jeddah', name: 'Τζέντα' },
          { id: 'mecca', name: 'Μέκκα' }
        ]
      },
      {
        id: 'uae',
        name: 'ΗΑΕ',
        flag: '🇦🇪',
        cities: [
          { id: 'abu-dhabi', name: 'Άμπου Ντάμπι', badge: 'Πρωτεύουσα' },
          { id: 'dubai', name: 'Ντουμπάι', badge: 'Μητρόπολη' },
          { id: 'sharjah', name: 'Σάρτζα' }
        ]
      },
      {
        id: 'qatar',
        name: 'Κατάρ',
        flag: '🇶🇦',
        cities: [
          { id: 'doha', name: 'Ντόχα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'kuwait',
        name: 'Κουβέιτ',
        flag: '🇰🇼',
        cities: [
          { id: 'kuwait-city', name: 'Πόλη του Κουβέιτ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'bahrain',
        name: 'Μπαχρέιν',
        flag: '🇧🇭',
        cities: [
          { id: 'manama', name: 'Μανάμα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'oman',
        name: 'Ομάν',
        flag: '🇴🇲',
        cities: [
          { id: 'muscat', name: 'Μουσκάτ', badge: 'Πρωτεύουσα' },
          { id: 'salalah', name: 'Σαλάλα' }
        ]
      },
      {
        id: 'yemen',
        name: 'Υεμένη',
        flag: '🇾🇪',
        cities: [
          { id: 'sanaa', name: 'Σαναά', badge: 'Πρωτεύουσα' },
          { id: 'aden', name: 'Άντεν' }
        ]
      },
      {
        id: 'georgia',
        name: 'Γεωργία',
        flag: '🇬🇪',
        cities: [
          { id: 'tbilisi', name: 'Τιφλίδα', badge: 'Πρωτεύουσα' },
          { id: 'batumi', name: 'Μπατούμι' }
        ]
      },
      {
        id: 'armenia',
        name: 'Αρμενία',
        flag: '🇦🇲',
        cities: [
          { id: 'yerevan', name: 'Ερεβάν', badge: 'Πρωτεύουσα' },
          { id: 'gyumri', name: 'Γκιουμρί' }
        ]
      },
      {
        id: 'azerbaijan',
        name: 'Αζερμπαϊτζάν',
        flag: '🇦🇿',
        cities: [
          { id: 'baku', name: 'Μπακού', badge: 'Πρωτεύουσα' },
          { id: 'ganja', name: 'Γκαντζά' }
        ]
      },
      {
        id: 'kazakhstan',
        name: 'Καζακστάν',
        flag: '🇰🇿',
        cities: [
          { id: 'astana', name: 'Αστανά', badge: 'Πρωτεύουσα' },
          { id: 'almaty', name: 'Αλμάτι' }
        ]
      },
      {
        id: 'uzbekistan',
        name: 'Ουζμπεκιστάν',
        flag: '🇺🇿',
        cities: [
          { id: 'tashkent', name: 'Τασκένδη', badge: 'Πρωτεύουσα' },
          { id: 'samarkand', name: 'Σαμαρκάνδη', badge: 'Δρόμος Μεταξιού' },
          { id: 'bukhara', name: 'Μπουχάρα' }
        ]
      },
      {
        id: 'kyrgyzstan',
        name: 'Κιργιζία',
        flag: '🇰🇬',
        cities: [
          { id: 'bishkek', name: 'Μπισκέκ', badge: 'Πρωτεύουσα' },
          { id: 'osh', name: 'Ος' }
        ]
      },
      {
        id: 'tajikistan',
        name: 'Τατζικιστάν',
        flag: '🇹🇯',
        cities: [
          { id: 'dushanbe', name: 'Ντουσαμπέ', badge: 'Πρωτεύουσα' },
          { id: 'khujand', name: 'Χουτζάντ' }
        ]
      },
      {
        id: 'turkmenistan',
        name: 'Τουρκμενιστάν',
        flag: '🇹🇲',
        cities: [
          { id: 'ashgabat', name: 'Ασγκαμπάτ', badge: 'Πρωτεύουσα' },
          { id: 'turkmenabat', name: 'Τουρκμεναμπάτ' }
        ]
      }
    ]
  },
  {
    id: 'oceania',
    name: 'Ωκεανία',
    icon: 'fa-earth-oceania',
    countries: [
      {
        id: 'australia',
        name: 'Αυστραλία',
        flag: '🇦🇺',
        cities: [
          { id: 'sydney', name: 'Σύδνεϋ', badge: 'Μητρόπολη' },
          { id: 'melbourne', name: 'Μελβούρνη', badge: 'Πολιτισμός' },
          { id: 'brisbane', name: 'Μπρίσμπεϊν', badge: 'Κουίνσλαντ' },
          { id: 'perth', name: 'Περθ', badge: 'Δυτική Αυστραλία' },
          { id: 'adelaide', name: 'Αδελαΐδα', badge: 'Νότια Αυστραλία' },
          { id: 'canberra', name: 'Καμπέρα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'new-zealand',
        name: 'Νέα Ζηλανδία',
        flag: '🇳🇿',
        cities: [
          { id: 'auckland', name: 'Ώκλαντ', badge: 'Μητρόπολη' },
          { id: 'wellington', name: 'Ουέλινγκτον', badge: 'Πρωτεύουσα' },
          { id: 'christchurch', name: 'Κράιστσερτς', badge: 'Νότιο Νησί' },
          { id: 'queenstown', name: 'Κουίνσταουν', badge: 'Άλπεις & Λίμνες' }
        ]
      },
      {
        id: 'papua-new-guinea',
        name: 'Παπούα Νέα Γουινέα',
        flag: '🇵🇬',
        cities: [
          { id: 'port-moresby', name: 'Πορτ Μόρεσμπι', badge: 'Πρωτεύουσα' },
          { id: 'lae', name: 'Λάε', badge: 'Λιμάνι' }
        ]
      },
      {
        id: 'fiji',
        name: 'Φίτζι',
        flag: '🇫🇯',
        cities: [
          { id: 'suva', name: 'Σούβα', badge: 'Πρωτεύουσα' },
          { id: 'nadi', name: 'Νάντι', badge: 'Τουρισμός' }
        ]
      },
      {
        id: 'samoa',
        name: 'Σαμόα',
        flag: '🇼🇸',
        cities: [
          { id: 'apia', name: 'Άπια', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'vanuatu',
        name: 'Βανουάτου',
        flag: '🇻🇺',
        cities: [
          { id: 'port-vila', name: 'Πορτ Βίλα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'solomon-islands',
        name: 'Νήσοι Σολομώντα',
        flag: '🇸🇧',
        cities: [
          { id: 'honiara', name: 'Χονιάρα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'micronesia',
        name: 'Μικρονησία',
        flag: '🇫🇲',
        cities: [
          { id: 'palikir', name: 'Παλικίρ', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'tonga',
        name: 'Τόνγκα',
        flag: '🇹🇴',
        cities: [
          { id: 'nukualofa', name: 'Νουκουαλόφα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'kiribati',
        name: 'Κιριμπάτι',
        flag: '🇰🇮',
        cities: [
          { id: 'south-tarawa', name: 'Νότια Ταράουα', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'palau',
        name: 'Παλάου',
        flag: '🇵🇼',
        cities: [
          { id: 'ngerulmud', name: 'Νγκερουλμούντ', badge: 'Πρωτεύουσα' },
          { id: 'koror', name: 'Κορόρ', badge: 'Κέντρο' }
        ]
      },
      {
        id: 'marshall-islands',
        name: 'Νήσοι Μάρσαλ',
        flag: '🇲🇭',
        cities: [
          { id: 'majuro', name: 'Ματζούρο', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'nauru',
        name: 'Ναουρού',
        flag: '🇳🇷',
        cities: [
          { id: 'yaren', name: 'Γιαρέν', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'tuvalu',
        name: 'Τουβαλού',
        flag: '🇹🇻',
        cities: [
          { id: 'funafuti', name: 'Φουναφούτι', badge: 'Πρωτεύουσα' }
        ]
      }
    ]
  }
];

let isNavDropdownOpen = false;
let expandedContinents = new Set(['europe']);
let expandedCountries = new Set(['greece']);
let expandedStates = new Set(['massachusetts']);
let showAllStates = false;

export function initContinentNavigator() {
  renderContinentNav();

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    const container = document.getElementById('continentNavContainer');
    if (container && !container.contains(e.target) && isNavDropdownOpen) {
      closeContinentNavDropdown();
    }
  });
}

export function toggleContinentNavDropdown(event) {
  if (event) event.stopPropagation();
  isNavDropdownOpen = !isNavDropdownOpen;
  const dropdown = document.getElementById('continentNavDropdown');
  const arrow = document.getElementById('continentNavArrow');
  if (!dropdown) return;

  if (isNavDropdownOpen) {
    dropdown.classList.remove('hidden');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
    renderContinentNav();
    const searchInput = document.getElementById('continentNavSearch');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 50);
    }
  } else {
    dropdown.classList.add('hidden');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

export function closeContinentNavDropdown() {
  isNavDropdownOpen = false;
  const dropdown = document.getElementById('continentNavDropdown');
  const arrow = document.getElementById('continentNavArrow');
  if (dropdown) dropdown.classList.add('hidden');
  if (arrow) arrow.style.transform = 'rotate(0deg)';
}

export function toggleContinentSection(continentId, event) {
  if (event) event.stopPropagation();
  if (expandedContinents.has(continentId)) {
    expandedContinents.delete(continentId);
  } else {
    expandedContinents.add(continentId);
  }
  renderContinentNav();
}

export function toggleCountrySection(countryId, event) {
  if (event) event.stopPropagation();
  if (expandedCountries.has(countryId)) {
    expandedCountries.delete(countryId);
  } else {
    expandedCountries.add(countryId);
  }
  renderContinentNav();
}

export function selectNavTarget(targetValue, targetName = '') {
  closeContinentNavDropdown();
  if (window.handleJumpChange) {
    window.handleJumpChange(targetValue);
  }
  updateNavigatorBtnLabel(targetValue, targetName);
}

export function updateNavigatorBtnLabel(targetValue, targetName = '') {
  const labelEl = document.getElementById('continentNavBtnLabel');
  if (!labelEl) return;

  if (targetValue === 'world') {
    labelEl.innerText = '🌍 Πλανήτης Γη';
    return;
  }

  if (targetName) {
    labelEl.innerText = targetName;
    return;
  }

  // Lookup in US_STATES
  if (targetValue.startsWith('state:')) {
    const sId = targetValue.split(':')[1];
    const st = US_STATES.find(s => s.id === sId);
    labelEl.innerText = st ? `🏛️ ${st.name} (ΗΠΑ)` : targetValue;
    return;
  }
  if (targetValue.startsWith('city:')) {
    const cId = targetValue.split(':')[1];
    const sId = CITY_TO_STATE[cId];
    if (sId) {
      const st = US_STATES.find(s => s.id === sId);
      if (st) {
        const c = st.cities.find(ci => ci.id === cId);
        labelEl.innerText = `📍 ${c ? c.name : cId} (${st.name})`;
        return;
      }
    }
  }

  // Lookup in data
  for (const continent of CONTINENTS_DATA) {
    for (const country of continent.countries) {
      if (targetValue === `country:${country.id}`) {
        labelEl.innerText = `${country.flag} ${country.name}`;
        return;
      }
      for (const city of country.cities) {
        if (targetValue === `city:${city.id}`) {
          labelEl.innerText = `📍 ${city.name} (${country.flag})`;
          return;
        }
      }
    }
  }
}

export function filterContinentNav(query) {
  const q = (query || '').trim().toLowerCase();
  const searchResultsEl = document.getElementById('navSearchResults');
  const treeEl = document.getElementById('navHierarchyTree');

  if (!searchResultsEl || !treeEl) return;

  if (!q) {
    searchResultsEl.classList.add('hidden');
    treeEl.classList.remove('hidden');
    return;
  }

  searchResultsEl.classList.remove('hidden');
  treeEl.classList.add('hidden');

  const matches = [];
  for (const continent of CONTINENTS_DATA) {
    for (const country of continent.countries) {
      // Check country match
      if (country.name.toLowerCase().includes(q) || country.id.includes(q)) {
        matches.push({
          type: 'country',
          value: `country:${country.id}`,
          title: `${country.flag} ${country.name}`,
          sub: `${continent.name} • Εθνική Επισκόπηση`,
          icon: 'fa-landmark text-amber-400'
        });
      }
      // Check cities
      for (const city of country.cities) {
        if (city.name.toLowerCase().includes(q) || city.id.includes(q)) {
          matches.push({
            type: 'city',
            value: `city:${city.id}`,
            title: city.name,
            sub: `${country.flag} ${country.name} • ${continent.name}`,
            icon: 'fa-location-dot text-sky-400',
            badge: city.badge
          });
        }
      }
    }
  }

  // Check all 51 US States and 121 Cities
  for (const state of US_STATES) {
    if (state.name.toLowerCase().includes(q) || 
        state.englishName.toLowerCase().includes(q) || 
        state.id.includes(q) || 
        state.capital.toLowerCase().includes(q)) {
      matches.push({
        type: 'state',
        value: `state:${state.id}`,
        title: `🏛️ ${state.name} (${state.englishName})`,
        sub: `Πολιτεία ΗΠΑ • Πρωτεύουσα: ${state.capital}`,
        icon: 'fa-landmark text-emerald-400',
        badge: 'Πολιτεία ΗΠΑ'
      });
    }
    for (const city of state.cities) {
      if (city.name.toLowerCase().includes(q) || 
          city.englishName.toLowerCase().includes(q) || 
          city.id.includes(q)) {
        if (!matches.some(m => m.value === `city:${city.id}`)) {
          matches.push({
            type: 'city',
            value: `city:${city.id}`,
            title: city.name,
            sub: `🇺🇸 ${state.name} (${state.englishName}) • Βόρεια Αμερική`,
            icon: 'fa-location-dot text-sky-400',
            badge: city.badge || 'ΗΠΑ'
          });
        }
      }
    }
  }

  if (matches.length === 0) {
    searchResultsEl.innerHTML = `
      <div class="p-4 text-center text-slate-400 text-xs">
        <i class="fa-solid fa-magnifying-glass text-slate-600 text-lg mb-1 block"></i>
        Δεν βρέθηκε πόλη ή χώρα για "<strong>${q}</strong>"
      </div>
    `;
    return;
  }

  searchResultsEl.innerHTML = `
    <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
      Αποτελέσματα Αναζήτησης (${matches.length})
    </div>
    <div class="py-1">
      ${matches.map(m => `
        <button onclick="window.selectNavTarget('${m.value}', '${m.title.replace(/'/g, "\\'")}')" class="w-full text-left px-3 py-2 hover:bg-slate-800/90 text-slate-200 transition flex items-center justify-between group">
          <div class="flex items-center gap-2.5 min-w-0">
            <i class="fa-solid ${m.icon} text-xs shrink-0"></i>
            <div class="min-w-0">
              <div class="font-bold text-xs text-white group-hover:text-sky-300 truncate">${m.title}</div>
              <div class="text-[10px] text-slate-400 truncate">${m.sub}</div>
            </div>
          </div>
          ${m.badge ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0 font-medium">${m.badge}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;
}

export function renderContinentNav() {
  const container = document.getElementById('navHierarchyTree');
  if (!container) return;

  container.innerHTML = CONTINENTS_DATA.map(continent => {
    const isContExpanded = expandedContinents.has(continent.id);
    const countryCount = continent.countries.length;
    const totalCities = continent.countries.reduce((acc, c) => acc + c.cities.length, 0);

    return `
      <div class="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-950/40 mb-1.5">
        <!-- Continent Header Bar -->
        <button onclick="window.toggleContinentSection('${continent.id}', event)" class="w-full px-3 py-2.5 bg-slate-800/60 hover:bg-slate-800 text-left flex items-center justify-between text-xs font-bold text-white transition group">
          <div class="flex items-center gap-2">
            <i class="fa-solid ${continent.icon} text-sky-400"></i>
            <span class="group-hover:text-sky-300">${continent.name}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-700/80 text-slate-300 font-normal">
              ${countryCount} χώρες
            </span>
          </div>
          <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform duration-200 ${isContExpanded ? 'rotate-180 text-sky-400' : ''}"></i>
        </button>

        <!-- Countries List -->
        ${isContExpanded ? `
          <div class="p-1 space-y-1 bg-slate-900/50">
            ${continent.countries.map(country => {
              const isCountryExpanded = expandedCountries.has(country.id);
              const cityCount = country.cities.length;

              return `
                <div class="rounded-lg overflow-hidden border border-slate-800/50 bg-slate-950/30">
                  <!-- Country Header -->
                  <div class="w-full px-2.5 py-1.5 hover:bg-slate-800/70 flex items-center justify-between transition">
                    <button onclick="window.selectNavTarget('country:${country.id}', '${country.flag} ${country.name.replace(/'/g, "\\'")}')" class="flex items-center gap-2 text-left min-w-0 flex-1 py-0.5 group">
                      <span class="text-sm shrink-0">${country.flag}</span>
                      <span class="font-bold text-xs text-slate-200 group-hover:text-sky-300 truncate">${country.name}</span>
                      <span class="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 font-mono shrink-0">${cityCount}</span>
                    </button>
                    <button onclick="window.toggleCountrySection('${country.id}', event)" class="p-1 text-slate-400 hover:text-white transition" title="Προβολή πόλεων">
                      <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${isCountryExpanded ? 'rotate-180 text-sky-400' : ''}"></i>
                    </button>
                  </div>

                  <!-- Cities List -->
                  ${isCountryExpanded ? `
                    <div class="px-2 py-1 bg-slate-950/60 border-t border-slate-800/40 space-y-0.5">
                      <!-- Country Overview Action -->
                      <button onclick="window.selectNavTarget('country:${country.id}', '${country.flag} ${country.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2 py-1 rounded hover:bg-slate-800/80 text-amber-300 hover:text-white transition flex items-center gap-2 text-[11px] font-semibold">
                        <i class="fa-solid fa-landmark text-amber-400 text-[10px]"></i>
                        <span>Εθνική Επισκόπηση (${country.name})</span>
                      </button>

                      <!-- Individual Cities -->
                      ${country.cities.map(city => `
                        <button onclick="window.selectNavTarget('city:${city.id}', '📍 ${city.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-sky-300 transition flex items-center justify-between text-[11px] group">
                          <span class="flex items-center gap-1.5 truncate">
                            <i class="fa-solid fa-location-dot text-[9px] text-sky-400 group-hover:scale-110 transition-transform"></i>
                            <span class="truncate">${city.name}</span>
                          </span>
                          ${city.badge ? `<span class="text-[8px] px-1 rounded bg-slate-800 text-slate-400 border border-slate-700/60 group-hover:border-sky-500/40 group-hover:text-sky-300 shrink-0">${city.badge}</span>` : ''}
                        </button>
                      `).join('')}

                      ${country.id === 'usa' ? `
                        <!-- Collapsible All US States Section (51 States, 121 Cities) -->
                        <div class="mt-2 pt-2 border-t border-slate-800/60">
                          <button onclick="window.toggleAllStatesSection(event)" class="w-full px-2 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/40 flex items-center justify-between text-left text-[11px] font-bold text-emerald-300 hover:text-emerald-200 transition group">
                            <div class="flex items-center gap-1.5">
                              <i class="fa-solid fa-flag-usa text-emerald-400"></i>
                              <span>🏛️ 50 Πολιτείες & D.C.</span>
                              <span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-900/60 text-emerald-300 font-mono">121 πόλεις</span>
                            </div>
                            <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${showAllStates ? 'rotate-180 text-emerald-300' : ''}"></i>
                          </button>

                          ${showAllStates ? `
                            <div class="mt-1 pl-1 space-y-1 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
                              ${US_STATES.map(state => {
                                const isStExpanded = expandedStates.has(state.id);
                                return `
                                  <div class="rounded border border-slate-800/40 bg-slate-900/40 overflow-hidden">
                                    <div class="w-full px-2 py-1 hover:bg-slate-800/60 flex items-center justify-between transition text-[11px]">
                                      <button onclick="window.selectNavTarget('state:${state.id}', '🏛️ ${state.name.replace(/'/g, "\\'")}')" class="flex items-center gap-1.5 text-left min-w-0 flex-1 group">
                                        <i class="fa-solid fa-landmark text-[9px] text-emerald-400 shrink-0"></i>
                                        <span class="font-medium text-slate-300 group-hover:text-emerald-300 truncate">${state.name}</span>
                                        <span class="text-[8px] text-slate-500 font-mono">(${state.cities.length})</span>
                                      </button>
                                      ${state.cities.length > 0 ? `
                                        <button onclick="window.toggleStateSection('${state.id}', event)" class="p-1 text-slate-400 hover:text-white transition" title="Προβολή πόλεων ${state.name}">
                                          <i class="fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${isStExpanded ? 'rotate-180 text-emerald-400' : ''}"></i>
                                        </button>
                                      ` : ''}
                                    </div>
                                    ${isStExpanded && state.cities.length > 0 ? `
                                      <div class="px-2 py-0.5 bg-slate-950/80 border-t border-slate-800/30 space-y-0.5 pl-4">
                                        ${state.cities.map(sc => `
                                          <button onclick="window.selectNavTarget('city:${sc.id}', '📍 ${sc.name.replace(/'/g, "\\'")}')" class="w-full text-left px-1.5 py-0.5 rounded hover:bg-slate-800 text-slate-400 hover:text-sky-300 transition flex items-center justify-between text-[10px] group">
                                            <span class="truncate">📍 ${sc.name}</span>
                                            ${sc.badge ? `<span class="text-[7px] px-1 rounded bg-slate-800 text-amber-300 border border-amber-600/30 shrink-0">${sc.badge}</span>` : ''}
                                          </button>
                                        `).join('')}
                                      </div>
                                    ` : ''}
                                  </div>
                                `;
                              }).join('')}
                            </div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}


export function toggleStateSection(stateId, event) {
  if (event) event.stopPropagation();
  if (expandedStates.has(stateId)) {
    expandedStates.delete(stateId);
  } else {
    expandedStates.add(stateId);
  }
  renderContinentNav();
}

export function toggleAllStatesSection(event) {
  if (event) event.stopPropagation();
  showAllStates = !showAllStates;
  renderContinentNav();
}

// Global window bindings
window.toggleContinentNavDropdown = toggleContinentNavDropdown;
window.closeContinentNavDropdown = closeContinentNavDropdown;
window.toggleContinentSection = toggleContinentSection;
window.toggleCountrySection = toggleCountrySection;
window.selectNavTarget = selectNavTarget;
window.filterContinentNav = filterContinentNav;

window.toggleStateSection = toggleStateSection;
window.toggleAllStatesSection = toggleAllStatesSection;
