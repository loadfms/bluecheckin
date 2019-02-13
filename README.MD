# Auto Bluefit Checkin
All you have to do is run ```npm start``` and **workout**!
It uses puppeteer to get youir daily access token in Gympass and fill it in Bluefit system.

## Setup
- ```git clone git@gitlab.com:loadfms/bluefitcheckin.git```
- ```npm intall```
- ```npm start```

## Config
In ```config.js``` you will find every configuration needed to your account.

## Cronjob
If you (like me) forget to execute job everyday, you can add a crontab to auto-execute every weekday (monday to friday).

- ```crontab -e```

- ```0 10 * * 1-5 /ABSOLUTE_PATH/cronjob-bluefit.sh```

> PRO Tip: you can easily get absolute path just dragin-n-dropin your cronjob-bluefit.sh in a terminal window

## Lincense
This project is licensed under the MIT License 
