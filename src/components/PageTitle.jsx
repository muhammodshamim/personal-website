import PropTypes from "prop-types";
export default function PageTitle({ children, title }) {
  return (
    <div className="page-title w-full text-center">
      <h1 className="text-xl primary-color">{title}</h1>
      <p className="text-2xl mt-2">{children}</p>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
