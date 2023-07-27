let rerernderEntireTree =(state:any)=>{
console.log('hhh');
}
export let state = {
    posts: [
        {id: 1, message: 'Hey!Are you OK?', likesCount: 11},
        {id: 2, message: "JOhn is come in!", likesCount: 14},
    ],
    newPostText: 'Itttt',
    messagesData: [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'How is the weather like today!'},
        {id: 3, message: 'Whats up!'},
        {id: 4, message: 'Here are you!'}
    ],
    dialogsData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Tania'},
        {id: 4, name: 'Alexey'},
        {id: 5, name: 'Grisha'},
        {id: 6, name: 'Maks'}
    ],

    friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Tania'}
    ]
}
export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0

    };
    state.posts.push(newPost);
    state.newPostText='';
    rerernderEntireTree(state);
}
export let updateNewPostText = (newText: string) => {

    state.newPostText = newText;
    rerernderEntireTree(state);

}
export const subscribe =(observer:any) => {
    rerernderEntireTree =observer;
}