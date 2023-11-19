import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './cover.jpg';
import background from './background.png';
import sc1 from './Screenshot_1.png';
import sc2 from './Screenshot_2.png';
import sc3 from './Screenshot_3.png';

const UnusualScientist = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="変な科学者"
            description="ソロで制作された、5日未満の期間でのゲームジャム用のゲーム。ウェブ上でプレイ可能です。"
            image={cover}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/unusual-scientist"
            color="green darken-4"
            backgroundGradientColor="rgba(0, 50, 0, 1)"
            launchDate="13/10/2022"
        >
            <h2>変な科学者</h2>
            <h3>ゲームのスクリーンショット</h3>
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
            <p>上から見たシンプルなゲームで、スコアに基づくアーケードスタイルのゲームプレイです。プレイヤーはゾンビを倒し、アップグレードや異なる武器を手に入れる科学者としてプレイします。</p>
                <iframe className="full-width-video" id="unusual-scientist-video-yt" src="//www.youtube.com/embed/FomwBfZAXAw" frameborder="0" allowfullscreen="true" title="Unusual Scientist Gameplay video"></iframe>
        </Block>
    )
}

export default UnusualScientist