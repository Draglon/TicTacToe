const DEFAULT = 'TEST';

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return `${DEFAULT} - Home`;
    default:
      return `${DEFAULT} - Not Found`;
  }
};
