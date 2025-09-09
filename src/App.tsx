import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function App() {
const RAW = `Idő	Nyelv	Terem	Típus	Cím	Előadó(k)	Pozíció / Szervezet
9:00	HUN	MBH BANK VISIONARY STAGE	Keynote	Algoritmusok a frontvonalon	Szalay-Bobrovniczky Kristóf	Honvédelmi miniszter
9:00	ENG	FUTURE LAB	Keynote	AI is moving at rocket speed, the NextGen in the pilot's seat - where are we?	Combiz Richard Abdolrahimi (USA)	ServiceNOW – VP, Global Gov Relations
9:00	HUN	QUANTUM STAGE	Keynote	AI Agent: új felhasználói élmény a kereskedelemben	–	–
9:00	ENG	MÉTA OPEN LAB	Keynote	Mesterségesintelligencia-fejlesztés a Bertelsmann-nál	Rhys Noelke (GER)	Chief Data Officer – Bertelsmann
9:20	HUN	MÉTA OPEN LAB	Keynote	Kódolt valóság: gondolkodunk vagy csak görgetünk?	Tófalvy Tamás	Médiakutató, kommunikációs szakember
9:30	HUN	MBH BANK VISIONARY STAGE	Előadás	„Míg az AI el nem választ”… a hatékonyság és kudarc útjai a honvédelemben	Dr. Németh Gergely	VIKI vezérigazgató
9:30	ENG	FUTURE LAB	Előadás	AI Governance as an enabler of innovation	Steven Tiell (USA)	SAS Institute – AI Governance Advisory
9:30	HUN	QUANTUM STAGE	Keynote	Mihez kezdjen ma egy magyar e-kereskedő?	Szigetvári József	Kockázati tőke partner – Portfolion Zrt.
9:40	HUN	QUANTUM STAGE	Előadás	Mire és hogyan használjuk az AI-t a Libri Bookline-nál? Felhasználási esetek és tanulságok	Deák András	Digitális csatornák igazgató – Libri-Bookline
9:50	HUN	MBH BANK VISIONARY STAGE	Előadás	VR és MR technológiák és AI alapú katonai megoldások	Kovács Gergely	VIKI XR-fejlesztések vezetője
9:50	ENG	FUTURE LAB	Előadás	AI snake oil - over promising vendors and unrealistic expectations	Jóföldi Endre	Precognox – CEO, alapító
10:00	HUN	MKIK PROMPT ARÉNA	Előadás	AI az ötlettől a vállalkozásig	Csókay Ákos	MKIK – főtitkár
10:00	HUN	ECONOMX LOUNGE	Program	Podcast interjúk	–	–
10:00	HUN	QUANTUM STAGE	Előadás	Az AI szerepe az azonnali házhozszállításban	–	–
10:00	HUN	CINEMATIC STUDIO	Keynote	Művészet az algoritmusok korában	Weiler Péter	képzőművész
10:00	HUN	MEDIA LAB	Workshop	Vezetett házbejárás + előadás	–	–
10:10	HUN	MBH BANK VISIONARY STAGE	Előadás	AI a hadviselésben és digitális harctér	–	–
10:10	HUN	MKIK PROMPT ARÉNA	Workshop	Promptolás kezdőknek: kezdőlépésektől az AI vállalkozásokig	Kerek István	Everengine – vezérigazgató
10:10	HUN	MÉTA OPEN LAB	Kerekasztal	Hírgyártás: kitörhetünk-e az algoritmusok alkotta buborékból?	Kovács Tibor, Starcz Ákos	Ringier Hungary / Index.hu, Libri-Bookline
10:30	HUN	MBH BANK VISIONARY STAGE	Kerekasztal	A mesterséges intelligencia biztonságpolitikai kérdései	Bendarzsevszkij Anton, Dr. Somkuti Bálint	Oeconomus, MCC
10:30	HUN	FUTURE LAB	Előadás	AI + emberi intelligencia = új vállalati logika?	Pintér Róbert	Corvinus Egyetem – egyetemi docens
10:30	HUN	QUANTUM STAGE	Előadás	Az influenszerek szerepe a socialben	Filó Angéla Katalin	Alapító – Marketing Mentor AI
10:30	HUN	CINEMATIC STUDIO	Kerekasztal	Művészet és AI: inspiráció vagy imitáció?	Schneider Ákos, Szentpéteri Márton, Török Krisztián Gábor	MOME / MOME / MODEM
10:35	HUN	MÉTA OPEN LAB	Kerekasztal	Láthatatlan olvasók, látható hatás – Hogyan befolyásolja az MI a médiafogyasztást?	Bíró Pál, Csizmadia Ádám, Ziegler Gábor	Google / OBSERVER / Indamedia
10:50	HUN	FUTURE LAB	Előadás	Az AI-t alkalmazni nem kell félnetek jó lesz — Észlelési torzítások és vezetői kihívások	Dr. Drótos György	Corvinus – vezetéstudományi intézet docens
11:00	HUN	MBH BANK VISIONARY STAGE	Előadás	Technológia trendek az európai védelmi iparban	dr. Fellegi Áron	HypeX Consulting Zrt.
11:00	HUN	QUANTUM STAGE	Előadás	Az AI alapú ügyfélszolgálat és chatbotok újításai	Szilágyi Márk	Country Manager – Daktela Magyarország
11:00	HUN	MÉTA OPEN LAB	Előadás	Politikai kommunikáció és AI	Petneházy Dávid	Ügyvezető – Promotheus Agency
11:10	HUN	FUTURE LAB	Előadás	Tech-reneszánsz 2025 – Az AI által újragondolt mobil, touch és VR alkalmazások jövője	Budaházy Szabolcs	AR Works – ügyvezető igazgató
11:10	HUN	CINEMATIC STUDIO	Bemutató	Studio visit – AI művészet rapid tárlata	Kőszeghy Flóra DLA	építész, képzőművész
11:20	HUN	MBH BANK VISIONARY STAGE	Kerekasztal	AI a védelmiiparban	dr. Fellegi Áron, Majdik András, Póser Zoltán	HypeX, HUN-REN SZTAKI, N7 Holding
11:20	HUN	CINEMATIC STUDIO	Bemutató	Studio visit – AI művészet rapid tárlata	Dajana Krueger	művész
11:25	–	QUANTUM STAGE	Szünet	EBÉDSZÜNET	–	–
11:30	HUN	FUTURE LAB	Előadás	Kód, bátorság, kreativitás – Magyarország és Közép-Európa nagy AI lehetősége	Zulik Ákos	MCC – vezető oktató
11:30	HUN	MÉTA OPEN LAB	Kerekasztal	Ki beszél a szavazóhoz? Én vagy az avatárom? Politikai kommunikáció és AI	–	–
11:40	HUN	MKIK PROMPT ARÉNA	Workshop	AI haladóknak: folyamatautomatizáció a gyakorlatban	Németh Dávid	1337 Partners – alapító
11:50	HUN	FUTURE LAB	Kerekasztal	Techrobbanás és a startupok életciklusa	Oszkó Péter	OXO Technologies Holding – alapító, vezérigazgató
11:50	HUN	CINEMATIC STUDIO	Kerekasztal	Pixelek háborúja – Győzelmet arathatnak a valódi képek a generált tartalom felett?	Moderátor: Weiler Péter, Résztvevők: Persely Tamás, Pilák János	feat. / Getty Images
12:00	HUN	MBH BANK VISIONARY STAGE	Előadás	Az űrszektor, mint az innováció motorja	Dr. Ferencz Orsolya	Miniszteri biztos, KKM
12:00	–	MÉTA OPEN LAB	Szünet	EBÉDSZÜNET	–	–
12:15	ENG	QUANTUM STAGE	Előadás	Data-Driven AI: The Essential Roadmap for Legacy Businesses	Kevin Oh (Dél-Korea)	Társalapító & CEO – Synthya Inc.
12:20	HUN	MBH BANK VISIONARY STAGE	Előadás	AI az űriparban és autonóm küldetések	–	–
12:20	HUN	FUTURE LAB	Előadás	A vállalati működés átformálása AI segítségével	Rakó Ágnes	KPMG – partner
12:40	HUN	MBH BANK VISIONARY STAGE	Előadás	Egy úr az űrből – Farkas Bertalantól Kapu Tiborig	–	–
12:40	HUN	FUTURE LAB	Előadás	NKFI Hivatal hogyan finanszírozza az AI fókuszú megoldásokat	Racskó Péter	NKFIH – főosztályvezető
12:40	HUN	MKIK PROMPT ARÉNA	Workshop	Tengri.ai – amikor már startupot indítunk az AI segítségével	W. Szabó Péter	tengr.ai – alapító-tulajdonos
12:40	HUN	QUANTUM STAGE	Kerekasztal	Gen Z vásárlók elvárásai	Trunk Tamás	Z generációs szakértő, blogger
12:50	HUN	MÉTA OPEN LAB	Keynote	AI vezérelt Google keresés	–	–
12:55	HUN	MBH BANK VISIONARY STAGE	Előadás	A Vénusz radarjeleitől a valós idejű felismerésig – Nyílt forráskódú MI a bolygókutatásban	Somogyi Viktor	ML fejlesztő, kutató
13:10	HUN	CINEMATIC STUDIO	Kerekasztal	Dal vagy adat? – Zene a mesterséges intelligencia korában	Lobenwein Norbert	WEEKEND Event Kft. / Akvárium Klub
13:20	HUN	MBH BANK VISIONARY STAGE	Előadás	Az „EU Space Law” rendelet lehetséges hatásai az európai űrszektorra	Dr. Bartóki-Gönczy Balázs	NKE tanszékvezető
13:20	HUN	MÉTA OPEN LAB	Kerekasztal	MAKSZ – AI Guideline bemutatása, szakmai vitája	–	–
13:50	HUN	MKIK PROMPT ARÉNA	Keynote	Milyen innovációt finanszíroz egy bank?	–	–
13:50	HUN	CINEMATIC STUDIO	Kerekasztal	Hogyan alkalmazható az AI, fotós szemmel	Demeter Vanda, Dr. Gőbölyös Luca, Simó György	Fotóművész / Egyetemi docens / Day One Capital
13:55	HUN	MBH BANK VISIONARY STAGE	–	EBÉDSZÜNET	–	–
14:00	–	FUTURE LAB	–	EBÉDSZÜNET	–	–
14:00	HUN	MÉTA OPEN LAB	Keynote	Túl sok az AI és túl alacsony a kerítés – Ki írja a szabályokat?	Márton Szabolcs	BDPST – kreatívigazgató
14:10	ENG	MKIK PROMPT ARÉNA	Workshop	AI for Hungarian SMEs: Work Smarter, Not Harder, Globally	Veenenberg Remco (NED)	Think Fintech – startup tanácsadó, társalapító
14:10	HUN	MÉTA OPEN LAB	Kerekasztal	Az adat, mint kreatív iránytű – AI a kampánytervezésben	Moderátor: Márton Szabolcs	Résztvevők: Alberti Rita (Republic), Jedlicska Márton (Publicis), Radovics Péter (Lounge)
14:20	HUN	FUTURE LAB	Előadás	MI és fenntarthatóság: Oxigénhiány a csúcs felé vezető úton	Kapornaki Mihály	Trendency Online – data scientist
14:20	HUN	CINEMATIC STUDIO	Bemutató	Studio visit – AI művészet rapid tárlata	Dr. Gőbölyös Luca	fotóművész, egyetemi docens
14:30	HUN	MKIK PROMPT ARÉNA	Előadás	Plug&Play – Szabályozás kompatibilis instant ügyfélszolgálat/chatbot	Dr. Pintér Szabolcs	UpScale – partner-ügyvezető
14:40	HUN	MBH BANK VISIONARY STAGE	Előadás	Minden nap egy lépés a digitális jövő felé	Jeránek Tamás	Siemens Zrt. vezérigazgató
14:40	HUN	MÉTA OPEN LAB	Kerekasztal	PR vs. Prompt: Ki írja a történetet?	Moderátor: Zámbó Anna	Résztvevők: Bodó Teodóra (Bosch), Bánhegyi Zsófia (MMSZ), Sztaniszláv András (MPRSZ)
14:40	HUN	CINEMATIC STUDIO	Előadás	Megeszi-e az AI Hollywood-ot? Történetek a tengerentúlról	–	–
15:00	HUN	MBH BANK VISIONARY STAGE	Előadás	Black factories	Kiss-György Máté	Asura Technologies vezérigazgató
15:00	ENG	FUTURE LAB	Kerekasztal	Mit tanít az egyetem, amit nem tud az AI?	Bruno van Pottelsberghe, Dr. Charaf Hassan, Prof. Dr. Kovács Levente	Corvinus, BME, Óbudai Egyetem – rektorok
15:05	HUN	CINEMATIC STUDIO	Előadás	AI a vásznon – A filmipari forradalom és a reklámfilmek jövője	Balika Gergő, Kondacs András	Mid Atlantic Films / Animatiqua
15:10	ENG	MKIK PROMPT ARÉNA	Előadás	Adatplatformok mint az új idegrendszer: hogyan alakítja át a vállalatokat az MI és a platformizáció	Gulyás Máté	Datapao – CEO
15:10	ENG	MÉTA OPEN LAB	Előadás	Your Next Favorite Ad Wasn’t Shot — It Was Generated	Carlos Ramas Santamaria (ES)	AI filmrendező, MOME Open oktató
15:20	HUN	MBH BANK VISIONARY STAGE	Előadás	0-tól AI-ig: ügyfélszolgálat újratöltve	Cseszneki Balázs	SBC Group CEO
15:20	HUN	FUTURE LAB	Előadás	AI kutatások a műszaki egyetemen	Prof. Dr. Levendovszky János	BME – kutatási és innovációs rektorhelyettes
15:30	HUN	MKIK PROMPT ARÉNA	Előadás	A kollégám egy AI	–	–
15:30	HUN	MÉTA OPEN LAB	Előadás	Nemlétező példaképek – Influenszerek a marketingpiacon	Csiszár Gergő	CEO – PFR Group
15:40	HUN	MBH BANK VISIONARY STAGE	Előadás	Az AI integrációja vállalati projektekben	Dalos-Kovács Gabriella	AI officer, 4IG Group
15:50	HUN	MÉTA OPEN LAB	Kerekasztal	Miben segít az AI? – Az első AI alapú ügynökség születése	Moderátor: Márton Szabolcs	Résztvevők: Kőteleky Aywee, Vértessy Flóra (BOOM – THE AiGENCY)
16:00	HUN	VIP LOUNGE	Pódiumbeszélgetés	Valóság, fikció, mesterséges képzelet – Deák Kristóf beszélget Weiler Péterrel	Moderátor: Weiler Péter Résztvevő: Deák Kristóf	képzőművész / Oscar-díjas filmrendező
16:10	HUN	FUTURE LAB	Pódiumbeszélgetés	Így képezzük az AI mestereket – a hazai egyetemek nagy vállalkozása	Dr. Eigner György, Kozsik Tamás	ÓE dékán; ELTE docens, dékán
16:40	HUN	MBH BANK VISIONARY STAGE	Előadás	Nőnek-e a fák az AI árnyékában?	Princz Ágoston	Kreatív producer, aktivista
16:40	HUN	MÉTA OPEN LAB	Kerekasztal	MI és a hálózat mögött: Hogyan formálja az MI az infrastruktúrát?	Moldván Ákos	Head of Marketing Communications – ONE
16:50	HUN	FUTURE LAB	Előadás	Mit tanítsunk az AI nemzedéknek?	Dr. Setényi János	MCC Tanuláskutató Intézet – igazgató
17:00	HUN	MBH BANK VISIONARY STAGE	Előadás	Az AI szerepe az autonóm ipari robotikában	Tipary Bence	HUN-REN SZTAKI tudományos munkatársa
17:00	HUN	MKIK PROMPT ARÉNA	Workshop	MKIK digitalizációs projektek	–	–
17:10	HUN	FUTURE LAB	Előadás	Az AI ismerete ma előny! Holnap hátrány, ha nem használod!	Dr. Dietz Ferenc	Gábor Dénes Egyetem – elnök
17:10	HUN	MÉTA OPEN LAB	Kerekasztal	Mesterségesen is intelligens vezetők – Hogyan vezessünk AI-val?	Moderátor: Bánhegyi Zsófia	Résztvevők: Horváth Rita (Publicis), Pajor Attila (WPP Media), Szabó Edina (OMG), Tallósy Imre (MAGNA)
17:20	HUN	MBH BANK VISIONARY STAGE	Kerekasztal	AI kihívások és megoldások az iparban	Nacsa János és mások	HUN-REN SZTAKI – kutatócsoport
17:50	HUN	FUTURE LAB	Előadás	A kolostor és az űrhajó. Hová (ne) engedjük be a chatbotokat az egyetemen	Ződi Zsolt	NKE – tudományos főmunkatárs
`;

  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState<string[]>([]);
  const [stageFilter, setStageFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [onlyUpcoming, setOnlyUpcoming] = useState(false);
  
  // Időzóna és valós idejű óra
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState('Europe/Budapest');
  const [isRefreshingTime, setIsRefreshingTime] = useState(false);
  
  // Hamburger menü állapot
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type Item = {
    time: string;
    minutes: number;
    lang: string;
    stage: string;
    type: string;
    title: string;
    speakers?: string;
    org?: string;
    raw?: string;
  };

  function parse(text: string): Item[] {
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    const data = lines.slice(1);
    const items: Item[] = [];

    for (const line of data) {
      const parts = line.split(/\t+| {2,}/g);
      while (parts.length < 7) parts.push("");
      const [time, lang, stage, type, title, speakers, org] = parts;
      const minutes = toMinutes(time);
      items.push({
        time,
        minutes,
        lang: (lang || "").toUpperCase(),
        stage: stage || "",
        type: type || "",
        title: title || "",
        speakers: speakers || undefined,
        org: org || undefined,
        raw: line,
      });
    }
    items.sort((a, b) => a.minutes - b.minutes);
    return items;
  }

  function toMinutes(t: string): number {
    const m = t.match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return 24 * 60 + 1;
    const h = parseInt(m[1], 10);
    const mi = parseInt(m[2], 10);
    return h * 60 + mi;
  }

  const items = useMemo(() => parse(RAW), [RAW]);

  // Idő frissítése minden másodpercben (valós idejű)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1 másodperc = 1000 ms

    return () => clearInterval(timer);
  }, []);

  // Időzóna automatikus észlelése
  useEffect(() => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(detectedTimezone);
  }, []);

  const languages = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .map((i) => i.lang)
            .flatMap((l) => (l.includes("/") ? l.split("/") : [l]))
            .filter((l) => l && l.trim())
            .map((l) => l.trim().toUpperCase())
        )
      ).sort(),
    [items]
  );

  const stages = useMemo(
    () => Array.from(new Set(items.map((i) => i.stage))).filter(Boolean).sort(),
    [items]
  );
  const types = useMemo(
    () => Array.from(new Set(items.map((i) => i.type))).filter(Boolean).sort(),
    [items]
  );

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const filtered = useMemo(() => {
    return items.filter((i) => {
      if (onlyUpcoming && i.minutes + 1 < nowMinutes) return false;

      if (langFilter.length) {
        const langs = i.lang.includes("/")
          ? i.lang.split("/").map((x) => x.trim().toUpperCase())
          : [i.lang];
        if (!langs.some((l) => langFilter.includes(l))) return false;
      }
      if (stageFilter.length && !stageFilter.includes(i.stage)) return false;
      if (typeFilter.length && !typeFilter.includes(i.type)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const hay = `${i.title} ${i.speakers ?? ""} ${i.org ?? ""} ${i.stage} ${i.type}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, langFilter, stageFilter, typeFilter, search, onlyUpcoming, nowMinutes]);

  const firstUpcomingIdx = filtered.findIndex((i) => i.minutes >= nowMinutes);

  // Idő frissítése API-ból
  const handleRefreshTime = useCallback(async () => {
    setIsRefreshingTime(true);
    try {
      const endpoints = [
        `/api/time?timezone=${timezone}`, // Our Vite plugin endpoint
        'https://worldtimeapi.org/api/timezone/' + timezone,
        'https://timeapi.io/api/Time/current/zone?timeZone=' + timezone
      ];

      let success = false;
      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint);
          if (response.ok) {
            const timeData = await response.json();
            if (timeData.formatted_time || timeData.datetime) {
              setCurrentTime(new Date(timeData.formatted_time || timeData.datetime));
              success = true;
              break;
            }
          }
        } catch (e) {
          continue;
        }
      }

      if (!success) {
        setCurrentTime(new Date()); // Fallback to local time
      }
    } catch (error) {
      setCurrentTime(new Date()); // Fallback to local time
    } finally {
      setIsRefreshingTime(false);
    }
  }, [timezone]);

  // Időzóna változtatása
  const handleTimezoneChange = useCallback((newTimezone: string) => {
    setTimezone(newTimezone);
  }, []);

  // Elérhető időzónák
  const availableTimezones = useMemo(() => [
    'Europe/Budapest',
    'Europe/London',
    'Europe/Berlin',
    'Europe/Paris',
    'America/New_York',
    'America/Los_Angeles',
    'Asia/Tokyo',
    'UTC'
  ], []);

  // Menü bezárása
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Szűrők törlése
  const clearAllFilters = useCallback(() => {
    setLangFilter([]);
    setStageFilter([]);
    setTypeFilter([]);
    setSearch("");
    setOnlyUpcoming(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-screen-sm mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-lg border bg-white hover:bg-gray-50"
            aria-label="Szűrők menü megnyitása"
          >
            ☰
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold leading-tight">AI Summit 2025 – Program</h1>
            <p className="text-xs text-gray-500">Mobilbarát nézet • gyors szűrők • élő "Most" gomb</p>
            <p className="text-xs text-gray-400">Események: {items.length} • Szűrt: {filtered.length}</p>
            <div className="mt-1 text-xs text-gray-600 flex items-center gap-2">
              <span className="font-medium">Aktuális idő:</span>
              <span>{currentTime.toLocaleTimeString('hu-HU', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}</span>
              <span className="text-gray-500">({timezone})</span>
              <button
                onClick={handleRefreshTime}
                disabled={isRefreshingTime}
                className={`text-blue-600 hover:text-blue-800 underline ${isRefreshingTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Idő frissítése"
                aria-label="Idő frissítése"
              >
                {isRefreshingTime ? '⏳' : '🔄'}
              </button>
            </div>
          </div>
          <a
            href="#first"
            className="text-sm px-3 py-1.5 rounded-lg border bg-white"
            title="Ugrás a következő eseményre"
          >
            Most
          </a>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 pb-24">
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            Nincs találat a beállított szűrőkre.
            <br />
            <span className="text-xs">Összes esemény: {items.length}</span>
          </div>
        )}

        <ol className="space-y-3 pt-3">
          {filtered.map((i, idx) => (
            <li key={`${i.time}-${i.title}-${idx}`} id={idx === firstUpcomingIdx ? "first" : undefined}>
              <EventCard item={i} highlight={idx === firstUpcomingIdx} />
            </li>
          ))}
        </ol>
      </main>

      {/* Oldalsó szűrő menü */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Háttér overlay */}
          <div 
            className="flex-1 bg-black bg-opacity-50" 
            onClick={closeMenu}
          />
          
          {/* Menü panel */}
          <div className="w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Szűrők</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  aria-label="Menü bezárása"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              {/* Keresés */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keresés
                </label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Címben, előadóban, szervezetben…"
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>

              {/* Időpont szűrő */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Időpont
                </label>
                <FilterChip
                  label={onlyUpcoming ? "Csak közelgő" : "Minden időpont"}
                  active={onlyUpcoming}
                  onClick={() => setOnlyUpcoming((v) => !v)}
                />
              </div>

              {/* Nyelv szűrők */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nyelv
                </label>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <FilterChip
                      key={l}
                      label={l}
                      active={langFilter.includes(l)}
                      onClick={() =>
                        setLangFilter((prev) => (prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]))
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Terem szűrő */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Terem
                </label>
                <div className="flex flex-wrap gap-2">
                  {stages.map((stage) => (
                    <FilterChip
                      key={stage}
                      label={stage}
                      active={stageFilter.includes(stage)}
                      onClick={() =>
                        setStageFilter((prev) => (prev.includes(stage) ? prev.filter((x) => x !== stage) : [...prev, stage]))
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Típus szűrő */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Típus
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <FilterChip
                      key={type}
                      label={type}
                      active={typeFilter.includes(type)}
                      onClick={() =>
                        setTypeFilter((prev) => (prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]))
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Időzóna */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Időzóna
                </label>
                <select
                  value={timezone}
                  onChange={(e) => handleTimezoneChange(e.target.value)}
                  className="w-full text-sm border rounded-lg px-3 py-2 bg-white"
                  aria-label="Időzóna választása"
                >
                  {availableTimezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz.replace('_', ' ')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Szűrők törlése */}
              <div className="pt-4 border-t">
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
                >
                  Szűrők törlése
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-3 inset-x-0 flex justify-center pointer-events-none">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto shadow px-4 py-2 rounded-full border bg-white text-sm"
            aria-label="Vissza a tetejére"
          >
            ⬆️ Vissza a tetejére
          </button>
          <div className="pointer-events-auto shadow px-3 py-2 rounded-full border bg-white text-xs text-gray-600">
            🕐 {currentTime.toLocaleTimeString('hu-HU', {
              timeZone: timezone,
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

function EventCard({ item, highlight }: { item: any; highlight?: boolean }) {
  const { time, lang, stage, type, title, speakers, org } = item;
  const langBadges = (lang || "").split("/").map((l: string) => l.trim()).filter(Boolean);

  return (
    <article className={`rounded-2xl border bg-white p-3 shadow-sm ${highlight ? "ring-2 ring-emerald-500" : ""}`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 text-center">
          <div className="text-lg font-bold tabular-nums leading-none">{time || "–"}</div>
          <div className="text-[10px] text-gray-500">CET</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            {langBadges.map((l: string) => (
              <Badge key={l} className="border-gray-300 bg-gray-50">
                {l}
              </Badge>
            ))}
            {stage && <Badge className="border-indigo-300 bg-indigo-50">{stage}</Badge>}
            {type && <Badge className="border-emerald-300 bg-emerald-50">{type}</Badge>}
          </div>
          <h3 className="mt-1 text-base font-semibold leading-snug break-words">{title}</h3>
          {(speakers || org) && (
            <p className="mt-1 text-sm text-gray-700 break-words">
              {speakers && <span className="font-medium">{speakers}</span>}
              {speakers && org ? " – " : ""}
              {org}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function SelectMulti({
  label,
  values,
  onChange,
  options,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggle = (val: string) => {
    onChange(values.includes(val) ? values.filter((v) => v !== val) : [...values, val]);
  };

  return (
    <div className="relative" ref={ref}>
      <button className="w-full text-left border rounded-xl px-3 py-2 bg-white" onClick={() => setOpen((v) => !v)}>
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <span className="font-medium">{label}:</span>{" "}
            {values.length ? <span className="text-gray-700">{values.join(", ")}</span> : <span className="text-gray-400">Nincs kiválasztva</span>}
          </span>
          <span className="text-xs">{open ? "▲" : "▼"}</span>
        </div>
      </button>
      {open && (
        <div className="absolute z-40 mt-1 max-h-72 w-full overflow-auto rounded-xl border bg-white shadow">
          <div className="p-2 flex flex-wrap gap-2">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => toggle(opt)}
                className={`px-3 py-1 rounded-full text-sm border ${
                  values.includes(opt) ? "bg-black text-white border-black" : "bg-white text-gray-900 border-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>
      {children}
    </span>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border ${
        active ? "bg-black text-white border-black" : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
