import React from 'react'
import PORTJSON from '../utils/Portfolio.json'

import AboutCard from '../components/AboutCard/AboutCard'






function AboutPage(){

    return(
        <>
        {PORTJSON[0].AboutPage.map( about => (

            <AboutCard
                key={about.id}
                id={about.id}
                pic={about.pic}
                picLink={about.picLink}
                title={about.title}
                text={about.text}                        
            />
            )
        )}
        </>
    )
}

export default AboutPage;







