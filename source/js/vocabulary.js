const vocabularyID = {
  rooms0: 'любое количество комнат',
  rooms1: '1 комната',
  rooms1more: 'более 1 комнаты',
  rooms2: '2 комнаты',
  rooms2more: 'более 2 комнат',
  rooms3: '3 комнаты',
  rooms3more: 'более 3 комнат',
  rooms4more: 'более 4 комнат',
  moreToilets: '2 и более санузла',
  bigLoggia: 'большая лоджия',
  wardrobe: 'гардеробная',
  kitchenLivingRoom: 'кухня-гостиная',
  loggia: 'лоджия',
  laundry: 'постирочная',
  znak: 'ZNAK',
  lomonosov: 'На Ломоносова',
  vasilki: 'Васильки',
  kalinina: 'На Калинина',
};

const returnTextContent = (idProperty) => {
  return vocabularyID[idProperty];
};

export { vocabularyID, returnTextContent };
