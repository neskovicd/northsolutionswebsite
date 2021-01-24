import React from 'react'
import {ServiceIcons, Services, ServicesText, ServicesContainer, Naslov, Podnaslov, Wrapper, ServicesDescription, ServicesText2} from './ServiceElements'

function services(){
return(
    <Wrapper>
    <Naslov>Our</Naslov>
    <Podnaslov>Services</Podnaslov>

<Services>
    <ServicesContainer>
    <ServiceIcons src='https://i.ibb.co/f261RLz/013-web-development.png'>
    </ServiceIcons>
    <ServicesText>
        Building
        </ServicesText>
        <ServicesDescription>
            your dream responsive website. With use of latest techonologies, we're making responsive and fast websites.
        </ServicesDescription>
    </ServicesContainer>
    <ServicesContainer>
    <ServiceIcons src="https://i.ibb.co/mCN1DCx/035-home.png">
    </ServiceIcons>
    <ServicesText2>
         Creating
    </ServicesText2>
    <ServicesDescription>
        your dream mobile application. We're developing fast and modern mobile apps for both Android and iOS.
    </ServicesDescription>
    </ServicesContainer>

</Services>
</Wrapper>
)

}

export default services