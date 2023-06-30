const USERS=[
    {
        user_name:'sepideh238',
        password:'1978238'
    }
]
const user=document.getElementById('user');
const pass=document.getElementById('pass');
const btn=document.getElementById('btn');

btn.addEventListener('click',(e)=> {
    e.preventDefault();
    USERS.map(el => {
        if (user.value === el.user_name && pass.value === el.password){
            window.localStorage.setItem('userName', JSON.stringify(user.value))
            const greet=document.getElementById('message');
            greet.innerText=`خوش آمدید ${el.user_name}`;
        }
else{
    const greet=document.getElementById('message');
   greet.innerText='اطلاعات صحیح نیست';
   

}
        })
    })


