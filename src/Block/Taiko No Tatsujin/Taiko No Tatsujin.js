import { useEffect } from "react";
import Block from "../Block"
import M from 'materialize-css/dist/js/materialize.min.js';
import cover from './cover.png';
import background from './background.png';
import sc1 from './Screenshot_1.png';
import sc2 from './Screenshot_2.png';
import sc3 from './Screenshot_3.png';
import sc4 from './Screenshot_4.png';

const TaikoNoTatsujin = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="太鼓の達人: スクラッチ・エディション"
            description="私の最初のゲーム。それはスクラッチで作られました。基本的なゲーム制作を学ぶための制約のあるウェブサイトです。私はそれを完成させませんでしたが、5000人以上の人々がプレイしました。スクラッチで再現された『太鼓の達人』のゲームのバージョンです。"
            image={cover}
            backgroundImage={background}
            gameLink="https://scratch.mit.edu/projects/333112577/"
            color="orange darken-4"
            backgroundGradientColor="rgba(50, 10, 0, 1)"
            launchDate="02/10/2019"
        >
            <h2>変な科学者</h2>
            <h3>ゲームのスクリーンショット</h3>
            <div className="row">
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc1} alt="Screenshot1"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc2} alt="Screenshot2"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc3} alt="Screenshot3"></img>
                </div>
                <div className="col l3 s6">
                    <img className="materialboxed" width="100%" src={sc4} alt="Screenshot4"></img>
                </div>
            </div>
            <p>このゲームは、スクラッチ用に作られた太鼓の達人のかなり未完成なバージョンです。カスタマイズや音楽の選択のオプションがあります。</p>
        </Block>
    )
}

export default TaikoNoTatsujin