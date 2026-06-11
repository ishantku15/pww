$body = @{ batchId = "698ad3519549b300a5e1cc6a" } | ConvertTo-Json
try {
    $raw = Invoke-WebRequest -Uri "https://pw.2snfjitu.workers.dev/api/pw/live" -Method POST -Body $body -ContentType "application/json" -TimeoutSec 15
    $content = $raw.Content
    # Show first 500 chars
    Write-Host "RAW RESPONSE (first 500 chars):"
    Write-Host $content.Substring(0, [Math]::Min(500, $content.Length))
    Write-Host ""
    Write-Host "---"
    
    # Parse and check keys
    $json = $content | ConvertFrom-Json
    Write-Host "Top-level keys: $($json.PSObject.Properties.Name -join ', ')"
    Write-Host "success value: '$($json.success)' type: $($json.success.GetType().Name)"
    
    if ($json.data) {
        Write-Host "data is array: $($json.data -is [array])"
        Write-Host "data count: $($json.data.Count)"
        if ($json.data.Count -gt 0) {
            Write-Host "Item 0 keys: $($json.data[0].PSObject.Properties.Name -join ', ')"
            Write-Host "Item 0 topic: $($json.data[0].topic)"
            Write-Host "Item 0 date: $($json.data[0].date)"
            Write-Host "Item 0 status: $($json.data[0].status)"
            Write-Host "Item 0 tag: $($json.data[0].tag)"
        }
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)"
}
