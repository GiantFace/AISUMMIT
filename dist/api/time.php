<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

$timezone = $_GET['timezone'] ?? 'Europe/Budapest';
$now = new DateTime('now', new DateTimeZone($timezone));

$response = [
    'timestamp' => time(),
    'timezone' => $timezone,
    'formatted_time' => $now->format('c'),
    'local_time' => $now->format('H:i:s'),
    'local_date' => $now->format('Y-m-d'),
    'day_of_week' => $now->format('l'),
    'is_dst' => $now->format('I') == '1',
    'utc_offset' => $now->getOffset(),
    'server_time' => gmdate('c')
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>
