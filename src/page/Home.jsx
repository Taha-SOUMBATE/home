import hero from "../image/hero-person-img.png";
export default function Home() {
  return (
    <>
      <section className="colone">
        <div className="content">
          <h4>Hi, I'm</h4>
          <h1>Taha Soumbate</h1>
          <p className="text1">Web developper</p>
          <p className="text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem quasi asperiores eaque, sed eum voluptatem.
          </p>
          <button className="btn2"> Download CV</button>
          <button className="btn3"> Contact</button>
        </div>
        <img src={hero} alt="hero" />
      </section>
      <section>
        <div className="colone2">
          <div className="cols-icon">
            <div className="icone">
              <i class="bi bi-patch-check"></i>
            </div>
            <div className="color">
              <h4>8 years job</h4>
              <p>Experience</p>
            </div>
          </div>
          <div className="cols-icon">
            <div className="icone">
              <i class="bi bi-journal-text"></i>
            </div>
            <div className="">
              <h4>8 years job</h4>
              <p>Experience</p>
            </div>
          </div>
          <div className="cols-icon">
            <div className="icone">
              <i class="bi bi-headset"></i>
            </div>
            <div className="">
              <h4>8 years job</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
