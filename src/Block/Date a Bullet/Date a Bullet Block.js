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
            description="このゲームは正式ではないし角川会社と「デート・ア・ライブ」/「デート・ア・バレット」」団体と関係ありません。。一年間で、私は、ゲームクレアタスとして、@Randamu3DModelsと、3Dモデラーとして、「デート・ア・バレット」を発展中です。 プログラミングとか、アニメーションとか、デサイーとか、私が作りましたてでも、歌とか時崎狂三のキャラクターデザインは私の創作ございません。
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
            <p>Date a Bullet é de ação frenética baseado em combos, baseado em jogos como Devil May Cry e Yakuza. O objetivo é seguir a história da light novel e criar um jogo divertido para os usuários. 今までプロトタイプレベルだけあります、それででitch.ioでプレイできます。O feeback das pessoas que jogaram até agora foi bastante positivo e dizem que foi bem otimizado.</p>

            <div className="card-action">
                <iframe id="date-a-bullet-video-yt" src="//www.youtube.com/embed/UisCWG0ivc0" frameborder="0" allowfullscreen title="Date a Bullet Gameplay video"></iframe>
                <label style={{color:"white"}} for="date-a-bullet-video-yt">Vídeo de gameplay gravada por "Speeze" em 18/11/2023, desatualizada.</label>
            </div>

            <h4>ゲームの仕組み</h4>
            <div className="row">
                <div className="col l4 s12">
                    <img className="materialboxed" width="100%" src={game_structure} alt="game_structure"></img>
                </div>
                <div className="col l8 s12">
                    <p>O jogo tem uma base de pedra papel tesoura em toda a gameplay. O jogador pode usar ataques rápidos para acabar com inimigos de longe, ataques de longe para acabar com inimigos pesados e ataques pesados para acabar com inimigos rápidos.</p>
                    <p>Existe vários sistemas implementados dentro que tornam a gameplay mais complexa como dash, mira, ataques carregados, poise e sistema de combo. Cada estilo de gameplay é recompensado de maneira diferente.</p>
                    <p>A Kurumi também tem um sistema de "balas especiais", usando o poder do Zaphkiel, que ela pode dar efeitos a si mesma e aos inimigos em troca da barra de tempo. Para poder carregar a barra de tempo, ela precisa de acabar com os inimigos. Balas especiais incluem regenerar, ser mais rápido, clones, parar o tempo e muitas outras.</p>
                    <p>O jogo também vai incluir um sistema de upgrade e recompensas baseadas em recordes de tempo.</p>
                    <iframe id="date-a-bullet-new-video-yt" src="//www.youtube.com/embed/jQtpt2cRZ4o" frameborder="0" allowfullscreen title="Date a Bullet Gameplay video new"></iframe>
                </div>
            </div>
            <h4>Kurumi Tokisaki 3D Model</h4>
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
            <p>Este modelo temporário foi feito no vroid por mim, vai ser mudado depois.</p>
            <h4>Animação/Efeitos/Som</h4>
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
            {/* Escrever primeiro em português para depois escrever em japonês */}
        </Block>
    )
}

export default DateABulletBlock