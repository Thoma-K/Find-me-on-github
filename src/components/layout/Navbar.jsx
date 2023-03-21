import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost byn-sm rounded-btn">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost byn-sm rounded-btn"
              onClick={window.dataLayer.push({
                event: 'test_conversion',
                originalValue: 'Thomas Kara',
                hashedValue:
                  '6e2c9ab2b66314a18de3320ffbc22123cf879ff0cb10d797aeaaf95bc6a02406',
              })}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Find Me On Github',
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
