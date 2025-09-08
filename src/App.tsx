import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Section from "./components/Section";
import ConfirmationForm from "./components/ConfirmationForm";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="acasa" className="hero">
          <h1 data-aos="fade-down">
            Tudor-Vladimir <br />
            <span className="goldText">&</span>
            <br />
            Irina-Maria
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Am creat un "API" (Alianță Permanentă a Iubirii) și vă invităm să
            fiți primii "utilizatori". Vă așteptăm la nunta noastră, un
            eveniment "open-source", unde oricine poate contribui la fericirea
            noastră.
          </p>
          <Countdown />
        </section>
        <Section id="poveste" title="Povestea Noastră">
          <p>
            Aici puteți scrie o scurtă descriere a poveștii voastre de dragoste.
            Cum v-ați cunoscut, momente importante din relația voastră, cererea
            în căsătorie, etc. Puteți adăuga și câteva poze reprezentative dacă
            doriți. Acest text este doar un exemplu pentru a umple spațiul.
          </p>
        </Section>
        <Section id="detalii" title="Detalii Eveniment">
          <div className="details-container">
            <div
              className="detail-card card-biserica-fundal"
              data-aos="fade-in"
            >
              <h3>Biserica</h3>
              <p>
                <strong>Cununia religioasă</strong> va avea loc la ora{" "}
                <strong>16:00</strong>.
              </p>
              <p>
                📍 Biserica Sfântul Ioan Botezătorul „Alexe”, Str. Plevna, nr.
                228, Călăraşi
              </p>
              <a
                href="https://www.google.com/maps/dir//Strada+Plevna,+C%C4%83l%C4%83ra%C8%99i/@44.4467658,26.0009209,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b01876060b22a9:0xa8d048e9b9f9654!2m2!1d27.337309!2d44.1921995?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Vezi pe hartă
              </a>
            </div>
            <div
              className="detail-card card-restaurant-fundal"
              data-aos="fade-in"
            >
              <h3>Restaurantul</h3>
              <p>
                <strong>Petrecerea</strong> va începe la ora{" "}
                <strong>19:00</strong>.
              </p>
              <p>📍 Restaurant "D'all Class", Strada București 354, Călărași</p>
              <a
                href="https://www.google.com/maps/dir//Strada+Bucure%C8%99ti+354,+C%C4%83l%C4%83ra%C8%99i+910011/@44.4467658,26.0009209,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b0199540d7efd3:0x6e71b0700f6a0972!2m2!1d27.3577095!2d44.1911706?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Vezi pe hartă
              </a>
            </div>
          </div>
        </Section>

        <Section id="confirmare" title="Confirmă prezența">
          <p>
            Pentru a evita o eroare de sistem (și o criză de nervi a miresei),
            te rugăm să confirmi prezența până la 01.09.2027. Suportul tău moral
            este cel mai de preț cadou!
          </p>
          <ConfirmationForm />
        </Section>
      </main>
    </div>
  );
};

export default App;
