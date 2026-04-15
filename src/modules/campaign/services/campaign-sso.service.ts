import { clients } from '@/lib/https';

const TOKEN_EXCHANGE_URL = import.meta.env.VITE_TOKEN_EXCHANGE_URL as string;
const CLIENT_ID = import.meta.env.VITE_TOKEN_EXCHANGE_CLIENT_ID as string;
const CONFIGURED_ORIGIN = import.meta.env.VITE_TOKEN_EXCHANGE_ORIGIN as string | undefined;

const getRequestOrigin = (): string => {
  if (CONFIGURED_ORIGIN && CONFIGURED_ORIGIN.trim().length > 0) {
    return CONFIGURED_ORIGIN.startsWith('http')
      ? CONFIGURED_ORIGIN
      : `https://${CONFIGURED_ORIGIN}`;
  }
  return window.location.origin;
};

export interface TokenExchangeResponse {
  Success: boolean;
  ErrorMessage: string | null;
  IsReturnAsResponse: boolean;
  RedirectUrl: string;
}

export const convertTokenForCampaign = (accessToken: string): Promise<TokenExchangeResponse> => {
  const requestOrigin = getRequestOrigin();

  return clients.post<TokenExchangeResponse>(
    TOKEN_EXCHANGE_URL,
    JSON.stringify({ access_token: accessToken }),
    {
      ClientId: CLIENT_ID,
      origin: requestOrigin,
      Authorization: `Bearer ${accessToken}`,
    }
  );
};
