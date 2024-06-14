

export function BasicProfile(props) {

    const {basicInfo,contactInfo,linkInfo}=props
    const {name, mobNum, emailAdd}=basicInfo
    const {profImglink, iconClName, imgClName, nameClName, addClName, contactClName,gDIconLink, resumeLink}=linkInfo
    const {fbLink, lILink, fbIconLink, liIconLink, emailIcon, emailLink}=contactInfo


  return (

    <div className="top-info-div">
        <img className={imgClName} src={profImglink}/>
        <div className="top-content-div">
            <span className={nameClName}><h3>Name: {name}</h3></span>
            <address className={addClName}>
            <span> <h3>Mobile Number: {mobNum}</h3></span>
                <span><h3>Email Address: {emailAdd}
                    <a href={emailLink} target='blank'><img className={iconClName} src={emailIcon}/></a></h3>
                </span>
                <div className={contactClName}>
                    <h3>Socials: 
                        <a href={fbLink}  target="_blank"><img className={iconClName} src={fbIconLink}/></a>
                        <a href={lILink}  target="_blank"><img className={iconClName} src={liIconLink}/></a>
                    </h3>
            </div>
        </address>
        <span><h3>Resume PDF:
        <a href={resumeLink}  target="_blank"><img className={iconClName} src={gDIconLink}/></a></h3></span>
        </div>
    </div>
  )
}
