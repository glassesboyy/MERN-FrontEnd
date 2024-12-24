import PropTypes from "prop-types";

const Link = ({
  title,
  href = "#",
  onClick,
  textColor = "text-blue-500 hover:underline hover:text-blue-600",
  margin = "",
  textSize = "",
}) => {
  const linkClasses = `
    ${textColor}
    ${margin}
    ${textSize}
    inline-block
    transition-colors
    duration-300
  `;

  return (
    <a href={href} onClick={onClick} className={linkClasses}>
      {title}
    </a>
  );
};

Link.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  margin: PropTypes.string,
  textSize: PropTypes.string,
};

export default Link;
