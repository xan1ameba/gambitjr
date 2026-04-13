// =====================================================
// ARCHAEO KZ — Открытая Энциклопедия Археологии
// Gambit Jr. FLL Team | Data & Application Logic
// =====================================================

const ARTIFACTS = [
  {
    id: 'vessel-dark',// =====================================================
// ARCHAEO KZ — Открытая Энциклопедия Археологии
// Gambit Jr. FLL Team | Data & Application Logic
// =====================================================

const ARTIFACTS = [
  {
    id: 'vessel-dark',
    name: 'Горшок лепной тёмно-серый',
    nameEn: 'Dark Grey Handmade Ceramic Vessel',
    subtitle: 'Лепной сосуд яйцевидной формы, восстановительный обжиг',
    category: 'ceramics',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка)',
    technique: 'Лепка от руки, заглаживание, восстановительный обжиг',
    dimensions: 'Высота: ~22–26 см, Диаметр тулова: ~18–22 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'vessel-dark-01.jpg',
      'vessel-dark-02.jpg'
    ],
    abstract: 'Лепной сосуд тёмно-серого цвета — один из наиболее характерных типов керамики эпохи бронзы Центрального Казахстана, принадлежащий к андроновской культурно-исторической общности.',
    fullText: `
      <h3>Описание</h3>
      <p>Горшок изготовлен из обожжённой глины тёмно-серого цвета. Форма сосуда — яйцевидная, с плоским дном и слегка отогнутым наружу краем венчика. Стенки равномерной толщины, тщательно заглажены. Поверхность без орнамента, с незначительными следами заглаживания. Рядом с сосудом расположена масштабная линейка с делением 5 см, что позволяет точно определить его размеры.</p>

      <h3>Технология изготовления</h3>
      <p>Сосуд изготовлен методом ручной лепки без применения гончарного круга — характерная черта керамических традиций эпохи бронзы евразийских степей. Тёмно-серый цвет стенок является результатом восстановительного (бескислородного) обжига при температуре 600–800°C. В условиях восстановительной среды углерод не догорает и откладывается в черепке, придавая ему характерный тёмный цвет.</p>

      <h3>Культурный и хронологический контекст</h3>
      <p>Сосуды данного типа характерны для андроновской культурно-исторической общности (XVIII–IX вв. до н.э.) — одного из наиболее масштабных культурных явлений бронзового века Евразии. Андроновские племена занимали обширную территорию от Урала до Енисея и от лесостепи Западной Сибири до горных систем Средней Азии.</p>
      <p>Подобные горшки выступали универсальными сосудами для хранения продуктов, приготовления пищи и использовались в погребальном обряде как часть заупокойного инвентаря — в них помещали пищу для умершего.</p>

      <h3>Значение в археологии</h3>
      <p>Керамика является важнейшим хронологическим и культурно-диагностическим материалом в археологии. Форма, орнаментация и технология производства посуды позволяют точно определить культурную принадлежность памятника и его место в системе межрегиональных связей.</p>
    `,
    tags: ['андроновская культура', 'бронзовый век', 'керамика', 'погребальный инвентарь', 'ручная лепка', 'восстановительный обжиг', 'Казахстан']
  },

  {
    id: 'vessel-brown',
    name: 'Горшок лепной красно-коричневый',
    nameEn: 'Reddish-Brown Handmade Ceramic Vessel',
    subtitle: 'Лепной сосуд с выраженной закопчённостью стенок',
    category: 'ceramics',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка)',
    technique: 'Лепка от руки, заглаживание, окислительный обжиг',
    dimensions: 'Высота: ~20–24 см, Диаметр тулова: ~16–20 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'vessel-brown-01.jpg',
      'vessel-brown-02.jpg'
    ],
    abstract: 'Лепной керамический сосуд красно-коричневого цвета с выраженными следами вторичного обжига — свидетельство его активного использования в хозяйственной жизни до помещения в погребение.',
    fullText: `
      <h3>Описание</h3>
      <p>Горшок округлой формы с выпуклым туловом, слегка суживающейся шейкой и прямым краем венчика. Поверхность сосуда красно-коричневого цвета с выраженными тёмными пятнами — следами вторичного обжига и задымления. Стенки имеют трещины, возникшие в результате термического воздействия и механических нагрузок при длительном использовании.</p>

      <h3>Технология изготовления</h3>
      <p>Сосуд изготовлен методом ручной лепки. Красно-коричневый цвет черепка — результат окислительного обжига, при котором железосодержащие соединения в глине оксидируются, придавая изделию тёплые красно-коричневые тона. Тёмные пятна и полосы на поверхности — следы открытого огня при повседневном использовании.</p>

      <h3>Бытовое и погребальное использование</h3>
      <p>Наличие следов горения указывает на то, что данный горшок активно использовался в повседневной жизни: для приготовления пищи или хранения продуктов. Впоследствии он был помещён в погребение как часть заупокойного инвентаря. Подобная «вторичная» функция посуды широко засвидетельствована в погребальных комплексах эпохи бронзы Казахстана.</p>

      <h3>Сравнительный анализ</h3>
      <p>Данный тип посуды широко представлен на территории Центрального Казахстана в контексте могильников срубно-андроновского времени. Сосуды близкой формы встречаются на памятниках алакульской и фёдоровской субкультур андроновской общности.</p>
    `,
    tags: ['андроновская культура', 'бронзовый век', 'керамика', 'бытовая посуда', 'ручная лепка', 'следы использования', 'Казахстан']
  },

  {
    id: 'bracelets-bronze',
    name: 'Браслеты бронзовые разомкнутые',
    nameEn: 'Open Bronze Bracelets',
    subtitle: 'Пара разомкнутых браслетов округлого сечения с патиной',
    category: 'jewelry',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Бронза (сплав меди и олова)',
    technique: 'Литьё в открытой форме, ковка, полировка',
    dimensions: 'Диаметр: ~6–7 см, Диаметр сечения: ~4–5 мм',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'bracelets-01.jpg',
      'bracelets-02.jpg',
      'bracelets-03.jpg'
    ],
    abstract: 'Пара разомкнутых бронзовых браслетов с круглым сечением — традиционное украшение женского погребального убора эпохи бронзы. Покрыты характерной сине-зелёной патиной, образовавшейся за тысячелетия хранения в земле.',
    fullText: `
      <h3>Описание</h3>
      <p>Пара разомкнутых браслетов, изготовленных из бронзы. Сечение проволоки — круглое, равномерное по всей длине. Концы браслетов слегка заострены. Поверхность покрыта сине-зелёной и коричневато-красной патиной — продуктом длительного окисления меди в почве. Один из браслетов имеет более интенсивную зелёную патину (малахитовую), другой — преимущественно коричневую (куприт).</p>

      <h3>Технология изготовления</h3>
      <p>Браслеты изготовлены методом литья бронзы в открытую форму с последующей ковкой, сгибанием и полировкой. Бронзовый сплав (медь + олово, ~90:10) обладает более низкой температурой плавления, чем чистая медь, и лучшими литейными свойствами. Это делало бронзу идеальным материалом для украшений и орудий труда.</p>

      <h3>Символика и использование</h3>
      <p>Разомкнутые браслеты — один из наиболее распространённых типов украшений эпохи бронзы в евразийских степях. Они составляли часть женского праздничного и погребального убора. По традиции, браслеты носили попарно — на обоих запястьях одновременно. Разомкнутая форма позволяла легко надевать и снимать украшение.</p>

      <h3>Металлургия Бронзового века в Казахстане</h3>
      <p>Казахстан богат медными рудами, и именно он стал одним из главных центров металлургии Евразии в эпоху бронзы. Медные рудники Жезказгана, Сарыарки и Алтая обеспечивали сырьём обширные регионы. Технологии бронзового литья передавались из поколения в поколение и отличались высоким уровнем мастерства.</p>
    `,
    tags: ['бронзовый век', 'украшения', 'бронза', 'браслеты', 'женский убор', 'металлургия', 'погребальный инвентарь', 'патина', 'Казахстан']
  },

  {
    id: 'bone-pendant',
    name: 'Подвеска из зуба животного',
    nameEn: 'Animal Tooth Pendant',
    subtitle: 'Амулет-подвеска с просверленным отверстием',
    category: 'bone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Зуб животного (лошадь или крупный рогатый скот)',
    technique: 'Сверление каменным сверлом, шлифовка',
    dimensions: 'Длина: ~9–12 см, Ширина: ~3–4 см',
    location: 'Казахстан',
    catalogNumber: 'Тк 171/2019/К12/04/3',
    images: [
      'bone-pendant-01.jpg',
      'bone-pendant-02.jpg'
    ],
    abstract: 'Подвеска-амулет из зуба крупного животного с просверленным отверстием. Инвентарный номер Тк 171/2019/К12/04/3 указывает на происхождение из профессиональных раскопок 2019 года.',
    fullText: `
      <h3>Описание</h3>
      <p>Подвеска изготовлена из крупного зуба животного — предположительно, резца лошади или зуба крупного рогатого скота. В более широкой части зуба просверлено круглое отверстие диаметром около 6–8 мм для нанизывания на шнурок или нить. Поверхность предмета отполирована в результате длительного ношения. Цвет — кремово-бежевый с тёмными дентинными жилками. На обороте нанесён штрих-кодовый каталожный номер музея: <strong>Тк 171/2019/К12/04/3</strong>.</p>

      <h3>Технология изготовления</h3>
      <p>Отверстие было просверлено с помощью каменного или костяного сверла методом попеременного вращения. Следы сверления видны в виде тонких концентрических царапин вокруг отверстия. Поверхность дополнительно зашлифована, вероятно, с применением речного песка в качестве абразива.</p>

      <h3>Символическое значение</h3>
      <p>Украшения из зубов животных в древности несли не только декоративную, но и апотропаическую (защитную, магическую) функцию. Зубы крупных животных — символ силы, плодородия и богатства стад, главного источника благосостояния кочевых и скотоводческих племён эпохи бронзы.</p>

      <h3>Расшифровка каталожного номера</h3>
      <p>Обозначение <strong>Тк 171/2019/К12/04/3</strong> позволяет установить точное происхождение предмета: «Тк» — сокращённое название памятника (возможно, Тоқанас или иное), «2019» — год полевых раскопок, «К12» — шифр раскопочного квадрата, «04» — горизонт (слой), «3» — порядковый номер находки в полевой документации.</p>
    `,
    tags: ['бронзовый век', 'украшения', 'кость', 'зуб', 'амулет', 'подвеска', 'магия', 'Казахстан', '2019']
  },

  {
    id: 'stone-pendant-red',
    name: 'Каменная подвеска (красный сланец)',
    nameEn: 'Red Shale Whetstone Pendant',
    subtitle: 'Удлинённая подвеска-оселок с просверленным отверстием',
    category: 'stone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Красный / тёмно-пурпурный сланец',
    technique: 'Пикетаж, шлифовка, сверление',
    dimensions: 'Длина: ~14–18 см, Ширина: ~2–3 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'stone-red-01.jpg'
    ],
    abstract: 'Удлинённая подвеска-оселок из красного сланца с просверленным отверстием у одного конца. Совмещает функции украшения и практического инструмента — точила для металлических изделий.',
    fullText: `
      <h3>Описание</h3>
      <p>Удлинённый предмет из плотного красного (тёмно-пурпурного) сланца. Форма — вытянутая, к одному концу сужается и закругляется, с другого — более широкая, с просверленным отверстием. Поверхность тщательно отшлифована, боковые грани скруглены. Красновато-пурпурный цвет обусловлен высоким содержанием оксидов железа (гематита) в породе.</p>

      <h3>Двойная функция: оселок и украшение</h3>
      <p>Данный тип предметов в научной литературе обозначают как «подвески-оселки» (англ. whetstone pendants). Они выполняли двойную функцию: использовались для правки и полировки металлических лезвий — следы стирания поверхности подтверждают это — и одновременно подвешивались на ремне, образуя предмет украшения или статусный маркер.</p>

      <h3>Распространение в бронзовом веке</h3>
      <p>Подвески-оселки из различных пород камня (сланец, кварцит, песчаник) широко известны в погребальных комплексах эпохи бронзы Европы, Кавказа и Центральной Азии. Их находят как в мужских, так и в женских погребениях. Особую распространённость они получили в культурах, где металлообработка занимала ключевое место в хозяйстве.</p>

      <h3>Горные породы Казахстана</h3>
      <p>Красный сланец с высоким содержанием железа добывался из местных выходов горных пород. Разнообразие геологических формаций Казахстана обеспечивало древних мастеров широким набором сырья для изготовления орудий и украшений.</p>
    `,
    tags: ['бронзовый век', 'камень', 'сланец', 'подвеска', 'оселок', 'украшения', 'орудия труда', 'Казахстан']
  },

  {
    id: 'stone-bar-grey',
    name: 'Каменная подвеска-брусок',
    nameEn: 'Grey Stone Bar Pendant / Whetstone',
    subtitle: 'Крупная прямоугольная подвеска из серого галечника',
    category: 'stone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Серый галечник (метаморфическая порода)',
    technique: 'Шлифовка, сверление',
    dimensions: 'Длина: ~13–16 см, Ширина: ~2,5–3 см, Толщина: ~1,5–2 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'stone-grey-01.jpg'
    ],
    abstract: 'Крупная прямоугольная подвеска-брусок из серо-зелёного галечника с отверстием для нанизывания. Характерный элемент воинского и погребального убора эпохи бронзы.',
    fullText: `
      <h3>Описание</h3>
      <p>Крупный прямоугольный брусок из плотного серо-зелёного галечника. Форма — вытянутая прямоугольная, с притуплёнными гранями и слегка скруглёнными краями. У одного из торцов просверлено круглое отверстие. Поверхность равномерно отполирована до гладкости. Серо-зелёный цвет обусловлен наличием хлорита или близких минералов в породе.</p>

      <h3>Функциональное назначение</h3>
      <p>Предмет сочетал несколько функций. В качестве оселка-точила он использовался для правки режущих кромок бронзовых ножей, наконечников стрел и других металлических изделий. Однако наличие отверстия и контекст находки (погребение) указывают на то, что предмет носили при себе — подвешивая к поясу.</p>

      <h3>Воинский контекст</h3>
      <p>Подвески-оселки нередко обнаруживаются в богатых мужских погребениях вместе с оружием (бронзовыми кинжалами, наконечниками копий). Вероятно, они входили в состав воинской амуниции и символизировали мастерство владения оружием. Иметь при себе хорошо заточенное оружие было жизненно важно для воина-всадника.</p>

      <h3>Петрографический анализ</h3>
      <p>Серо-зелёный цвет камня и его плотная мелкозернистая структура позволяют предположить, что это метаморфическая порода — возможно, хлоритовый сланец или аргиллит. Такие породы характерны для горных районов Центрального Казахстана и широко использовались в эпоху бронзы.</p>
    `,
    tags: ['бронзовый век', 'камень', 'галечник', 'подвеска', 'оселок', 'воинский убор', 'орудия труда', 'Казахстан']
  },

  {
    id: 'spindle-whorl',
    name: 'Пряслице глиняное',
    nameEn: 'Clay Spindle Whorl',
    subtitle: 'Грузик для веретена биконической формы',
    category: 'ceramics',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка, обжиг)',
    technique: 'Лепка от руки, обжиг',
    dimensions: 'Диаметр: ~4–5 см, Высота: ~3–4 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'spindle-whorl-01.jpg',
      'spindle-whorl-02.jpg'
    ],
    abstract: 'Глиняное пряслице — грузик-маховик для веретена, использовавшийся при прядении шерсти. Свидетельствует о развитом текстильном производстве в общинах эпохи бронзы Центрального Казахстана.',
    fullText: `
      <h3>Описание</h3>
      <p>Пряслице изготовлено из обожжённой глины бежево-серого цвета. Форма — биконическая (двуконусная), с центральным сквозным отверстием диаметром около 8–10 мм для вертикального стержня веретена. Поверхность неровная, без орнамента; в нескольких местах видны небольшие сколы и трещины — следы активного использования.</p>

      <h3>Что такое пряслице и как оно работает?</h3>
      <p>Пряслице — утяжелитель-маховик, надевавшийся на нижний конец стержня веретена из дерева или кости. Его масса и форма обеспечивали равномерное и длительное вращение веретена при прядении. Прядильщица вращала веретено, одновременно вытягивая волокна шерсти или льна в тонкую нить. Без пряслица веретено быстро теряло инерцию — грузик обеспечивал устойчивость вращения.</p>

      <h3>Свидетельство текстильного производства</h3>
      <p>Наличие пряслиц в материальной культуре чётко указывает на занятие данной группы населения текстильным производством: прядением шерсти или растительных волокон и ткачеством. В эпоху бронзы животноводство — прежде всего разведение овец — обеспечивало сообщества шерстью для производства одежды и покрывал.</p>

      <h3>Значение для реконструкции хозяйства</h3>
      <p>Пряслица — один из наиболее массовых типов находок на поселениях и в погребениях эпохи бронзы Евразии. Их многочисленность свидетельствует о том, что прядение и ткачество были важнейшими отраслями домашнего хозяйства, которыми традиционно занимались женщины. Комплексы пряслиц в женских погребениях — свидетельство высокого социального статуса мастерицы.</p>
    `,
    tags: ['бронзовый век', 'керамика', 'пряслице', 'прядение', 'ткачество', 'быт', 'домашнее хозяйство', 'женский убор', 'андроновская культура', 'Казахстан']
  }
];

// ======================
// CATEGORY CONFIG
// ======================
const CATEGORIES = {
  all:      { name: 'Все артефакты',     icon: '🏛️', color: '#7c3aed' },
  ceramics: { name: 'Керамика',          icon: '🏺', color: '#c8952a' },
  jewelry:  { name: 'Украшения',         icon: '💍', color: '#34d399' },
  stone:    { name: 'Каменные изделия',  icon: '🪨', color: '#818cf8' },
  bone:     { name: 'Костяные изделия',  icon: '🦴', color: '#fbbf24' }
};

// Count per category
Object.keys(CATEGORIES).forEach(k => { CATEGORIES[k].count = k === 'all' ? ARTIFACTS.length : ARTIFACTS.filter(a => a.category === k).length; });

// ======================
// STATE
// ======================
const state = {
  view: 'browse',
  activeArtifact: null,
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  displayMode: 'grid'
};

// ======================
// FILTER + SORT
// ======================
function filterAndSort() {
  let results = [...ARTIFACTS];

  if (state.activeCategory !== 'all') {
    results = results.filter(a => a.category === state.activeCategory);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    results = results.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.abstract.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q)) ||
      a.material.toLowerCase().includes(q) ||
      a.period.toLowerCase().includes(q) ||
      a.culture.toLowerCase().includes(q) ||
      (a.catalogNumber && a.catalogNumber.toLowerCase().includes(q))
    );
  }

  switch (state.sortBy) {
    case 'name-asc':  results.sort((a,b) => a.name.localeCompare(b.name, 'ru')); break;
    case 'name-desc': results.sort((a,b) => b.name.localeCompare(a.name, 'ru')); break;
    case 'category':  results.sort((a,b) => a.category.localeCompare(b.category)); break;
  }

  return results;
}

// ======================
// IMAGE HELPERS
// ======================
const GRADIENTS = {
  ceramics: 'linear-gradient(135deg, #1a1005 0%, #2d1a08 50%, #1a1205 100%)',
  jewelry:  'linear-gradient(135deg, #051a1a 0%, #083d2d 50%, #051a14 100%)',
  stone:    'linear-gradient(135deg, #0d0f1a 0%, #151a2d 50%, #0a0d1a 100%)',
  bone:     'linear-gradient(135deg, #1a1810 0%, #2d2818 50%, #1a1811 100%)'
};

function makePlaceholder(artifact) {
  const cat = CATEGORIES[artifact.category];
  const bg  = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  return `<div class="img-placeholder" style="background:${bg}">
    <span class="ph-icon">${cat?.icon || '🏛️'}</span>
    <span class="ph-label">${cat?.name || 'Артефакт'}</span>
  </div>`;
}

function makeImg(src, alt, artifact) {
  return `<img src="${src}" alt="${alt}"
    onerror="this.outerHTML='${makePlaceholder(artifact).replace(/'/g,"\\'")}'"
    loading="lazy">`;
}

// ======================
// RENDER CARDS
// ======================
function renderGridCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const img = artifact.images.length
    ? makeImg(artifact.images[0], artifact.name, artifact)
    : makePlaceholder(artifact);
  return `
  <article class="artifact-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${artifact.name}">
    <div class="card-img-wrap">
      ${img}
      <div class="card-badge badge-${artifact.category}">${cat?.icon} ${cat?.name}</div>
    </div>
    <div class="card-body">
      <div class="card-title">${artifact.name}</div>
      <div class="card-sub">${artifact.subtitle}</div>
      <div class="card-meta">
        <span class="meta-tag">${artifact.period}</span>
        <span class="meta-tag">${artifact.material.split('(')[0].trim()}</span>
        ${artifact.catalogNumber ? `<span class="meta-tag">📋 Инв. №</span>` : ''}
      </div>
      <p class="card-abstract">${artifact.abstract}</p>
    </div>
    <div class="card-footer">
      <span class="footer-period">⏳ ${artifact.periodYears}</span>
      <span class="footer-link">Читать →</span>
    </div>
  </article>`;
}

function renderListCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const bg  = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  const imgHTML = artifact.images.length
    ? `<div class="list-thumb">${makeImg(artifact.images[0], artifact.name, artifact)}</div>`
    : `<div class="list-thumb" style="background:${bg};display:flex;align-items:center;justify-content:center;font-size:28px">${cat?.icon}</div>`;
  return `
  <article class="list-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${artifact.name}">
    ${imgHTML}
    <div class="list-body">
      <div class="list-title">${artifact.name}</div>
      <div class="list-meta">
        <span class="meta-tag">${cat?.icon} ${cat?.name}</span>
        <span class="meta-tag">${artifact.period}</span>
        <span class="meta-tag">${artifact.material.split('(')[0].trim()}</span>
      </div>
      <p class="list-abstract">${artifact.abstract}</p>
    </div>
    <span class="list-arrow">›</span>
  </article>`;
}

// ======================
// RENDER BROWSE VIEW
// ======================
function renderBrowse() {
  const results = filterAndSort();
  const container = document.getElementById('artifacts-container');
  const countEl   = document.getElementById('result-count');
  if (countEl) countEl.textContent = results.length;

  if (!container) return;

  if (results.length === 0) {
    container.className = '';
    container.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">Артефакты не найдены</div>
      <div class="empty-text">Попробуйте другой запрос или сбросьте фильтры</div>
      <button class="btn-ghost" onclick="resetFilters()">Сбросить фильтры</button>
    </div>`;
    return;
  }

  if (state.displayMode === 'grid') {
    container.className = 'artifacts-grid';
    container.innerHTML = results.map((a, i) => renderGridCard(a, i * 60)).join('');
  } else {
    container.className = 'artifacts-list';
    container.innerHTML = results.map((a, i) => renderListCard(a, i * 40)).join('');
  }
}

// ======================
// RENDER ARTICLE VIEW
// ======================
function renderArticle(artifact) {
  const cat = CATEGORIES[artifact.category];

  // Infobox image
  const infoImg = artifact.images.length
    ? `<div class="infobox-img">${makeImg(artifact.images[0], artifact.name, artifact)}</div>` : '';

  // Gallery
  const gallery = artifact.images.length > 1 ? `
    <h3>Фотогалерея</h3>
    <div class="article-gallery">
      ${artifact.images.map((src, i) => `
        <div class="gallery-item" onclick="openLightbox('${src}')">
          ${makeImg(src, artifact.name + ' — фото ' + (i+1), artifact)}
        </div>`).join('')}
    </div>` : '';

  // Related
  const related = ARTIFACTS
    .filter(a => a.id !== artifact.id && (a.category === artifact.category || a.period === artifact.period))
    .slice(0, 3);
  const relatedHTML = related.length ? `
    <div class="related-section">
      <h2 class="related-title">Смотрите также</h2>
      <div class="artifacts-grid">${related.map(a => renderGridCard(a)).join('')}</div>
    </div>` : '';

  return `
  <div class="article-breadcrumb">
    <span class="bc-link" onclick="goToBrowse()">🏛️ Энциклопедия</span>
    <span class="bc-sep">›</span>
    <span class="bc-link" onclick="setCategory('${artifact.category}');goToBrowse()">${cat?.icon} ${cat?.name}</span>
    <span class="bc-sep">›</span>
    <span>${artifact.name}</span>
  </div>

  <div class="article-header">
    <div class="article-badge badge-${artifact.category}">${cat?.icon} ${cat?.name}</div>
    <h1 class="article-title">${artifact.name}</h1>
    <p class="article-subtitle">${artifact.subtitle}</p>
    <blockquote class="article-abstract">${artifact.abstract}</blockquote>
  </div>

  <div class="article-layout">
    <div class="article-body">
      ${artifact.fullText}
      ${gallery}
      <div class="article-tags">
        <span class="tags-label">🏷️ Теги:</span>
        ${artifact.tags.map(t => `<span class="article-tag" onclick="searchTag('${t}')">${t}</span>`).join('')}
      </div>
    </div>
    <aside class="article-infobox">
      <div class="infobox-header"><span class="infobox-title">${artifact.name}</span></div>
      ${infoImg}
      <div class="infobox-data">
        ${[
          ['Категория',  cat?.name],
          ['Период',     artifact.period],
          ['Датировка',  artifact.periodYears],
          ['Культура',   artifact.culture],
          ['Материал',   artifact.material],
          ['Техника',    artifact.technique],
          ['Размеры',    artifact.dimensions],
          ['Место',      artifact.location],
          ...(artifact.catalogNumber ? [['Инв. №', artifact.catalogNumber]] : [])
        ].map(([l, v]) => `
        <div class="infobox-row">
          <span class="info-label">${l}</span>
          <span class="info-value">${v}</span>
        </div>`).join('')}
      </div>
    </aside>
  </div>
  ${relatedHTML}`;
}

// ======================
// NAVIGATION
// ======================
function openArticle(id) {
  const artifact = ARTIFACTS.find(a => a.id === id);
  if (!artifact) return;
  state.view = 'article';
  state.activeArtifact = artifact;
  document.getElementById('browse-view').style.display  = 'none';
  const av = document.getElementById('article-view');
  av.style.display = 'block';
  av.innerHTML = renderArticle(artifact);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToBrowse() {
  state.view = 'article';
  state.activeArtifact = null;
  document.getElementById('browse-view').style.display  = 'block';
  document.getElementById('article-view').style.display = 'none';
  renderBrowse();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setCategory(cat) {
  state.activeCategory = cat;
  updateSidebar();
  updatePills();
}

function searchTag(tag) {
  state.searchQuery = tag;
  state.activeCategory = 'all';
  const inp = document.getElementById('search-input');
  if (inp) inp.value = tag;
  updateSidebar();
  updatePills();
  goToBrowse();
}

function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = 'all';
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  updateSidebar();
  updatePills();
  renderBrowse();
}

// ======================
// UI UPDATES
// ======================
function updateSidebar() {
  document.querySelectorAll('.sidebar-item[data-cat]').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === state.activeCategory);
  });
}
function updatePills() {
  document.querySelectorAll('.cat-pill[data-cat]').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === state.activeCategory);
  });
}

// ======================
// LIGHTBOX
// ======================
function openLightbox(src) {
  document.getElementById('lightbox')?.remove();
  const lb = Object.assign(document.createElement('div'), {
    id: 'lightbox',
    innerHTML: `
      <img src="${src}" alt="Увеличенное фото">
      <button onclick="document.getElementById('lightbox').remove()">✕</button>`
  });
  lb.onclick = e => { if (e.target === lb) lb.remove(); };
  document.body.appendChild(lb);
}

// ======================
// PARTICLE BACKGROUND
// ======================
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({length: 55}, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.25,
    dy: (Math.random() - 0.5) * 0.25,
    a: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,149,42,${p.a})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ======================
// INIT
// ======================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();

  // Sidebar clicks
  document.querySelectorAll('.sidebar-item[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      if (state.view === 'article') goToBrowse();
      else renderBrowse();
    });
  });

  // Pill clicks
  document.querySelectorAll('.cat-pill[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      renderBrowse();
    });
  });

  // Search
  document.getElementById('search-input')?.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    if (state.view === 'article') goToBrowse();
    else renderBrowse();
  });

  // Sort
  document.getElementById('sort-select')?.addEventListener('change', e => {
    state.sortBy = e.target.value;
    renderBrowse();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.displayMode = btn.dataset.view;
      renderBrowse();
    });
  });

  // Logo / home
  document.querySelectorAll('[data-action="home"]').forEach(el => {
    el.addEventListener('click', () => { resetFilters(); goToBrowse(); });
  });

  // Initial render
  renderBrowse();
});
бщность',
    material: 'Глина (ручная лепка)',
    technique: 'Лепка от руки, заглаживание, восстановительный обжиг',
    dimensions: 'Высота: ~22–26 см, Диаметр тулова: ~18–22 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/ceramics/vessel-dark-01.jpg',
      'images/ceramics/vessel-dark-02.jpg'
    ],
    abstract: 'Лепной сосуд тёмно-серого цвета — один из наиболее характерных типов керамики эпохи бронзы Центрального Казахстана, принадлежащий к андроновской культурно-исторической общности.',
    fullText: `
      <h3>Описание</h3>
      <p>Горшок изготовлен из обожжённой глины тёмно-серого цвета. Форма сосуда — яйцевидная, с плоским дном и слегка отогнутым наружу краем венчика. Стенки равномерной толщины, тщательно заглажены. Поверхность без орнамента, с незначительными следами заглаживания. Рядом с сосудом расположена масштабная линейка с делением 5 см, что позволяет точно определить его размеры.</p>

      <h3>Технология изготовления</h3>
      <p>Сосуд изготовлен методом ручной лепки без применения гончарного круга — характерная черта керамических традиций эпохи бронзы евразийских степей. Тёмно-серый цвет стенок является результатом восстановительного (бескислородного) обжига при температуре 600–800°C. В условиях восстановительной среды углерод не догорает и откладывается в черепке, придавая ему характерный тёмный цвет.</p>

      <h3>Культурный и хронологический контекст</h3>
      <p>Сосуды данного типа характерны для андроновской культурно-исторической общности (XVIII–IX вв. до н.э.) — одного из наиболее масштабных культурных явлений бронзового века Евразии. Андроновские племена занимали обширную территорию от Урала до Енисея и от лесостепи Западной Сибири до горных систем Средней Азии.</p>
      <p>Подобные горшки выступали универсальными сосудами для хранения продуктов, приготовления пищи и использовались в погребальном обряде как часть заупокойного инвентаря — в них помещали пищу для умершего.</p>

      <h3>Значение в археологии</h3>
      <p>Керамика является важнейшим хронологическим и культурно-диагностическим материалом в археологии. Форма, орнаментация и технология производства посуды позволяют точно определить культурную принадлежность памятника и его место в системе межрегиональных связей.</p>
    `,
    tags: ['андроновская культура', 'бронзовый век', 'керамика', 'погребальный инвентарь', 'ручная лепка', 'восстановительный обжиг', 'Казахстан']
  },

  {
    id: 'vessel-brown',
    name: 'Горшок лепной красно-коричневый',
    nameEn: 'Reddish-Brown Handmade Ceramic Vessel',
    subtitle: 'Лепной сосуд с выраженной закопчённостью стенок',
    category: 'ceramics',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка)',
    technique: 'Лепка от руки, заглаживание, окислительный обжиг',
    dimensions: 'Высота: ~20–24 см, Диаметр тулова: ~16–20 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/ceramics/vessel-brown-01.jpg',
      'images/ceramics/vessel-brown-02.jpg'
    ],
    abstract: 'Лепной керамический сосуд красно-коричневого цвета с выраженными следами вторичного обжига — свидетельство его активного использования в хозяйственной жизни до помещения в погребение.',
    fullText: `
      <h3>Описание</h3>
      <p>Горшок округлой формы с выпуклым туловом, слегка суживающейся шейкой и прямым краем венчика. Поверхность сосуда красно-коричневого цвета с выраженными тёмными пятнами — следами вторичного обжига и задымления. Стенки имеют трещины, возникшие в результате термического воздействия и механических нагрузок при длительном использовании.</p>

      <h3>Технология изготовления</h3>
      <p>Сосуд изготовлен методом ручной лепки. Красно-коричневый цвет черепка — результат окислительного обжига, при котором железосодержащие соединения в глине оксидируются, придавая изделию тёплые красно-коричневые тона. Тёмные пятна и полосы на поверхности — следы открытого огня при повседневном использовании.</p>

      <h3>Бытовое и погребальное использование</h3>
      <p>Наличие следов горения указывает на то, что данный горшок активно использовался в повседневной жизни: для приготовления пищи или хранения продуктов. Впоследствии он был помещён в погребение как часть заупокойного инвентаря. Подобная «вторичная» функция посуды широко засвидетельствована в погребальных комплексах эпохи бронзы Казахстана.</p>

      <h3>Сравнительный анализ</h3>
      <p>Данный тип посуды широко представлен на территории Центрального Казахстана в контексте могильников срубно-андроновского времени. Сосуды близкой формы встречаются на памятниках алакульской и фёдоровской субкультур андроновской общности.</p>
    `,
    tags: ['андроновская культура', 'бронзовый век', 'керамика', 'бытовая посуда', 'ручная лепка', 'следы использования', 'Казахстан']
  },

  {
    id: 'bracelets-bronze',
    name: 'Браслеты бронзовые разомкнутые',
    nameEn: 'Open Bronze Bracelets',
    subtitle: 'Пара разомкнутых браслетов округлого сечения с патиной',
    category: 'jewelry',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Бронза (сплав меди и олова)',
    technique: 'Литьё в открытой форме, ковка, полировка',
    dimensions: 'Диаметр: ~6–7 см, Диаметр сечения: ~4–5 мм',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/jewelry/bracelets-01.jpg',
      'images/jewelry/bracelets-02.jpg',
      'images/jewelry/bracelets-03.jpg'
    ],
    abstract: 'Пара разомкнутых бронзовых браслетов с круглым сечением — традиционное украшение женского погребального убора эпохи бронзы. Покрыты характерной сине-зелёной патиной, образовавшейся за тысячелетия хранения в земле.',
    fullText: `
      <h3>Описание</h3>
      <p>Пара разомкнутых браслетов, изготовленных из бронзы. Сечение проволоки — круглое, равномерное по всей длине. Концы браслетов слегка заострены. Поверхность покрыта сине-зелёной и коричневато-красной патиной — продуктом длительного окисления меди в почве. Один из браслетов имеет более интенсивную зелёную патину (малахитовую), другой — преимущественно коричневую (куприт).</p>

      <h3>Технология изготовления</h3>
      <p>Браслеты изготовлены методом литья бронзы в открытую форму с последующей ковкой, сгибанием и полировкой. Бронзовый сплав (медь + олово, ~90:10) обладает более низкой температурой плавления, чем чистая медь, и лучшими литейными свойствами. Это делало бронзу идеальным материалом для украшений и орудий труда.</p>

      <h3>Символика и использование</h3>
      <p>Разомкнутые браслеты — один из наиболее распространённых типов украшений эпохи бронзы в евразийских степях. Они составляли часть женского праздничного и погребального убора. По традиции, браслеты носили попарно — на обоих запястьях одновременно. Разомкнутая форма позволяла легко надевать и снимать украшение.</p>

      <h3>Металлургия Бронзового века в Казахстане</h3>
      <p>Казахстан богат медными рудами, и именно он стал одним из главных центров металлургии Евразии в эпоху бронзы. Медные рудники Жезказгана, Сарыарки и Алтая обеспечивали сырьём обширные регионы. Технологии бронзового литья передавались из поколения в поколение и отличались высоким уровнем мастерства.</p>
    `,
    tags: ['бронзовый век', 'украшения', 'бронза', 'браслеты', 'женский убор', 'металлургия', 'погребальный инвентарь', 'патина', 'Казахстан']
  },

  {
    id: 'bone-pendant',
    name: 'Подвеска из зуба животного',
    nameEn: 'Animal Tooth Pendant',
    subtitle: 'Амулет-подвеска с просверленным отверстием',
    category: 'bone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Зуб животного (лошадь или крупный рогатый скот)',
    technique: 'Сверление каменным сверлом, шлифовка',
    dimensions: 'Длина: ~9–12 см, Ширина: ~3–4 см',
    location: 'Казахстан',
    catalogNumber: 'Тк 171/2019/К12/04/3',
    images: [
      'images/bone/bone-pendant-01.jpg',
      'images/bone/bone-pendant-02.jpg'
    ],
    abstract: 'Подвеска-амулет из зуба крупного животного с просверленным отверстием. Инвентарный номер Тк 171/2019/К12/04/3 указывает на происхождение из профессиональных раскопок 2019 года.',
    fullText: `
      <h3>Описание</h3>
      <p>Подвеска изготовлена из крупного зуба животного — предположительно, резца лошади или зуба крупного рогатого скота. В более широкой части зуба просверлено круглое отверстие диаметром около 6–8 мм для нанизывания на шнурок или нить. Поверхность предмета отполирована в результате длительного ношения. Цвет — кремово-бежевый с тёмными дентинными жилками. На обороте нанесён штрих-кодовый каталожный номер музея: <strong>Тк 171/2019/К12/04/3</strong>.</p>

      <h3>Технология изготовления</h3>
      <p>Отверстие было просверлено с помощью каменного или костяного сверла методом попеременного вращения. Следы сверления видны в виде тонких концентрических царапин вокруг отверстия. Поверхность дополнительно зашлифована, вероятно, с применением речного песка в качестве абразива.</p>

      <h3>Символическое значение</h3>
      <p>Украшения из зубов животных в древности несли не только декоративную, но и апотропаическую (защитную, магическую) функцию. Зубы крупных животных — символ силы, плодородия и богатства стад, главного источника благосостояния кочевых и скотоводческих племён эпохи бронзы.</p>

      <h3>Расшифровка каталожного номера</h3>
      <p>Обозначение <strong>Тк 171/2019/К12/04/3</strong> позволяет установить точное происхождение предмета: «Тк» — сокращённое название памятника (возможно, Тоқанас или иное), «2019» — год полевых раскопок, «К12» — шифр раскопочного квадрата, «04» — горизонт (слой), «3» — порядковый номер находки в полевой документации.</p>
    `,
    tags: ['бронзовый век', 'украшения', 'кость', 'зуб', 'амулет', 'подвеска', 'магия', 'Казахстан', '2019']
  },

  {
    id: 'stone-pendant-red',
    name: 'Каменная подвеска (красный сланец)',
    nameEn: 'Red Shale Whetstone Pendant',
    subtitle: 'Удлинённая подвеска-оселок с просверленным отверстием',
    category: 'stone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Красный / тёмно-пурпурный сланец',
    technique: 'Пикетаж, шлифовка, сверление',
    dimensions: 'Длина: ~14–18 см, Ширина: ~2–3 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/stone/stone-red-01.jpg'
    ],
    abstract: 'Удлинённая подвеска-оселок из красного сланца с просверленным отверстием у одного конца. Совмещает функции украшения и практического инструмента — точила для металлических изделий.',
    fullText: `
      <h3>Описание</h3>
      <p>Удлинённый предмет из плотного красного (тёмно-пурпурного) сланца. Форма — вытянутая, к одному концу сужается и закругляется, с другого — более широкая, с просверленным отверстием. Поверхность тщательно отшлифована, боковые грани скруглены. Красновато-пурпурный цвет обусловлен высоким содержанием оксидов железа (гематита) в породе.</p>

      <h3>Двойная функция: оселок и украшение</h3>
      <p>Данный тип предметов в научной литературе обозначают как «подвески-оселки» (англ. whetstone pendants). Они выполняли двойную функцию: использовались для правки и полировки металлических лезвий — следы стирания поверхности подтверждают это — и одновременно подвешивались на ремне, образуя предмет украшения или статусный маркер.</p>

      <h3>Распространение в бронзовом веке</h3>
      <p>Подвески-оселки из различных пород камня (сланец, кварцит, песчаник) широко известны в погребальных комплексах эпохи бронзы Европы, Кавказа и Центральной Азии. Их находят как в мужских, так и в женских погребениях. Особую распространённость они получили в культурах, где металлообработка занимала ключевое место в хозяйстве.</p>

      <h3>Горные породы Казахстана</h3>
      <p>Красный сланец с высоким содержанием железа добывался из местных выходов горных пород. Разнообразие геологических формаций Казахстана обеспечивало древних мастеров широким набором сырья для изготовления орудий и украшений.</p>
    `,
    tags: ['бронзовый век', 'камень', 'сланец', 'подвеска', 'оселок', 'украшения', 'орудия труда', 'Казахстан']
  },

  {
    id: 'stone-bar-grey',
    name: 'Каменная подвеска-брусок',
    nameEn: 'Grey Stone Bar Pendant / Whetstone',
    subtitle: 'Крупная прямоугольная подвеска из серого галечника',
    category: 'stone',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Степные культуры Центральной Азии',
    material: 'Серый галечник (метаморфическая порода)',
    technique: 'Шлифовка, сверление',
    dimensions: 'Длина: ~13–16 см, Ширина: ~2,5–3 см, Толщина: ~1,5–2 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/stone/stone-grey-01.jpg'
    ],
    abstract: 'Крупная прямоугольная подвеска-брусок из серо-зелёного галечника с отверстием для нанизывания. Характерный элемент воинского и погребального убора эпохи бронзы.',
    fullText: `
      <h3>Описание</h3>
      <p>Крупный прямоугольный брусок из плотного серо-зелёного галечника. Форма — вытянутая прямоугольная, с притуплёнными гранями и слегка скруглёнными краями. У одного из торцов просверлено круглое отверстие. Поверхность равномерно отполирована до гладкости. Серо-зелёный цвет обусловлен наличием хлорита или близких минералов в породе.</p>

      <h3>Функциональное назначение</h3>
      <p>Предмет сочетал несколько функций. В качестве оселка-точила он использовался для правки режущих кромок бронзовых ножей, наконечников стрел и других металлических изделий. Однако наличие отверстия и контекст находки (погребение) указывают на то, что предмет носили при себе — подвешивая к поясу.</p>

      <h3>Воинский контекст</h3>
      <p>Подвески-оселки нередко обнаруживаются в богатых мужских погребениях вместе с оружием (бронзовыми кинжалами, наконечниками копий). Вероятно, они входили в состав воинской амуниции и символизировали мастерство владения оружием. Иметь при себе хорошо заточенное оружие было жизненно важно для воина-всадника.</p>

      <h3>Петрографический анализ</h3>
      <p>Серо-зелёный цвет камня и его плотная мелкозернистая структура позволяют предположить, что это метаморфическая порода — возможно, хлоритовый сланец или аргиллит. Такие породы характерны для горных районов Центрального Казахстана и широко использовались в эпоху бронзы.</p>
    `,
    tags: ['бронзовый век', 'камень', 'галечник', 'подвеска', 'оселок', 'воинский убор', 'орудия труда', 'Казахстан']
  },

  {
    id: 'spindle-whorl',
    name: 'Пряслице глиняное',
    nameEn: 'Clay Spindle Whorl',
    subtitle: 'Грузик для веретена биконической формы',
    category: 'ceramics',
    period: 'Бронзовый век',
    periodYears: 'XVIII–XII вв. до н.э.',
    culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка, обжиг)',
    technique: 'Лепка от руки, обжиг',
    dimensions: 'Диаметр: ~4–5 см, Высота: ~3–4 см',
    location: 'Казахстан',
    catalogNumber: null,
    images: [
      'images/ceramics/spindle-whorl-01.jpg',
      'images/ceramics/spindle-whorl-02.jpg'
    ],
    abstract: 'Глиняное пряслице — грузик-маховик для веретена, использовавшийся при прядении шерсти. Свидетельствует о развитом текстильном производстве в общинах эпохи бронзы Центрального Казахстана.',
    fullText: `
      <h3>Описание</h3>
      <p>Пряслице изготовлено из обожжённой глины бежево-серого цвета. Форма — биконическая (двуконусная), с центральным сквозным отверстием диаметром около 8–10 мм для вертикального стержня веретена. Поверхность неровная, без орнамента; в нескольких местах видны небольшие сколы и трещины — следы активного использования.</p>

      <h3>Что такое пряслице и как оно работает?</h3>
      <p>Пряслице — утяжелитель-маховик, надевавшийся на нижний конец стержня веретена из дерева или кости. Его масса и форма обеспечивали равномерное и длительное вращение веретена при прядении. Прядильщица вращала веретено, одновременно вытягивая волокна шерсти или льна в тонкую нить. Без пряслица веретено быстро теряло инерцию — грузик обеспечивал устойчивость вращения.</p>

      <h3>Свидетельство текстильного производства</h3>
      <p>Наличие пряслиц в материальной культуре чётко указывает на занятие данной группы населения текстильным производством: прядением шерсти или растительных волокон и ткачеством. В эпоху бронзы животноводство — прежде всего разведение овец — обеспечивало сообщества шерстью для производства одежды и покрывал.</p>

      <h3>Значение для реконструкции хозяйства</h3>
      <p>Пряслица — один из наиболее массовых типов находок на поселениях и в погребениях эпохи бронзы Евразии. Их многочисленность свидетельствует о том, что прядение и ткачество были важнейшими отраслями домашнего хозяйства, которыми традиционно занимались женщины. Комплексы пряслиц в женских погребениях — свидетельство высокого социального статуса мастерицы.</p>
    `,
    tags: ['бронзовый век', 'керамика', 'пряслице', 'прядение', 'ткачество', 'быт', 'домашнее хозяйство', 'женский убор', 'андроновская культура', 'Казахстан']
  }
];

// ======================
// CATEGORY CONFIG
// ======================
const CATEGORIES = {
  all:      { name: 'Все артефакты',     icon: '🏛️', color: '#7c3aed' },
  ceramics: { name: 'Керамика',          icon: '🏺', color: '#c8952a' },
  jewelry:  { name: 'Украшения',         icon: '💍', color: '#34d399' },
  stone:    { name: 'Каменные изделия',  icon: '🪨', color: '#818cf8' },
  bone:     { name: 'Костяные изделия',  icon: '🦴', color: '#fbbf24' }
};

// Count per category
Object.keys(CATEGORIES).forEach(k => { CATEGORIES[k].count = k === 'all' ? ARTIFACTS.length : ARTIFACTS.filter(a => a.category === k).length; });

// ======================
// STATE
// ======================
const state = {
  view: 'browse',
  activeArtifact: null,
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  displayMode: 'grid'
};

// ======================
// FILTER + SORT
// ======================
function filterAndSort() {
  let results = [...ARTIFACTS];

  if (state.activeCategory !== 'all') {
    results = results.filter(a => a.category === state.activeCategory);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    results = results.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.abstract.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q)) ||
      a.material.toLowerCase().includes(q) ||
      a.period.toLowerCase().includes(q) ||
      a.culture.toLowerCase().includes(q) ||
      (a.catalogNumber && a.catalogNumber.toLowerCase().includes(q))
    );
  }

  switch (state.sortBy) {
    case 'name-asc':  results.sort((a,b) => a.name.localeCompare(b.name, 'ru')); break;
    case 'name-desc': results.sort((a,b) => b.name.localeCompare(a.name, 'ru')); break;
    case 'category':  results.sort((a,b) => a.category.localeCompare(b.category)); break;
  }

  return results;
}

// ======================
// IMAGE HELPERS
// ======================
const GRADIENTS = {
  ceramics: 'linear-gradient(135deg, #1a1005 0%, #2d1a08 50%, #1a1205 100%)',
  jewelry:  'linear-gradient(135deg, #051a1a 0%, #083d2d 50%, #051a14 100%)',
  stone:    'linear-gradient(135deg, #0d0f1a 0%, #151a2d 50%, #0a0d1a 100%)',
  bone:     'linear-gradient(135deg, #1a1810 0%, #2d2818 50%, #1a1811 100%)'
};

function makePlaceholder(artifact) {
  const cat = CATEGORIES[artifact.category];
  const bg  = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  return `<div class="img-placeholder" style="background:${bg}">
    <span class="ph-icon">${cat?.icon || '🏛️'}</span>
    <span class="ph-label">${cat?.name || 'Артефакт'}</span>
  </div>`;
}

function makeImg(src, alt, artifact) {
  return `<img src="${src}" alt="${alt}"
    onerror="this.outerHTML='${makePlaceholder(artifact).replace(/'/g,"\\'")}'"
    loading="lazy">`;
}

// ======================
// RENDER CARDS
// ======================
function renderGridCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const img = artifact.images.length
    ? makeImg(artifact.images[0], artifact.name, artifact)
    : makePlaceholder(artifact);
  return `
  <article class="artifact-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${artifact.name}">
    <div class="card-img-wrap">
      ${img}
      <div class="card-badge badge-${artifact.category}">${cat?.icon} ${cat?.name}</div>
    </div>
    <div class="card-body">
      <div class="card-title">${artifact.name}</div>
      <div class="card-sub">${artifact.subtitle}</div>
      <div class="card-meta">
        <span class="meta-tag">${artifact.period}</span>
        <span class="meta-tag">${artifact.material.split('(')[0].trim()}</span>
        ${artifact.catalogNumber ? `<span class="meta-tag">📋 Инв. №</span>` : ''}
      </div>
      <p class="card-abstract">${artifact.abstract}</p>
    </div>
    <div class="card-footer">
      <span class="footer-period">⏳ ${artifact.periodYears}</span>
      <span class="footer-link">Читать →</span>
    </div>
  </article>`;
}

function renderListCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const bg  = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  const imgHTML = artifact.images.length
    ? `<div class="list-thumb">${makeImg(artifact.images[0], artifact.name, artifact)}</div>`
    : `<div class="list-thumb" style="background:${bg};display:flex;align-items:center;justify-content:center;font-size:28px">${cat?.icon}</div>`;
  return `
  <article class="list-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${artifact.name}">
    ${imgHTML}
    <div class="list-body">
      <div class="list-title">${artifact.name}</div>
      <div class="list-meta">
        <span class="meta-tag">${cat?.icon} ${cat?.name}</span>
        <span class="meta-tag">${artifact.period}</span>
        <span class="meta-tag">${artifact.material.split('(')[0].trim()}</span>
      </div>
      <p class="list-abstract">${artifact.abstract}</p>
    </div>
    <span class="list-arrow">›</span>
  </article>`;
}

// ======================
// RENDER BROWSE VIEW
// ======================
function renderBrowse() {
  const results = filterAndSort();
  const container = document.getElementById('artifacts-container');
  const countEl   = document.getElementById('result-count');
  if (countEl) countEl.textContent = results.length;

  if (!container) return;

  if (results.length === 0) {
    container.className = '';
    container.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">Артефакты не найдены</div>
      <div class="empty-text">Попробуйте другой запрос или сбросьте фильтры</div>
      <button class="btn-ghost" onclick="resetFilters()">Сбросить фильтры</button>
    </div>`;
    return;
  }

  if (state.displayMode === 'grid') {
    container.className = 'artifacts-grid';
    container.innerHTML = results.map((a, i) => renderGridCard(a, i * 60)).join('');
  } else {
    container.className = 'artifacts-list';
    container.innerHTML = results.map((a, i) => renderListCard(a, i * 40)).join('');
  }
}

// ======================
// RENDER ARTICLE VIEW
// ======================
function renderArticle(artifact) {
  const cat = CATEGORIES[artifact.category];

  // Infobox image
  const infoImg = artifact.images.length
    ? `<div class="infobox-img">${makeImg(artifact.images[0], artifact.name, artifact)}</div>` : '';

  // Gallery
  const gallery = artifact.images.length > 1 ? `
    <h3>Фотогалерея</h3>
    <div class="article-gallery">
      ${artifact.images.map((src, i) => `
        <div class="gallery-item" onclick="openLightbox('${src}')">
          ${makeImg(src, artifact.name + ' — фото ' + (i+1), artifact)}
        </div>`).join('')}
    </div>` : '';

  // Related
  const related = ARTIFACTS
    .filter(a => a.id !== artifact.id && (a.category === artifact.category || a.period === artifact.period))
    .slice(0, 3);
  const relatedHTML = related.length ? `
    <div class="related-section">
      <h2 class="related-title">Смотрите также</h2>
      <div class="artifacts-grid">${related.map(a => renderGridCard(a)).join('')}</div>
    </div>` : '';

  return `
  <div class="article-breadcrumb">
    <span class="bc-link" onclick="goToBrowse()">🏛️ Энциклопедия</span>
    <span class="bc-sep">›</span>
    <span class="bc-link" onclick="setCategory('${artifact.category}');goToBrowse()">${cat?.icon} ${cat?.name}</span>
    <span class="bc-sep">›</span>
    <span>${artifact.name}</span>
  </div>

  <div class="article-header">
    <div class="article-badge badge-${artifact.category}">${cat?.icon} ${cat?.name}</div>
    <h1 class="article-title">${artifact.name}</h1>
    <p class="article-subtitle">${artifact.subtitle}</p>
    <blockquote class="article-abstract">${artifact.abstract}</blockquote>
  </div>

  <div class="article-layout">
    <div class="article-body">
      ${artifact.fullText}
      ${gallery}
      <div class="article-tags">
        <span class="tags-label">🏷️ Теги:</span>
        ${artifact.tags.map(t => `<span class="article-tag" onclick="searchTag('${t}')">${t}</span>`).join('')}
      </div>
    </div>
    <aside class="article-infobox">
      <div class="infobox-header"><span class="infobox-title">${artifact.name}</span></div>
      ${infoImg}
      <div class="infobox-data">
        ${[
          ['Категория',  cat?.name],
          ['Период',     artifact.period],
          ['Датировка',  artifact.periodYears],
          ['Культура',   artifact.culture],
          ['Материал',   artifact.material],
          ['Техника',    artifact.technique],
          ['Размеры',    artifact.dimensions],
          ['Место',      artifact.location],
          ...(artifact.catalogNumber ? [['Инв. №', artifact.catalogNumber]] : [])
        ].map(([l, v]) => `
        <div class="infobox-row">
          <span class="info-label">${l}</span>
          <span class="info-value">${v}</span>
        </div>`).join('')}
      </div>
    </aside>
  </div>
  ${relatedHTML}`;
}

// ======================
// NAVIGATION
// ======================
function openArticle(id) {
  const artifact = ARTIFACTS.find(a => a.id === id);
  if (!artifact) return;
  state.view = 'article';
  state.activeArtifact = artifact;
  document.getElementById('browse-view').style.display  = 'none';
  const av = document.getElementById('article-view');
  av.style.display = 'block';
  av.innerHTML = renderArticle(artifact);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToBrowse() {
  state.view = 'article';
  state.activeArtifact = null;
  document.getElementById('browse-view').style.display  = 'block';
  document.getElementById('article-view').style.display = 'none';
  renderBrowse();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setCategory(cat) {
  state.activeCategory = cat;
  updateSidebar();
  updatePills();
}

function searchTag(tag) {
  state.searchQuery = tag;
  state.activeCategory = 'all';
  const inp = document.getElementById('search-input');
  if (inp) inp.value = tag;
  updateSidebar();
  updatePills();
  goToBrowse();
}

function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = 'all';
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  updateSidebar();
  updatePills();
  renderBrowse();
}

// ======================
// UI UPDATES
// ======================
function updateSidebar() {
  document.querySelectorAll('.sidebar-item[data-cat]').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === state.activeCategory);
  });
}
function updatePills() {
  document.querySelectorAll('.cat-pill[data-cat]').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === state.activeCategory);
  });
}

// ======================
// LIGHTBOX
// ======================
function openLightbox(src) {
  document.getElementById('lightbox')?.remove();
  const lb = Object.assign(document.createElement('div'), {
    id: 'lightbox',
    innerHTML: `
      <img src="${src}" alt="Увеличенное фото">
      <button onclick="document.getElementById('lightbox').remove()">✕</button>`
  });
  lb.onclick = e => { if (e.target === lb) lb.remove(); };
  document.body.appendChild(lb);
}

// ======================
// PARTICLE BACKGROUND
// ======================
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({length: 55}, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.25,
    dy: (Math.random() - 0.5) * 0.25,
    a: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,149,42,${p.a})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ======================
// INIT
// ======================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();

  // Sidebar clicks
  document.querySelectorAll('.sidebar-item[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      if (state.view === 'article') goToBrowse();
      else renderBrowse();
    });
  });

  // Pill clicks
  document.querySelectorAll('.cat-pill[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      renderBrowse();
    });
  });

  // Search
  document.getElementById('search-input')?.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    if (state.view === 'article') goToBrowse();
    else renderBrowse();
  });

  // Sort
  document.getElementById('sort-select')?.addEventListener('change', e => {
    state.sortBy = e.target.value;
    renderBrowse();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.displayMode = btn.dataset.view;
      renderBrowse();
    });
  });

  // Logo / home
  document.querySelectorAll('[data-action="home"]').forEach(el => {
    el.addEventListener('click', () => { resetFilters(); goToBrowse(); });
  });

  // Initial render
  renderBrowse();
});
