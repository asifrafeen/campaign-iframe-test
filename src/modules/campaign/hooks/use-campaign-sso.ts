import { useState } from 'react';
import { useAuthStore } from '@/state/store/auth';
import { useToast } from '@/hooks/use-toast';
import { convertTokenForCampaign } from '../services/campaign-sso.service';

export const useCampaignSso = () => {
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useAuthStore((state) => state.accessToken);
  const { toast } = useToast();

  const handleClick = async () => {
    if (!accessToken) {
      toast({ title: 'Error', description: 'Not authenticated.', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await convertTokenForCampaign(accessToken);
      if (response.Success && response.RedirectUrl) {
        window.open(response.RedirectUrl, '_blank', 'noopener,noreferrer');
      } else {
        toast({
          title: 'Error',
          description: response.ErrorMessage ?? 'Failed to open Campaign.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to connect to Campaign.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { handleClick, isLoading };
};
