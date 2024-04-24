import Image from "next/image";
// import TeamTop from './team'
import TeamTop from "./teamTop";
import Solo from "./solo";
import Trio from "./trio";
import Subteam from "./subteam";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <TeamTop />
      </div>

      <Solo />
      <Trio />
      <Subteam />
    </main>
  );
}
