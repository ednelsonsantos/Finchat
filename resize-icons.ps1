Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcIcon = Join-Path $root "icone\iconefinchat.png"
$img = [System.Drawing.Image]::FromFile($srcIcon)
Write-Host "Icone original: $($img.Width)x$($img.Height)"

$base = Join-Path $root "android\app\src\main\res"

$sizes = @(
  [pscustomobject]@{folder='mipmap-mdpi';    size=48},
  [pscustomobject]@{folder='mipmap-hdpi';    size=72},
  [pscustomobject]@{folder='mipmap-xhdpi';   size=96},
  [pscustomobject]@{folder='mipmap-xxhdpi';  size=144},
  [pscustomobject]@{folder='mipmap-xxxhdpi'; size=192}
)

foreach ($s in $sizes) {
  $bmp = New-Object System.Drawing.Bitmap($s.size, $s.size)
  $g   = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $s.size, $s.size)

  $dir = Join-Path $base $s.folder
  $bmp.Save((Join-Path $dir "ic_launcher.png"),            [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Save((Join-Path $dir "ic_launcher_round.png"),      [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Save((Join-Path $dir "ic_launcher_foreground.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Host "  OK $($s.folder) ($($s.size)x$($s.size))"
  $g.Dispose()
  $bmp.Dispose()
}

# Electron + raiz: 512x512
foreach ($dest in @("electron\icon.png", "icon.png")) {
  $bmp512 = New-Object System.Drawing.Bitmap(512, 512)
  $g512   = [System.Drawing.Graphics]::FromImage($bmp512)
  $g512.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g512.DrawImage($img, 0, 0, 512, 512)
  $bmp512.Save((Join-Path $root $dest), [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Host "  OK $dest (512x512)"
  $g512.Dispose()
  $bmp512.Dispose()
}

$img.Dispose()
Write-Host "Concluido!"
