import { clients } from '@/lib/https';

const TOKEN_EXCHANGE_URL = import.meta.env.VITE_TOKEN_EXCHANGE_URL as string;
const CLIENT_ID = import.meta.env.VITE_TOKEN_EXCHANGE_CLIENT_ID as string;
const ORIGIN = import.meta.env.VITE_TOKEN_EXCHANGE_ORIGIN as string;

export interface TokenExchangeResponse {
  Success: boolean;
  ErrorMessage: string | null;
  IsReturnAsResponse: boolean;
  RedirectUrl: string;
}

export const convertTokenForCampaign = (accessToken: string): Promise<TokenExchangeResponse> => {
  return clients.post<TokenExchangeResponse>(
    TOKEN_EXCHANGE_URL,
    JSON.stringify({ access_token: accessToken }),
    {
      ClientId: CLIENT_ID,
      Origin: ORIGIN,
      Authorization: `Bearer ${accessToken}`,
    }
  );
};
