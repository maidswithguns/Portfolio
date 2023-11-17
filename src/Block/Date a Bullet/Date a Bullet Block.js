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

const DateABulletBlock = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="デート・ア・バレット 同人ゲーム"
            description="このゲームは正式でございません! 一年間からデート・ア・バレットが発展中"
            image={kurumi}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/date-a-bullet-fan-game"
            color="red darken-4"
        >
            <h3>デート・ア・バレット 同人ゲーム</h3>
            <h4>ゲームのスクリーンショット</h4>
            <div className="row">
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc1} alt="A"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc2} alt="A"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc3} alt="A"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc4} alt="A"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc5} alt="A"></img>
                </div>
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc6} alt="A"></img>
                </div>
            </div>
            <p>このゲームは正式ございません。</p>
        </Block>
    )
}

export default DateABulletBlock