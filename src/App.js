import './App.css';
import BakutaraBokaam from './Block/Bakutara Bokaam/Bakutara Bokaam Block';
import DateABulletBlock from './Block/Date a Bullet/Date a Bullet Block';
import 'materialize-css/dist/css/materialize.min.css';
import UnusualScientist from './Block/Unusual Scientist/Unusual Scientist';
import BrokenBones from './Block/Broken Bones/Broken Bones';
import MultiplayerProject from './Block/Muliplayer Project/Multiplayer Project';
import TaikoNoTatsujin from './Block/Taiko No Tatsujin/Taiko No Tatsujin';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { t } = useTranslation();

  return (
    <div>

      <div className='header'>
        <h1>{t('title')}</h1>
        <div className='select-language-button'>
          <button className='dropdown-trigger btn' data-target='dropdown1'>Select Language</button>
        </div>
        <h4>{t('welcomeMessage')}</h4>
      </div>

      <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!" onClick={() => i18n.changeLanguage('en')}>English</a></li>
          <li><a href="#!" onClick={() => i18n.changeLanguage('jp')}>日本語</a></li>
        </ul>
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
