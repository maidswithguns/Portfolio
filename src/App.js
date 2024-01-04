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

    var text = document.getElementById('page-title');
    var shadow = '';
    for (var i = 0; i < 30; i++) {
      shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #bbb';
    }
    text.style.textShadow = shadow;

    for (let i = 0; i < 75; i++) {
      let star = document.createElement('span');
      star.className = 'star material-symbols-outlined';
      star.innerHTML = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.fontSize = Math.random() * 10 + 10 + 'px';
      document.querySelector('section.stars').appendChild(star);
    }

    function animateStars() {
      let AllStars = document.querySelectorAll('.star');
      let num = Math.floor(Math.random() * AllStars.length);
      AllStars[num].classList.toggle('animated');
    }

    setInterval(animateStars, 50);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <section className='stars'></section>
      <div className='header'>
        <div id='page-title-holder'>
          <h1 id="page-title" data-text={t('title')}>{t('title')}</h1>
        </div>
        <div className='select-language-button'>
          <button className='dropdown-trigger btn' data-target='dropdown1'>Select Language</button>
        </div>
        <h4><b>{t('welcomeMessage')}</b></h4>
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
