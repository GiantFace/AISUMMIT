// Valós idejű idő API endpoint
export default function handler(req, res) {
  const now = new Date();
  const timezone = req.query.timezone || 'Europe/Budapest';
  
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
    server_time: now.toISOString()
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.status(200).json(response);
}
