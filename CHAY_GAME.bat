@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ====================================================
echo   DANG KHOI DONG LAI TRA QUAN KHOA CU (V2.5 MOI NHAT)
echo ====================================================
taskkill /F /IM node.exe >nul 2>&1
timeout /t 1 /nobreak >nul
start "" "http://localhost:3000"
node server.js
pause
