const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-7">
        <div>
          <div>Logical</div>
          <div>Labs</div>
        </div>
        <div className="flex items-center justify-center">
          <div>Services</div>
          <div>About us</div>
          <div>Careers</div>
          <div>Contact us</div>
        </div>
        <div>Sign in</div>
      </div>
    </nav>
  );
};

export default Navbar;
