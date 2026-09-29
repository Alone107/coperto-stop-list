import { MenuList } from "../MenuList/MenuList";
import menu from "../../data/menu.json";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="menu">
            <MenuList items={menu} />
          </div>
          <div className="stop-list"></div>
        </div>
      </div>
    </main>
  );
};
