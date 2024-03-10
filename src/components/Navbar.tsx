function Navbar() {
  return (
    <>
      <nav>
        <ul className=" ml-4 [&_li]:text-2xl flex flex-col gap-4">
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>Tentang</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
