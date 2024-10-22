import './login.less'

const LoginPage = () => {
    return(
        <div className="login_div">
            <h1>Login</h1>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </div>
    )
}


export default LoginPage