"use client";
import ExpertiseTop from "./expertiseTop";
import Faq from "./faq";
import TopContent from "./topContent";
import Content from "../content";
import Method from "../method";
import Stats from "../stats";
import Footer from "../footer";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ExpertiseTop />
      </div>

      <TopContent />

      <div className="pb-8">
        <Method
          showContact={false}
          className="pt-6"
          description="Notre méthode couvre l’ensemble du cycle de recherche, de la conception des protocoles, à la validation de dispositifs et à la production de recommandations opérationnelles. Elle s’adresse aux entreprises souhaitant s’appuyer sur des données objectives et des preuves scientifiques applicables dans les domaines du sport, de la santé et du bien-être."
        />
      </div>

      <Stats />

      <Content description="Chaque étude donne lieu à la production d’un white paper complet présentant les résultats, analyses et recommandations opérationnelles. Selon les objectifs de l’entreprise et les résultats obtenus, certaines études peuvent également faire l’objet de publications dans des revues scientifiques internationales à comité de lecture." />

      <Faq />
      <Footer />
    </main>
  );
}
