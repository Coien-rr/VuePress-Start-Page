"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[980],{6856:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-4f4ccb8f",path:"/guide/configuration.html",title:"配置 ⚙️",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置文件",slug:"配置文件",children:[]},{level:2,title:"配置作用域",slug:"配置作用域",children:[{level:3,title:"站点配置",slug:"站点配置",children:[]},{level:3,title:"主题配置",slug:"主题配置",children:[]}]}],filePathRelative:"guide/configuration.md",git:{updatedTime:163479417e4,contributors:[{name:"Coienrr",email:"972054003@qq.com",commits:1}]}}},2637:(e,s,n)=>{n.r(s),n.d(s,{default:()=>h});var a=n(6252);const r=(0,a.uE)('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置 ⚙️</h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录（前面的初始化操作后，这个文件夹可能已经存在了），所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：</p><div class="language-dir ext-dir line-numbers-mode"><pre class="language-dir"><code>├─ docs\n│  ├─ .vuepress\n│  │  └─ config.js\n│  └─ README.md\n├─ .gitignore\n└─ package.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或许这个结构和你目前的不一样，你可能还有&#39;.cache&#39; &#39;.temp&#39;等文件夹，没有关系，你现在只需要关注上述结构中的文件。</p><p>VuePress 站点必要的配置文件是 <code>.vuepress/config.js</code>，它应该导出一个 JavaScript 对象。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress ！&#39;</span><span class="token punctuation">,</span>\n  description<span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span>\n\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>:::提示 我们接下来会把这个配置对象称为<strong>VuePress配置</strong> :::</p><h2 id="配置作用域" tabindex="-1"><a class="header-anchor" href="#配置作用域" aria-hidden="true">#</a> 配置作用域</h2><p>在VuePress配置中有意向 <code>themeConfig</code> 配置项。</p><p>在 <code>themeConfig</code> 外部的配置项属于 <strong>站点配置</strong> ，而在 <code>themeConfig</code> 内部的配置项则属于 <strong>主题配置</strong>。</p><h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h3><p>站点配置的意思是，无论你使用什么主题，这些配置项都可以生效。</p><p>我们知道，每一个站点都应该有它的 <code>lang</code>, <code>title</code> 和 <code>description</code> 等属性，因此 VuePress 内置支持了这些属性的配置。</p>',14),t={class:"custom-container tip"},p=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),c=(0,a.Uk)("前往 "),o={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("官方文档配置参考"),l=(0,a.Uk)(" 查看了解所有站点配置。"),u=(0,a.uE)('<h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p>主题配置将会被 VuePress 主题来处理，所以它取决于你使用的主题是什么。</p><p>如果你没有设置 VuePress 配置的 <code>theme</code> 配置项，则代表使用的是默认主题。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>前往 <a href="%5B../reference/default-theme/config.md%5D(https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)">官方文档 &gt; 默认主题 &gt; 配置参考</a> 查看了解所有默认主题的配置。</p></div><p><strong>不过现在你并不需要了解所有配置！！！</strong></p>',5),d={},h=(0,n(3744).Z)(d,[["render",function(e,s){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("div",t,[p,(0,a._)("p",null,[c,(0,a._)("a",o,[i,(0,a.Wm)(n)]),l])]),u],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{for(const[n,a]of s)e[n]=a;return e}}}]);