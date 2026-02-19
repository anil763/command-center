import { NextRequest } from "next/server";

export const AUTH_COOKIE_NAME = "command_center_session";
const DEFAULT_PASSWORD = "anil2026";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function encodeBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(input: string): string {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  const normalized = pad ? `${base64}${"=".repeat(4 - pad)}` : base64;
  const binary = atob(normalized);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function sign(value: string): Promise<string> {
  const keyMaterial = process.env.COMMAND_CENTER_SESSION_SECRET || `${getCommandCenterPassword()}-session-secret`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(keyMaterial),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  const bytes = new Uint8Array(signature);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getCommandCenterPassword(): string {
  return process.env.COMMAND_CENTER_PASSWORD || DEFAULT_PASSWORD;
}

export function isPasswordValid(password: string): boolean {
  return password === getCommandCenterPassword();
}

export async function createSessionToken(): Promise<string> {
  const payload = {
    iat: Date.now(),
    exp: Date.now() + SESSION_TTL_SECONDS * 1000,
    nonce: crypto.randomUUID(),
  };

  const encoded = encodeBase64Url(JSON.stringify(payload));
  const signature = await sign(encoded);
  return `${encoded}.${signature}`;
}

export async function verifySessionToken(token?: string | null): Promise<boolean> {
  if (!token) return false;

  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return false;

  const expected = await sign(encoded);
  if (expected !== signature) return false;

  try {
    const decoded = decodeBase64Url(encoded);
    const payload = JSON.parse(decoded) as { exp?: number };
    if (!payload.exp) return false;
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}

export async function isAuthenticatedRequest(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

export function getSessionTtlSeconds(): number {
  return SESSION_TTL_SECONDS;
}
