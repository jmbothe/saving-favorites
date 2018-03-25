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

module.exports = {media, regions};

// fetch(`http://api.thewalters.org/v1/objects?collectionId=2&creator=${regions['North America & the Caribbean'].join(',')}&pageSize=100&apikey=DUpHWeGMjW4pDlIs7DmTeHMj4Wt0LlqEd7BMJiXviUx3HsLDrZ7kZRQv86C0lF0y`)
// .then(response => {
//   response.json().then(body => {
//     console.log(body)
//   })
// })