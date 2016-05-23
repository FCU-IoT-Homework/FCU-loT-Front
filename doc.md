# 控制Arduino       
2016.5.22

### 紅外線電扇
*路徑:	http://140.134.26.72/IoT/Hardware/API/phpMQTT/infrared_transmitter.php

*傳送方式: GET

*需要傳送參數 action
  - action = 0   代表 off 
  - action = 1   代表 on
  - action = 2   代表 strength
  - action = 3   代表 weak

### 冷氣
*路徑:http://140.134.26.72/IoT/Hardware/API/phpMQTT/air_conditioning.php

*傳送方式: GET

*需要傳送參數 action
  - action = 0   代表 off 
  - action = 1   代表 on

### 門
*路徑:http://140.134.26.72/IoT/Hardware/API/phpMQTT/door.php

*傳送方式: GET

*需要傳送參數 action
  - action = 0   代表 off 
  - action = 1   代表 on

### 燈
*路徑:http://140.134.26.72/IoT/Hardware/API/phpMQTT/light.php

*傳送方式: GET

*需要傳送參數 action, id
  - action = 0   代表 off 
  - action = 1   代表 on
  - id = 0   代表 light_0
  - id = 1   代表 light_1
  - id = 2   代表 light_2
