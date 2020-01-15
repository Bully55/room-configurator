import { observable, action, autorun } from "mobx"

class Parameters {
    @observable 
    startPoints: any = {
        area: 50,
        rooms: 1,
        doors: 1,
        ceilingHeight: 2.4
    }
    @observable totalPrice: number
    // @observable
    // toalSubParams: any = {
    //     ceiling: number,
    //     floor: number
    // }

    @action
    parameterChange = (parameter: string, value: number) => {
        switch(parameter) {
            case "area":
                this.startPoints.area = value
                break;
            case "rooms":
                this.startPoints.rooms = value
                break;
            case "doors":
                this.startPoints.doors = value
                break;
            case "ceiling":
                this.startPoints.ceilingHeight = value
                break;
        }
    }

    @action
    changeTotalPrice = autorun(
        () => {
            let totalArea = this.startPoints.area * 154
            let totalRooms = this.startPoints.rooms * 5000
            let totalDoors = this.startPoints.doors * 1000
            let totalWall = this.startPoints.ceilingHeight * 15
            this.totalPrice = totalArea + totalDoors + totalWall + totalRooms
        },
        {
            onError(e) {
                window.alert("Please enter a valid age")
            }
        }
    )
}

export default new Parameters()