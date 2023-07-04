This repository is created to demonstrate issue with `expo-camera` and `react-native-clarity`.

Issue: Switching to screen with camera preview is all white, without any components visible, randomly, if `react-native-clarity` is initialized.

Steps to reproduce:

1. clone repository;

2. set clarity project id in App.js: `initialize(...)` function

3. build dev-client by runnig `npm run build-dev-client`

4. install dev-client on emulator or real device

5. run `npm run start-dev-client`

6. scan code with scanner, when app will loads, click on 'Go to camera screen' and back few times, you will see that some times screen is whipe with no content inside.

7. comment out `initialize(...)` line. rebuild app, camera preview screen appears correctly all the time.

As the proof of the bug, there is a [screen record](screenrecord-bug.mp4)
