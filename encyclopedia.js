// =====================================================
// ARCHAEO KZ — Open Encyclopedia of Archaeology
// Gambit Jr. FLL Team | Data & Application Logic
// =====================================================

const ARTIFACTS = [
  {
    id: 'vessel-dark',
    name: 'Dark Grey Handmade Ceramic Vessel',
    nameEn: 'Dark Grey Handmade Ceramic Vessel',
    subtitle: 'Egg-shaped handmade vessel fired in a reduction atmosphere',
    category: 'ceramics',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Andronovo Cultural-Historical Community',
    material: 'Clay (hand-built)',
    technique: 'Hand modelling, surface smoothing, reduction firing',
    dimensions: 'Height: ~22–26 cm, Body diameter: ~18–22 cm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'vessel-dark-01.jpg',
      'vessel-dark-02.jpg'
    ],
    abstract: 'A dark grey hand-built vessel — one of the most characteristic ceramic types of the Bronze Age in Central Kazakhstan, belonging to the Andronovo cultural-historical community.',
    fullText: `
      <h3>Description</h3>
      <p>The vessel is made of fired dark grey clay. Its shape is egg-like, with a flat base and a slightly outward-flared rim. The walls are of uniform thickness and carefully smoothed. The surface bears no decoration, with faint smoothing marks visible. A scale bar with 5 cm divisions is placed beside the vessel to allow precise size measurements.</p>

      <h3>Manufacturing Technology</h3>
      <p>The vessel was produced by hand modelling without a potter's wheel — a defining feature of ceramic traditions of the Bronze Age Eurasian steppes. The dark grey colour of the walls results from reduction (oxygen-deprived) firing at temperatures of 600–800 °C. In a reducing atmosphere, carbon does not fully combust and is deposited in the ceramic body, giving it a characteristic dark hue.</p>

      <h3>Cultural and Chronological Context</h3>
      <p>Vessels of this type are characteristic of the Andronovo cultural-historical community (18th–9th century BCE) — one of the most expansive cultural phenomena of the Bronze Age Eurasia. Andronovo tribes occupied a vast territory stretching from the Urals to the Yenisei and from the West Siberian forest-steppe to the mountain systems of Central Asia.</p>
      <p>Such pots served as multipurpose vessels for food storage and cooking, and were also used in funerary rites as part of burial inventories — placed in graves filled with food for the deceased.</p>

      <h3>Archaeological Significance</h3>
      <p>Ceramics are the most important chronological and culture-diagnostic material in archaeology. The shape, decoration, and production technology of pottery allow precise identification of a site's cultural affiliation and its place within systems of inter-regional exchange.</p>
    `,
    tags: ['Andronovo culture', 'Bronze Age', 'ceramics', 'burial goods', 'hand-built', 'reduction firing', 'Kazakhstan']
  },

  {
    id: 'vessel-brown',
    name: 'Reddish-Brown Handmade Ceramic Vessel',
    nameEn: 'Reddish-Brown Handmade Ceramic Vessel',
    subtitle: 'Hand-built vessel with pronounced fire-blackening on the walls',
    category: 'ceramics',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Andronovo Cultural-Historical Community',
    material: 'Clay (hand-built)',
    technique: 'Hand modelling, surface smoothing, oxidation firing',
    dimensions: 'Height: ~20–24 cm, Body diameter: ~16–20 cm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'vessel-brown-01.jpg',
      'vessel-brown-02.jpg'
    ],
    abstract: 'A reddish-brown hand-built ceramic vessel with pronounced secondary firing marks — evidence of its active use in daily life before being placed in a burial.',
    fullText: `
      <h3>Description</h3>
      <p>A round-bodied pot with a bulging body, slightly tapering neck, and straight rim. The surface is reddish-brown with prominent dark patches — traces of secondary firing and smoke exposure. The walls show cracks resulting from thermal stress and mechanical strain during prolonged everyday use.</p>

      <h3>Manufacturing Technology</h3>
      <p>The vessel was produced by hand modelling. The reddish-brown colour of the body results from oxidation firing, during which iron compounds in the clay are oxidised, giving the vessel warm reddish-brown tones. The dark patches and streaks on the surface are traces of open-flame use during daily cooking.</p>

      <h3>Domestic and Funerary Use</h3>
      <p>The presence of fire marks indicates that this pot was actively used in everyday life — for cooking or food storage. It was later placed in a burial as part of the grave inventory. Such "secondary" use of domestic vessels is widely attested in Bronze Age burial complexes of Kazakhstan.</p>

      <h3>Comparative Analysis</h3>
      <p>This vessel type is widely represented across Central Kazakhstan in the context of Srubnaya-Andronovo burial mounds. Vessels of a closely related form appear at sites associated with the Alakul and Fyodorovo subcultures of the Andronovo community.</p>
    `,
    tags: ['Andronovo culture', 'Bronze Age', 'ceramics', 'domestic ware', 'hand-built', 'use-wear traces', 'Kazakhstan']
  },

  {
    id: 'bracelets-bronze',
    name: 'Open Bronze Bracelets',
    nameEn: 'Open Bronze Bracelets',
    subtitle: 'Pair of open-ended round-section bracelets with patina',
    category: 'jewelry',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Andronovo Cultural-Historical Community',
    material: 'Bronze (copper-tin alloy)',
    technique: 'Open-mould casting, forging, polishing',
    dimensions: 'Diameter: ~6–7 cm, Wire diameter: ~4–5 mm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'bracelets-01.jpg',
      'bracelets-02.jpg',
      'bracelets-03.jpg'
    ],
    abstract: 'A pair of open-ended bronze bracelets with circular cross-section — a traditional ornament of the female funerary dress of the Bronze Age. Covered with characteristic blue-green patina formed over millennia of burial in the earth.',
    fullText: `
      <h3>Description</h3>
      <p>A pair of open-ended bracelets made of bronze. The wire cross-section is circular and uniform along the full length. The bracelet terminals are slightly tapered. The surface is covered with blue-green and brownish-red patina — the product of prolonged copper oxidation in the soil. One bracelet displays more intense green patina (malachite), the other predominantly brown (cuprite).</p>

      <h3>Manufacturing Technology</h3>
      <p>The bracelets were produced by casting bronze in an open mould, followed by forging, bending, and polishing. Bronze alloy (copper + tin, approximately 90:10) has a lower melting point than pure copper and superior casting properties. This made bronze the ideal material for ornaments and tools.</p>

      <h3>Symbolism and Use</h3>
      <p>Open-ended bracelets are among the most widespread ornament types of the Bronze Age Eurasian steppes. They formed part of the female festive and funerary dress. By tradition, bracelets were worn in pairs — on both wrists simultaneously. The open form allowed the jewellery to be put on and taken off easily.</p>

      <h3>Bronze Age Metallurgy in Kazakhstan</h3>
      <p>Kazakhstan is rich in copper ores and became one of the principal metallurgical centres of Eurasia during the Bronze Age. Copper mines at Zhezkazgan, the Saryarka highlands, and the Altai supplied raw materials to vast regions. Bronze-casting technologies were passed down through generations and achieved a remarkably high level of skill.</p>
    `,
    tags: ['Bronze Age', 'jewelry', 'bronze', 'bracelets', 'female dress', 'metallurgy', 'burial goods', 'patina', 'Kazakhstan']
  },

  {
    id: 'bone-pendant',
    name: 'Animal Tooth Pendant',
    nameEn: 'Animal Tooth Pendant',
    subtitle: 'Amulet-pendant with a drilled suspension hole',
    category: 'bone',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Steppe Cultures of Central Asia',
    material: 'Animal tooth (horse or large cattle)',
    technique: 'Drilling with stone bit, grinding',
    dimensions: 'Length: ~9–12 cm, Width: ~3–4 cm',
    location: 'Kazakhstan',
    catalogNumber: 'Тк 171/2019/К12/04/3',
    images: [
      'bone-pendant-01.jpg',
      'bone-pendant-02.jpg'
    ],
    abstract: 'An amulet-pendant made from the tooth of a large animal, with a drilled suspension hole. Catalogue number Тк 171/2019/К12/04/3 indicates its origin from professional excavations conducted in 2019.',
    fullText: `
      <h3>Description</h3>
      <p>The pendant is made from a large animal tooth — presumably an incisor of a horse or a tooth of large cattle. A circular hole approximately 6–8 mm in diameter has been drilled through the wider end of the tooth for threading onto a cord or string. The surface is polished from prolonged wear. Colour: creamy beige with dark dentinal veins. The museum barcode catalogue number <strong>Тк 171/2019/К12/04/3</strong> is inscribed on the reverse.</p>

      <h3>Manufacturing Technology</h3>
      <p>The hole was drilled using a stone or bone bit by means of alternating rotation. Drilling traces are visible as thin concentric scratches around the opening. The surface was additionally ground, probably using river sand as an abrasive.</p>

      <h3>Symbolic Significance</h3>
      <p>In antiquity, ornaments made from animal teeth served not only a decorative but also an apotropaic (protective, magical) function. Teeth of large animals symbolised strength, fertility, and the wealth of herds — the main source of prosperity for the nomadic and pastoral tribes of the Bronze Age.</p>

      <h3>Catalogue Number Explained</h3>
      <p>The designation <strong>Тк 171/2019/К12/04/3</strong> identifies the precise provenance of the object: "Тк" is the abbreviated site name (possibly Tokanas or another site), "2019" is the year of field excavation, "К12" is the excavation grid square, "04" is the stratigraphic horizon (layer), and "3" is the sequential find number in the field documentation.</p>
    `,
    tags: ['Bronze Age', 'jewelry', 'bone', 'tooth', 'amulet', 'pendant', 'magic', 'Kazakhstan', '2019']
  },

  {
    id: 'stone-pendant-red',
    name: 'Red Shale Whetstone Pendant',
    nameEn: 'Red Shale Whetstone Pendant',
    subtitle: 'Elongated pendant-whetstone with a drilled suspension hole',
    category: 'stone',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Steppe Cultures of Central Asia',
    material: 'Red / dark purple shale',
    technique: 'Pecking, grinding, drilling',
    dimensions: 'Length: ~14–18 cm, Width: ~2–3 cm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'stone-red-01.jpg'
    ],
    abstract: 'An elongated whetstone-pendant made of red shale with a drilled hole at one end. Combines the functions of an ornament and a practical tool — a sharpening stone for metal objects.',
    fullText: `
      <h3>Description</h3>
      <p>An elongated object made of dense red (dark purple) shale. The shape is tapered — narrowing and rounding at one end, wider at the other — with a drilled hole at the wider end. The surface is carefully ground and the lateral edges are rounded. The reddish-purple colour is due to a high content of iron oxides (haematite) in the rock.</p>

      <h3>Dual Function: Whetstone and Ornament</h3>
      <p>Objects of this type are described in scholarly literature as "whetstone pendants." They served a dual function: they were used to hone and polish metal blades — surface abrasion marks confirm this — and were simultaneously worn on a strap, serving as an ornament or status marker.</p>

      <h3>Distribution in the Bronze Age</h3>
      <p>Whetstone pendants made from various rock types (shale, quartzite, sandstone) are widely known in Bronze Age burial complexes of Europe, the Caucasus, and Central Asia. They are found in both male and female burials. They became particularly widespread in cultures where metalworking held a central place in the economy.</p>

      <h3>Geological Resources of Kazakhstan</h3>
      <p>Red iron-rich shale was extracted from local rock outcrops. The geological diversity of Kazakhstan provided ancient craftspeople with a wide range of raw materials for making tools and ornaments.</p>
    `,
    tags: ['Bronze Age', 'stone', 'shale', 'pendant', 'whetstone', 'jewelry', 'tools', 'Kazakhstan']
  },

  {
    id: 'stone-bar-grey',
    name: 'Grey Stone Bar Pendant',
    nameEn: 'Grey Stone Bar Pendant / Whetstone',
    subtitle: 'Large rectangular pendant made from grey pebble rock',
    category: 'stone',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Steppe Cultures of Central Asia',
    material: 'Grey pebble rock (metamorphic)',
    technique: 'Grinding, drilling',
    dimensions: 'Length: ~13–16 cm, Width: ~2.5–3 cm, Thickness: ~1.5–2 cm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'stone-grey-01.jpg'
    ],
    abstract: 'A large rectangular bar-pendant made from grey-green pebble rock, with a drilled suspension hole. A characteristic element of the warrior and funerary dress of the Bronze Age.',
    fullText: `
      <h3>Description</h3>
      <p>A large rectangular bar made of dense grey-green pebble rock. The shape is elongated and rectangular, with blunted edges and slightly rounded corners. A circular hole is drilled near one end. The surface is evenly polished to a smooth finish. The grey-green colour is due to the presence of chlorite or related minerals in the rock.</p>

      <h3>Functional Purpose</h3>
      <p>The object combined several functions. As a whetstone it was used to hone the cutting edges of bronze knives, arrowheads, and other metal implements. However, the presence of a hole and the burial context indicate that the object was carried on the person — suspended from a belt.</p>

      <h3>Warrior Context</h3>
      <p>Whetstone pendants are frequently found in wealthy male burials alongside weapons such as bronze daggers and spearheads. They were likely part of the warrior's equipment and symbolised mastery in the use of arms. Keeping a well-sharpened weapon was vital for a mounted warrior.</p>

      <h3>Petrographic Analysis</h3>
      <p>The grey-green colour and dense fine-grained structure of the rock suggest it is a metamorphic stone — possibly chlorite schist or argillite. Such rocks are typical of the mountain regions of Central Kazakhstan and were widely used during the Bronze Age.</p>
    `,
    tags: ['Bronze Age', 'stone', 'pebble rock', 'pendant', 'whetstone', 'warrior dress', 'tools', 'Kazakhstan']
  },

  {
    id: 'spindle-whorl',
    name: 'Clay Spindle Whorl',
    nameEn: 'Clay Spindle Whorl',
    subtitle: 'Biconical spindle flywheel weight',
    category: 'ceramics',
    period: 'Bronze Age',
    periodYears: '18th–12th century BCE',
    culture: 'Andronovo Cultural-Historical Community',
    material: 'Clay (hand-built, fired)',
    technique: 'Hand modelling, firing',
    dimensions: 'Diameter: ~4–5 cm, Height: ~3–4 cm',
    location: 'Kazakhstan',
    catalogNumber: null,
    images: [
      'spindle-whorl-01.jpg',
      'spindle-whorl-02.jpg'
    ],
    abstract: 'A clay spindle whorl — a flywheel weight for a spindle, used in spinning wool. Evidence of advanced textile production in Bronze Age communities of Central Kazakhstan.',
    fullText: `
      <h3>Description</h3>
      <p>The spindle whorl is made of fired beige-grey clay. The shape is biconical (double-cone), with a central through-hole approximately 8–10 mm in diameter for the vertical spindle shaft. The surface is uneven and undecorated; several small chips and cracks are visible — signs of active use.</p>

      <h3>What Is a Spindle Whorl and How Does It Work?</h3>
      <p>A spindle whorl is a flywheel weight placed on the lower end of a wooden or bone spindle shaft. Its mass and shape ensured steady and prolonged rotation of the spindle during spinning. The spinner would rotate the spindle while simultaneously drawing wool or linen fibres into a fine thread. Without the whorl, the spindle would quickly lose momentum — the weight ensured stable rotation.</p>

      <h3>Evidence of Textile Production</h3>
      <p>The presence of spindle whorls in the material culture clearly indicates that a population group was engaged in textile production: spinning wool or plant fibres and weaving. In the Bronze Age, animal husbandry — above all sheep-rearing — supplied communities with wool for the manufacture of clothing and blankets.</p>

      <h3>Significance for Economic Reconstruction</h3>
      <p>Spindle whorls are among the most common find types at Bronze Age settlements and in burials across Eurasia. Their abundance indicates that spinning and weaving were key branches of the domestic economy, traditionally carried out by women. Assemblages of spindle whorls in female burials attest to the high social status of the skilled craftswoman.</p>
    `,
    tags: ['Bronze Age', 'ceramics', 'spindle whorl', 'spinning', 'weaving', 'daily life', 'domestic economy', 'female dress', 'Andronovo culture', 'Kazakhstan']
  }
];

// ======================
// CATEGORY CONFIG
// ======================
const CATEGORIES = {
  all:      { name: 'All Artifacts',  nameRu: 'Все', icon: '🏛️', color: '#7c3aed' },
  ceramics: { name: 'Ceramics',       nameRu: 'Керамика', icon: '🏺', color: '#c8952a' },
  jewelry:  { name: 'Jewelry',        nameRu: 'Украшения', icon: '💍', color: '#34d399' },
  stone:    { name: 'Stone Objects',  nameRu: 'Камень', icon: '🪨', color: '#818cf8' },
  bone:     { name: 'Bone Objects',   nameRu: 'Кость', icon: '🦴', color: '#fbbf24' }
};

Object.keys(CATEGORIES).forEach(k => {
  CATEGORIES[k].count = k === 'all' ? ARTIFACTS.length : ARTIFACTS.filter(a => a.category === k).length;
});

// ======================
// RU TRANSLATIONS
// ======================
const RU_DB = {
  'vessel-dark': {
    name: 'Темно-серый лепной керамический сосуд',
    subtitle: 'Лепной сосуд яйцевидной формы, обожженный в восстановительной среде',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка)', technique: 'Ручная лепка, заглаживание, восстановительный обжиг', dimensions: 'Высота: ~22–26 см, Диаметр тулова: ~18–22 см', location: 'Казахстан',
    abstract: 'Темно-серый лепной сосуд — типичный образец керамики бронзового века Центрального Казахстана (андроновская общность).',
    fullText: '<h3>Описание</h3><p>Сосуд изготовлен из обожженной темно-серой глины. Форма яйцевидная, с плоским дном и слегка отогнутым наружу венчиком. Стенки равномерной толщины, тщательно заглажены. Поверхность без орнамента.</p><h3>Технология изготовления</h3><p>Сосуд изготовлен методом ручной лепки без использования гончарного круга. Темно-серый цвет является результатом восстановительного (бескислородного) обжига.</p><h3>Культурный контекст</h3><p>Подобная посуда служила универсальной тарой для хранения продуктов питания и приготовления пищи, а также использовалась в качестве погребального инвентаря.</p>'
  },
  'vessel-brown': {
    name: 'Красно-коричневый лепной керамический сосуд', subtitle: 'Лепной сосуд с выраженными следами нагара на стенках',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (ручная лепка)', technique: 'Ручная лепка, окислительный обжиг', dimensions: 'Высота: ~20–24 см, Диаметр тулова: ~16–20 см', location: 'Казахстан',
    abstract: 'Красно-коричневый лепной керамический сосуд с вторичными следами обжига — свидетельство активного использования в быту перед помещением в погребение.',
    fullText: '<h3>Описание</h3><p>Круглобокий горшок со слегка сужающейся шейкой. Поверхность красно-коричневая с ярко выраженными темными пятнами — следами нагара от готовки. Видны трещины от термического шока.</p><h3>Использование</h3><p>Горшок активно использовался на открытом огне в повседневной жизни, после чего был помещен в качестве инвентаря в погребение (срубно-андроновской культуры).</p>'
  },
  'bracelets-bronze': {
    name: 'Разомкнутые бронзовые браслеты', subtitle: 'Пара разомкнутых браслетов круглого сечения с патиной',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Андроновская культурно-историческая общность',
    material: 'Бронза (сплав меди с оловом)', technique: 'Литье в открытую форму, ковка, полировка', dimensions: 'Диаметр: ~6–7 см, проволока: ~4–5 мм', location: 'Казахстан',
    abstract: 'Пара разомкнутых бронзовых браслетов — традиционное украшение женского погребального наряда бронзового века. Покрыты сине-зеленой патиной.',
    fullText: '<h3>Описание</h3><p>Пара разомкнутых браслетов с круглым сечением проволоки. Концы слегка сужены. Поверхность покрыта многовековой сине-зеленой патиной.</p><h3>Технология</h3><p>Изготовлены литьем в форму с последующей ковкой. Бронзовый сплав был идеальным благодаря температуре плавления.</p><h3>Символика</h3><p>Традиционно носились парно на обоих запястьях как часть праздничного и погребального убора.</p>'
  },
  'bone-pendant': {
    name: 'Подвеска-амулет из зуба животного', subtitle: 'Амулет-подвеска с просверленным отверстием для подвешивания',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Степные культуры Центральной Азии',
    material: 'Зуб животного (лошадь/скот)', technique: 'Сверление, шлифовка', dimensions: 'Длина: ~9–12 см', location: 'Казахстан', catalogNumber: 'Тк 171/2019/К12/04/3',
    abstract: 'Амулет-подвеска из зуба крупного животного со сквозным отверстием. Находка из профессиональных раскопок 2019 года.',
    fullText: '<h3>Описание</h3><p>Подвеска на широком конце имеет просверленное отверстие (6-8 мм) для подвешивания. Цвет кремово-бежевый. Выполняла функции оберега и маркера благополучия у номадов.</p>'
  },
  'stone-pendant-red': {
    name: 'Подвеска-оселок из красного сланца', subtitle: 'Удлиненная подвеска-оселок с просверленным отверстием',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Степные культуры Центральной Азии',
    material: 'Красный сланец', technique: 'Пикетаж, шлифовка, сверление', dimensions: 'Длина: ~14–18 см', location: 'Казахстан',
    abstract: 'Удлиненная подвеска-оселок из красного сланца. Сочетает функции украшения и точильного камня для оружия.',
    fullText: '<h3>Описание</h3><p>Предмет из плотного красного сланца сужающейся формы со сквозным отверстием. Использовался для правки бронзовых лезвий и носился на ремешке как статусный маркер воина.</p>'
  },
  'stone-bar-grey': {
    name: 'Серый каменный оселок', subtitle: 'Крупная прямоугольная подвеска из серой галечной породы',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Степные культуры Центральной Азии',
    material: 'Серая галечная порода', technique: 'Шлифовка, сверление', dimensions: 'Длина: ~13–16 см', location: 'Казахстан',
    abstract: 'Крупная прямоугольная подвеска-брусок из серо-зеленой галечной породы. Характерный элемент экипировки воина бронзового века.',
    fullText: '<h3>Описание</h3><p>Плоский массивный брусок, предназначенный для заточки длинных бронзовых кинжалов. Использовался конными воинами.</p>'
  },
  'spindle-whorl': {
    name: 'Глиняное пряслице', subtitle: 'Биконический маховичок для веретена',
    period: 'Бронзовый век', periodYears: 'XVIII–XII века до н.э.', culture: 'Андроновская культурно-историческая общность',
    material: 'Глина (обожженная)', technique: 'Ручная лепка, обжиг', dimensions: 'Диаметр: ~4–5 см, Высота: ~3–4 см', location: 'Казахстан',
    abstract: 'Глиняное пряслице — маховичок для веретена, использовавшийся при прядении шерсти. Доказательство развитого текстильного производства.',
    fullText: '<h3>Описание</h3><p>Форма биконическая со сквозным центральным отверстием для деревянного стержня веретена. Служило утяжелителем для поддержания вращения при изготовлении нитей из шерсти.</p>'
  }
};

function tr(obj, field) {
  const isRu = typeof document !== 'undefined' && document.documentElement.dataset.lang === 'ru';
  if (isRu && obj.id && RU_DB[obj.id] && RU_DB[obj.id][field] !== undefined) return RU_DB[obj.id][field];
  if (isRu && obj.nameRu && field === 'name') return obj.nameRu;
  return obj[field] || '';
}

function trText(en, ru) {
  return (typeof document !== 'undefined' && document.documentElement.dataset.lang === 'ru') ? ru : en;
}

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
    case 'name-asc':  results.sort((a,b) => a.name.localeCompare(b.name, 'en')); break;
    case 'name-desc': results.sort((a,b) => b.name.localeCompare(a.name, 'en')); break;
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
    <span class="ph-label">${cat?.name || 'Artifact'}</span>
  </div>`;
}

function makeImg(src, alt, artifact) {
  const cat   = CATEGORIES[artifact.category];
  const bg    = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  const icon  = cat?.icon  || '🏛️';
  const label = tr(cat, 'name')  || 'Artifact';
  return `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class='img-placeholder' style='display:none;background:${bg}'><span class='ph-icon'>${icon}</span><span class='ph-label'>${label}</span></div>`;
}

// ======================
// RENDER CARDS
// ======================
function renderGridCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const img = artifact.images.length
    ? makeImg(artifact.images[0], tr(artifact, 'name'), artifact)
    : makePlaceholder(artifact);
  return `
  <article class="artifact-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${tr(artifact, 'name')}">
    <div class="card-img-wrap">
      ${img}
      <div class="card-badge badge-${artifact.category}">${cat?.icon} ${tr(cat, 'name')}</div>
    </div>
    <div class="card-body">
      <div class="card-title">${tr(artifact, 'name')}</div>
      <div class="card-sub">${tr(artifact, 'subtitle')}</div>
      <div class="card-meta">
        <span class="meta-tag">${tr(artifact, 'period')}</span>
        <span class="meta-tag">${tr(artifact, 'material').split('(')[0].trim()}</span>
        ${artifact.catalogNumber ? `<span class="meta-tag">📋 ${trText('Cat. No.', 'Кат. №')}</span>` : ''}
      </div>
      <p class="card-abstract">${tr(artifact, 'abstract')}</p>
    </div>
    <div class="card-footer">
      <span class="footer-period">⏳ ${tr(artifact, 'periodYears')}</span>
      <span class="footer-link">${trText('Read more', 'Подробнее')} →</span>
    </div>
  </article>`;
}

function renderListCard(artifact, delay = 0) {
  const cat = CATEGORIES[artifact.category];
  const bg  = GRADIENTS[artifact.category] || GRADIENTS.ceramics;
  const imgHTML = artifact.images.length
    ? `<div class="list-thumb">${makeImg(artifact.images[0], tr(artifact, 'name'), artifact)}</div>`
    : `<div class="list-thumb" style="background:${bg};display:flex;align-items:center;justify-content:center;font-size:28px">${cat?.icon}</div>`;
  return `
  <article class="list-card" onclick="openArticle('${artifact.id}')"
           style="animation-delay:${delay}ms" aria-label="${tr(artifact, 'name')}">
    ${imgHTML}
    <div class="list-body">
      <div class="list-title">${tr(artifact, 'name')}</div>
      <div class="list-meta">
        <span class="meta-tag">${cat?.icon} ${tr(cat, 'name')}</span>
        <span class="meta-tag">${tr(artifact, 'period')}</span>
        <span class="meta-tag">${tr(artifact, 'material').split('(')[0].trim()}</span>
      </div>
      <p class="list-abstract">${tr(artifact, 'abstract')}</p>
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
      <div class="empty-title">${trText('No artifacts found', 'Артефакты не найдены')}</div>
      <div class="empty-text">${trText('Try a different query or reset the filters', 'Попробуйте другой запрос или сбросьте фильтры')}</div>
      <button class="btn-ghost" onclick="resetFilters()">${trText('Reset filters', 'Сбросить фильтры')}</button>
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

  const infoImg = artifact.images.length
    ? `<div class="infobox-img">${makeImg(artifact.images[0], tr(artifact, 'name'), artifact)}</div>` : '';

  const gallery = artifact.images.length > 1 ? `
    <h3>${trText('Photo Gallery', 'Фотогалерея')}</h3>
    <div class="article-gallery">
      ${artifact.images.map((src, i) => `
        <div class="gallery-item" onclick="openLightbox('${src}')">
          ${makeImg(src, tr(artifact, 'name') + ' — photo ' + (i+1), artifact)}
        </div>`).join('')}
    </div>` : '';

  const related = ARTIFACTS
    .filter(a => a.id !== artifact.id && (a.category === artifact.category || a.period === artifact.period))
    .slice(0, 3);
  const relatedHTML = related.length ? `
    <div class="related-section">
      <h2 class="related-title">${trText('See Also', 'Смотрите также')}</h2>
      <div class="artifacts-grid">${related.map(a => renderGridCard(a)).join('')}</div>
    </div>` : '';

  return `
  <div class="article-breadcrumb">
    <span class="bc-link" onclick="goToBrowse()">🏛️ ${trText('Encyclopedia', 'Энциклопедия')}</span>
    <span class="bc-sep">›</span>
    <span class="bc-link" onclick="setCategory('${artifact.category}');goToBrowse()">${cat?.icon} ${tr(cat, 'name')}</span>
    <span class="bc-sep">›</span>
    <span>${tr(artifact, 'name')}</span>
  </div>

  <div class="article-header">
    <div class="article-badge badge-${artifact.category}">${cat?.icon} ${tr(cat, 'name')}</div>
    <h1 class="article-title">${tr(artifact, 'name')}</h1>
    <p class="article-subtitle">${tr(artifact, 'subtitle')}</p>
    <blockquote class="article-abstract">${tr(artifact, 'abstract')}</blockquote>
  </div>

  <div class="article-layout">
    <div class="article-body">
      ${tr(artifact, 'fullText')}
      ${gallery}
      <div class="article-tags">
        <span class="tags-label">🏷️ ${trText('Tags:', 'Тэги:')}</span>
        ${artifact.tags.map(t => `<span class="article-tag" onclick="searchTag('${t}')">${t}</span>`).join('')}
      </div>
    </div>
    <aside class="article-infobox">
      <div class="infobox-header"><span class="infobox-title">${tr(artifact, 'name')}</span></div>
      ${infoImg}
      <div class="infobox-data">
        ${[
          [trText('Category', 'Категория'),    tr(cat, 'name')],
          [trText('Period', 'Период'),      tr(artifact, 'period')],
          [trText('Dating', 'Датировка'),      tr(artifact, 'periodYears')],
          [trText('Culture', 'Культура'),     tr(artifact, 'culture')],
          [trText('Material', 'Материал'),    tr(artifact, 'material')],
          [trText('Technique', 'Техника'),   tr(artifact, 'technique')],
          [trText('Dimensions', 'Размеры'),  tr(artifact, 'dimensions')],
          [trText('Location', 'Локация'),    tr(artifact, 'location')],
          ...(artifact.catalogNumber ? [[trText('Cat. No.', 'Кат. №'), artifact.catalogNumber]] : [])
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

// ── Mobile Menu Toggle ──────────────────────
(function() {
  const burger = document.getElementById('mobile-menu-btn');
  const navLinksNode = document.querySelector('.nav-links');
  if (burger && navLinksNode) {
    burger.addEventListener('click', () => {
      navLinksNode.classList.toggle('mobile-active');
    });
  }
})();

function goToBrowse() {
  state.view = 'browse';
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
      <img src="${src}" alt="Enlarged photo">
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

  document.querySelectorAll('.sidebar-item[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      if (state.view === 'article') goToBrowse();
      else renderBrowse();
    });
  });

  document.querySelectorAll('.cat-pill[data-cat]').forEach(el => {
    el.addEventListener('click', () => {
      setCategory(el.dataset.cat);
      renderBrowse();
    });
  });

  document.getElementById('search-input')?.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    if (state.view === 'article') goToBrowse();
    else renderBrowse();
  });

  document.getElementById('sort-select')?.addEventListener('change', e => {
    state.sortBy = e.target.value;
    renderBrowse();
  });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.displayMode = btn.dataset.view;
      renderBrowse();
    });
  });

  document.querySelectorAll('[data-action="home"]').forEach(el => {
    el.addEventListener('click', () => { resetFilters(); goToBrowse(); });
  });

  renderBrowse();
});
