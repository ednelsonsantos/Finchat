# generate-keystore.ps1
# Gera o keystore de assinatura do FinChat e cria keystore.properties
# Uso: powershell -ExecutionPolicy Bypass -File generate-keystore.ps1
# Requer Java (keytool) instalado e no PATH.

param(
    [string]$KeystoreDir  = "$PSScriptRoot\android",
    [string]$KeystoreFile = "finchat-release.jks",
    [string]$KeyAlias     = "finchat",
    [string]$Validity     = "10000"          # dias (~27 anos)
)

$jksPath = Join-Path $KeystoreDir $KeystoreFile
$propsPath = Join-Path $KeystoreDir "keystore.properties"

Write-Host ""
Write-Host "=== Gerador de Keystore FinChat ===" -ForegroundColor Cyan
Write-Host ""

if (Test-Path $jksPath) {
    Write-Host "AVISO: Keystore ja existe em $jksPath" -ForegroundColor Yellow
    $resp = Read-Host "Deseja sobrescrever? (s/N)"
    if ($resp -ne 's' -and $resp -ne 'S') { Write-Host "Cancelado."; exit 0 }
}

Write-Host "Preencha as informacoes do certificado:" -ForegroundColor Green
$storePass = Read-Host "Senha do keystore (min 6 chars)"
$keyPass   = Read-Host "Senha da chave    (min 6 chars, pode ser igual)"
$dname     = Read-Host "Nome completo do desenvolvedor (ex: Ednelson Santos)"
$org       = Read-Host "Organizacao (ex: FinChat ou seu nome)"
$city      = Read-Host "Cidade"
$country   = Read-Host "Pais (2 letras, ex: BR)"

$dnameFull = "CN=$dname, OU=$org, O=$org, L=$city, C=$country"

Write-Host ""
Write-Host "Gerando keystore em: $jksPath" -ForegroundColor Cyan

keytool -genkeypair `
    -keystore "$jksPath" `
    -alias    "$KeyAlias" `
    -keyalg   RSA `
    -keysize  2048 `
    -validity "$Validity" `
    -storepass "$storePass" `
    -keypass   "$keyPass" `
    -dname     "$dnameFull"

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO ao gerar keystore. Verifique se o Java esta instalado." -ForegroundColor Red
    exit 1
}

# Criar keystore.properties (nunca comitar este arquivo!)
$propsContent = @"
storeFile=$($jksPath -replace '\\','/')
storePassword=$storePass
keyAlias=$KeyAlias
keyPassword=$keyPass
"@
Set-Content -Path $propsPath -Value $propsContent -Encoding UTF8
Write-Host ""
Write-Host "keystore.properties criado em: $propsPath" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANTE: Nunca comite o arquivo keystore.properties nem o .jks!" -ForegroundColor Red
Write-Host "Adicione ao .gitignore:" -ForegroundColor Yellow
Write-Host "  android/keystore.properties" -ForegroundColor Yellow
Write-Host "  android/*.jks" -ForegroundColor Yellow
Write-Host ""
Write-Host "Para gerar o APK assinado:" -ForegroundColor Cyan
Write-Host "  cd android && gradlew assembleRelease" -ForegroundColor White
Write-Host "  APK em: android/app/build/outputs/apk/release/app-release.apk" -ForegroundColor White
