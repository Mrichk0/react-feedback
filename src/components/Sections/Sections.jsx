import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Sections = ({ title, children }) => {
  return (
    <Box p="20px" maxWidth="1140" m="0 auto">
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

export default Sections;

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
