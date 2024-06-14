import { useState } from "react"

export function Carousel({h2Text, h3Text}) {
    const carInfo = {
    carNavClname: "carousel__navigation",
    CarNavListClName: "carousel__navigation-list",
    carNavItemClName: "carousel__navigation-item",
    carNavBtClName: 'carousel__navigation-button',
    actNavClName: 'nav-button-active',
    carClName: "carousel",
    carVPClName: "carousel__viewport",
    carSClName: "carousel__slide",
    carS1RefId: "#carousel__slide1",
    carS2RefId: "#carousel__slide2",
    carS3RefId: "#carousel__slide3",
    carS4RefId: "#carousel__slide4",
    carS1Id: "carousel__slide1",
    carS2Id: "carousel__slide2",
    carS3Id: "carousel__slide3",
    carS4Id: "carousel__slide4",
    carPrevClName: "carousel__prev",
    carNextClName: "carousel__next",
    pDDivClName: 'place-date-div',
    contDivClName: 'content-div',
    xTDicClName: 'xp-text-div',
    iDivClName: 'item-div',
    }

    const {carClName,
        carVPClName,
        carSClName,
        carS1RefId,
        carS2RefId,
        carS3RefId,
        carS4RefId,
        carS1Id,
        carS2Id, 
        carS3Id,
        carS4Id,
        carNavClname,
        CarNavListClName,
        carNavItemClName,
        carNavBtClName,
        actNavClName,
        carPrevClName,
        carNextClName,
        pDDivClName,contDivClName,xTDicClName,iDivClName}  = carInfo
    
    const [activeNav, setActiveNav] = useState('nav1')

    const valueFromNavArrow = (data) => {
        setActiveNav(data)
    }

    const navLinks = [
       {id:'nav1', href:carS1RefId, actCl:actNavClName,},
       {id:'nav2', href:carS2RefId, actCl:actNavClName,},
       {id:'nav3', href:carS3RefId, actCl:actNavClName,},
       {id:'nav4', href:carS4RefId, actCl:actNavClName,},
    ]

  return (
    <>
    <div className= {carClName} aria-label="Gallery">
        <ol className={carVPClName}> 
            <li id={carS1Id} className={carSClName} tabIndex="0">  
                <a href={carS4RefId}className={carPrevClName} onClick={() => setActiveNav('nav4')}/>
                <a href={carS2RefId}className={carNextClName} onClick={() => setActiveNav('nav2')}/>
                {h2Text('Freelance - Social Media Manager')}
                <div className={pDDivClName}>    
                    {h3Text('January 2023 - December 2023')}
                </div>
                <div className={contDivClName}>
                    <div className={xTDicClName}>
                        {h3Text('Job Responsibility')}<br/>
                         <div className={iDivClName}>
                            {h3Text('•Content management including post creation, image editing, post scheduling and caption making')}
                            {h3Text('•Paid ads management including creative making, testing and scheduling')}
                        </div>
                    </div>
                </div>   
            </li>
            <li id={carS2Id} className={carSClName} tabIndex="0">   
                <a href={carS1RefId} className={carPrevClName} onClick={() => setActiveNav('nav1')}/>
                <a href={carS3RefId} className={carNextClName} onClick={() => setActiveNav('nav3')}/>
                <div className={contDivClName}>
                    {h2Text('Movate - Chat Technical Support Engineer')}
                    <div className={pDDivClName}>    
                        {h3Text('Taguig ')} 
                        {h3Text('December 2022 - April 2023')}
                
                    </div>
                    <div className={xTDicClName}>
                        {h3Text('Job Responsibility')} <br/>
                        <div className={iDivClName}>
                            {h3Text('•Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry via chat')}
                        </div>
                    </div>
                </div>
            </li>
            <li id={carS3Id} className={carSClName} tabIndex="0">   
                <a href={carS2RefId} className={carPrevClName} onClick={() => setActiveNav('nav2')}/>
                <a href={carS4RefId} className={carNextClName} onClick={() => setActiveNav('nav4')}/>
                <div className={contDivClName}>
                    {h2Text('Aventus Medical Care Inc - Database Administrator')}
                    <div className={pDDivClName}>  
                        {h3Text('Makati')}  
                        {h3Text('February 2021 - August 2022')}
                    </div>
                    <div className={xTDicClName}>
                        {h3Text('Job Responsibility')}<br/>
                        <div className={iDivClName}>
                            {h3Text('•Monitor and maintain MS SQL databases, Windows 2019 servers and, SAN and NAS storage devices')}
                            {h3Text('•Extract data using SQL Querying as per department request')}
                            {h3Text("•Implement database updates as per programmers' request")}
                            {h3Text('•Troubleshoot database and server issues')}
                            {h3Text('•Continuous research on optimizing performance of databases and servers')}
                        </div>
                    </div>
                </div>
            </li>
            <li id={carS4Id} className={carSClName} tabIndex="0"   >   
                <a href={carS3RefId} className={carPrevClName} onClick={() => setActiveNav('nav3')}/>
                <a href={carS1RefId} className={carNextClName} onClick={() => setActiveNav('nav1')}/>
                <div className={contDivClName}>
                    {h2Text('First Life Financial Co Inc - POSS Assistant')}          
                    <div className={pDDivClName}>  
                        {h3Text('Makati')}  
                        {h3Text('March 2020 - August 2020')}
                    </div> 
                    <div className={xTDicClName}>
                        {h3Text('Job Responsibility')}<br/>
                        <div className={iDivClName}>
                            {h3Text('•Manage supply inventory')}
                            {h3Text('•Create purchase order for supply replenishment')}
                            {h3Text('•Consolidate and manage office expenses including electric, internet, water and others')}
                            {h3Text('•Liase and act as focal person for tenant-related activities')}
                            {h3Text('•Manage schedule of mailmen and drivers')}
                            {h3Text('•Prepare and organize customer mails')}
                            {h3Text('•Prepare supply request from other department')}                                
                        </div>
                    </div>
                </div>
            </li>
        </ol>
    </div>

    <aside className={carNavClname}>
        <ol className={CarNavListClName}>
            {navLinks.map((link, index) => 
                <li className={carNavItemClName} key={link.id} >
                    <a href={link.href} className={activeNav === link.id ? link.actCl: carNavBtClName}  onClick={() => valueFromNavArrow(link.id)} />
                </li>)}
        </ol>
    </aside>
    </>
  )
}



