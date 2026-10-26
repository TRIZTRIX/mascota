const Header = ({ titulo }) => {
  return (
    <header className="text-center my-5">
      <h1 className="display-4 fw-bold text-success">{titulo}</h1>
      <hr className="w-25 mx-auto text-success border-2 opacity-50" />
    </header>
  );
};

export default Header;
