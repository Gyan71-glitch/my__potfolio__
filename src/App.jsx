import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function App() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 40 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const projects = [
    {
      name: "Railway Safety System",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      link: "https://github.com/Gyan71-glitch",
      desc: `AI-powered railway safety system designed to prevent accidents.
Uses computer vision to detect obstacles and hazards in real-time.
Implements machine learning models for accurate predictions.
Processes live video feeds efficiently.
Generates alerts for unsafe situations instantly.
Optimized for reliability and scalability.
Focused on real-world deployment use cases.`
    },
    {
      name: "Driver Drowsiness Detection",
      img: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg", // 🔥 face / driver related
      link: "https://github.com/Gyan71-glitch",
      desc: `Real-time system to detect driver fatigue and prevent accidents.
Uses facial landmark detection and eye tracking techniques.
Monitors blinking patterns and head movement continuously.
Applies machine learning models for fatigue classification.
Triggers alerts when drowsiness is detected.
Designed for real-time performance and accuracy.
Focused on improving road safety using AI.`
    },
    {
      name: "Jarvis AI Assistant",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://github.com/Gyan71-glitch",
      desc: `Voice-based AI assistant for automation tasks.
Integrates speech recognition and NLP.
Executes commands and retrieves information.
Modular design for scalability.
Handles real-time voice input efficiently.
Improves productivity through automation.
Focused on user-friendly interaction.`
    },
    {
      name: "Automation Bot",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "https://github.com/Gyan71-glitch",
      desc: `Automation system for repetitive digital tasks.
Uses scripts and APIs for execution.
Reduces manual effort and saves time.
Handles dynamic workflows efficiently.
Optimized for speed and reliability.
Supports multiple use cases.
Built for scalability and efficiency.`
    },
    {
      name: "Parkfindr",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      link: "https://github.com/Gyan71-glitch",
      desc: `Location-based system for discovering nearby resources.
Provides real-time tracking and search functionality.
Clean and user-friendly interface.
Optimized backend for fast results.
Handles location data efficiently.
Improves navigation experience.
Focused on usability and performance.`
    }
  ];

  return (
    <div onMouseMove={handleMouseMove} style={{
      fontFamily: "Inter, sans-serif",
      background: "#050505",
      color: "white",
      overflowX: "hidden"
    }}>

      {/* CURSOR GLOW */}
      <motion.div style={{
        position: "fixed",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle,#6366f1,transparent)",
        filter: "blur(100px)",
        left: smoothX,
        top: smoothY,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: "clamp(40px, 7vw, 85px)",
            fontWeight: "800",
            marginBottom: "5px",
            letterSpacing: "-1px"
          }}
        >
          Gyan Vaibhav
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Software Developer",
            1500,
            "AI Engineer",
            1500,
            "Automation Specialist",
            1500
          ]}
          repeat={Infinity}
          style={{
            fontSize: "20px",
            opacity: 0.7,
            marginTop: "25px" 
          }}
        />
      </section>

      {/* 🔥 PERFECT SPACING FIX */}
      <div style={{ height: "120px" }} />

      {/* ABOUT */}
      <section style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          maxWidth: "800px",
          padding: "50px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.05)"
        }}>
          <h2 style={{ marginBottom: "20px" }}>About Me</h2>

          <p style={{ lineHeight: "1.8", opacity: 0.8 }}>
            I am a passionate Software Developer specializing in Artificial Intelligence,
            Machine Learning, and automation systems. Currently pursuing my studies at MIT ADT University,
            I focus on building impactful and scalable real-world solutions.

            My projects revolve around solving real problems such as safety systems,
            intelligent assistants, and automation tools that improve efficiency.

            I enjoy exploring modern technologies and continuously improving my skills
            in AI, system design, and full-stack development.

            My goal is to build powerful systems that are both practical and innovative,
            while constantly growing as a developer and problem solver.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Skills</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "40px" }}>
          <div style={card}><h3>Programming</h3><p>Python, Java, C++, JavaScript, SQL</p></div>
          <div style={card}><h3>AI / ML</h3><p>Machine Learning, Deep Learning, NLP, Computer Vision</p></div>
          <div style={card}><h3>Web</h3><p>React, HTML, CSS, Node.js, APIs</p></div>
          <div style={card}><h3>Tools</h3><p>Git, GitHub, VS Code, Linux, Docker</p></div>
          <div style={card}><h3>Other</h3><p>Automation, Debugging, System Design, Problem Solving</p></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Projects</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "40px" }}>
          {projects.map((p, i) => (
            <Tilt key={i}>
              <motion.div whileHover={{ y: -10 }} onClick={() => window.open(p.link)}
                style={{
                  width: "300px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.05)",
                  cursor: "pointer"
                }}>
                <img src={p.img} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "15px" }}>
                  <h3>{p.name}</h3>
                  <p style={{ whiteSpace: "pre-line", fontSize: "14px", opacity: 0.8 }}>{p.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* CONTACT FLOAT BAR */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "20px",
        padding: "12px 25px",
        borderRadius: "50px",
        background: "rgba(255,255,255,0.08)"
      }}>
        {[
          { img: "https://img.icons8.com/ios-filled/50/000000/whatsapp.png", link: "https://wa.me/918882947806" },
          { img: "https://img.icons8.com/ios-filled/50/000000/linkedin.png", link: "https://linkedin.com/in/gyan-vaibhav-8321a4275" },
          { img: "https://img.icons8.com/ios-filled/50/000000/github.png", link: "https://github.com/Gyan71-glitch" },
          { img: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png", link: "https://instagram.com/__.gyannn.__" },
          { img: "https://img.icons8.com/ios-filled/50/000000/email.png", link: "mailto:raiyn1279@gmail.com" }
        ].map((item, i) => (
          <motion.a key={i} href={item.link} target="_blank" whileHover={{ scale: 1.3 }}
            style={icon}>
            <img src={item.img} width="60%" />
          </motion.a>
        ))}
      </div>

    </div>
  );
}

const card = {
  width: "250px",
  padding: "20px",
  borderRadius: "15px",
  background: "rgba(255,255,255,0.05)"
};

const icon = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default App;