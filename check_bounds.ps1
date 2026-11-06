Add-Type -AssemblyName System.Drawing
$img = New-Object System.Drawing.Bitmap 'C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\.user_uploaded\media_1793856865363_ebfe05af.jpg'
$minY = 10000; $maxY = 0; $minX = 10000; $maxX = 0
for ($y = 0; $y -lt $img.Height; $y += 4) {
    for ($x = 0; $x -lt $img.Width; $x += 4) {
        $c = $img.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
}
$img.Dispose()
Write-Output "Bounds: X=$minX..$maxX, Y=$minY..$maxY"
$centerY = [int](($minY + $maxY) / 2)
$centerX = [int](($minX + $maxX) / 2)
Write-Output "Center: X=$centerX, Y=$centerY"
