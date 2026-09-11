@echo off
echo Starting MongoDB with Replica Set rs0...
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe" --dbpath "C:\Program Files\MongoDB\Server\8.2\data" --replSet rs0
pause
