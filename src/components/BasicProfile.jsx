

export function BasicProfile(props) {

    const {basicInfo,contactInfo,linkInfo}=props
    const {name, mobNum, emailAdd}=basicInfo
    const {profImglink, iconClName, imgClName, nameClName, addClName, contactClName,gDIconLink, resumeLink}=linkInfo
    const {fbLink, lILink, fbIconLink, liIconLink, emailIcon, emailLink}=contactInfo


  return (
    <div className="section-content-div">
        <div className="top-info-div">
            <img className={imgClName} src={profImglink}/>
                <span className={nameClName}><h3>Name: {name}</h3></span>
                <span className="mobile-number-span"><h3>Mobile Number: {mobNum}</h3></span>
                <span className="email-span">
                    <h3>Email Address: {emailAdd}
                    <a href={emailLink} target='blank'><img className={iconClName} src={emailIcon}/></a></h3>
                </span>
            <span className="resume-span">
                <h3>Resume PDF:<a href={resumeLink}  target="_blank"><img className={iconClName} src={gDIconLink}/></a></h3>
            </span>
        </div>
    </div>
  )
}
