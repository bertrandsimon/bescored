import AdminChroniques from "./AdminChroniques";

export const metadata = {
  title: "Chroniques interne",
  robots: { index: false, follow: false },
};

export default function InternChroniquesPage() {
  return (
    <main>
      <AdminChroniques />
    </main>
  );
}
