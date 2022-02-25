function Header() {
   return (
      <div className="header">
         <div className="header__list">
            <h3 className="header__text">ROCK</h3>
            <h3 className="header__text">PAPER</h3>
            <h3 className="header__text">SCISSORS</h3>
            <h3 className="header__text">LIZARD</h3>
            <h3 className="header__text">SPOCK</h3>
         </div>
         <div className="header__score">
            <h3 className="header__h3">SCORE</h3>
            <h2 className="header__h2">12</h2>
         </div>
      </div>
   );
}

export default Header;
