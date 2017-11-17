SET NAMES UTF8;
DROP DATABASE IF EXISTS kp;
CREATE DATABASE kp CHARSET=UTF8;
USE kp;


/**投影机型号家族**/
CREATE TABLE kp_projector_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
INSERT INTO kp_projector_family VALUES
(NULL,'P1超短焦投触一体机'),
(NULL,'P2 激光电视'),
(NULL,'V10系列平板电脑'),
(NULL,'W10便携式移动投影');


/**投影机**/
CREATE TABLE kp_projector(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price INT,                  #价格
  version VARCHAR(64),        #版本

  details VARCHAR(1024),      #商品详情
  spec VARCHAR(64)            #规格参数
);
INSERT INTO kp_projector VALUES
(1,1,'P1超投电脑一体机/超投大屏电视','【高度集成，系统交互】超短焦投影+交互式电子白板+电脑+音响',29800,'P1 娱乐版','<img src="img/p1buy/new_p1_02.jpg"><img src="img/p1buy/new_p1_03.jpg"><img src="img/p1buy/new_p1_04.jpg"><img src="img/p1buy/new_p1_05.jpg"><img src="img/p1buy/new_p1_06.jpg"><img src="img/p1buy/new_p1_07.jpg"><img src="img/p1buy/new_p1_08.jpg"><img src="img/p1buy/new_p1_09.jpg"><img src="img/p1buy/new_p1_10.jpg"><img src="img/p1buy/new_p1_11.jpg"><img src="img/p1buy/new_p1_12.jpg">','<img src="img/p1buy/params_01.png"><img src="img/p1buy/params_02.png">'),
(2,1,'P1超投电脑一体机/超投大屏电视','【高度集成，系统交互】超短焦投影+交互式电子白板+电脑+音响',29800,'P1 商务版','<img src="img/p1buy/new_p1_02.jpg"><img src="img/p1buy/new_p1_03.jpg"><img src="img/p1buy/new_p1_04.jpg"><img src="img/p1buy/new_p1_05.jpg"><img src="img/p1buy/new_p1_06.jpg"><img src="img/p1buy/new_p1_07.jpg"><img src="img/p1buy/new_p1_08.jpg"><img src="img/p1buy/new_p1_09.jpg"><img src="img/p1buy/new_p1_10.jpg"><img src="img/p1buy/new_p1_11.jpg"><img src="img/p1buy/new_p1_12.jpg">','<img src="img/p1buy/params_01.png"><img src="img/p1buy/params_02.png">'),
(3,1,'P1超投电脑一体机/超投大屏电视','【高度集成，系统交互】超短焦投影+交互式电子白板+电脑+音响',39800,'P1 专业版','<img src="img/p1buy/new_p1_02.jpg"><img src="img/p1buy/new_p1_03.jpg"><img src="img/p1buy/new_p1_04.jpg"><img src="img/p1buy/new_p1_05.jpg"><img src="img/p1buy/new_p1_06.jpg"><img src="img/p1buy/new_p1_07.jpg"><img src="img/p1buy/new_p1_08.jpg"><img src="img/p1buy/new_p1_09.jpg"><img src="img/p1buy/new_p1_10.jpg"><img src="img/p1buy/new_p1_11.jpg"><img src="img/p1buy/new_p1_12.jpg">','<img src="img/p1buy/params_01.png"><img src="img/p1buy/params_02.png">'),
(4,1,'P1超投电脑一体机/超投大屏电视','【高度集成，系统交互】超短焦投影+交互式电子白板+电脑+音响',29800,'P1 教育套装版','<img src="img/p1buy/new_p1_02.jpg"><img src="img/p1buy/new_p1_03.jpg"><img src="img/p1buy/new_p1_04.jpg"><img src="img/p1buy/new_p1_05.jpg"><img src="img/p1buy/new_p1_06.jpg"><img src="img/p1buy/new_p1_07.jpg"><img src="img/p1buy/new_p1_08.jpg"><img src="img/p1buy/new_p1_09.jpg"><img src="img/p1buy/new_p1_10.jpg"><img src="img/p1buy/new_p1_11.jpg"><img src="img/p1buy/new_p1_12.jpg">','<img src="img/p1buy/params_01.png"><img src="img/p1buy/params_02.png">'),
(5,2,'P2 激光电视 / 商教两用激光投影机','【1080P全高清、4K、超短焦、可连接WIFI、电视盒子】',39800,'P2 激光版','<img src="img/p2buy/P2scene/p2-01.jpg"><img src="img/p2buy/P2scene/p2-02.jpg"><img src="img/p2buy/P2scene/p2-03.jpg"><img src="img/p2buy/P2scene/p2-04.jpg"><img src="img/p2buy/P2scene/p2-05.jpg">','<img src="img/p2buy/params_01.png"><img src="img/p2buy/params_02.png"><img src="img/p2buy/params_03.png">'),
(6,2,'P2 激光电视 / 商教两用激光投影机','【1080P全高清、4K、超短焦、可连接WIFI、电视盒子】',39800,'P2 商教版','<img src="img/p2buy/P2scene/p2-01.jpg"><img src="img/p2buy/P2scene/p2-02.jpg"><img src="img/p2buy/P2scene/p2-03.jpg"><img src="img/p2buy/P2scene/p2-04.jpg"><img src="img/p2buy/P2scene/p2-05.jpg">','<img src="img/p2buy/params_01.png"><img src="img/p2buy/params_02.png"><img src="img/p2buy/params_03.png">'),
(7,3,'V10 4G全网通与原笔迹手写','【移动办公好帮手】长效续航+1024级压感技术+高速双频wifi更快更稳定',2799,'大众版','<img src="img/v10buy/v10-plus_02.jpg"><img src="img/v10buy/v10-plus_03.jpg"><img src="img/v10buy/v10-plus_04.jpg"><img src="img/v10buy/v10-plus_05.jpg"><img src="img/v10buy/v10-plus_06.jpg"><img src="img/v10buy/v10-plus_07.jpg"><img src="img/v10buy/v10-plus_08.jpg"><img src="img/v10buy/v10-plus_09.jpg"><img src="img/v10buy/v10-plus_10.jpg"><img src="img/v10buy/v10-plus_11.jpg"><img src="img/v10buy/v10-plus_12.jpg"><img src="img/v10buy/v10-plus_13.jpg"><img src="img/v10buy/v10-plus_14.jpg"><img src="img/v10buy/v10-plus_15.jpg"><img src="img/v10buy/v10-plus_16.jpg">','<img src="img/v10buy/params_01.png"><img src="img/v10buy/params_02.png">'),
(8,3,'V10 4G全网通与原笔迹手写','【移动办公好帮手】长效续航+1024级压感技术+高速双频wifi更快更稳定',3499,'精英版','<img src="img/v10buy/v10-plus_02.jpg"><img src="img/v10buy/v10-plus_03.jpg"><img src="img/v10buy/v10-plus_04.jpg"><img src="img/v10buy/v10-plus_05.jpg"><img src="img/v10buy/v10-plus_06.jpg"><img src="img/v10buy/v10-plus_07.jpg"><img src="img/v10buy/v10-plus_08.jpg"><img src="img/v10buy/v10-plus_09.jpg"><img src="img/v10buy/v10-plus_10.jpg"><img src="img/v10buy/v10-plus_11.jpg"><img src="img/v10buy/v10-plus_12.jpg"><img src="img/v10buy/v10-plus_13.jpg"><img src="img/v10buy/v10-plus_14.jpg"><img src="img/v10buy/v10-plus_15.jpg"><img src="img/v10buy/v10-plus_16.jpg">','<img src="img/v10buy/params_01.png"><img src="img/v10buy/params_02.png">'),
(9,3,'V10 4G全网通与原笔迹手写','【移动办公好帮手】长效续航+1024级压感技术+高速双频wifi更快更稳定',3999,'旗舰版','<img src="img/v10buy/v10-plus_02.jpg"><img src="img/v10buy/v10-plus_03.jpg"><img src="img/v10buy/v10-plus_04.jpg"><img src="img/v10buy/v10-plus_05.jpg"><img src="img/v10buy/v10-plus_06.jpg"><img src="img/v10buy/v10-plus_07.jpg"><img src="img/v10buy/v10-plus_08.jpg"><img src="img/v10buy/v10-plus_09.jpg"><img src="img/v10buy/v10-plus_10.jpg"><img src="img/v10buy/v10-plus_11.jpg"><img src="img/v10buy/v10-plus_12.jpg"><img src="img/v10buy/v10-plus_13.jpg"><img src="img/v10buy/v10-plus_14.jpg"><img src="img/v10buy/v10-plus_15.jpg"><img src="img/v10buy/v10-plus_16.jpg">','<img src="img/v10buy/params_01.png"><img src="img/v10buy/params_02.png">');



/**用户信息**/
CREATE TABLE kp_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
/**用户信息**/
INSERT INTO kp_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');

/****首页商品****/
CREATE TABLE kp_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  href VARCHAR(128)
);
/****首页商品****/
INSERT INTO kp_index_product VALUES
(NULL,'P1超短焦投触一体机','img/index/p1-product.png','P1Buy.html'),
(NULL,'P2 激光电视','img/index/p2-product.png','P2Buy.html'),
(NULL,'移动高清微投新品','img/index/s8-product.png','#'),
(NULL,'V10系列平板电脑','img/index/v10-test.png','V10Buy.html');

/****首页新闻中心****/
CREATE TABLE kp_index_news(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  href VARCHAR(128)
);
/****首页新闻中心****/
INSERT INTO kp_index_news VALUES
(NULL,'库帕2017年度“渠道年”启动大会召开','img/index/new-00.png','#'),
(NULL,'关于售后服务方面问题通知','img/index/new-00.png','#'),
(NULL,'KUPA P1超短焦投触电脑，成功助力成都龙江路小学“乐悦课堂”的实现','img/index/new-00.png','#');

/****首页品质保证****/
CREATE TABLE kp_index_quality(
  qid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128)
);
/****首页品质保证****/
INSERT INTO kp_index_quality VALUES
(NULL,'官网品质保障','img/index/quality.png'),
(NULL,'顺丰快递包邮','img/index/express.png'),
(NULL,'7天无理由退货','img/index/return.png'),
(NULL,'15天快速响应换货','img/index/exchange.png'),
(NULL,'1年售后完全保修','img/index/safeguard.png');

/****热卖商品****/
CREATE TABLE kp_hotsale(
  hid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  subtitle VARCHAR(128),
  pic VARCHAR(128),
  price VARCHAR(32)
);
/****热卖商品****/
INSERT INTO kp_hotsale VALUES
(NULL,'P1 商务版','超短交互投影就是我！','img/products/hot-p1-s.jpg','¥29800'),
(NULL,'V10 旗舰版','4G手写平板电脑我是唯一','img/products/hot-v10.png','¥3999'),
(NULL,'S8H 移动高清版','享受随时随地高清交互乐趣','img/products/hot-s8h.png','新品上市'),
(NULL,'A1 激光教育版','移动高清投影','img/products/hot-a1.png','新品上市'),
(NULL,'P2 激光高清版','媲美120寸液晶电脑显示效果','img/products/kupa-p2-hot.jpg','¥39800');

/****产品p1系列****/
CREATE TABLE kp_series(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  price VARCHAR(32),
  gobuy VARCHAR(32),
  href VARCHAR(128),
  pic VARCHAR(128)
);
/****产品p1系列****/
INSERT INTO kp_series VALUES
(NULL,'P1 娱乐版','','前往购买','#','img/products/product-p1-content.jpg'),
(NULL,'P1 商务版','¥29800','前往购买','#','img/products/product-p1-content-02.jpg'),
(NULL,'P1 专业版','¥39800','前往购买','#','img/products/product-p1-content-03.jpg'),
(NULL,'W10 基础版','¥2799','前往购买','#','img/products/product-w10-content-01.jpg'),
(NULL,'W10 尊享版','¥2999','前往购买','#','img/products/product-w10-content-02.jpg'),
(NULL,'S3 专业版','¥3999','前往购买','#','img/products/product-s3-content.jpg'),
(NULL,'移动高清新系列','待定','前往购买','#','img/products/product-s8-content.png'),
(NULL,'V10 大众版','¥2799','前往购买','#','img/products/product-v10-content-02.jpg'),
(NULL,'V10 菁英版','¥3499','前往购买','#','img/products/product-v10-content-01.jpg'),
(NULL,'V10 旗舰版','¥3999','前往购买','#','img/products/product-v10-content-03.jpg'),
(NULL,'X15 系列','','前往购买','#','img/products/product-x15-content.jpg'),
(NULL,'A1 激光教育版','','前往预定','#','img/products/product-a1-content.jpg'),
(NULL,'P2 激光高清版','','前往预定','#','img/products/product-p2-content.jpg');

