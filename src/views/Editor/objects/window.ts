import loadObject from "../../../halpers/loadObject"

export default (scene: THREE.Scene) => {
    loadObject({
        path: "./static/objects/NewRoom_Window_Change2.obj",
        x: -300,
        y: -160,
        z: -250,
        texturePath: "./static/objects/radiator-text.jpg"
    }, scene)
}