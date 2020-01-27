import * as THREE from "three"

export default (manager: THREE.LoadingManager, imgLoader: THREE.ImageLoader) => {
    let width = 1000
    let height = 8
    let depth = 800

    let geometry = new THREE.BoxGeometry(width, height, depth)
    let material = new THREE.MeshBasicMaterial({color: 0xD0D0D0})

    let ceiling = new THREE.Mesh(geometry, material)

    ceiling.position.x = 100
    ceiling.position.y = 140
    ceiling.position.z = -270

    //Texture
    let texture = new THREE.Texture()

    imgLoader.load(
        "/static/objects/text1.jpg",
        (image) => {
            texture.image = image
            texture.needsUpdate = true
        }
    )

    ceiling.material = new THREE.MeshPhongMaterial({
        map: texture
    })

    return ceiling
}