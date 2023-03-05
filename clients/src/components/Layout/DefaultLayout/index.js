import Header from "../../Header";
import MenuTop from "../../MenuTop";
function DefaultLayout({ children }) {
  return (
    <div className="w-full flex ">
      <div className="header basis-1/5" style={{background:"#001427",minHeight:"100vh",}}>
        <Header />
      </div>
      <div className="container basis-4/5 w-3/4  ">
        <div className="menutop w-full">
          <MenuTop />
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
