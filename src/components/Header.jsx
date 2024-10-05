/* eslint-disable react/prop-types */
function Header({ className = "" }) {
  return (
    <header className={`${className}`}>
      <h1 className="p-4 mx-4 rounded-xl bg-amber-400 text-center text-2xl md:text-4xl text-black">
        What&apos;s on your mind ?...
      </h1>
    </header>
  );
}

export default Header;
