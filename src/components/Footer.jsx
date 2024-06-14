
function Footer(props) {
  const year = new Date().getFullYear()
  const {contactInfo, linkInfo}=props
  const {fbLink,lILink,fbIconLink,liIconLink,emailIcon,emailLink} = contactInfo
  const {iconClName} = linkInfo

    return (
      <>
      <footer>
        <img className={iconClName} src="img/ooga.png"></img><h3>{year} Online Resume</h3>                    
        <a href={fbLink}  target="_blank"><img className={iconClName} src={fbIconLink}/></a>
        <a href={lILink}  target="_blank"><img className={iconClName} src={liIconLink}/></a>
        <a href={emailLink}><img className={iconClName} src={emailIcon}/></a>
      </footer>
      </>
    );
  }
  
  export default Footer
  