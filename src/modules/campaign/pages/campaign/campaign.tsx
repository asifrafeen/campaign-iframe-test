export const CampaignPage = () => {
  return (
    <main
      className="flex w-full flex-col h-[calc(100vh-8rem)]"
      role="main"
      aria-label="Campaign Content"
    >
      <iframe
        src="https://campaign.seliselocal.com"
        title="Campaign"
        className="w-full flex-1 border-0 rounded-md bg-background"
      />
    </main>
  );
};
