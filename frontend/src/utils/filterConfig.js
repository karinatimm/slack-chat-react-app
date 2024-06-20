import filter from 'leo-profanity';

const initializeFilter = () => {
  filter.loadDictionary('ru');
  filter.loadDictionary('en');
};

export default initializeFilter;
