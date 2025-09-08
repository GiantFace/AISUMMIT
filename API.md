# 🕐 AI Summit 2025 - Idő API Dokumentáció

## API Endpoint-ok

### 1. Valós idejű idő lekérdezés
```
GET /api/time?timezone={timezone}
```

**Paraméterek:**
- `timezone` (opcionális): Időzóna (pl. `Europe/Budapest`, `America/New_York`)

**Válasz példa:**
```json
{
  "timestamp": 1757310451,
  "timezone": "Europe/Budapest",
  "formatted_time": "2025-09-08T05:47:31.213Z",
  "local_time": "07:47:31",
  "local_date": "2025. 09. 08.",
  "day_of_week": "hétfő",
  "is_dst": false,
  "utc_offset": -120,
  "server_time": "2025-09-08T05:47:31.213Z"
}
```

### 2. Támogatott időzónák

- `Europe/Budapest` - Magyar idő
- `Europe/London` - Angol idő
- `Europe/Berlin` - Német idő
- `America/New_York` - New York idő
- `Asia/Tokyo` - Japán idő
- `UTC` - UTC idő

### 3. Használat példák

#### JavaScript/React
```javascript
const fetchTime = async (timezone = 'Europe/Budapest') => {
  try {
    const response = await fetch(`/api/time?timezone=${timezone}`);
    const timeData = await response.json();
    console.log('Aktuális idő:', timeData.local_time);
    return timeData;
  } catch (error) {
    console.error('Hiba az idő lekérdezésénél:', error);
  }
};
```

#### cURL
```bash
# Magyar idő
curl "http://localhost:3000/api/time?timezone=Europe/Budapest"

# New York idő
curl "http://localhost:3000/api/time?timezone=America/New_York"

# Tokyo idő
curl "http://localhost:3000/api/time?timezone=Asia/Tokyo"
```

## Fejlesztői környezet

### Szerver indítása
```bash
npm run dev
```

### API tesztelése
```bash
# Health check
curl http://localhost:3000/api/time

# Időzóna szerinti lekérdezés
curl "http://localhost:3000/api/time?timezone=Europe/Budapest"
```

## Funkciók

- ✅ Valós idejű idő lekérdezés
- ✅ Több időzóna támogatás
- ✅ Magyar nyelvű formázás
- ✅ DST (nyári időszámítás) kezelés
- ✅ UTC offset információ
- ✅ Hibakezelés és fallback
- ✅ Cache-Control headers (no-cache)

## Technikai részletek

- **Backend**: Vite plugin middleware
- **Frontend**: React hooks (useState, useEffect, useCallback)
- **Időzóna kezelés**: Intl.DateTimeFormat API
- **Formázás**: Magyar nyelvű (hu-HU) locale
- **Frissítés**: 1 másodperces intervallum
