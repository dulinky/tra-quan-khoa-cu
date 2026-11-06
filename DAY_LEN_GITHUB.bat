@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ====================================================
echo   DANG DAY TOAN BO CODE LEN GITHUB: dulinky/tra-quan-khoa-cu
echo ====================================================
git branch -M main
git push -u origin main
echo.
echo ====================================================
echo   HOAN TAT! HAY VAO RENDER.COM DE KHOI CHAY GAME!
echo ====================================================
pause
