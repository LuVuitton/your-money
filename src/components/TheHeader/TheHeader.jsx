import BurgerMenu from "../BurgerMenu/BurgerMenu";
import s from "./TheHeader.module.css";

const TheHeader = () => {

    
  return (
    <header>
      <div className={s.mainWrapper}>
        <BurgerMenu />
        <div>LOGO</div>
        <div>money $</div>
        <div>ЛК</div>
      </div>
    </header>
  );
};

export { TheHeader };
