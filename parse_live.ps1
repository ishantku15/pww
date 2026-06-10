$json = Get-Content 'live.json' -Raw -Encoding Unicode
$data = $json | ConvertFrom-Json
$data.data[0..2] | ConvertTo-Json -Depth 5
