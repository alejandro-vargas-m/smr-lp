// Datos del negocio compartidos por todas las páginas
export const BUSINESS_NAME = 'Super Materiales Regiomontanos';
export const WHATSAPP_NUMBER = '528110816677';
export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const DEFAULT_CTA = waLink('Hola, quiero cotizar materiales de construcción');
export const EMAIL = 'materialesregiomontanos@gmail.com';
export const ADDRESS = 'Cañón Grande 7780, Villas La Rioja, 64988 Monterrey, N.L.';
// Ficha de Google Maps del negocio (CID)
export const MAPS_URL = 'https://maps.google.com/?cid=17355579856265802874';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61584890513502';
export const INSTAGRAM_URL = 'https://www.instagram.com/supermaterialesregiomontanos';
export const TIKTOK_URL = 'https://www.tiktok.com/@smaterialesregiomontanos';
export const PRIVACY_URL = '/aviso-de-privacidad';
export const THANKS_URL = '/gracias';
// El formulario guarda aquí el enlace de WhatsApp con el mensaje, para que /gracias pueda reabrirlo
export const WA_STORAGE_KEY = 'smr-wa-url';
// Conversia: la key del canal es pública por diseño (la usan el chatbot y el registro de leads del formulario)
export const CONVERSIA_KEY = 'ntTNpQviDH41G';
export const CONVERSIA_LEADS_URL = `https://conversia.com.mx/api/save-web-form/${CONVERSIA_KEY}`;
// Campaña de Conversia donde entran los leads del formulario; mientras sea null no se envían
export const CONVERSIA_CAMPANA_ID: number | null = 228;
