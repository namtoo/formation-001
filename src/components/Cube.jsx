import React, { useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

const ClickableCube = ({ setCameraType }) => {
    const { camera } = useThree();
    const [springProps, api] = useSpring(() => ({
        position: [camera.position.x, camera.position.y, camera.position.z],
        config: { tension: 80, friction: 20 },
        onChange: ({ value }) => {
            camera.position.set(...value.position);
            camera.lookAt(0, 0, 0); // Ensure the camera looks at the center
        },
    }));

    // Handle camera change and movement
    const moveCamera = (newPosition, newCameraType) => {
        // Switch camera type
        setCameraType(newCameraType);

        // Animate camera position
        api.start({ position: newPosition });
    };

    return (
        <group position={[10,10,0]} renderOrder={-20}>
            {/* Front face */}
            <mesh
                position={[0, 0, 1.5]}
                onClick={() => moveCamera([0, 0, 10], "orthographic")} // Move camera to front and switch to orthographic
            >
                <boxGeometry args={[1, 1, 0.1]} />
                <meshStandardMaterial color="blue" />
            </mesh>

            {/* Left face */}
            <mesh
                position={[-1.5, 0, 0]}
                onClick={() => moveCamera([-10, 0, 0], "orthographic")} // Move camera to the left and switch to orthographic
            >
                <boxGeometry args={[0.1, 1, 1]} />
                <meshStandardMaterial color="green" />
            </mesh>

            {/* Top face */}
            <mesh
                position={[0, 1.5, 0]}
                onClick={() => moveCamera([0, 10, 0], "orthographic")} // Move camera to the top and switch to orthographic
            >
                <boxGeometry args={[1, 0.1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </group>
    );
};

export default ClickableCube;