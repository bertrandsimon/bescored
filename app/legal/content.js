import { Fragment } from "react";
import Link from "next/link";
export default function Content() {
  return (
    <>
      <div className="flex flex-col gap-10 max-width-4xl mx-auto py-24 px-24">
        <h2>Mentions légales</h2>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, il est précisé aux
          utilisateurs du site
          <Link className="text-blue-600 px-2" href="https://www.bescored.fr">
            www.bescored.fr
          </Link>
          l&apos;identité des différents intervenants dans le cadre de sa
          réalisation et de son suivi.
        </p>

        <h2>Éditeur du site :</h2>
        <p>
          Le présent site, accessible via l’URL www.bescored.fr est édité par
          beScored, Société par Actions Simplifiée au capital de 500 euros,
          immatriculée sous le SIREN 844319368, et dont le siège social est
          situé au 535 route des Lucioles, 06560, Valbonne – France. La SAS
          beScored est représentée par son président M. Christophe Hausswirth.
        </p>

        <h2>Directeur de publication :</h2>
        <p>
          Le directeur de la publication du site est M. Christophe Hausswirth (
          <Link
            className="text-blue-600 px-2"
            href="mailto:christophe@bescored.fr"
          >
            christophe@bescored.fr
          </Link>
          ).
        </p>

        <h2>Réalisation du site :</h2>
        <p>
          Co-production :
          <Link
            className="px-2 text-blue-600"
            href="https://www.fenyx.fr/"
            target="_blank"
          >
            Fenyx
          </Link>
          |
          <Link
            className="px-2 text-blue-600"
            href="https://www.logeen.com"
            target="_blank"
          >
            Logeen
          </Link>
        </p>

        <h2>Hébergement :</h2>
        <p>
          Le site
          <Link className="text-blue-600 px-2" href="https://www.bescored.fr">
            www.bescored.fr
          </Link>
          est hébergé par la société OVH SAS (Siren 424 761 419), situé au 2 rue
          Kellermann, 59100, Roubaix – France (Téléphone : 1007).
        </p>

        <h2>Propriété intellectuelle :</h2>
        <p>
          Le contenu du site
          <Link className="text-blue-600 px-2" href="https://www.bescored.fr">
            www.bescored.fr
          </Link>
          est protégé par les lois sur la propriété intellectuelle. Toute
          reproduction, distribution ou utilisation non autorisée du contenu est
          strictement interdite.
        </p>

        <h2>Données personnelles :</h2>
        <p>
          Nous attachons une grande importance à la protection de vos données
          personnelles. Cette section décrit ainsi comment nous collectons,
          utilisons et traitons vos données personnelles lorsque vous visitez
          notre site internet
          <Link className="text-blue-600 px-2" href="https://www.bescored.fr">
            www.bescored.fr
          </Link>
          .
        </p>

        <h3>1.1. Responsable de Traitement</h3>
        <p>
          Le responsable de traitement de vos données personnelles est M.
          Christophe Hausswirth (
          <Link
            className="text-blue-600 px-2"
            href="mailto:christophe@bescored.fr"
          >
            christophe@bescored.fr
          </Link>
          ).
        </p>

        <h3>1.2. Données Collectées</h3>
        <p>
          Nous collectons différentes catégories de données personnelles,
          notamment, les informations que vous nous fournissez volontairement,
          telles que votre nom, votre adresse email, votre numéro de téléphone,
          etc. Nous pouvons également collecter des données automatiquement à
          l&apos;aide de technologies telles que les cookies, les journaux de
          serveur et d&apos;autres outils de suivi similaires lorsque vous
          naviguez sur notre site.
        </p>

        <h3>1.3. Finalités du Traitement</h3>
        <p>Nous utilisons vos données personnelles aux fins suivantes :</p>
        <ul>
          <li>Pour répondre à vos demandes et questions.</li>
          <li>
            Pour personnaliser votre expérience utilisateur sur notre site
            internet.
          </li>
          <li>
            Pour vous tenir informer des évènements majeurs auxquels beScored
            participe au travers de notre newsletter.
          </li>
          <li>Pour surveiller et améliorer la performance de notre site.</li>
        </ul>

        <h3>1.4. Durée de Conservation</h3>
        <p>
          Conformément au Règlement (UE) 2016/679 du Parlement européen et du
          Conseil du 27 avril 2016 relatif à la protection des personnes
          physiques à l&apos;égard du traitement des données à caractère
          personnel et à la libre circulation de ces données (RGPD) et à la loi
          nᵒ 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
          aux libertés, vos données personnelles sont conservées pour une durée
          limitée.
        </p>

        <h3>1.5. Vos Droits</h3>
        <p>
          En tant qu&apos;utilisateur de notre site internet, vous disposez de
          certains droits en ce qui concerne vos données personnelles, notamment
          un droit d’accès, d’opposition, de rectification et de suppression.
          Pour exercer ces droits ou poser vos questions concernant la collecte
          et le traitement de vos données personnelles, veuillez contacter le
          responsable de traitement M. Christophe Hausswirth (
          <Link
            className="text-blue-600 px-2"
            href="mailto:christophe@bescored.fr"
          >
            christophe@bescored.fr
          </Link>
          ).
        </p>

        <h2>Nous contacter</h2>
        <p>
          Vous pouvez nous contacter par courrier (535 route des lucioles,
          06560, Valbonne) ou par email (
          <Link
            className="text-blue-600 px-2"
            href="mailto:christophe@bescored.fr"
          >
            christophe@bescored.fr
          </Link>
          ).
        </p>
      </div>
    </>
  );
}
