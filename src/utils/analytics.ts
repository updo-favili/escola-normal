type LeadFormType = 'matricula' | 'colonia';

type DataLayerEvent = {
  event: string;
  form_type: LeadFormType;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export type TrafficData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  referrer?: string;
};

// UTMs + IDs de clique dos anúncios (Google Ads com autotag não manda UTM, só gclid)
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
] as const;
const TRAFFIC_STORAGE_KEY = 'en_traffic';

// Origem do visitante (UTMs da URL de entrada + referrer), guardada na sessão para não se perder
// se ele navegar antes de enviar o formulário. Vai junto com o lead para o RD Station.
export function getTrafficData(): TrafficData {
  if (typeof window === 'undefined') {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const fromUrl: TrafficData = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      fromUrl[key] = value;
    }
  });

  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(TRAFFIC_STORAGE_KEY, JSON.stringify(fromUrl));
      return { ...fromUrl, referrer: document.referrer || undefined };
    }
    const saved = sessionStorage.getItem(TRAFFIC_STORAGE_KEY);
    if (saved) {
      return { ...(JSON.parse(saved) as TrafficData), referrer: document.referrer || undefined };
    }
  } catch {
    // sessionStorage indisponível (aba anônima, bloqueio): segue só com o que há na URL
  }

  return { ...fromUrl, referrer: document.referrer || undefined };
}

// Evento de conversão para o GTM, disparado só quando o lead foi gravado com sucesso
export function trackLead(formType: LeadFormType) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    form_type: formType,
  });
}
