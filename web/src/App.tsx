import React, { useEffect } from 'react'
import './App.css'
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Layout } from 'antd'
import { useRootStore, useLoginStore } from './index'
import { HeaderLayout } from './Layouts/HeaderLayout'
import Card_box from './Layouts/Card_box';
import {Local} from './Layouts/Local'
import { FooterNow } from './Layouts/FooterFor';
import { ContentLayout } from './Layouts/ContentLayout'


const dogsList = [
    {
        breed:"Doberman",
        family:"dog",
        nrLegs:4,
        gender:"male",
        age:3,
        nickname:"Doggy",
        ownerName:"Ivan",
        photo:"https://i.ibb.co/1GPZtX0/Doggy.jpg"

    },
    {
        breed:"Buldog",
        family:"dog",
        nrLegs:4,
        gender:"female",
        age:2,
        nickname:"Larra",
        ownerName:"Evanesa",
        photo:"https://i.ibb.co/1LhZNxN/Larra.jpg"

    },
    {
        breed:"Pitbull",
        family:"dog",
        nrLegs:4,
        gender:"male",
        age:5,
        nickname:"tRex",
        ownerName:"Petru",
        photo:"https://i.ibb.co/9yJ7WNP/tRex.jpg"

    },



]
function App() {

    const rootStore = useRootStore();
    const loginStore = useLoginStore();

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])
    
    useEffect(() => {
        loginStore.setInitialStorageContents()
    }, [])

    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
            </Layout>

            {/*<Card_box
                Dogs={dogsList}
            />*/}

        </>
    )
}


export default App