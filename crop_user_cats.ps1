Add-Type -AssemblyName System.Drawing

function CropToSquare([string]$srcPath, [string]$dstPath, [int]$cropX, [int]$cropY, [int]$cropSize) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $bmp = New-Object System.Drawing.Bitmap $cropSize, $cropSize
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropSize, $cropSize
    $dstRect = New-Object System.Drawing.Rectangle 0, 0, $cropSize, $cropSize
    $g.DrawImage($srcImg, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    $srcImg.Dispose()
    Write-Output "Saved: $dstPath"
}

# Image 2 (Trạng Nguyên): 1024 x 571 -> Center X is 226, Size = 571
$p2 = "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\.user_uploaded\media_1793856895880_517201af.jpg"
$out2 = "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_4_trang_nguyen.png"
CropToSquare $p2 $out2 226 0 571

# Image 3 (Thừa Tướng): 1024 x 571 -> Center X is 226, Size = 571
$p3 = "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\.user_uploaded\media_1793856911013_1edf6f32.jpg"
$out3 = "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_5_thua_tuong.png"
CropToSquare $p3 $out3 226 0 571

# Image 1 (Đồng Sinh): Center is at Y=506. Size = 571. cropY = 506 - (571/2) = 221
$p1 = "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\.user_uploaded\media_1793856865363_ebfe05af.jpg"
$out1 = "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_1_dong_sinh.png"
CropToSquare $p1 $out1 0 221 571
