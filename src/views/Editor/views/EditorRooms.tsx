import React from "react"
import * as THREE from "three"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import loadObject from "../../../halpers/loadObject"
import floor from "../objects/floor"
import ceiling from "../objects/ceiling"
import door from "../objects/door"
import radiator from "../objects/radiator"
import windowObj from "../objects/window"

export interface EditorRoomsProps {}

export interface EditorRoomsState {
    textures: string
}

export default
class EditorRooms
extends React.Component<EditorRoomsProps, EditorRoomsState> {

    state = {
        textures: "text1.jpg"
    }

    container: HTMLDivElement

    componentDidMount() {
        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        let renderer = new THREE.WebGLRenderer({ antialias: true })
        let controls = new OrbitControls(camera, renderer.domElement)

        camera.position.set( 0, 0, 150 )
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

        // imageLoader.load(`./static/objects/text1.jpg`, (image) => {
        //     texture.image = image
        //     texture.needsUpdate = true
        //     texture.wrapS = 1
        //     texture.wrapT = 1
        // })

        let meshes: THREE.Mesh[] = []

        let objLoader = new OBJLoader()

        loadObject({
            path: "./static/objects/NewRoom_Wall_Change2.obj",
            x: -300,
            y: -160,
            z: -250,
            texturePath: "./static/objects/text1.jpg"
        }, scene)

        // objLoader.load(
        //     "./static/objects/NewRoom_Wall.obj",
        //     ( object ) => {
        //         console.log(object)
                
        //         object.traverse((child) => {
        //             if( child instanceof THREE.Mesh )
        //                 meshes.push(child)
        //         })

        //         let wall = meshes[0]

        //         wall.position.x = -300
        //         wall.position.y = -160
        //         wall.position.z = -250

        //         scene.add( wall )

        //         texture.repeat.set(1, 1)
        //         wall.material = new THREE.MeshPhongMaterial({
        //             map: texture
        //         })

        //         // renderer.render( scene, camera )
        //         // animate()
        //     },
        //     ( xhr ) => {
        //         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' )
        //     },
        //     ( err ) => {
        //         console.error( 'An error happened' )
        //     }
        // )

        scene.add(ceiling(manager, imageLoader))
        scene.add(floor(manager, imageLoader))
        door(scene)
        radiator(scene)
        windowObj(scene)

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