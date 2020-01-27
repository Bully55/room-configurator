import * as THREE from "three"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export type LoaderOptions = {
    path: string,
    x: number,
    y: number,
    z: number,
    texturePath?: string
}

export default (options: LoaderOptions, scene: THREE.Scene) => {
    let objLoader = new OBJLoader()
    let manager = new THREE.LoadingManager()
    // Textures
    let imageLoader = new THREE.ImageLoader(manager)
    let texture = new THREE.Texture()

    let obj: THREE.Mesh

    objLoader.load(
        options.path,
        ( object ) => {
            console.log("Door:", object)
            
            object.traverse((child) => {
                if( child instanceof THREE.Mesh )
                    obj = child
            })

            obj.position.x = options.x
            obj.position.y = options.y
            obj.position.z = options.z

            obj.material = new THREE.MeshPhongMaterial({
                map: texture
            })
            scene.add(obj)
        },
        ( xhr ) => {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' )
        },
        ( err ) => {
            console.error( 'An error happened' )
        }
    )

    // Textures
    imageLoader.load(options.texturePath, (image) => {
        texture.image = image
        texture.needsUpdate = true
        texture.wrapS = 1
        texture.wrapT = 1
    })

    // return obj
}