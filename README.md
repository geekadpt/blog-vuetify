
## 关于 Blog-Vuetify-v1.0

Blog-Vuetify 是由 Laravel8 + Vue2 + Vuetify2 开发的前后端分离的单页面博客类 Web 应用。


## 特性

- 3D标签云
- v-md-editor Markdown 编辑器
- 无限懒加载
- 骨架装载器
- 全屏背景图片
- 阿里云短信
- 阿里云对象存储
- JWT 平滑刷新 Token
- 访问速率控制
- 二次封装 axios
- vue-i18n 国际化

## 截图

![首页视图](https://img-blog.csdnimg.cn/20210215163951988.png)

![个人资料](https://img-blog.csdnimg.cn/20210215162957278.png)

![登录视图](https://img-blog.csdnimg.cn/2021021516291229.png)
![v-md-editor](https://img-blog.csdnimg.cn/20210215164310779.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/15b5fe3c1c6beb4b65a0b308c698f298.gif#pic_center)

## Demo

 - [blog.locyin.com](https://blog.locyin.com)

## 安装

 - composer install
 - npm install
 - vim resources/js/config.js 
 - npm run production
 - cp .env.example .env
 - vim .env
 - php artisan key:generate
 - php artisan jwt:secret
 - php artisan migrate --seed
 - php artisan up

## 项目结构

- app
  - Console/Kernel.php ------------------------------------------------------包含应用所有自定义的 Artisan 命令
  - app/Exceptions   ----------------------------------------------------------自定义异常处理
  - Handlers/ImageUploadHandler.php ---------------------------------图片上传事件处理器
  - Http
    - Controllers/Api ----------------------------------------------------------处理所有通过接口进入应用的请求
    - Middleware--------------------------------------------------------------中间件
    - Requests -----------------------------------------------------------------请求验证类
    - Resources ---------------------------------------------------------------接口资源类
  - Providers ----------------------------------------------------------服务提供者类
  - Services/OSS.php -----------------------------------------------------------阿里云OSS服务
- config  ----------------------------------------------------------------Laravel 配置文件目录
- database
  - factorie ---------------------------------------------------------- 数据库工厂目录
  - migrations -------------------------------------------------------- 数据库迁移文件目录
  - seeds -------------------------------------------------------------- 数据填充目录
- resources
  - js --------------------------------------------------------------客户端目录
      - api -------------------------------------------------- 接口配置目录
          - app.js -------------------------------------------------- 应用程序接口配置文件
          - axios.js -------------------------------------------------二次封装的 axios 文件
      - assets --------------------------------------------------引入的图片资源目录
      - layouts/default-------------------------------------------------------Vuetify 继承部件目录
      - common/lang -------------------------------------------------- i18n 自定义多语言包目录
      - components -------------------------------------------------- Vuetify 组件目录
      - modules -------------------------------------------------- vuex 模块
          - app.js -------------------------------------------------- 应用程序接口配置文件
      - views-------------------------------------------------- Vuetify 视图目录
      - utils  -------------------------------------------------- 自定义插件目录
      - plugins -------------------------------------------------- 引入插件目录
      - app.js -------------------------------------------------- vue.js 入口文件
      - config.js -------------------------------------------------- vue.js 自定义配置文件
      - event-bus.js -------------------------------------------------- 事件总线文件
      - routes.js -------------------------------------------------- 路由配置文件
      - store.js -------------------------------------------------- vuex 模块注册文件
      - vuetify.js -------------------------------------------------- vuetify 配置文件
      - md_editor.js-------------------------------------------------- v-md-editor 配置文件
  - views
      - app.blade.php -------------------------------------------------- 客户端挂载视图

想了解更多 [Laravel 文件夹结构？](https://learnku.com/docs/laravel/8.x/structure/9356)请看[ Laravel 8 中文文档](https://learnku.com/docs/laravel/8.x)

## License

The Blog-Vuetify application is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
