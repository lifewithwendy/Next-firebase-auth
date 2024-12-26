import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader 
        color="#fff" 
        size={50} 
        speedMultiplier={2}
        cssOverride={{
          borderWidth: '5px',
        }}
      />
    </div>
  )
}

export default Spinner
