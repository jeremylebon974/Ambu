@echo off
FOR /F "tokens=5" %%P IN ('netstat -ano ^| findstr :3000') DO TaskKill /PID %%P /F 2>nul
pnpm run dev
