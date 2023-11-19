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
import game_structure from './game_structure.png';
import kurumi_s1 from './kurumi_s1.png';
import kurumi_s2 from './kurumi_s2.png';
import kurumi_s3 from './kurumi_s3.png';
import anim1 from './anim1.mp4';
import anim2 from './anim2.mp4';
import anim3 from './anim3.mp4';

const DateABulletBlock = () => {
    useEffect(() => {
        // Initialize Material Box when the component mounts
        const materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
      }, []);

    return (
        <Block
            title="デート・ア・バレット 同人ゲーム"
            description="このゲームは正式ではないし角川会社と「デート・ア・ライブ」/「デート・ア・バレット」」団体と関係ありません。一年間で、私は、ゲームクレアタスとして、@Randamu3DModelsと、3Dモデラーとして、「デート・ア・バレット」を発展中です。 プログラミングとか、アニメーションとか、デサイーとか、私が作りましたてでも、歌とか時崎狂三のキャラクターデザインは私の創作ございません。
            「デート・ア・バレット」はUnityのゲームエンジン作りているて、アクションハックアンドスラッシュの3Dゲームです。"
            image={kurumi}
            backgroundImage={background}
            gameLink="https://maidswithguns.itch.io/date-a-bullet-fan-game"
            color="red darken-4"
        >
            <h3>デート・ア・バレット 同人ゲーム</h3>
            <h4>ゲームのスクリーンショット</h4>
            <div className="row">
                <div className="col l2 s6">
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
                <div className="col l2 s6">
                    <img className="materialboxed" width="100%" src={sc6} alt="Screenshot6"></img>
                </div>
            </div>
            <p>デート・ア・バレットは、デビル メイ クライや龍が如くのようなゲームを基にした、コンボによるフレンティックなアクションゲームです。目標はライトノベルのストーリーに従いつつ、ユーザーに楽しいゲームを提供することです。現在はプロトタイプの段階で、itch.ioでプレイ可能です。これまでにプレイした人々からのフィードバックは非常に好評で、最適化もされているとのことです。</p>

                <iframe className="full-width-video" id="date-a-bullet-video-yt" src="//www.youtube.com/embed/UisCWG0ivc0" frameborder="0" allowfullscreen="true" title="Date a Bullet Gameplay video"></iframe>
                <label style={{color:"white"}} for="date-a-bullet-video-yt">2023年11月18日に "Speeze" によって撮影されたゲームプレイ動画がありますが、内容は古いものです。</label>


            <h4>ゲームの仕組み</h4>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={game_structure} alt="game_structure"></img>
                </div>
                <div className="col l8 s12">
                    <p>ゲームプレイ全体にじゃん拳の要素が組み込まれています。プレイヤーは遠距離の敵に対して速い攻撃、重い敵に対しては遠距離攻撃、速い敵に対しては重い攻撃を使用することができます。</p>
                    <p>ダッシュ、照準、チャージ攻撃、ポイズ、コンボシステムなど、より複雑なゲームプレイを提供するさまざまなシステムが実装されています。各ゲームプレイスタイルは異なる方法で報酬が得られます。</p>
                    <p>また、クルミには「特殊な弾」のシステムもあり、ザフキエルの力を使って、自分や敵に効果を与えることができます。この特殊な弾を発動するには、敵を倒してタイムバーを充填する必要があります。特殊な弾には回復、速さ向上、クローン生成、時間停止などさまざまな効果があります。</p>
                    <p>ゲームには記録に基づいたアップグレードと報酬のシステムも組み込まれています。</p>
                    <iframe id="date-a-bullet-new-video-yt" src="//www.youtube.com/embed/jQtpt2cRZ4o" frameborder="0" allowfullscreen="true" title="Date a Bullet Gameplay video new"></iframe>
                </div>
            </div>
            <h4>時崎狂三の3Dモデル</h4>
            <div className="row">
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s3} alt="Kurumi Screenshot 3"></img>
                </div>
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s1} alt="Kurumi Screenshot 1"></img>
                </div>
                <div className="col s4">
                    <img className="materialboxed" width="100%" src={kurumi_s2} alt="Kurumi Screenshot 2"></img>
                </div>
            </div>
            <p>この一時的なモデルは、vroidを使用して作成されましたが、後で変更される予定です。</p>
            <h4>アニメーション/エフェクツ/舞台音響</h4>
            <div className="row">
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim1} type="video/mp4" />
                </video>
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim2} type="video/mp4" />
                </video>
                <video className="responsive-video col s12 l4" controls>
                    <source src={anim3} type="video/mp4" />
                </video>
            </div>
        </Block>
    )
}

export default DateABulletBlock