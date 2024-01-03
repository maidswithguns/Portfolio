import { useEffect } from "react";
import Block from "../Block"
import kurumi from './Kurumi.png'
import background from './date-a-bullet.png'
import M from 'materialize-css/dist/js/materialize.min.js';
import sc1 from './Screenshot_1.png';
import sc2 from './Screenshot_2.png';
import sc3 from './Screenshot_3.png';
import sc4 from './Screenshot_4.png';
import sc5 from './Screenshot_5.png';
import sc6 from './Screenshot_6.png';
import game_structure from './game_structure.png';
import kurumi_s1 from './kurumi_s1.png';
import kurumi_s2 from './kurumi_s2.png';
import kurumi_s3 from './kurumi_s3.png';
import anim1 from './anim1.mp4';
import anim2 from './anim2.mp4';
import anim3 from './anim3.mp4';
import { useTranslation } from "react-i18next";

const DateABulletBlock = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('Date a Bullet.title')}
            description={t('Date a Bullet.description')}
            image={kurumi}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/date-a-bullet-fan-game"
            color="red darken-4"
        >
            <h3>{t('Date a Bullet.title')}</h3>
            <h4>{t('Date a Bullet.subtitle')}</h4>
            <div className="row">
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc1} alt="Screenshot1"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc2} alt="Screenshot2"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc3} alt="Screenshot3"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc4} alt="Screenshot4"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc5} alt="Screenshot5"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc6} alt="Screenshot6"></img>
                </div>
            </div>
            <p>{t('Date a Bullet.p1')}</p>

                <iframe className="full-width-video" id="date-a-bullet-video-yt" src="//www.youtube.com/embed/UisCWG0ivc0" frameborder="0" allowfullscreen="true" title="Date a Bullet Gameplay video"></iframe>
                <label style={{color:"white"}} for="date-a-bullet-video-yt">{t('Date a Bullet.label1')}</label>


            <h4>{t('Date a Bullet.subtitle2')}</h4>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={game_structure} alt="game_structure"></img>
                </div>
                <div className="col l8 s12">
                    <p>{t('Date a Bullet.p2')}</p>
                    <p>{t('Date a Bullet.p3')}</p>
                    <p>{t('Date a Bullet.p4')}</p>
                    <p>{t('Date a Bullet.p5')}</p>
                    <iframe id="date-a-bullet-new-video-yt" src="//www.youtube.com/embed/jQtpt2cRZ4o" frameborder="0" allowfullscreen="true" title="Date a Bullet Gameplay video new"></iframe>
                </div>
            </div>
            <h4>{t('Date a Bullet.subtitle3')}</h4>
            <div className="row">
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s3} alt="Kurumi Screenshot 3"></img>
                </div>
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s1} alt="Kurumi Screenshot 1"></img>
                </div>
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s2} alt="Kurumi Screenshot 2"></img>
                </div>
            </div>
            <p>{t('Date a Bullet.p6')}</p>
            <h4>{t('Date a Bullet.subtitle4')}</h4>
            <div className="row">
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim1} type="video/mp4" />
                </video>
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim2} type="video/mp4" />
                </video>
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim3} type="video/mp4" />
                </video>
            </div>
        </Block>
    )
}

export default DateABulletBlock