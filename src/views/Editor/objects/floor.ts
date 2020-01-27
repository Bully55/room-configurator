import * as THREE from "three"

export default (manager: THREE.LoadingManager, imgLoader: THREE.ImageLoader) => {
    let width = 1000
    let height = 8
    let depth = 800

    let geometry = new THREE.BoxGeometry(width, height, depth)
    let material = new THREE.MeshBasicMaterial({color: 0xD0D0D0})

    let floor = new THREE.Mesh(geometry, material)

    floor.position.x = 100
    floor.position.y = -170
    floor.position.z = -170

    //Texture
    let texture = new THREE.Texture()

    imgLoader.load(
        "/static/objects/floor-text.jpg",
        (image) => {
            texture.image = image
            texture.needsUpdate = true
        }
    )

    floor.material = new THREE.MeshPhongMaterial({
        map: texture
    })

    return floor
}