import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './Icon.png';
import background from './background.png';
import sc1 from './screenshot1.jpg';
import sc2 from './screenshot2.jpg';
import sc3 from './screenshot3.jpg';
import sc4 from './screenshot4.jpg';
import sc5 from './screenshot5.jpg';
import sc6 from './screenshot6.jpg';
import sc7 from './screenshot7.jpg';
import md1 from './Model1.png';
import md2 from './Model2.png';
import md3 from './Model3.png';
import gif1 from './gif1.gif';
import gif2 from './gif2.gif';
import { useTranslation } from "react-i18next";

const SPrysmDestroyer = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('S Prysm Destroyer.title')}
            description={t('S Prysm Destroyer.description')}
            image={cover}
            backgroundImage={background}
            gameLink="https://store.steampowered.com/app/2975480/S_Prysm_Destroyer/"
            nintendoLink="https://store-jp.nintendo.com/item/software/D70010000090102"
            playstationLink="https://store.playstation.com/ja-jp/concept/10013189/"
            xboxLink="https://www.xbox.com/ja-JP/games/store/s-prysm-destroyer/9pdxn02twxhs"
            color="orange darken-4"
            backgroundGradientColor="rgba(0, 0, 0, 1)"
            launchDate="26/07/2024"
        >
            <h2>{t('S Prysm Destroyer.title')}</h2>
            <h3>{t('S Prysm Destroyer.subtitle')}</h3>
            <div className="row">
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc1} alt="Screenshot1"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc2} alt="Screenshot2"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc3} alt="Screenshot3"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc4} alt="Screenshot4"></img>
                </div>
                <div className="col l3 s6 offset-l1">
                    <img className="materialboxed" width="100%" src={sc5} alt="Screenshot5"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc6} alt="Screenshot6"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc7} alt="Screenshot7"></img>
                </div>
            </div>
            <p>{t('S Prysm Destroyer.p1')}</p>
                <iframe className="full-width-video" id="s-prysm-destroyer-video-yt" src="//www.youtube.com/embed/7_8XNBP8fMc " frameborder="0" allowfullscreen="true" title="S Prysm Destroyer Gameplay video"></iframe>
                <label style={{color:"white"}} for="s-prysm-destroyer-video-yt">{t('S Prysm Destroyer.label1')}</label>
            <h4>{t('S Prysm Destroyer.subtitle2')}</h4>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={gif1} alt="gif1"></img>
                </div>
                <div className="col l8 s12">
                    <p>{t('S Prysm Destroyer.p2')}</p>
                    <p>{t('S Prysm Destroyer.p3')}</p>
                </div>
            </div>
            <h4>{t('S Prysm Destroyer.subtitle3')}</h4>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={md1} alt="Model1"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={md2} alt="Model2"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={md3} alt="Model3"></img>
                </div>
            </div>
            <h4>{t('S Prysm Destroyer.subtitle4')}</h4>
            <div className="row">
                <img className="materialboxed" width="100%" src={gif2} alt="gif2"></img>
            </div>
            <h4>{t('S Prysm Destroyer.subtitle5')}</h4>
            <iframe className="full-width-video" id="s-prysm-destroyer-video-yt" src="//www.youtube.com/embed/OTFk9H4Aw6I" frameborder="0" allowfullscreen="true" title="S. Prysm Destroyer Gameplay video"></iframe>
            <label style={{color:"white"}} for="s-prysm-destroyer-video-yt">{t('S Prysm Destroyer.label2')}</label>
            <h4>{t('S Prysm Destroyer.subtitle6')}</h4>
            <div className="row">
                <a className="waves-effect waves-light btn" href="https://www.eastasiasoft.com/games/S-Prysm-Destroyer" target="_blank" rel="noreferrer">Publisher's website</a>
                <a className="waves-effect waves-light btn" href="https://www.xbox.com/ja-jp/games/store/s-prysm-destroyer/9pdxn02twxhs?rtc=1" target="_blank" rel="noreferrer">Xbox Store</a>
            </div>
        </Block>
    )
}

export default SPrysmDestroyer