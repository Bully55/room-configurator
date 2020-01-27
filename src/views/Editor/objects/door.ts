import * as THREE from "three"
import loadObject from "../../../halpers/loadObject"

export default (scene: THREE.Scene) => {
    loadObject({
        path: "./static/objects/NewRoom_Door.obj",
        x: -300,
        y: -160,
        z: -250,
        texturePath: "./static/objects/door-texture1.jpg"
    }, scene)
}