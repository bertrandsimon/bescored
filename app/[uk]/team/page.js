import TeamTop from "./teamTop";
import Solo from "./solo";
import Subteam from "./subteam";
import Footer from "../footer";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <TeamTop />
      </div>

      <Solo />
      <Subteam />
      <Footer />
    </main>
  );
}
