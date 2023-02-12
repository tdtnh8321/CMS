function Header(props) {
  return (
    <div
      className={`w-full bg-red-500 h-[${document.scrollingElement.clientHeight}px]`}
    ></div>
  );
}

export default Header;
