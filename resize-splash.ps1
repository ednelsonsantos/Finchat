Add-Type -AssemblyName System.Drawing

$root    = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcLogo = Join-Path $root "logotipo\logotipofinchat.png"
$logo    = [System.Drawing.Image]::FromFile($srcLogo)
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#0a1628")
$base    = Join-Path $root "android\app\src\main\res"

# { folder; width; height }
$configs = @(
  [pscustomobject]@{folder='drawable';              w=720;  h=1280},
  [pscustomobject]@{folder='drawable-port-mdpi';    w=320;  h=480 },
  [pscustomobject]@{folder='drawable-port-hdpi';    w=480;  h=800 },
  [pscustomobject]@{folder='drawable-port-xhdpi';   w=720;  h=1280},
  [pscustomobject]@{folder='drawable-port-xxhdpi';  w=960;  h=1600},
  [pscustomobject]@{folder='drawable-port-xxxhdpi'; w=1280; h=1920},
  [pscustomobject]@{folder='drawable-land-mdpi';    w=480;  h=320 },
  [pscustomobject]@{folder='drawable-land-hdpi';    w=800;  h=480 },
  [pscustomobject]@{folder='drawable-land-xhdpi';   w=1280; h=720 },
  [pscustomobject]@{folder='drawable-land-xxhdpi';  w=1600; h=960 },
  [pscustomobject]@{folder='drawable-land-xxxhdpi'; w=1920; h=1280}
)

foreach ($c in $configs) {
  $bmp = New-Object System.Drawing.Bitmap($c.w, $c.h)
  $g   = [System.Drawing.Graphics]::FromImage($bmp)

  # Fundo azul escuro
  $g.Clear($bgColor)

  # Logo centralizado — ocupa 55% da menor dimensão
  $maxSize  = [int]([Math]::Min($c.w, $c.h) * 0.55)
  $aspect   = $logo.Width / $logo.Height
  if ($aspect -ge 1) { $lw = $maxSize; $lh = [int]($maxSize / $aspect) }
  else               { $lh = $maxSize; $lw = [int]($maxSize * $aspect) }
  $lx = [int](($c.w - $lw) / 2)
  $ly = [int](($c.h - $lh) / 2)

  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.DrawImage($logo, $lx, $ly, $lw, $lh)

  $dest = Join-Path $base "$($c.folder)\splash.png"
  $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Host "  OK $($c.folder) ($($c.w)x$($c.h))"
  $g.Dispose(); $bmp.Dispose()
}

$logo.Dispose()
Write-Host "Splashes gerados!"
