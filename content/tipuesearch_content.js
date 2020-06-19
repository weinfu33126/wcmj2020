var tipuesearch = {"pages": [{'title': '網管', 'text': '', 'tags': '', 'url': '網管.html'}, {'title': 'Week 2', 'text': '建網站 \n 此內容管理系統以\xa0 https:..github.com. mdecourse.cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n \n 在 github 建立倉儲, git clone 到近端 \n 參考 https:..github.com. mdecourse.newcms , 加入除了 cmsimde 目錄外的所有內容 \n \n 以 git submodule add\xa0 https:..github.com. mdecourse.cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n \n 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n \n git clone --recurse-submodules\xa0 https:.. github.com.mdecourse.newcms. git \n', 'tags': '', 'url': 'Week 2.html'}, {'title': 'Week\xa03', 'text': 'terminology 專業術語、particular 特別、technical 技術、application 應用、 \n software 軟體、hardware 硬體、firmwarre 韌體、machine language 機器語言、 \n URL:Uniform Resourse Locator\xa0 統一資源定位、command wundow 命令視窗、submodule 子模組 \n 程式令: \n Y:←指y槽 Y:\\\xa0 \xa0←表示Y槽的root根目錄 > 為回應符號(prormptsign)\xa0 \\ 為blackslash 反斜線 dir為顯示目錄內容的指令 cd tmp 表示change directory 到指定的目錄 git為分散式版次管理的指令名稱 git clone表示要使用git對遠端的倉儲進行clone。 \n', 'tags': '', 'url': 'Week\xa03.html'}, {'title': 'Week 4', 'text': 'portable 可攜、Assembly 執行機器速度快但對硬體的相容性差、objective -c \n →開發iphone的前一代程式、compile 編譯、interpret 解譯、unix電腦系統的一種、shell 殼、graphics 圖形、device 物件、interface 介面 \n ps.c++ →加入物件功能的C \n', 'tags': '', 'url': 'Week 4.html'}, {'title': 'Week 5', 'text': '掃墓放假 \n', 'tags': '', 'url': 'Week 5.html'}, {'title': 'Week 6', 'text': '大致講解↓的用法和規格 \n portable obs\xa0→直播軟體 \n meet.google.com →google 的視訊軟體 \n \xa0 \n', 'tags': '', 'url': 'Week 6.html'}, {'title': 'Week 7', 'text': 'abunta→遠端操控電腦、asscii 美國標準交換資訊碼。\xa0 \n tmp>wcmj2020>init.py\xa0 \xa0更改網頁標題 \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '網站push的步驟 \n 1.先把網站切成靜態Home \n 2.git add空格.\xa0 \xa0→意思是跟電腦說現在要讀的東西 \n 3.git comit -m"add w□" →跟電腦說你要讀的東西是什麼 \n 4.git push →推上動態網頁 \n 讓我們實作一次分組，弄 meet.google.com 的實際操 作。好讓下次上課可以線上上課。 \n \xa0 \n School IPV6 : [2001:288:6004:17::53]:3128( 42.17.7.4) \n Port : \xa0 140.130.17.53:3128 \n inter-net == inter - national \n (inter network) \n protocol 協定 \n tcp/ip == transmision control protocol / internet protocol \n transmit 傳輸 \n edition 版本(瞬時) \n Version 版本(較大的修改) \n router 路由器 \n route 路徑 \n remote login 遠端登入 \n client <-> server \n \xa0 \xa0 \xa0 \xa0 \xa0 www \n browser <-> www server \n HTTP \n sttp client <-> sttp server \n 中華電信 DNS Server \n 2001:b000:168::1 \n Type of computer \n 1.Super computer \n 2.Mainframe \n 3.Server \n 4.Personal Computer \n 5.Microcontroler \n 6.Mobile phone \n tele 遠 \n macro 巨大 (比原子atom大) \n', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Week 9', 'text': '電腦硬體架構 \n 主機螢幕周邊 \n 主機: \n 主機板 MB \n 處理器 CPU \n 記憶體 RAM \n 顯示卡 GPU \n 電源供應器 PSU \n 硬碟 HDD,SSD \n 電腦的種類 \n Types Of Computer \n Super Computer 超級電腦 \n MainFrame 伺服器主機 \n Server 伺服器 \n PC 個人電腦 \n Microcontroler 微控制器 \n Mobile Phone 智慧型手機 \n Week 10 \n', 'tags': '', 'url': 'Week 9.html'}, {'title': 'Week 11', 'text': '以 SSH 維護倉儲 \n 由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從\xa0 https://www.chiark.greenend. org.uk/~sgtatham/putty/ \xa0下載一般版, 或從\xa0 http://jakub.kotrla.net/ putty/ \xa0下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C\xa0 "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\ bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink. exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 \xa0 github.com \xa0 session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/ connect.exe -H \xa0 proxy.mde.nfu.edu.tw:3128 \xa0 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty \xa0 github.com \xa0 session setup \n ProxyCommand y:/putty/plink.exe \xa0 github.com \xa0 %h %p \n \xa0 \xa0 \n Host \xa0 github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname \xa0 github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_ mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty \xa0 github.com \xa0 session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_ private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =\xa0 false \n \xa0\xa0\xa0\xa0 bare =\xa0 false \n \xa0\xa0\xa0\xa0 logallrefupdates =\xa0 true \n \xa0\xa0\xa0\xa0 symlinks =\xa0 false \n \xa0\xa0\xa0\xa0 ignorecase =\xa0 true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote\xa0 "origin" ] \n \xa0\xa0\xa0\xa0 #url = \xa0 https://github.com/mdecourse/ wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/ wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/ origin/* \n [branch\xa0 "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule\xa0 "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: // github.com/mdecourse/ cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n Blogger API \n 基本概念: \n 1. 這裡所指的 Blogger API 為:\xa0 https://developers.google. com/blogger/docs/3.0/using \n 2. 將 CMSiMDE 中的 Pelican Blog 內容同步到 Google Blogger 的目的, 在讓網際內容管理系統中的網誌原始資料修改過程具備版次, 而且可同時將網誌出版在 Github Pages 與 Google Blogger 中, 讓網際內容的保存較具有永續性. \n 3. Google Blogger 中的網誌系統各有獨立 ID, 這裡稱為 blog_id, 而網誌中的每一篇文章各有獨立 ID, 這裡稱為 post_id. \n 4. Google Blogger 管理者登入後, 在 Settings - Permissions 項下, 允許 invite more authors, 而且在 Settings - Permissions - Blog admins and Authors 項下, 允許將所邀請共同寫作的 Author 提升為 Admin 管理者. \n 5. Google 的每一個 API 都允許使用者建立以 Oauth2 為基礎的登入使用授權憑證, 配合所啟動的各種 API 程式庫, 一旦啟用並登入後, 可以透過程式方法, 呼叫程式庫功能, 對各種 Google 所提供的服務 (Blogger, Drive, Gmail, Calendar 等) 新增內容. 以 Blogger 而言, 只要使用者被設為某一網誌的共同作者, 即擁有在該網誌新增或編輯自己所發布的網誌文章權限. \n 6. 使用者登入 Google 帳號後, 在\xa0 https://console.developers. google.com \xa0中所建立的 Oauth2 client ID, 可以下載存為 client_secrets.json 檔案. \n 7. client_secrets.json 檔案則可以透過下列程式, 轉換為 credential_token.dat, 使用者針對特定啟用的 API 程式庫, 可以在讀取 credential_token.dat 的情況下, 取得與登入 Gmail 帳號相同的使用授權, 直接在擁有權限的 blog_id 中新增特定的文章 (並以特定的 post_id 辨識). \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language \xa0 python \n # \xa0 https://developers.google.com/ blogger/docs/3.0/using \n # under Mac command + b to execute \n import \xa0 pickle \n import \xa0 os \n from \xa0 googleapiclient. discovery\xa0 import \xa0 build \n from \xa0 google_auth_oauthlib. flow\xa0 import \xa0 InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES\xa0 = \xa0 [ \' https://www. googleapis.com/auth/blogger \' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if \xa0 not \xa0 os.path.exists( \'./../.. /yen_gm_blogger_token.dat\' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow\xa0 = \xa0 InstalledAppFlow. from_client_secrets_file( \'./.. /../yen_gm_blogger_secrets. json\' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials\xa0 = \xa0 flow.run_ local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with\xa0 open ( \'./../../yen_gm_ blogger_token.dat\' ,\xa0 \'wb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump( credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with\xa0 open ( \'./../../yen_gm_ blogger_token.dat\' ,\xa0 \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials\xa0 = \xa0 pickle. load(credentials_dat) \n service\xa0 = \xa0 build( \'blogger\' ,\xa0 \' v3\' , credentials = credentials) \n g.es (service) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week 11.html'}, {'title': 'Week 12', 'text': 'Leo Editor 與 Pelican blog 使用說明影片 \n', 'tags': '', 'url': 'Week 12.html'}, {'title': 'Week 13', 'text': 'Pelican Blog 內容與 Google Blogger 同步 \n W13\xa0 利用 Leo Editor 按鈕處理同步說明影片 \n 利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0google-api-python- client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 other 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n \n \n \n from \xa0 markdown\xa0 import \xa0 markdown \n from \xa0 oauth2client\xa0 import \xa0 clien t \n from \xa0 googleapiclient\xa0 import \xa0 sa mple_tools \n import \xa0 os \n \xa0 \n os.environ[ \'TZ\' ]\xa0 = \xa0 \'Asia/ Taipei\' \n argv\xa0 = \xa0 "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags\xa0 = \xa0 sample_tools.init( \n \xa0\xa0 argv,\xa0 \'blogger\' ,\xa0 \'v3\' , __doc__,\xa0 "./../../client_ secrets.json" , \n \xa0\xa0 scope = \' https://www. googleapis.com/auth/blogger \' ) \n \xa0 \n \xa0 \n def \xa0 get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list\xa0 = \xa0 data.split( "\\ n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title = \xa0 data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category\xa0 = \xa0 data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags\xa0 = \xa0 data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content\xa0 = \xa0 "\\n" .join(data_ list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content\xa0 = \xa0 content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,\xa0 \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return \xa0 title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename\xa0 = \xa0 p.h.split( " " )[ 1 ] \n with\xa0 open (md_filename,\xa0 \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content\xa0 = \xa0 content_file. read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content\xa0 = \xa0 get_cat_tag_content( md_content) \n category\xa0 = \xa0 category_str.split( ":" )[ 1 ] \n tags\xa0 = \xa0 tags_str.split( ":" )[ 1 ]. split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title\xa0 = \xa0 title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content\xa0 = \xa0 markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content\xa0 = \xa0 content.replace( "< h2>" ,\xa0 "<h2><font size=\'4\'>" ) \n content\xa0 = \xa0 content.replace( "</ h2>" ,\xa0 "</font></h2>" ) \n # \xa0 g.es (content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\'). execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs\xa0 = \xa0 service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs\xa0 = \xa0 blogs.listByUser( userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id\xa0 = \xa0 blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts\xa0 = \xa0 service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body\xa0 = \xa0 { \n \xa0\xa0\xa0\xa0 "kind" :\xa0 "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert\xa0 = \xa0 posts.insert( blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc\xa0 = \xa0 insert. execute() \n \xa0\xa0\xa0\xa0 post_id\xa0 = \xa0 posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id\xa0 = \xa0 p. insertAsLastChild()\xa0\xa0 \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題 \n \xa0\xa0\xa0\xa0 to_save_post_id.b\xa0 = \xa0 "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h\xa0 = \xa0 post_ id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es ( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es ( "已經將資料送往 Blogger!" ) \n except (client. AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es ( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n \n \n \n from \xa0 markdown\xa0 import \xa0 markdown \n from \xa0 oauth2client\xa0 import \xa0 clien t \n from \xa0 googleapiclient\xa0 import \xa0 sa mple_tools \n import \xa0 os \n \xa0 \n os.environ[ \'TZ\' ]\xa0 = \xa0 \'Asia/ Taipei\' \n argv\xa0 = \xa0 "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags\xa0 = \xa0 sample_tools.init( \n \xa0\xa0 argv,\xa0 \'blogger\' ,\xa0 \'v3\' , __doc__,\xa0 "./../../client_ secrets.json" , \n \xa0\xa0 scope = \' https://www. googleapis.com/auth/blogger \' ) \n \xa0 \n \xa0 \n def \xa0 get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list\xa0 = \xa0 data.split( "\\ n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title = \xa0 data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category\xa0 = \xa0 data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags\xa0 = \xa0 data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content\xa0 = \xa0 "\\n" .join(data_ list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content\xa0 = \xa0 content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,\xa0 \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return \xa0 title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename\xa0 = \xa0 p.h.split( " " )[ 1 ] \n with\xa0 open (md_filename,\xa0 \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content\xa0 = \xa0 content_file. read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content\xa0 = \xa0 get_cat_tag_content( md_content) \n category\xa0 = \xa0 category_str.split( ":" )[ 1 ] \n tags\xa0 = \xa0 tags_str.split( ":" )[ 1 ]. split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title\xa0 = \xa0 title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content\xa0 = \xa0 markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content\xa0 = \xa0 content.replace( "< h2>" ,\xa0 "<h2><font size=\'4\'>" ) \n content\xa0 = \xa0 content.replace( "</ h2>" ,\xa0 "</font></h2>" ) \n # \xa0 g.es (content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs\xa0 = \xa0 service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs\xa0 = \xa0 blogs.listByUser( userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id\xa0 = \xa0 blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline\xa0 = \xa0 p. getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id\xa0 = \xa0 postid_outline.h \n \xa0\xa0\xa0\xa0 posts\xa0 = \xa0 service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body\xa0 = \xa0 { \n \xa0\xa0\xa0\xa0 "kind" :\xa0 "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update\xa0 = \xa0 posts.update( blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc\xa0 = \xa0 update. execute() \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 g.es ( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es ( "已經將更新資料送往 Blogger!" ) \n except (client. AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es ( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week 13.html'}, {'title': 'Week 14', 'text': '從\xa0 https://2019wcm.blogspot. com/2019/03/posted-via-python. html \xa0取得Google Blogger Python API 程式, 修改後執行, 測試是否可以讀取設定的 client_secrets.json, 在各自的 Blogger ID 與 Post ID 中新增或修改網誌文章. \n 以 Blogger Python API 程式修改文章的教學影片 \xa0(for @gm users only) \n 在leo editer 建立add_to_blogger 及edit_to_blogger 兩個按鈕 \n 開啟blogger API服務 \n 建立一個Desktop client 類型的憑證 \n 並將其儲存成client_secrets.json 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n 即可使用add_to_blogger按鈕將網誌新增至google blogger \n 使用edit_to_blogger按鈕將更新後的網誌同步至google blogger \n', 'tags': '', 'url': 'Week 14.html'}, {'title': 'Week 15', 'text': '做完w14以前上課內容並做完w14前的網誌 \n', 'tags': '', 'url': 'Week 15.html'}, {'title': 'About', 'text': 'http://eng.kmol.info \xa0 只能在機械設計工程系的 IPv6 網段中擷取. \n 系上匿名討論區:\xa0 https://eng.kmol.info:5443/kmol2020/login?g=/kmol2020/forum&anon \n 網上公開論壇: \xa0 https://groups.google.com/a/mde.nfu.edu.tw/forum/#!forum/talk \n 建立這個群組的主要目的: \xa0\xa0\xa0 1. 透過論壇討論強化學長制的推動 \xa0\xa0\xa0 2. 透過論壇討論落實理論與實作結合學習 \xa0\xa0\xa0 3. 讓職場中的學長姊有機會提供經驗談 \xa0\xa0\xa0 4. 配合行政單位有效推動各項政策 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Week 16-18', 'text': '完成這學期應做的並整理這學期所學到的東西 \n', 'tags': '', 'url': 'Week 16-18.html'}, {'title': '爪與尾的印記', 'text': '爪 \n 在力爭上游時不可或缺 \n 而 \n 尾 \n 則是因應衝擊, 趨吉避險的重要關鍵. \n 在此, 我們即將創造出一個屬於新時代的圖騰與印記, \n \n \n 準備要拿來當系學會資訊組 logo 的圖像, 希望進學校時排在尾巴的準黑手們, 也能夠不斷努力, 日日進步, 持續提升, 有朝一日在產官學界捲動屬於自己的新浪潮...... \n \n 拔 除一切業障根本往生淨土神咒（往生咒）： \n 「南無阿彌多婆夜 哆他伽多夜 哆地夜他 阿彌利都婆毗 阿彌利哆 悉耽婆毗 阿彌利哆 毗迦蘭帝 阿彌利哆 毗迦蘭多 伽彌膩 伽伽那 枳多迦利 娑婆訶。」（二十一遍） \n 六字大明咒： \n 「嗡 瑪尼 悲美 吽 賀利」（至少108遍、建議1080遍以上，越多越好。） \n 心得 \n 經過這半年的坎坷，終於修成正果，學習到了很多工程師應該具備的知識和素養其中令我最印象深刻的是嚴老師不斷叮嚀的:每天花8個小時給學校、不要一直沉迷在game裡面。謝謝老師這學期的用心的教導！！！ \n \n', 'tags': '', 'url': '爪與尾的印記.html'}]};