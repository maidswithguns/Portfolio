import './Block.css'
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useTranslation } from 'react-i18next';

const Block = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
      };
    
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), ${props.backgroundGradientColor ?? 'rgba(50, 0, 0, 1)'}), url(${props.backgroundImage})`,
        backgroundSize: isExpanded ? '100vw' : 'cover',
    }

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView)
            mainControls.start("visible");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, [isExpanded]);

    const blockExpanded = () => {
        return (
            <div className={'col s12 scale-transition ' + props.color}>
                <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: .5}}
                className='card-action'>
                    {props.children}
                </motion.div>
            </div>
        )
    }

    const { t } = useTranslation();
    
    return (
    <motion.div
        variants={{
            hidden: {translateX: 500, opacity: 0},
            visible: {translateX: 0, opacity: 1}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, ease: 'circOut'}}>
    <div className="row">
        <div className='col card' style={{...backgroundStyle, padding: 0, width:"100%"}}>
            <div className='block'>
                <div className="card-image col l4 s12">
                    <img src={props.image} alt='' />
                </div>
                <div className='card-content col l8 s12'>
                    <h2><b>{props.title}</b></h2>
                    <p>{props.description}</p>
                    <br />
                    <p>{t('Block.launchDate')} {props.launchDate ?? t('Block.none')}</p>
                    <button className={"waves-effect waves-light btn " + props.color} onClick={toggleIsExpanded}><i className="material-icons right">info</i>{t('Block.info')}</button>
                    <a className={"waves-effect waves-light btn " + props.color} href={props.gameLink} target="_blank" rel="noreferrer" style={{display: props.gameLink !== undefined ? '' : 'none'}}>
                        <i className="material-icons right">chevron_right</i>{t('Block.officialPage')}</a>
                    <a className={"waves-effect waves-light btn " + props.color} href={props.nintendoLink} target="_blank" rel="noreferrer" style={{display: props.nintendoLink !== undefined ? '' : 'none'}}>
                        <i className="bi bi-nintendo-switch right"></i>{t('Block.nintendoPage')}</a>
                    <a className={"waves-effect waves-light btn " + props.color} href={props.playstationLink} target="_blank" rel="noreferrer" style={{display: props.playstationLink !== undefined ? '' : 'none'}}>
                        <i className="bi bi-playstation right"></i>{t('Block.playstationPage')}</a>
                    <a className={"waves-effect waves-light btn " + props.color} href={props.xboxLink} target="_blank" rel="noreferrer" style={{display: props.xboxLink !== undefined ? '' : 'none'}}>
                        <i className="bi bi-xbox right"></i>{t('Block.xboxPage')}</a>
                </div>
            </div>
            {isExpanded ? blockExpanded() : ''}
        </div>
    </div>
    </motion.div>
    )
}

export default Block