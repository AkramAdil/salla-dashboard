import Image from 'next/image'

function Avatar({src, alt, width, height,setExpanded=null,menuExpanded=null}) {
  const handleClick = () => {
    if (setExpanded && menuExpanded !== null) {
      setExpanded(!menuExpanded);
    }
  };
  return (
    <div className="round" onClick={handleClick} data-toggle="dropdown" aria-expanded="false">
        <Image src={src} alt={alt} width={width} height={height} className="rounded-full" />
    </div>
  )
}

export default Avatar