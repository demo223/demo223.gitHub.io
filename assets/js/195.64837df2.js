(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{478:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[s._v("#")]),s._v(" Nacos")]),s._v(" "),a("h2",{attrs:{id:"nacos-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos-安装"}},[s._v("#")]),s._v(" Nacos 安装")]),s._v(" "),a("p",[s._v("github "),a("a",{attrs:{href:"https://github.com/alibaba/nacos/tags",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装地址"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("下载合适的版本的压缩包并解压")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221202804622.png",alt:"image-20221221202804622"}})]),s._v(" "),a("p",[s._v("Nacos的默认端口是"),a("code",[s._v("8848")]),s._v("，如果你电脑上的其它进程占用了8848端口，请先尝试关闭该进程。")]),s._v(" "),a("h3",{attrs:{id:"nacos-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos-启动"}},[s._v("#")]),s._v(" Nacos 启动")]),s._v(" "),a("p",[s._v("在上面的"),a("code",[s._v("bin")]),s._v("目录下"),a("code",[s._v("cmd")]),s._v("输入如下命令即可启动")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("startup.cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" standalone\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动效果为")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221203417304.png",alt:"image-20221221203417304"}})]),s._v(" "),a("p",[s._v("也可以将nacos 的启动文件 "),a("code",[s._v("start.cmd")]),s._v(" 的模式改为单机模式启动")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230102193058621.png",alt:"image-20230102193058621"}})]),s._v(" "),a("p",[s._v("然后直接点击 "),a("code",[s._v("start.cmd")]),s._v(" 即可启动 nacos服务")]),s._v(" "),a("h3",{attrs:{id:"nacos-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos-访问"}},[s._v("#")]),s._v(" Nacos 访问")]),s._v(" "),a("p",[s._v("在浏览器输入地址：http://127.0.0.1:8848/nacos即可：用户名和密码都是 "),a("code",[s._v("nacos")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221203747134.png",alt:"image-20221221203747134"}})]),s._v(" "),a("h2",{attrs:{id:"nacos-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos-介绍"}},[s._v("#")]),s._v(" Nacos 介绍")]),s._v(" "),a("p",[s._v("Nacos是SpringCloudAlibaba的组件，而SpringCloudAlibaba也遵循SpringCloud中定义的服务注册、服务发现规范。因此使用Nacos和使用Eureka对于微服务来说，并没有太大区别。")]),s._v(" "),a("p",[s._v("主要差异在于：")]),s._v(" "),a("ul",[a("li",[s._v("依赖不同")]),s._v(" "),a("li",[s._v("服务地址不同")])]),s._v(" "),a("h2",{attrs:{id:"nacos注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos注册中心"}},[s._v("#")]),s._v(" nacos注册中心")]),s._v(" "),a("p",[s._v("在父工程的"),a("code",[s._v("pom.xml")]),s._v("文件中的"),a("code",[s._v("<dependencyManagement>")]),s._v("标签中引入"),a("code",[s._v("SpringCloudAlibaba")]),s._v("的依赖：")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--nacos的管理依赖--\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-alibaba-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.2.5.RELEASE"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后在其他微服务"),a("code",[s._v("user-service")]),s._v("和"),a("code",[s._v("order-service")]),s._v("中的"),a("code",[s._v("pom.xml")]),s._v("文件中引入"),a("code",[s._v("nacos-discovery")]),s._v("依赖：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("<"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!--nacos")]),s._v("客户端依赖"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n<dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n    <groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("com.alibaba.cloud</groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n    <artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("starter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alibaba"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nacos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("discovery</artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n</dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：注释掉"),a("code",[s._v("eureka")]),s._v("的依赖")])]),s._v(" "),a("p",[s._v("然后在其他微服务"),a("code",[s._v("user-service")]),s._v("和"),a("code",[s._v("order-service")]),s._v("中的"),a("code",[s._v("application.yml")]),s._v("中添加"),a("code",[s._v("nacos")]),s._v("地址：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos服务地址")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("重启微服务后，查看 "),a("code",[s._v("nacos")]),s._v("的管理页面信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221210428035.png",alt:"image-20221221210428035"}})]),s._v(" "),a("h2",{attrs:{id:"服务分级存储模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务分级存储模型"}},[s._v("#")]),s._v(" 服务分级存储模型")]),s._v(" "),a("p",[s._v("一个"),a("strong",[s._v("服务")]),s._v("可以有多个"),a("strong",[s._v("实例")]),s._v("，例如我们的user-service，可以有:")]),s._v(" "),a("ul",[a("li",[s._v("127.0.0.1:8081")]),s._v(" "),a("li",[s._v("127.0.0.1:8082")]),s._v(" "),a("li",[s._v("127.0.0.1:8083")])]),s._v(" "),a("p",[s._v("假如这些实例分布于全国各地的不同机房，例如：")]),s._v(" "),a("ul",[a("li",[s._v("127.0.0.1:8081，在上海机房")]),s._v(" "),a("li",[s._v("127.0.0.1:8082，在上海机房")]),s._v(" "),a("li",[s._v("127.0.0.1:8083，在杭州机房")])]),s._v(" "),a("p",[s._v("Nacos就将同一机房内的实例 划分为一个"),a("strong",[s._v("集群")]),s._v("。")]),s._v(" "),a("p",[s._v("也就是说，user-service是服务，一个服务可以包含多个集群，如杭州、上海，每个集群下可以有多个实例，形成分级模型，如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221213207907.png",alt:"image-20221221213207907"}})]),s._v(" "),a("p",[s._v("服务调用尽可能选择本地集群的服务，跨集群调用延迟较高 本地集群不可访问时，再去访问其它集群")]),s._v(" "),a("h3",{attrs:{id:"集群配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群配置"}},[s._v("#")]),s._v(" 集群配置")]),s._v(" "),a("p",[s._v("这里以 "),a("code",[s._v("user-service")]),s._v("服务为例，添加2个不同的集群配置，分别为"),a("code",[s._v("WH")]),s._v("(武汉)集群和"),a("code",[s._v("SH")]),s._v("(上海)集群")]),s._v(" "),a("p",[a("code",[s._v("8081")]),s._v("和"),a("code",[s._v("8082")]),s._v("为"),a("code",[s._v("WH")]),s._v("(武汉)集群，"),a("code",[s._v("8083")]),s._v("为"),a("code",[s._v("SH")]),s._v("(上海)集群")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("user-service")]),s._v("的"),a("code",[s._v("application.yml")]),s._v("文件，添加集群配置：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" HZ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("我们可以再复制2个"),a("code",[s._v("user-service")]),s._v("服务配置，第一个复制的时候添加"),a("code",[s._v("-Dserver.port=8082")]),s._v("，第二个复制如下")]),s._v(" "),a("p",[s._v("添加VM选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dserver.port=8083 -Dspring.cloud.nacos.discovery.cluster-name=SH\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221214338561.png",alt:"image-20221221214338561"}})]),s._v(" "),a("p",[s._v("启动服务，查看\t"),a("code",[s._v("nacos")]),s._v("的服务详情页面")]),s._v(" "),a("p",[a("code",[s._v("WH")]),s._v("武汉集群")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221214700911.png",alt:"image-20221221214700911"}})]),s._v(" "),a("p",[a("code",[s._v("SH")]),s._v("上海集群")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221221214801673.png",alt:"image-20221221214801673"}})]),s._v(" "),a("h3",{attrs:{id:"设置负载均衡规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置负载均衡规则"}},[s._v("#")]),s._v(" 设置负载均衡规则")]),s._v(" "),a("p",[a("code",[s._v("Nacos")]),s._v("默认的"),a("code",[s._v("ZoneAvoidanceRule")]),s._v("并不能实现根据同集群优先来实现负载均衡。")]),s._v(" "),a("p",[s._v("因此"),a("code",[s._v("Nacos")]),s._v("中提供了一个"),a("code",[s._v("NacosRule")]),s._v("的实现，可以优先从同集群中挑选实例。")]),s._v(" "),a("p",[s._v("例如，给"),a("code",[s._v("order-server")]),s._v("\t配置集群信息让它邮箱访问相同集群的"),a("code",[s._v("user-server")]),s._v("服务")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("order-server")]),s._v("的"),a("code",[s._v("application.yml")]),s._v("配置文件，将"),a("code",[s._v("order-server")]),s._v("的集群设置为"),a("code",[s._v("WH")]),s._v("武汉集群")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spring:\n  application:\n    name: orderservice    # 服务名称\n  cloud:\n    nacos:\n      server-addr: localhost:8848 # nacos服务地址\n      discovery:\n          cluster-name: WH  # 配置集群名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后在"),a("code",[s._v("order-service")]),s._v("中设置负载均衡的"),a("code",[s._v("IRule")]),s._v("为"),a("code",[s._v("NacosRule")]),s._v("，这个规则优先会寻找与自己同集群的服务")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("userservice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要做配置的微服务名称")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ribbon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("NFLoadBalancerRuleClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.alibaba.cloud.nacos.ribbon.NacosRule "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 负载均衡规则")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在重启服务后，可以观察到访问的请求都是"),a("code",[s._v("WH")]),s._v("武汉集群，没有发向其他集群的请求")]),s._v(" "),a("h3",{attrs:{id:"权重配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权重配置"}},[s._v("#")]),s._v(" 权重配置")]),s._v(" "),a("p",[s._v("实际部署中会出现这样的场景：")]),s._v(" "),a("p",[s._v("服务器设备性能有差异，部分实例所在机器性能较好，另一些较差，我们希望性能好的机器承担更多的用户请求。")]),s._v(" "),a("p",[s._v("但默认情况下"),a("code",[s._v("NacosRule")]),s._v("是同集群内随机挑选，不会考虑机器的性能问题。")]),s._v(" "),a("p",[s._v("因此，Nacos提供了权重配置来控制访问频率，权重越大则访问频率越高。")]),s._v(" "),a("p",[s._v("我们可以在nacos控制台，找到"),a("code",[s._v("user-service")]),s._v("的实例列表，点击编辑，即可修改权重：")]),s._v(" "),a("p",[s._v("假设我们"),a("code",[s._v("WH")]),s._v("武汉集群中"),a("code",[s._v("8081")]),s._v("服务的机器性能比"),a("code",[s._v("8082")]),s._v("好，我们就可以将"),a("code",[s._v("8081")]),s._v("服务的权重设置的更大，或者将"),a("code",[s._v("8082")]),s._v("服务的权重设置的更小")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221222110246005.png",alt:"image-20221222110246005"}})]),s._v(" "),a("blockquote",[a("p",[s._v("Nacos 控制台可以设置实例的权重值")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0 ~ 1")]),s._v("之间同集群内的多个实例")]),s._v(" "),a("li",[s._v("权重越高被访问的频率越高")]),s._v(" "),a("li",[s._v("权重设置为"),a("code",[s._v("0")]),s._v("则完全不会被访问")])])]),s._v(" "),a("h3",{attrs:{id:"环境隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境隔离"}},[s._v("#")]),s._v(" 环境隔离")]),s._v(" "),a("p",[s._v("Nacos中服务存储和数据存储的最外层都是一个名为"),a("code",[s._v("namespace")]),s._v("的东西，用来做最外层隔离")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230101174255383.png",alt:"image-20230101174255383"}}),s._v(" "),a("p",[s._v("创建一个新的命名空间 "),a("code",[s._v("namespace")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230101174848847.png",alt:"image-20230101174848847"}})]),s._v(" "),a("p",[s._v("保存后会在控制台看到这个命名空间的"),a("code",[s._v("id")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230101175022684.png",alt:"image-20230101175022684"}})]),s._v(" "),a("p",[s._v("接下来修改"),a("code",[s._v("order-service")]),s._v("的"),a("code",[s._v("application.yml")]),s._v("，添加"),a("code",[s._v("namespace")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" orderservice    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos服务地址")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WH  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置集群名称")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 8faf951f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("6fda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4c97"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("baa6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("91792fe4b0f2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名空间")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("重启 "),a("code",[s._v("order-service")]),s._v(" 后，再来查看nacos控制台")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230101175550880.png",alt:"image-20230101175550880"}})]),s._v(" "),a("p",[s._v("此时再次访问 http://localhost:8080/order/105就会出现 "),a("code",[s._v("No instances available for userservice")]),s._v("错误")]),s._v(" "),a("p",[s._v("因为此时访问 "),a("code",[s._v("order-service")]),s._v("，而 "),a("code",[s._v("namespace")]),s._v("不同，会导致找不到"),a("code",[s._v("userservice")]),s._v("，所以控制台会报错。")]),s._v(" "),a("h3",{attrs:{id:"临时实例和非临时实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时实例和非临时实例"}},[s._v("#")]),s._v(" 临时实例和非临时实例")]),s._v(" "),a("p",[s._v("服务注册到Nacos时，可以选择注册为临时或非临时实例，通过下面的配置来设置：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" orderservice    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos服务地址")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WH  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置集群名称")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 8faf951f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("6fda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4c97"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("baa6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("91792fe4b0f2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名空间")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ephemeral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置为非临时实例")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("在设置 "),a("code",[s._v("ephemeral: false")]),s._v("后可能会出现 "),a("code",[s._v("The Raft Group [naming_persistent_service_v2] did not find the Leader node;caused")]),s._v("报错，这里可能是我电脑的网络切换了，之前是学校网络，这里是寝室网络。")]),s._v(" "),a("blockquote",[a("p",[s._v("Nacos 采用 raft 算法来计算 Leader，并且会记录前一次启动的集群地址，所以当我们自己的服务器 IP 改变时(这里特指自己学习时，在本地启动的同学，因为有时候我们的网络环境会变的 … WIFI，所以 IP 地址也经常变化)，会导致 raft 记录的集群地址失效，导致选 Leader 出现问题，只要删除 Nacos 根目录下 data 文件夹下的 protocol 文件夹即可。")])]),s._v(" "),a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("删除 Nacos 根目录下 "),a("code",[s._v("data")]),s._v(" 文件夹下的 "),a("code",[s._v("protocol")]),s._v(" 文件夹, 然后重启 nacos")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20230101201844102.png",alt:"image-20230101201844102"}})]),s._v(" "),a("p",[s._v("临时实例宕机时，会从nacos 的服务列表中剔除，而非临时实例则不会")]),s._v(" "),a("h2",{attrs:{id:"nacos与eureka区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos与eureka区别"}},[s._v("#")]),s._v(" Nacos与eureka区别")]),s._v(" "),a("p",[a("strong",[s._v("相同点")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("都支持服务注册和服务拉取")])]),s._v(" "),a("li",[a("p",[s._v("都支持服务提供者心跳方式做健康检测")])])]),s._v(" "),a("p",[a("strong",[s._v("不同点")])]),s._v(" "),a("ul",[a("li",[s._v("Nacos支持服务端主动检测提供者状态："),a("strong",[s._v("临时实例采 用心跳模式，非临时实例采用主动检测模式")])]),s._v(" "),a("li",[a("strong",[s._v("临时实例心跳不正常会被剔除，非临时实例则不会 被剔除")])]),s._v(" "),a("li",[s._v("Nacos支持服务列表变更的消息推送模式，"),a("strong",[s._v("服务列表更新更及时")])]),s._v(" "),a("li",[s._v("Nacos集群"),a("strong",[s._v("默认采用AP方式")]),s._v("，"),a("strong",[s._v("当集群中存在非临时实例时，采用CP模式")]),s._v("；Eureka采用AP方式")])])])}),[],!1,null,null,null);a.default=n.exports}}]);