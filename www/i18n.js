/* КИ-Поле · i18n — система переводов · 14 языков */
(function(){
'use strict';

const T = {
  // ───────────────────────── РУССКИЙ ─────────────────────────
  ru: {
    'app.title':'КИ-Поле',
    'nav.overview':'Обзор','nav.steps':'Шаги','nav.tools':'Инструменты','nav.export':'Экспорт',
    'common.save':'Сохранить','common.cancel':'Отмена','common.ok':'ОК','common.delete':'Удалить',
    'common.add':'Добавить','common.close':'Закрыть','common.clear':'Очистить','common.yes':'Да','common.no':'Нет',
    'overview.title':'Общие сведения об объекте','overview.workType':'Тип работ',
    'overview.object':'Объект (адрес / описание)','overview.date':'Дата выезда',
    'overview.cadnum':'Кадастровый номер','overview.engineer':'Инженер (ФИО, аттестат, СРО)',
    'overview.customer':'Заказчик','overview.geo':'Геолокация','overview.qr':'QR-код кадастрового номера',
    'overview.history':'История выездов','overview.timer':'Таймер выезда','overview.quick':'Быстрые действия',
    'timer.start':'Старт','timer.pause':'Пауза','timer.reset':'Сброс',
    'tools.area':'Площадь','tools.mansard':'Мансарда','tools.check':'Контроль','tools.geo':'Геодезия',
    'tools.crs':'CRS / МСК','tools.zu':'ЗУ','tools.nspd':'НСПД','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Заметки','tools.devices':'Приборы',
    'step.0':'Оборудование и документы','step.1':'Сравнение «план-факт»','step.2':'Инструментальные обмеры',
    'step.3':'Фотофиксация','step.4':'Абрис и контроль','step.5':'Геодезические работы',
    'step.6':'Межевание ЗУ','step.7':'Расширенный техплан ОКС','step.8':'Акт обследования',
    'step.9':'Согласования, документы, ПДн','step.10':'Безопасность и организация','step.11':'Нормативы и XML-схемы',
    'settings.title':'Настройки','settings.language':'Язык интерфейса',
    'picker.title':'Выберите язык','picker.subtitle':'Выберите язык интерфейса. Позже его можно изменить в настройках.',
    'menu.language':'Язык'
  },
  // ───────────────────────── ENGLISH ─────────────────────────
  en: {
    'app.title':'KI-Field',
    'nav.overview':'Overview','nav.steps':'Steps','nav.tools':'Tools','nav.export':'Export',
    'common.save':'Save','common.cancel':'Cancel','common.ok':'OK','common.delete':'Delete',
    'common.add':'Add','common.close':'Close','common.clear':'Clear','common.yes':'Yes','common.no':'No',
    'overview.title':'Object summary','overview.workType':'Work type',
    'overview.object':'Object (address / description)','overview.date':'Visit date',
    'overview.cadnum':'Cadastral number','overview.engineer':'Engineer (name, cert., SRO)',
    'overview.customer':'Customer','overview.geo':'Geolocation','overview.qr':'Cadastral number QR code',
    'overview.history':'Visit history','overview.timer':'Visit timer','overview.quick':'Quick actions',
    'timer.start':'Start','timer.pause':'Pause','timer.reset':'Reset',
    'tools.area':'Area','tools.mansard':'Mansard','tools.check':'Check','tools.geo':'Geodesy',
    'tools.crs':'CRS / MSC','tools.zu':'Land plot','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Notes','tools.devices':'Devices',
    'step.0':'Equipment & documents','step.1':'Plan vs. actual','step.2':'Instrumental measurements',
    'step.3':'Photo documentation','step.4':'Sketch & control','step.5':'Geodetic works',
    'step.6':'Land survey','step.7':'Extended technical plan','step.8':'Inspection act',
    'step.9':'Approvals, documents, PDn','step.10':'Safety & organization','step.11':'Standards & XML schemas',
    'settings.title':'Settings','settings.language':'Interface language',
    'picker.title':'Choose language','picker.subtitle':'Select the interface language. You can change it later in settings.',
    'menu.language':'Language'
  },
  // ───────────────────────── УЗБЕКСКИЙ ─────────────────────────
  uz: {
    'app.title':'KI-Dala',
    'nav.overview':'Umumiy','nav.steps':'Bosqichlar','nav.tools':'Vositalar','nav.export':'Eksport',
    'common.save':'Saqlash','common.cancel':'Bekor qilish','common.ok':'OK','common.delete':'O‘chirish',
    'common.add':'Qo‘shish','common.close':'Yopish','common.clear':'Tozalash','common.yes':'Ha','common.no':'Yo‘q',
    'overview.title':'Obyekt haqida ma’lumot','overview.workType':'Ish turi',
    'overview.object':'Obyekt (manzil / tavsif)','overview.date':'Tashrif sanasi',
    'overview.cadnum':'Kadastr raqami','overview.engineer':'Muhandis (F.I.Sh., sertifikat, SRO)',
    'overview.customer':'Buyurtmachi','overview.geo':'Geolokatsiya','overview.qr':'Kadastr raqami QR kodi',
    'overview.history':'Tashriflar tarixi','overview.timer':'Tashrif taymeri','overview.quick':'Tezkor amallar',
    'timer.start':'Boshlash','timer.pause':'Pauza','timer.reset':'Tiklash',
    'tools.area':'Yuza','tools.mansard':'Mansarda','tools.check':'Nazorat','tools.geo':'Geodeziya',
    'tools.crs':'CRS / MSK','tools.zu':'Yer uchastkasi','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Eslatmalar','tools.devices':'Asboblar',
    'step.0':'Jihozlar va hujjatlar','step.1':'Reja va fakt','step.2':'Instrumental o‘lchovlar',
    'step.3':'Fotosuratga olish','step.4':'Abris va nazorat','step.5':'Geodezik ishlar',
    'step.6':'Yer uchastkasini o‘lchash','step.7':'Kengaytirilgan texnik reja','step.8':'Tekshiruv dalolatnomasi',
    'step.9':'Kelishuvlar, hujjatlar, PDn','step.10':'Xavfsizlik va tashkil etish','step.11':'Normativlar va XML',
    'settings.title':'Sozlamalar','settings.language':'Interfeys tili',
    'picker.title':'Tilni tanlang','picker.subtitle':'Interfeys tilini tanlang. Keyinchalik sozlamalarda o‘zgartirishingiz mumkin.',
    'menu.language':'Til'
  },
  // ───────────────────────── ТАДЖИКСКИЙ ─────────────────────────
  tg: {
    'app.title':'КИ-Майдон',
    'nav.overview':'Умумӣ','nav.steps':'Қадамҳо','nav.tools':'Асбобҳо','nav.export':'Содирот',
    'common.save':'Нигоҳ доштан','common.cancel':'Бекор кардан','common.ok':'OK','common.delete':'Нест кардан',
    'common.add':'Илова','common.close':'Пӯшидан','common.clear':'Тоза кардан','common.yes':'Ҳа','common.no':'Не',
    'overview.title':'Маълумоти умумӣ дар бораи объект','overview.workType':'Намуди кор',
    'overview.object':'Объект (суроға / тавсиф)','overview.date':'Санаи сафар',
    'overview.cadnum':'Рақами кадастрӣ','overview.engineer':'Муҳандис (Ном, шаҳодатнома, СРО)',
    'overview.customer':'Фармоишгар','overview.geo':'Геолокатсия','overview.qr':'QR-коди рақами кадастрӣ',
    'overview.history':'Таърихи сафарҳо','overview.timer':'Таймери сафар','overview.quick':'Амалҳои зуд',
    'timer.start':'Оғоз','timer.pause':'Таваққуф','timer.reset':'Барқарор',
    'tools.area':'Масоҳат','tools.mansard':'Мансарда','tools.check':'Назорат','tools.geo':'Геодезия',
    'tools.crs':'CRS / МСК','tools.zu':'Қитъаи замин','tools.nspd':'НСПД','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Қайдҳо','tools.devices':'Асбобҳо',
    'step.0':'Таҷҳизот ва ҳуҷҷатҳо','step.1':'Муқоисаи нақша ва воқеият','step.2':'Ченакҳои инструменталӣ',
    'step.3':'Аксбардорӣ','step.4':'Абрис ва назорат','step.5':'Корҳои геодезӣ',
    'step.6':'Ченкунии қитъаи замин','step.7':'Нақшаи техникии васеъ','step.8':'Санади тафтиш',
    'step.9':'Созишномаҳо, ҳуҷҷатҳо, ПДн','step.10':'Бехатарӣ ва ташкил','step.11':'Меъёрҳо ва XML',
    'settings.title':'Танзимот','settings.language':'Забони интерфейс',
    'picker.title':'Забонро интихоб кунед','picker.subtitle':'Забони интерфейсро интихоб кунед. Баъдтар метавонед дар танзимот иваз кунед.',
    'menu.language':'Забон'
  },
  // ───────────────────────── КИРГИЗСКИЙ ─────────────────────────
  ky: {
    'app.title':'КИ-Талаа',
    'nav.overview':'Жалпы','nav.steps':'Кадамдар','nav.tools':'Куралдар','nav.export':'Экспорт',
    'common.save':'Сактоо','common.cancel':'Жокко чыгаруу','common.ok':'OK','common.delete':'Өчүрүү',
    'common.add':'Кошуу','common.close':'Жабуу','common.clear':'Тазалоо','common.yes':'Ооба','common.no':'Жок',
    'overview.title':'Объект жөнүндө жалпы маалымат','overview.workType':'Иш түрү',
    'overview.object':'Объект (дарек / сүрөттөмө)','overview.date':'Баруу күнү',
    'overview.cadnum':'Кадастрдык номер','overview.engineer':'Инженер (аты-жөнү, күбөлүк, СРО)',
    'overview.customer':'Заказчик','overview.geo':'Геолокация','overview.qr':'Кадастрдык номердин QR коду',
    'overview.history':'Баруу тарыхы','overview.timer':'Баруу таймери','overview.quick':'Ыкчам аракеттер',
    'timer.start':'Баштоо','timer.pause':'Тыныгуу','timer.reset':'Калыбына келтирүү',
    'tools.area':'Аянт','tools.mansard':'Мансарда','tools.check':'Көзөмөл','tools.geo':'Геодезия',
    'tools.crs':'CRS / МСК','tools.zu':'Жер тилкеси','tools.nspd':'НСПД','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Эскертүүлөр','tools.devices':'Аспаптар',
    'step.0':'Жабдуу жана документтер','step.1':'План жана факт','step.2':'Инструменталдык өлчөөлөр',
    'step.3':'Фотофиксация','step.4':'Абрис жана көзөмөл','step.5':'Геодезиялык иштер',
    'step.6':'Жер тилкесин өлчөө','step.7':'Кеңейтилген техникалык план','step.8':'Текшерүү актысы',
    'step.9':'Макулдашуулар, документтер, ЖМД','step.10':'Коопсуздук жана уюштуруу','step.11':'Ченемдер жана XML',
    'settings.title':'Жөндөөлөр','settings.language':'Интерфейс тили',
    'picker.title':'Тилди тандаңыз','picker.subtitle':'Интерфейс тилин тандаңыз. Кийинчерээк жөндөөлөрдөн өзгөртө аласыз.',
    'menu.language':'Тил'
  },
  // ───────────────────────── КАЗАХСКИЙ ─────────────────────────
  kk: {
    'app.title':'КИ-Дала',
    'nav.overview':'Шолу','nav.steps':'Қадамдар','nav.tools':'Құралдар','nav.export':'Экспорт',
    'common.save':'Сақтау','common.cancel':'Болдырмау','common.ok':'OK','common.delete':'Жою',
    'common.add':'Қосу','common.close':'Жабу','common.clear':'Тазалау','common.yes':'Иә','common.no':'Жоқ',
    'overview.title':'Нысан туралы жалпы мәлімет','overview.workType':'Жұмыс түрі',
    'overview.object':'Нысан (мекенжай / сипаттама)','overview.date':'Бару күні',
    'overview.cadnum':'Кадастрлық нөмір','overview.engineer':'Инженер (аты-жөні, куәлік, СРО)',
    'overview.customer':'Тапсырыс беруші','overview.geo':'Геолокация','overview.qr':'Кадастрлық нөмірдің QR коды',
    'overview.history':'Бару тарихы','overview.timer':'Бару таймері','overview.quick':'Жылдам әрекеттер',
    'timer.start':'Бастау','timer.pause':'Кідірту','timer.reset':'Қалпына келтіру',
    'tools.area':'Аудан','tools.mansard':'Мансарда','tools.check':'Бақылау','tools.geo':'Геодезия',
    'tools.crs':'CRS / МСК','tools.zu':'Жер телімі','tools.nspd':'НСПД','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Жазбалар','tools.devices':'Аспаптар',
    'step.0':'Жабдық және құжаттар','step.1':'Жоспар мен факт','step.2':'Аспаптық өлшемдер',
    'step.3':'Фототүсірілім','step.4':'Абрис және бақылау','step.5':'Геодезиялық жұмыстар',
    'step.6':'Жер телімін өлшеу','step.7':'Кеңейтілген техникалық жоспар','step.8':'Тексеру актісі',
    'step.9':'Келісімдер, құжаттар, ЖДн','step.10':'Қауіпсіздік және ұйымдастыру','step.11':'Нормативтер және XML',
    'settings.title':'Параметрлер','settings.language':'Интерфейс тілі',
    'picker.title':'Тілді таңдаңыз','picker.subtitle':'Интерфейс тілін таңдаңыз. Кейінірек параметрлерде өзгерте аласыз.',
    'menu.language':'Тіл'
  },
  // ───────────────────────── ТУРКМЕНСКИЙ ─────────────────────────
  tk: {
    'app.title':'KI-Meýdan',
    'nav.overview':'Umumy','nav.steps':'Ädimler','nav.tools':'Gurallar','nav.export':'Eksport',
    'common.save':'Ýazdyrmak','common.cancel':'Ýatyrmak','common.ok':'OK','common.delete':'Pozmak',
    'common.add':'Goşmak','common.close':'Ýapmak','common.clear':'Arassalamak','common.yes':'Hawa','common.no':'Ýok',
    'overview.title':'Obagat barada umumy maglumat','overview.workType':'Işiň görnüşi',
    'overview.object':'Obýekt (salgy / düşündiriş)','overview.date':'Gidiş senesi',
    'overview.cadnum':'Kadastr belgisi','overview.engineer':'Inžener (F.A.A., şahadatnama, SRO)',
    'overview.customer':'Sargyt ediji','overview.geo':'Geolokasiýa','overview.qr':'Kadastr belgisiniň QR kody',
    'overview.history':'Gidişleriň taryhy','overview.timer':'Gidiş taýmeri','overview.quick':'Çalt hereketler',
    'timer.start':'Başlamak','timer.pause':'Arakesme','timer.reset':'Täzeden başlamak',
    'tools.area':'Meýdan','tools.mansard':'Mansarda','tools.check':'Gözegçilik','tools.geo':'Geodeziýa',
    'tools.crs':'CRS / MSK','tools.zu':'Ýer bölegi','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Bellikler','tools.devices':'Enjamlar',
    'step.0':'Enjamlar we resminamalar','step.1':'Meýilnama we hakykat','step.2':'Instrumental ölçegler',
    'step.3':'Fotoşekillendiriş','step.4':'Abris we gözegçilik','step.5':'Geodezik işler',
    'step.6':'Ýer bölegini ölçemek','step.7':'Giňeldilen tehniki meýilnama','step.8':'Barlag namasy',
    'step.9':'Ylalaşyklar, resminamalar, ŞM','step.10':'Howpsuzlyk we gurama','step.11':'Normatiwler we XML',
    'settings.title':'Sazlamalar','settings.language':'Interfeýs dili',
    'picker.title':'Dil saýlaň','picker.subtitle':'Interfeýs dilini saýlaň. Soňra sazlamalarda üýtgedip bilersiňiz.',
    'menu.language':'Dil'
  },
  // ───────────────────────── АЗЕРБАЙДЖАНСКИЙ ─────────────────────────
  az: {
    'app.title':'Kİ-Sahə',
    'nav.overview':'İcmal','nav.steps':'Addımlar','nav.tools':'Alətlər','nav.export':'İxrac',
    'common.save':'Yadda saxla','common.cancel':'Ləğv et','common.ok':'OK','common.delete':'Sil',
    'common.add':'Əlavə et','common.close':'Bağla','common.clear':'Təmizlə','common.yes':'Bəli','common.no':'Xeyr',
    'overview.title':'Obyekt haqqında ümumi məlumat','overview.workType':'İş növü',
    'overview.object':'Obyekt (ünvan / təsvir)','overview.date':'Səfər tarixi',
    'overview.cadnum':'Kadastr nömrəsi','overview.engineer':'Mühəndis (A.A.A., şəhadətnamə, SRO)',
    'overview.customer':'Sifarişçi','overview.geo':'Geolokasiya','overview.qr':'Kadastr nömrəsinin QR kodu',
    'overview.history':'Səfər tarixçəsi','overview.timer':'Səfər taymeri','overview.quick':'Sürətli əməliyyatlar',
    'timer.start':'Başla','timer.pause':'Fasilə','timer.reset':'Sıfırla',
    'tools.area':'Sahə','tools.mansard':'Mansard','tools.check':'Nəzarət','tools.geo':'Geodeziya',
    'tools.crs':'CRS / MSK','tools.zu':'Torpaq sahəsi','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Qeydlər','tools.devices':'Cihazlar',
    'step.0':'Avadanlıq və sənədlər','step.1':'Plan və fakt','step.2':'İnstrumental ölçmələr',
    'step.3':'Fotoqeydiyyat','step.4':'Abris və nəzarət','step.5':'Geodeziya işləri',
    'step.6':'Torpaq sahəsinin ölçülməsi','step.7':'Genişləndirilmiş texniki plan','step.8':'Yoxlama aktı',
    'step.9':'Razılaşmalar, sənədlər, ŞM','step.10':'Təhlükəsizlik və təşkilat','step.11':'Normativlər və XML',
    'settings.title':'Tənzimləmələr','settings.language':'İnterfeys dili',
    'picker.title':'Dil seçin','picker.subtitle':'İnterfeys dilini seçin. Sonradan tənzimləmələrdə dəyişə bilərsiniz.',
    'menu.language':'Dil'
  },
  // ───────────────────────── АРМЯНСКИЙ ─────────────────────────
  hy: {
    'app.title':'KI-Dաշտ',
    'nav.overview':'Обзор','nav.steps':'Քայլեր','nav.tools':'Գործիքներ','nav.export':'Արտահանում',
    'common.save':'Պահել','common.cancel':'Չեղարկել','common.ok':'OK','common.delete':'Ջնջել',
    'common.add':'Ավելացնել','common.close':'Փակել','common.clear':'Մաքրել','common.yes':'Այո','common.no':'Ոչ',
    'overview.title':'Օբյեկտի ընդհանուր տեղեկություն','overview.workType':'Աշխատանքի տեսակ',
    'overview.object':'Օբյեկտ (հասցե / նկարագրություն)','overview.date':'Այցի ամսաթիվ',
    'overview.cadnum':'Կադաստրային համար','overview.engineer':'Ինժեներ (Ա.Ա.Հ., վկայական, ՍՐՈ)',
    'overview.customer':'Պատվիրատու','overview.geo':'Գեոլոկացիա','overview.qr':'Կադաստրային համարի QR կոդ',
    'overview.history':'Այցերի պատմություն','overview.timer':'Այցի թայմեր','overview.quick':'Արագ գործողություններ',
    'timer.start':'Սկսել','timer.pause':'Դադար','timer.reset':'Վերականգնել',
    'tools.area':'Մակերես','tools.mansard':'Մանսարդ','tools.check':'Ստուգում','tools.geo':'Գեոդեզիա',
    'tools.crs':'CRS / MSK','tools.zu':'Հողատարածք','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Նշումներ','tools.devices':'Սարքեր',
    'step.0':'Սարքավորում և փաստաթղթեր','step.1':'Պլան և փաստ','step.2':'Գործիքային չափումներ',
    'step.3':'Լուսանկարում','step.4':'Աբրիս և ստուգում','step.5':'Գեոդեզիական աշխատանքներ',
    'step.6':'Հողատարածքի չափում','step.7':'Ընդլայնված տեխնիկական պլան','step.8':'Զննության ակտ',
    'step.9':'Համաձայնություններ, փաստաթղթեր, ԱՏ','step.10':'Անվտանգություն և կազմակերպում','step.11':'Նորմատիվներ և XML',
    'settings.title':'Կարգավորումներ','settings.language':'Ինտերֆեյսի լեզու',
    'picker.title':'Ընտրեք լեզուն','picker.subtitle':'Ընտրեք ինտերֆեյսի լեզուն։ Հետագայում կարող եք փոխել կարգավորումներում։',
    'menu.language':'Լեզու'
  },
  // ───────────────────────── ГРУЗИНСКИЙ ─────────────────────────
  ka: {
    'app.title':'KI-ველი',
    'nav.overview':'მიმოხილვა','nav.steps':'ნაბიჯები','nav.tools':'ინსტრუმენტები','nav.export':'ექსპორტი',
    'common.save':'შენახვა','common.cancel':'გაუქმება','common.ok':'OK','common.delete':'წაშლა',
    'common.add':'დამატება','common.close':'დახურვა','common.clear':'გასუფთავება','common.yes':'დიახ','common.no':'არა',
    'overview.title':'ობიექტის ზოგადი ინფორმაცია','overview.workType':'სამუშაოს ტიპი',
    'overview.object':'ობიექტი (მისამართი / აღწერა)','overview.date':'ვიზიტის თარიღი',
    'overview.cadnum':'საკადასტრო ნომერი','overview.engineer':'ინჟინერი (სახელი, სერტიფიკატი, SRO)',
    'overview.customer':'დამკვეთი','overview.geo':'გეოლოკაცია','overview.qr':'საკადასტრო ნომრის QR კოდი',
    'overview.history':'ვიზიტების ისტორია','overview.timer':'ვიზიტის ტაიმერი','overview.quick':'სწრაფი მოქმედებები',
    'timer.start':'დაწყება','timer.pause':'პაუზა','timer.reset':'განულება',
    'tools.area':'ფართობი','tools.mansard':'მანსარდა','tools.check':'კონტროლი','tools.geo':'გეოდეზია',
    'tools.crs':'CRS / MSK','tools.zu':'მიწის ნაკვეთი','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'შენიშვნები','tools.devices':'მოწყობილობები',
    'step.0':'აღჭურვილობა და დოკუმენტები','step.1':'გეგმა და ფაქტი','step.2':'ინსტრუმენტული გაზომვები',
    'step.3':'ფოტოფიქსაცია','step.4':'აბრისი და კონტროლი','step.5':'გეოდეზიური სამუშაოები',
    'step.6':'მიწის ნაკვეთის გაზომვა','step.7':'გაფართოებული ტექნიკური გეგმა','step.8':'შემოწმების აქტი',
    'step.9':'შეთანხმებები, დოკუმენტები, პდ','step.10':'უსაფრთხოება და ორგანიზაცია','step.11':'ნორმატივები და XML',
    'settings.title':'პარამეტრები','settings.language':'ინტერფეისის ენა',
    'picker.title':'აირჩიეთ ენა','picker.subtitle':'აირჩიეთ ინტერფეისის ენა. მოგვიანებით შეგიძლიათ შეცვალოთ პარამეტრებში.',
    'menu.language':'ენა'
  },
  // ───────────────────────── БЕЛОРУССКИЙ ─────────────────────────
  be: {
    'app.title':'КІ-Поле',
    'nav.overview':'Агляд','nav.steps':'Крокі','nav.tools':'Інструменты','nav.export':'Экспарт',
    'common.save':'Захаваць','common.cancel':'Адмена','common.ok':'OK','common.delete':'Выдаліць',
    'common.add':'Дадаць','common.close':'Закрыць','common.clear':'Ачысціць','common.yes':'Так','common.no':'Не',
    'overview.title':'Агульныя звесткі пра аб’ект','overview.workType':'Тып работ',
    'overview.object':'Аб’ект (адрас / апісанне)','overview.date':'Дата выезду',
    'overview.cadnum':'Кадастравы нумар','overview.engineer':'Інжынер (ПІБ, атэстат, СРА)',
    'overview.customer':'Заказчык','overview.geo':'Геалакацыя','overview.qr':'QR-код кадастравага нумара',
    'overview.history':'Гісторыя выездаў','overview.timer':'Таймер выезду','overview.quick':'Хуткія дзеянні',
    'timer.start':'Старт','timer.pause':'Пауза','timer.reset':'Скід',
    'tools.area':'Плошча','tools.mansard':'Мансарда','tools.check':'Кантроль','tools.geo':'Геадэзія',
    'tools.crs':'CRS / МСК','tools.zu':'ЗУ','tools.nspd':'НСПД','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Нататкі','tools.devices':'Прылады',
    'step.0':'Абсталяванне і дакументы','step.1':'Параўнанне «план-факт»','step.2':'Інструментальныя абмеры',
    'step.3':'Фотафіксацыя','step.4':'Абрыс і кантроль','step.5':'Геадэзічныя работы',
    'step.6':'Мяжаванне ЗУ','step.7':'Пашыраны тэхплан АКС','step.8':'Акт абследавання',
    'step.9':'Узгадненні, дакументы, ПДн','step.10':'Бяспека і арганізацыя','step.11':'Нарматывы і XML',
    'settings.title':'Налады','settings.language':'Мова інтэрфейсу',
    'picker.title':'Выберыце мову','picker.subtitle':'Выберыце мову інтэрфейсу. Пазней можна змяніць у наладах.',
    'menu.language':'Мова'
  },
  // ───────────────────────── МОЛДАВСКИЙ (румынский) ─────────────────────────
  mo: {
    'app.title':'KI-Câmp',
    'nav.overview':'Prezentare','nav.steps':'Pași','nav.tools':'Instrumente','nav.export':'Export',
    'common.save':'Salvează','common.cancel':'Anulează','common.ok':'OK','common.delete':'Șterge',
    'common.add':'Adaugă','common.close':'Închide','common.clear':'Curăță','common.yes':'Da','common.no':'Nu',
    'overview.title':'Informații generale despre obiect','overview.workType':'Tipul lucrării',
    'overview.object':'Obiect (adresă / descriere)','overview.date':'Data deplasării',
    'overview.cadnum':'Număr cadastral','overview.engineer':'Inginer (nume, certificat, SRO)',
    'overview.customer':'Beneficiar','overview.geo':'Geolocație','overview.qr':'Cod QR al numărului cadastral',
    'overview.history':'Istoricul deplasărilor','overview.timer':'Cronometru deplasare','overview.quick':'Acțiuni rapide',
    'timer.start':'Start','timer.pause':'Pauză','timer.reset':'Resetare',
    'tools.area':'Suprafață','tools.mansard':'Mansardă','tools.check':'Verificare','tools.geo':'Geodezie',
    'tools.crs':'CRS / MSK','tools.zu':'Teren','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Note','tools.devices':'Dispozitive',
    'step.0':'Echipament și documente','step.1':'Comparație plan-fapt','step.2':'Măsurători instrumentale',
    'step.3':'Fixare foto','step.4':'Abris și control','step.5':'Lucrări geodezice',
    'step.6':'Măsurarea terenului','step.7':'Plan tehnic extins','step.8':'Act de inspecție',
    'step.9':'Avize, documente, PD','step.10':'Siguranță și organizare','step.11':'Normative și XML',
    'settings.title':'Setări','settings.language':'Limba interfeței',
    'picker.title':'Alegeți limba','picker.subtitle':'Selectați limba interfeței. O puteți schimba ulterior în setări.',
    'menu.language':'Limbă'
  },
  // ───────────────────────── КИТАЙСКИЙ ─────────────────────────
  zh: {
    'app.title':'KI-外业',
    'nav.overview':'概览','nav.steps':'步骤','nav.tools':'工具','nav.export':'导出',
    'common.save':'保存','common.cancel':'取消','common.ok':'确定','common.delete':'删除',
    'common.add':'添加','common.close':'关闭','common.clear':'清空','common.yes':'是','common.no':'否',
    'overview.title':'对象基本信息','overview.workType':'工作类型',
    'overview.object':'对象（地址 / 描述）','overview.date':'外业日期',
    'overview.cadnum':'地籍编号','overview.engineer':'工程师（姓名、证书、SRO）',
    'overview.customer':'委托方','overview.geo':'地理位置','overview.qr':'地籍编号二维码',
    'overview.history':'外业历史','overview.timer':'外业计时器','overview.quick':'快捷操作',
    'timer.start':'开始','timer.pause':'暂停','timer.reset':'重置',
    'tools.area':'面积','tools.mansard':'阁楼','tools.check':'检查','tools.geo':'测量',
    'tools.crs':'CRS / MSC','tools.zu':'地块','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'备注','tools.devices':'仪器',
    'step.0':'设备与文件','step.1':'方案与实际对比','step.2':'仪器测量',
    'step.3':'拍照记录','step.4':'草图与检查','step.5':'测量工作',
    'step.6':'地块测量','step.7':'扩展技术方案','step.8':'检查报告',
    'step.9':'审批、文件、个人数据','step.10':'安全与组织','step.11':'规范与 XML',
    'settings.title':'设置','settings.language':'界面语言',
    'picker.title':'选择语言','picker.subtitle':'请选择界面语言。稍后可在设置中更改。',
    'menu.language':'语言'
  },
  // ───────────────────────── ВЬЕТНАМСКИЙ ─────────────────────────
  vi: {
    'app.title':'KI-Hiện trường',
    'nav.overview':'Tổng quan','nav.steps':'Các bước','nav.tools':'Công cụ','nav.export':'Xuất',
    'common.save':'Lưu','common.cancel':'Hủy','common.ok':'OK','common.delete':'Xóa',
    'common.add':'Thêm','common.close':'Đóng','common.clear':'Xóa hết','common.yes':'Có','common.no':'Không',
    'overview.title':'Thông tin chung về đối tượng','overview.workType':'Loại công việc',
    'overview.object':'Đối tượng (địa chỉ / mô tả)','overview.date':'Ngày khảo sát',
    'overview.cadnum':'Số địa chính','overview.engineer':'Kỹ sư (họ tên, chứng chỉ, SRO)',
    'overview.customer':'Khách hàng','overview.geo':'Vị trí địa lý','overview.qr':'Mã QR số địa chính',
    'overview.history':'Lịch sử khảo sát','overview.timer':'Đồng hồ khảo sát','overview.quick':'Thao tác nhanh',
    'timer.start':'Bắt đầu','timer.pause':'Tạm dừng','timer.reset':'Đặt lại',
    'tools.area':'Diện tích','tools.mansard':'Tầng áp mái','tools.check':'Kiểm tra','tools.geo':'Trắc địa',
    'tools.crs':'CRS / MSC','tools.zu':'Thửa đất','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'Ghi chú','tools.devices':'Thiết bị',
    'step.0':'Thiết bị và tài liệu','step.1':'So sánh kế hoạch - thực tế','step.2':'Đo đạc bằng dụng cụ',
    'step.3':'Chụp ảnh','step.4':'Sơ đồ và kiểm tra','step.5':'Công việc trắc địa',
    'step.6':'Đo thửa đất','step.7':'Phương án kỹ thuật mở rộng','step.8':'Biên bản kiểm tra',
    'step.9':'Phê duyệt, tài liệu, PD','step.10':'An toàn và tổ chức','step.11':'Tiêu chuẩn và XML',
    'settings.title':'Cài đặt','settings.language':'Ngôn ngữ giao diện',
    'picker.title':'Chọn ngôn ngữ','picker.subtitle':'Chọn ngôn ngữ giao diện. Bạn có thể thay đổi sau trong cài đặt.',
    'menu.language':'Ngôn ngữ'
  },
  // ───────────────────────── АРАБСКИЙ (RTL) ─────────────────────────
  ar: {
    'app.title':'KI-الميدان',
    'nav.overview':'نظرة عامة','nav.steps':'الخطوات','nav.tools':'الأدوات','nav.export':'تصدير',
    'common.save':'حفظ','common.cancel':'إلغاء','common.ok':'موافق','common.delete':'حذف',
    'common.add':'إضافة','common.close':'إغلاق','common.clear':'مسح','common.yes':'نعم','common.no':'لا',
    'overview.title':'معلومات عامة عن الكائن','overview.workType':'نوع العمل',
    'overview.object':'الكائن (العنوان / الوصف)','overview.date':'تاريخ الزيارة',
    'overview.cadnum':'الرقم المساحي','overview.engineer':'المهندس (الاسم، الشهادة، SRO)',
    'overview.customer':'العميل','overview.geo':'الموقع الجغرافي','overview.qr':'رمز QR للرقم المساحي',
    'overview.history':'سجل الزيارات','overview.timer':'مؤقّت الزيارة','overview.quick':'إجراءات سريعة',
    'timer.start':'بدء','timer.pause':'إيقاف مؤقت','timer.reset':'إعادة تعيين',
    'tools.area':'المساحة','tools.mansard':'العلية','tools.check':'التحقق','tools.geo':'الجيوديسيا',
    'tools.crs':'CRS / MSK','tools.zu':'قطعة الأرض','tools.nspd':'NSPD','tools.cad':'CAD/GIS',
    'tools.gnss':'GNSS','tools.voice':'ملاحظات','tools.devices':'الأجهزة',
    'step.0':'المعدات والمستندات','step.1':'مقارنة الخطة بالواقع','step.2':'القياسات بالأجهزة',
    'step.3':'التوثيق بالصور','step.4':'المخطط والتحقق','step.5':'الأعمال الجيوديسية',
    'step.6':'مسح قطعة الأرض','step.7':'المخطط الفني الموسّع','step.8':'محضر الفحص',
    'step.9':'الموافقات والمستندات والبيانات','step.10':'السلامة والتنظيم','step.11':'المعايير و XML',
    'settings.title':'الإعدادات','settings.language':'لغة الواجهة',
    'picker.title':'اختر اللغة','picker.subtitle':'اختر لغة الواجهة. يمكنك تغييرها لاحقًا من الإعدادات.',
    'menu.language':'اللغة'
  }
};

// Коды языков для переключателя
const LANGS = [
  {code:'ru', name:'Русский',        flag:'🇷🇺'},
  {code:'uz', name:'O‘zbekcha',      flag:'🇺🇿'},
  {code:'tg', name:'Тоҷикӣ',         flag:'🇹🇯'},
  {code:'ky', name:'Кыргызча',       flag:'🇰🇬'},
  {code:'kk', name:'Қазақша',        flag:'🇰🇿'},
  {code:'tk', name:'Türkmençe',      flag:'🇹🇲'},
  {code:'az', name:'Azərbaycanca',   flag:'🇦🇿'},
  {code:'hy', name:'Հայերեն',        flag:'🇦🇲'},
  {code:'ka', name:'ქართული',        flag:'🇬🇪'},
  {code:'be', name:'Беларуская',     flag:'🇧🇾'},
  {code:'mo', name:'Română',         flag:'🇲🇩'},
  {code:'zh', name:'中文',            flag:'🇨🇳'},
  {code:'vi', name:'Tiếng Việt',     flag:'🇻🇳'},
  {code:'ar', name:'العربية',        flag:'🇸🇦'}
];

const RTL_LANGS = ['ar'];
const STORAGE_KEY = 'kipole_lang';

function getLang(){
  return localStorage.getItem(STORAGE_KEY) || null;
}

function t(key){
  const lang = getLang() || 'ru';
  return (T[lang] && T[lang][key]) || (T.ru[key]) || key;
}

function applyI18n(root){
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  root.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });
}

function setLang(code){
  if (!T[code]) code = 'ru';
  localStorage.setItem(STORAGE_KEY, code);
  const isRTL = RTL_LANGS.includes(code);
  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', isRTL);
  applyI18n();
  try { window.dispatchEvent(new Event('languageChanged')); } catch(_){}
}

function showLanguagePicker(force){
  if (!force && getLang()) return;
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.style.zIndex = '100000';
  bd.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" style="max-width:520px;">
      <h3 style="text-align:center;text-transform:none;font-size:1.15rem;">🌐 ${t('picker.title')}</h3>
      <p class="text-muted" style="text-align:center;margin-bottom:14px;font-size:.88rem;">${t('picker.subtitle')}</p>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;max-height:60vh;overflow-y:auto;">
        ${LANGS.map(l => `
          <button class="lang-btn" data-lang="${l.code}" style="display:flex;align-items:center;gap:10px;padding:12px;min-height:52px;background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:10px;font-size:.9rem;text-align:left;justify-content:flex-start;">
            <span style="font-size:1.3rem;">${l.flag}</span>
            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;">${l.name}</span>
          </button>`).join('')}
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setLang(btn.dataset.lang);
    bd.remove();
    try { if (typeof window.toast === 'function') window.toast('✓ ' + LANGS.find(l=>l.code===btn.dataset.lang).name, 'success'); } catch(_){}
  });
}

function showLanguageMenu(){
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.style.zIndex = '100000';
  const current = getLang() || 'ru';
  bd.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" style="max-width:520px;">
      <h3 style="text-align:center;text-transform:none;font-size:1.15rem;">🌐 ${t('settings.language')}</h3>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;max-height:60vh;overflow-y:auto;margin-top:12px;">
        ${LANGS.map(l => `
          <button class="lang-btn" data-lang="${l.code}" style="display:flex;align-items:center;gap:10px;padding:12px;min-height:52px;background:${l.code===current?'var(--primary)':'var(--bg)'};color:${l.code===current?'#fff':'var(--text)'};border:1px solid ${l.code===current?'var(--primary)':'var(--border)'};border-radius:10px;font-size:.9rem;text-align:left;justify-content:flex-start;">
            <span style="font-size:1.3rem;">${l.flag}</span>
            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;">${l.name}</span>
          </button>`).join('')}
      </div>
      <div class="modal-actions" style="margin-top:14px;">
        <button class="ghost" data-act="close">${t('common.close')}</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  const close = () => { bd.remove(); try { window.unlockScroll && window.unlockScroll(); } catch(_){} };
  bd.addEventListener('click', e => {
    if (e.target === bd || e.target.closest('[data-act="close"]')) return close();
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setLang(btn.dataset.lang);
    close();
    setTimeout(() => { if (typeof window.toast === 'function') window.toast('✓ ' + btn.textContent.trim(), 'success'); }, 100);
  });
  try { window.lockScroll && window.lockScroll(); } catch(_){}
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const saved = getLang();
  if (saved) {
    setLang(saved);
  } else {
    // Применяем русский как базовый, потом покажем выбор языка
    setLang('ru');
    setTimeout(() => showLanguagePicker(true), 400);
  }
});

// Автоматическое внедрение пункта «Язык» в меню «Ещё»
(function injectLanguageMenuItem(){
  const origOpenMoreMenu = window.openMoreMenu;
  if (typeof origOpenMoreMenu === 'function') {
    window.openMoreMenu = function(){
      const r = origOpenMoreMenu.apply(this, arguments);
      setTimeout(() => {
        document.querySelectorAll('.more-menu-list').forEach(list => {
          if (list.querySelector('[data-act="language"]')) return;
          const btn = document.createElement('button');
          btn.className = 'more-menu-item';
          btn.setAttribute('data-act', 'language');
          btn.innerHTML = '<span class="more-menu-icon">🌐</span><span class="more-menu-label">' + t('menu.language') + '</span>';
          const firstBtn = list.querySelector('.more-menu-item');
          if (firstBtn) list.insertBefore(btn, firstBtn.nextSibling);
          else list.appendChild(btn);
        });
      }, 10);
      return r;
    };
  }
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act="language"]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const bd = btn.closest('.modal-backdrop');
    if (bd) bd.remove();
    try { window.unlockScroll && window.unlockScroll(); } catch(_){}
    setTimeout(() => showLanguageMenu(), 60);
  }, true);
})();

// Публичный API
window.i18n = { t, setLang, getLang, applyI18n, showLanguageMenu, showLanguagePicker, LANGS };

})();
