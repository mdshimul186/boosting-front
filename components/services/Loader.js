import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
    {...props}
  >
    <rect x="-12" y="7" rx="2" ry="2" width="400" height="312" /> 
    <rect x="0" y="335" rx="0" ry="0" width="385" height="33" /> 
    <rect x="119" y="384" rx="0" ry="0" width="158" height="22" /> 
    <rect x="19" y="419" rx="0" ry="0" width="353" height="84" />
  </ContentLoader>
)

export default MyLoader