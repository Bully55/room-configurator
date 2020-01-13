import React from "react"
import * as THREE from "three"
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import OBJLoader from "three-obj-loader"
// new OBJLoader(THREE)
// OBJLoader.constructor(THREE)

export interface EditorRoomsProps {}

export interface EditorRoomsState {}

export default
class EditorRooms
extends React.Component<EditorRoomsProps, EditorRoomsState> {

    container: HTMLDivElement

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var objLoader = new OBJLoader()
        var renderer = new THREE.WebGLRenderer()
        let controls = new OrbitControls(camera, renderer.domElement)

        camera.position.set( 0, 0, 100 )
        controls.update()

        renderer.setClearColor(0x808080)
        renderer.setSize( window.innerWidth - 400, window.innerHeight - 150 )
        this.container.appendChild( renderer.domElement )

        objLoader.load(
            "./static/objects/LivingRoom_WallAttach.obj",
            ( object ) => {
                object.position.x = -860
                object.position.y = -260
                object.position.z = 200

                console.log(object)
                scene.add( object )
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

    render() {
        return <>
            <div
                ref={r => this.container = r} 
                className="editor-rooms"
            ></div>
        </>
    }
}