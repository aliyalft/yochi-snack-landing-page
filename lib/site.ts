export const WA_NUMBER = "6287872038056"
export const WA_DISPLAY = "087872038056"
export const INSTAGRAM = "yochi_snack"
export const INSTAGRAM_URL = "https://instagram.com/yochi_snack"
export const MAPS_URL = "https://maps.app.goo.gl/8EMpoMNV7pz3iViQ6?g_st=awb"

export function waLink(message?: string) {
  const base = `https://wa.me/${WA_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
]
