(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{308:function(s,e,a){"use strict";a.r(e);var t=a(14),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),e("h2",{attrs:{id:"一、准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[s._v("#")]),s._v(" 一、准备工作")]),s._v(" "),e("h3",{attrs:{id:"系统要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),e("p",[s._v("Docker 支持 64 位版本 CentOS 7/8，并且要求内核版本不低于 3.10。 CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 "),e("code",[s._v("overlay2")]),s._v(" 存储层驱动）无法使用，并且部分功能可能不太稳定。")]),s._v(" "),e("h3",{attrs:{id:"卸载旧版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),e("p",[s._v("旧版本的 Docker 称为 "),e("code",[s._v("docker")]),s._v(" 或者 "),e("code",[s._v("docker-engine")]),s._v("，使用以下命令卸载旧版本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum remove "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-client-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-common "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-latest-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-engine-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-engine "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("用于卸载 Docker 相关组件和软件包")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("docker-client")]),s._v("：Docker 客户端是一个命令行工具，用于与 Docker 服务器进行交互，可以用来管理 Docker 容器、镜像和网络等资源。")]),s._v(" "),e("li",[e("code",[s._v("docker-client-latest")]),s._v("：这是 Docker 客户端的最新版本。")]),s._v(" "),e("li",[e("code",[s._v("docker-common")]),s._v("：这是 Docker 的一些共享文件和配置文件。")]),s._v(" "),e("li",[e("code",[s._v("docker-latest")]),s._v("：这是 Docker 的最新版本。")]),s._v(" "),e("li",[e("code",[s._v("docker-latest-logrotate")]),s._v("：此软件包包含了用于旧版本 Docker 日志轮转的配置文件。")]),s._v(" "),e("li",[e("code",[s._v("docker-logrotate")]),s._v("：此软件包包含了用于 Docker 日志轮转的配置文件。")]),s._v(" "),e("li",[e("code",[s._v("docker-selinux")]),s._v("：这是 Docker 的安全增强模块，用于提供 "),e("code",[s._v("SELinux")]),s._v("支持。")]),s._v(" "),e("li",[e("code",[s._v("docker-engine-selinux")]),s._v("：这是 Docker 引擎的 "),e("code",[s._v("SELinux")]),s._v("策略模块。")]),s._v(" "),e("li",[e("code",[s._v("docker-engine")]),s._v("：这是 Docker 引擎，用于执行容器化应用程序。")]),s._v(" "),e("li",[e("code",[s._v("docker-ce")]),s._v("：这是 Docker 社区版，是社区支持的免费版本。")])]),s._v(" "),e("p",[s._v("通过执行 "),e("code",[s._v("yum remove")]),s._v(" 命令加上上述软件包的名称，可以将它们从系统中移除。请注意，在使用该命令之前，应该确保你真的想要删除这些软件包，并且备份了相关数据，因为删除后将无法恢复。")])]),s._v(" "),e("h2",{attrs:{id:"二、使用-yum-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、使用-yum-安装"}},[s._v("#")]),s._v(" 二、使用 yum 安装")]),s._v(" "),e("p",[s._v("执行以下命令安装依赖包：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndevice-mapper-persistent-data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nlvm2 --skip-broken\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("ul",[e("li",[e("code",[s._v("yum-utils")]),s._v("：yum 辅助工具，提供了一些有用的命令行工具，例如 "),e("code",[s._v("yum-config-manager")]),s._v("、"),e("code",[s._v("package-cleanup")]),s._v(" 和 "),e("code",[s._v("needs-restarting")]),s._v(" 等，使得 yum 的使用更加方便和高效。")]),s._v(" "),e("li",[e("code",[s._v("device-mapper-persistent-data")]),s._v("：设备映射持久化数据，是针对 LVM（逻辑卷管理器）设备映射的一个扩展组件，负责将逻辑卷和物理磁盘之间的映射关系保存到一个持久化数据库中，以便系统重启后可以恢复这些信息。")]),s._v(" "),e("li",[e("code",[s._v("lvm2")]),s._v("：逻辑卷管理器 2，是一个在 Linux 中管理逻辑卷的软件，可以动态地创建、调整、删除逻辑卷，从而实现更好的存储管理。")])]),s._v(" "),e("p",[e("code",[s._v("--skip-broken")]),s._v(" 选项表示如果有其他软件包的依赖项无法解决，则跳过这些软件包的安装。")])]),s._v(" "),e("p",[s._v("鉴于国内网络问题，强烈建议使用国内源。")]),s._v(" "),e("p",[s._v("执行下面的命令添加 "),e("code",[s._v("yum")]),s._v(" 软件源：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置docker镜像源")]),s._v("\nyum-config-manager "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n    \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n\nyum makecache fast\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面是官方源")]),s._v("\nyum-config-manager "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("     \n    https://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("blockquote",[e("p",[s._v("这些命令用于设置 Docker 镜像源为阿里云镜像源，并更新 yum 的缓存。")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),s._v("：这个命令将添加一个 Docker 镜像源的配置文件到 "),e("code",[s._v("/etc/yum.repos.d/")]),s._v(" 目录下，使用的是阿里云镜像源的 URL。")]),s._v(" "),e("li",[e("code",[s._v("sed -i 's/download.docker.com/mirrors.aliyun.com\\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo")]),s._v("：这个命令将修改 "),e("code",[s._v("/etc/yum.repos.d/docker-ce.repo")]),s._v(" 文件中的镜像源地址，将原来的 "),e("code",[s._v("download.docker.com")]),s._v(" 替换为阿里云镜像源 "),e("code",[s._v("mirrors.aliyun.com/docker-ce")]),s._v("。")]),s._v(" "),e("li",[e("code",[s._v("yum makecache fast")]),s._v("：这个命令会重新生成 yum 的缓存，以便使用新的镜像源。")])])]),s._v(" "),e("p",[s._v("然后输入如下命令更新 "),e("code",[s._v("yum")]),s._v(" 软件源缓存，并安装 "),e("code",[s._v("docker-ce")]),s._v("。：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"三、启动docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、启动docker"}},[s._v("#")]),s._v(" 三、启动docker")]),s._v(" "),e("p",[s._v("Docker应用需要用到各种端口，逐一去修改防火墙设置。可以选择直接关闭防火墙！")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nsystemctl stop firewalld\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止开机启动防火墙")]),s._v("\nsystemctl disable firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("通过命令启动docker：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker服务")]),s._v("\n\nsystemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止docker服务")]),s._v("\n\nsystemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),s._v("\n\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动Docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("然后输入命令，可以查看docker版本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"四、镜像加速器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、镜像加速器"}},[s._v("#")]),s._v(" 四、镜像加速器")]),s._v(" "),e("p",[s._v("国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了国内加速器服务，例如：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云加速器(点击管理控制台 -> 登录账号(淘宝账号) -> 右侧镜像工具 -> 镜像加速器 -> 复制加速器地址)"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"}},[s._v("网易云加速器 "),e("code",[s._v("https://hub-mirror.c.163.com")]),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度云加速器 "),e("code",[s._v("https://mirror.baidubce.com")]),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("由于镜像服务可能出现宕机，建议同时配置多个镜像。")]),s._v(" "),e("h3",{attrs:{id:"配置镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像"}},[s._v("#")]),s._v(" 配置镜像")]),s._v(" "),e("p",[s._v("创建或修改 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n    "registry-mirrors": [\n        "https://docker.m.daocloud.io",\n        "https://dockerproxy.com",\n        "https://docker.mirrors.ustc.edu.cn",\n        "https://docker.nju.edu.cn"\n    ]\n}\nEOF')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("Docker Hub "),e("a",{attrs:{href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6#docker-hub-%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F%E5%99%A8%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[s._v("镜像加速器列表"),e("OutboundLink")],1)]),s._v(" "),e("blockquote",[e("p",[s._v("具体命令如下：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("sudo mkdir -p /etc/docker")]),s._v("：创建一个名为 "),e("code",[s._v("/etc/docker")]),s._v(" 的目录，如果该目录不存在的话。这个目录用于存储 Docker 的配置文件。")]),s._v(" "),e("li",[e("code",[s._v("sudo tee /etc/docker/daemon.json <<-'EOF'")]),s._v("：使用 "),e("code",[s._v("tee")]),s._v(" 命令创建或覆盖 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v(" 文件，并将后续输入的内容写入该文件。"),e("code",[s._v("<<-'EOF'")]),s._v(" 表示后续输入作为多行输入直到遇到 "),e("code",[s._v("EOF")]),s._v(" 结束。")]),s._v(" "),e("li",[s._v("多行输入：配置多个镜像加速器的地址。")]),s._v(" "),e("li",[e("code",[s._v("EOF")]),s._v("：结束多行输入。")]),s._v(" "),e("li",[e("code",[s._v("sudo systemctl daemon-reload")]),s._v("：重新加载 systemd 的配置，以便使其知道 Docker 的配置文件已经被修改。")]),s._v(" "),e("li",[e("code",[s._v("sudo systemctl restart docker")]),s._v("：重启 Docker 服务，使新的配置生效。")])])]),s._v(" "),e("h3",{attrs:{id:"检查加速器是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查加速器是否生效"}},[s._v("#")]),s._v(" 检查加速器是否生效")]),s._v(" "),e("p",[s._v("命令行执行 "),e("code",[s._v("docker info")]),s._v("，如果从结果的最下面看到了如下内容，说明配置成功。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v(" Registry Mirrors:\n  https://docker.m.daocloud.io/\n  https://dockerproxy.com/\n  https://docker.mirrors.ustc.edu.cn/\n  https://docker.nju.edu.cn/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);