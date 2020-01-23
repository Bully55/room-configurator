import { observable, action, autorun } from "mobx"
import { SubParam } from "typings"

class Parameters {
    @observable ceiling: SubParam[]
    @observable ceilingSelected: SubParam
    @observable wall: SubParam[]
    @observable wallSelected: SubParam
    @observable floor: SubParam[]
    @observable floorSelected: SubParam

    @observable 
    paramTotalPrice: number

    @observable
    parametersTotal: number = 0

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
    selectedParams = (type: string, element: SubParam) => {
        switch(type) {
            case "ceiling-param":
                this.ceilingSelected = element
                break;
            case "wall-param":
                this.wallSelected = element
                break;
            case "floor-param":
                this.floorSelected = element
                break;
        }
    }

    // @action
    // getElementById = () => {

    // }

    @action
    parametersPrice = autorun(
        () => {
            let { ceilingSelected, wallSelected, floorSelected } = this
            this.paramTotalPrice = ceilingSelected.price + wallSelected.price + floorSelected.price
        },
        {
            onError(e) {
                // window.alert("Please enter a valid age")
            }
        }
    )
}

export default new Parameters()