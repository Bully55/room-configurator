import React from "react"
import * as THREE from "three"
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
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
        var loader = new OBJLoader()
        var renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(0xff0000)
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.container.appendChild( renderer.domElement );

        loader.load(
            "LivingRoomWallA.obj",
            ( object ) => {

                
                // setInterval(() => {
                    console.log(object)
                    scene.add( object );
                // }, 1000)
        
            },
            ( xhr ) => {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },
        
            // onError callback
            ( err ) => {
                console.error( 'An error happened' );
            }
        )

        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // var cube = new THREE.Mesh( geometry, material );

        // scene.add( cube );
        camera.position.z = 5;

        // var animate = function () {
        //     requestAnimationFrame( animate );
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render( scene, camera );
        // };
        // animate();
        renderer.render( scene, camera );
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