import RootStore from "./RootStore";

const storeProvider = RootStore.create({
    contents:[
        {
            id: '1',
            title: 'Name',
            description: 'Type same text',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Teacher s name',
            description: 'Type same text',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Group name',
            description: 'Type same text',
            seen: false,
            notes: '',

        },
        {
            id: '4',
            title: 'Dog name',
            description: 'Some text',
            seen: true,
            notes: 'Some',

        }
    ]
})

export default storeProvider;