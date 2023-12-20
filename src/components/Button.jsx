
function Button({children,type="button",bgColor="bg-green-600",className="",...props}) {
  return (
    <button className={`w-full p-2 rounded-lg text-white shadow-md ${className} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button;