const apiKey = 'DUpHWeGMjW4pDlIs7DmTeHMj4Wt0LlqEd7BMJiXviUx3HsLDrZ7kZRQv86C0lF0y';

const media = ['Ceramics', 'Gold, Silver & Jewelry', 'Ivory & Bone', 'Metal', 'Mosaics & Cosmati',
  'Pearl, Horn, Coral & Shell', 'Precious Stones & Gems', 'Resin, Wax & Composite', 'Sculpture',
  'Stone', 'Textiles', 'Wood',
];

const regions = {
  'Mexico & Guatemala' : ['guatemala','mexic', 'arenal', 'aztec', 'chupícuaro', 'colima', 'huastec',
    'jalisco', 'maya', 'Mezcala', 'michoacan', 'mixtec', 'nayarit', 'olmec', 'remojadas', 'sultupec',
    'tarascan', 'teotihuac', 'tlatilco', 'veracruz', 'xochipala', 'zacatecas', 'zapotec'
  ],
  Andean: ['colombia', 'calima', 'carchí', 'chancay', 'chavín', 'chimú', 'chorrera',
    'coclé', 'ecuador', 'guangala', 'huari', 'inca', 'jama-coaque', 'lambayeque', 'manteño', 'moche',
    'nariño', 'nazca', 'peru', 'quimbaya', 'recuay', 'salinar', 'sinú', 'taino', 'tairona',
    'tembladera', 'tolima', 'valdivia', 'vicús'
  ],
  'Panama & Costa Rica': ['panama', 'costa', 'diquís', 'guanacaste'],
  'North America & the Caribbean': ['america', 'dominican']
};

const cultures = ['Ecuadorian','Valdivia','Ecuadorian (Valdivia style)','Native North American',
  'Olmec','Tlatilco','Xochipala','Mexican','Mexican (Xochipala)',
  'Mexican (Olmec style)','Chorrera','Sultepec','Chavín','Zapotec','Peruvian (Cupisnique)','Tembladera',
  'Chupícuaro','Pre-Columbian','Colombian','Salinar','Maya','Jalisco','Mexican (Mezcala style)',
  'Colombian (San Agustin)','Mexican (Chontal style)','Colima','Mexican (Colima-Nayarit)',
  'Mexican (Jalisco style)','Nayarit','Vicús','Arenal','Zacatecas','Mexican (Colima style)',
  'Mexican (Colima-Jalisco)','Nazca','Mexican (Olmec-early Teotihuacan style)','Colima (Colima-Michoacán)',
  'Mezcala','Guangala','Moche','Costa Rican (Atlantic Watershed style)','Costa Rican (Atlantic Watershed)',
  'Costa Rican','Costa Rican (Guanacaste-Nicoya style)','Mexican (Mezcala)',
  'Guanacaste-Nicoya','Recuay','Costa Rican (Central Pacific area style)','Peruvian (Moche style)',
  'Ecuadorian (Tumaco-La Tolita)','Mexican (Teotihuacan style)','Jama-Coaque','Teotihuacán',
  'Mexican (Monte Albán style)','Veracruz','Huari','Mexican (Remojades or Nopiloa)',
  'Panamanian (Joaquín Polychrome)','Calima','Michoacan','Peruvian (Tiwanaku-Moquegua)'
  ,'Huastec','Quiché (Maya)',
  'Mexican (Jaina)','Guatemalan (Mayan style)','Guatemalan (Maya style)',
  'Remojadas','Mexican (Nopiloa)','Mexican (Veracruz or Maya)','Guatemalan','Panamanian (Macaracas)',
  'Colombian (Calima style)','Tairona','Tolima','Lambayeque (Sicán)',
  'Peruvian (Sicán (Lambayeque) style)','Carchí','Mexican (Mixteca-Puebla style)',
  'Costa Rican','Costa Rican (Potosí Appliqué)','Quimbaya (Caldas complex)',
  'Mixteca-Puebla','Peruvian (Sicán-Chimú style)','Chancay','Chimú','Peruvian (Chimú style)','Chimú',
  'Nariño (Tuza)','Nariño','Panamanian (Coclé style)','Mixtec','Panamanian (Gran Chiquíri)',
  'Taino','Central American','Diquís','Manteño','Tarascan',
  'Colombian (Chimila)','Coclé','Chiriqui (Panamanian)','Aztec','Panamanian',
  'Panamanian (Veraguas-Gran Chiriquí or Coclé)','Peruvian','Coclé',
  'Panamanian (Gran Chiriquí)','Aztec (Mexica)','Mexican (Toltec or Aztec style)',
  'Mexican (Aztec style)','Mexican (Zacatecas style)','Mexican (Maya-Toltec)',
  'Maya','Inca','Peruvian (Inka style)','Panamanian (Veraguas style)',
  'Sinú','Colombian (Zenú (Sinú)-Darién)','Colombian (Zenú (Sinú)-Darién style)',
  'Colombian (Moskito)','Mexican (Kino Viejo-Seri)',
  'Peruvian (Nazca style)'
]

const periods = ["Formative","late Archaic","Archaic-Early Formative","Early Formative","Early Pre-Classic",
  "Early-Middle Formative","Middle Formative","Late Formative","Early Horizon-Early Intermediate",
  "Initial Period-Early Horizon","Monte Albán I","Late Initial-Early Horizon","Late Preclassic",
  "Late Formative-Early Classic","Horqueta","Archaic","Late Pre-Classic","Comala Phase","Protoclassic",
  "Early Intermediate Phases II-III","Comala Phase","Late Preclassic-Early Classic","Early Classic",
  "Terminal Formative-Early Classic","Early Intermediate","Period IV","late Period IV",
  "Middle Classic","Early Intermediate Phases III-IV","Early Classic","Phases III-IV",
  "Early Intermediate Phases IIII-IV","Early Intermediate (Phase 6)","Late Classic, Monte Albán IIIb",
  "late Period IV-early Period V","Early Intermediate-Middle Horizon","Middle Horizon","Late Classic","Yotoco",
  "Late Formative-Classic","Late Preclassic-Classic","Monte Albán IIIB-IV","Pre-Colombian",
  "late Period V-early Period VI","Early Postclassic","Late Classic-Early Postclassic","Early Postclassic",
  "Middle Horizon-Late Intermediate","Period VI","Period V–VI","late Period VI","Late Postclassic",
  "Late Intermediate","Late Period","Late Post-Classic","Late Period V-Period VI",
  "Late Intermediate-Late Horizon","Late Period IV–VI","Postclassic","Period V-VI",
  "Pre-Early Conquest","Classic-Postclassic","Late Horizon","Late Period V–Period VI","Colonial"
]

const orderBy = {
  Title: 'Title',
  Culture: 'Creator',
  'Date Range End': 'DateBeginYear',
  'Date Range Begin': 'DateEndYear',
  Media: 'Calssification',
  Period: 'Period'
}

module.exports = {apiKey, media, regions, cultures, periods, orderBy};

// fetch(`http://api.thewalters.org/v1/objects?collectionId=2&creator=${regions['North America & the Caribbean'].join(',')}&pageSize=100&apikey=DUpHWeGMjW4pDlIs7DmTeHMj4Wt0LlqEd7BMJiXviUx3HsLDrZ7kZRQv86C0lF0y`)
// .then(response => {
//   response.json().then(body => {
//     console.log(body)
//   })
// })

// async componentDidMount() {
//   const promises = [1,2,3,4,5,6].map(item => {
//     return fetch(`http://api.thewalters.org/v1/collections/2/objects?page=${item}&pageSize=100&apikey=DUpHWeGMjW4pDlIs7DmTeHMj4Wt0LlqEd7BMJiXviUx3HsLDrZ7kZRQv86C0lF0y`)
//       .then(response => {
//         return response.json();
//       })
//   })
  
//   Promise.all(promises).then(bodies => {
//     console.log(bodies)
//     const objects = bodies.reduce((acc, body) => {
//       acc = acc.concat(body.Items);
//       return acc;
//     }, []);

//     console.log(objects.sort((a,b) => a.DateEndYear - b.DateEndYear))

//     const creators = objects.reduce((acc, obj) => {
//       if (!acc[obj.Creator]) {
//         acc[obj.Creator] = 1;
//       } else {
//         acc[obj.Creator]++;
//       }
//       return acc
//     }, {})
//     console.log(creators)

//     const classifications = objects.reduce((acc, obj) => {
//       if (!acc[obj.Classification]) {
//         acc[obj.Classification] = 1;
//       } else {
//         acc[obj.Classification]++;
//       }
//       return acc
//     }, {})
//     console.log(classifications)

//     const periods = objects.reduce((acc, obj) => {
//       if (!acc[obj.Period]) {
//         acc[obj.Period] = 1;
//       } else {
//         acc[obj.Period]++;
//       }
//       return acc
//     }, {})
//     console.log(periods)

//     const geographies = objects.reduce((acc, obj) => {
//       obj.GeoIDs.split(', ').forEach(id => {
//         if (!acc[id]) {
//           acc[id] = 1;
//         } else {
//           acc[id]++;
//         }
//       })
//       return acc
//     }, {})
//     console.log(geographies)
//   })     
// }