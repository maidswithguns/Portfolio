import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './Icon.png';
import background from './background.png';
import sc1 from './screenshot1.png';
import sc2 from './screenshot2.png';
import sc3 from './screenshot3.png';
import sc4 from './screenshot4.png';
import sc5 from './screenshot5.png';
import { useTranslation } from "react-i18next";

const BrokenBones = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    const { t } = useTranslation();

    return (
        <Block
            title={t('Broken Bones.title')}
            description={t('Broken Bones.description')}
            image={cover}
            backgroundImage={background}
            gameLink="https://play.google.com/store/apps/details?id=com.MaidsWithGuns.BrokenBones"
            color="grey darken-4"
            backgroundGradientColor="rgba(0, 0, 0, 1)"
            launchDate="11/07/2022"
        >
            <h2>{t('Broken Bones.title')}</h2>
            <h3>{t('Broken Bones.subtitle')}</h3>
            <div className="row">
                <div className="col l2 s6 offset-l1">
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
            </div>
            <p>{t('Broken Bones.p1')}</p>

                <iframe className="full-width-video" id="broken-bones-video-yt" src="//www.youtube.com/embed/MCdHT6tpcBk " frameborder="0" allowfullscreen="true" title="Broken Bones Gameplay video"></iframe>

        </Block>
    )
}

export default BrokenBones