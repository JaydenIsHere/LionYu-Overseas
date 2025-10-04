import './HeroPage.css';
import lionyulogo from '../../images/lionyu.png';
import lionyubackground from '../../images/Home-page-background.jpg';

function HeroPage() {
  const backgroundStyle = {
    backgroundImage: `url(${lionyubackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // make section full viewport height
  };

  return (
    <>
      <section className='home' id='home' style={backgroundStyle}>
        <div className='home-slider'>
          <div className='wrapper'>
            <div className='container'>
              <div className='content'>
                <div className="landing-logo">
                  <img src={lionyulogo} alt="LionYu Logo" className="logo" />
                </div>
                
               <h1 className="landing-title">新加坡留學｜我們用專業陪伴</h1><br/>
                <h1 className="landing-title">為孩子開啟世界級未來！</h1>
                <p className="subtitle_1">獅裕海外是台灣專業團隊組成的留學代辦中心位於新加坡，由新加坡會計與企業管理局（ACRA）正式認證的專業諮詢機構,我們依據學生的學業成績、興趣及未來發展，量身訂做最適切的留學方案。</p>
                <p className="subtitle_2">一對一服務，協助每個家庭安心規劃、逐步實現新加坡升學夢想。</p>

                <a href="http://wa.me/+6593602418" className="cta-button">聯繫我們</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
