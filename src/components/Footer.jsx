function Footer() {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 w-full pt-2 pb-4">
      <p className="text-white text-center mt-2 font-normal">
        Copyright &copy; <span className="year">{year}</span>&#160; Food Ordering
        &#160;
      </p>
    </div>
  );
};

export default Footer;
