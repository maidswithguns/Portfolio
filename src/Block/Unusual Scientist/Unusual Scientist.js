import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './cover.jpg';
import background from './background.png';
import sc1 from './Screenshot_1.png';
import sc2 from './Screenshot_2.png';
import sc3 from './Screenshot_3.png';
import { useTranslation } from "react-i18next";

const UnusualScientist = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('Unusual Scientist.title')}
            description={t('Unusual Scientist.description')}
            image={cover}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/unusual-scientist"
            color="green darken-4"
            backgroundGradientColor="rgba(0, 50, 0, 1)"
            launchDate="13/10/2022"
        >
            <h2>{t('Unusual Scientist.title')}</h2>
            <h3>{t('Unusual Scientist.subtitle')}</h3>
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
            <p>{t('Unusual Scientist.p1')}</p>
                <iframe className="full-width-video" id="unusual-scientist-video-yt" src="//www.youtube.com/embed/FomwBfZAXAw" frameborder="0" allowfullscreen="true" title="Unusual Scientist Gameplay video"></iframe>
        </Block>
    )
}

export default UnusualScientist