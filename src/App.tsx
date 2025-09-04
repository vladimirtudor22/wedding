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
            El a găsit bug-ul în viața de burlac, ea a venit cu soluția. Acum
            lansăm programul "O viață în doi" și vă vrem alături la petrecerea
            de lansare – nunta noastră!
          </p>
          <Countdown />
        </section>

        <Section id="detalii" title="Detalii">
          <p>Detalii aici</p>
        </Section>

        <Section id="poveste" title="Povestea Noastră">
          <p>
            Aici puteți scrie o scurtă descriere a poveștii voastre de dragoste.
            Cum v-ați cunoscut, momente importante din relația voastră, cererea
            în căsătorie, etc. Puteți adăuga și câteva poze reprezentative dacă
            doriți. Acest text este doar un exemplu pentru a umple spațiul.
          </p>
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
