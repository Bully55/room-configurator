import { observable, action, computed, toJS } from "mobx"
import { SubParam } from "typings"

class Parameters {
    @observable ceiling: SubParam[]
    @observable wall: SubParam[]
    @observable floor: SubParam[]
    // @observable selectedParams: string[] = [] as string[]
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
    
    @observable
    allParameters: SubParam[] = [].concat(this.ceiling, this.wall, this.floor)

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
    setParamsPrice = (paramType: string, item: SubParam) => {
        // this.selectedParams.push(item.id)

        switch(paramType) {
            case "ceiling-param":
                this.selectedPrices.ceiling = item.price
                break;
            case "wall-param":
                this.selectedPrices.wall = item.price
                break;
            case "floor-param":
                this.selectedPrices.floor = item.price
                break;
            case "draft":
                this.selectedPrices.draftMaterials = item.price
                break;
            case "sound":
                this.selectedPrices.soundInsulation = item.price
                break;
            case "electrical":
                this.selectedPrices.electricalPanel = item.price
                break;
            case "design":
                this.selectedPrices.designProj = item.price
                break;
        }

        console.log(toJS(this.selectedParams))
    }
}

export default new Parameters()