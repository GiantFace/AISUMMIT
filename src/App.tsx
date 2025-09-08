import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const RAW = `Idő\tNyelv\tTerem\tTípus\tCím\tElőadó(k)\tPozíció / Szervezet
9:00\tHUN\tMBH BANK VISIONARY STAG\tKeynote\tAI Summit 2025 megnyitó\tDr. Sulyok Tamás\tMagyarország köztársasági elnöke
9:00\tHUN\tQUANTUM STAGE\tMegnyitó\tMegnyitó, köszöntő\tDr. Kóka János\tElnök – Doktor24
9:10\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tA versenyképesség kulcsa az innováció\tNagy Márton\tMagyarország nemzetgazdasági minisztere
9:10\tHUN\tQUANTUM STAGE\tKeynote\tEgészségügyi adatvagyon: stratégia, értékteremtés és biztonság\tDr. Szócska Miklós\tIgazgató – Semmelweis Egyetem
9:30\tHUN\tFUTURE LAB\tKeynote\tDigitális szuverenitás és AI: Szabályozás az unióban\tSzolnoki Szabolcs\tTechnológiáért, Űriparért és Védelmi Iparért felelős helyettes államtitkár
9:30\tHUN\tQUANTUM STAGE\tKerekasztal\tAI az egészségügyben: nemzeti stratégiák, szabályozás és innováció\tPetrovics Tamás\tÜgyvezető igazgató – XUND
9:30\tHUN\tCINEMATIC STUDIO\tKerekasztal\tRobot a sorok között: önvezető traktorok és döntéshozatal mesterséges intelligenciával\t\t
9:40\tENG\tMBH BANK VISIONARY STAG\tElőadás\tThe last human invention: AGI?\tDr. Frederik G. Pferdt (GER/USA)\tA Google első és korábbi innovációs nagykövete
9:50\tHUN/ENG\tFUTURE LAB\tElőadás\tGlobális AI szabályozási esetek\tDr. Olivia J. Erdelyi (NZL)\tProfessor – University of Canterbury & Bonn; Partner – PHI Institute; Auditor – SGS
10:00\tHUN\tMKIK PROMPT ARÉNA\tKeynote\tMegnyitó\tdr. Balog Ádám\tAlelnök – MKIK; Elnök – KAVOSZ
10:00\tHUN\tQUANTUM STAGE\tElőadás\tMentőszolgálat 2040 – Adat, döntés és hatékonyság az OMSZ jövőjében\tDr. Csató Gábor\tFőigazgató – Országos Mentőszolgálat
10:00\tHUN\tVIP LOUNGE\tPódiumbeszélgetés\tVigyázó szemetek Ázsiára vessétek!\tModerátor: Pogátsa Zoltán Résztvevő: Frei Tamás\tSoproni Egyetem LKK; Író
10:00\tHUN\tMEDIA LAB\tProgram\tVezetett házbejárás\t–\t–
10:05\tHUN\tMEDIA LAB\tProgram\tVezetett házbejárás\t–\t–
10:10\tENG\tMBH BANK VISIONARY STAG\tPódiumbeszélgetés\tGlobal AI ecosystem 2025 - challenges for the corporate and institutional sphere\tDr. Tilesch György (USA)\tAlapító elnök, PHI Institute for Augmented Intelligence
10:10\tHUN\tFUTURE LAB\tElőadás\tAI és jog: Szabályozási modellek és dilemmák\tdr. Vajda Viktor LL.M.\tAI-szakjogász, technológiaszabályozás vezető – Neumann János NKft.
10:10\tHUN\tCINEMATIC STUDIO\tKerekasztal\tA talaj is beszél a jövőről: AI a talajállapot és termőképesség előrejelzésében\t\t
10:15\tHUN\tQUANTUM STAGE\tKerekasztal\tMűtő a jövőből – AI-alapú robotika a sebészetben\tModerátor: Dr. Kóka János; Résztvevők: Dr. Berkes István, Dr. Domán István\tDoktor24; TF, SE; Ortopéd sebész
10:20\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tPromptolás kezdőknek: kezdőlépésektől az AI vállalkozásokig\tKerek István\tVezérigazgató – Everengine
10:30\tHUN\tFUTURE LAB\tKerekasztal\tAI-t szeretnék, de hogyan? – válaszol a Neumann Társaság\tModerátor: dr. Vajda Viktor LL.M. Résztvevők: Dr. Olivia J. Erdelyi (NZL), Petrányi Dóra\tNeumann János NKft.; University of Canterbury; CMS
10:40\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tAI-világ Magyarországon - térképen a jövő\tProf. Dr. Palkovics László\tMesterséges intelligenciáért felelős kormánybiztos
10:50\tHUN\tCINEMATIC STUDIO\tKerekasztal\tA jövő agrármérnöke – hogyan kell tanulnunk és tanítanunk, ha már AI van a traktorban?\t\t
10:55\tHUN\tQUANTUM STAGE\tElőadás\tAI a precíziós onkológiában\tDr. Peták István\tAlapító, tudományos igazgató – Genomate Health
11:00\tHUN\tMÉTA OPEN LAB\tKeynote\tEmber, gép, művészet – a jövő új nyelvei\tWeiler Péter\tKépzőművész
11:05\tHUN\tMEDIA LAB\tElőadás\tAI és a reklámfilm\tHidvégi Zoltán\tAlapító, vezérigazgató – Umbrella
11:10\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tAI for science, science for AI\tJakab Roland\tVezérigazgató, elnök – HUN-REN, MI Koalíció
11:10\tHUN\tFUTURE LAB\tKeynote\tMesterséges intelligenciával a korrupció ellen\tBenyovszky Máté\tTárselnök – Magyar Robotikai Szövetség; főszerkesztő – RoboHorizon
11:10\tHUN\tMÉTA OPEN LAB\tKeynote\tAI 2027: A jövő, ami már a küszöbön van\t-\t-
11:15\tHUN\tQUANTUM STAGE\tElőadás\tOperációs rendszer az egészségügyhöz – AI-vezérelt platform\tDr. Kóka János\tElnök – Doktor24
11:30\tHUN\tFUTURE LAB\tElőadás\tGlobális adatvédelem az AI korában\tDr. Kopasz János\tÜgyvéd, adatvédelmi és AI-szabályozási szakértő – Taylor Wessing Hungary
11:30\tENG\tMÉTA OPEN LAB\tKerekasztal\tAI 2027: A jövő, ami már a küszöbön van\tRami Al Karmi, Zoltan Istvan\tCEO – UMMA.AI; Jövőkutató, politikai jelölt
11:30\tHUN\tCINEMATIC STUDIO\tKerekasztal\tHol a határ? Klíma kihívások és etikus mesterséges intelligencia az agráriumban\t\t
11:35\tHUN\tQUANTUM STAGE\tElőadás\tAz orvos és a gép együttműködése az AI-val\tJoó Tamás\tEgyetemi docens, programvezető – SE EMK
11:50\tHUN\tFUTURE LAB\tElőadás\tMI vagyunk értetek! – az MI-koalíció működése\tTóth Miklós\tSzakmai vezető – Mesterséges Intelligencia Koalíció
11:50\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tAz AI-verseny rajtja: ki marad talpon a kkv-k közül?\tNémeth Dávid\tAlapító – 1337 Partners
11:55\t\tQUANTUM STAGE\tEbédszünet\tEBÉDSZÜNET\t-\t-
12:00\tENG\tMBH BANK VISIONARY STAG\tElőadás\tAI in business: csak viszi a pénzt vagy hozza is?\tKadocsa András\tPartner – McKinsey & Company
12:00\tHUN\tMÉTA OPEN LAB\tElőadás\tPoszthumanizmus és AI\tNemes Z. Márió\tKöltő, kritikus, esztéta
12:10\tHUN\tFUTURE LAB\tKerekasztal\tMagyar AI-fejlesztések: jó gyakorlatok, és tévutak\tModerátor: Rádi Balázs (Index) Résztvevők: Sólyom Balázs (Trendency), Tóth Miklós (MI Koalíció)\tújságíró; Chief Data Officer – Trendency Online Zrt.; MI Koalíció
12:20\tENG\tMBH BANK VISIONARY STAG\tElőadás\tThe New Workplace in the Agentic Age: A summary and practical guide\tDr. Schum Kristóf\tGenerative AI európai szegmens vezető – Amazon Web Services
12:25\tHUN\tMÉTA OPEN LAB\tKerekasztal\tPoszthumanizmus: a jövő, ahol az ember csak mellékszereplő?\tModerátor: Weiler Péter; Résztvevők: Csepeli György, drMáriás, Horváth Márk, Nemes Z. Márió\tELTE; Társadalomsebész; Filozófus; Esztéta
12:40\t\tMBH BANK VISIONARY STAG\tEbédszünet\t\t\t
12:50\tHUN\tFUTURE LAB\tPódiumbeszélgetés\tAlgoritmusok pórázon – önszabályozás a reklámiparban\tdr. Fazekas Ildikó (ÖRT), Lunczner Ádám (Mindshare)\tIgazgató – ÖRT; Innovációs vezető – Mindshare
12:50\t\tMKIK PROMPT ARÉNA\tEbédszünet\tEBÉDSZÜNET\t-\t-
13:00\tENG\tQUANTUM STAGE\tElőadás\tWhy the future of connection won’t be human-only\tBryony Cole (USA)\tAlapító – Future of Sex & Sextech School
13:05\tHUN\tMÉTA OPEN LAB\tKerekasztal\tA popkulturális.hu projekt és az AI eszközök\tModerátor: Weiler Péter; Résztvevők: Boncz Bálint, Koltai Balázs, Nyírő András\tTech Lead; Full-stack fejlesztő; Alapító – Index.hu
13:20\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tAz „új” CSR: competence-shortage az AI korában\tDr. Aczél Petra\tKommunikációkutató
13:20\tHUN\tFUTURE LAB\tSzünet\tEbédszünet\t-\t-
13:20\tHUN\tQUANTUM STAGE\tKeynote\tHogyan alakítja át a technológia az emberi kapcsolatainkat?\tTari Annamária\tKlinikai szakpszichológus, pszichoterapeuta
13:40\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tAdataink biztonsága az AI-forradalom árnyékában\tKeleti Arthur\tAlapító – ITBN
13:40\tHUN\tMKIK PROMPT ARÉNA\tKeynote\tBest practices a KKV szektorban\t-\t-
13:40\tHUN\tQUANTUM STAGE\tElőadás\tLongevity\tIfj. Duda Ernő\tCEO – Medipredict; Elnök – Magyar Biotechnológiai Szövetség
13:45\tHUN\tMÉTA OPEN LAB\tElőadás\tNéma előadás, művészeti szövegalkotás\tdr. Pálfalusi Zsolt\tFilozófus, esztéta, író
14:00\tENG\tMBH BANK VISIONARY STAG\tElőadás\tAz AI zabálja az energiát: gondold meg mielőtt emailt küldesz!\tGeorgiu Achilles\tInnováció menedzsment szakértő, előadó
14:00\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tFejlesztői sikersztorik a KKV szektorban\t-\t-
14:00\tHUN\tQUANTUM STAGE\tElőadás\tGenerációk és AI-használat\tBereczki Enikő\tGenerációkutató
14:20\tHUN\tMBH BANK VISIONARY STAG\tPódiumbeszélgetés\tMi történhet, ha az AI rossz kezekbe kerül? Dezinformációs hadviselés, AI-csalások\tHalász Viktor (NBI), Petruska Ferenc (NKE), Rudolf Ferenc (AIIS Kft.)\tFőnyomozó / Docens / AI & IT biztonsági vezető
14:20\tHUN\tQUANTUM STAGE\tKerekasztal\tAz új kolléga az AI, de hogyan bánjunk vele?\tModerátor: Kálmán Szonja; Résztvevők: Bereczki Enikő, Gáspár József\tDívány; Generációkutató; AI szakértő
14:30\tHUN\tFUTURE LAB\tKerekasztal\tAI for science, science for AI\tJakab Roland\tVezérigazgató, elnök – HUN-REN, MI Koalíció
14:30\tHUN\tMKIK PROMPT ARÉNA\tElőadás\tAI-vezérelt banki forradalom – a KKV-kért\tKovásznai Ádám\tBUPA üzletágvezető – MBH
14:40\tHUN\tMBH BANK VISIONARY STAG\tPódiumbeszélgetés\tMilyen új fenyegetéseket jelent az AI a kiberháborúkban\tKeleti Arthur (ITBN), Rónai Egon (újságíró)\t
14:50\tHUN\tFUTURE LAB\tElőadás\tKi, miben jó? – AI-kutatások Magyarországon 2025\tDr. Benedek Csaba\tIgazgatóhelyettes – HUN-REN SZTAKI
14:50\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tMesterségem az AI: feltörekvő tehetségek és innovátorok a hazai ökoszisztémában\tHorváth Balázs\tAlapító – Tech In The City
14:50\tHUN\tQUANTUM STAGE\tElőadás\tLevel Up Leadership & Soft Skills with AI & VR\tJenei Ágnes\tExecutive Trainer – VR, bio- és neurofeedback
15:00\tHUN\tMBH BANK VISIONARY STAG\tPódiumbeszélgetés\tFelgyorsítja, vagy teljesen újraírja a startupok életciklusát az AI?\tDeliága Ákos\tTársalapító, vezérigazgató – Talk-A-Bot
15:00\tHUN\tMEDIA LAB\tProgram\tVezetett házbejárás\t–\t–
15:05\tHUN\tQUANTUM STAGE\tKerekasztal\tKommunikáció az AI világában: honnan tudjam, hogy emberrel beszélek?\tModerátor: Kálmán Szonja; Résztvevők: Dr. Aczél Petra, dr. Molnár István Jenő, Tari Annamária\tDívány; Kommunikációkutató; Bűnmegelőzési szakértő; Pszichológus
15:05\tENG\tQUANTUM STAGE\tElőadás\tLights, Camera, Algorithm: The New Era of Film Production\tBrian Nitzkin (USA)\tVP Business Development – Orbitalvs
15:05\tHUN\tMEDIA LAB\tProgram\tVezetett házbejárás\t–\t–
15:10\tENG\tFUTURE LAB\tKerekasztal\tItt a szép, új no-code világ\tSzertics Gergely (PHI Institute), Dr. Tuan Trinh (EIT Digital)\tAI szakértő; Regionális igazgató – EIT Digital
15:10\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tAI eszközök implementációja a nagyvállalatoknál\t-\t-
15:20\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tBeszerzéstől a létesítmény kezelésig: interaktív vizualizáció az ingatlanszektorban\tSághegyi Péter\tÜgyvezető – AT-PT Kft.
15:25\tHUN\tQUANTUM STAGE\tElőadás\tMozivásznon túl: az AI hatása a filmkészítésre\tDudás Viktor\tFilmszakértő
15:30\tHUN\tFUTURE LAB\tElőadás\tHogyan segíthet a kozmosz megfejtésében az AI?\tDr. Kiss László\tFőigazgató – HUN-REN Csillagászati és Földtudományi Kutatóközpont
15:35\tENG\tMEDIA LAB\tElőadás\tAI és a reklámfilm\tHidvégi Zoltán\tAlapító, vezérigazgató – Umbrella
15:40\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tAI eszközök a banki siker szolgálatában\tNémeth Dániel\tGeneratív AI bevezetésének vezetője – MBH Bank
15:50\tHUN\tFUTURE LAB\tElőadás\tFizikus a feedben – tudomány a közösségi médiában\tMolnár Janka Sára\tFizikus, tudománykommunikátor
16:00\tHUN\tMBH BANK VISIONARY STAG\tElőadás / vita\tMeddig fújható az AI-lufi? Pénzügyi nyomás alatt a fejlesztők?\tModerátor: Szabó Gyula (Index), Előadó: Bukta Gábor (Concorde)\tÚjságíró / Elemzési üzletágvezető
16:10\tHUN\tFUTURE LAB\tElőadás\tKi a jobb tanár: a természetes vagy a mesterséges intelligencia?\tDr. Veszelszki Ágnes\tDékán – NKE Nemeskürty István Tanárképző Kar
16:10\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tAmikor az AI testet ölt\tBenyovszky Máté\tTárselnök – Magyar Robotikai Szövetség; Főszerkesztő – RoboHorizon
16:30\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tParadigmaváltás a gazdaságban: hol vannak a kompetens AI-szakértők?\tJanza Ákos\tÜgyvezető igazgató, AmCham Hungary
16:30\tHUN\tFUTURE LAB\tElőadás\tAI a szolgálatban – Közszolgálat a mesterséges intelligencia korában\tDr. Belényesi Emese\tEgyetemi docens – NKE
16:50\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tGeneratív AI és AI Agents: új szövetségesek a CFO-k és pénzügyi vezetők mellett\tSzekeres Viktor\tTulajdonos – Gloster Infokommunikációs Nyrt.
16:50\tHUN\tFUTURE LAB\tKerekasztal\tTiltás helyett felkészítés – Hogyan válhat az AI az oktatás szövetségesévé?\tDr. Almási Zsolt (PPKE), Dr. Nehéz Károly (ME), Dr. Osztroluczky Sarolta (PPKE)\tEgyetemi docens – PPKE; Intézetigazgató – ME; Adjunktus – PPKE BTK
16:55\tHUN\tMKIK PROMPT ARÉNA\tWorkshop\tMKIK digitalizációs projektek\t-\t-
17:10\tHUN\tMBH BANK VISIONARY STAG\tElőadás\tEmberközpontúság az AI korszakban? - sikeres projektek az MBH-nál\tNagy Róbert Tibor\tCTO – MBH Bank
17:40\tHUN\tMBH BANK VISIONARY STAG\tKerekasztal\tPénzintézeti tevékenység másként: hányféle üzlet hozható ki az adatokból?\t-\t-
18:10\tENG\tMBH BANK VISIONARY STAG\tElőadás\tTrust the Machine? AI as your financial copilot\tChristian Trummer (AT)\tChief Scientist – Bitpanda`;

  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState<string[]>([]);
  const [stageFilter, setStageFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [onlyUpcoming, setOnlyUpcoming] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-screen-sm mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex-1">
            <h1 className="text-lg font-semibold leading-tight">AI Summit 2025 – Program</h1>
            <p className="text-xs text-gray-500">Mobilbarát nézet • gyors szűrők • élő "Most" gomb</p>
          </div>
          <a
            href="#first"
            className="text-sm px-3 py-1.5 rounded-lg border bg-white"
            title="Ugrás a következő eseményre"
          >
            Most
          </a>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 pb-3">
          <div className="flex items-center gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Keresés címben, előadóban, szervezetben…"
              className="w-full rounded-xl border px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-2 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <FilterChip
              label={onlyUpcoming ? "Csak közelgő" : "Minden időpont"}
              active={onlyUpcoming}
              onClick={() => setOnlyUpcoming((v) => !v)}
            />
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
            <button
              onClick={() => {
                setLangFilter([]);
                setStageFilter([]);
                setTypeFilter([]);
                setSearch("");
              }}
              className="ml-auto text-xs text-gray-600 underline"
            >
              Szűrők törlése
            </button>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-2">
            <SelectMulti label="Terem" values={stageFilter} onChange={setStageFilter} options={stages} />
            <SelectMulti label="Típus" values={typeFilter} onChange={setTypeFilter} options={types} />
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 pb-24">
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-10">Nincs találat a beállított szűrőkre.</div>
        )}

        <ol className="space-y-3 pt-3">
          {filtered.map((i, idx) => (
            <li key={`${i.time}-${i.title}-${idx}`} id={idx === firstUpcomingIdx ? "first" : undefined}>
              <EventCard item={i} highlight={idx === firstUpcomingIdx} />
            </li>
          ))}
        </ol>
      </main>

      <footer className="fixed bottom-3 inset-x-0 flex justify-center pointer-events-none">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto shadow px-4 py-2 rounded-full border bg-white text-sm"
        >
          ⬆️ Vissza a tetejére
        </button>
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
