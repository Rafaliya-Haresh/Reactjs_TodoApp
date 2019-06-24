export default function (state = {}, action) {
  switch (action.type) {
    case 'INSTALLATION':
      return Object.assign({}, state, { installationDetails: action.installationDetails });
    default: 
      return state;
  }
}
