<html><head><meta http-equiv=Content-Type content='text/html; charset=UTF-8'></head>
exception 'CHttpException' with message '系统无法找到请求的 "js" 动作.' in /var/www/server/framework/web/CController.php:483
Stack trace:
#0 /var/www/server/framework/web/CController.php(270): CController->missingAction('js')
#1 /var/www/server/framework/web/CWebApplication.php(282): CController->run('js')
#2 /var/www/server/framework/web/CWebApplication.php(141): CWebApplication->runController('capital/js/page...')
#3 /var/www/server/framework/base/CApplication.php(180): CWebApplication->processRequest()
#4 /var/www/server/index.php(46): CApplication->run()
#5 {main}
REQUEST_URI=/capital/js/pageNav.js
HTTP_REFERER=http://www.youxiaoyouda.com/capital/project?id=26
---