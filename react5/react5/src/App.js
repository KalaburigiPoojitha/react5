// import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <div className="headContainer">
        {/* <h1>MUMBAI INDIANS</h1> */}
        <div className="container1">
          <div class="nav">
            <img
              src="./images/bccilogo.png"
              alt=""
              width="75px"
              height="75px"
            ></img>

            <img src="./images/ipl.png" alt="" width="75px" height="75px"></img>
          </div>
        </div>

        <div className="navBar">
          <div>MATCHES</div>
          <div>POINTS TABLE</div>
          <div>VIDEOS</div>
          <div>NEWS</div>
          <div>TEAMS</div>
          <div>STATS</div>
          <div>FANTASY</div>
          <div>POLLS</div>
          <div>FAN CONTESTS</div>
          <div>MORE</div>
        </div>
        <div className="container2">
          <div>OTHER TEAMS</div>
          <div>
            <img src="./images/3513.png" alt="" width="180px"></img>
            <img src="./images/3514.png" alt="" width="180px"></img>
            <img src="./images/3515.png" alt="" width="180px"></img>
            <img src="./images/3516.png" alt="" width="180px"></img>
          </div>
        </div>
        <div className="container3">
          <div>
            <img
              src="./images/3517.png"
              alt=""
              width="120px"
              height="120px"
            ></img>
          </div>
          <div>Mumbai Indians</div>

          <table>
            <div className="tableDiv">
              <tr>
                <th>Team Owner-</th>
                <td>India win Sports Private Limited</td>
              </tr>
              <tr>
                <th>Head Coach-</th>
                <td>Charlotte Edwards</td>
              </tr>
              <tr>
                <th>Captain-</th>
                <td>Harmanpreet Kaur</td>
              </tr>
            </div>
          </table>
        </div>
        <br></br>
        <br></br>

        <div className="navBar2">
          <div className="navItem">All</div>
          <div className="navItem">
            <a href="app.js#batters">Batters</a>
          </div>
          <div className="navItem">
            <a href="app.js#bowlers">Bowlers</a>
          </div>
          <div className="navItem">
            <a href="app.js#all Rounders">All Rounders</a>
          </div>
          <div className="navItem">
            <a href="app.js#wicketKeepers">Wicket-Keepers</a>
          </div>
        </div>
        <br></br>
        <br></br>

        <div>
          <h1 id="allRounders">ALL ROUNDERS</h1>
          {/* <div className="playerDiv">
            <img className="playerPic" src="./images/99512.png" alt=""></img>
            <h2>Amandeep Kaur</h2>
            <h3>All Rounder</h3>
          </div> */}

          <Player
            name="Amandeep Kaur"
            role="All Rounder"
            pic="./images/99512.png"
          ></Player>

          <Player
            name="Amelia kerr"
            role="All Rounder"
            pic="./images/66632.png"
          ></Player>
          <Player
            name="Chloe Tryon"
            role="All Rounder"
            pic="./images/11858.png"
          ></Player>
          <Player
            name="Harmanpreet Kaur"
            role="Captain and All Rounder "
            pic="./images/59348.png"
          ></Player>
          <Player
            name="Hayley Matthews"
            role="All Rounder"
            pic="./images/64970.png"
          ></Player>
          <Player
            name="Humairaa Kaazi"
            role="All Rounder"
            pic="./images/84428.png"
          ></Player>
          <Player
            name="Isabelle Wong"
            role="All Rounder"
            pic="./images/72861.png"
          ></Player>
          <Player
            name="Jintimai Kalita"
            role="All Rounder"
            pic="./images/89193.png"
          ></Player>
          <Player
            name="Keerthana Balakrishnan"
            role="All Rounder"
            pic="./images/70719.png"
          ></Player>
          <Player
            name="Natalie Sciver"
            role="All Rounder"
            pic="./images/63998.png"
          ></Player>
          <Player
            name="Pooja Vastrakar"
            role="All Rounder"
            pic="./images/68423.png"
          ></Player>
          <Player
            name="Sajeevan Sajana"
            role="All Rounder"
            pic="./images/84022.png"
          ></Player>
        </div>
        <br></br>
        <div>
          <h1 id="wicketKeepers">WICKET-KEEPERS</h1>
          <Player
            name="Priyanka Bala"
            role="Wicket-Keeper"
            pic="./images/75615.png"
          ></Player>
          <Player
            name="Yastika Bhatia"
            role="Wicket-Keeper"
            pic="./images/73424.png"
          ></Player>
        </div>
        <br></br>
        <div>
          <h1 id="bowlers">BOWLERS</h1>
          <Player
            name="Fatima Jaffer"
            role="Bowler"
            pic="./images/83645.png"
          ></Player>
          <Player
            name="Saika Ishaque"
            role="Bowler"
            pic="./images/100194.png"
          ></Player>
          <Player
            name="Shabnim Ismail"
            role="Bowler"
            pic="./images/6658.png"
          ></Player>
        </div>
      </div>
      <div className="footContainer">
        <div>
          <h4>Teams</h4>
          <h4>UP Warriorz</h4>
          <h4>Delhi Capitals</h4>
          <h4>Gujarat Giants </h4>
          <h4>Mumbai Indians</h4>
          <h4>Royal Challengers Banglore</h4>
        </div>
        <div>
          <h4>About</h4>
          <h4>Anti Corruption Policy</h4>
          <h4>Anti Doping Policy</h4>
          <h4>Anti Discrimination Policy</h4>
          <h4>Clothing And Equipment Regulations </h4>
          <h4>Code of Conduct For Players And Teams OFficials</h4>
        </div>
        <div>
          <h4>Guidelines</h4>
          <h4>WPL Code Of Conduct For Match Officials</h4>
          <h4>Matching Playing Conditions</h4>
          <h4>PMOA Minimum Standard</h4>
          <h4>Suspect Action Policy</h4>
        </div>
        <div>
          <h4>Contact</h4>
          <h4>Terms & Conditions</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
      <foot>@COPYRIGHT 2024 WOMEN'S PREMIER LEAGUE. ALL RIGHTS RESERVED.</foot>
    </div>
  );
}

export default App;
