import filter from 'leo-profanity';

const initializeFilter = () => {
  filter.add(filter.getDictionary('en'));
  filter.add(filter.getDictionary('ru'));
};

export default initializeFilter;
