i
EGE ÜNİVERSİTESİ MÜHENDİSLİK FAKÜLTESİ
LİSANS TEZİ
SAĞLIKLI YAŞAM İZLEME PLATFORMU
Efe Ali ÖZKESİCİ
Gökhan ÖNCÜL
Sefer KARA
Tez Danışmanı: Dr. Öğr. Üyesi Emine SEZER
Bilgisayar Mühendisliği Anabilim Dalı
Sunuş Tarihi: Haziran 2019
Bornova-İZMİR
2019
ii
ÖZET
SAĞLIKLI YAŞAM İZLEME PLATFORMU
Özkesici, Efe Ali
Kara, Sefer
Öncül, Gökhan
Bilgisayar Mühendisliği Bölümü, Ege Üniversitesi 35100 Bornova İzmir
Dr. Öğr. Üyesi Emine Sezer
emine.sezer@ege.edu.tr
Sağlık alanı, farklı kurumların ve kişilerin hizmet verdiği aynı
zamanda da hizmet aldığı büyük ve karmaşık bir yapıya sahiptir. Bu
karmaşık yapının yanı sıra hem bireylerin evde kullandıkları basit
medikal cihazlar nedeniyle hem de sağlık kurumlarında verilen
hizmetler nedeni ile oldukça büyük sağlık verisi üretilmektedir. Bu
sağlık verilerinin güvenli ve etkili bir şekilde tutulması ve incelenmesi
için Sağlıklı Yaşam İzleme Platformu gibi sistemler bu gibi
durumlarda kullanılmaktadır. Sağlıklı Yaşam İzleme Platformu
sayesinde yaşlı bireylerin günlük sağlık durumları takip edilir ve
doktorlar oluşan anromal sağlık verilerine göre yaşlı bireye uygun
önlem alır. Ayrıca Sağlıklı Yaşam İzleme Platformu yaşlı birey ve
doktora bu sistem üzerinde iletişim kurma imkanı sağlar. Bu sistem,
nabız, adım sayısı, tansiyon gibi verileri içermektedir. Bu sistem,
kullanıcıların sağlık verilerini onlarda takılı olan akıllı saatler
üzerinder alınır. Ayrıca bu sistem Android, IOS gibi platformlarda
kullanılabildiği gibi web tarayıcılarından da bu sisteme erişim
sağlanabilir. Bu sistem, masaüstü uygulaması değildir, yalnızca
internet bağlantısının bulunduğu ortamlarda çalışabilmektedir.
Anahtar Kelimeler: Nesnelerin İnterneti, Sağlık Bilgi Sistemleri,
Kişiselleştirme, Kişisel Sağlık Bilgileri, Makineden Makineye İletişim
iii
ABSTRACT
Healthy Living Monitoring Platform
Özkesici, Efe Ali
Kara, Sefer
Öncül, Gökhan
Bachelor in Computer Eng, Ege University 35100 Bornova İzmir
Supervisor:Dr. Öğr. Üyesi Emine Sezer
emine.sezer@ege.edu.tr
The area of health has a large and complex structure where different institutions
and individuals serve and at the same time they serve. In addition to this complex
structure, very large health data is produced due to simple medical devices used
by individuals at home and services provided in health institutions. Systems such
as the Healthy Life Monitoring Platform are used in such situations in order to
ensure that these health data are kept and examined in a safe and effective manner.
Thanks to the Healthy Life Monitoring Platform, old people‘s daily health
conditions are monitored and physicians take appropriate precautions according to
the anomal health data. In addition, Healthy Life Monitoring Platform provides
the opportunity to communicate on this system to old people and doctor. This
system includes data such as pulse, step count, blood pressure. This system is used
to retrieve users' health data on their smart watches. In addition, this system can
be used on platforms such as Android, IOS, or web browsers. This system is not a
desktop application, it can only work in environments with internet connection.
Keywords: Internet of Things, Health Information Systems,
Personalization, Personal Health Information, Communication of Machine
to Machine
iv
TEŞEKKÜR
Bu çalışmanın gerçekleştirilmesinde, bir yıl boyunca değerli bilgilerini bizlerle
paylaşan saygıdeğer danışman hocamız Dr. Öğr. Üyesi Emine Sezer’e sonsuz
teşekkürlerimizi sunarız.
v
İÇİNDEKİLER
Sayfa
Özet .......................................................................................................................... ii
Abstract ................................................................................................................... iii
Teşekkür ................................................................................................................ iv
İçindekiler ................................................................................................................ v
Şekiller Dizini ....................................................................................................... viii
Kısaltmalar Dizini ................................................................................................... x
1.Giriş ..................................................................................................................... 1
2. Literatür Çalışması .............................................................................................. 4
3. Yöntem ve Çalışmalar ......................................................................................... 7
3.1 Önceki Çalışmalar ............................................................................................. 7
3.1.1. Internet of Things(IoT) – Nesnelerin İnterneti .............................................. 7
3.1.2. React.Js .......................................................................................................... 8
3.1.3. MongeDb ....................................................................................................... 8
3.1.4. NodeJs ........................................................................................................... 9
3.2. Tamamlanan Çalışmalar ................................................................................. 10
3.2.1. Samsung GearFit2 ....................................................................................... 11
3.2.2. Asp.Net Core Mvc ....................................................................................... 11
3.2.3. Bootstrap 4 ................................................................................................... 12
3.2.4.React-Native ................................................................................................. 12
3.2.5.Android Studio Ortamı ................................................................................. 13
3.2.6. Firebase ........................................................................................................ 13
vi
İÇİNDEKİLER(devam)
Sayfa
3.2.7.Github ........................................................................................................... 15
3.2.8.Javascript ...................................................................................................... 15
4. Sağlıklı Yaşam İzleme Platformu ...................................................................... 16
4.1 Analiz ............................................................................................................... 16
4.1.1. Gereksinim Analizi ...................................................................................... 16
4.1.2. Sistem Paydaşları ......................................................................................... 17
4.1.3. Kullanım Senaryoları ................................................................................... 18
4.2 Tasarım ............................................................................................................ 23
4.2.1. Kullanıcı Senaryo Diyagramı ...................................................................... 23
4.2.2 Sistem Sıra Diyagramları ............................................................................. 24
4.2.3 Alan Modeli (Domain Model) ...................................................................... 29
4.2.4 Prototip Geliştirme ....................................................................................... 29
5. Sağlıklı Yaşam İzleme Platformu Geliştirilmesi ............................................... 31
5.1. Arka-Yüz Geliştirilmesi.................................................................................. 31
5.2. Ön-Yüz Geliştirilmesi ..................................................................................... 34
5.2.1. Mobil Arayüz Tasarımı ............................................................................... 34
5.2.1.1 Açılış Sayfası ............................................................................................. 34
5.2.1.2. Giriş Yap .................................................................................................. 36
5.2.1.3. Kayıt Ol .................................................................................................... 37
5.2.1.4. Şifremi Unuttum ....................................................................................... 38
5.2.1.5. Ana Ekran ................................................................................................. 39
5.2.1.6. Adım Görüntüle ........................................................................................ 40
vii
İÇİNDEKİLER(devam)
Sayfa
5.2.1.7. Nabız Görüntüle ....................................................................................... 41
5.2.1.8. Tansiyon Görüntüle .................................................................................. 42
5.2.1.9. Profil Sayfası ............................................................................................ 43
5.2.1.10. Mesajlaşma Sayfası ................................................................................ 44
5.2.2. Web Arayüz Tasarımı .................................................................................. 45
5.2.2.1 Açılış Sayfası ............................................................................................. 45
5.2.2.2. Giriş Yap .................................................................................................. 46
5.2.2.3. Nedir Sayfası ............................................................................................ 47
5.2.2.4. Sistem Hakkında Sayfası .......................................................................... 49
5.2.2.5. Veri Analizi Sayfası ................................................................................. 50
5.2.2.6. Grafiksel Gösterim Sayfası ....................................................................... 51
5.2.2.7. Kayıt Ol .................................................................................................... 52
5.2.2.8. Personel Girişi .......................................................................................... 53
5.2.2.9. Doktor Profil Sayfası ................................................................................ 54
5.2.2.10. Yardım .................................................................................................... 56
6. Sonuç ................................................................................................................. 57
7. Gelecek Çalışmalar ............................................................................................ 58
8. Kaynakça ........................................................................................................... 59
viii
ŞEKİLLER DİZİNİ
Şekil Sayfa
3.1. React.Js ........................................................................................................ 8
3.2. MongoDb Logosu ........................................................................................ 8
3.3. MongoDb Belgesi Örneği ............................................................................ 9
3.4. Node.Js Logosu ........................................................................................... 9
3.5. Samsung GearFit2 Pro ............................................................................... 11
3.6. Asp.Net Core ............................................................................................. 11
3.7. Bootstrap .................................................................................................... 12
3.8. React-Native ............................................................................................... 12
3.9. Android Studio Logosu ............................................................................. 13
3.10. Firebase Servisleri ..................................................................................... 14
3.11. Firebase Notification Servisi ..................................................................... 14
3.12. Github Logosu ........................................................................................... 15
3.13. Javascript Logosu ...................................................................................... 15
4.1. Paydaş Şeması ........................................................................................... 18
4.2. Sistem Use Case Diagram .......................................................................... 23
4.3. Kayıt Ol SSD’si .......................................................................................... 24
4.4. Giriş Yap SSD’si ........................................................................................ 25
4.5. Verileri Güncelle SSD’si ............................................................................ 26
4.6. Yaşlı Birey Ekle SSD’si ............................................................................. 27
4.7. Mesajlaşma SSD’si ..................................................................................... 28
4.8. Domain Model ............................................................................................ 29
4.9. google-services.json.................................................................................... 30
5.1. Authorization ve Messaging Servisleri ........................................................ 31
5.2. Core MVC Controller .................................................................................. 32
5.3. Firebase Real-Time Veritabanı Yapısı ........................................................ 33
5.4. Mobil İlk Açılış Sayfası ............................................................................... 34
5.5. Mobil İkinci Açılış Sayfası .......................................................................... 35
ix
ŞEKİLLER DİZİNİ(devam)
Şekil Sayfa
5.6. Mobil Üçüncü Açılış Sayfası .................................................................... 35
5.7. Mobil Giriş Yap Sayfası ........................................................................... 36
5.8. Mobil Kayıt Ol Sayfası ............................................................................. 37
5.9. Mobil Şifremi Unuttum Sayfası ............................................................... 38
5.10. Mobil Ana Ekran Sayfası.......................................................................... 39
5.11. Adım Görüntüle Sayfası ........................................................................... 40
5.12. Nabız Görüntüle Sayfası ........................................................................... 41
5.13. Tansiyon Görüntüle Sayfası ..................................................................... 42
5.14. Mobil Profil Sayfası .................................................................................. 43
5.15. Mobil Mesajlaşma Sayfası ........................................................................ 44
5.16. Web Açılış Sayfası ................................................................................... 45
5.17. Web Giriş Yap Paneli ............................................................................... 46
5.18. İlk Resim .................................................................................................. 47
5.19. İkinci Resim ............................................................................................. 47
5.20. Üçüncü Resim .......................................................................................... 48
5.21. Sağlıklı Yaşam İzleme Platformu’nda Neler Var? .................................. 48
5.22. Sistem Hakkında Sayfası 1 ...................................................................... 49
5.23. Sistem Hakkında Sayfası 2 ...................................................................... 49
5.24. Veri Analizi Sayfası ................................................................................. 50
5.25. Grafiksel Gösterim Sayfası ...................................................................... 51
5.26. Web Kayıt Ol Sayfası .............................................................................. 52
5.27. Web Personel Giriş Sayfası ...................................................................... 53
5.28. Doktor Profil Sayfası ................................................................................ 54
5.29. Birey Görüntüle Penceresi ........................................................................ 55
5.30. Doktor Mesai Penceresi ............................................................................ 55
5.31. Son Aktivite Penceresi .............................................................................. 56
5.32. Yardım Sayfası ......................................................................................... 56
x
KISALTMALAR DİZİNİ
Kısaltmalar
IoT Internet of Things
Wi-Fi Wireless Fidelity
NoSql Not Only Structured Query Language
M2M Machine to Machine
JSON JavaScript Object Notation
npm Node Package Manager
APK Android Package
Db Database
SSD System Sequence Diagram
MVC Model-View-Controller
IOS Iphone/Ipad Operationg System
e-mail Electroinc mail
API Application Programming Interface
HTML Hyper Text Markup Language
CSS Cascading Style Sheets
Js JavaScript
xi
1
1. GİRİŞ
Bugünlerde sıklıkla duyduğumuz ve ileride daha da fazla duyacağımız bir
kavram Internet of Things (IoT) ilk kez 1999 yılında Kevin Ashton tarafından
bir şirket için hazırladığı sunumda kullanılan bu kavram gelişen teknoloji ile
birlikte, ortaya çıktığı günkü halinden daha geniş bir vizyona erişti [1]. Bu
sistem fiziksel nesnelerin internete bağlanması, uzaktan algılayıcı verisine
erişmeyi ve uzaktan fiziksel dünyayı kontrol etmeyi mümkün kılmaktadı [2].
Sağlık alanında nesnelerin interneti ile ilgili ilk kullanım örnekler uzaktan
izleme, akıllı sensörler ve tıbbi cihaz entegrasyonu gibi uygulamalarda
görülmeye başlanmıştır. Sadece hastaları güvende ve sağlıklı tutmanın değil,
aynı zamanda sağlık personelinin bakım verme şeklini iyileştirme
potansiyeline sahip olması da nesnelerin internetinin sağlık alanında
kullanımına teşvik edici bir etkendir. Sağlık alanındaki IoT destekli cihazlar
ile hastaların doktorlarıyla daha çok iletişime girerek daha fazla bilgi akışını
sağlamakta bu da hasta-doktor ilişkisinin daha fazla olmasını sağlayarak hasta
katılımını ve memnuniyetini arttırmaktadır. Ancak, sağlık bilgi sistemlerinde
bu uygulamaların etkin bir şekilde gerçekleştirilebilmesi için bazı
problemlerin çözülmesi gerekmektedir. Bağlanan cihazların sayısı ve
topladıkları yüksek miktarda veri, Sağlık Bilgi Teknolojileri bölümünün
yönetmesi gereken bir zorluk ama aynı zamanda oldukça önemli bir süreç
olarak öne çıkmaktadır [3]. Ayrıca, bu büyük miktardaki veriler hastaların
anlık takiplerini zorlaştırabilmekte ve buna bağlı olarak da sağlık personelinin
bu takipleri izlemesinde güçlük çekmelerine yol açabilmektedir.
Bu çalışmada sağlık alanı için son yıllarda kullanımı hızla artan IoT
teknolojilerinden yola çıkarak düzenli tansiyon ölçümü yapılması gereken
yaşlı bireylerin sağlık personelinin belirlediği aralıklarla tansiyonlarının
ölçülmesi, günlük adım sayısı görüntüleme, nabız ölçümü, ölçülen verilerin
bulutta saklanması, kritik durumlarda bilgilendirme yapılabilmesi, yaşlı
bireylerin ve doktorların gerekli analizleri görüntüleyebilmesi için sağlık
alanına özel bir nesnelerin interneti platformunun gerçekleştirimi
hedeflenmiştir.
Mobil uygulamalar, akıllı cihazlar, biyosensörler, giyilebilir cihazlar, ev
sanal asistanları, veri analizleri gibi birçok teknoloji sağlık hizmetleri alanında
yeni bir dönemi başlatıyor. Bu yazımızda, sağlık hizmetlerinin dijitalleşmesini
gösteren bazı IoT çözümlerini derledik.
2
1.1 Sensörler ve Akıllı Cihazlar
Sensörlerin mobil cihazlara bağlanması ile birlikte, çeşitli parametreler
doğru bir şekilde okunup, yorumlanarak tıp merkezlerine iletilebiliyor. Grand
View Research Inc. tarafından hazırlanan bir rapora göre, sağlık sektöründe
IoT'nin 2022 yılına kadar yaklaşık 409,9 milyar dolarlık hacme ulaşması
bekleniyor. Technavio'nun pazar araştırması analistleri, sağlık sektöründeki
küresel IoT pazarının 2020'ye kadar yaklaşık yüzde 37'lik bir CAGR (Bileşik
Yıllık Büyüme) göstermesini bekliyor.
Şu anda, bronşiyal astımı tedavi etmek için akıllı inhaler, diyabet mellitus
(şeker hastalığı) için şırınga kalem ve akıllı haplar geliştirilme piyasaya
sürülme aşamasında.
1.2 Biyosensörler
Şu anda biyosensörler, sağlıkta dijital dönüşümünün en önemli
uygulamaları arasında yer alıyor. Tıbbi bir bilgiyi kablosuz ağ üzerinden
mobil ve web uygulamalarına aktaran çok çeşitli biyosensörler mevcut. Bu
sayede sağlık hizmeti sağlayıcıları, hastane duvarlarının dışında da hasta
tedavisini kontrol etme ve sağlık durumunu izleme imkanına sahip oluyor.
Biyosensörler ayrıca, tüm fiziksel aktiviteleri, uyku ve genel sağlık
durumu hakkında verileri toplayarak günlük yaşamlarında kullanıcılara
yardımcı olabiliyor. Örneğin; kullanıcıların glikoz seviyelerini, arter basıncını,
kalp atış hızını, oksijen seviyesini, nabzını, kan alkol düzeyini ve uyarı yapan
kullanıcıları ölçmelerine olanak sağlıyor.
Biyosensör uygulamalarındaki en önemli özellik ise bu verilerin gerçek
zamanlı sağlanabiliyor olması. Bu sayede sağlık hizmeti sağlayıcıları, hasta
durumunu anlık olarak takip edebilmekteler.
1.3 Hasta Sağlığı Portalları
Hastalar için geliştirilmiş online hizmetler, hasta memnuniyetini
sağlamanın yanı sıra hastane çalışanlarına da büyük kolaylıklar sağlıyor.
Örneğin; hastaların doktorlara ve uzmanlara çevrimiçi olarak danışması,
test ve laboratuvar sonuçlarını kontrol etmesi, ödemeleri kolayca yapması,
diğer hastalarla iletişim kurabilmesi, sağlıklı yaşam için tavsiyeler alabilmeleri
ve randevuların online olması, hastaların hizmetlerden daha kolay
yararlanmasını sağlıyor. Ayrıca bu sayede, rutin işlemlerde hastane
çalışanlarına düşen görev yükü de azalıyor.
3
Tez raporunun organizasyonu şu şekildedir: ikinci bölümde IoT ve sağlık
alanında geliştirilmiş uygulamalar, üçüncü bölümde çalışmamız kapsamında
araştırdığımız ve kullanımına karar verdiğimiz teknolojiler ve yöntemlere yer
verilmektedir. Dördüncü bölümde geliştirdiğimiz platformun analiz ve tasarım
süreci anlatılmaktadır. Beşinci bölümde önerdiğimiz platformun uygulama süreci
ve çalışma süreçlerine yer verilmektedir. Altıncı bölümde bu tez çalışması için
elde edilen sonuçlara ve son olarak da yedinci bölümde gelecek çalışmalara
değinilmektedir.
4
2. LİTERATÜR ÇALIŞMASI
Dünyada ve ülkemizde ölümle sonuçlanan vakaların başında kardiyak
aciller bir başka deyişle kalp ile ilgili acil durumlar yer almaktadır. Kardiyak
acillerde zamanında ve etkin acil bakım uygulayabilmek çok önemlidir. Kalp
hastalıkları en kısa sürede tanımlanabilmeli, tedaviye yönelik çalışmalar
başlatılmalı ve en yakın sağlık merkezi ile koordinasyon sağlanıp hastanın en
yakın sağlık kurumuna transferi yapılmalıdır. Bu çalışmada kalp rahatsızlığı
olan kişilerin uzaktan takibi için hasta, doktor ve sağlık merkezini kapsayan
akıllı bir bilgi sistemi oluşturulması hedeflenmiş ve oluşabilecek herhangi bir
anomali durumunda hasta, yakınları, doktor ve ilgili sağlık merkezlerinin
erken uyarı amaçlı bilgilendirilmesi sağlanmıştır.
Bu kapsamda kalp hastalıklarının tanımlanması sürecinde yoğun kullanılan
parametrelerin ölçümü için donanımsal bileşenler EKG cihazı, nabız ölçer ve
tansiyon ölçer gibi cihazlardır [4]. Sağlıklı Yaşam İzleme Platformu
çalışmasında; nabız ölçer cihazı donanımsal ve yazılımsal olarak
gerçekleştirilmiştir. Yaşlı birey kayıtları için esneklik, ölçeklenebilirlik,
performans/fiyat avantajları yanında mobil ve web ortamını tek merkezden
kullanmak ve yönetmek için avantajlar sağlayan merkezi bulut sistemi
kullanılmıştır. Yaşlı bireyden elde edilen nabız verileri bulut sistemine yaşlı
bireyin geçmiş kayıtları olarak kayıt edilmiş ve analiz edilmiştir. Bu analizler
sonucunda acil durumların otomatik olarak sistem tarafından tespiti ve ilgili
yerlere bildirimi gerçekleştirilmiştir.
IoT’ nin sağlık alanındaki avantajlarından birisi de uzaktan sağlık ve
izleme hizmetidir. IoT kullanımı ile bazı durumlarda, yaşlı bireylerin acil
servisi veya hastaneyi bile ziyaret etmek zorunda değildir. Nesnelerin İnterneti
destekli sağlık hizmetlerinin en açık ve popüler uygulamalarından
biri, uzaktan sağlık izlemedir .Bu hizmet, maliyetleri en aza indirgemek ve
hastane ziyaretlerine duyulan ihtiyacı ortadan kaldırmakla kalmaz, aynı
zamanda yaşlı bireyleri, hastaneye yapılacak seyahatin verdiği rahatsızlıktan
da kurtararak yaşlı bireyin yaşam kalitesini artırmaya yardımcı olur.Bir yaşlı
bireyin yürümesi ve seyahat etmesi zorluk oluşturuyorsa veya toplu taşıma
araçlarına bağlıysa, bu kadar basit bir kolaylık bile hastalar açısından çok
büyük fark yaratabilir[5].
2.1) Benzer Uygulamalar
-Samsung Health
Samsung Health, Samsung şirketinin kullanıcılarının fitness, spor
ve sağlık aktivitelerinin takibini yapmalarını sağlayan bir uygulamadır. Bu
uygulama sadece Samsung telefonlara özgü bir uygulama değildir.
5
-Google Fit
Sağlıklı kalmak için ne kadar veya ne tür bir aktiviteye ihtiyacınız
olduğunu bilmek zor. Bu nedenle Google Fit, sağlığınızı iyileştirmenize
yardımcı olabilecek iki yeni aktivite hedefi sunmak için bir uygulama
geliştirdi.
-Groupama Healpy
Groupama Healpy’de “Lıkır Lıkır Sağlık” bölümünde boy, kilo
vb bilgilerin girişiyle günlük içilmesi gereken su miktarı ve zamanlaması
sunuluyor. Gün içinde güncellenerek hedef su tüketimi takip edilebiliyor.
Uygulamadaki “Adım Adım Sağlık” da atılan adımları sayarak
kullanıcıları hareket etmeye teşvik ediyor. Bunun için IOS Sağlık veya
Android Google Fit izinlerini vermek yeterli. Atılan adımlara göre
kazanılan ve arkadaşlarla paylaşılabilen rozetler de motivasyonu artırmak
için tasarlandı [6].
-Argus
Kalp ritmini ölçebilme, uyku performansını görüntüleyebilme ve
gıdaların barkodlarını okutarak besin değerlerini öğrenebilme gibi
özellikler yer alır. Bu uygulama ile tüm aktivitelerinizi, öğünlerinizi
görüntüleyebilir ve destekleyebilirsiniz.
-Patient IO
Dijital doktor uygulaması ile kişisel hatırlatıcı bildirimlerde
bulunuyor. Kullanıcı ve doktor bildirimleri, ziyaret tarihleri, zamanı gelen
işlemciler için bildirimlere yer veriliyor.
Sağlıklı Yaşam İzleme Platformu projesinin, yukarıda belirtilen uygulamalardan
farklarına değinecek olursak;
-Yaşlı bireylerin bilgilerinin akıllı saat yardımıyla sistem üzerinden
doğrudan doktora aktarılması amaçlanmıştır.
-Yaşlı bireyler, doktorlar ile sistem üzerinden direkt mesajlaşma olanağına
sahiptir.
-Doktorlar ilgilendikleri yaşlı bireyleri görüntüleyebilmektedir.
6
-Sağlıklı Yaşam İzleme Platformu projesinin web arayüzü de
bulunmaktadır.
-Anormal koşullarda (Örneğin kişinin hedeflediğinden az adım atması)
doktor, yaşlı bireye sistem üzerinden bildirim gönderebilmektedir.
7
3. YÖNTEM VE ÇALIŞMALAR
Tez çalışmasının tüm süreçlerinde çevik(agile) metot kullanılmıştır. Çevik
metot tercih edilmesindeki en büyük neden, tez konusunun kavranması ve analizi
sürecinde düşünülen gereksinimlerin hızlı bir şekilde değişmesi ve detaylı
tasarımın olanaksız olduğunun görülmesidir.
Çevik yazılım geliştirme metodu, tekrarlanan yazılım geliştirme metodu
taban alınarak geliştirilmiş, sık aralıklarla parça parça yazılım teslimatını ve
değişikliği teşvik eden bir yazılım geliştirme metodolojisidir. Çevik geliştirme;
değişimi, takım içerisindeki iletişimin arttırılmasını, parça parça yazılım
teslimatını, test odaklı yazılım geliştirilmesini ve uyumlu planlamayı teşvik eder
[7].
3.1. Önceki Çalışmalar
İlk tasarlanan sistemde web arayüzü Javascript kütüphanesi olan React.Js
ile tasarlanması denenmiştir. React.JS component based bir açık kaynak
kütüphane olduğundan dolayı Real-Time (gerçek zamanlı) sistemlerde oldukça
hızlı çalışır.
Veri tabanı tarafında doküman tabanlı çalışan NoSql veri tabanı MongoDb
seçilmiştir. IoT cihazdan sunucuya gelen Json formatındaki veriler, nesneler
şeklinde veri tabanına eklenmiştir.
Sistem ile veri tabanı arasındaki iletişimi sağlamak için servis yazılımında
Node.js denenmiştir.
Alt başlıklarda bu aşamada kullanılan teknolojiler anlatılmıştır.
3.1.1. Internet of Things (IoT) – Nesnelerin İnterneti
Nesnelerin İnterneti (IoT), çevremizdeki fiziksel olayları kontrol etmemizi
ve takip ederek analiz etmemizi sağlayan cihaz, yazılım ve erişim hizmetlerini
kapsayan bir iletişim ağıdır. Bu fiziksel olaylar, üretim süreçleri, enerji şebekeleri,
hasta takip sistemleri, geri dönüşüm süreçleri, taşımacılık, akıllı binalar, alışveriş
vs. gibi alanlardaki ölçülebilir büyüklükler veya kontrol sistemleri olabilir.
8
3.1.2. React.Js
React, Facebook tarafından üretilmiş, kullanıcı ara yüzleri oluşturmak için
kullanılan bir Javascript kütüphanesidir. React bir framework değil, bir
kütüphanedir. Bunun nedeni, React sadece view (görünüm/sayfa) katmanına
odaklanır. Bunun dışında herhangi bir mimari katman ile bir ilgisi yoktur.
React’in tek görevi; ara yüzdeki bütün işlemleri en mantıklı, en kolay, en
maliyetsiz, en performanslı yolla yapıyor olmaktır. React’ı biraz daha teknik
açıdan tanımlarsak; React, component (element) bazlı, Virtual DOM (Sanal
DOM) mimarisini kullanan bir frontend kütüphanesidir [8]. Şekil 3.1.’ da React.Js
logosu gösterilmiştir.
Şekil 3. 1. React.js
3.1.3. MongoDb
MongoDb, yüksek performans, yüksek kullanılabilirlik ve otomatik
ölçeklendirme sağlayan açık kaynaklı bir belge veri tabanıdır. MongoDb'deki bir
kayıt, alan ve değer çiftlerinden oluşan bir veri yapısı olan bir belgedir. MongoDb
belgeleri JSON nesnelerine benzemektedir. Alanların değerleri, diğer belgeleri,
dizileri ve belge dizilerini içerebilmektedir [9]. Şekil 3.2.’de MongoDb logosu
gösterilmiştir.
Şekil 3. 2. MongoDb Logosu
9
Belgeleri kullanmanın avantajları şunlardır: Belgeler (diğer bir deyişle,
nesneler) pek çok programlama dilinde yerel veri türlerine karşılık gelir. İç içe
belgeler ve diziler, uzun süren join sorgularını kısaltmaktadır. Ayrıca bu yapı elde
edilen bilginin gösterimi açısından ontolojilere oldukça benzemektedir. Şekil
3.3.’de MongoDb belgesi örneği gösterilmiştir.
Şekil 3. 3. MongoDb Belgesi Örneği
Çalışma kapsamında kullanıcıdan alınan veriler Orion ile işlenip
formatlandıktan sonra MongoDb’ye eklenecektir. Aynı şekilde kullanıcıya
sunulmak istendiğinde Orion ile veri tabanından çekilen veriler düzenlenerek
NodeJs üzerinden kullanıcıya sunulması hedeflenmektedir.
3.1.4. NodeJs
NodeJs, Google tarafından geliştirilmiş olan V8 JavaScript motoru
üzerinde çalışan, event-driven, nonblocking I/O modeli kullanan, ölçeklenebilir
uygulamalar geliştirmek için tasarlanmış bir platformdur [10]. Çok fazla
kullanıcıya aynı anda hizmet verebilen NodeJs bir JavaScript framework’üdür. Az
kaynak tüketip, geliştirim süresini oldukça kısaltmaktadır. NodeJs paket sistemi
olan npm (node package manager) dünyada en çok kullanılan paket sistemidir.
Şekil 3.4.’da NodeJs logosu gösterilmiştir.
Şekil 3. 4. NodeJs Logosu
Çalışma kapsamında kullanıcılara hizmet vermek üzere kurulan sunucunun
arka yüzünde yapılacak geliştirmeler NodeJs kullanılarak yapılacaktır. Gerekli
erişim izinleri ve Orion ile bağlantıyı sağlamak ve ön yüz ile iletişimi kurmak
NodeJs tarafından sağlanacaktır.
10
3.2 Tamamlanan Çalışmalar
Uygulamayı kullanacak kişilerin daha çok yaşlı bireyler olacağı
düşünülerek, yaşlı bireye daha kolay ulaşma hedefi ve anlık adım, nabız ve
tansiyon bilgilerine erişip, veri tabanına kaydının sağlanması için Samsung’un
geliştirdiği GearFit2 Pro akıllı saati kullanılmıştır.
İlk tasarlanan sistemde web arayüz tasarımı konusunda yapılan fikir
alışverişi ile React.Js yerine .NET Core MVC kullanılması kararlaştırılmıştır.
Core MVC teknolojisini kullanmamızda ki neden agile methoda yönelik
avatajlarının fazla olmasıdır. Arayüz Visual Studio ortamında C# dili ile
kodlanmıştır. Ayrıca arayüz tasarımında Bootstrap 4 kullanılmıştır.
Mobil sistemin tasarımında Android ve IOS işletim sistemlerinde
çalışabilmesi için cross platform olan Facebook’un geliştirdiği React-Native
kullanılmıştır. Tasarlanan uygulamanın testleri için Android Studio’da yapılmıştır.
Veri tabanı ile iletişimin sağlanması için Javascript betik dili kullanılmıştır.
Veri tabanı ve gerekli verilerin saklanması tarafında ise Google’ın
geliştirdiği Firebase platformu kullanılmıştır. En büyük avantajı, mobil ortamla
çok uyumlu bir şekilde çalışabilmesi ve kaynak erişiminin çok fazla olmasıdır.
Projenin geliştirilmesinde hem ekip içinde rahat iş bölümü yapabilmek
adına hem de değişiklikleri rahat görüp zaman kaybı yaratmaması amacıyla Git
versiyon kontrol sistemi kullanılmış ve proje GitHub üzerinde saklanmıştır. Bu
sayede ekip üyelerinin istediği yerde ve zamanda rahatça projeye erişip
çalışabilmesi sağlanmıştır.
Alt başlıklarda projenin final aşamasını oluşturan çalışmalarda kullanılan
teknolojiler tanıtılmaktadır.
11
3.2.1. Samsung GearFit2
Akıllı telefonunuz olmadan mesajları kontrol etme, nabız bilgisi tutma,
adım sayısı görüntüleme gibi akıllı saat fonksiyonlarına sahiptir. Gear Fit2 Pro,
kalp atış hızınızı düzenli olarak izler ve sezgisel geri bildirimde bulunarak
maksimum, enerjik ve ılımlı bölgelere ne zaman girdiğinizi söyler. Gear Fit2 Pro,
kondisyon veya egzersiz bisikletinde ölçülen kalp atış hızı verileri esas alınarak
yakılan kalorileri hesaplayabilir [11]. Şekil 3.5.’de Samsung GearFit2 Pro
fotoğrafı gösterilmiştir.
Şekil 3. 5. Samsung GearFit2 Pro
3.2.2. Asp.Net Core MVC
.Net Core Microsoft tarafından açık kaynak kodlu (open-source) olarak
geliştirilmesi devam eden, cross platform(windows, macos, linux işletim
sistemlerinde çalışabilen) olarak çalışan, esnek ve modern geliştirme
platformudur. .Net Core ile beraber yazılımcılar dilerse macos, linux veya android
platformlarına uygulamalarını yazabileceklerdir. C#, F# ve Visual Basic dillerini
kullanarak .Net Core uygulamalarınızı geliştirebilirsini [12]. Şekil 3.6.’da Asp.Net
Core logosu gösterilmiştir.
Şekil 3. 6. Asp.Net Core
12
3.2.3. Bootstrap 4
Bootstrap giderek popülerleşen, Html, CSS ve Javascript elementlerini
bizlere hazır olarak sunan bir açık kaynak kodlu framework. Geçtiğimiz yıllarda
Twitter ekibinin ortaya çıkardığı bu framework ile daha hızlı, pratik, Html5&Css3
uyumlu responsive tasarımlar çıkarabilmekteyiz. En önemli özelliği de projeleri
daha hızlı bitirmeye olanak sağlamasıdır [13]. Şekil 3.7’de Bootstrap logosu
gösterilmiştir.
Şekil 3. 7. Bootstrap
3.2.4. React Native
React Native ise yakın zamanda Facebook tarafından open source edilmiş,
Javascript ile native uygulama geliştirmeye yarayan bir Javascript kütüphanesi.
Webview içinde çalışan HTML5 mobil uygulamalar gibi değil doğrudan Javascript
ile native uygulama geliştirebiliyorsunuz. Geliştirilen uygulamalar tamamen native
oluyor. IOS için swift ya da Objective-C, Android için Java, web siteleri için
Javascript öğrenmek yerine sadece Javascript ve React öğrenerek iki işletim
sistemi için de çalışabilen bir uygulama geliştirebiliriz [14]. Şekil 3.8’de React
Native logosu gösterilmiştir.
Şekil 3. 8. React Native
13
3.2.5. Android Studio Ortamı
Android, Google, Open Handset Alliance ve özgür yazılım topluluğu
tarafından geliştirilen, Linux tabanlı, mobil cihaz ve cep telefonları için
geliştirilmekte olan, açık kaynak kodlu bir mobil işletim sistemidir. Desteklenen
uygulama uzantısı “.apk”’dır.
Android, Linux çekirdeği üzerine inşa edilmiş bir mobil işletim sistemidir,
bu sistemde ara katman yazılımı, kütüphaneler ve API, C diliyle yazılmıştır.
Uygulama yazılımları ise, Apache harmony üzerine kurulu Java-uyumlu
kütüphaneler ihtiva eden uygulama iskeleti üzerinden çalışır. Android, derlenmiş
Java kodunu çalıştırmak için dinamik çevirmeli (JIT) Dalvik sanal makinesini
kullanır ve cihazların fonksiyonelliğini artıran uygulamaların geliştirilmesi için
çalışan geniş bir programcı-geliştirici çevresine sahiptir [15].
Android Studio, Android uygulamalarının geliştirildiği, üst seviye
özelliklere sahip ve Google tarafından da önerilen resmi programlama aracıdır.
Şekil 3.9’da Android Studio logosu gösterilmektedir.
Şekil 3.9. Android Studio Logosu
3.2.6. Firebase
Google tarafından yeni özelliklerin eklenmesiyle gelişen Firebase, bütün
bu ihtiyaçları karşılayabilme iddiasında ücretsiz kullanım da sunan bir
platformdur. Herhangi bir platformda uygulama geliştirmeye bir sebeple başlayıp
daha sonra bir kontrol paneli ve her durumda ulaşılabilir kullanıcı veri
deposuna ihtiyacınız olduğunu hemen hissetmişsinizdir. Günümüzde uygulamalar
platform fark etmeksizin aynı veriye her cihazdan erişmek istiyor. Uygulaması,
birçok kullanıcı tarafından yüklenen geliştiricilerin de kayıt-oturum bilgilerini
tutma, uygulamaların kullanım verilerini analiz etme, yeni duyurular yapmak için
aynı zamanda kullanıcıya bildirim gönderme, uygulamayı test etme gibi işlemleri
rahatlıkla yönetebileceği bir yönetim paneli gerekiyor. İşte Google tarafından yeni
özelliklerin eklenmesiyle sürekli kendini geliştiren Firebase, bütün bu ihtiyaçları
14
karşılayabilmek için uygulama geliştiricilerine ücretsiz kullanım da sunan bir
platformdur Şekil 3.10.’te Firebase Servisleri gösterilmiştir.
Şekil 3. 10. Firebase Servisleri
Uygulama yönetim, kullanım takip, veri depolama, bildirim gönderme gibi
işlemleri, ekstra bir sunucuya ve sunucu taraflı kod yazmaya gerek kalmadan
halleden Firebase, yeni geliştirici dostu arayüzünde Realtime Database,
Notification, Remote Config gibi özelliklerle donatılmış her uygulama için ayrı
ayrı ulaşım imkânı sağlamkatdır [16]. Şekil 3.16. Firebase Notification Servisi’nin
genel yapısı gösterilmiştir.
Şekil 3.11. Firebase Notification Servisi
15
3.2.7. GitHub
GitHub, git yazılımı ile entegre olmuş bir depolama alanıdır. Git ve
GitHub’ı birbirine karıştırmamak gerekmektedir. Git, bir versiyon kontrol
sistemidir. GitHub, yapacağımız ve daha yapım aşamasında olduğumuz veya
geliştirmekte olduğumuz bir projeye tanıdığımız veya tanımadığımız farklı
şahısların projeye destek vermelerini ve projeye dahil olmalarını sağlamak
amacıyla kurulan bir proje yönetim sistemidir [17]. Şekil 3.12’de GitHub logosu
gösterilmektedir.
Şekil 3. 12. GitHub Logosu
3.2.8. Javascript
JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan bir betik
dilidir. JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının
kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir
şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi
işlevler sağlanır. JavaScript, Node.js gibi platformlar sayesinde sunucu tarafında
da yaygın olarak kullanılmaktadır. Web sayfalarının görünümünün
mükemmelleştirilmesi, işlevselliğinin artırılması ve dinamik web sayfaları
tasarlanması amacıyla JavaScript, HTML kodu içinde gömülü olarak (embedded)
kullanılabilir. JavaScript, bir programlama dili disiplini ve özelliklerine sahiptir
[18]. Şekil 3.13’de JavaScript logosu gösterilmektedir.
Şekil 3. 13 Javascript Logosu
16
4. SAĞLIKLI YAŞAM İZLEME PLATFORMU
4.1 Analiz
Bu aşamada yapılan çalışmalar aşağıdaki gibi listelenmektedir:
 Sistemin Gereksinimlerinin Belirlenmesi.
 Paydaşların Listesinin Oluşturulması.
 Kullanıcı Senaryolarının Oluşturulması.
4.1.1. Gereksinim Analizi
Bu aşamada analiz için gerekli görülen işlevsel, işlevsel olmayan özellikler
ve alan gereksinimleri belirtilmiştir.
 Fonksiyonel Gereksinimler.
 Fonksiyonel Olmayan Gereksinimler.
 Alan Gereksinimleri
4.1.1.1. Fonksiyonel Gereksinimler
 Sisteme yeni doktor ve yaşlı birey kayıt olabilmeli.
 Doktor ve yaşlı birey sisteme kayıt olurken kullanıcı türünü seçmeli.
 Yaşlı bireyler E-Mail ve şifreleri ile birlikte sisteme giriş yapabilmeli.
 Doktor E-Mail ve şifreleri ile birlikte sisteme giriş yapabilmeli.
 Yaşlı bireyler akıllı saat yardımı ile kendi verilerini ölçüp sisteme
aktarabilecek.
 Doktor ile yaşlı birey sistem üzerinden birbirleri ile iletişim kurabilmeli.
 Doktor kendisine kayıt olan yaşlı bireylerin profillerini görüntüleyebilmeli.
 Doktorlar ve yaşlı bireyler kendi profil sayfalarını görüntüleyebilmeli ve
bilgilerini güncelleyebilmeli.
 Doktor belirtilen limitler aşıldığında, yaşlı bireye ve doktora bildirim
gönderebilmeli.
 Doktor sistem üzerinden ekleme yapabilmeli ve ekleme yapıldığında karşı
tarafa bildirim gitmeli.
 Doktor kendisine bağlı olan yaşlı birey listesini ve bireylerin bilgilerini
görüntüleyebilmeli
17
4.1.1.2. Fonksiyonel Olmayan Gereksinimler
 Sistem 7/24 çalışabilir olmalı.
 Sisteme çoklu erişim sağlanabilmeli.
 Doktor ve yaşlı birey bildirimleri en fazla 1 s gecikmeli olarak alınmalı.
 Arayüz sade, basit ve anlaşılır olmalı.
 Doktor ve yaşlı birey bilgilerine hiçbir şekilde dışarıdan erişim olmamalı.
 Sistem içerisinde ki kişisel bilgilerin güvenliği çeşitli kriptografi
yöntemleriyle sağlanmalı.
 Sistem hata toleranslı, esnek ve bakımlanabilir olmalı.
4.1.1.3. Alan Gereksinimleri
 Etik kurallarına uygun olmalı.
 Yasalarla koruma altına alınan hakların korunması sağlanmalı.
4.1.2. Sistem Paydaşları
1) Doğrudan Paydaşlar: Sistemi doğrudan kullanacak kişiler ya da sistemler.
 Doktor.
 Yaşlı birey
2) Dolaylı Paydaşlar: Sistemden dolaylı bir şekilde yararlanacak kişiler ya da
sistemler.
 Sistem Yöneticisi
18
Şekil 4.1. Paydaş Şeması
4.1.3. Kullanım Senaryoları
Kullanım senaryoları, kullanıcıların sistemde yapabileceği tüm işlemleri
kapsar ve ortaya çıkabilecek sorunların ve sınırlamaların önceden önlenmesini
sağlar. Bu tez çalışması, sistem uygulaması gerçekleştirilirken bu kullanım
senaryoları dikkate alınarak gerçekleştirilmiştir.
4.1.3.1 Kayıt Ol
Aktör: Doktor ve Yaşlı Birey.
Tanım: Bu kullanım durumunda, kullanıcılar kullanıcı türünü seçip, E-Mail
adresleri (ayrıca doktor için belirlenen özel belirteç) ve yeni bir şifre oluşturarak
sisteme kayıt olurlar.
Ön Koşullar:
1.Kullanıcı, kayıt ol ekranını görüntülemiş olmalıdır.
19
Son Koşullar:
1.Kullanıcı, sisteme kaydedilip giriş ekranına yönlendirilmiş olmalıdır.
Ana Başarı Senaryosu:
1. Kullanım durumu, doktorun kayıt ol ekranını görüntülemesiyle başlar.
2. Sistem kayıt ol ekranını görüntüler.
3.Kullanıcı mail adresi, yeni şifre ve kullanıcı türü alanlarını girer.
4.Sistem kullanıcı bilgilerini kaydeder ve kullanıcıyı giriş ekranına
yönlendirir.
Alternatif Senaryolar:
3.1. Kullanıcı doldurması gereken alanları boş bırakırsa;
a. Sistem kayıt işlemini gerçekleştirmez.
b. Sistem uyarı mesajı verir.
3.2. Sisteme kayıt yapan kişi doktor ise;
a. Sisteme kayıt mail adresi ile yapılır.
b. Sistem doktora özelleşmiş bir belirteç verir.
4.1.3.2 Giriş Yap
Aktör: Doktor ve Yaşlı Birey.
Tanım: Bu kullanım durumunda, sisteme kayıtlı olan kullanıcılar sisteme
erişebilmek için giriş yaparlar.
Ön Koşullar:
1.Kullanıcı sisteme kayıt yaptırmış olmalıdır.
2.Kullanıcı giriş yapma ekranını görüntülemiş olmalıdır.
Son Koşullar:
1.Sistem kullanıcı girişini onaylayıp kullanıcıyı ana sayfa ekranına
yönlendirir.
Ana Başarı Senaryosu:
1.Kullanım durumu, kullanıcının giriş ekranını görüntülemesiyle başlar.
20
2.Kullanıcı, E-Mail adresi ve şifresi ile sisteme giriş yapar.
3.Sistem kullanıcın kayıtlı olup olmadığını kontrol eder.
4.Sistem kayıtlı kullanıcının girişini onaylar ve ana sayfa ekranına
yönlendirir.
Alternatif Senaryolar:
2.1. Kullanıcı doldurması gereken alanları eksik veya yanlış girerse;
a. Sistem giriş işlemini gerçekleştirmez.
b. Sistem uyarı mesajı verir.
2.2. Sisteme giriş yapan kullanıcı doktor ise;
a. Mail adresi yerine doktora atanmış olan özel belirteç ile giriş
yapabilir.
3.Kullanıcı sisteme kayıtlanmamış ise;
a. Sistem kullanıcı girişine izin vermez.
b. Sistem kullanıcıya uyarı mesajı verir.
4.1.3.3. Profil Güncelle
Aktör: Doktor ve Yaşlı Birey.
Tanım: Bu kullanım durumunda doktor ve yaşlı bireyler kendi kişisel bilgilerini
güncelleyebilmektedir.
Ön Koşullar:
1.Kullanıcılar sisteme kayıt olmuş olmalı.
2.Kullanıcılar sisteme giriş yapmış olmalı.
Son Koşullar:
1.Sistem güncellenen bilgileri kaydetmeli.
Ana Başarı Senaryosu:
1.Kullanıcılar profil ekranlarını görüntüler.
21
2.Kullanıcılar kişisel bilgilerinin yer aldığı alanları günceller.
3.Sistem yapılan değişiklikleri kaydeder.
Alternatif Senaryolar:
2.Kullanıcı doldurması gereken alanları eksik, yanlış veya boş bilgi
girerse;
a. Sistem uyarı mesajı verir.
4.1.3.4. Veri Görüntüleme
Aktör: Doktor ve Yaşlı Birey.
Tanım: Bu kullanım durumunda kullanıcılar, ölçülmüş olan tüm verileri
görüntüler.
Ön Koşullar:
1.Kullanıcı sisteme kayıt olmalıdır.
2.Kullanıcı sisteme giriş yapmış olmalıdır.
Son Koşullar:
1.Kullanıcı ölçüm verilerini görüntülemiş olmalıdır.
Ana Başarı Senaryosu:
1.Bu kullanım durumu, kullanıcının ölçüm sonuçlarının görüldüğü ekranı
görüntülemesiyle başlar.
2.Sistem daha önce ölçülmüş olan verileri ekrana yansıtır.
4.1.3.5. Yaşlı Birey Ekle
Aktör: Doktor.
Tanım: Bu kullanım durumunda doktor, yaşlı bireyleri sisteme ekler.
Ön Koşullar:
1.Doktor sisteme kayıt olmuş olmalı.
2.Doktor sisteme giriş yapmış olmalı.
22
3.Yaşlı birey sisteme kayıt olmuş olmalı.
Son Koşullar:
1.Sistem eklenen yaşlı bireyi kaydetmeli.
Ana Başarı Senaryosu:
1.Doktor, yaşlı birey ekleme ekranını görüntüler.
2.Doktor, yaşlı bireyin T.C. kimlik numarası ile hastayı ekler.
3.Sistem yaşlı bireyi kaydeder.
Alternatif Senaryolar:
2.1 Doktor yaşlı bireyin T.C. kimlik numarasını doğru bir şekilde
girmezse;
a. Sistem uyarı mesajı verir.
2.2. Doktor yaşlı bireyi daha önce sisteme eklemişse;
a. Sistem uyarı mesajıyla kullanıcıyı uyarır.
4.1.3.6. Yaşlı Bireylerin Ölçüm Bilgilerini Güncelle
Aktör: Sistem.
Tanım: Bu kullanım durumunda akıllı saatten gelen verilere göre yaşlı bireyin
verileri anlık olarak güncellenir.
Ön Koşullar:
1.Yaşlı birey sisteme kayıt olmuş olmalı.
2.Yaşlı bireyin sahip olduğu akıllı saat sistem ile eşleşmiş olmalı
Son Koşullar:
1.Sistem girilen güncel bilgileri kaydetmeli.
Ana Başarı Senaryosu:
1.Yaşlı birey saat aracılığı ile ölçüm yapar.
2.Sistem, ölçüm bilgilerini günceller.
3.Sistem belirtilen güncel bilgileri kaydeder.
23
Alternatif Senaryolar:
1. Akıllı saat ile bağlantı koparsa;
a. Sistem uyarı mesajı verir.
4.2 Tasarım
Bu çalışmanın tasarımında öncelikle yazmış olduğumuz kullanım
durumları için Kullanım Durum Diyagram’ını çizilmiştir. Daha sonra her bir
kullanım durumu için System Sequence Diagram (SSD)’lar çizilmiştir. Son olarak
sistemin genel tasarımını içeren Alan Modeli (Domain Model) tasarlanmıştır.
Aşağıdaki bölümlerde çizilen tüm diyagramlar sırası ile gösterilmektedir.
4.2.1. Kullanıcı Senaryo Diyagramı
Şekil 4.2’de tüm aktörlerin analiz kısmında belirtilen kullanım durumları
ile olan ilişkileri gösterilmektedir
Şekil 4. 2. Sistem Use Case Diagram
24
4.2.2 Sistem Sıra Diyagramları
Bu bölümde her kullanım durumu için çizilmiş olan SSD’ler arasından
sadece önemli düzeydeki SSD’ler gösterilmektedir.
4.2.2.1. Kayıt Ol SSD
Şekil 4.3’te ve doktorların kayıt ol kullanım durumu için çizilmiş SSD
gösterilmektedir. Hem yaşlı birey hem de doktor aynı kayıt olma ekranı
vasıtasıyla kayıt olurlar.
Şekil 4. 1. Kayıt Ol SSD’si
25
4.2.2.2. Giriş Yap SSD
Şekil 4.4’te hem doktor hem de yaşlı birey için uygulanan giriş yap
kullanım durumunun SSD diyagramı gösterilmektedir. Kullanıcılar kayıt olduktan
sonra veya giriş yap seçeneğiyle bu ekrandaki gerekli sahaları doldurarak sisteme
giriş yapmaktadırlar.
Şekil 4. 2. Giriş Yap SSD’si
26
4.2.2.3. Verileri Görüntüle SSD
Şekil 4.5’te doktorun gerçekleştirdiği verilerin güncellemesi olayının SSD
diyagramı görülmektedir. Doktor bu işlem sonucunda yaşlı bireylerin verilerini
görüntüleyebilmektedir. Bu işlemi sadece doktor yapabilmektedir.
Şekil 4.5. Verileri Güncelle SSD’si
27
4.2.2.4. Yaşlı Birey Ekle SSD
Şekil 4.6’da doktorun gerçekleştirdiği yaşlı birey ekleme SSD diyagramı
gösterilmektedir. Doktor bu işlem sayesinde yaşlı bireylerini etkin bir şekilde
ekleyebilmektedir. Bu işlemi sadece doktor gerçekleştirebilmektedir.
Şekil 4. 3. Yaşlı Birey Ekle SSD’si
28
4.2.2.5. Mesajlaşma SSD
Şekil 4.7’de doktor ile yaşlı bireyin mesajlaşma işleminin SSD diyagramı
gösterilmektedir. Doktor bu işlem sayesinde yaşlı bireye kolaylıkla erişebilir.
Şekil 4. 7. Mesajlaşma SSD’si
29
4.2.3 Alan Modeli (Domain Model)
Şekil 4.8’de sistemin genel yapısını göstermek amacı ile çizilen alan
modeli gösterilmektedir.
Şekil 4. 8. Domain Model
4.2.4 Prototip Geliştirme
Bu bölümde tez çalışması kapsamında çalışmamız son halini almadan önce
yapılan araştırmalar ve çalışmalar doğrultusunda geliştirilen prototip içeriği
anlatılmaktadır.
30
Tez çalışmasında, mobil uygulama tarafı için geliştirilen ilk uygulamada
yapılan işlemler, Google Firebase’de veritabanı oluşturmak ve mobil uygulama ile
bulut servis arasındaki bağlantı, bulutta bulunan projenin kendi oluşturduğu
google-services.json dosyası mobil uygulamaya eklenerek kurulmuştur. Gerekli
işlemler yapıldıktan sonra veri tabanında bulunan verilere erişim sağlanmıştır.
Mobil uygulamanın prototip gerçekleştirimi yaşlı bireylerin kullanacağı göz
önünde bulundurularak tasarlanmıştır.
Şekil 4.9. google-services.json
Web tarafında ise, mobil tarafta olduğu gibi veri tabanına Şekil 4.8.
aracılığı ile erişim sağlanmıştır. Web tarafının kullanımın kolaylığını arttırmak
amacıyla prototip responsive yapıya uygun tasarlanmıştır. Web tarafı Doktor
tarafından kullanılacak şekilde tasarlanmıştır.
31
5. SAĞLIKLI YAŞAM İZLEME PLATFORMU GELİŞTİRİLMESİ
Sağlıklı Yaşam İzleme Platformu geliştirilirken ilk önce ekip üyeleri
arasındaki iş bölümünü ve proje gereksinimlerinin sürekli değişimine ayak
uydurarak etkin kod yazımını sağlamak amacıyla versiyon kontrol sistemi
kurulumu sağlanmıştır.
Çalışmanın bu aşamasında kullanılması planlanan teknolojilerin
gereksinimleri kuruldu ve arka yüz geliştirimine başlanıldı. Arka yüz geliştirimi
istenen gereksinimleri sağladıktan sonra ön yüz geliştirimine başlanıldı.
Ön yüz geliştirimi aşamasında kullanıcı yaş aralığının yüksek olması
sebebiyle kullanım kolaylığı ve basitlik hedef alındı.
Alt başlıklarda arka ve ön yüz detaylı olarak anlatılmıştır.
5.1. Arka-Yüz Geliştirilmesi
Arka yüz geliştiriminin ilk aşamasında önceki çalışmalardan tecrübe
edinilen bilgiler doğrultusunda, sistemin bel kemiği olan veri tabanı, bildirim ve
depolama hizmeti sağlayan Firebase platformu kurulumu sağlandı. Firebase’in
sağlamış olduğu hizmetler oluşturulan Android projesine entegre edildikten sonra
kullanıma hazır hale geldi.
React Native geliştirme ortamında betik programlama dili olan Javascript
kullanılarak Google Firebase’in bütün avantajlarından faydalanılmıştır.
Component Based mimari temel alınarak, gerekli sınıflar ve Firebase ile iletişime
geçen Firebase servisleri oluşturulmuştur.
Şekil 5.1. Authorization ve Messaging servisleri
32
Web geliştirme ortamında .NET Core MVC(Model-Wiew-Controller)
mimarisi temel alınarak model ve view sınıfları oluşturulup Firebase ile iletişime
geçen Firebase servisleri geliştirilmiştir. Core MVC Controller yapısı Şekil
5.2.’de gösterilmiştir.
Şekil 5.2. Core MVC Controller
33
Firebase Real-Time veri tabanı yapısı Şekil 5.3.’de gösterilmiştir.
Şekil 5. 3. Firebase Real-Time Veri Tabanı Yapısı
34
5.2. Ön-Yüz Geliştirilmesi
Projemizi geliştirirken düşündüğümüz ilk şeylerden biri, programın tüm
kesimlere hitap edebilir olmasıydı. Bu nedenle ilk planda, arayüz tasarımımızın
basit ve anlaşılabilir olmasını hedefledik.
5.2.1. Mobil Arayüz Tasarımları
Mobil uygulama yaşlı kullanıcıların kullanacağı göz önüne alınarak arayüz
tasarımları gerçekleştirilmiştir.
5.2.1.1 Açılış Sayfası
Kullanıcı mobil uygulamayı ilk açtığında 3 adet açılış sayfası gelir.
Sayfalar kullanıcıya uygulama hakkında küçük bir özet sunar. Bu sayfalarda
ekranı sola kaydırma ile geçiş yapılır. Son sayfaya geldiğinde ise “Başla” tuşuna
basarak giriş ekranına yönlendirilir. Açılış sayfalararı Şekil 5.4, Şekil 5.5 ve Şekil
5.6 da gösterilmiştir.
Şekil 5.4 Mobil İlk Açılış Sayfası
35
Şekil 5.5 Mobil İkinci Açılış Sayfası
Şekil 5.6 Mobil Üçüncü Açılış Sayfası
36
5.2.1.2 Giriş Yap
Kullanıcı, başlangıç ekranlarından sonra giriş yap ekranıyla karşılaşır.
Kullanıcılar sisteme mail adresleri ve şifreleriyle giriş yapabilmektedirler. Hatalı
giriş yaptıkları takdirde program uyarı mesajı vermektedir. “Beni Hatırla”
kutucuğu işaretlenirse, kullanıcı bilgileri bir sonraki girişte otomatik olarak
doldurulmaktadır. Giriş yap sayfasının arayüzü Şekil 5.7’de gösterilmektedir.
Şekil 5.7 Mobil Giriş Yap Sayfası
37
5.2.1.3 Kayıt Ol
Kullanıcı giriş sayfasına geldiğinde, sisteme kayıtlı değilse “Hesap
Oluştur” seçeneğine tıklar. Bu seçimi gerçekleştirdikten sonra kullanıcıdan mail
adresi, telefon numarası, parola, adı ve soyadı bilgileri istenir. Parola uzunluğunun
en az 8 karakter olması sistem tarafından kontrol edilir. Kullanıcı eğer sisteme
kayıtlıysa, sistem zaten kaydının bulunduğu uyarısını verir ve kullanıcı, “Giriş
Sayfası” kutucuğuna tıklayarak giriş yap ekranına gidebilir. Başarılı bir şekilde
kayıt olma işlemi gerçekleşirse sistem, giriş yapma ekranına yönlendirir. Kayıt ol
sayfasının arayüzü Şekil 5.8’de gösterilmektedir.
Şekil 5.8 Mobil Kayıt Ol Sayfası
38
5.2.1.4 Şifremi Unuttum
Sisteme kayıtlı olan kullanıcı giriş esnasında şifresini unutmuşsa, giriş
sayfasındaki şifremi unuttum seçeneğine tıklayarak “Şifremi Unuttum” sayfasına
yönlendirilir. Bu sayfada kullanıcının mail adresi istenir. Kullanıcı mail adresine
gönderilen linke tıklayarak parolasını değiştirebilir. Şifremi Unuttum sayfasının
tasarımı Şekil 5.9 da gösterilmiştir.
Şekil 5.9 Mobil Şifremi Unuttum Sayfası
39
5.2.1.5 Ana Ekran
Kullanıcı sisteme giriş yaptıktan sonra karşısına ana ekran sayfası gelir. İlk
açılan sayafada 4 adet seçenek bulunur. Bu seçenekler “Nabız Görüntüle”,
“Tansiyon Görüntüle”, “Adım Görüntüle” ve “Ölçüm Yap” sayfalarıdır. Bu
seçeneklerin yanı sıra, alt menüde ise 3 seçenek vardır. Bunlar ilk açılan “Ana
Ekran”, “Mesajlaşma Ekranı” ve “Profil Sayfası” dır. Ana Ekran sayfasının
tasarımı Şekil 5.10 da gösterilmiştir.
Şekil 5.10 Mobil Ana Ekran Sayfası
40
5.2.1.6 Adım Görüntüle
Kullanıcı ana ekrana geldiğinde uygulamanın esas amacı olan menüler ile
karşılaşır. Adım görüntüle seçeneğini seçtiğinde, uygulama kullanıcıyı Adım
Görüntüle sayfasına yönlendirir. Bu sayfada kullanılan akıllı saatten veri tabanına
gelen bilgiler doğrultusunda kullanıcının bulunduğu gün içerisinde o ana kadar
attığı toplam adım sayısı bilgisi verilir. Adım Görüntüle sayfası Şekil 5.11 de
gösterilmiştir.
Şekil 5.11 Adım Görüntüle sayfası
41
5.2.1.7 Nabız Görüntüle
Ana ekranda bulunan menülerden bir diğeri ise Nabız Görüntüle
seçeneğidir. Kullanıcı bu seçeneği seçtiğinde, uygulama kullanıcıyı Nabız
Görüntüle sayfasına yönlendirir. Bu sayfada akıllı saatten en son ölçülen nabız
bilgisi gösterilir. Nabız Görüntüle sayfası Şekil 5.12 de gösterilmiştir.
Şekil 5.12 Nabız Görüntüle sayfası
42
5.2.1.8 Tansiyon Görüntüle
Ana ekranda bulunan kullanıcının sağlık verilerini gösterme
seçeneklerinden sonuncusu ise Tanstion Görüntüle sayfasıdır. Tansiyon Görüntüle
sayfası da tıpkı Nabız Görüntüle sayfası gibi, akıllı saat tarafından en son ölçülen
tansiyon bilgisini gösterir. Tansiyon Görüntüle sayfası Şekil 5.13 te gösterilmiştir.
Şekil 5.13 Tansiyon Görüntüle sayfası
43
5.2.1.9 Profil Sayfası
Alt menünün seçeneklerine gelecek olursak, Ana ekranın haricinde iki tane
daha seçenek bulunmaktadır. Bunlardan birisi profil sayfasıdır. Profil sayfasında
kullanıcı kendi hakkındaki bilgileri görebilmektedir. Profil Sayfası Şekil 5.14 te
gösterilmiştir.
Şekil 5.14 Mobil Profil Sayfası
44
5.2.1.10 Mesajlaşma Sayfası
Alt menüden en son sayfa ise Mesajlaşma Sayfası’dır. Bu sayfa sayesinde
kullanıcı, kendisine atanan doktor ile uygulama üzerinden kolaylıkla
haberleşebilir. Doktor yaşlı bireyin verilerinde bir sorun gördüğü anda uygulama
üzerinden yaşlı kullanıcılara erişebilir, uyarıda bulunabilir. Mesajlaşma Sayfası
Şekil 5.15 te gösterilmiştir.
Şekil 5.15 Mesajlaşma Sayfası
45
5.2.2. Web Arayüz Tasarımları
Sağlıklı Yaşam İzleme Platformu projesinin web uygulama kısmının
doktorların kullanacağı göz önüne alınarak arayüz tasarımları gerçekleştirilmiştir.
5.2.2.1 Açılış Sayfası
Kullanıcı web uygulamayı açtığında sistemin genel özelliklerinin
bulunduğu ve site içerisindeki içerikleri görüntüler.Kullanıcı menüde bulunan
sayfalara erişebilir ve kendi işlemlerini bu doğrultuda gerçekleştirebilir.Açılış
Sayfası Şekil 5.16’da gösterilmiştir.
Şekil 5.16 Web Açılış Sayfası
46
5.2.2.2 Giriş Yap
Kullanıcıyı, açılış ekranında giriş yap paneli karşılaşır. Kullanıcılar
sisteme mail adresleri ve şifreleriyle giriş yapabilmektedirler. Hatalı giriş
yaptıkları takdirde program uyarı mesajı vermektedir. “Beni Hatırla” kutucuğu
işaretlenirse, kullanıcı bilgileri bir sonraki girişte otomatik olarak
doldurulmaktadır. Giriş yap panelinin tasarımı Şekil 5.17’de gösterilmektedir.
Şekil 5.17 Web Giriş Yap Paneli
47
5.2.2.3 Nedir Sayfası
Kullanıcı Nedir sayfasına girdiğinde sistem hakkında bilgi sahibi olabilir.
Nedir Sayfası Sağlıklı Yaşam İzleme Platformu’nun içeriklerini kullanıcıya
göstermektedir. Sayfanın açılışında 3 adet slayt şeklinde hazırlanmış resimler
bulunmaktadır. Bu resimler arasında geçiş yapmak mümkündür.Nedir sayfasının
açılışında ki bu resimler, sistemin açıklamasının görsel ifadeleridir. Nedir
Sayfasında ki resimli slayt gösterimi Şekil 5.18, Şekil 5.19 ve Şekil 5.20’de
gösterilmektedir.
Şekil 5.18 İlk Resim
Şekil 5.19 İkinci Resim
48
Şekil 5.20 Üçüncü Resim
Nedir Sayfasının alt kısmında ise Sağlıklı Yaşam İzleme Platformu’nun
içerdiği özellikleri 3 farklı sayfada gösteriminin olduğu görülmektedir.Kullanıcı
sistem hakkında bilgi almak istediği sayfalara buradan ulaşabilir.Nedir
Sayfasındaki Sağlıklı Yaşam İzleme Platformu’nda Neler Var? sayfalarının bilgisi
Şekil 5.21’de gösterilmektedir.
Şekil 5.21 Sağlıklı Yaşam Izleme Platformunda Neler Var?
49
5.2.2.4 Sistem Hakkında Sayfası
Kullanıcılar Sistem Hakkında Sayfasına giriş yaparak sisteme ait genel
özellikleri görüntüleyebilir. Sistem Hakkında Sayfası, doktor ve yaşlı
kullanıcılarının sistem ile ilişkilerini (doktor web arayüzünü kullanabilirken yaşlı
bireyler ise sistemin mobil tarafını kullanabilir.) açıklar ve Sağlıklı Yaşam İzleme
Platformu’nun kullanıcıya bir fikir vermesi için hem mobil hem de web
arayüzlerinden resimler sunar.Sistem Hakkında Sayfası Şekil 5.22 ve Şekil
5.23’de gösterilmektedir.
Şekil 5.22 Sistem Hakkında Sayfası 1
Şekil 5.23 Sistem Hakkında Sayfası 2
50
5.2.2.5 Veri Analizi Sayfası
Kullanıcılar Veri Analizi Sayfasına giriş yaparak Sağlıklı Yaşam İzleme
Platformu projesinin teknik özelliklerini görüntüleyebilir. Bu sayfada verilerin
güvenliğinden bahsedilmektedir. Kullanıcılar kendi verilerinin nasıl saklanıldığı
ve doktara ulaştırıldığını buradaki bilgilerden öğrenebilir.Ayrıca verilerin analizi
hakkında da bilgi sahibi olabilirler. Yaşlı birey verilerinin periyodik tutulma
aralıklarını gösteren temsili bir grafik bulunmaktadır. Veri Analizi Sayfası Şekil
5.24’de gösterilmektedir.
Şekil 5.24 Veri Analizi Sayfası
51
5.2.2.6 Grafiksel Gösterim Sayfası
Kullanıcılar Grafiksel Gösterim Sayfasına giriş yaparak doktorların, yaşlı
bireyden gelen verileri nasıl incelediği hakkında bilgi sahibi olabilirler.Veri
Analizi Sayfasında olduğu gibi Grafiksel Gösterim Sayfasıda sistem hakkında
daha çok teknik bilgi içermektedir. Grafiksel Gösterim Sayfası’nın içeriği daha
çok doktor kullanıcılar ile ilgilidir. Bunun yanında yaşlı bireyler de bu sayfadan
kendilerini ilgilendirecek teknik bilgilere ulaşabilir. Grafiksel Gösterim Sayfası
Şekil 5.25’de gösterilmektedir.
Şekil 5.25 Grafiksel Gösterim Sayfası
52
5.2.2.7 Kayıt Ol Sayfası
Kullanıcı sisteme kayıtlı değilse açılış ekranında ki menüde “KAYIT OL”
kutucuğuna tıklayarak Kayıt Ol Sayfasına yönlendirilir. Bu sayfada kullanıcıdan
ad,soyad,yaş,kilo,Email,telefon numarası ve şehir gibi bilgiler istenir. Parola
uzunluğunun en az 8 karakter olması sistem tarafından kontrol edilir. Kullanıcı
eğer sisteme kayıtlıysa, sistem zaten kaydının bulunduğu uyarısını verir . Kayıt Ol
Sayfası Şekil 5.26’da gösterilmiştir.
Şekil 5.26 Web Kayıt Ol Sayfası
53
5.2.2.8 Personel Giriş Sayfası
Kullanıcılar açılış ekranında bulunan “PERSONEL GİRİŞ” kutucuğuna
tıklayarak ilgili sayfaya yönlendirilmektedir. Personel Giriş Sayfası yalnızca
doktorlara ait bir sayfadır. Bu sayfada doktorlar kendilerine ait kullanıcı adı/Email
ve şifrelerini girerek Doktor Profil Sayfasına erişim sağlayabilir. Personel Giriş
Sayfasında doktorlardan şifre girerken 8 karakter girilmesi beklenmektedir. Parola
8 karakteri geçtiğinde sistem tarafından uyarı verilir. Personel Giriş Sayfası Şekil
5.27’de gösterilmektedir.
Şekil 5.27 Web Personel Giriş Sayfası
54
5.2.2.9 Doktor Profil Sayfası
Doktorlar bu sayfada kendilerine ait bilgileri görüntüleyebilir ve
profillerini tekrar düzenleyebilirler. Doktor Profil Sayfasında bulunan menüde
doktolar,”Birey Görüntüle” ile hastalarını listeleyebilirler. Bu liste, yaşlı bireylerin
kişisel bilgileri ve saatten gelen tansiyon,nabız ve adım sayısı gibi bilgileri
içermektedir. Tansiyon, nabız ve adım sayısı verileri saatten son ölçülen zamana
göre doktorlara ulaşır. Doktorlar bu sayede anlık olarak yaşlı bireylerin
durumlarını takip edebilirler. Beklenmedik durumlarda (tansiyonun düşmesi yada
nabızın hızlı atması gibi) doktorlar, yaşlı bireylere müdahalede bulunabilirler.
Ayrıca Doktor Profil Sayfasında yaşlı bireylerden gelen “Mesaj” ekranı da
bulunmaktadır. Bu ekranda doktorlar kendilerine bağlı olan yaşlı bireylerle
mesajlaşma yoluyla hızlı şekilde iletişim kurabilirler. Doktor Profil Sayfasında bir
başka bulunan özellik “Son Aktivite” dir. Doktorlar,Sağlıklı Yaşam İzleme
Platformu’na son girilme tarihlerini bu pencereden takip edebilir ve olası bir
karmaşıklığın önüne geçebilirler. Menüde bulunan diğer bir özellik ise “Yardım”
kutucuğudur. Doktor, profil sayfasından sistemi anlatan Yardım sayfasına
ulaşabilir. Son olarak Doktor,profil sayfasından “Rapor” özelliği ile sistemde
oluşabilecek herhangi bir aksaklık durumunda bunu rapor eder ve yetkili kişilere
bu durumu bildirir. Doktorlar “ÇIKIŞ YAP” kutucuğuna tıklayarak oturumu
kapatır ve Personel Giriş Sayfasına tekrar yönlendirilir. Doktor Profil Sayfası
Şekil 5.28, Şekil 5.29, Şekil 5.30 ve Şekil 5.31’de gösterilmektedir.
Şekil 5.28 Doktor Profil Sayfası
55
Şekil 5.29 Birey Görüntüle Penceresi
Şekil 5.30 Doktor Mesaj Penceresi
56
Şekil 5.31 Son Aktivite Penceresi
5.2.2.10 Yardım Sayfası
Kullanıcılar Açılış ekranı ve diğer ekranlarda da bulunan “YARDIM”
kutucuğuna tıklayarak Yardım sayfasına yönlendirilirler.Bu sayfada Sağlıklı
Yaşam İzleme Platformu hakkında tüm kullanıcılara yönelik bilgiler
verilmektedir.Ayrıca sistemin web arayüzünün kullanımına yönelik görseller ile
destekleyici resimli anlatımı içermektedir. Yardım Sayfasının amacı, sistemi
kullanacak olan doktorlar veya yaşlı bireylere sistemi tanıtmak ve bir kılavuz
görevi görmektir. Yardım Sayfası Şekil 5.32’de gösterilmektedir.
Şekil 5.32 Yardım Sayfası
57
6. SONUÇ
Bu tez çalışmasında nabız, günlük adım ve tansiyon bilgilerini anlık olarak
ölçmek isteyen ve yaşlı bireylerin anlık ölçümlerini takip edip, yaşlı bireye
sağlıklı bir yaşlanma imkanı sunmak isteyen doktorlara ve sağlıklı yaşlanmak
isteyen yaşlı bireylere hizmet eden bir sistem geliştirilmiştir.Sistem mobil ve web
olmak üzere iki farklı platformda çalışmaktadır. Bu tez çalışması birden fazla
adımın gerçekleştirilmesi ile oluşturulmuştur. Gerçekleştirilen adımlar kısaca
aşağıdaki gibi özetlenebilir.
 Sistemin Geliştirilmesi: Sağlıklı Yaşam İzleme Platformu projesine
ilişkin hizmetler için, mobil uygulama tarafında, Javascript kütüphanesi
olarak Android ve IOS cihazlarda çalışabilen cross platfrom React-Native
kullanılmıştır. React-Native için geliştirme ortamı olarak Visual Studio
Code, uygulamanın testlerinin gerçekleştirilebilmesi için Android Studio
kullanılmıştır. Web tarafında ASP.NET MVC Core teknolojisi
kullanılmıştır. Web uygulaması için geliştirme ortamı olarak Visual Studio
2017 kullanılmıştır. Veri tabanında sistemin kullanıcılarının bilgileri ayrı
olarak Firebase Real-Time veri tabanının sağladığı depolama servisinde
saklanmıştır. Nabız, adım ve tansiyon bilgilerinin Samsung GearFit2 akıllı
saatinden Real-Time olarak alınacağı planlanmıştır. Doktor ve yaşlı birey
arasındaki iletişim bahsedilen Firebase teknolojisinin Messaging servisi
sayesinde sağlanmıştır. Bu sayede yaşlı bireyler ve doktorlar rahatlıkla
iletişim halinde kalabilmektedir.
 Sistemin Sınanması: Sistem geliştirildikten akıllı saate sahip
olmadığımızdan dolayı saatten veri çekme işlemi yapılamamıştır. Saatten
veri çekmek yerine veri tabanında dummy (sahte) veriler üretilmiştir.
Sistem veri tabanında bulunan dummy veriler ile sınanmıştır. Bunun
haricinde mobil ve web tarafında sistem olabilecek her türlü duruma göre
test edilmiştrir. Kullanıcı hataları nedeniyle geri alınamayacak derecede
büyük kayıplara yol açacak işlemler yoktur.
58
7. GELECEK ÇALIŞMALAR
Sağlıklı Yaşam İzleme Platformu ile sağlık bilgi sistemlerinde doktor-yaşlı
birey arasındaki ilişkinin güçlenmesi amaçlanmıştır. Mesajlaşma özelliği ile
anında müdahale gerçekleştirip acil durumların biraz da olsa önüne geçilmektedir.
Uygulamanın bu kadar önemli bir görev üstlenmesinden ötürü gelecek
çalışmalarda ilk olarak uygulamanın daha stabil hale getirilmesi amaçlanmaktadır.
Daha sonraki aşamada Makine Öğrenmesi teknolojisi ile sisteme kayıtlı
olan bütün yaşlı bireylerin verileri işlenerek sistemin yaşlı kullanıcılara bazı
tavsiyelerde bulunması amaçlanmaktadır. Bu tavsiyeler:
 Adım sayısının az olduğu ve havanın uygun olduğu anlaşıldığında sistemin
yaşlı kullanıcıya yürüyüş tavsiyesinde bulunması,
 Yaşlı bireyin tansiyon bilgilerine göre diyet programı tavsiye etme,
 Yaşlı bireyin nabzı kötüye gittiğinde hastanın bağlı olduğu doktora anlık
bildirim gitmesi ve doktorun takvimine göre en erken zamana hastaya
randevu verilmesi.
 Aktivite durumlarına göre günlük uyuması gereken saati tavsiye etme vs.
Bu aşamadan sonra doktor ve yaşlı birey arasındaki ilişkiyi daha da arttıracak
tedavi öneri mekanizmasının uygulamaya dahil edilmesi hedeflenmektedir.
Bu değerlerin de sisteme eklenmesiyle hastane vb. kuruluşlarda yaygın bir
şekilde kullanımın olacağı düşünülmektedir.
59
8. KAYNAKÇA
“IoT Nedir?” https://www.karel.com.tr/blog/internet-things-nesnelerin-internetinedir-
cihazlarin-etkilesim-trendleri [1].
“IoT Nedir?” https://www.ibm.com/blogs/internet-of-things/what-is-the-iot/ [2].
“IoT İmkanları”, http://searchhealthit.techtarget.com/essentialguide/A-guide-tohealthcare-
IoT-possibilities-and-obstacles [3].
Çanakkale Onsekiz Mart Üniversitesi Fen Bilimleri Enstitüsü Dergisi, 2016:2, 2,
01-19, Ömer Eryılmaz, İsmail Kahraman, Mustafa Şahin, Kalp Hastaları İçin
Bulut Bilişim Temelli Erken Uyarı Sistemi [4].
https://www.dermedya.com/post/saglik-sektorunde-nesnelerin-interneti-kullanimive-
avantajlari [5].
Groupama Healpy, https://www.groupama.com.tr/hakkimizda/medya/basinodasi/
basin-bultenleri/groupamadan-cebinizdeki-saglik-asistani-healpy [6].
“Çevik Yazılım Geliştirme Metodu”, http://www.acmsoftware.
com/Pdf/AboutAgile.pdf [7] .
https://www.mediaclick.com.tr/blog/react-js-nedir [8].
“MongoDb“, https://docs.mongodb.com/manual/introduction [9].
“NodeJs”, https://nodejs.org/ (Son Erişim: 5 Mart 2018) [10].
https://www.samsung.com/tr/support/mobile-devices/what-are-the-main-smartfeatures-
of-the-gear-fit2-pro/ [11].
https://caylakyazilimci.com/post/dotnet-core-nedir [12].
http://wpmod.com/nedir-bu-bootstrap.html [13].
https://medium.com/turkce/react-native-nedir-cd2ec1e38154 [14].
“Android Studio Dersleri”, http://umiitkose.com/wpcontent/
uploads/2015/08/AndroidStudio.pdf [15].
”Firebase Nedir? Avantajları Nelerdir?”,
https://gelecegiyazanlar.turkcell.com.tr/blog/firebase-nedir-avantajlari-nelerdir
[16].
“Git & GitHub”, https://cahitsoyman.blogspot.com/2015/02/github-nedir-ve-neise-
yarar.html [17].
https://gelecegiyazanlar.turkcell.com.tr/konu/web-programlama/egitim/301-
javascript/javascript-nedir [18].
60
