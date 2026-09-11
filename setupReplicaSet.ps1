# PowerShell script to configure MongoDB Windows Service with Replica Set rs0
$ErrorActionPreference = "Stop"

$cfgPath = "C:\Program Files\MongoDB\Server\8.2\bin\mongod.cfg"

Write-Host "Checking $cfgPath..."
if (Test-Path $cfgPath) {
    $content = Get-Content $cfgPath -Raw
    if ($content -match "replSetName:\s*rs0") {
        Write-Host "Replica set rs0 is already configured in mongod.cfg."
    } else {
        Write-Host "Configuring replication in mongod.cfg..."
        if ($content -match "#replication:") {
            $newContent = $content -replace "#replication:", "replication:`r`n  replSetName: rs0"
        } else {
            $newContent = $content + "`r`nreplication:`r`n  replSetName: rs0`r`n"
        }
        Set-Content -Path $cfgPath -Value $newContent -Encoding UTF8
        Write-Host "mongod.cfg updated successfully."
    }
} else {
    Write-Warning "Could not find $cfgPath."
}

Write-Host "Restarting MongoDB service..."
try {
    Restart-Service -Name MongoDB -Force
    Write-Host "MongoDB service restarted successfully."
} catch {
    Write-Host "Could not restart service automatically (may need Admin privileges): $($_.Exception.Message)"
}
