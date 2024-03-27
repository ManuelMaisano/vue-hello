const {createApp} = Vue;

 createApp({
    data(){
        return{
            message: 'Hello Vue!',
            object: {
            name : 'Manuel',
            surname: 'Maisano',
            age : '23',
            dateofbirth: '26/06/2000'
           },
        }
    }
 }).mount('#app')

