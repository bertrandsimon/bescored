import { createHmac } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "bescored_chroniques";

function expectedToken() {
  const secret = process.env.CHRONIQUES_ADMIN_PASSWORD;
  if (!secret) return null;
  return createHmac("sha256", secret).update("bescored-chroniques").digest("hex");
}

export function isChroniquesAdmin() {
  const token = expectedToken();
  if (!token) return false;
  return cookies().get(COOKIE_NAME)?.value === token;
}

export function chroniquesCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    secure: process.env.NODE_ENV === "production",
  };
}

export function getChroniquesCookieName() {
  return COOKIE_NAME;
}

export function getChroniquesAdminToken() {
  return expectedToken();
}

export function checkChroniquesPassword(password) {
  const secret = process.env.CHRONIQUES_ADMIN_PASSWORD;
  return Boolean(secret && password === secret);
}
