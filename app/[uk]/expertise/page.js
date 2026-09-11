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
          description="Our methodology covers the entire research process, from protocol design and device validation to the delivery of actionable recommendations. It supports organizations seeking to rely on objective data and scientific evidence to evaluate solutions in the fields of sport, healthcare and wellness."
        />
      </div>

      <Stats />

      <Content description="Each study results in a comprehensive white paper presenting the methodology, findings, statistical analyses and actionable recommendations. Depending on the partner's objectives and the outcomes of the study, selected projects may also lead to publication in peer-reviewed international scientific journals." />

      <Faq />
      <Footer />
    </main>
  );
}
