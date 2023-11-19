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

const BakutaraBokaam = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="バクタラ・ボカーン！！"
            description="私がチームを指揮しながら作成した最初のゲームです。他の人々もゲームで働くように指導しました。2週間で作られた無料でシンプルなゲームですが、アセットは別売りです。@Randamu3dModelsさんは爆タラの3Dモデルを担当し、@bigscaryindianさんはゲームの音楽を担当し、私はその他すべてを担当しました。これは最初から最後までプレイ可能な何かを作るという提案のプロジェクトであり、ウェブでプレイできます。"
            image={thumb}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/bakutara-bokaam"
            color="red darken-4"
            launchDate="28/07/2023"
        >
            <h2>バクタラ・ボカーン！！</h2>
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
            <p>ゲームプレイはシンプルで、爆弾が現れ、目標はできるだけ長い時間赤と黒に分けてから、スコアを使用して爆タラをカスタマイズすることです。</p>

                <iframe className="full-width-video" id="bakutara-bokaam-video-yt" src="//www.youtube.com/embed/TtDUMnEE_vU" frameborder="0" allowfullscreen="true" title="Bakutara Bokaam Gameplay video"></iframe>
                <label style={{color:"white"}} for="bakutara-bokaam-video-yt">ゲームプレイの動画は「Legend」によって2023年7月29日に録画されました。</label>

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
            <p>また、ゲームのイラストとコンセプトアートも制作しました。</p>
        </Block>
    )
}

export default BakutaraBokaam