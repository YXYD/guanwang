exception 'CHttpException' with message '系统无法找到请求的 "sweet.js" 动作.' in /var/www/server/framework/web/CController.php:483
Stack trace:
#0 /var/www/server/framework/web/CController.php(270): CController->missingAction('sweet.js')
#1 /var/www/server/framework/web/CWebApplication.php(282): CController->run('sweet.js')
#2 /var/www/server/framework/web/CWebApplication.php(141): CWebApplication->runController('captcha/sweet.j...')
#3 /var/www/server/framework/base/CApplication.php(180): CWebApplication->processRequest()
#4 /var/www/server/index.php(46): CApplication->run()
#5 {main}
REQUEST_URI=/captcha/sweet.js
HTTP_REFERER=http://www.youxiaoyouda.com/project/index?keyword=&province=上海市&stage=5&need=-1
---