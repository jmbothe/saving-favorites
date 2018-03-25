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