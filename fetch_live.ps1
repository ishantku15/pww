$body = @{batchId='698ad3519549b300a5e1cc6a'} | ConvertTo-Json
$response = Invoke-RestMethod -Uri "https://pw.2snfjitu.workers.dev/api/pw/live" -Method Post -ContentType "application/json" -Body $body
$response | ConvertTo-Json -Depth 10 > live.json
