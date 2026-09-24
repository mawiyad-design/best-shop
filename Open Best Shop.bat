@echo off
REM Opens the Best Shop website on this computer (for presenting).
cd /d "%~dp0"
start "" http://localhost:5500/index.html
python -m http.server 5500
