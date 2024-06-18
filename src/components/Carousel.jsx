import { useState } from "react"

export function Carousel({h2Text, h3Text}) {
    const carInfo = {
    navigation: "carousel__navigation",
    navigationList: "carousel__navigation-list",
    navigationItem: "carousel__navigation-item",
    navigationButton: 'carousel__navigation-button',
    activeNavigationButton: 'nav-button-active',
    sliderContainer: "carousel",
    sliderWrapper: "carousel__viewport",
    slider: "carousel__slide",
    slider1ReferenceId: "#carousel__slide1",
    slider2ReferenceId: "#carousel__slide2",
    Slider3ReferenceId: "#carousel__slide3",
    slider4ReferenceId: "#carousel__slide4",
    slider1Id: "carousel__slide1",
    slider2Id: "carousel__slide2",
    slider3Id: "carousel__slide3",
    slider4Id: "carousel__slide4",
    previousButton: "carousel__prev",
    nextButton: "carousel__next",
    }

    const {sliderContainer,
        sliderWrapper,
        slider,
        slider1ReferenceId,
        slider2ReferenceId,
        Slider3ReferenceId,
        slider4ReferenceId,
        slider1Id,
        slider2Id, 
        slider3Id,
        slider4Id,
        navigation,
        navigationList,
        navigationItem,
        navigationButton,
        activeNavigationButton,
        previousButton,
        nextButton,}  = carInfo
    
    const [activeNav, setActiveNav] = useState('nav1')

    const valueFromNavArrow = (data) => {
        setActiveNav(data)
    }

    const navLinks = [
       {id:'nav1', href:slider1ReferenceId, actCl:activeNavigationButton,},
       {id:'nav2', href:slider2ReferenceId, actCl:activeNavigationButton,},
       {id:'nav3', href:Slider3ReferenceId, actCl:activeNavigationButton,},
       {id:'nav4', href:slider4ReferenceId, actCl:activeNavigationButton,},
    ]

  return (
    <div className="section-content-div">
        <div className={sliderContainer}>
            <ol className={sliderWrapper}>
                <li id={slider1Id} className={slider} >
                    <a href={slider4ReferenceId}className={previousButton} onClick={() => setActiveNav('nav4')}/>
                    <a href={slider2ReferenceId}className={nextButton} onClick={() => setActiveNav('nav2')}/>
                    <div className="xp-content-div">
                        {h2Text('Freelance - Social Media Manager')}
                        {h3Text('January 2023 - December 2023')}  
                        {h3Text('Job Responsibility')} 
                        <div className="xp-list-div">
                            {h3Text('•Content management including post creation, image editing, post scheduling and caption making')}
                            {h3Text('•Paid ads management including creative making, testing and scheduling')}                        
                        </div>
                    </div>       
                </li>
                <li id={slider2Id} className={slider}>
                    <a href={slider1ReferenceId} className={previousButton} onClick={() => setActiveNav('nav1')}/>
                    <a href={Slider3ReferenceId} className={nextButton} onClick={() => setActiveNav('nav3')}/>
                    <div className="xp-content-div">
                        {h2Text('Movate - Chat Technical Support Engineer')}
                        {h3Text('Taguig ')} 
                        {h3Text('December 2022 - April 2023')} <br/>
                        {h3Text('Job Responsibility')} 
                        <div className="xp-list-div">
                            {h3Text('•Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry via chat')}
                        </div>
                    </div> 
                </li>
                <li id={slider3Id} className={slider}>
                    <a href={slider2ReferenceId} className={previousButton} onClick={() => setActiveNav('nav2')}/>
                    <a href={slider4ReferenceId} className={nextButton} onClick={() => setActiveNav('nav4')}/>
                    <div className="xp-content-div">
                        {h2Text('Aventus Medical Care Inc - Database Administrator')}                 
                        {h3Text('Makati')}  
                        {h3Text('February 2021 - August 2022')}
                        {h3Text('Job Responsibility')}<br/>
                        <div className="xp-list-div">
                            {h3Text('•Monitor and maintain MS SQL databases, Windows 2019 servers and, SAN and NAS storage devices')}
                            {h3Text('•Extract data using SQL Querying as per department request')}
                            {h3Text("•Implement database updates as per programmers' request")}
                            {h3Text('•Troubleshoot database and server issues')}
                            {h3Text('•Continuous research on optimizing performance of databases and servers')}
                        </div>
                    </div>
                </li>
                <li id={slider4Id} className={slider}>
                <a href={Slider3ReferenceId} className={previousButton} onClick={() => setActiveNav('nav3')}/>
                    <a href={slider1ReferenceId} className={nextButton} onClick={() => setActiveNav('nav1')}/>
                    <div className="xp-content-div">
                        {h2Text('First Life Financial Co Inc - POSS Assistant')}          
                        {h3Text('Makati')}  
                        {h3Text('March 2020 - August 2020')}
                        {h3Text('Job Responsibility')}<br/>
                        <div className="xp-list-div">
                            {h3Text('•Manage supply inventory')}
                            {h3Text('•Create purchase order for supply replenishment')}
                            {h3Text('•Consolidate and manage office expenses including electric, internet, water and others')}
                            {h3Text('•Liase and act as focal person for tenant-related activities')}
                            {h3Text('•Manage schedule of mailmen and drivers')}
                            {h3Text('•Prepare and organize customer mails')}
                            {h3Text('•Prepare supply request from other department')} 
                        </div>
                    </div>
                </li>
            </ol>
           </div>
        <aside className={navigation}>
            <ol className={navigationList}>
                {navLinks.map((link, index) => 
                    <li className={navigationItem} key={link.id} >
                        <a href={link.href} className={activeNav === link.id ? link.actCl: navigationButton}  onClick={() => valueFromNavArrow(link.id)} />
                    </li>)}
            </ol>
        </aside>
   </div>
  )
}



