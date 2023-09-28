import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="social-links-container">
        <h1 className="heading">Social Links</h1>
        <p className="para">
          <strong>Connect with me on</strong>
        </p>
        <div className="social-links-container d-flex mt-3">
          <a
            href="https://github.com/manikantaPitla"
            target="__blank"
            className="s-link-bg"
            title="Github"
          >
            <i className="fa-brands fa-github s-link-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manikanta8/"
            target="__blank"
            className="s-link-bg"
            title="Linkedin"
          >
            <i className="fa-brands fa-linkedin s-link-icon"></i>
          </a>
          <a
            href="https://x.com/mani_dynamic_?t=4oz2KhDEfs-XdImpULutWA&s=09"
            target="__blank"
            className="s-link-bg"
            title="Twitter"
          >
            <i className="fa-brands fa-twitter s-link-icon"></i>
          </a>
        </div>
        <hr />
        <div className="about-dev-container">
          <h1 className="heading">About Developer</h1>
          <p className="para">
            Hey guys! I am <strong>Manikanta Pitla</strong> and I've recently
            completed my Bachelor's Degree. I am a
            <strong> Full Stack Developer</strong> with a strong foundation in
            front-end and responsive frameworks. My passion for technology has
            driven me to continuously learn and grow in this dynamic field. With
            a comprehensive understanding of both front-end and back-end
            development, I am dedicated to pushing the boundaries of what is
            possible in the digital world.
          </p>
          {/* <a
            href="https://manikantapitla.github.io/personal-portfolio/"
            target="__blank"
          >
            <p className="para">
              <strong>
                Check out my Personal Page
                <span className="m-2">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </strong>
            </p>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
