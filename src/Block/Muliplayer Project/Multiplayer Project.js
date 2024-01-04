import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './cover.png';
import background from './background.png';
import sc1 from './screenshot1.gif';
import sc2 from './screenshot2.gif';
import sc3 from './screenshot3.gif';
import cs1 from './sc1.gif';
import cs2 from './sc2.jpg';
import cs3 from './sc3.gif';
import cs4 from './sc4.png';
import { useTranslation } from "react-i18next";

const MultiplayerProject = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

      const { t } = useTranslation();

    return (
        <Block
            title={t('Multiplayer Project.title')}
            description={t('Multiplayer Project.description')}
            image={cover}
            backgroundImage={background}
            color="indigo darken-4"
            backgroundGradientColor="rgba(0, 0, 40, 1)"
            launchDate="10/03/2022"
        >
            <h2>{t('Multiplayer Project.title')}</h2>
            <h3>{t('Multiplayer Project.subtitle')}</h3>
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
            <p>{t('Multiplayer Project.p1')}</p>

            <iframe className="full-width-video" id="multiplayer-project-video-yt" src="//www.youtube.com/embed/4L6C4LU2yNA" frameborder="0" allowfullscreen="true" title="Multiplayer Project video"></iframe>

            <h3>{t('Multiplayer Project.deletedContentTitle')}</h3>
            <div className="row">
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={cs1} alt="SrappedContent1"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={cs2} alt="SrappedContent2"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={cs3} alt="SrappedContent3"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={cs4} alt="SrappedContent4"></img>
                </div>
            </div>
            <p>{t('Multiplayer Project.p2')}</p>
        </Block>
    )
}

export default MultiplayerProject