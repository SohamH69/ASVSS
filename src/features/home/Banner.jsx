import bannerVideo from '../../assets/bannerVideo.mp4';

function Banner() {
  return (
    <div className='relative top-0'>
      <video
        src={bannerVideo}
        autoPlay
        muted
        loop
        style={{width: '100%', height: '100vh', objectFit: 'cover'}}
      >Your browser does not support video tag.</video>
    </div>

  );
}

export default Banner;
