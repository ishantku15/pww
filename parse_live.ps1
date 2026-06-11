$json = Get-Content 'live.json' -Raw -Encoding Unicode
$data = $json | ConvertFrom-Json

# Show key fields for understanding status
Write-Host "=== STATUS ANALYSIS ==="
$data.data | ForEach-Object {
    $topic = $_.topic
    if ($topic.Length -gt 60) { $topic = $topic.Substring(0,60) + "..." }
    Write-Host "Topic: $topic"
    Write-Host "  status=$($_.status) | scheduleCode=$($_.scheduleCode) | tag=$($_.tag)"
    Write-Host "  date=$($_.date) | startTime=$($_.startTime)"
    Write-Host "  teachers=$($_.teachers -join ',')"
    Write-Host "  videoDetails.image=$($_.videoDetails.image)"
    Write-Host "---"
}
