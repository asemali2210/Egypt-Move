import React , {useEffect, useLayoutEffect, useRef, useState}from 'react'
import {Container} from 'react-bootstrap';
import videoSrc from '../img/samplevideo2.mp4'
function Video() {
    const [videoState , setVideoState] = useState(false);
    const video = useRef();
    const play = ()=> {
        video.current.play();
        setVideoState(true)
    }
    const pause = ()=> {
        video.current.pause();
        setVideoState(false);
    } 
    useEffect(()=>{
        function check(){
            if(video.current.ended){
                setVideoState(false);
            }
        }
        check();
    })

    return (
        <div className="home-video">
            <div className="overlay"></div>
            <Container fluid={true}>
                <video id="video" muted ref={video}>
                    <source  src={videoSrc} type="video/mp4"></source>
                </video>
                <i className={`fas fa-${videoState? `pause-circle` : `play`}`} onClick={videoState? pause : play }></i>
            </Container>
        </div>
    )
}

export default Video;
