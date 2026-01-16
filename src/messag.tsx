function Message() {
    const names = '';
    if(names){return <h1>Hello {names}</h1> ; }
    else{
        return <h1>Hello, you didnt provide a names</h1>
    }
   
}

export default Message;