#傳送資料
###紅外線
*路徑:	http://140.134.26.72/IoT/Hardware/API/return_infrared.php

<table>
    <tr>
      <td>欄位名稱</td>
      <td>資料型態</td>
      <td>單位</td>
      <td>備註</td>
    </tr>
    <tr>
      <td>count</td>
      <td>int</td>
      <td>無</td>
      <td>Primary Key</td>
    </tr>
    <tr>
      <td>pir1</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
    <tr>
      <td>pir2</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
    <tr>
      <td>pir3</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
</table>

###溫溼度  
最新一筆資料

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_infrared.php

<table>
    <tr>
      <td>欄位名稱</td>
      <td>資料型態</td>
      <td>單位</td>
      <td>備註</td>
    </tr>
    <tr>
      <td>count</td>
      <td>int</td>
      <td>無</td>
      <td>Primary Key</td>
    </tr>
    <tr>
      <td>pir1</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
    <tr>
      <td>pir2</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
    <tr>
      <td>pir3</td>
      <td>int</td>
      <td>無</td>
      <td>偵測房間內是否有人</td>
    </tr>
</table>

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
