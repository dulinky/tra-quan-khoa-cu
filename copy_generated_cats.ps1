Add-Type -AssemblyName System.Drawing

function SaveAsPng([string]$src, [string]$dst) {
    $img = [System.Drawing.Image]::FromFile($src)
    $img.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
    $img.Dispose()
    Write-Output "Converted: $dst"
}

SaveAsPng "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\cat_tier_6_hoang_thuong_1793857184470.jpg" "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_6_hoang_thuong.png"
SaveAsPng "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\cat_tier_3_cu_nhan_1793857205691.jpg" "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_3_cu_nhan.png"
SaveAsPng "C:\Users\PC\.gemini\antigravity\brain\78540789-9e3d-413c-a842-f0500647394e\cat_tier_2_tu_tai_1793857226821.jpg" "C:\Users\PC\.gemini\antigravity\scratch\tra-quan-khoa-cu\public\assets\avatars\cat_tier_2_tu_tai.png"
