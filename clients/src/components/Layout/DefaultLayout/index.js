import Header from "../../Header";
import MenuTop from "../../MenuTop";
function DefaultLayout({ children }) {
  return (
    <div className="w-full flex flex-row">
      <div className="header basis-1/5">
        <Header />
      </div>
      <div className="container basis-4/5 flex flex-col">
        <div className="menutop">
          <MenuTop />
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
