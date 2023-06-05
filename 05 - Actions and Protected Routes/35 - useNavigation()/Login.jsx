import React from "react"
import {
    Form,
    useActionData,
    redirect
} from "react-router-dom"

async function fakeLoginUser(creds) {
    if (creds.email === "b@b.com" && creds.password === "p123") {
        localStorage.setItem("loggedin", true)
        return {
            email: creds.email,
            token: "1234567890abcdef"
        }
    }
    throw new Error("Couldn't log the user in")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const user = await fakeLoginUser({ email, password })
        const fuck = redirect("/protected")
        console.log('fuck', fuck)
        return fuck; // 重定向后, 路由组件发生变化, action对应的组件(<Login/>) 会渲染,但 useActionData() 不会获得数据
    } catch (err) {
        return err.message
    }
}

export default function Login() {
    const errorMessage = useActionData()
    console.log('fuck errorMessage', errorMessage)

    return (
        <Form method="post" replace>
            <h2>Login</h2>
            {errorMessage && <h4 className="red">{errorMessage}</h4>}
            <input
                type="email"
                name="email"
                placeholder="Email address"
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
            />
            <br />
            <button>Log in</button>
        </Form>
    )
}