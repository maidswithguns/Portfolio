import './App.css';
import BakutaraBokaam from './Block/Bakutara Bokaam/Bakutara Bokaam Block';
import DateABulletBlock from './Block/Date a Bullet/Date a Bullet Block';
import 'materialize-css/dist/css/materialize.min.css';
import UnusualScientist from './Block/Unusual Scientist/Unusual Scientist';
import BrokenBones from './Block/Broken Bones/Broken Bones';
import MultiplayerProject from './Block/Muliplayer Project/Multiplayer Project';
import TaikoNoTatsujin from './Block/Taiko No Tatsujin/Taiko No Tatsujin';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>ペドロ　マデイラのポートフォリオ </h1>
        <h4>このウェブサイトにようこそ！</h4>
      </div>
      <DateABulletBlock />
      <BakutaraBokaam />
      <UnusualScientist />
      <BrokenBones />
      <MultiplayerProject />
      <TaikoNoTatsujin />
    </div>
  );
}

export default App;
