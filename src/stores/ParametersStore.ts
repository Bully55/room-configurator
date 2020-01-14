import { observable, action, autorun } from "mobx"

class Parameters {
    @observable area: number = 50
    @observable rooms: number = 1
    @observable doors: number = 1
    @observable ceilingHeight: number = 2.4
    // @observable
    // toalSubParams: any = {
    //     ceiling: number,

    // }
    @observable totalPrice: number

    @action
    parameterChange = (parameter: string, value: number) => {
        switch(parameter) {
            case "area":
                this.area = value
                break;
            case "rooms":
                this.rooms = value
                break;
            case "doors":
                this.doors = value
                break;
            case "ceiling":
                this.ceilingHeight = value
                break;
        }
    }

    @action
    changeTotalPrice = autorun(
        () => {
            let totalArea = this.area * 154
            let totalRooms = this.rooms * 5000
            let totalDoors = this.doors * 1000
            let totalWall = this.ceilingHeight * 15
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