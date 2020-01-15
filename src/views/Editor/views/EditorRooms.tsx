import React from "react"
import * as THREE from "three"
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import OBJLoader from "three-obj-loader"
// new OBJLoader(THREE)
// OBJLoader.constructor(THREE)

export interface EditorRoomsProps {}

export interface EditorRoomsState {
    textures: string
}

export default
class EditorRooms
extends React.Component<EditorRoomsProps, EditorRoomsState> {

    state = {
        textures: "Grass_001_NORM.jpg"
    }

    container: HTMLDivElement

    componentDidMount() {
        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        let renderer = new THREE.WebGLRenderer({ antialias: true })
        let controls = new OrbitControls(camera, renderer.domElement)

        camera.position.set( 0, 0, 100 )
        controls.update()

        renderer.setClearColor(0x808080)
        renderer.setSize( window.innerWidth - 400, window.innerHeight - 150 )
        this.container.appendChild( renderer.domElement )

        let amColor = "#faffe3"
        let amLight = new THREE.AmbientLight(amColor)
        scene.add(amLight)

        let light = new THREE.DirectionalLight( 0xfff7e8, 1 )
        scene.add(light)

        let manager = new THREE.LoadingManager()
        let imageLoader = new THREE.ImageLoader(manager)

        let texture = new THREE.Texture()

        imageLoader.load(`./static/objects/${this.state.textures}`, function(image) {
            texture.image = image
            texture.needsUpdate = true
        })

        let meshes: THREE.Mesh[] = []

        let objLoader = new OBJLoader()

        objLoader.load(
            "./static/objects/LivingRoom_WallAttach.obj",
            ( object ) => {
                console.log(object)
                
                object.traverse((child) => {
                    if( child instanceof THREE.Mesh )
                        meshes.push(child)
                })

                let wall = meshes[0]

                wall.position.x = -860
                wall.position.y = -260
                wall.position.z = 200

                scene.add( wall )

                let bumpMap = new THREE.TextureLoader().load("./static/objects/text1.jpg")

                wall.material = new THREE.MeshPhongMaterial({
                    map: texture,
                    bumpScale: 0,
                })

                renderer.render( scene, camera )
            },
            ( xhr ) => {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' )
            },
            ( err ) => {
                console.error( 'An error happened' )
            }
        )

        function animate() {

            requestAnimationFrame( animate )
        
            controls.update()
        
            renderer.render( scene, camera )
        
        }
        animate()
    }

    handleChange = () => {
        console.log(1)
        this.setState({
            textures: "Grass_001_NORM.jpg"
        })
    }

    render() {
        return <>
            {/* <button onClick={this.handleChange}>
                Change texture
            </button> */}
            <div
                ref={r => this.container = r} 
                className="editor-rooms"
            ></div>
        </>
    }
}