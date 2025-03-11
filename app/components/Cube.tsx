'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Color, Vector3, MathUtils } from 'three'
import { MeshPhysicalMaterial } from 'three'

interface CubeProps {
  scrollProgress: number
}

export const Cube = ({ scrollProgress }: CubeProps) => {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<MeshPhysicalMaterial>(null)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })

  // 4段階の色を定義
  const colors = [
    new Color('#00ffff'), // アクアブルー（クリスタル）
    new Color('#ff1493'), // ディープピンク（プリズム）
    new Color('#4b0082'), // インディゴ（ミスティック）
    new Color('#ffd700')  // ゴールド（メタリック）
  ]

  // 現在のステージ（0-3）を計算
  const normalizedProgress = Math.min(Math.max(scrollProgress, 0), 0.99)
  const totalProgress = normalizedProgress * 4 // 0から4の値

  // 現在のステージと次のステージの色を補間
  const colorIndex = Math.floor(totalProgress)
  const colorProgress = totalProgress % 1
  const currentColor = colors[colorIndex].clone()
  const nextColor = colors[Math.min(colorIndex + 1, 3)]
  currentColor.lerp(nextColor, colorProgress)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // 基本の回転速度
      const baseRotationSpeed = 0.2

      // スクロールに応じた回転速度の変化
      const rotationMultiplier = 1 + Math.sin(totalProgress * Math.PI / 2)
      
      // 回転の目標値を計算
      const targetRotationY = totalProgress * Math.PI // Y軸の回転は進行に応じて増加
      const targetRotationX = Math.sin(totalProgress * Math.PI / 2) * 0.5 // X軸の回転は周期的
      const targetRotationZ = Math.sin(totalProgress * Math.PI) * 0.3 // Z軸の回転も周期的

      // 現在の回転値を目標値に向けて補間
      rotationRef.current.y += (targetRotationY - rotationRef.current.y) * delta * 2
      rotationRef.current.x += (targetRotationX - rotationRef.current.x) * delta * 2
      rotationRef.current.z += (targetRotationZ - rotationRef.current.z) * delta * 2

      // 基本の回転アニメーションを追加
      rotationRef.current.y += delta * baseRotationSpeed * rotationMultiplier

      // 回転値を適用
      meshRef.current.rotation.x = rotationRef.current.x
      meshRef.current.rotation.y = rotationRef.current.y
      meshRef.current.rotation.z = rotationRef.current.z

      // スケールのスムーズな変化
      const baseScale = 1 + (Math.sin(totalProgress * Math.PI / 2) * 0.2)
      const pulseScale = Math.sin(state.clock.elapsedTime * 2) * 0.03
      const targetScale = baseScale + pulseScale
      
      // スケールを補間
      meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), delta * 3)

      // 位置の変化
      const targetY = Math.sin(totalProgress * Math.PI) * 0.5 // 上下の動き
      const targetX = Math.sin(totalProgress * Math.PI * 2) * 0.3 // 左右の動き
      meshRef.current.position.lerp(new Vector3(targetX, targetY, 0), delta * 2)
    }

    if (materialRef.current) {
      // マテリアルプロパティのスムーズな変化
      const materialProgress = totalProgress / 4 // 0から1の値に正規化

      materialRef.current.transmission = MathUtils.lerp(0.9, 0, materialProgress)
      materialRef.current.metalness = MathUtils.lerp(0, 1, materialProgress)
      materialRef.current.roughness = MathUtils.lerp(0.1, 0.4, materialProgress)
      materialRef.current.clearcoat = 1
      materialRef.current.clearcoatRoughness = MathUtils.lerp(0, 0.4, materialProgress)
      materialRef.current.ior = MathUtils.lerp(2.5, 1.5, materialProgress)
      materialRef.current.envMapIntensity = MathUtils.lerp(1, 3, materialProgress)
      materialRef.current.color = currentColor
      materialRef.current.attenuationColor = currentColor
      materialRef.current.attenuationDistance = MathUtils.lerp(1, 0.1, materialProgress)
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color={currentColor}
        transmission={0.9}
        thickness={0.5}
        metalness={0.1}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        ior={2.5}
        envMapIntensity={1}
        attenuationColor={currentColor}
        attenuationDistance={1}
      />
    </mesh>
  )
} 