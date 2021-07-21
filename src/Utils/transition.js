// exports a styled component that contains a transition function
export default ({property = 'all', length = '0.3s', ease = 'ease'}) => `
  transition: ${property} ${length} ${ease}
`;