import {Html ,  useProgress} from "@react-three/drei"

const Loader = () => {
  const { progress }  = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p style={{fontSize : 20,
      color: "white", fontWeight : 800 , marginTop : 50 }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader