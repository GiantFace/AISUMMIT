// Egyszerű API szerver az idő lekérdezéséhez
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Idő API endpoint
app.get('/api/time', (req, res) => {
  const timezone = req.query.timezone || 'Europe/Budapest';
  const now = new Date();
  
  try {
    // Időzóna szerinti formázás
    const localTime = now.toLocaleTimeString('hu-HU', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const localDate = now.toLocaleDateString('hu-HU', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    
    const dayOfWeek = now.toLocaleDateString('hu-HU', {
      timeZone: timezone,
      weekday: 'long'
    });
    
    // DST ellenőrzés
    const isDST = Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'short'
    }).formatToParts(now).find(part => part.type === 'timeZoneName')?.value?.includes('DT') || false;
    
    const response = {
      timestamp: Math.floor(now.getTime() / 1000),
      timezone: timezone,
      formatted_time: now.toISOString(),
      local_time: localTime,
      local_date: localDate,
      day_of_week: dayOfWeek,
      is_dst: isDST,
      utc_offset: now.getTimezoneOffset(),
      server_time: now.toISOString(),
      request_time: new Date().toISOString()
    };
    
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Invalid timezone' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🕐 Time API server running on http://localhost:${PORT}`);
  console.log(`📡 Endpoint: http://localhost:${PORT}/api/time`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
});
