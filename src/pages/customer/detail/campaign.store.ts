import { makeAutoObservable } from 'mobx';

class CampaignStoreFactory {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    selectedCampaignId: string | null = null;
    setSelectedCampaignId = (value: string | null) => {
        this.selectedCampaignId = value;
    };

    isDialogOpen = false;
    setIsDialogOpen = (value: boolean) => {
        this.isDialogOpen = value;
    };
}

export const CampaignStore = new CampaignStoreFactory();
