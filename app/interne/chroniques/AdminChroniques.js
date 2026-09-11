"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const emptyForm = {
  uid: "",
  publishedAt: "",
  link: "",
  author: "Dr. Christophe Hausswirth",
  image_fr: "",
  image_uk: "",
  locale: {
    fr: { title: "", dateLabel: "", body: "" },
    en: { title: "", dateLabel: "", body: "" },
  },
};

export default function AdminChroniques() {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingUid, setEditingUid] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const isEditing = Boolean(editingUid);

  async function loadPosts() {
    const res = await fetch("/api/chroniques?raw=1");
    const data = await res.json();
    if (data.ok) setPosts(data.posts || []);
  }

  useEffect(() => {
    fetch("/api/chroniques/session")
      .then((res) => res.json())
      .then(async (data) => {
        setAuthenticated(Boolean(data.authenticated));
        if (data.authenticated) await loadPosts();
      })
      .finally(() => setChecking(false));
  }, []);

  async function login(event) {
    event.preventDefault();
    setMessage("");
    const res = await fetch("/api/chroniques/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (!data.ok) {
      setMessage("Mot de passe incorrect.");
      return;
    }
    setAuthenticated(true);
    setPassword("");
    await loadPosts();
  }

  async function logout() {
    await fetch("/api/chroniques/login", { method: "DELETE" });
    setAuthenticated(false);
    setPosts([]);
    setForm(emptyForm);
    setEditingUid("");
  }

  function updateLocale(lang, field, value) {
    setForm((current) => ({
      ...current,
      locale: {
        ...current.locale,
        [lang]: { ...current.locale[lang], [field]: value },
      },
    }));
  }

  function startCreate() {
    setEditingUid("");
    setForm(emptyForm);
    setMessage("");
  }

  function startEdit(post) {
    setEditingUid(post.uid);
    setForm({
      uid: post.uid,
      publishedAt: post.publishedAt || "",
      link: post.link || "",
      author: post.author || "Dr. Christophe Hausswirth",
      image_fr: post.image_fr || "",
      image_uk: post.image_uk || "",
      locale: {
        fr: {
          title: post.locale?.fr?.title || "",
          dateLabel: post.locale?.fr?.dateLabel || "",
          body: post.locale?.fr?.body || "",
        },
        en: {
          title: post.locale?.en?.title || "",
          dateLabel: post.locale?.en?.dateLabel || "",
          body: post.locale?.en?.body || "",
        },
      },
    });
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const payload = {
        publishedAt: form.publishedAt,
        link: form.link,
        author: form.author,
        image_fr: form.image_fr,
        image_uk: form.image_uk,
        locale: form.locale,
      };
      const res = await fetch(
        isEditing ? `/api/chroniques/${editingUid}` : "/api/chroniques",
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!data.ok) {
        setMessage(data.error || "Enregistrement impossible.");
        return;
      }
      setMessage(isEditing ? "Chronique mise à jour." : "Chronique créée.");
      setEditingUid("");
      setForm(emptyForm);
      await loadPosts();
    } finally {
      setSaving(false);
    }
  }

  async function remove(uid) {
    if (!window.confirm("Supprimer cette chronique ?")) return;
    const res = await fetch(`/api/chroniques/${uid}`, { method: "DELETE" });
    const data = await res.json();
    if (!data.ok) {
      setMessage(data.error || "Suppression impossible.");
      return;
    }
    if (editingUid === uid) startCreate();
    setMessage("Chronique supprimée.");
    await loadPosts();
  }

  const sortedPosts = useMemo(
    () =>
      [...posts].sort((a, b) =>
        String(b.publishedAt).localeCompare(String(a.publishedAt))
      ),
    [posts]
  );

  if (checking) {
    return <p className="pt-40 text-center font-light">Chargement…</p>;
  }

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto pt-40 px-6 pb-24">
        <p className="oswald uppercase text-3xl text-center">
          <span className="font-semibold">Chroniques</span>{" "}
          <span className="font-light">interne</span>
        </p>
        <form onSubmit={login} className="mt-10 flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mot de passe"
            className="rounded-md border border-gray-300 px-3 py-2"
            required
          />
          <button type="submit" className="btn btn-blue">
            Entrer
          </button>
          {message && <p className="text-sm text-red-600">{message}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-36 px-6 pb-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="oswald uppercase text-3xl">
          <span className="font-semibold">Chroniques</span>{" "}
          <span className="font-light">interne</span>
        </p>
        <div className="flex gap-3">
          <button type="button" className="btn btn-blue" onClick={startCreate}>
            Nouvelle chronique
          </button>
          <button
            type="button"
            className="oswald uppercase text-sm px-4 py-2 border border-gray-300 rounded"
            onClick={logout}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {message && <p className="mt-4 text-sm text-[#178090]">{message}</p>}

      <form
        onSubmit={save}
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl border-2 border-[#4DB4C4] p-6 bg-white"
      >
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Date de publication</label>
          <input
            type="date"
            value={form.publishedAt}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                publishedAt: event.target.value,
              }))
            }
            className="rounded-md border border-gray-300 px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Auteur</label>
          <input
            type="text"
            value={form.author}
            onChange={(event) =>
              setForm((current) => ({ ...current, author: event.target.value }))
            }
            className="rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-3">
          <label className="text-sm font-semibold">Lien LinkedIn</label>
          <input
            type="url"
            value={form.link}
            onChange={(event) =>
              setForm((current) => ({ ...current, link: event.target.value }))
            }
            placeholder="https://www.linkedin.com/..."
            className="rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {["fr", "en"].map((lang) => (
          <div key={lang} className="flex flex-col gap-3">
            <p className="oswald uppercase blue">
              {lang === "fr" ? "Version française" : "English version"}
            </p>
            <input
              type="text"
              value={lang === "fr" ? form.image_fr : form.image_uk}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  [lang === "fr" ? "image_fr" : "image_uk"]: event.target.value,
                }))
              }
              placeholder="URL de l’image (laisser vide = pas d’image)"
              className="rounded-md border border-gray-300 px-3 py-2"
            />
            {(lang === "fr" ? form.image_fr : form.image_uk) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lang === "fr" ? form.image_fr : form.image_uk}
                alt=""
                className="max-h-32 w-auto rounded-md object-contain"
              />
            )}
            <input
              type="text"
              value={form.locale[lang].title}
              onChange={(event) =>
                updateLocale(lang, "title", event.target.value)
              }
              placeholder="Titre"
              className="rounded-md border border-gray-300 px-3 py-2"
              required={lang === "fr"}
            />
            <input
              type="text"
              value={form.locale[lang].dateLabel}
              onChange={(event) =>
                updateLocale(lang, "dateLabel", event.target.value)
              }
              placeholder={
                lang === "fr"
                  ? "Lundi 7 septembre 2026"
                  : "Monday 7 September 2026"
              }
              className="rounded-md border border-gray-300 px-3 py-2"
            />
            <textarea
              value={form.locale[lang].body}
              onChange={(event) =>
                updateLocale(lang, "body", event.target.value)
              }
              placeholder="Texte de la chronique"
              className="rounded-md border border-gray-300 px-3 py-2 min-h-[240px]"
            />
          </div>
        ))}

        <div className="lg:col-span-2 flex gap-3">
          <button type="submit" className="btn btn-blue" disabled={saving}>
            {isEditing ? "Mettre à jour" : "Créer"}
          </button>
          {isEditing && (
            <button
              type="button"
              className="oswald uppercase text-sm px-4 py-2 border border-gray-300 rounded"
              onClick={startCreate}
            >
              Annuler
            </button>
          )}
        </div>
      </form>

      <div className="mt-12 flex flex-col gap-4">
        {sortedPosts.map((post) => (
          <div
            key={post.uid}
            className="rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
          >
            <div>
              <p className="text-xs text-gray-500">
                {post.publishedAt} · {post.locale?.fr?.dateLabel}
              </p>
              <p className="mt-1 font-semibold">
                {post.locale?.fr?.title || post.uid}
              </p>
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm blue"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <div className="flex gap-2">
              <Link
                href={`/chroniques/${post.uid}`}
                className="oswald uppercase text-sm px-3 py-2 border border-gray-300 rounded"
              >
                Voir
              </Link>
              <button
                type="button"
                className="btn btn-blue text-sm"
                onClick={() => startEdit(post)}
              >
                Modifier
              </button>
              <button
                type="button"
                className="oswald uppercase text-sm px-3 py-2 border border-red-300 text-red-700 rounded"
                onClick={() => remove(post.uid)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
