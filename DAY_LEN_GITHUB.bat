@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ====================================================
echo   DANG DONG GOI VA DAY CODE LEN GITHUB & RENDER...
echo ====================================================
git add .
git commit -m "Cap nhat game tu dong: %date% %time%"
git branch -M main
git push origin main
echo.
echo ====================================================
echo   DA DAY LEN GITHUB THANH CONG!
echo   Render se tu dong cap nhat ban moi trong 30 giay!
echo ====================================================
pause

