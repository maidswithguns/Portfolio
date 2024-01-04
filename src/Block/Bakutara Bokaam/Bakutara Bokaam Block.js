import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import background from "./background.png";
import thumb from "./Thumb.png";
import sc1 from './screenshot1.jpg';
import sc2 from './screenshot2.jpg';
import sc3 from './screenshot3.jpg';
import cover from './cover.png';
import concept1 from './concept1.png';
import concept2 from './concept2.png';
import { useTranslation } from "react-i18next";

const BakutaraBokaam = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('Bakutara Bokaam.title')}
            description={t('Bakutara Bokaam.description')}
            image={thumb}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/bakutara-bokaam"
            color="red darken-4"
            launchDate="28/07/2023"
        >
            <h2>{t('Bakutara Bokaam.title')}</h2>
            <h3>{t('Bakutara Bokaam.subtitle')}</h3>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={sc1} alt="Screenshot1"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={sc2} alt="Screenshot2"></img>
                </div>
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={sc3} alt="Screenshot3"></img>
                </div>
            </div>
            <p>{t('Bakutara Bokaam.p1')}</p>

                <iframe className="full-width-video" id="bakutara-bokaam-video-yt" src="//www.youtube.com/embed/TtDUMnEE_vU" frameborder="0" allowfullscreen="true" title="Bakutara Bokaam Gameplay video"></iframe>
                <label style={{color:"white"}} for="bakutara-bokaam-video-yt">{t('Bakutara Bokaam.label1')}</label>

            <div className="row">
                <div className="col l4 s6">
                    <img className="materialboxed" width="100%" src={cover} alt="cover"></img>
                </div>
                <div className="col l4 s6">
                    <img className="materialboxed" width="100%" src={concept1} alt="concept1"></img>
                </div>
                <div className="col l4 s6">
                    <img className="materialboxed" width="100%" src={concept2} alt="concept2"></img>
                </div>
            </div>
            <p>{t('Bakutara Bokaam.p2')}</p>
        </Block>
    )
}

export default BakutaraBokaam