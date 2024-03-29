import { Button, Checkbox, Input } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { title, description, notes, changeNotes, isSeen, changeSeen, seen, addNote, removeNote } = content


    useEffect(() => {
        if (isSeen) {
            // alert(`Is seen ${ title }`)
            console.log('>>title', title)
        }
    }, [ isSeen ])

    return (
        <Card title={ title } bordered={ false }>
            { description }

            <Input
                value={ notes }
                placeholder={ notes }
                onChange={ (e) => changeNotes(e.target.value) }
            />


            <Button onClick={ addNote }>Add Note</Button>
            <Button type={ 'primary' } onClick={ removeNote }>Remove Note</Button>


            <Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />

        </Card>
    )

})