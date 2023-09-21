import videoHomePage from '../../assets/video_homepage.mp4'

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source
                    src={videoHomePage}
                    type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Forms that break the norm</div>
                <div className='title-2'>Get more data like signups, feedback, and anything else with forms designed to be refreshingly different.</div>
                <div className='title-3'>
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;