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

const MultiplayerProject = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="マルチプレイヤ・プロジェクト"
            description="マルチプレイヤ・プロジェクトは、より洗練されたゲームの作成と構造を学ぶためのプロジェクトでした。これはマルチメディアコースの最終プレゼンテーションプロジェクトでした。私はプロジェクトを通じて、プロジェクトのスケーリング方法、UnityとMirrorを使用したマルチプレイヤの実装、および完全なゲームに必要なすべてをどのように実装するかを学びました。"
            image={cover}
            backgroundImage={background}
            color="indigo darken-4"
            backgroundGradientColor="rgba(0, 0, 40, 1)"
            launchDate="10/03/2022"
        >
            <h2>マルチプレイヤ・プロジェクト</h2>
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
            <p>主なゲームプレイは、多様な武器を備えたFPSマルチプレイヤでした。 "HQ FPS Weapons"、"Subway / Metro / Train station Modular Pack"、および "Mixamo"のアセットが使用されました。目標は、「HQ FPS Weapons」システムの機能を理解し、それを複製して、私のニーズに合わせて内容を追加および変更することでした。また、デザートポストアポカリプティックシナリオなどの写実的なアセットも作成しました。</p>

            <iframe className="full-width-video" id="multiplayer-project-video-yt" src="//www.youtube.com/embed/4L6C4LU2yNA" frameborder="0" allowfullscreen="true" title="Multiplayer Project video"></iframe>

            <h3>削除されたコンテンツ</h3>
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
            <p>また、ゲームの途中でランダムなアイテムを提供する鍵も存在しました。それだけでなく、ゾンビも登場し、切断システムも実装されていましたが、これらはすべて取り除かれ、トレーラーには表示されませんでした。</p>
        </Block>
    )
}

export default MultiplayerProject