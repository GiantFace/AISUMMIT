// Vite plugin a dinamikus idő API generálásához
export function timeApiPlugin() {
  return {
    name: 'time-api',
    configureServer(server) {
      server.middlewares.use('/api/time', (req, res, next) => {
        const timezone = req.url.split('?')[1]?.split('=')[1] || 'Europe/Budapest';
        const now = new Date();
        
        try {
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
          
          const response = {
            timestamp: Math.floor(now.getTime() / 1000),
            timezone: timezone,
            formatted_time: now.toISOString(),
            local_time: localTime,
            local_date: localDate,
            day_of_week: dayOfWeek,
            is_dst: false, // Egyszerűsített DST ellenőrzés
            utc_offset: now.getTimezoneOffset(),
            server_time: now.toISOString()
          };
          
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
          
          res.end(JSON.stringify(response));
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Invalid timezone' }));
        }
      });
    }
  };
}
