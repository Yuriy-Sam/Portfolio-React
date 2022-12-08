
import mainVideo from '../../Videos/Project_6.mp4';

import './main.scss'

const Main = () => {
    return (
        <main className='main__block'>
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__content">
                        <div className="main__title">Hello, my name is <span>Yuriy</span>.</div>
                        <div className="main__subtitle">This is my portfolio</div>
                        
                        <button className="main__btn">About me</button>
                    </div>
                    <div className="main__bg">
                        <video className='main__bg_video' autoPlay loop muted >
                            <source  src={mainVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                
            </div>


        </main>
        
    )
}
export default Main