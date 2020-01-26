import { observable, action, computed } from "mobx"
import { SubParam } from "typings"

class Parameters {
    @observable ceiling: SubParam[]
    @observable wall: SubParam[]
    @observable floor: SubParam[]
    @observable
    selectedPrices = {
        ceiling: 10000,
        wall: 8000,
        floor: 12500,
        draftMaterials: 214,
        soundInsulation: 251,
        electricalPanel: 299,
        designProj: 239
    }

    @computed 
    get paramTotalPrice() : number {
        let { 
            ceiling, 
            wall, 
            floor, 
            draftMaterials, 
            soundInsulation, 
            electricalPanel, 
            designProj 
        } = this.selectedPrices
        return ceiling + wall + floor + draftMaterials + soundInsulation + electricalPanel + designProj
    } 

    @action
    setParams = (paramType: string, parameters: SubParam[]) => {
        switch(paramType) {
            case "ceiling":
                this.ceiling = parameters
                break;
            case "wall":
                this.wall = parameters
                break;
            case "floor":
                this.floor = parameters
                break;
        }
    }

    @action
    setParamsPrice = (paramType: string, price: number) => {
        let { ceiling, floor, wall } = this.selectedPrices
        
        switch(paramType) {
            case "ceiling-param":
                this.selectedPrices.ceiling = price
                break;
            case "wall-param":
                this.selectedPrices.wall = price
                break;
            case "floor-param":
                this.selectedPrices.floor = price
                break;
            case "draft":
                this.selectedPrices.draftMaterials = price
                break;
            case "sound":
                this.selectedPrices.soundInsulation = price
                break;
            case "electrical":
                this.selectedPrices.electricalPanel = price
                break;
            case "design":
                this.selectedPrices.designProj = price
                break;
        }
        
        // this.paramTotalPrice = ceiling + floor + wall
    }
}

export default new Parameters()