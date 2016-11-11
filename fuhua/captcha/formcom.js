exception 'CHttpException' with message '系统无法找到请求的 "formcom.js" 动作.' in /var/www/server/framework/web/CController.php:483
Stack trace:
#0 /var/www/server/framework/web/CController.php(270): CController->missingAction('formcom.js')
#1 /var/www/server/framework/web/CWebApplication.php(282): CController->run('formcom.js')
#2 /var/www/server/framework/web/CWebApplication.php(141): CWebApplication->runController('captcha/formcom...')
#3 /var/www/server/framework/base/CApplication.php(180): CWebApplication->processRequest()
#4 /var/www/server/index.php(46): CApplication->run()
#5 {main}
REQUEST_URI=/captcha/formcom.js
HTTP_REFERER=http://www.youxiaoyouda.com/project/index?keyword=&province=北京市&stage=2&need=-1
---