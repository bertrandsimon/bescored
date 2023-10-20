import { Fragment } from "react";

export default function Content() {
  return (
    <>
      <div className="flex flex-col gap-10 max-width-4xl mx-auto py-24 px-24">
        <h2>Mentions légales</h2>

        <h2>Éditeur du site :</h2>
        <p>
          [Raison sociale de l&apos;entreprise]
          <br />
          [Forme juridique de l&apos;entreprise : SARL, SAS, etc.]
          <br />
          [Adresse du siège social de l&apos;entreprise]
          <br />
          [Téléphone de l&apos;entreprise]
          <br />
          [Adresse e-mail de l&apos;entreprise]
          <br />
          [Numéro d&apos;immatriculation au registre du commerce et des sociétés
          (RCS)]
          <br />
          [Capital social de l&apos;entreprise]
          <br />
          [TVA intracommunautaire si applicable]
          <br />
          [Nom du responsable légal de l&apos;entreprise]
        </p>

        <h2>Directeur de la publication :</h2>
        <p>
          [Nom du directeur de la publication]
          <br />
          [Adresse e-mail du directeur de la publication]
        </p>

        <h2>Hébergeur du site :</h2>
        <p>
          [Raison sociale de l&apos;hébergeur]
          <br />
          [Adresse du siège social de l&apos;hébergeur]
          <br />
          [Téléphone de l&apos;hébergeur]
          <br />
          [Adresse e-mail de l&apos;hébergeur]
        </p>

        <h2>Propriété intellectuelle :</h2>
        <p>
          Le contenu de ce site internet est protégé par les lois sur la
          propriété intellectuelle. Toute reproduction, distribution ou
          utilisation non autorisée du contenu est strictement interdite.
        </p>

        <h2>Politique de confidentialité :</h2>
        <p>
          Pour en savoir plus sur notre politique de confidentialité, veuillez
          consulter notre{" "}
          <a href="[lien vers la politique de confidentialité]">
            politique de confidentialité
          </a>
          .
        </p>

        <h2>Cookies :</h2>
        <p>
          Ce site internet utilise des cookies pour améliorer l&apos;expérience
          de l&apos;utilisateur. Pour en savoir plus sur l&apos;utilisation des
          cookies sur ce site, veuillez consulter notre{" "}
          <a href="[lien vers la politique de cookies]">politique de cookies</a>
          .
        </p>

        <h2>Liens externes :</h2>
        <p>
          Ce site peut contenir des liens vers des sites web externes. Nous ne
          sommes pas responsables du contenu ou des pratiques de confidentialité
          de ces sites.
        </p>

        <h2>Limitation de responsabilité :</h2>
        <p>
          Nous nous efforçons de fournir des informations exactes sur ce site,
          mais nous ne pouvons garantir l&apos;exactitude, l&apos;exhaustivité
          ou la pertinence de ces informations. Nous déclinons toute
          responsabilité quant à l&apos;utilisation qui pourrait être faite des
          informations présentes sur ce site.
        </p>

        <h2>Droit applicable et juridiction compétente :</h2>
        <p>
          Ce site est régi par les lois [indiquez le pays ou la juridiction
          applicable]. En cas de litige, les tribunaux de [indiquez la ville ou
          la juridiction compétente] seront compétents.
        </p>

        <h2>Contact :</h2>
        <p>
          Pour toute question ou demande concernant ce site internet, veuillez
          nous contacter à l&apos;adresse suivante :{" "}
          <a href="mailto:[adresse e-mail de contact]">
            [adresse e-mail de contact]
          </a>
          .
        </p>
      </div>
    </>
  );
}
