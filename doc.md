#傳送資料
###紅外線
*路徑:	http://140.134.26.72/IoT/Hardware/API/return_infrared.php


欄位名稱 | 資料型態 | 單位 | 備註
---------|----------|------|-----
count    | int      | 無   | Primary Key
pir1     | int      | 無   | 偵測房間內是否有人
pir2     | int      | 無   | 偵測房間內是否有人
pir3     | int      | 無   | 偵測房間內是否有人


###溫溼度  
最新一筆資料

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_recent.php

欄位名稱    | 資料型態  | 單位     | 備註
------------|-----------|----------|-----
timestamp   | timestamp | 年-月-日 | 時間
temperature | float     | °C       | 溫度
humidity    | float     | %        | 濕度
soil        | float     | %        | 土壤濕度


###溫溼度  
全部資料

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_tem_hum_all.php

欄位名稱    | 資料型態  | 單位     | 備註
------------|-----------|----------|-----
timestamp   | timestamp | 年-月-日 | 時間
temperature | float     | °C       | 溫度
humidity    | float     | %        | 濕度
soil        | float     | %        | 土壤濕度

###危險感測  

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_danger.php

<table>
欄位名稱 | 資料型態 | 單位 | 備註
---------|----------|------|-----
count    | count    | 無   | Primary Key
fire     | int      |      | 火災
gas      | int      |      | 瓦斯
zone     | tinyint  |      | 限制區域
co       | int      |      | 一氧化碳

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
