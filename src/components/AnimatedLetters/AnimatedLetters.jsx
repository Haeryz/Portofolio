import PropTypes from 'prop-types';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={`${char}-${i}`} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired, // Ensure letterClass is a string
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate strArray as an array of strings
  idx: PropTypes.number, // Validate idx as a number
};

AnimatedLetters.defaultProps = {
  idx: 0, // Provide a default value for idx
};

export default AnimatedLetters;
