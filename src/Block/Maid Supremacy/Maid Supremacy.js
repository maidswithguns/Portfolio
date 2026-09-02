import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './Cover.png';
import background from './Background.png';
import screenshot1 from './screenshot1.jpg';
import screenshot2 from './screenshot2.jpg';
import screenshot3 from './screenshot3.jpg';
import mechanics1 from './mechanics1.gif';
import cutscenes1Gif from './cutscenes1.gif';
import cutscenes1Video from './cutscenes1.mp4';
import model1 from './model1.png';
import model2 from './model2.png';
import model3 from './model3.png';
import scenario1 from './scenario1.png';
import scenario2 from './scenario2.png';
import scenario3 from './scenario3.png';
import scenario4 from './scenario4.png';
import movement1 from './movement1.mp4';
import multiplayer1 from './multiplayer1.jpg';
import multiplayer2 from './multiplayer2.png';
import boss1 from './boss1.jpg';
import { useTranslation } from "react-i18next";

const MaidSupremacy = () => {
    useEffect(() => {
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('Maid Supremacy.title')}
            description={t('Maid Supremacy.description')}
            image={cover}
            backgroundImage={background}
            gameLink="https://store.steampowered.com/app/5138880/Maid_Supremacy_Achieving_World_Domination_with_a_Tank_Demo/"
            color="teal darken-4"
            backgroundGradientColor="rgba(0, 0, 0, 1)"
            launchDate="03/09/2026"
        >
            <h2>{t('Maid Supremacy.title')}</h2>
            <h3>{t('Maid Supremacy.screenshots')}</h3>
            <p>{t('Maid Supremacy.screenshotsText')}</p>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={screenshot1} alt="Maid Supremacy screenshot 1"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={screenshot2} alt="Maid Supremacy screenshot 2"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={screenshot3} alt="Maid Supremacy screenshot 3"></img>
                </div>
            </div>

            <h3>{t('Maid Supremacy.trailer')}</h3>
            <iframe className="full-width-video" id="maid-supremacy-trailer-yt" src="//www.youtube.com/embed/-osCENcATuQ" frameBorder="0" allowFullScreen={true} title="Maid Supremacy trailer"></iframe>
            <label style={{color:"white"}} htmlFor="maid-supremacy-trailer-yt">{t('Maid Supremacy.trailerLabel')}</label>

            <h4>{t('Maid Supremacy.mechanics')}</h4>
            <div className="row">
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={mechanics1} alt="Maid Supremacy gameplay mechanics"></img>
                </div>
                <div className="col l6 s12">
                    <p>{t('Maid Supremacy.mechanicsText')}</p>
                </div>
            </div>

            <h4>{t('Maid Supremacy.cutscenes')}</h4>
            <p>{t('Maid Supremacy.cutscenesText')}</p>
            <div className="row">
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={cutscenes1Gif} alt="Maid Supremacy cutscene preview"></img>
                </div>
                <video className="responsive-video col l6 s12" controls>
                    <source src={cutscenes1Video} type="video/mp4" />
                </video>
            </div>

            <h4>{t('Maid Supremacy.models')}</h4>
            <p>{t('Maid Supremacy.modelsText')}</p>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={model1} alt="Maid Supremacy model 1"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={model2} alt="Maid Supremacy model 2"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={model3} alt="Maid Supremacy model 3"></img>
                </div>
            </div>

            <h4>{t('Maid Supremacy.scenery')}</h4>
            <p>{t('Maid Supremacy.sceneryText')}</p>
            <div className="row">
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={scenario1} alt="Maid Supremacy scenery 1"></img>
                </div>
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={scenario2} alt="Maid Supremacy scenery 2"></img>
                </div>
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={scenario3} alt="Maid Supremacy scenery 3"></img>
                </div>
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={scenario4} alt="Maid Supremacy scenery 4"></img>
                </div>
            </div>

            <h4>{t('Maid Supremacy.animation')}</h4>
            <p>{t('Maid Supremacy.animationText')}</p>
            <div className="row">
                <video className="responsive-video col s12" controls>
                    <source src={movement1} type="video/mp4" />
                </video>
            </div>

            <h4>{t('Maid Supremacy.multiplayer')}</h4>
            <p>{t('Maid Supremacy.multiplayerText')}</p>
            <div className="row">
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={multiplayer1} alt="Maid Supremacy multiplayer 1"></img>
                </div>
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={multiplayer2} alt="Maid Supremacy multiplayer 2"></img>
                </div>
            </div>

            <h4>{t('Maid Supremacy.bossFight')}</h4>
            <div className="row">
                <div className="col l6 s12">
                    <img className="materialboxed" width="100%" src={boss1} alt="Maid Supremacy boss fight"></img>
                </div>
                <div className="col l6 s12">
                    <p>{t('Maid Supremacy.bossFightText')}</p>
                </div>
            </div>
        </Block>
    )
}

export default MaidSupremacy
