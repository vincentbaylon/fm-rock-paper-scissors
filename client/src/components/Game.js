import Scissors from "../assets/icon-scissors.svg";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import Penta from "../assets/bg-pentagon.svg";

function Game() {
   return (
      <div className="game">
         <img src={Penta} alt="Pentagon background" />
         <div className="game__board">
            <div className="game__board--first">
               <div className="game__border game__border--scissors">
                  <img
                     src={Scissors}
                     alt="Scissors icon"
                     className="game__icon game__icon--scissors"
                  />
               </div>
            </div>
            <div className="game__board--second">
               <div className="game__border game__border--spock">
                  <img
                     src={Spock}
                     alt="Spock icon"
                     className="game__icon game__icon--spock"
                  />
               </div>
               <div className="game__border game__border--paper">
                  <img
                     src={Paper}
                     alt="Paper icon"
                     className="game__icon game__icon--paper"
                  />
               </div>
            </div>
            <div className="game__board--third">
               <div className="game__border game__border--lizard">
                  <img
                     src={Lizard}
                     alt="Lizard icon"
                     className="game__icon game__icon--lizard"
                  />
               </div>
               <div className="game__border game__border--rock">
                  <img
                     src={Rock}
                     alt="Rock icon"
                     className="game__icon game__icon--rock"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Game;
