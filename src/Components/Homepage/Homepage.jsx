import React, {useState} from 'react';
import {Layout} from "./Layout";
import {HeroSection} from "./Component/HeroSection";
import {AboutSection} from "./Component/AboutSection";
import {SocialMediaSection} from "./Component/SocialMediaSection";
import {StackOverflow} from "./Component/StackOverflow";
import {RedditComponent} from "./Component/RedditComponent";

export const Homepage = () => {
    const [userEmail, setUserEmail] = useState('default-state@email.com')
    // variableName, setVariableName = initialValue
    // it doesnt persist the value across renders, it resets to the initialValue
    // useState is a built in hook
    const [count, setCount] = useState(0)

    const user = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            country: 'USA'
        }
    }

    function updateEmail() {
        setUserEmail('the-new-value@email.com')
    }

    return (
        <Layout>
            <h1>This is user's email {userEmail}</h1>
            <h1>The current count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <HeroSection user={user}/>
            <AboutSection/>
            <SocialMediaSection firstComponent={<StackOverflow/>} secondComponent={<RedditComponent/>}/>
        </Layout>
    )
};