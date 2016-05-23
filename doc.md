#傳送資料
###紅外線
*路徑:	http://140.134.26.72/IoT/Hardware/API/return_infrared.php

| 欄位名稱 | 資料型態 | 單位 | 備註 |

| A | B | C | D
| V | C | S | A
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

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_recent.php

<table>
    <tr>
      <td>欄位名稱</td>
      <td>資料型態</td>
      <td>單位</td>
      <td>備註</td>
    </tr>
    <tr>
      <td>timestamp</td>
      <td>timestamp</td>
      <td>年-月-日</td>
      <td>時間</td>
    </tr>
    <tr>
      <td>temperature</td>
      <td>float</td>
      <td>°C</td>
      <td>溫度</td>
    </tr>
    <tr>
      <td>humidity</td>
      <td>float</td>
      <td>%</td>
      <td>濕度</td>
    </tr>
    <tr>
      <td>soil</td>
      <td>int</td>
      <td>%</td>
      <td>土壤濕度</td>
    </tr>
</table>

###溫溼度  
全部資料

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_tem_hum_all.php

<table>
    <tr>
      <td>欄位名稱</td>
      <td>資料型態</td>
      <td>單位</td>
      <td>備註</td>
    </tr>
    <tr>
      <td>timestamp</td>
      <td>timestamp</td>
      <td></td>
      <td>時間</td>
    </tr>
    <tr>
      <td>temperature</td>
      <td>float</td>
      <td>°C</td>
      <td>溫度</td>
    </tr>
    <tr>
      <td>humidity</td>
      <td>float</td>
      <td>%</td>
      <td>濕度</td>
    </tr>
    <tr>
      <td>soil</td>
      <td>int</td>
      <td>%</td>
      <td>土壤濕度</td>
    </tr>
</table>

###危險感測  

*路徑:	http://140.134.26.72/IoT/Hardware/API/return_danger.php

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
      <td>fire</td>
      <td>int</td>
      <td></td>
      <td>火災</td>
    </tr>
    <tr>
      <td>gas</td>
      <td>int</td>
      <td></td>
      <td>瓦斯</td>
    </tr>
    <tr>
      <td>zone</td>
      <td>tinyint</td>
      <td></td>
      <td>限制區域</td>
    </tr>
    <tr>
      <td>co</td>
      <td>int</td>
      <td></td>
      <td>一氧化碳</td>
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